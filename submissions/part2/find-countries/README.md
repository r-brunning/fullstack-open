# Exercises 2.18-2.20: Country Information Viewer

This project is part of the [Full Stack Open](https://fullstackopen.com/en/) course offered by the University of Helsinki.

The task involved building a React application using Axios to make asynchronous requests to a REST API for [country data](https://studies.cs.helsinki.fi/restcountries/) and [weather data](https://openweathermap.org). The data is handled in JSON format and displayed dynamically based on user input.

See the full task [here](https://fullstackopen.com/en/part2/adding_styles_to_react_app#:~:text=Exercises%202.18.%2D2.20.).


## Features

- **Search for countries**: Users can type in a search box to filter countries.
- **Too many matches**: If more than 10 countries match, a message asks the user to refine their search.
- **View details for a single country**: If only one country matches, its details are displayed.
- **Show/Hide for multiple countries**: If multiple countries match, each country has a button to show or hide its details.
- **Weather Information**: Displays current weather details for the capital city of each country.

## How It Works

- **Results Component**: Decides what to render based on the number of search results.
- **CountryList Component**: Displays a list of countries with "Show" buttons to toggle details visibility.
- **CountryDetailsCard Component**: Displays detailed information for a single country.
- **CapitalCityWeather Component**: Fetches and displays current weather information for the capital city of the country.

### Managing Show/Hide State

The app uses the `reduce` function to create an object that tracks whether details for each country are shown or hidden. Each country’s `cca2` code is used as a key, and `false` is the initial value for all countries.

```js
  const [countryVisibilityMap, setCountryVisibilityMap] = useState(
    searchResults.reduce((acc, country) => {
      acc[country.cca2] = false;
      return acc;
    }, {})
  );
```

## How to Run the Project

1. Clone the repository.
2. Install dependencies with `npm install`.
3. Create a `.env` file in the root directory of the project. Add the following line to the `.env` file, replacing `your_api_key_here` with your actual OpenWeatherMap API key: `VITE_SOME_KEY=your_api_key_here`
4. Run the app using `npm start`.

The app will be available at `http://localhost:5173`.
