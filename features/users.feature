Feature: Reqres Users API

  @smoke
  Scenario: Get lists of users
    Given I have the users endpoint
    When I send a GET request to fetch users on page 1
    Then the response status code should be 200
    And the response should contain a list of users

  @smoke
  Scenario: Get a single user
    Given I have the users endpoint
    When I send a GET request to fetch user with id 2
    Then the response status code should be 200
    And the response should contain user details

  @negative
  Scenario: Get a user that does not exist
    Given I have the users endpoint
    When I send a GET request to fetch user with id 999
    Then the response status code should be 404