# Catt

## Overview
Catt is a simple React website that displays cat breeds and their information, and allows users to save cat pictures.

## Getting Started
1. Clone the repository:
`git clone https://github.com/MaxineNicole2127/Catt.git`
2. Navigate to the project directory:
`cd Catt`
3. Install dependencies:
`npm install`

    #### MANUAL INSTALLATION*
    ##### Dependencies
    Catt uses the following dependencies:
    1. axios
    `npm install axios`
    2. react-router-dom
    `npm install react-router-dom`
    3. react-slick
    `npm install react-slick --save`


4. Run the development server: 
`npm run dev`

## Folder Structures
- **src/**
    - **components/**: Components of the React Website
        - **NavBar.jsx** : navigation bar that allows user to navigate among the routes

        - **Dropdown.jsx** : dropdown selection form that prompts user to choose a breed to show pictures about
        - **Breed_Info.jsx** : provides a short description of the breed
        - **Cats.jsx** : section of cat pictures based on breed
            
        - **Breeds.jsx** : section of cat breeds in a slider
        - **Modal.jsx** : a modal containing the following:
            - **Characteristics.jsx**
            - **Info.jsx**
            - **MoreInfo.jsx**
                - **Circle.jsx**

        - **Saved.jsx** : a section of saved cat pictures
    - **context.jsx**: Provides global context
    - **App.css** : General CSS File
    - **Modal.css** : CSS File for Modal.jsx
    - **App.jsx**: Main application component

## Features

### Cat Picture Collection
- displays collection of cat pictures based on breed chosen by user

### Save Cat Pictures
- allows user to save and unsave cat pictures.

### Breed Information
- displays all cat breeds and showcases information about the breed, including its name, characteristics, life span, country of origin, energy level, affection level, and shedding level.

## Styling
Catt uses simple CSS styles. App.css supplies style to the entire web app, and Modal.css supplies style specifically for Modal.jsx. The breeds section uses slick-theme.css from react-slick library.

## Routing
The application uses React Router for basic navigation.
Routes:
- '/' : Cat Pictures by Breed
- '/breeds' : Breeds Card Slider
- '/saved' : Saved Cat Pictures

## State Management
Global state is managed using React Context. The AppContext provides state and actions for displaying cat pictures and breed.

## API Integration
Catt interacts with TheCatAPI (https://thecatapi.com) for cat breed information and pictures. API calls are handled using the 'axios' library.