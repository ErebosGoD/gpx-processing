# GPX Data Parser Documentation

The `GpxParser` class provides methods to parse and manipulate GPX (GPS Exchange Format) data. This class is utilized in the Flask web application to handle database operations related to GPX files, drivers, cars, tracks, and waypoints.

## Class: GpxParser

### Constructor

#### `__init__(self, database_path)`

- **Description**: Initializes the `GpxParser` object with a connection to the SQLite database.
- **Parameters**:
  - `database_path`: Path to the SQLite database file.
  
### Methods

#### `create_tables(self)`

- **Description**: Creates database tables if they don't exist. Tables include `files`, `drivers`, `cars`, `tracks`, and `waypoints`.

#### `persist_gpx_data(self, gpx_directory)`

- **Description**: Parses and persists GPX data from the specified directory into the database.
- **Parameters**:
  - `gpx_directory`: Path to the directory containing GPX files.

#### `get_initials(self)`

- **Description**: Retrieves distinct driver initials from the database.
- **Returns**: List of unique driver initials.

#### `get_cars(self, initials)`

- **Description**: Retrieves distinct car license plates driven by a specific driver.
- **Parameters**:
  - `initials`: Initials of the driver.
- **Returns**: List of unique car license plates associated with the specified driver initials.

#### `get_waypoints_for_track(self, initials, car, start_date, end_date)`

- **Description**: Retrieves latitude and longitude coordinates of waypoints for a specific track based on driver initials, car, start date, and end date.
- **Parameters**:
  - `initials`: Initials of the driver.
  - `car`: Car license plate.
  - `start_date`: Start date of the track (format: YYYY-MM-DD).
  - `end_date`: End date of the track (format: YYYY-MM-DD).
- **Returns**: List of tuples containing latitude and longitude coordinates of waypoints.

---

*Note: This documentation covers the methods and functionality of the `GpxParser` class. For information about integrating this class into your Flask application, please refer to the main application documentation.*
