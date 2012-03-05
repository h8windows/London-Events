Feature: Deleting users
	In order to remove users
	As an admin
	I want to click a button and delete them
	
	Background:
		Given there are the following users:
		| email             | password | admin  | name     |
		| admin@example.com | password | true   | admin    |
		| user@example.com  | password | false  | Joebob   |
		And I am signed in as "admin@example.com"
		Given I am on the homepage
		When I follow "Admin"
		And I follow "Users"
		
		Scenario: Deleting a user
			And I follow "Joebob"
			When I follow "Delete User"
			Then I should see "User has been deleted"
			
		Scenario: Users cannot delete themselves
			When I follow "admin"
			And I follow "Delete User"
			Then I should see "You cannot delete yourself!"