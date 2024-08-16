# Mente Migrante

## [See the App!](https://mentemigrante.netlify.app/)

## Description

**NOTE -** Describe your project in one/two lines.
#### [Client Repo](https://github.com/michsredni/mentemigrante-client)
#### [Server Repo here](https://github.com/michsredni/mentemigrante-server)

## Technologies & Libraries used

HTML, CSS, Javascript, React, Axios, Bootstrap, Cloudinary, React Sketch Canvas, React DOM.

## Backlog Functionalities

Apply Socket io for all users to be able to chat between them.
Users could rate the 'tableros' of other users
Users could leave a comment to other user's 'tableros'

# Client Structure

## User Stories

**NOTE -**  List here all the actions a user can do in the app. Example:

- **404** - As a user I want to see a nice 404 page when I go to a page that doesn’t exist so that I know it was my fault 
- **500** - As a user I want to see a nice error page when the super team screws it up so that I know that is not my fault
- **homepage** - As a user I want to be able to access the homepage so that I see what the app is about and login and signup
- **sign up** - As a user I want to sign up on the webpage so that I can see all the events that I could attend
- **login** - As a user I want to be able to log in on the webpage so that I can get back to my account
- **logout** - As a user I want to be able to log out from the webpage so that I can make sure no one will access my account
- **users list** - As a user I want to see all the registered users so that I can check their creative tables
- **creative table create** - As a user I want to create a creative table so that I can express myself and share with others
- **therapist list** - As a user I want to see all the therapist available near me so that I can check their profile and attend their workshopss.
- **workshop list** - As a user I want to see all the workshops available near me so that I can attend and seek guidance.

## Client Routes

## React Router Routes (React App)
| Path                      | Page            | Components        | Permissions              | Behavior                                                      |
| ------------------------- | ----------------| ----------------  | ------------------------ | ------------------------------------------------------------  |
| `/`                       | Home            |                   | public                   | Home page                                                     |
| `/registro`               | Signup          |                   | public                   | Signup form, link to login, navigate to homepage after signup |
| `/iniciar-sesion`         | Login           |                   | public                   | Login form, link to signup, navigate to homepage after login  |
| `/profile`                | Profile         | EditProfile       | user only `<IsPrivate>`  | Navigate to homepage after logout, expire session             |
| `/games/list`             | GameList        | AddGame, GameCard | user only `<IsPrivate>`  | Shows all films on backlog                                    |
| `/games/edit`             | GamesEdit       |                   | user only `<IsPrivate>`  | Shows all games on backlog                                    |
| `/games/favourites`       | FavouriteList   | GameCard          | user only `<IsPrivate>`  | Shows all games on backlog                                    |

## Other Components

- Navbar
- Footer

## Services

- Auth Service
  - auth.login(user)
  - auth.signup(user)
  - auth.verify()

- Backlog Service
  - game.filter(type, status)
  - game.detail(id)
  - game.add(id)
  - game.delete(id)
  - game.update(id)
  
- External API
  - gameApi.details
  - gameApi.list
  
## Context

- auth.context
- theme.context
  
## Links

### Collaborators

[Sheyla Arellano](https://github.com/Sheylare)

[Michelle Sredni](https://github.com/michsredni)

### Project

[Repository Link Client](www.your-github-url-here.com)

[Repository Link Server](www.your-github-url-here.com)

[Deploy Link](www.your-deploy-url-here.com)

### Trello

[Link to your trello board](www.your-trello-url-here.com)

### Slides

[Slides Link](www.your-slides-url-here.com)
