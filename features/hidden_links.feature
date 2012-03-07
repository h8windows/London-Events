Feature: Hidden links
	In order to clean up the user experience
	As the system
	I want to hide links from users who can't act on them
	
	Background:
		Given there are the following users:
		| email             | password | admin |
		| user@example.com  | password | false |
		| admin@example.com | password | true  |
		And there is a category called "Olympics"
		And "user@example.com" can view the "Olympics" category
		And "user@example.com" has created an event for this category:
		| title             | description                        |
		| Gymnastics        | Rings and lots of other things     |
		
		Scenario: New category link is hidden for non-signed-in users
			Given I am on the homepage
			Then I should not see the "New Category" link
			
		Scenario: New category link is hidden for signed-in users
			Given I am signed in as "user@example.com"
			Then I should not see the "New Category" link
			
		Scenario: New category link is shown to admins
			Given I am signed in as "admin@example.com"
			Then I should see the "New Category" link
			
		Scenario: Edit category link is hidden for signed-in users
			Given I am signed in as "user@example.com"
			When I follow "Olympics"
			Then I should not see the "Edit Category" link
			
		Scenario: Edit category link is shown to admins
			Given I am signed in as "admin@example.com"
			When I follow "Olympics"
			Then I should see the "Edit Category" link
			
		Scenario: Delete category link is hidden from signed-in users
			Given I am signed in as "user@example.com"
			When I follow "Olympics"
			Then I should not see the "Delete Category" link
			
		Scenario: Delete category link is shown to admins
			Given I am signed in as "admin@example.com"
			When I follow "Olympics"
			Then I should see the "Delete Category" link
			
		Scenario: New event link is shown to a user with permssion
			Given "user@example.com" can view the "Olympics" category
			And "user@example.com" can create events on the "Olympics" category
			And I am signed in as "user@example.com"
			When I follow "Olympics"
			Then I should see "New Event"
			
		Scenario: New event link is hidden from users without permission
			Given "user@example.com" can view the "Olympics" category
			And I am signed in as "user@example.com"
			When I follow "Olympics"
			Then I should not see the "New Event" link
			
		Scenario: New event link is shown to admins
			Given I am signed in as "admin@example.com"
			When I follow "Olympics"
			Then I should see the "New Event" link
			
		Scenario: Edit event link is show to a user with permission
			Given "user@example.com" can view the "Olympics" category
			And "user@example.com" can edit events on the "Olympics" category
			And I am signed in as "user@example.com"
			When I follow "Olympics"
			And I follow "Gymnastics"
			Then I should see the "Edit" link
			
		Scenario: Edit event link is hidden from users without permissions
			Given "user@example.com" can view the "Olympics" category
			And I am signed in as "user@example.com"
			When I follow "Olympics"
			And I follow "Gymnastics"
			Then I should not see the "Edit" link
			
		Scenario: Edit event link is shown to admins
			Given I am signed in as "admin@example.com"
			When I follow "Olympics"
			And I follow "Gymnastics"
			Then I should see the "Edit" link
			
		Scenario: Delete event link is show to a user with permission
			Given "user@example.com" can view the "Olympics" category
			And "user@example.com" can delete events on the "Olympics" category
			And I am signed in as "user@example.com"
			When I follow "Olympics"
			And I follow "Gymnastics"
			Then I should see the "Delete" link

		Scenario: Delete event link is hidden from users without permissions
			Given "user@example.com" can view the "Olympics" category
			And I am signed in as "user@example.com"
			When I follow "Olympics"
			And I follow "Gymnastics"
			Then I should not see the "Delete" link

		Scenario: Delete event link is shown to admins
			Given I am signed in as "admin@example.com"
			When I follow "Olympics"
			And I follow "Gymnastics"
			Then I should see the "Delete" link	