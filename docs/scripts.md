# JavaScript File Documentation

The JavaScript file `scripts.js` provides client-side interactivity for the GPX Data Visualization application. It handles dark mode toggling, user input handling, and asynchronous requests to the server to retrieve and display GPX data.

## Functions and Event Handlers

### `enableDarkMode()`

- **Description**: Enables dark mode by adding a `dark-mode` class to the `<body>` element.

### `disableDarkMode()`

- **Description**: Disables dark mode by removing the `dark-mode` class from the `<body>` element.

### `darkModeToggle` Event Handler

- **Description**: Toggles dark mode on button click by adding/removing the `dark-mode` class.

### `loadInitials()`

- **Description**: Sends an AJAX request to retrieve driver initials from the server and populates the corresponding dropdown menu.

### `$('#initials_select').change()` Event Handler

- **Description**: Handles the selection of driver initials. Loads cars based on selected initials and initializes the track display.

### `loadCars(initials)`

- **Description**: Sends an AJAX request to retrieve cars associated with selected initials and populates the cars dropdown menu.

### `$('#cars_select').change()` Event Handler

- **Description**: Handles the selection of cars and updates the `selectedCar` variable accordingly.

### `displayFilteredTrack()`

- **Description**: Sends an AJAX request to the server to fetch and display the filtered track based on selected initials, car, start date, and end date.

### `$('#apply-filters').click()` Event Handler

- **Description**: Triggers the display of the filtered track when the user clicks the "Anwenden" (Apply) button.

### `$('#reset-filters').click()` Event Handler

- **Description**: Resets all filters, loads initials, and updates the map to its default state when the user clicks the "Reset" button.

### `loadInitials()` on Page Startup

- **Description**: Automatically loads driver initials when the page is loaded.

## Note

- **AJAX Requests**: The JavaScript file extensively uses AJAX (asynchronous JavaScript and XML) to communicate with the server-side application. AJAX requests are made to retrieve data from the server without requiring a page refresh, enabling a smooth user experience.

- **Event Handling**: Event handlers are used to respond to user interactions such as button clicks and dropdown selections. These handlers trigger specific functions to update the user interface dynamically.

---

*Note: This documentation covers the functions and event handlers within the `scripts.js` file of the GPX Data Visualization application.*
