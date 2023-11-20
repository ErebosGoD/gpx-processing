# GPX Data Visualization Application

This documentation provides an overview of the Flask application for visualizing GPX (GPS Exchange Format) data using Folium maps.

## Table of Contents
1. [Introduction](#introduction)
2. [Installation](#installation)
3. [Usage](#usage)
4. [Routes](#routes)
   - [1. Main Page](#1-main-page)
   - [2. Old Version Page](#2-old-version-page)
   - [3. Get Initials](#3-get-initials)
   - [4. Get Tracks](#4-get-tracks)
   - [5. Display Track](#5-display-track)
   - [6. Display Filtered Track](#6-display-filtered-track)
   - [7. Get Cars](#7-get-cars)
   - [8. Reset Map](#8-reset-map)

## Introduction <a name="introduction"></a>

This Flask application is designed to visualize GPX data on interactive maps using the Folium library. It utilizes a SQLite database (`gpxdata.db`) to store and retrieve GPS track information. The GPX files are stored in the `gpxdata` directory.

## Installation <a name="installation"></a>

1. Install the required Python packages:
   ```bash
   pip install Flask folium
   ```

2. Ensure that the required GPXParser module is available.

3. Run the application:
   ```bash
   python <filename>.py
   ```
   Replace `<filename>` with the name of the Python script containing the provided code.

## Usage <a name="usage"></a>

Access the application through a web browser at `http://127.0.0.1:5000/`. The main page displays an interactive map with GPX tracks.

## Routes <a name="routes"></a>

### 1. Main Page (`/`) <a name="1-main-page"></a>

- **URL:** `/`
- **Method:** GET
- **Description:** Renders the main page displaying an interactive Folium map with GPX tracks.
- **Actions:**
  - Creates database tables if they don't exist.
  - Parses and persists GPX data from the specified directory.
  - Initializes the map with default location (Germany) and zoom level.

### 2. Old Version Page (`/old_version`) <a name="2-old-version-page"></a>

- **URL:** `/old_version`
- **Method:** GET
- **Description:** Renders an old version of the main page with an interactive Folium map.

### 3. Get Initials (`/get_initials`) <a name="3-get-initials"></a>

- **URL:** `/get_initials`
- **Method:** GET
- **Description:** Retrieves and returns the initials of the GPX data.

### 4. Get Tracks (`/get_tracks/<initials>`) <a name="4-get-tracks"></a>

- **URL:** `/get_tracks/<initials>`
- **Method:** GET
- **Description:** Retrieves and returns track IDs associated with a specific set of initials.

### 5. Display Track (`/display_track/<int:track_id>`) <a name="5-display-track"></a>

- **URL:** `/display_track/<int:track_id>`
- **Method:** GET
- **Description:** Displays a specific track on the map based on the provided track ID.

### 6. Display Filtered Track (`/display_track/<initials>/<car>/<start_date>/<end_date>`) <a name="6-display-filtered-track"></a>

- **URL:** `/display_track/<initials>/<car>/<start_date>/<end_date>`
- **Method:** GET
- **Description:** Displays a filtered track on the map based on the provided initials, car, start date, and end date.

### 7. Get Cars (`/get_cars/<initials>`) <a name="7-get-cars"></a>

- **URL:** `/get_cars/<initials>`
- **Method:** GET
- **Description:** Retrieves and returns the cars driven by a driver with the specified initials.

### 8. Reset Map (`/reset_map`) <a name="8-reset-map"></a>

- **URL:** `/reset_map`
- **Method:** GET
- **Description:** Resets the map to its default position (Germany).
