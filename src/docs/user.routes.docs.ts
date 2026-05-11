/**
 * @swagger
 * /api/v1/users:
 *  post:
 *    summary: Create a new user
 *    description: Create a new user account to use the dashboard app.
 *    tags: [Users]
 *    security:
 *      - bearerAuth: []
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            required: [name, lastName, role, email, password]
 *            properties:
 *              name:
 *                type: string
 *                example: John
 *              lastName:
 *                type: string
 *                example: Doe
 *              role:
 *                type: string
 *                enum: [admin, user]
 *                example: admin
 *              email:
 *                type: string
 *                format: email
 *                example: john.doe@addressdashboard.com
 *              password:
 *                type: string
 *                example: 123456789
 *    responses:
 *      201:
 *        description: User created successfully
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/SuccessMessage'
 *            example:
 *              message: User created successfully
 *      400:
 *        description: Bad request due to invalid input data
 *      401:
 *        description: Unauthorized user
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/ErrorResponse'
 *            example:
 *              error: Unauthorized
 *      403:
 *        description: Forbidden action
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/ErrorResponse'
 *            example:
 *              error: Action allowed only to administrators
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
 *              error: Error creating user
 *
 *  get:
 *    summary: Get a list of all users except the one who is logged in
 *    description: Return a list of all users except the one who is logged in.
 *    tags: [Users]
 *    security:
 *      - bearerAuth: []
 *    responses:
 *      200:
 *        description: Successful response
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/UsersResponse'
 *      401:
 *        description: Unauthorized user
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/ErrorResponse'
 *            example:
 *              error: Unauthorized
 *      403:
 *        description: Forbidden action
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/ErrorResponse'
 *            example:
 *              error: Action allowed only to administrators
 *      500:
 *        description: Network or server error
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/ErrorResponse'
 *            example:
 *              error: Error retrieving users
 *
 * /api/v1/users/{userId}:
 *  get:
 *    summary: Get a user by id
 *    description: Returns a specific user data by its ID.
 *    tags: [Users]
 *    security:
 *      - bearerAuth: []
 *    parameters:
 *      - in: path
 *        name: userId
 *        description: The ID of the user to retrieve
 *        required: true
 *        schema:
 *          type: string
 *          format: ObjectId
 *          example: 69f253e7883178fc9af55807
 *    responses:
 *      200:
 *        description: User retrieved successfully
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/UserWithRelationsResponse'
 *      400:
 *        description: Bad request due to invalid user ID
 *      401:
 *        description: Unauthorized user
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/ErrorResponse'
 *            example:
 *              error: Unauthorized
 *      403:
 *        description: Forbidden action
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/ErrorResponse'
 *            example:
 *              error: Action allowed only to administrators
 *      404:
 *        description: User not found
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/ErrorResponse'
 *            example:
 *              error: User not found
 *      500:
 *        description: Network or server error
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/ErrorResponse'
 *            example:
 *              error: Error searching for user
 *
 *  put:
 *    summary: Update a user
 *    description: Update all information from a specific user account.
 *    tags: [Users]
 *    security:
 *      - bearerAuth: []
 *    parameters:
 *      - in: path
 *        name: userId
 *        description: The ID of the user to update
 *        required: true
 *        schema:
 *          type: string
 *          format: ObjectId
 *          example: 69f253e7883178fc9af55807
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            required: [name, lastName, role, email, password]
 *            properties:
 *              name:
 *                type: string
 *                example: John
 *              lastName:
 *                type: string
 *                example: Doe
 *              role:
 *                type: string
 *                enum: [admin, user]
 *                example: user
 *              email:
 *                type: string
 *                format: email
 *                example: john.doe@addressdashboard.com
 *              password:
 *                type: string
 *                example: newpassword123
 *    responses:
 *      200:
 *        description: User updated successfully
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/SuccessMessage'
 *            example:
 *              message: User updated successfully
 *      400:
 *        description: Bad request due to invalid user ID or invalid input data
 *      401:
 *        description: Unauthorized user
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/ErrorResponse'
 *            example:
 *              error: Unauthorized
 *      403:
 *        description: Forbidden action
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/ErrorResponse'
 *            example:
 *              error: Action allowed only to administrators
 *      404:
 *        description: User not found
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/ErrorResponse'
 *            example:
 *              error: User not found
 *      500:
 *        description: Network or server error
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/ErrorResponse'
 *            example:
 *              error: Error updating user
 *
 *  delete:
 *    summary: Delete a user
 *    description: Delete a user account and all related addresses and studies.
 *    tags: [Users]
 *    security:
 *      - bearerAuth: []
 *    parameters:
 *      - in: path
 *        name: userId
 *        description: The ID of the user to delete
 *        required: true
 *        schema:
 *          type: string
 *          format: ObjectId
 *          example: 69f253e7883178fc9af55807
 *    responses:
 *      200:
 *        description: User deleted successfully
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/SuccessMessage'
 *            example:
 *              message: User deleted successfully
 *      400:
 *        description: Bad request due to invalid user ID
 *      401:
 *        description: Unauthorized user
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/ErrorResponse'
 *            example:
 *              error: Unauthorized
 *      403:
 *        description: Forbidden action
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/ErrorResponse'
 *            example:
 *              error: Action allowed only to administrators
 *      404:
 *        description: User not found
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/ErrorResponse'
 *            example:
 *              error: User not found
 *      500:
 *        description: Network or server error
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/ErrorResponse'
 *            example:
 *              error: Error deleting user
 */
