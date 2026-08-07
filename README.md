# Food App

A React food-ordering web app (inspired by Swiggy) that lists restaurants, lets you search by name, and filter for top-rated places. Built with [Create React App](https://github.com/facebook/create-react-app).

## Features

- **Header** with logo, nav links, and a Login/Logout toggle button.
- **Restaurant listing** fetched live from a public API, with local mock data as an initial/fallback data source.
- **Search** restaurants by name.
- **Top Rated filter** to toggle between all restaurants and those rated above 4.4.
- **Restaurant cards** showing thumbnail, cuisines, cost for two, rating, and delivery time.

## Project Structure

```
src/
├── App.js                    # Root component
├── App.css                   # Global/app styles
├── assets/                   # Logo and images
├── components/
│   ├── Header.js             # Top nav bar + login toggle
│   ├── BodyWrapper.js         # Search, filter, and restaurant list logic
│   └── RestaurantCard.js     # Single restaurant card
└── utils/
    ├── constant.js            # Shared constants
    └── mockData.js            # Fallback/sample restaurant data
```

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) and npm installed.

### Installation

```bash
npm install
```

### Available Scripts

In the project directory, you can run:

#### `npm start`

Runs the app in development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser. The page reloads on changes.

#### `npm test`

Launches the test runner in interactive watch mode.

#### `npm run build`

Builds the app for production to the `build` folder, minified and optimized for deployment.

#### `npm run eject`

**Note: this is a one-way operation.** Copies all configuration files (webpack, Babel, ESLint, etc.) into the project for full control.

## Data Source

Restaurant data is fetched from a public restaurant-listing API on mount. If the fetch fails or the data isn't shaped as expected, the app falls back to the sample data in [src/utils/mockData.js](src/utils/mockData.js).

## Learn More

- [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started)
- [React documentation](https://reactjs.org/)
