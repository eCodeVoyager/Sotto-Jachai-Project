Here's the updated version of the **Sotto-Jachai Project** overview with the requested changes:

---

# 📊 **Sotto-Jachai Project**

## Project Overview

Sotto-Jachai is a secure system designed to prevent propaganda and false information, particularly during mass protests. Utilizing the MERN stack (MongoDB, Express.js, React.js, Node.js) and advanced cryptography with 128-bit small hashing, the system ensures data integrity and security. Organizers can log in, submit content, and the data is hashed and verified by an admin team. Users can then verify the content using a key, ensuring that only truthful and validated information is shared.

---

## 🚀 **Features**

- **Content Validation**: Prevents the spread of false information by verifying content using secure hashing methods.
- **User Authentication**: Organizers and users can log in to submit and verify content.
- **Admin Verification**: Admin team hashes and verifies submitted content.
- **High Security**: Uses 128-bit small hashing for data security.

---

## 🏗️ **System Architecture**

- **Architecture**: Modular Monolith with clear separation of concerns for maintainability and scalability.
- **Security**: Implements HTTP Parameter Pollution (HPP) protection and rate limiting for enhanced security.

---

## 🖥️ **Frontend**

### **Technologies Used**

![React.js](https://img.shields.io/badge/React.js-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Redux](https://img.shields.io/badge/Redux-764ABC?style=for-the-badge&logo=redux&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![Shadcn UI](https://img.shields.io/badge/Shadcn%20UI-333333?style=for-the-badge&logo=shadcn&logoColor=white)
![React Router](https://img.shields.io/badge/React%20Router-CC0000?style=for-the-badge&logo=react-router&logoColor=white)

### **Deployment**

![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)

### **Key Features**

- **Login & Authentication**: Secure login for organizers and admins using token management with cookies.
- **Content Submission**: Organizers can submit content with image upload via drag and drop.
- **Verification Dashboard**: Users can verify content authenticity using a unique key.
- **Admin Panel**: Admins can view, hash, and approve or reject content submissions with secure actions.
- **State Management**: Managed with Redux for efficient state handling.
- **Real-time Updates**: New post creation and status updates provide a real-time experience.

### **Setup Instructions**

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/Sotto-Jachai-Frontend.git
   ```
2. Install dependencies:
   ```bash
   cd Sotto-Jachai-Frontend
   npm install
   ```
3. Start the development server:
   ```bash
   npm start
   ```

---

## 🛠️ **Backend**

### **Technologies Used**

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
![Mongoose](https://img.shields.io/badge/Mongoose-880000?style=for-the-badge&logo=mongoose&logoColor=white)
![Passport.js](https://img.shields.io/badge/Passport.js-34E27A?style=for-the-badge&logo=passport&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=JSON%20web%20tokens&logoColor=white)
![OAuth2](https://img.shields.io/badge/OAuth2-3EAAAF?style=for-the-badge&logo=oauth&logoColor=white)
![Joi](https://img.shields.io/badge/Joi-338833?style=for-the-badge&logo=joi&logoColor=white)

### **Deployment**

![Azure](https://img.shields.io/badge/Azure-0078D4?style=for-the-badge&logo=microsoft-azure&logoColor=white)

### **Key Features**

- **Content Hashing Key**: Utilizes 128-bit small key to secure and validate content.
- **API Rate Limiting**: Limits the number of requests to prevent abuse and enhance security.
- **Scalable Modular Monolith**: Structured with a modular monolith architecture, ensuring maintainability and scalability.

### **Setup Instructions**

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/Sotto-Jachai-Backend.git
   ```
2. Install dependencies:
   ```bash
   cd Sotto-Jachai-Backend
   npm install
   ```
3. Set up environment variables:
   - Create a `.env` file in the root directory.
   - Add the necessary environment variables, such as database connection strings, secret keys, etc.
4. Start the development server:
   ```bash
   npm run dev
   ```

---

## 📝 **Environment Variables**

Create a `.env` file in both frontend and backend directories with the following keys `.env.example`
file.

## 🧑‍💻 **Contributing**

We welcome contributions! Please fork the repository and submit a pull request for review.

---

## 👥 **Team Members**

- **Salman Farsi**

  - [GitHub](https://github.com/sa)

- **Mohiuddin Al Ehsan**

  - [GitHub](https://github.com/ehsan-profile)

- **Sanaur Khan**
  - [GitHub](https://github.com/sanaur-profile)

---

## 📜 **License**

This project is licensed under the MIT License.

---

## 📬 **Contact**

For any inquiries or support, please reach out to any of our member thought email.
