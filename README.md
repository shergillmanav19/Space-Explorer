# Space Explorer

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). The project aims to help you explore your interest in astronomy pictures. The data is being pulled from NASA's API. 

## How it works

Space Explorer is a web-app built with React framework using JavaScript. The application stores data in the user's browser's local storage to ensure their liked images persist between sessions. 

Space Explorer uses Chakra UI components instead of generic HTML tag such as <button> or <div>. Using Chakra UI enabled more focus on functionality rather than also taking care of styling using CSS.

### Features of Space Explorer

* Upon entering the site user are shown random 20 pictures of space by default. 
* Users are able to select how many pictures they want to see. The range is between 50 and 5.
* The explore tab contains random images that a user might add to their liked pictures
* Liked pictures tab contains user's liked photos.
* Everytime explore is refreshed, user see's completly random images from the NASA's API.

### Improvements to be made

* Better search functionality, user's should be able to put dates as well
* Storage of images in a database
* More appealing UI

## How to run app on your machine

1) Clone the repository by click on "Code" and then copying the https link and running the command "git clone [HTTP-LINK-HERE]" in your terminal
2) Open the repository usng VSCode and open up a terminal.
3) Now run "npm ci" to download node_modules used by the project
4) Lastly, run "npm start" and the application should be available on "localhost:3000"

The previous steps run the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

## How to run test cases on your machine

1) Run the command "npm test" in your terminal. This should show 6 test suites.
2) If no test suites show up after running "npm test", the instruction in your console will tell you to press 'a' key on your keyboard. Pressing 'a' will run all of the test suites.
