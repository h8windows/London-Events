Feature: Creating events
	In order to create events for categories
	As a user
	I want to be able to select a category and do that
	
	Background:
		Given there is a category called "Olympics"
		And there are the following users:
		| email              | password |
		| user@example.com   | password |
		And I am on the homepage
		When I follow "Olympics"
		And I follow "New Event"
		Then I should see "You need to sign in before continuing."
		When I fill in "Email" with "user@example.com"
		And I fill in "Password" with "password"
		And I press "Sign in"
		Then I should see "New Event"
		
		Scenario: Creating an event
			When I fill in "Title" with "Gymnastics"
			And I fill in "Description" with "Rings and lots of other things."
			And I press "Create Event"
			Then I should see "Event has been created."
			Then I should see "Author: user@example.com"
			
		Scenario: Creating an event with invalid attributes fails
			When I press "Create Event"
			Then I should see "Event has not been created."
			And I should see "Title can't be blank"
			And I should see "Description can't be blank"
			
		Scenario: Description must be longer than 10 characters
			When I fill in "Title" with "Rings"
			And I fill in "Description" with "too short"
			And I press "Create Event"
			Then I should see "Event has not been created."
			And I should see "Description is too short"