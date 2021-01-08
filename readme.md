## Hands Off Our Lands || HOOL

Link to gitHub:https://github.com/Ronikhudanyan/Node-App-2-Roni-Fatima.git

\*By the Diaspora for the Diaspora
on Sept 27th the givernment of azerbaijan launched inhumane acts of terror and war on the armenian people of Artsakh. Artsakh has always been armenian land, historically that land has belonged to us since the dawn of language and literacy. Azeri officials have divoted billions of dollars to spread false propeganda about armenians within the US news channels. This is where the Armenians can unite and get fact based knowledge on what is going on in our home land and how we can help.

Due to the increase of azeri bots hacking and gathering information we have blocked sensitive information on this page. Sign up and get access to all the latest calls to actions and ways to help.

<img width="1210" alt="project2LogIn" src="https://i.imgur.com/HrRz8Jc.jpg">

### User Stories

- As a user, I want to create an account to access the database.
- As a user, I want to see all the available ways i can help from outside Armenia.
- As a user, I want to easily keep track of my calls to action and news articles.
- As a user, I want to be able to write in a call to action or submit an article.
- As a user, I want to searchthrough the db and find the articles im looking for

### Wire Frame:

<img width="689" alt="Screen Shot 2020-11-11 at 1 12 41 PM" src="https://i.imgur.com/A9sLx3c.png">

### ERD

<img width="619" alt="Screen Shot 2020-11-11 at 2 24 18 PM" src="https://i.imgur.com/9giwvWC.png">

Website Used: Lucid.app

### Technologies Used:

- Node/Express & Axios
- Passport/ Bcrypt for authentification and password hashing.
- Postgres
- Sequelize
- CSS, HTML & JavaScript

### Routes and Models

<img width="807" alt="crud" src="https://user-images.githubusercontent.com/69879822/99105425-832a6e80-25b0-11eb-89a4-c06e41ea63e3.png">

###Steps to Setting Up

1. Fork and Clone this Repo.
2. Run npm i (this will install the dependencies)

3. Run nodemon
4. Setup your database and models

5. Run the following code to migrate:

   - sequelize db:migrate

6. Create a .env file, this will keep your port and session_secret private.

- SESSION_SECRET (you choose this)
- PORT= (choose the local host port you want)

### Sources

API Info:

newsapi.org

<!-- <div class="wrapper">
    <div class="news">
        <% if(articles != null) { %>
    <%articles.slice(-12).forEach(article => { %>

        <a href="<%- article.url %>" class="card">
            <img src="<%- article.urlToImage  %> " alt="<%- article.title %>">
            <h2><%- article.title %></h2>
            <p><%- article.description %></p>
        </a>

        <% }) %>
        <% } else { %>
            No posts found.
        <% } %>
    </div>
  </div> -->
