```markdown
# GPX Data Visualization App Documentation

This documentation provides an overview of a Flask web application designed to visualize GPX (GPS Exchange Format) data on a map. The application utilizes the Flask web framework for backend processing and Folium for generating interactive maps. GPX data parsing and manipulation are handled by the `GpxParser` class.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [License](#license)

## Prerequisites

Before running the application, ensure you have the following components installed:

- Python 3.x
- Flask
- Folium
- gpxpy

## Installation

1. Clone the repository to your local machine:
   ```bash
   git clone https://github.com/erebosgod/gpx-processing.git
   ```

2. Navigate to the project directory:
   ```bash
   cd gpx-processing
   ```

3. Install the required packages using `pip`:
   ```bash
   pip install flask folium gpxpy
   ```

## Usage

To run the application, execute the following command within the project directory:

```bash
python app.py
```

This will start the Flask development server, and the application will be accessible at `http://localhost:5000` in your web browser.

## API Endpoints

### 1. `/`

- **Method**: GET
- **Description**: Renders the main page of the application with a default map centered on Germany. GPX data is parsed and displayed on the map.
- **Parameters**: None
- **Response**: HTML content with an embedded interactive map.

### 2. `/get_initials`

- **Method**: GET
- **Description**: Retrieves the initials of the drivers available in the GPX data.
- **Parameters**: None
- **Response**: JSON array containing driver initials.

### 3. `/display_track/<initials>/<car>/<start_date>/<end_date>`

- **Method**: GET
- **Description**: Displays the GPX track on the map based on driver initials, car, start date, and end date.
- **Parameters**:
  - `initials`: Initials of the driver.
  - `car`: Car identifier.
  - `start_date`: Start date of the track (format: YYYY-MM-DD).
  - `end_date`: End date of the track (format: YYYY-MM-DD).
- **Response**: HTML content with an embedded interactive map displaying the specified track.

### 4. `/get_cars/<initials>`

- **Method**: GET
- **Description**: Retrieves the cars driven by the driver with the given initials.
- **Parameters**:
  - `initials`: Initials of the driver.
- **Response**: JSON array containing car information.

### 5. `/reset_map`

- **Method**: GET
- **Description**: Resets the map back to its default position (centered on Germany).
- **Parameters**: None
- **Response**: HTML content with an embedded interactive map centered on Germany.

## License

This project is licensed under the [MIT License](LICENSE).
```