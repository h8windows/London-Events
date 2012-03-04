Feature: Viewing categories
	In order to assign events to categories
	As a user
	I want to be able to see the available categories
	
	Scenario: Listing all categories
		Given there is a category called "Olympics"
		And I am on the homepage
		When I follow "Olympics"
		Then I should be on the category page for "Olympics"