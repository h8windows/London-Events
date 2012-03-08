class Api::V1::CategoriesController < Api::V1::BaseController
  
  before_filter :authorize_admin!, :except => [:index, :show]
  before_filter :find_category, :only => [:show, :update]
  
  respond_to :xml, :json, :js, :html
  
  def index
    #respond_with(Category.for(current_user))
    @categories = Category.all
    respond_with(@categories) do |format|
      format.js {render :json => @categories, :include => [:events], :callback => params[:callback]}
      #format.js {render :json => @categories, :callback => params[:callback]}
      format.xml { render :xml => @categories, :include => [:events]}
    end
  end
  
  def create
    category = Category.create(params[:category])
    if category.valid?
      respond_with(category, :location => api_v1_category_path(category))
    else
      respond_with(category)
    end
  end
  
  def show
    #respond_with(@category, :methods => "feature")
        respond_with(@category) do |format|
          format.js {render :json => @category, :include => [:events], :callback => params[:callback] }
          format.xml { render :xml => @category, :include => [:events] }
        end
  end
  
  def update
    @category.update_attributes(params[:category])
    respond_with(@category)
  end
  
  private
    def find_category
    @category = Category.for(current_user).find_by_remoteId(params[:id])
    rescue ActiveRecord::RecordNotFound
      error = { :error => "The category you were looking for could not be found." }
      respond_with(error, :status => 404)
    end
    
end