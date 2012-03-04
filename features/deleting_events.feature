Feature: Deleting tickets
	In order to remove tickets
	As a user
	I want to press a button and make them disappear
	
	Background:
		Given there is a category called "Olympics"
		And that category has an event:
		| title                 | description              |
		| Gymnastics            | Rings and other things   |
		Given I am on the homepage
		When I follow "Olympics"
		And I follow "Gymnastics"
		
		Scenario: Deleting an event
			When I follow "Delete Event"
			Then I should see "Event has been deleted."
			And I should be on the category page for "Olympics"