@UI
Feature: Navigate to Google.com and verify the title
    Desc: Navigate to Google.com and verify the title

    @smoke
    Scenario: Perform navigation
    Given I open the Google Web Page
    Then I verify the title of the page as 'Google'