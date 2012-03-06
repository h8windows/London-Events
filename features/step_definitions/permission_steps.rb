Given /^"([^"]*)" can view the "([^"]*)" category$/ do |user, category|
  Permission.create!(:user => User.find_by_email!(user), :thing => Category.find_by_name!(category), :action => "view")
end