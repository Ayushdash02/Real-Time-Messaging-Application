# Real-Time Messaging Application

This is a real-time messaging application built with a client-server architecture. The project utilizes modern web development tools and frameworks to provide seamless real-time communication between users.

## Features
- Real-time messaging
- User authentication
- Group chats
- Typing indicators
- Responsive design
- Scalable architecture

## Tech Stack
### Client:
- React
- Vite
- Bootstrap 5
- Axios

### Server:
- Node.js
- Express.js
- Socket.IO
- MongoDB (or any database of your choice)

---

## Prerequisites
Ensure you have the following installed on your system:
- [Node.js](https://nodejs.org/) (v14 or later)
- [MongoDB](https://www.mongodb.com/) (if using MongoDB as the database)
- A code editor like [VS Code](https://code.visualstudio.com/)

---

## Setup Instructions
### Step 1: Clone the Repository
Extract the ZIP file or clone the project repository:
```bash
git clone <repository-url>
```
Navigate to the project folder:
```bash
cd project-folder-name
```

### Step 2: Install Dependencies
#### Client:
1. Navigate to the `client` folder:
   ```bash
   cd client
   ```
2. Install dependencies:
   ```bash
   npm install
   ```

#### Server:
1. Navigate to the `server` folder:
   ```bash
   cd ../server
   ```
2. Install dependencies:
   ```bash
   npm install
   ```

### Step 3: Configure Environment Variables
Create a `.env` file in both the `client` and `server` directories and provide the necessary environment variables. Example:
#### Server `.env`:
```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/messaging-app
JWT_SECRET=your-secret-key
SOCKET_PORT=5001
```
#### Client `.env`:
```env
VITE_API_URL=http://localhost:5000
```

### Step 4: Start the Application
#### Start the Server:
1. Navigate to the `server` folder:
   ```bash
   cd server
   ```
2. Start the backend server:
   ```bash
   npm start
   ```

#### Start the Client:
1. Navigate to the `client` folder:
   ```bash
   cd ../client
   ```
2. Start the frontend development server:
   ```bash
   npm run dev
   ```

---

## Accessing the Application
- Open your browser and navigate to the client:
  ```
  http://localhost:3000
  ```
- Ensure the backend server is running to handle API requests and real-time events.

---

## Project Structure
### Client
```
client/
|-- src/
|   |-- components/
|   |-- pages/
|   |-- styles/
|-- public/
|-- vite.config.js
```

### Server
```
server/
|-- routes/
|-- models/
|-- controllers/
|-- utils/
|-- server.js
```

---

## Screenshots
### Sign In Page:
![Sign In Page](./previews/Sign%20In.png)

### Sign Up Page:
![Sign Up Page](./previews/Sign%20Up.png)

---

## Known Issues and Troubleshooting
- **Vite command not recognized:** Install Vite locally or globally.
  ```bash
  npm install vite
  ```
- **CORS errors:** Ensure the server allows requests from the client’s domain.
- **MongoDB connection issues:** Verify the `MONGO_URI` in the `.env` file.

---

## Future Enhancements
- Add media support (images, videos)
- Implement push notifications
- Add user status indicators (online/offline)
- Enhance security with rate limiting and encryption

---

## License
This project is licensed under the MIT License.

---

## Contributing
Contributions are welcome! Please fork the repository and create a pull request.

---

## Contact
For questions or support, please contact the project owner.
