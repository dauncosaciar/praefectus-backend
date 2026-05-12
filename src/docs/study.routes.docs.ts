/**
 * @swagger
 * /api/v1/users/{userId}/studies:
 *  post:
 *    summary: Create a new study for a user
 *    description: Create a new study associated with a specific user.
 *    tags: [Studies]
 *    security:
 *      - bearerAuth: []
 *    parameters:
 *      - in: path
 *        name: userId
 *        description: The ID of the user who owns the study
 *        required: true
 *        schema:
 *          type: string
 *          format: ObjectId
 *          example: 69ebe66fa7998cbb6c4baceb
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            required: [title, institution, startDate, endDate]
 *            properties:
 *              title:
 *                type: string
 *                example: Computer Science Degree
 *              institution:
 *                type: string
 *                example: National University of Tucuman
 *              startDate:
 *                type: string
 *                format: date
 *                example: 2020-03-01
 *              endDate:
 *                type: string
 *                format: date
 *                example: 2025-12-20
 *    responses:
 *      201:
 *        description: Study created successfully
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/SuccessMessage'
 *            example:
 *              message: Study created successfully
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
 *              error: Error creating study
 *
 *  get:
 *    summary: Get all studies from a user
 *    description: Returns a list of all studies associated with a specific user.
 *    tags: [Studies]
 *    security:
 *      - bearerAuth: []
 *    parameters:
 *      - in: path
 *        name: userId
 *        description: The ID of the user whose studies will be retrieved
 *        required: true
 *        schema:
 *          type: string
 *          format: ObjectId
 *          example: 69ebe66fa7998cbb6c4baceb
 *    responses:
 *      200:
 *        description: Studies retrieved successfully
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/StudiesResponse'
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
 *              error: Error retrieving studies
 *
 * /api/v1/users/{userId}/studies/{studyId}:
 *  get:
 *    summary: Get a study by id
 *    description: Returns a specific study associated with a specific user.
 *    tags: [Studies]
 *    security:
 *      - bearerAuth: []
 *    parameters:
 *      - in: path
 *        name: userId
 *        description: The ID of the user who owns the study
 *        required: true
 *        schema:
 *          type: string
 *          format: ObjectId
 *          example: 69ebe66fa7998cbb6c4baceb
 *      - in: path
 *        name: studyId
 *        description: The ID of the study to retrieve
 *        required: true
 *        schema:
 *          type: string
 *          format: ObjectId
 *          example: 6a01eb4636faf0ead31d2e86
 *    responses:
 *      200:
 *        description: Study retrieved successfully
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/StudyResponse'
 *      400:
 *        description: Bad request due to invalid user ID or study ID
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
 *              error: The study does not belong to the user
 *      404:
 *        description: User or study not found
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/ErrorResponse'
 *            examples:
 *              userNotFound:
 *                summary: User not found
 *                value:
 *                  error: User not found
 *              studyNotFound:
 *                summary: Study not found
 *                value:
 *                  error: Study not found
 *      500:
 *        description: Network or server error
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/ErrorResponse'
 *            example:
 *              error: Error searching for studies
 *
 *  put:
 *    summary: Update a study
 *    description: Update all information from a specific study associated with a specific user.
 *    tags: [Studies]
 *    security:
 *      - bearerAuth: []
 *    parameters:
 *      - in: path
 *        name: userId
 *        description: The ID of the user who owns the study
 *        required: true
 *        schema:
 *          type: string
 *          format: ObjectId
 *          example: 69ebe66fa7998cbb6c4baceb
 *      - in: path
 *        name: studyId
 *        description: The ID of the study to update
 *        required: true
 *        schema:
 *          type: string
 *          format: ObjectId
 *          example: 6a01eb4636faf0ead31d2e86
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            required: [title, institution, startDate, endDate]
 *            properties:
 *              title:
 *                type: string
 *                example: Updated Computer Science Degree
 *              institution:
 *                type: string
 *                example: Updated National University of Tucuman
 *              startDate:
 *                type: string
 *                format: date
 *                example: 2020-03-02
 *              endDate:
 *                type: string
 *                format: date
 *                example: 2025-12-21
 *    responses:
 *      200:
 *        description: Study updated successfully
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/SuccessMessage'
 *            example:
 *              message: Study updated successfully
 *      400:
 *        description: Bad request due to invalid user ID, study ID or invalid input data
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
 *              error: The study does not belong to the user
 *      404:
 *        description: User or study not found
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/ErrorResponse'
 *            examples:
 *              userNotFound:
 *                summary: User not found
 *                value:
 *                  error: User not found
 *              studyNotFound:
 *                summary: Study not found
 *                value:
 *                  error: Study not found
 *      500:
 *        description: Network or server error
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/ErrorResponse'
 *            example:
 *              error: Error updating study
 *
 *  delete:
 *    summary: Delete a study
 *    description: Delete a specific study associated with a specific user.
 *    tags: [Studies]
 *    security:
 *      - bearerAuth: []
 *    parameters:
 *      - in: path
 *        name: userId
 *        description: The ID of the user who owns the study
 *        required: true
 *        schema:
 *          type: string
 *          format: ObjectId
 *          example: 69ebe66fa7998cbb6c4baceb
 *      - in: path
 *        name: studyId
 *        description: The ID of the study to delete
 *        required: true
 *        schema:
 *          type: string
 *          format: ObjectId
 *          example: 6a01eb4636faf0ead31d2e86
 *    responses:
 *      200:
 *        description: Study deleted successfully
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/SuccessMessage'
 *            example:
 *              message: Study deleted successfully
 *      400:
 *        description: Bad request due to invalid user ID or study ID
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
 *              error: The study does not belong to the user
 *      404:
 *        description: User or study not found
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/ErrorResponse'
 *            examples:
 *              userNotFound:
 *                summary: User not found
 *                value:
 *                  error: User not found
 *              studyNotFound:
 *                summary: Study not found
 *                value:
 *                  error: Study not found
 *      500:
 *        description: Network or server error
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/ErrorResponse'
 *            example:
 *              error: Error deleting study
 */
