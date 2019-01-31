# my-reads

This is 1st project for the Udacity React NanoDegree Program.
A bookshelf/Library app that allows users to move and categorize books as currently reading, read or to remove. This project uses an API for finding all books (including author names, book titles etc)

The emphasis of this project is to build the bookshelf in React.js and use techniques of props and state management to accomplish the task.

Folder Structure

```bash

├── README.md - This file.
├── package.json # use npm install to download all the modules installed in package.json. 
├── public
│   ├── favicon.ico # React Icon, You may change if you wish.
│   └── index.html # DO NOT MODIFY
└── src
    ├── Components
         ├── BooksAPI.js # A JavaScript API for the provided Udacity backend. Instructions for the methods are below.
         ├── Book.js #The Component for individual Books
         ├── BookShelf.js #The actual BookShelf that maintains our Library
         ├── SearchBar.js #The Search bar component
         ├── MoveShelf.js #The component used to transfer books from currently reading to read and so on.
         ├── BookList.js #Component to list the books from the API after search
         ├── Error404.js #If the page or the Book is not found
    ├── App.css # Styles for the app.
    ├── App.js # This is the root of your app. 
    ├── App.test.js # Used for testing. Provided with Create React App. Testing is encouraged, but not required.
   
    ├── icons #  
    │   ├── add.svg
    │   ├── arrow-back.svg
    │   └── arrow-drop-down.svg
    ├── index.css # Global styles. You probably won't need to change anything here.
    └── index.js # You should not need to modify this file. It is used for DOM rendering only.
```
## Installing and Running the App
### Run the following commands
`
git clone https://github.com/gautamtata/my-reads.git
npm install
npm start
`
## Acknowledments and References
-------------------------------------

[Tyler McGinnis] (https://tylermcginnis.com/)

[Udacity] (https://www.udacity.com/) 

[React] (https://reactjs.org/)

[React-Router] (https://reacttraining.com/react-router/)

