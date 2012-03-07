permission_step = /^"([^"]*)" can ([^"]*?) ([o|i]n)?\s?the "([^"]*)" category$/
Given permission_step do |user, permission, on, category|
  create_permission(user, find_category(category), permission)
end

When /^I check "([^"]*)" for "([^"]*)"$/ do |permission, name|
  category = Category.find_by_name!(name)
  permission = permission.downcase.gsub(" ", "_")
  field_id = "permissions_#{category.id}_#{permission}"
  steps(%Q{When I check "#{field_id}"})
end

def create_permission(email, object, action)
  Permission.create!(:user => User.find_by_email!(email), :thing => object, :action => action)
end

def find_category(name)
  Category.find_by_name!(name)
end