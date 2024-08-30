
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
- **Caching**: Redis is used for efficient caching to improve performance.
- **Security**: Implements HTTP Parameter Pollution (HPP) protection and rate limiting for enhanced security.

---

## 🖥️ **Frontend**

### **Technologies Used**

![React.js](https://img.shields.io/badge/React.js-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Axios](https://img.shields.io/badge/Axios-563D7C?style=for-the-badge&logo=axios&logoColor=white)
![Styled Components](https://img.shields.io/badge/Styled--Components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)
![React Router](https://img.shields.io/badge/React%20Router-CC0000?style=for-the-badge&logo=react-router&logoColor=white)

### **Deployment**

![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)

### **Key Features**
- **Login & Authentication**: Secure login for organizers and admins.
- **Content Submission**: Organizers can submit content for verification.
- **Verification Dashboard**: Users can verify content authenticity using a unique key.
- **Admin Panel**: Admins can view, hash, and approve or reject content submissions.

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
![Redis](https://img.shields.io/badge/Redis-DC382D?style=for-the-badge&logo=redis&logoColor=white)
![Joi](https://img.shields.io/badge/Joi-338833?style=for-the-badge&logo=joi&logoColor=white)

### **Deployment**

![Azure](https://img.shields.io/badge/Azure-0078D4?style=for-the-badge&logo=microsoft-azure&logoColor=white)

### **Key Features**
- **Content Hashing**: Utilizes 128-bit small hashing to secure and validate content.
- **API Rate Limiting**: Limits the number of requests to prevent abuse and enhance security.
- **Caching with Redis**: Improves performance by caching frequently accessed data.
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

Create a `.env` file in both frontend and backend directories with the following keys:

- **Backend**:
  - `PORT`
  - `MONGO_URI`
  - `REDIS_URL`
  - `JWT_SECRET`
  - `RATE_LIMIT_WINDOW`
  - `HPP_OPTIONS`
- **Frontend**:
  - `REACT_APP_API_URL`
  - `REACT_APP_AUTH_KEY`

---

## 🧑‍💻 **Contributing**

We welcome contributions! Please fork the repository and submit a pull request for review.

---

## 📜 **License**

This project is licensed under the MIT License.

---

## 📬 **Contact**

For any inquiries or support, please reach out to [your email].
