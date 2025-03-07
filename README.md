# Carbon Tracker

Carbon Tracker is a full-stack web application built with the MERN stack (MongoDB excluded) that helps individuals track their carbon emissions generated by travel. The app takes travel-based inputs from users, calculates the carbon emissions, and provides recommendations on how to reduce them using Gemini AI. It also leverages localStorage to store previous calculations, which are displayed in a popup.

## Features
1. **Track Carbon Emissions**: Allows users to input travel-related data and calculate their carbon emissions.
2. **Gemini AI Integration**: Provides personalized recommendations to reduce carbon emissions based on the inputs.
3. **LocalStorage Support**: Saves previous carbon emission calculations and displays them in a popup for easy reference.
4. **User-Friendly Interface**: Interactive UI for easy input of travel data and display of carbon emission results and recommendations.

## Tech Stack
- **Frontend**: React.js, Tailwind CSS
- **Backend**: Node.js, Express.js
- **AI Integration**: Gemini AI for recommendations
- **Storage**: localStorage for storing previous carbon emission data

## Usage
1. **Track Carbon Emissions**: Enter travel data such as distance, mode of transport, and travel frequency to calculate carbon emissions.
2. **Receive Recommendations**: Gemini AI will provide suggestions on how to reduce or avoid carbon emissions based on the input data.
3. **View Previous Calculations**: Any previous carbon emission calculations will be saved in localStorage and can be viewed in a popup for comparison.

## LocalStorage
This app uses localStorage to store and retrieve the results of previous carbon emission calculations. This allows users to easily review past calculations without needing to re-enter the same data.

## AI Recommendations
Gemini AI analyzes the travel data provided by the user and offers recommendations to reduce the carbon footprint, such as using alternative modes of transportation, adjusting travel routes, or adopting sustainable practices.

## How to Run This Project Locally

### Prerequisites
Before running the project locally, make sure you have the following installed:
1. **Node.js**: Download and install it from [here](https://nodejs.org/).
2. **npm**: npm is included with Node.js.

### Running the Project

1. **Clone the Repository**

   First, clone the repository to your local machine:

   ```bash
   git clone https://github.com/Kishan-Jaiswar/carbon-tracker.git
