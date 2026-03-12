Feature: Reqres Delete User API

  @smoke
  Scenario: Delete an existing user
    Given I have the delete user endpoint
    When I send a DELETE request for user with id 2
    Then the response status code should be 204

  @negative
  Scenario: Delete a user that does not exist
    Given I have the delete user endpoint
    When I send a DELETE request for user with id 999
    Then the response status code should be 204