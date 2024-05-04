Feature: Search for Products on Amazon

  Scenario: Search for a specific product
    Given I open the Amazon page
    When I search for a product
    Then I should see results containing