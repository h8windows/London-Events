class CategoriesController < ApplicationController
  
  def index
    
  end
  
  def new
    @category = Category.new
  end
  
  def create
    @category = Category.new(params[:category])
    @category.save
    flash[:notice] = "Category has been created."
    redirect_to @category
  end
  
  def show
    @category = Category.find(params[:id])
  end
  
end
