# Customer International Payments Portal

#Project Overview

This project is a secure international payments portal designed to handle customer registrations and payments, as well as employee verifications for an international bank. The portal is built using React for the frontend and Node.js for the backend, with a focus on security and protection against common web attacks.

#Group Members

-Gregory Mbiya - ST10090997
-Zakariyyah Adams - ST10091209
-Imaan Ebrahim - ST10021922
-Jasmin Kisten - ST10025239
-Ryan Khan - ST10155076
-Kyle Govender - ST10090959

#Features

#Customer Portal

-User Registration: Customers can register with their full name, ID number, account number, and password. Passwords are securely hashed and salted before storage.

-Login System: Customers log in using their username, account number, and password to access the payment portal.

-Payment Process: Customers can enter payment details such as the amount, currency, recipient's account number, and SWIFT code to initiate international payments.

-Data Security: All traffic is secured using SSL, and user inputs are validated with strict RegEx patterns to prevent injection attacks.

#Employee Portal

-Verification: Pre-registered employees can log in to view and verify customer payments.

-Secure Access: Employees check the account information and SWIFT code, then forward the payment for processing through SWIFT.

-Transaction Status: Employees mark transactions as verified and submit them to SWIFT.

#Security Features

-Password Hashing and Salting: Passwords are hashed using bcrypt to ensure that user credentials are securely stored.

-Input Whitelisting: All inputs are validated with RegEx patterns to prevent malicious input and SQL injection attacks.

-SSL Encryption: All communication between the frontend and backend is encrypted using SSL to protect data in transit.

-Protection Against Attacks: Measures are taken to protect the system against:
-SQL Injection: By using parameterized queries.
-XSS (Cross-Site Scripting): By sanitizing user input.
-CSRF (Cross-Site Request Forgery): Using CSRF tokens.
-DDoS Attacks: By implementing rate limiting.

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)



