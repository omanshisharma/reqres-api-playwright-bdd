Feature: Reqres Create User API

  @smoke
  Scenario: Create a new user successfully
    Given I have the create user endpoint
    When I send a POST request to create a user with name "John" and job "QA Engineer"
    Then the response status code should be 201
    And the response should contain the created user details

  @smoke
  Scenario: Create a user with different details
    Given I have the create user endpoint
    When I send a POST request to create a user with name "Omanshi" and job "Automation Tester"
    Then the response status code should be 201
    And the response should contain the created user details