class EventsController < ApplicationController
  
  before_filter :find_category
  before_filter :find_event, :only => [:show, :edit, :update, :destroy]
  
  def new
    @event = @category.events.build
  end
  
  def create
    @event = @category.events.build(params[:event])
    if @event.save
      flash[:notice] = "Event has been created."
      redirect_to [@category, @event]
    else
      flash[:alert] = "Event has not been created."
      render :action => "new"
    end
  end
  
  def show
    #taken care of by find_event
  end
  
  def edit
    
  end
  
  def update
    if @event.update_attributes(params[:event])
      flash[:notice] = "Event has been updated."
      redirect_to [@category, @event]
    else
      flash[:alert] = "Event has not been updated."
      render :action => "edit"
    end
  end
  
  private
    def find_category
      @category = Category.find(params[:category_id])
    end
    
    def find_event
      @event = @category.events.find(params[:id])
    end
  
end
