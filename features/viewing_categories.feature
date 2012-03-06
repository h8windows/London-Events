Feature: Viewing categories
	In order to assign events to categories
	As a user
	I want to be able to see the available categories
	
	Background:
		Given there are the following users:
		| email            | password |
		| user@example.com | password |
		And I am signed in as them
		And there is a category called "Olympics"
		And "user@example.com" can view the "Olympics" category
	
	Scenario: Listing all categories
		And I am on the homepage
		When I follow "Olympics"
		Then I should be on the category page for "Olympics"