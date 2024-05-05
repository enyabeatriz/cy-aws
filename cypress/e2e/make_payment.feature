Feature: Search and simulate purchase on Amazon
  Scenario: Searching for a cell phone, selecting the first result, and simulating the payment process
    Given I am on the Amazon homepage
    When I search for "Celular"
    Then I should capture the price from the search results
    When I click on the first search result
    And I add the product to the cart
    Then the product should be added to the cart successfully
    And the price in the search results should match the price in the cart
    And I proceed to checkout
    And I fill in the required information
    Then I should see the order summary without confirming the purchase