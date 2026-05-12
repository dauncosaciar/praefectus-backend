/**
 * @swagger
 * /api/v1/users/{userId}/addresses:
 *  post:
 *    summary: Create a new address for a user
 *    description: Create a new address associated with a specific user.
 *    tags: [Addresses]
 *    security:
 *      - bearerAuth: []
 *    parameters:
 *      - in: path
 *        name: userId
 *        description: The ID of the user who owns the address
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
 *            required: [street, city, province, country]
 *            properties:
 *              street:
 *                type: string
 *                example: My Street 1234
 *              city:
 *                type: string
 *                example: Wichita
 *              province:
 *                type: string
 *                example: Kansas
 *              country:
 *                type: string
 *                example: USA
 *    responses:
 *      201:
 *        description: Address created successfully
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/SuccessMessage'
 *            example:
 *              message: Address created successfully
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
 *              error: Error creating address
 *
 *  get:
 *    summary: Get all addresses from a user
 *    description: Returns a list of all addresses associated with a specific user.
 *    tags: [Addresses]
 *    security:
 *      - bearerAuth: []
 *    parameters:
 *      - in: path
 *        name: userId
 *        description: The ID of the user whose addresses will be retrieved
 *        required: true
 *        schema:
 *          type: string
 *          format: ObjectId
 *          example: 69f253e7883178fc9af55807
 *    responses:
 *      200:
 *        description: Addresses retrieved successfully
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/AddressesResponse'
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
 *              error: Error retrieving addresses
 *
 * /api/v1/users/{userId}/addresses/{addressId}:
 *  get:
 *    summary: Get an address by id
 *    description: Returns a specific address associated with a specific user.
 *    tags: [Addresses]
 *    security:
 *      - bearerAuth: []
 *    parameters:
 *      - in: path
 *        name: userId
 *        description: The ID of the user who owns the address
 *        required: true
 *        schema:
 *          type: string
 *          format: ObjectId
 *          example: 69f253e7883178fc9af55807
 *      - in: path
 *        name: addressId
 *        description: The ID of the address to retrieve
 *        required: true
 *        schema:
 *          type: string
 *          format: ObjectId
 *          example: 69ebb7c772e6ce705398924b
 *    responses:
 *      200:
 *        description: Address retrieved successfully
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/AddressResponse'
 *      400:
 *        description: Bad request due to invalid user ID or address ID
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
 *              error: The address does not belong to the user
 *      404:
 *        description: User or address not found
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/ErrorResponse'
 *            examples:
 *              userNotFound:
 *                summary: User not found
 *                value:
 *                  error: User not found
 *              addressNotFound:
 *                summary: Address not found
 *                value:
 *                  error: Address not found
 *      500:
 *        description: Network or server error
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/ErrorResponse'
 *            example:
 *              error: Error searching for address
 *
 *  put:
 *    summary: Update an address
 *    description: Update all information from a specific address associated with a specific user.
 *    tags: [Addresses]
 *    security:
 *      - bearerAuth: []
 *    parameters:
 *      - in: path
 *        name: userId
 *        description: The ID of the user who owns the address
 *        required: true
 *        schema:
 *          type: string
 *          format: ObjectId
 *          example: 69f253e7883178fc9af55807
 *      - in: path
 *        name: addressId
 *        description: The ID of the address to update
 *        required: true
 *        schema:
 *          type: string
 *          format: ObjectId
 *          example: 69ebb7c772e6ce705398924b
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            required: [street, city, province, country]
 *            properties:
 *              street:
 *                type: string
 *                example: New Street 4321
 *              city:
 *                type: string
 *                example: Los Angeles
 *              province:
 *                type: string
 *                example: California
 *              country:
 *                type: string
 *                example: USA
 *    responses:
 *      200:
 *        description: Address updated successfully
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/SuccessMessage'
 *            example:
 *              message: Address updated successfully
 *      400:
 *        description: Bad request due to invalid user ID, address ID or invalid input data
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
 *              error: The address does not belong to the user
 *      404:
 *        description: User or address not found
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/ErrorResponse'
 *            examples:
 *              userNotFound:
 *                summary: User not found
 *                value:
 *                  error: User not found
 *              addressNotFound:
 *                summary: Address not found
 *                value:
 *                  error: Address not found
 *      500:
 *        description: Network or server error
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/ErrorResponse'
 *            example:
 *              error: Error updating address
 *
 *  delete:
 *    summary: Delete an address
 *    description: Delete a specific address associated with a specific user.
 *    tags: [Addresses]
 *    security:
 *      - bearerAuth: []
 *    parameters:
 *      - in: path
 *        name: userId
 *        description: The ID of the user who owns the address
 *        required: true
 *        schema:
 *          type: string
 *          format: ObjectId
 *          example: 69f253e7883178fc9af55807
 *      - in: path
 *        name: addressId
 *        description: The ID of the address to delete
 *        required: true
 *        schema:
 *          type: string
 *          format: ObjectId
 *          example: 69ebb7c772e6ce705398924b
 *    responses:
 *      200:
 *        description: Address deleted successfully
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/SuccessMessage'
 *            example:
 *              message: Address deleted successfully
 *      400:
 *        description: Bad request due to invalid user ID or address ID
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
 *              error: The address does not belong to the user
 *      404:
 *        description: User or address not found
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/ErrorResponse'
 *            examples:
 *              userNotFound:
 *                summary: User not found
 *                value:
 *                  error: User not found
 *              addressNotFound:
 *                summary: Address not found
 *                value:
 *                  error: Address not found
 *      500:
 *        description: Network or server error
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/ErrorResponse'
 *            example:
 *              error: Error deleting address
 */
