# TechWave Coding Challenge (16/08-18/08)
## How to start
### Client:
Use `cd client` followed by `npm run dev` to start the React-Vite app.
### API:
Use `cd api` followed by `npm run start:dev` to start the API server.
## Process
### Day 1:
Most of day 1 was focused towards readying docs and understanding how TypeORM and NestJS work as I haven't used them before. I'm used to do API routing using ExpressJS. After a while, I had a basic boilerplate laid out (connecting to the db and using env variables to do so). At the end, I added the relevant entities and created a M-M relations between Movies and Genres (since Movies can have multiple genres and Genres can appear in multiple movies)
### Day 2:
Started doing the required API Routes. I managed to code all of them except for `/SearchMovies` and `DeleteGenre` (it works to delete a genre that is not used, but gives an error if you try to delete one that's existing in a movie) - This, by far, has taken me a lot, I tried a couple of things that crossed my mind but none worked. Another thing that took me a while to understand was how can I update my movies since the `update()` function does not work in relations. Plus, the `In()` function does not loop through M-M relations. So I had to work around and dynamically save updated data (the case where i don't want to update everything, maybe I just want to update the title, or genre(s) for example). Towards the end I started to implement pagination in the frontend as I wanted to start my last day with th last API Route.
### Day 3:
I had some issues on the client side and tried fixing them, which I did, but I did not account `/SearchMovies` API route at all. On the frontend, I can display all movies, all genres but you can't do anything else. There is a modal you can open if you click on the `Update Movie` button, where there's a form to update a movie, but doesn't do anything (after an attempt). If it was to work, that was the way for the other buttons too, just had to copy-paste and change everything accordingly.
Data is fetched using `React Query` and passed down using the `React Context API`.
