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

- **404** - As a user I want to see a nice 404 page when I go to a page that doesn’t exist so that I know it was my fault.
- **500** - As a user I want to see a nice error page when the super team screws it up so that I know that is not my fault.
- **homepage** - As a user I want to be able to access the homepage so that I see what the app is about and login and signup.
- **sign up** - As a user I want to sign up on the webpage so that I can see all the events that I could attend.
- **login** - As a user I want to be able to log in on the webpage so that I can get back to my account.
- **logout** - As a user I want to be able to log out from the webpage so that I can make sure no one will access my account.
- **users list** - As a user I want to see all the registered users so that I can check their creative tables.
- **creative table create** - As a user I want to create a creative table so that I can express myself and share with others.
- **creative table edit** - As a user I want to edit the information or delete a creative table I created.
- **therapist list** - As a user I want to see all the therapist available near me so that I can check their profile and attend their workshopss.
- **workshop list** - As a user I want to see all the workshops available near me so that I can attend and seek guidance.
- **workshop create** - As a therapist I want to create a workshop so that users can attend.
- **workshop edit** - As a therapist I want to edit the information or delete a workshop I created.

## Client Routes

## React Router Routes (React App)
| Path                      | Page            | Components        | Permissions              | Behavior                                                      |
| ------------------------- | ----------------| ----------------  | ------------------------ | ------------------------------------------------------------  |
| `/`                       | Home            |                   | public                   | Home page                                                     |
| `/registro`               | Signup          |                   | public                   | Signup form, link to login, navigate to homepage after signup |
| `/iniciar-sesion`         | Login           |                   | public                   | Login form, link to signup, navigate to homepage after login  |
| `/sobre-nosotros`         | About Us         |                  | public                   | Aboout Us page                            |
| `/perfil`                | Profile          | UserCard          | logged user only `<IsPrivate>`  | Shows all information of the registered user             |
| `/perfil/editar`          | Profile         |                   | logged user only `<IsPrivate>`  | Shows all information of the registered user that can be edited           |
| `/psicologos`             | PsicoList        | PsicoCard        | logged user only `<IsPrivate>`  | Shows all therapists                                   |
| `/psicologos/:psicoId`     | PsicoDetails       |               | logged user only `<IsPrivate>`  | Shows a selected therapist                                    |
| `/talleres`       | TallerList                | TallerDetails   | logged user only `<IsPrivate>`  | Shows all workshops                                    |
| `/talleres/:tallerId`       | TallerDetails   |                 | logged user only `<IsPrivate>`  | Shows all games on backlog                                    |
| `/talleres/crear`       | CreateTaller   |                      | therapist only `<Psicologo>`  | Therapist can create a workshop                                   |
| `/talleres/:tallerId/editar`       | EditTaller   |             | therapist only `<Psicologo>`  | Therapist can edit a workshop they created                                |
| `/tablero-creativo/crear`       | CreateTablero   |            | user only `<User>`  | User can create a creative table                                    |
| `/tablero-creativo/:tableroId/editar`       | EditTablero   |           | user only `<User>`  | User can edit a creative table they own                                    |
| `/usuarios`       | UserList   |           | logged user only `<IsPrivate>`  | Shows all registered users                                   |
| `/usuarios/:usuarioId`       | UserDetails   | TableroCard          | user only `<IsPrivate>`  | Shows all games on backlog                                    |
| `*`       | NotFoundPage   |           | public  | Shows a message saying the page wasn't found                                   |
| `/error/500`       | ErrorPage   |           | public`  | Shows a message saying there was an internal error                                    |

## Other Components

- Navbar
- Footer
- Private
- User
- Psicologo
- Canvas
  
## Context

- auth.context
  
## Links

### Collaborators

[Sheyla Arellano](https://github.com/Sheylare)

[Michelle Sredni](https://github.com/michsredni)

### Project

[Deploy Link](https://mentemigrante.netlify.app/)

### Slides

[Slides Link](https://www.canva.com/design/DAGN8-XsAFk/m5cMPF7_xI_PmznKVofV0Q/view?utm_content=DAGN8-XsAFk&utm_campaign=designshare&utm_medium=link&utm_source=editor)
