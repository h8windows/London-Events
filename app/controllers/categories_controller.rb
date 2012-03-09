class CategoriesController < ApplicationController
  
  before_filter :authorize_admin!, :except => [:index, :show]
  before_filter :authenticate_user!, :only => [:index, :show]
  before_filter :find_category, :only => [:show, :edit, :update, :destroy]
  
  def index
    #@categories = Category.for(current_user).all
    @categories = Category.includes(:events).order("events.updated_at DESC")
  end
  
  def new
    @category = Category.new
  end
  
  def create
    @category = Category.new(params[:category])
    if @category.save
      flash[:notice] = "Category has been created."
      redirect_to @category
    else
      flash[:alert] = "Category has not been created."
      render :action => "new"
    end
  end
  
  def show
    @category = Category.find(params[:id])
  end
  
  def edit
    @category = Category.find(params[:id])
  end
  
  def update
    @category = Category.find(params[:id])
    if @category.update_attributes(params[:category])
      flash[:notice] = "Category has been updated."
      redirect_to @category
    else
      flash[:alert] = "Category has not been updated."
      render :action => "edit"
    end
  end
  
  def destroy
    @category = Category.find(params[:id])
    @category.destroy
    flash[:notice] = "Category has been deleted."
    redirect_to categories_path
  end
  
  private
    def find_category
      @category = Category.for(current_user).find(params[:id])
      rescue ActiveRecord::RecordNotFound
      flash[:alert] = "The category you were looking for could not be found."
      redirect_to categories_path
    end
  
end
