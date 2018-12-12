# User registration form

Please make a one-page website with a user registration form. When the user first opens the site, they should see a page title (make one up) and the registration form. After filling out and submitting the form, the user's information should be displayed below the form in a new section. To complete this assignment, clone the GitHub repository at https://github.com/tiodan81/user-registration, make a new branch for your work, and use commits to save your progress as appropriate. When you are finished, push your branch to GitHub and open a pull request from your branch to the `master` branch.

## Form fields

1. first name & last name in separate fields
2. address with street, state, and zip code, each in a separate field
3. email address & phone number
4. password & confirm password
5. submit button

## Form requirements

1. all form fields should have labels so the user knows what each field is
2. inputs should be of the appropriate type for their content (for example, password values should be hidden, zip code should only allow numbers)
3. with area code (no non-numeric characters allowed)

## Style requirements

1. page title should be centered horizontally on the page
2. all form fields should be spaced so they are easy to read (use your judgement, but customize the spacing somehow)
3. form inputs should be rendered on four lines as follows: line 1 (first, last name), line 2 (street, state, zip code), line 3 (email, phone), line 4 (password, password confirmation, submit button)
4. once the form is submitted, the user information should be rendered below the form as shown below. Substitute everything in `<>` for the values submitted by the user.

```
Thanks for registering. You have created an account as <first name> <last name>.
Your contact information:
  Address: <street>, <state> <zip>.
  Email: <email>
  Phone: <phone>
```

## Bonus: Form Validation

If you have time, add validations to the form so the user knows if they have made any mistakes. Some possibilities:

1. make all fields required and display an error message if the user tries to submit without completing the form
2. Ensure that zip code and phone number only include numbers, and that each is the right length (5 digit zip, 10 digit phone)
3. Ensure that the password and confirm-password fields are identical
