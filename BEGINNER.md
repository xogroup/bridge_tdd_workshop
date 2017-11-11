1. Render a simple component!
    1. Before we jump into TDD, our first step will be to create a simple text input that will render on the page.
2. Write a simple test for your component
    1. Now that we have a simple component, let's start by writing a test to see if it renders without errors. 
    2. Check out the Enzyme docs for some great examples! [Introduction · Enzyme](http://airbnb.io/enzyme/#basic-usage)
    3. You may also want to take a look at the Jasmine documentation - this will give you an overview of the methods you can use to write your assertions. [introduction.js](https://jasmine.github.io/2.5/introduction)
3. Make your component more useful
    1. Let's add some _placeholder text_ to our text input so that people know what to type in it. Let's start by writing the test - write a new expectation that your component will have a placeholder attribute. You can use whatever string your heart desires.
4. Update your component to pass your tests 
    1. Once you've seen your test fail, you can now modify your component to make your test pass.
    2. Congratulations, you've completed a test cycle! #TDD4life
5. Let's make it interesting... 
    1. Now that you've got the feel for how TDD flows, let's extend your test to include some if/else logic.
    2. We're going to test that your component should be rendered with a css class of `red` _if_ more than 10 characters have been entered into it.
    3. Note that we'll be testing _both_ possibilities, so you should be adding an expectation for each possible state.
6. Update the component to pass tests
    1. Once you've got some failing tests, update your component to add the correct css class _if_ the condition is met.
7. Adding more functionality
    1. Now that you have some behavior wired up, let's add a test that expects our component to render both an input _and_ a button.
    2. _Make that test pass_ ✨
8. Connecting the wires
    1. Once your button is in place and your tests are green, it's time to write a test for that button's desired behavior (add an element of your choice - I suggest an image of [nyancat](https://i.pinimg.com/originals/c4/dd/5d/c4dd5d671bb86d8551e9697c2d9ece06.gif), or a `<p>` tag containing the value of the text input).
    2. Write test that simulates a user clicking the button (check the Enzyme docs for this) and test the expected result (the component renders an additional element).
9. "Make the thing do the stuff"
    1. Once your tests are failing, implement this new behavior in your component.
10. _Rejoice!_
    1. You've done it! If you're looking to go further, try writing some tests for edge cases you haven't tested
