Feature: Deleting tickets
	In order to remove tickets
	As a user
	I want to press a button and make them disappear
	
	Background:
		Given there are the following users:
		| email              | password |
		| user@example.com   | password | 
		And I am signed in as them
		Given there is a category called "Olympics"
		And "user@example.com" can view the "Olympics" category
		And "user@example.com" has created an event for this category:
		| title                 | description              |
		| Gymnastics            | Rings and other things   |
		Given I am on the homepage
		When I follow "Olympics"
		And I follow "Gymnastics"
		
		Scenario: Deleting an event
			When I follow "Delete Event"
			Then I should see "Event has been deleted."
			And I should be on the category page for "Olympics"