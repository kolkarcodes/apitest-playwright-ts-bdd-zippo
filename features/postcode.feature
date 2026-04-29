Feature: Zippopotam API postcode lookup

  As a 3rd party Developer
  I want to access postcode information
  So that I can retrieve valid data for US and Great Britain

  Background:
    Given the API base URL is configured

  # Positive scenarios
  Scenario: Get valid US postcode details
    When I request postcode "90210" for country "us"
    Then the response status should be 200
    And the country should be "United States"
    And the postcode should be "90210"

    Scenario: Get valid GB postcode details
    When I request postcode "AB1" for country "gb"
    Then the response status should be 200
    And the country should be "Great Britain"
    And the postcode should be "AB1"

    #Negative scenarios
    Scenario: Invalid postcode returns 404
    When I request postcode "INVALID" for country "us"
    Then the response status should be 404
  
    Scenario: Unsupported country returns 404
    When I request postcode "98999" for country "fr"
    Then the response status should be 404

    Scenario: Empty postcode
    When I request postcode "" for country "us"
    Then the response status should be 404

    Scenario: negative postcode
    When I request postcode "-98999" for country "us"
    Then the response status should be 404

    Scenario: Lowercase vs uppercase GB postcode
    When I request postcode "ab1" for country "gb"
    Then the response status should be 200