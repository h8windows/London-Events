Feature: Creating categories
	In order to have categories to assign events to
	As a user
	I want to create them easily
	
	Background:
		Given there are the following users:
		| email             | password | admin |
		| admin@example.com | password | true  |
		And I am signed in as them
		Given I am on the homepage
		When I follow "New Category"
	
	Scenario: Creating a category
		And I fill in "Category name" with "Olympics"
		And I press "Create Category"
		Then I should see "Category has been created."
		And I should be on the category page for "Olympics"
		And I should see "Category - Olympics - London Events"
		
	Scenario: Creating a category without a name
		And I press "Create Category"
		Then I should see "Category has not been created."
		And I should see "Name can't be blank"