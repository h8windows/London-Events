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
		
		Scenario: New category link is hidden for non-signed-in users
			Given I am on the homepage
			Then I should not see the "New Category" link
			
		Scenario: New category link is hidden for signed-in users
			Given I am signed in as "user@example.com"
			Then I should not see the "New Category" link
			
		Scenario: New category link is shown to admins
			Given I am signed in as "admin@example.com"
			Then I should see the "New Category" link
			
		Scenario: Edit category link is hidden from non-signed-in users
			Given I am on the homepage
			When I follow "Olympics"
			Then I should not see the "Edit Category" link
			
		Scenario: Edit category link is hidden for signed-in users
			Given I am signed in as "user@example.com"
			When I follow "Olympics"
			Then I should not see the "Edit Category" link
			
		Scenario: Edit category link is shown to admins
			Given I am signed in as "admin@example.com"
			When I follow "Olympics"
			Then I should see the "Edit Category" link
			
		Scenario: Delete category link is hidden from non-signed-in users
			Given I am on the homepage
			When I follow "Olympics"
			Then I should not see the "Delete Category" link
			
		Scenario: Delete category link is hidden from signed-in users
			Given I am signed in as "user@example.com"
			When I follow "Olympics"
			Then I should not see the "Delete Category" link
			
		Scenario: Delete category link is shown to admins
			Given I am signed in as "admin@example.com"
			When I follow "Olympics"
			Then I should see the "Delete Category" link