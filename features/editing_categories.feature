Feature: Editing categories
	In order to update category information
	As a user
	I want to be able to do that through an interface
	
	Background:
		Given there are the following users:
		| email             | password | admin |
		| admin@example.com | password | true  |
		And I am signed in as them
		Given there is a category called "Olympics"
		And I am on the homepage
		When I follow "Olympics"
		And I follow "Edit Category"
	
	Scenario: Updating a category
		And I fill in "Category name" with "Olympics 2012"
		And I press "Update Category"
		Then I should see "Category has been updated."
		Then I should be on the category page for "Olympics 2012"
		
	Scenario: Updating a category with blank name
		And I fill in "Category name" with ""
		And I press "Update Category"
		Then I should see "Category has not been updated."
