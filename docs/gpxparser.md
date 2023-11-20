# GPX Data Parser Documentation

This documentation provides an overview of the `GpxParser` class, which is responsible for parsing and persisting GPX data into an SQLite database.

## Table of Contents
1. [Introduction](#introduction)
2. [Class Initialization](#class-initialization)
3. [Database Tables](#database-tables)
4. [Methods](#methods)
   - [1. create_tables](#create-tables)
   - [2. persist_gpx_data](#persist-gpx-data)
   - [3. get_initials](#get-initials)
   - [4. get_cars](#get-cars)
   - [5. get_waypoints_for_track](#get-waypoints-for-track)
   - [6. get_track_ids_for_initials_id](#get-track-ids-for-initials-id)
   - [7. get_track_for_track_id](#get-track-for-track-id)

## Introduction <a name="introduction"></a>

The `GpxParser` class is designed to parse GPX files and persist the extracted data into an SQLite database. It creates tables for files, drivers, cars, tracks, and waypoints. The parser extracts information such as initials, license plates, waypoints, and tracks from GPX files and stores them in the respective tables.

## Class Initialization <a name="class-initialization"></a>

- **Method:** `__init__(self, database_path)`
- **Parameters:**
  - `database_path`: Path to the SQLite database file.
- **Description:** Initializes the `GpxParser` class, creating a connection to the SQLite database.

## Database Tables <a name="database-tables"></a>

1. **Files Table:**
   - Tracks parsed files to avoid redundant processing.
   - Columns: `file_id`, `filename`, `invalid_structure` (flag indicating invalid XML structure).

2. **Drivers Table:**
   - Stores driver information.
   - Columns: `driver_id`, `initials`.

3. **Cars Table:**
   - Stores information about cars.
   - Columns: `car_id`, `license_plate`.

4. **Tracks Table:**
   - Links drivers, cars, and tracks.
   - Columns: `track_id`, `driver_id`, `car_id`.

5. **Waypoints Table:**
   - Stores latitude, longitude, and timestamp information for each waypoint.
   - Columns: `waypoint_id`, `track_id`, `latitude`, `longitude`, `timestamp`.

## Methods <a name="methods"></a>

### 1. create_tables <a name="create-tables"></a>

- **Description:** Creates database tables for files, drivers, cars, tracks, and waypoints if they don't exist.

### 2. persist_gpx_data <a name="persist-gpx-data"></a>

- **Parameters:**
  - `gpx_directory`: Directory containing GPX files.
- **Description:** Parses GPX files in the specified directory, extracts relevant information, and persists it in the database.

### 3. get_initials <a name="get-initials"></a>

- **Returns:** List of unique driver initials present in the database.
- **Description:** Retrieves and returns the distinct initials of the drivers stored in the database.

### 4. get_cars <a name="get-cars"></a>

- **Parameters:**
  - `initials`: Initials of the driver.
- **Returns:** List of unique license plates associated with the specified driver initials.
- **Description:** Retrieves and returns the distinct license plates of cars driven by a specific driver.

### 5. get_waypoints_for_track <a name="get-waypoints-for-track"></a>

- **Parameters:**
  - `initials`: Initials of the driver.
  - `car`: License plate of the car.
  - `start_date`: Start date for filtering waypoints.
  - `end_date`: End date for filtering waypoints.
- **Returns:** List of tuples containing latitude and longitude for waypoints.
- **Description:** Retrieves waypoints for a track based on the specified variables (initials, car, start date, end date).

### 6. get_track_ids_for_initials_id <a name="get-track-ids-for-initials-id"></a>

- **Parameters:**
  - `initials`: Initials of the driver.
- **Returns:** List of track IDs associated with the specified driver initials.
- **Description:** Retrieves track IDs for a given set of driver initials.

### 7. get_track_for_track_id <a name="get-track-for-track-id"></a>

- **Parameters:**
  - `track_id`: Track ID.
- **Returns:** List of tuples containing latitude and longitude for waypoints of the specified track.
- **Description:** Retrieves waypoints for a track based on the provided track ID.