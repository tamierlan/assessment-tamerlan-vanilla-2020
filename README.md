# TR Front-End Developer Assessment

Thank you for your interest in Twisted Rope, and welcome to our developer assessment. For this project, you will be creating an interactive web application that replicates the behavior of the ubiquitous Magic 8-Ball! The application will allow a user to enter a question into a text box, click the submit button, and receive a prediction in response.

#### Ground Rules:

- Your app should be written in vanilla HTML, CSS, and Javascript. You may use any and all features currently supported in modern browsers. We will be using up-to-date versions of Chrome and Firefox to review assessments.

- While you are free to use any third-party Javascript packages in your app, add dependencies sparingly and only if you deem necessary.

- Please adhere to the mockup and brand guidelines as closely as possible. Anything not explicitly mentioned will be left to your discretion.

- Assume this is a collaborative project, and other team members will be reading your code and adding features in the future.

- The recommended time to complete the assessment is 2 hours, up to a maximum of 4. If you don't finish one or more tasks, please submit your project anyway as we will still consider your work.

- Have fun! 

#### UI Requirements:

The user interface of your Magic 8-Ball application should be laid out as specified in the following mockup:

![Assessment mockup](https://twisted-rope-misc.s3.amazonaws.com/assessments/mockup_2020.png)

The title in the browser tab should be "Magic 8-Ball". Your app may include additional elements if necessary. It must also conform to the following brand guidlines:

Guideline | Value
------------ | -------------
**Font** | Josefin Sans
**Font size (h1)** | 60 px
**Font size (p)** | 20 px
**Text color** | #000 or #fff as needed
**Buttons** | Must have a hover transition of some kind
**Color Scheme** | #585858 (gray), #f25f25 (orange), #8eb5e0 (blue)
<br>

Again, anything not specified above will be left to your discretion.

#### Functionality Requirements:

Your app will allow a user to enter a question into the text box, click submit, and receive a response.

The response will come from a third-party API in JSON format. You'll need to send requests to the API, parse the responses, and display them to the user. Requests should be made to [this Magic 8-Ball API](https://8ball.delegator.com/). Documentation is available on their site for you to use should you need it.

Your app must also do the following:

- It must handle errors gracefully. Specifically, if the API is unreachable or doesn't return a response, the app should not break. If the user submits blank input, the app should not send a request. It should notify the user as appropriate.

- It must verify that the user input is a question. Making sure that the user input ends in a question mark will be sufficient. It should notify the user if the input is invalid.

- It must display a loader or an animation during requests that ends when a response is received. This could be a spinner or a custom animation, as long as it shows and hides correctly for optimal user experience.

- It must display the response to a user's question after every request. The query result area can initially be blank, but it should always have a response in it after the first response is received.

#### Bonus Features:

If you have extra time you may also add other features for extra consideration. Two example suggestions we have are:

- a "history" that shows the last ten responses to the user

- some basic unit tests for your application

Please note that if you choose to include unit tests, any testing libraries you choose to use will not count against you in terms of third-party packages.

If you're feeling creative, you may also implement your own bonus features. If you do, they should be in the spirit of making the app easier or more fun for the user.

#### Submission

Once your application is complete, please zip your project (if you have a **node_modules** directory, please remove it before doing so) and host it anywhere we can easily grab it (Google Docs, Github, Dropbox etc). Then, send a response to your recruitment contact saying you've completed the assessment, and include the link to your zip file and any relevant instructions for building/viewing your project.

Thank you for considering Twisted Rope, we're looking forward to seeing your project!