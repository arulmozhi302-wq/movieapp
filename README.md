🎬 Movie Search Application

A full-featured Movie Search Application built with React that integrates with the OMDB API. Users can search for movies, filter results, view detailed movie information, and navigate seamlessly using React Router.

🚀 Features

🔍 Search movies by title or keyword

🎞️ Display movies in a responsive grid layout

📄 View detailed movie information (poster, plot, genre, cast, ratings)

🧭 Pagination for large result sets

🎛️ Filter movies by type (Movie / Series / Episode) using API parameters

🔀 Smooth navigation using React Router

⚠️ User-friendly error handling for no results or API errors

🎨 Styled using Tailwind CSS

🛠️ Tech Stack

ReactJS
React Router
JavaScript (ES6+)
HTML5 & CSS3
Tailwind CSS
OMDB API
Vite (development server)

🔑 Environment Setup

Create a .env file in the root directory:

VITE_OMDB_API_KEY=your_omdb_api_key

Restart the server after adding the environment variable.

🌐 API Used

OMDB API

Base URL: https://www.omdbapi.com/

📌 Notes

Filtering is implemented using OMDB API query parameters, not JavaScript array.filter()

The home page loads a default list of movies on initial render

Fully responsive and optimized for user experience