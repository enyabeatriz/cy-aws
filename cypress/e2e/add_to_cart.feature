Feature: Product Search and Price Verification on Amazon
  Scenario: Verify product price at search result level
    Given I am on the Amazon homepage
    When I search for "Celular"
    Then I should capture the price from the search results
    When I click on the first search result
    And I add the product to the cart
    Then the product should be added to the cart successfully
    And the price in the search results should match the price in the cart