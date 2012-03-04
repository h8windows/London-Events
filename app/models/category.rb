class Category < ActiveRecord::Base
  
  has_many :events, :dependent => :delete_all
  
  validates :name, :presence => true
  
end
