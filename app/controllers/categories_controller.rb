class CategoriesController < ApplicationController
  
  def index
    @categories = Category.all
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
  
end
