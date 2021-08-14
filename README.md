# Awesomereads - For the love of books

This project was generated with Angular CLI version 12.1.2. Live demo can be found here: https://awesome-reads.web.app/home

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Functionality overview

The example application is a social site for books (i.e. a very simple Goodreads clone) called "Awesomereads"(so original, I know). It uses a Firebase as backend

**General functionality:**

- Authenticate users via Firebase
- CRU* users (sign up & settings page - no deleting required)
- CRUD Books and Quotes
- GET and display paginated lists of books. No authentication required for GET.
- Personal profile page with added favorite books and quotes. 

**The general page breakdown looks like this:**
- Home page (URL: /#/ )
    - Showcase and landing page
- Books page (URL: /#/books/books-slug-here )
    - Dynamic view with list of all books on the left and details page for the book on the right
    - Clicking add new book or edit already added one renders new dynamic view on the right side of the page
    - Delete and edit book button (only shown to book's author)
- Sign in/Sign up pages (URL: /#/auth)
    - Store the token in localStorage
    - Single page for login/register page with dynamic switch mode
- Profile page (URL: /#/profile)
    - Show basic user info
    - List of books populated from author's favorite books
    - List of quotes populated from author's favorite quotes

## Technologies
- Angular, TypeScript, Bootstrap 5, HTML, CSS
- RxJs, FontAwesome, Angular Animations