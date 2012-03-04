Given /^there is a category called "([^"]*)"$/ do |name|
  @category = Factory(:category, :name => name)
end