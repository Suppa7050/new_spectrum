# New Spectrum

## Overview
**New Spectrum** is a collaborative platform designed to connect individuals with ideas and solutions. This dynamic application allows users to upload problem statements and receive responses from others, fostering an environment of knowledge sharing and collaboration. Additionally, registered users can contribute ideas to existing problem statements, creating a community-driven approach to solving real-world challenges.

## Features
- **Problem Statement Sharing**: Users can upload problem statements for others to view and respond to.
- **Idea Contribution**: Registered users can contribute solutions or ideas to existing problem statements.
- **User Registration**: Secure user authentication and registration system.
- **Dynamic User Interaction**: Intuitive interface for seamless interaction between users.

## Tech Stack
- **Frontend**: React
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Others**: RESTful APIs for communication between frontend and backend.

## Prerequisites
- Node.js 16+
- npm or yarn
- MongoDB instance (local or cloud-based)
- mentioned in requirements.txt
## Installation and Usage

### Step 1: Clone the Repository
```bash
git clone https://github.com/Suppa7050/new_spectrum.git
cd new_spectrum
```

### Step 2: Set Up the Backend
1. Navigate to the `backend` directory:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the `backend` folder with the following details:
   ```env
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_secret_key
   PORT=5000
   ```
4. Start the backend server:
   ```bash
   npm start
   ```
   The backend will run on port 5000 by default.

### Step 3: Set Up the Frontend
1. Navigate to the `frontend` directory:
   ```bash
   cd ../frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the frontend server:
   ```bash
   npm start
   ```
   The frontend will run on port 3000 by default.

### Step 4: Access the Application
- Open your browser and navigate to `http://localhost:3000` to access the platform.

## How It Works
1. **User Registration and Authentication**:
   - New users can register and log in securely.
2. **Problem Statement Submission**:
   - Users can upload their problem statements for others to view and address.
3. **Idea Contribution**:
   - Registered users can browse existing problem statements and contribute ideas or solutions.
4. **Collaboration**:
   - Encourages interaction and knowledge sharing within the community.

## Contributing
Contributions are welcome! To contribute:
1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Submit a pull request with a detailed description of your changes.

## Acknowledgments
- **MERN Stack**: For providing a robust framework for full-stack development.
- **MongoDB Atlas**: For cloud-based database management.

---
For more details, visit the [New Spectrum repository](https://github.com/Suppa7050/new_spectrum).
contact: dhanunjaysuppa@gmail.com

