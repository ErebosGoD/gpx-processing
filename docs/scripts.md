# GPX One Pager JavaScript Documentation

This documentation provides an overview of the JavaScript functions used in the GPX One Pager to enable dynamic interactions with the webpage.

## Table of Contents
1. [Dark Mode Toggle](#dark-mode-toggle)
2. [Initials Dropdown](#initials-dropdown)
3. [Cars Dropdown](#cars-dropdown)
4. [Filtered Track Display](#filtered-track-display)
5. [Apply Filters Button](#apply-filters-button)
6. [Reset Filters Button](#reset-filters-button)
7. [Old Version Button](#old-version-button)
8. [Page Startup](#page-startup)

## 1. Dark Mode Toggle <a name="dark-mode-toggle"></a>

- **Function:** `enableDarkMode()`, `disableDarkMode()`
- **Description:** Functions to enable and disable dark mode by adding or removing the 'dark-mode' class from the `body` element.
- **Event:** Click event on the dark mode toggle button (`#dark-mode-toggle`).

## 2. Initials Dropdown <a name="initials-dropdown"></a>

- **Function:** `loadInitials()`
- **Description:** Uses AJAX to fetch distinct driver initials from the server and populates the initials dropdown (`#initials_select`).
- **Event:** Page startup and click event on the initials dropdown.

## 3. Cars Dropdown <a name="cars-dropdown"></a>

- **Function:** `loadCars(initials)`
- **Description:** Uses AJAX to fetch distinct cars associated with the selected initials and populates the cars dropdown (`#cars_select`).
- **Event:** Change event on the initials dropdown (`#initials_select`).

## 4. Filtered Track Display <a name="filtered-track-display"></a>

- **Function:** `displayFilteredTrack()`
- **Description:** Uses AJAX to fetch and display the filtered track on the map based on selected initials, car, start date, and end date.
- **Event:** Click event on the "Anwenden" button (`#apply-filters`).

## 5. Apply Filters Button <a name="apply-filters-button"></a>

- **Event:** Click event on the "Anwenden" button (`#apply-filters`).
- **Description:** Calls the `displayFilteredTrack()` function to apply the selected filters.

## 6. Reset Filters Button <a name="reset-filters-button"></a>

- **Event:** Click event on the Reset button (`#reset-filters`).
- **Description:** Clears all dropdown menus and date inputs, reloads initials, and updates the map to its default state using AJAX.

## 7. Old Version Button <a name="old-version-button"></a>

- **Event:** Click event on the "Old Version" button (`#old-version-button`).
- **Description:** Redirects the user to the old version of the GPX One Pager using the `window.location.href` property.

## 8. Page Startup <a name="page-startup"></a>

- **Event:** Page load.
- **Description:** Calls the `loadInitials()` function to populate the initials dropdown and set up the page for interaction.