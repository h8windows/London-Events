Given /^that category has an event:$/ do |table|
  # table is a Cucumber::Ast::Table
  table.hashes.each do |attributes|
    @category.events.create!(attributes)
  end
end

Given /^"([^\"]*)" has created an event for this category:$/ do |email, table|
  table.hashes.each do |attributes|
    attributes = attributes.merge!(:user => User.find_by_email!(email))
    @category.events.create!(attributes)
  end
end