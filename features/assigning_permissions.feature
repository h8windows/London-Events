Feature: Assigning permissions
	In order to set up user with the correct permissions
	As an admin
	I want to check all the boxes
	
	Background:
		Given there are the following users:
		| email                 | password | admin |
		| admin@example.com     | password | true  |
		And I am signed in as them
		
		And there are the following users:
		| email               | password | name     |
		| user@example.com    | password | Billybob |
		And there is a category called "Olympics"
		And "user@example.com" has created an event for this category:
		| title            | description                |
		| Gymnastics       | Rings and other things     |
		
		When I follow "Admin"
		And I follow "Users"
		And I follow "Billybob"
		And I follow "Permissions"
		
		Scenario: Viewing a category
			When I check "View" for "Olympics"
			And I press "Update"
			And I follow "Sign out"
			
			Given I am signed in as "user@example.com"
			Then I should see "Olympics"
			
		Scenario: Creating events for a category
			When I check "View" for "Olympics"
			And I check "Create events" for "Olympics"
			And I press "Update"
			And I follow "Sign out"
			
			Given I am signed in as "user@example.com"
			When I follow "Olympics"
			And I follow "New Event"
			And I fill in "Title" with "Gymnastics"
			And I fill in "Description" with "Rings and other things"
			And I press "Create"
			Then I should see "Event has been created."
			
		Scenario: Updating events for a category
			When I check "View" for "Olympics"
			And I check "Edit events" for "Olympics"
			And I press "Update"
			And I follow "Sign out"
			
			Given I am signed in as "user@example.com"
			When I follow "Olympics"
			And I follow "Gymnastics"
			And I follow "Edit"
			And I fill in "Title" with "Men's Gymnastics"
			And I press "Update"
			Then I should see "Event has been updated."
			
		Scenario: Deleting events for a category
			When I check "View" for "Olympics"
			And I check "Delete events" for "Olympics"
			And I press "Update"
			And I follow "Sign out"
			
			Given I am signed in as "user@example.com"
			When I follow "Olympics"
			And I follow "Gymnastics"
			And I follow "Delete"
			Then I should see "Event has been deleted."