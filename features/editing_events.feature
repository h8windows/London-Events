Feature: Editing events
	In order to alter event information
	As a user
	I want a form to edit the events
	
	Background:
		Given there is a category called "Olympics"
		And that category has an event:
		| title               | description              |
		| Gymnastics          | Rings and lots of things |
		Given I am on the homepage
		When I follow "Olympics"
		And I follow "Gymnastics"
		When I follow "Edit Event"
		
		Scenario: Updating an event
			When I fill in "Title" with "Basketball"
			And I press "Update Event"
			Then I should see "Event has been updated."
			And I should see "Basketball" within "#event h2"
			But I should not see "Gymnastics"
			
		Scenario: Updating an event with invalid information
			When I fill in "Title" with ""
			And I press "Update Event"
			Then I should see "Event has not been updated."
