# Blog Web Frontend

## Introduction

This project is the frontend for a Blog Web Application, developed using React.js. It interacts with the Blog Web Backend to display blog posts, manage user authentication, and provide an interactive interface for blog interactions. This project is still on development stage.

## Features

- **Dynamic Blog Display**: Renders blog posts fetched from the backend.
- **User Authentication**: Handles user login, registration, and session management.
<!---
- **Interactive Comment System**: Allows users to post and view comments on blogs.
- **User Profile Management**: Enables users to view and edit their profiles.
- **Responsive Design**: Ensures the blog is accessible on various devices and screen sizes.
-->

## Prerequisites

To run this project locally, you'll need:

- Node.js and npm installed on your machine.
- Access to the backend server (either running locally or hosted).

## Installation

Follow these steps to set up the project:

```bash
# Clone the repository
git clone https://github.com/davidjohanhp/blog-app-frontend.git

# Navigate to the project directory
cd blog-web-frontend

# Install dependencies
npm install
```

## Running the Application

To start the application in development mode, run:

```bash
npm start
```

This will launch the app in your default browser. By default, it will attempt to connect to the backend running on `localhost:3000`.

## Environment Configuration

To connect the frontend to your backend, create a `.env` file in the root directory of your project and specify the backend URL:

```env
REACT_APP_BACKEND_URL=http://localhost:3000
```

Adjust the URL based on where your backend is hosted.

## Building for Production

To build the application for production, run:

```bash
npm run build
```

This command builds the app for production to the `build` folder, effectively bundling React in production mode and optimizing the build for the best performance.

## Contributing

Your contributions are welcome! If you have suggestions for improving the application, please open an issue or pull request.
