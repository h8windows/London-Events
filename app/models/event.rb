class Event < ActiveRecord::Base
  belongs_to :category
  
  validates :title, :presence => true
  validates :description, :presence => true, :length => { :minimum => 10 }
end
