Feature: Reqres Login API

  @smoke
  Scenario: Successful login with valid credentials
    Given I have the login endpoint
    When I send a POST request with email "eve.holt@reqres.in" and password "cityslicka"
    Then the response status code should be 200
    And the response should contain a token

  @negative
  Scenario: Login fails with invalid credentials
    Given I have the login endpoint
    When I send a POST request with email "invalid@email.com" and password "wrongpass"
    Then the response status code should be 400
    And the response should contain an error message