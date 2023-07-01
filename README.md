# Book Club API Project

Welcome to my Book Club API Project repository! This project was born from the need of a book club to democratize reading through the donation of already read books. They wanted a way for people beyond the club members to participate in donations and also borrow books. For this purpose, I created an API that allows user registration and authentication, and provides the capability to the user add new books, consult all existing books in the database, borrow books, and see a list of books they've borrowed.

## Tools Used

- **Express.js**: This project uses Express as the web application framework for building the API.
- **JavaScript**: JavaScript is the primary programming language used in this project.
- **Authentication Libraries**: For securing the API, I've used various authentication libraries. These libraries help in creating secure routes and protecting user data.
- **PostgreSQL**: PostgreSQL is used as the database for this project. It stores information about the users and the books.

## Features

- **User Registration and Authentication**: Users can register with a unique email and authenticate themselves. 
- **Add New Books**: Authenticated users can add new books to the database. Each book must have a unique name.
- **Consult All Books**: Users can view all books available in the database.
- **Borrow Books**: Users can borrow available books. Once a book is borrowed, it becomes unavailable to other users.
- **See Borrowed Books**: Users can view a list of books they've borrowed.

## Future Enhancements

- **Return Books**: Currently, any user can return a borrowed book, making it available again. Future enhancements will limit this action to the user who borrowed the book.
- **Book Reviews and Ratings**: Users will be able to review and rate books, providing more information to future borrowers.

I hope you find this project interesting! Feel free to explore and give feedback.
