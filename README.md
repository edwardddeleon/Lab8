# Lab8_Starter

## Check your understanding q's (FILL OUT)
1. In your own words: Where would you fit your automated tests in your Bujo project development pipeline? (just write the letter)

1) We would fit our automated tests in our BuJo project dev pipeline within a GitHub action that runs whenever code is pushed
  
2. Would you use a unit test to test the “message” feature of a messaging application? Why or why not? For this question, assume the “message” feature allows a user to write and send a message to another user.

No, there are too many moving parts. There is writing and sending as well as receiving which has to be tested. It would be best to unit test each step (writing, sending, receiving).

3. Would you use a unit test to test the “max message length” feature of a messaging application? Why or why not? For this question, assume the “max message length” feature prevents the user from typing more than 80 characters

Yes, there is only one thing being checked. Simply check if a user can type more than 80 characters or not.

4. What do you expect to happen if we run our puppeteer tests with the field “headless” set to true?

If headless was set to true, I expect that browser UI would not be shown when running tests.

5. What would your beforeAll callback look like if you wanted to start from the settings page before every test case?

await page.click('header > img)'

--- tests.png = screenshot of lab8.test.js results, routertests.png = screenshot of router.test.js results, sumtests.png = screenshot of sum.test.js results ---
