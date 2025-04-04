# NC News

NC news is a restful API for the Northcoders news application.  
The Northcoders news is a web application where users can read, search and post articles and comments.

The site can be accessed via the following link
https://kchan-ka-nc-news.netlify.app/

The database and the API is hosted on postresSQL and onrender, which are made put to sleep during a period of inactivity.  
If no data is initially returned, please bear with it as both database and api components need to reactivate

The db api is hosted at
https://nc-news-site-kc.onrender.com/api

## Installation

# Requirements

The following applications will need to be installed

* node.js <i>[minimum version v 23.5.0]</i>

# Getting started

 * Clone the repository to your local machine by
    
    `git clone https://github.com/KChan-ka/NC-news-frontend`

 * Cd to the directory
    
    `cd NC-news-frontend`

 * Install relevant packages by running the command below.  

    `npm install`

# Set environment variables

The following environment variable will need to be setup


Create a new file `.env` will need to be set up. Add the following to it

`VITE_API_URL="https://nc-news-site-kc.onrender.com/"`
`VITE_GET_ALL_ARTICLES_URL="api/articles"`
`VITE_GET_ALL_USERS_URL="api/users"`
`VITE_GET_ALL_COMMENTS_URL="api/comments"`
`VITE_GET_ALL_TOPICS_URL="api/topics"`
`VITE_GET_MAXIMUM_RESULTS_ON_PAGE=100`


# Running the Application

To run the application, please run:

`npm run dev`

# Other

This portfolio project was created as part of a Digital Skills Bootcamp in Software Engineering provided by [Northcoders](https://northcoders.com/)