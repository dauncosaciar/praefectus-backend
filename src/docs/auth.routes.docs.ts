/**
 * @swagger
 * /api/v1/auth/register:
 *  post:
 *    summary: Register a new user
 *    description: Register a new user account to use the dashboard app.
 *    tags: [Auth]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            required: [name, lastName, email, password, passwordConfirmation]
 *            properties:
 *              name:
 *                type: string
 *                example: John
 *              lastName:
 *                type: string
 *                example: Doe
 *              email:
 *                type: string
 *                format: email
 *                example: john.doe@addressdashboard.com
 *              password:
 *                type: string
 *                example: 123456789
 *              passwordConfirmation:
 *                type: string
 *                example: 123456789
 *    responses:
 *      201:
 *        description: Successful response
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/SuccessMessage'
 *            example:
 *              message: Account created successfully, you can now log in
 *      400:
 *        description: Bad request due to invalid input data
 *      409:
 *        description: Conflict with an existing record
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/ErrorResponse'
 *            example:
 *              error: The email address entered is already in use by another user
 *      500:
 *        description: Network or server error
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/ErrorResponse'
 *            example:
 *              error: Error registering user
 *
 * /api/v1/auth/login:
 *  post:
 *    summary: Log in with a user
 *    description: Log in with an existing user account to use the dashboard app.
 *    tags: [Auth]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            required: [email, password]
 *            properties:
 *              email:
 *                type: string
 *                format: email
 *                example: john.doe@addressdashboard.com
 *              password:
 *                type: string
 *                example: 123456789
 *    responses:
 *      200:
 *        description: Successful response
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/AuthResponse'
 *      400:
 *        description: Bad request due to invalid input data
 *      404:
 *        description: User not found
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/ErrorResponse'
 *            example:
 *              error: User not found
 *      401:
 *        description: Unauthorized user
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/ErrorResponse'
 *            example:
 *              error: Incorrect password
 *      500:
 *        description: Network or server error
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/ErrorResponse'
 *            example:
 *              error: Error logging in
 *
 * /api/v1/auth/user:
 *  get:
 *    summary: Get authenticated user
 *    description: Returns the currently authenticated user data using JWT authentication.
 *    tags: [Auth]
 *    security:
 *      - bearerAuth: []
 *    responses:
 *      200:
 *        description: Authenticated user data
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/UserResponse'
 *      401:
 *        description: Missing, invalid or expired token
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/ErrorResponse'
 *            examples:
 *              missingToken:
 *                summary: Missing token
 *                value:
 *                  error: "Unauthorized"
 *              invalidToken:
 *                summary: Invalid token
 *                value:
 *                  error: "Invalid token"
 *      500:
 *        description: Internal server error
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/ErrorResponse'
 *            example:
 *              error: "Invalid token"
 */
