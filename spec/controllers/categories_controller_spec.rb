require 'spec_helper'

describe CategoriesController do
  let(:user) { create_user! }
  
  let(:category) { Factory(:category) }
  
  context "standard users" do
    
    it "cannot access the show action" do
      sign_in(:user, user)
      get :show, :id => category.id
      response.should redirect_to(categories_path)
      flash[:alert].should eql("The category you were looking for could not be found.")
    end

    { "new" => "get",
      "create" => "post",
      "edit" => "get",
      "update" => "put",
      "destroy" => "delete" }.each do |action, method|
      it "cannot access the #{action} action" do
        sign_in(:user, user)
        send(method, action.dup, :id => category.id)
        response.should redirect_to(root_path)
        flash[:alert].should eql("You must be an admin to do that.")
      end
    end
  end
  
  it "displays an error for a missing category" do
    sign_in(:user, user)
    get :show, :id => "not-here"
    response.should redirect_to(categories_path)
    message = "The category you were looking for could not be found."
    flash[:alert].should eql(message)
  end

end
