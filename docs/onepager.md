# GPX One Pager HTML Documentation

This documentation provides an overview of the HTML template used for the GPX One Pager, which is responsible for displaying an interactive map and providing filtering options.

## Table of Contents
1. [Introduction](#introduction)
2. [HTML Structure](#html-structure)
3. [CSS and JavaScript Libraries](#libraries)
4. [Dark Mode](#dark-mode)
5. [Buttons](#buttons)
6. [Dropdown Menus](#dropdown-menus)
7. [Date Filter](#date-filter)
8. [Map Container](#map-container)

## Introduction <a name="introduction"></a>

The HTML template serves as the frontend for the GPX One Pager, providing a user interface to interact with GPX data. It includes dropdown menus for selecting initials and cars, a date filter, and an interactive map powered by the Leaflet library.

## HTML Structure <a name="html-structure"></a>

The HTML document is structured as follows:

- `<head>`: Contains metadata, including character set, viewport settings, title, and links to stylesheets and scripts.
- `<body>`: Main content of the page.
  - Dark mode switch, reset filters button, and old version button.
  - Heading displaying "GPX One Pager."
  - Container for dropdown menus and map.
    - Dropdown menu for initials.
    - Dropdown menu for cars.
    - Date filter input fields.
    - Apply filters button.
  - Container for displaying the map.

## CSS and JavaScript Libraries <a name="libraries"></a>

- Leaflet CSS and JavaScript libraries are included to enable the creation and display of interactive maps.
- jQuery library is included for DOM manipulation and handling asynchronous operations.

## Dark Mode <a name="dark-mode"></a>

- Dark mode switch button (`#dark-mode-toggle`) allows users to toggle between light and dark modes.
- The stylesheet `styles.css` is linked to define the appearance for both light and dark modes.

## Buttons <a name="buttons"></a>

- **Dark Mode Toggle (`#dark-mode-toggle`):** Switches between light and dark modes.
- **Reset Filters (`#reset-filters`):** Resets all filters to their default values.
- **Old Version Button (`#old-version-button`):** Redirects to an older version of the GPX One Pager.

## Dropdown Menus <a name="dropdown-menus"></a>

- **Initials Dropdown (`#initials_select`):** Allows users to select driver initials from a dropdown menu.
- **Cars Dropdown (`#cars_select`):** Allows users to select a car from a dropdown menu.

## Date Filter <a name="date-filter"></a>

- **Start Date (`#start-date`):** Input field for selecting the start date.
- **End Date (`#end-date`):** Input field for selecting the end date.
- **Apply Filters (`#apply-filters`):** Button to confirm and apply the selected date filters.

## Map Container <a name="map-container"></a>

- **Map Container (`map-container`):** Displays the map generated by Folium using the `map_html` variable passed from the Flask backend.
- `<script src="{{ url_for('static', filename='scripts.js') }}"></script>`: Links to the JavaScript file (`scripts.js`) for additional functionality.

Note: The template utilizes Flask's `url_for` function to generate URLs for static files and scripts.