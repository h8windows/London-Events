Feature: Creating categories
	In order to have categories to assign events to
	As a user
	I want to create them easily
	
	Scenario:
		Given I am on the homepage
		When I follow "New Category"
		And I fill in "Category name" with "Olympics"
		And I press "Create Category"
		Then I should see "Category has been created."
		And I should be on the category page for "Olympics"
		And I should see "Category - Olympics - London Events"