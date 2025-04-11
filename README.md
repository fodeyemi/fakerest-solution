# fakerest-solution

## Overview

This project is a simple REST API built using **TypeScript** and **Express.js**. It provides endpoints to calculate the average age of users and the average number of friends per city. The application is designed to demonstrate basic API development and data processing.

## Features

- **Endpoints**:
    - `GET /`: Returns a "Hello World!" message.
    - `GET /averageAge`: Calculates and returns the average age of users grouped by city.
    - `GET /averageFriends`: Calculates and returns the average number of friends per city.

- **TypeScript**: Ensures type safety and better development experience.
- **Modular Design**: The logic for user data processing is encapsulated in a `Services` class.

## Installation

1. Clone the repository:
   ```bash
   git clone git@github.com:fodeyemi/fakerest-solution.git
   cd fakerest-solution
    ```
   
2. Install dependencies:
   ```bash
    npm install
    ```
   
3. Start the server:
   ```bash
   npm run dev
   ```
   
4. Curl commands to test the endpoints:
   ```bash
   curl http://localhost:3000/
   curl http://localhost:3000/averageAge
   curl http://localhost:3000/averageFriends
   ```

## Security

To secure the API, consider implementing the following measures:

1. **Authentication and Authorization**:
    - Use JSON Web Tokens (JWT) or OAuth2 to authenticate users and restrict access to authorized endpoints.

2. **Input Validation and Sanitization**:
    - Validate and sanitize all incoming requests to prevent injection attacks (e.g., SQL injection, XSS).

3. **HTTPS**:
    - Use HTTPS to encrypt data in transit and protect against man-in-the-middle attacks.

4. **Rate Limiting**:
    - Implement rate limiting to prevent abuse and mitigate denial-of-service (DoS) attacks.

5. **CORS**:
    - Configure Cross-Origin Resource Sharing (CORS) to restrict which domains can access the API.

6. **Error Handling**:
    - Avoid exposing sensitive information in error messages. Return generic error responses to clients.

7. **Environment Variables**:
    - Store sensitive information (e.g., API keys, database credentials) in environment variables and avoid hardcoding them in the source code.

8. **Dependency Management**:
    - Regularly update dependencies to patch known vulnerabilities.

9. **Security Headers**:
    - Use HTTP security headers like `Content-Security-Policy`, `X-Content-Type-Options`, and `Strict-Transport-Security`.

10. **Logging and Monitoring**:
    - Implement logging and monitoring to detect and respond to suspicious activities.

By incorporating these practices, the API can be made more secure and resilient to common threats.
