class Api::V1::EventsController < Api::V1::BaseController
  
  before_filter :find_category
  before_filter :find_event, :only => [:update]
  
  respond_to :xml, :json, :js, :html
  
  def show
      @event = Event.find_by_remoteId(params[:id])

      respond_with(@event) do |format|
        format.js {render :json => @event, :callback => params[:callback]}
        format.xml { render :xml => @event}
      end
    end
  
  def index
    respond_with(@category.events) do |format|
      format.js {render :json => @category.events, :callback => params[:callback]}
      format.xml { render :xml => @category.events}
    end
  end
    
  def create
    event = @category.events.create(params[:event])
    #Event.create(params[:event])
      respond_with(event, :location => api_v1_category_path(event))
  end
  
  
  def update
      @event = Event.find_by_remoteId(params[:id])

      respond_to do |format|
        if @event.update_attributes(params[:event])
          format.js  { head :ok }
          format.xml  { head :ok }
          format.html { head :ok }
        else
          format.js { render :json => @event.errors, :status => :unprocessable_entity }
          format.xml  { render :xml => @event.errors, :status => :unprocessable_entity }
        end
      end
    end
  
  private
    def find_category
    @category = Category.for(current_user).find_by_remoteId(params[:category_id])
    rescue ActiveRecord::RecordNotFound
      error = { :error => "The category you were looking for could not be found." }
      respond_with(error, :status => 404)
    end
    
    def find_event
      @event = @category.events.find_by_remoteId(params[:id])
    end 
    
end