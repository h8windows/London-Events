Feature: Deleting categories
	In order to remove needless categories
	As a user
	I want to make them go away
	
	Background:
		Given there are the following users:
		| email             | password | admin |
		|admin@example.com  | password | true  |
		And I am signed in as them
	
	Scenario: Deleting a category
		Given there is a category called "Olympics"
		And I am on the homepage
		When I follow "Olympics"
		And I follow "Delete Category"
		Then I should see "Category has been deleted"
		Then I should not see "Olympics"