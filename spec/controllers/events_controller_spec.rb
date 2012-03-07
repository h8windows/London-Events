require 'spec_helper'

describe EventsController do
  
  let(:user) { create_user! }
  let(:category) { Factory(:category) }
  let(:event) { Factory(:event, :category => category, :user => user) }
  
  context "standard users" do
    it "cannot access an event for a category" do
      sign_in(:user, user)
      get :show, :id => event.id, :category_id => category.id
      response.should redirect_to(root_path)
      flash[:alert].should eql("The category you were looking for could not be found.")
    end
  end
  
  context "with permission to view the category" do
    before do
      sign_in(:user, user)
      Permission.create!(:user => user, :thing => category, :action => "view")
    end
  
    def cannot_create_events!
      response.should redirect_to(category)
      flash[:alert].should eql("You cannot create events on this category.")
    end
    
    def cannot_update_events!
      response.should redirect_to(category)
      flash[:alert].should eql("You cannot modify events on this category.")
    end
  
    it "cannot begin to create an event" do
      get :new, :category_id => category.id
      cannot_create_events!
    end
  
    it "cannot create an event without permission" do
      post :create, :category_id => category.id
      cannot_create_events!
    end
    
    it "cannot update an event without permission" do
      put :update, { :category_id => category.id, :id => event.id, :event => {} }
      cannot_update_events!
    end
    
    it "cannot delete an event without permission" do
      delete :destroy, { :category_id => category.id, :id => event.id }
      response.should redirect_to(category)
      flash[:alert].should eql("You cannot delete events from this category.")
    end
  end
  
end
