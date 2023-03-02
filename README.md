# Find-IT

### FindIT is a photo tagging APP, with the same objective as the game "Where's Wally".  <br> Using React and FireBase
---
## <a href="#Assignment" class="anchor-link">Assignment</a>

<details>
    <ol>
      <li>Set up a GitHub Repo for this project. Follow the instructions atop the <a href="https://www.theodinproject.com/lessons/foundations-recipes" target="_blank" rel="noopener noreferrer">Recipes project</a> if you need help.</li>
      <li>Think about what you’ll need to do to get this all working together. This is where it’s really helpful to think it completely through on paper or whiteboard ahead of time! A few minutes of thought can save you from wasting an hour of coding.</li>
      <li>If you’re using Rails as your backend: create a new Rails application with just the bare bones required to load your HTML page for now. If you’ll be using Firebase, this is a good time to create a new Firebase project for this app, and link to the necessary scripts at the bottom of your HTML page.</li>
      <li>Build the front end functionality without actually using any calls to the back end yet. Specifically, that means creating the JavaScript functionality which pops the targeting box and dropdown menu on the screen when the user clicks on the photo and removes it when the user clicks away.</li>
      <li>Now hook up the functionality for validating with your back end whether the user has clicked in the right place for that character.</li>
      <li>Tie it into your front end so you can seamlessly select characters, validate them, and place the appropriate markers on the map if the selection was correct.</li>
      <li>Add in the ability to time the user from when they first load the page and then display their “score” (time) when they successfully identify all characters. Create a popup that asks them to enter their name for the high scores table if they have earned it.</li>
      <li>Play with it!</li>
      <li>Push your solution to GitHub, Heroku, and/or Firebase Hosting and submit it below. This is a serious project, congratulations!</li>
      <li><strong> OPTIONAL: </strong> Load many images into your database and allow the user to select from among them before starting the game.</li>
    </ol>
</details>

  <h3><a href="#your-task" class="anchor-link">The Task</a></h3>

  <p>Here, you’ll build an app that feels a whole lot like a photo tagging app. You’ll start with a large photograph which contains several elements the user is meant to find, e.g. Waldo, The Wizard, Wilma etc… name your own if you’d like to use your own photos. The user will make selections for each character and they will get feedback on whether they are correct or not.</p>

  <p>To start with, you’ll need to choose a photo and identify where exactly each person is to start with and save that to your database. When the user clicks the photo, it should place a targeting box around the portion of the photo where the user has clicked. That box should contain a list of possible characters.</p>

  <p>When the user selects one of these characters, you should check with your Backend to see if that character is actually within the targeting box. Provide the user with appropriate feedback (e.g. if wrong, an error message). If correct, place a marker on the photo in the character’s location. In either case, remove the targeting box until the user clicks again.</p>

  <p>Keep track of how long it takes between when the photo is first loaded and when the user finally identifies all characters (do this on the server side otherwise the user could hack their score). <em>Note: do this if you’re using rails as your backend. Firebase users don’t need to add a timer on the backend, instead add one on the front end.</em> Once a round is complete, ask the user for his/her name and record that time. This will get a bit tricky since you’ll have anonymous users you need to keep track of!</p>
