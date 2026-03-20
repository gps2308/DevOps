# Containerized Web Application using Docker

## Student Details
Name: Gurpreet Singh  
Course: BTech CSE  
Subject: Containerization and DevOps  

---

## Project Overview
This project demonstrates containerization of a web application using Docker and Docker Compose.

The application consists of:
- Backend API (Node.js + Express)
- PostgreSQL Database
- Docker Compose for orchestration
- Volume for persistent storage
- Custom network for communication

---

## Project Structure
Project/
 ├── backend/
 │    ├── Dockerfile
 │    ├── package.json
 │    └── server.js
 │
 ├── database/
 │    └── Dockerfile
 │
 ├── docker-compose.yml
 └── README.md

---

## Technologies Used
- Docker  
- Docker Compose  
- Node.js  
- Express.js  
- PostgreSQL  

---

## How to Run the Project

Step 1: Go to project folder  
cd Project  

Step 2: Run Docker Compose  
docker-compose up --build  

---

## Access the Application

Home:  
http://localhost:3000  

API:  
http://localhost:3000/users  

---

## Features
- Containerized backend and database  
- Service communication using Docker network  
- Persistent storage using volumes  
- REST API integration with PostgreSQL  

---

## Screenshots Included
- Running containers (docker ps)  
- Network inspection  
- Volume inspection  
- Web application output  
- API response  

---

## Learning Outcomes
- Understanding Docker and containerization  
- Working with Docker Compose  
- Managing networks and volumes  
- Deploying multi-container applications  

---

## Conclusion
This project successfully demonstrates a containerized web application using Docker, ensuring scalability, portability, and efficient deployment.
