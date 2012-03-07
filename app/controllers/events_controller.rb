class EventsController < ApplicationController
  
  before_filter :authenticate_user!
  before_filter :find_category
  before_filter :find_event, :only => [:show, :edit, :update, :destroy]
  #before_filter :authorize_create!, :only => [:new, :create]
  #before_filter :authorize_update!, :only => [:edit, :update]
  
  def new
    @event = @category.events.build
  end
  
  def create
    @event = @category.events.build(params[:event].merge!(:user => current_user))
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
  
  def destroy
    @event.destroy
    flash[:notice] = "Event has been deleted."
    redirect_to @category
  end
  
  private
    def find_category
      @category = Category.for(current_user).find(params[:category_id])
    rescue ActiveRecord::RecordNotFound
      flash[:alert] = "The category you were looking for could not be found."
      redirect_to root_path
    end
    
    def find_event
      @event = @category.events.find(params[:id])
    end
    
    def authorize_create!
      if !current_user.admin? && cannot?("create events".to_sym, @category)
        flash[:alert] = "You cannot create events on this category."
        redirect_to @category
      end
    end
    
    def authorize_update!
      if !current_user.admin? && cannot?(:"edit events", @category)
        flash[:alert] = "You cannot modify events on this category."
        redirect_to @category
      end
    end
end
