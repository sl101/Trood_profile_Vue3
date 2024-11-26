# Vue Profile Page Documentation

## [Open project](https://sl101.github.io/Trood_profile_Vue3)

## Project Description
The Vue Profile Page is a single-page application (SPA) built with Vue 3. It provides an interface for managing user profiles, including personal details, tasks, and projects. The project simulates backend interactions using LocalStorage, offering data persistence and a structured approach to state management with Pinia.

## Features

 - State Management: Pinia is used as the state management library for a clean and modular state management system.
 - Data Persistence: User data, including profile information and related entities, is stored and managed in LocalStorage.
 - Profile Management: Users can view and manage their tasks, projects, and other profile-related data.
 - Validation: Implements input validation for form fields.
 - Dynamic Loading State: Displays a loading animation while fetching profile data.
 - Modular Design: All major functionalities are separated into components for better maintainability.
 - CSS Variables: Centralized color palette for easy theming.

## Technologies Used
 - Vue 3: Modern frontend framework for building reactive interfaces.
 - Pinia: A state management library, replacing Vuex for a simpler and more intuitive approach.
 - LocalStorage: For storing profile data and simulating backend requests.
 - Vite: Development tool for fast builds and a better development experience.
 - Scoped Styles: Styles encapsulated at the component level using Vue's scoped attribute.

## Installation and Setup

### 1. Clone the Repository

	- git clone https://github.com/sl101/Trood_profile_Vue3.git
	- cd Trood_profile_Vue3

### 2. Install Dependencies
Run the following command to install all required dependencies:

	- npm install

### 3. Start the Development Server
To start the project locally in development mode, use:

	- npm run dev

Open your browser and navigate to: http://localhost:5173.

## Project Structure

vue-profile/
├── public/               # Static assets
├── src/
│   ├── assets/           # Project-specific images and fonts
│   ├── components/       # Vue components (EntitySection, etc.)
│   ├── stores/           # Pinia stores (profile store)
│   ├── services/         # Utilities (mock API, validation)
│   ├── App.vue           # Root component
│   ├── main.js           # Entry point
│   ├── styles/           # Global and shared styles
│   └── variables.css     # Color palette
├── dist/                 # Production build
├── vite.config.js        # Vite configuration
└── README.md             # Documentation

## Contact Information

For inquiries, feel free to reach out via GitHub or Email.