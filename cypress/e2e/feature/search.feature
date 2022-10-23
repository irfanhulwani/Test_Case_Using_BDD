Feature: Search some feature in search menus
    As a guest
    I want to find invalid feature

    Scenario: Invalid search menus
        Given I visit the website
        When I type "random text" and push Enter on keyboard
        Then I should see alert messages : No results were found for the query: random text