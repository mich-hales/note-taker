# Note Taker

## Description

This application can be used to write, save and delete notes. This application uses an Express.js back end and will save and retrieve note data from a JSON file.


## Usage 

* This is a note-taking application where after the user opens the Note Taker, a landing page is presented with a link to a notes page.
* When the link to the notes page is clicked, the user is presented with a page with existing notes listed in the left-hand column, plus empty fields to enter a new note title and the note’s text in the right-hand column.
* When a new note title and the note’s text are entered, a Save icon will appear in the navigation at the top of the page.
* When the Save icon is clicked, the new note that has been entered is saved and appears in the left-hand column with the other existing notes.
* When an existing note is clicked in the list in the left-hand column, that note appears in the right-hand column.
* When the Write icon is clicked in the navigation at the top of the page, the user is presented with empty fields to enter a new note title and the note’s text in the right-hand column.


## Mock-Up

The following images show the web application's appearance and functionality:

![Existing notes are listed in the left-hand column with empty fields on the right-hand side for the new note’s title and text.](./Assets/11-express-homework-demo-01.png)

![Note titled “Balance accounts” reads, “Balance account books by end of day Monday,” with other notes listed on the left.](./Assets/11-express-homework-demo-02.png)

GitHub Repository: https://github.com/mich-hales/note-taker


## Getting Started

On the back end, the application should include a `db.json` file that will be used to store and retrieve notes using the `fs` module.

The following HTML routes should be created:

* `GET /notes` should return the `notes.html` file.

* `GET *` should return the `index.html` file.

The following API routes should be created:

* `GET /api/notes` should read the `db.json` file and return all saved notes as JSON.

* `POST /api/notes` should receive a new note to save on the request body, add it to the `db.json` file, and then return the new note to the client. You'll need to find a way to give each note a unique id when it's saved (look into npm packages that could do this for you).


## Bonus

You haven’t learned how to handle DELETE requests, but this application offers that functionality on the front end. As a bonus, try to add the DELETE route to the application using the following guideline:

* `DELETE /api/notes/:id` should receive a query parameter that contains the id of a note to delete. To delete a note, you'll need to read all notes from the `db.json` file, remove the note with the given `id` property, and then rewrite the notes to the `db.json` file.



This Challenge is graded based on the following criteria: 

  * Application front end must connect to an Express.js back end.

  * Application back end must store notes that have a unique id in a JSON file.

  * Application must be deployed to Heroku.

  * Repository contains quality README file with description, screenshot, and link to deployed application.

### Bonus: +10 Points

* Application allows users to delete notes.

## Review

You are required to submit BOTH of the following for review:

* The URL of the functional, deployed application.

* The URL of the GitHub repository, with a unique name and a README describing the project.
