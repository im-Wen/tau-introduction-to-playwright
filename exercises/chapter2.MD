# Introduction to Playwright

Hi 👋🏽!

Welcome to the course "Introduction to Playwright" by [Renata Andrade](https://testingwithrenata.com/) for the [Test Automation University](https://testautomationu.applitools.com/).

## Chapter 2 - Exercises

1. Change the number of workers on [playwright.config.ts](/playwright.config.ts) and see how it affects the tests run time. Use the command `npm run test:e2e:all` to run all the existing tests. Note that the number of workers will change too on the terminal. Suggestions: 1, 10, 100. What happens when you change it to 100?

Answer:
1, worker 1: Tests run one after another squentially. took 12.6s.
   worker 10：Only six workers are used at the at most, since there are only six tests, the test starts parallel，the total time becomes 15 seconds，slower than sequential run.
   worker 100: Playwright didn't create a hundred workers, limited by local test cases and the machine CPU, still maximum six workers. Higher resource pressure causes a longer run time 25.7 seconds and repeated rest get slower
2, Playwright will not actually create 100 workers. It caps the maximum workers based on your machine's CPU cores. Even if you set 100, it only uses as many workers as your CPU has. Setting an extremely high value may cause high CPU/memory usage, browser chrashes and flaky tests.
3， Terminal wall clock time is a real end to end waiting time user experience. The HTML report sum the duration of each individual test case. We use HTML report to inspect each test separately and identify small tests rather than measuring how long the whole test should take.

2. Change the reporter to 2 different options of your preference (mouse hover "reporter" to see the valid options). Besides the HTML, which ones could be useful for a project and why?

Answer:
The `line` reporter provides clean, live single-line progress in the terminal for local development. It keeps logs quiet and shows real-time test status.
The `junit` reporter outputs standard XML test results. CI tools like GitHub Actions or Jenkins can parse this XML file to display test statistics and failure history. It is widely used to collect test results for every test execution in professional projects.

1. Change the value of trace for each option available and identify the differences between them. Note how the size of the folder changes for each option.

1. Enable the video and check how it looks. Is it more useful than the trace in your opinion?

1. Create a new project on [playwright.config.ts](/playwright.config.ts), define a few unique settings and create a new script on [package.json](/package.json). Execute the new script. What useful params would make the test run even easier for you? Suggestion: Play with the different browsers and devices.

1. Create a new test file, describe a simple new test case and implement a new test. What other locators did you use besides `getByRole` and `getByText`. How about assertions, what other LocatorAssertions did you use besides `toBeVisible`, `toHaveURL` and `not.toBeVisible`?

1. Open the [demo-todo-app.spec.ts](/tests-examples/demo-todo-app.spec.ts) and add a .only to one of the describes, run the tests. Use the command `npm run test:e2e:all`. Did it work?

1. Still in the [demo-todo-app.spec.ts](/tests-examples/demo-todo-app.spec.ts) revert the .only and add a new tag to some of the tests/describes. Update the script `test:e2e:smoke` in [package.json](/package.json) to use the new tag. Did it work?


💡 Share on LinkedIn something interesting you've learned! Don't forget to tag me [Renata Andrade](https://www.linkedin.com/in/raptatinha/).

If you have questions, feel free to post them on [github](https://github.com/raptatinha/tau-introduction-to-playwright/issues).

Happy Testing 🎭!