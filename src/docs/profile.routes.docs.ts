/**
 * @swagger
 * /api/v1/profile:
 *  put:
 *    summary: Update profile information but not the password
 *    description: Update name, lastName and email from the currently authenticated user.
 *    tags: [Profile]
 *    security:
 *      - bearerAuth: []
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            required: [name, lastName, email]
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
 *    responses:
 *      200:
 *        description: Profile updated successfully
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/SuccessMessage'
 *            example:
 *              message: "Profile successfully updated"
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
 *              error: Error updating profile
 *
 * /api/v1/profile/password:
 *  put:
 *    summary: Update profile's password
 *    description: Update only password from the currently authenticated user.
 *    tags: [Profile]
 *    security:
 *      - bearerAuth: []
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            required: [currentPassword, newPassword, newPasswordConfirmation]
 *            properties:
 *              currentPassword:
 *                type: string
 *                example: 123456789
 *              newPassword:
 *                type: string
 *                example: 987654321
 *              newPasswordConfirmation:
 *                type: string
 *                example: 987654321
 *    responses:
 *      200:
 *        description: Password successfully changed
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/SuccessMessage'
 *            example:
 *              message: "Password successfully changed"
 *      400:
 *        description: Bad request due to invalid input data
 *      401:
 *        description: Unauthorized user or wrong current password
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/ErrorResponse'
 *            examples:
 *              unauthorizedUser:
 *                summary: Unauthorized user
 *                value:
 *                  error: "Unauthorized"
 *              wrongCurrentPassword:
 *                summary: Wrong current password
 *                value:
 *                  error: "Your current password is incorrect"
 *      500:
 *        description: Network or server error
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/ErrorResponse'
 *            example:
 *              error: Error updating password
 */
