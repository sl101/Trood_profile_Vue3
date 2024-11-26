# Vue Profile Page Documentation

## [Open project](https://sl101.github.io/Trood_profile_Vue3)

## Project Description
The Vue Profile Page is a single-page application (SPA) built with Vue 3. It provides an interface for managing user profiles, including personal details, tasks, and projects. The project simulates backend interactions using LocalStorage, offering data persistence and a structured approach to state management with Pinia.

## Features

 - State Management: Pinia is used as the state management library for a clean and modular state management system.
 - Data Persistence: User data, including profile information and related entities, is stored and managed in LocalStorage.
 - Profile Management: Update user information such as first name, last name, contact information, visibility settings and avatar.- Avatar Upload: Support for uploading Base64 image which is saved to LocalStorage.
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
Run the following command to install all required dependencies:

	- npm install

### 3. Start the Development Server
To start the project locally in development mode, use:

	- npm run dev

Open your browser and navigate to: http://localhost:5173.

## Project Structure

	- trood_accout_page/
	- ├── public/              # Статичные файлы
	- ├── src/
	- │   ├── components/      # Компоненты Vue
	- │   ├── stores/          # Стейт менеджеры
	- │   ├── services/        # Утилиты для валидации и работы с LocalStorage
	- │   ├── assets/          # Статичные ресурсы, включая SVG
	- │   ├── App.vue          # Главный компонент
	- │   ├── main.js          # Точка входа
	- │   └── index.css        # Глобальные стили
	- ├── dist/                # Сборка проекта
	- ├── .gitignore           # Игнорируемые файлы
	- ├── package.json         # Настройки и зависимости проекта
	- ├── vite.config.js       # Конфигурация Vite
	- └── README.md            # Документация проекта


## Contact Information

For inquiries, feel free to reach out via GitHub or Email.