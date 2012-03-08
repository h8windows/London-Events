require "spec_helper"
describe "api/v1/categories", :type => :api do
  let(:user) { create_user! }
  let(:token) { user.authentication_token }
  
  before do
    @category = Factory(:category)
    user.permissions.create!(:action => "view", :thing => @category)
  end
  
  context "categories viewable by this user" do
    
    before do
      Factory(:category, :name => "Access Denied")
    end
    
    let(:url) { "/api/v1/categories" }
    it "json" do
      get "#{url}.json"
      
      categories_json = Category.for(user).all.to_json
      last_response.body.should eql(categories_json)
      last_response.status.should eql(200)
      
      categories = JSON.parse(last_response.body)
      
      categories.any? do |c|
        c["name"] == "Olympics"
      end.should be_true
      
      categories.any? do |c|
        c["name"] == "Access Denied"
      end.should be_false
    end
  end
end