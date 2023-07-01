# Book Club API Project

Welcome to my Book Club API Project repository! This project was born from the need of a book club to democratize reading through the donation of already read books. They wanted a way for people beyond the club members to participate in donations and also borrow books. For this purpose, I created an API that allows user registration and authentication, and provides the capability to add new books, consult all existing books in the database, borrow books, and see a list of books they've borrowed.
## Database Schema

Here's a screenshot of the database schema used in this project:

<p align="center">
  <img src="https://drive.google.com/file/d/10Bar_TwTE5JOSVaAO5VFPE9Ms6GsfW5Q/preview" />
</p>

## Tools Used

- **Express.js**: This project uses Express as the web application framework for building the API.
- **TypeScript**: TypeScript is the primary programming language used in this project.
- **Authentication Libraries**: For securing the API, I've used various authentication libraries. These libraries help in creating secure routes and protecting user data.
- **PostgreSQL**: PostgreSQL is used as the database for this project. It stores information about the users and the books.
- **Prisma ORM**: Prisma is used as the Object-Relational Mapping (ORM) tool in this project. It provides an abstraction over PostgreSQL, making it easier to communicate with the database using TypeScript. Prisma simplifies database queries, migrations, and data modeling with its auto-generated and type-safe database client.

## Features

- **User Registration and Authentication**: Users can register with a unique email and authenticate themselves. 
- **Add New Books**: Authenticated users can add new books to the database. Each book must have a unique name.
- **Consult All Books**: Users can view all books available in the database.
- **Borrow Books**: Users can borrow available books. Once a book is borrowed, it becomes unavailable to other users.
- **See Borrowed Books**: Users can view a list of books they've borrowed.

## Running the Project

Before running the project, make sure you have Node.js and PostgreSQL installed on your machine, and you've set up the database connection in Prisma's `.env` file.

1. Install the project dependencies:

```bash
npm install
```
2. Initialize Prisma:
```bash
npx prisma init
```
3. Run the Prisma migration to set up your database schema:
```bash
npx prisma migrate dev
```
4. Start the server:
```bash
npm run dev
```
Your server should now be running at http://localhost:5000.

