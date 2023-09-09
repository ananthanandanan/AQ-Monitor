# AQ-Monitor: Air Quality Monitoring Dashboard 🌬️📊

AQ-Monitor is a data visualization dashboard built using **ReactJS**, **Mantine**, **ApexCharts**, and **Redux Toolkit** to monitor air quality data collected from Praan devices installed in the real world. This dashboard provides an intuitive interface to analyze and explore air quality measurements, including PM1, PM2.5, and PM10 particle concentrations, wind speed.

## Features 🚀

- **Location Comparison:** Compare air quality data from three different locations throughout the day, including separate visualizations for PM1, PM2.5, and PM10 values.

- **Time-Range Filtering:** Easily filter and focus on specific time ranges within the dataset to identify trends or patterns.

- **Time-Series Graph:** View a time-series graph that overlays PM readings (PM1, PM2.5, and PM10) on top of each other for comprehensive analysis.

- **Dark Mode:** Toggle between light and dark modes for comfortable viewing in different lighting environments.

- **Dataset Switching:** Switch between different datasets to view the same data in different ways.

## Project Setup 🛠️

### Local Development

1. Clone the repository from GitHub:

   ```bash
   git clone git@github.com:ananthanandanan/AQ-Monitor.git
   ```

2. Navigate to the project directory:

   ```bash
   cd aq-monitor
   ```

3. Install the required dependencies:

   ```bash
    npm install
   ```

4. Start the development server:

   ```bash
    npm start
   ```

5. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Data Sources 📊

- Using the Original Dataset, prepared two mock datasets for the visualisation of the dashboard.
- The data is hosted on firebase `realtime database`.
