# Vue Profile Page Documentation

## [Open project](https://sl101.github.io/Trood_profile_Vue3)

## Project Description

The Vue Profile Page is a single-page application (SPA) built with Vue 3. It provides an interface for managing user profiles, including personal details, tasks, and projects. The project simulates backend interactions using LocalStorage, offering data persistence and a structured approach to state management with Pinia.

## Features

 - State Management: Pinia is used as the state management library for a clean and modular state management system.
 - Data Persistence: User data, including profile information and related entities, is stored and managed in LocalStorage.
 - Profile Management: Update user information such as first name, last name, contact information, visibility settings and avatar.
 - Avatar Upload: Support for uploading Base64 image which is saved to LocalStorage.
 - Validation: Implements input validation for form fields.
 - Dynamic Loading State: Displays a loading animation while fetching profile data.
 - Modular Design: All major functionalities are separated into components for better maintainability.
 - SVG Support: Using the vite-svg-loader plugin to import SVG files, including them in Vue components.
 - CSS Variables: Centralized color palette for easy theming.

## Technologies Used

 - Vue 3: Modern frontend framework for building reactive interfaces.
 - Pinia: A state management library, replacing Vuex for a simpler and more intuitive approach.
 - LocalStorage: For storing profile data and simulating backend requests.
 - Vite: Development tool for fast builds and a better development experience.
 - vite-svg-loader: Plugin for importing SVG files as Vue components.
 - Scoped Styles: Styles encapsulated at the component level using Vue's scoped attribute.

## Installation and Setup

### 1. Clone the Repository

	- git clone https://github.com/sl101/Trood_profile_Vue3.git
	- cd Trood_profile_Vue3

### 2. Install Dependencies

To install all required dependencies, run:

	- npm install

### 3. Start the Development Server

To start the project locally in development mode, use:

	- npm run dev

Open your browser and navigate to: http://localhost:5173.

## Project Structure

	- trood_account_page/
	- ├── public/              # Static files
	- ├── src/
	- │   ├── components/      # Vue components
	- │   ├── stores/          # State management (Pinia stores)
	- │   ├── services/        # Utilities for validation and LocalStorage interaction
	- │   ├── assets/          # Static resources, including SVG files
	- │   ├── App.vue          # Main component
	- │   ├── main.js          # Entry point for the application
	- │   └── index.css        # Global styles
	- ├── dist/                # Build output
	- ├── .gitignore           # Ignored files in Git
	- ├── package.json         # Project dependencies and scripts
	- ├── vite.config.js       # Vite configuration
	- └── README.md            # Project documentation

## Component Overview

 - ProfileLink.vue: Displays individual user profile links with the ability to remove them.
 - ProfileLinks.vue: Manages a collection of ProfileLink components and handles adding/removing links.
 - ProfileForm.vue: Form component for updating the user’s profile details.
 - AvatarUploader.vue: Component for uploading and displaying the user's avatar.

## State Management with Pinia

Pinia is used for managing the application's state. It allows for a modular and reactive approach to storing and updating user profile data.

 - ProfileStore: Contains state related to user profile details, including fields like first_name, last_name, email, etc.
 - LinksStore: Manages the user's profile links, allowing for adding, updating, and deleting URLs.
 - AvatarStore: Handles the avatar upload functionality and stores the uploaded image in Base64 format.

## Data Persistence

All profile data, including user information and links, is stored in LocalStorage. This ensures that the data is persistent even when the page is reloaded or the user revisits the page.

## Contact Information

For inquiries, feel free to reach out via [telegram](https://t.me/Viacheslav_Zhevaha) .