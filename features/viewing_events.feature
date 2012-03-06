Feature: Viewing events
	In order to view the events for a category
	As a user
	I want to see them on that category's page
	
	Background:
		Given there are the following users:
		| email             | password |
		| user@example.com  | password |
		And there is a category called "Olympics"
		And "user@example.com" can view the "Olympics" category
		And I am signed in as them
		And "user@example.com" has created an event for this category:
		| title            | description               |
		| Gymnastics       | Rings and other things    |
		And there is a category called "Arts Festivals"
		And "user@example.com" can view the "Arts Festivals" category
		And "user@example.com" has created an event for this category:
		| title            | description               |
		| Dance Fest       | dancing in the streets    |
		And I am on the homepage
		
		Scenario: Viewing events for a given category
			When I follow "Olympics"
			Then I should see "Gymnastics"
			And I should not see "Dance Fest"
			When I follow "Gymnastics"
			Then I should see "Gymnastics" within "#event h2"
			And I should see "Rings and other things"
			
			When I follow "London Events"
			And I follow "Arts Festivals"
			Then I should see "Dance Fest"
			And I should not see "Gymnastics"
			When I follow "Dance Fest"
			Then I should see "Dance Fest" within "#event h2"
			And I should see "dancing in the streets"