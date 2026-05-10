/**
 * @swagger
 * components:
 *  schemas:
 *    User:
 *      type: object
 *      properties:
 *        _id:
 *          type: string
 *          description: The User ID
 *          example: 69f253e7883178fc9af55807
 *        name:
 *          type: string
 *          description: The User name
 *          example: James
 *        lastName:
 *          type: string
 *          description: The User last name
 *          example: Doe
 *        role:
 *          type: string
 *          description: The User role
 *          example: user
 *        email:
 *          type: string
 *          description: The User email
 *          example: james.doe@example.com
 *
 *    UserWithPassword:
 *      allOf:
 *        - $ref: '#/components/schemas/User'
 *        - type: object
 *          properties:
 *            password:
 *              type: string
 *              description: The User password
 *              example: mypassword123
 *
 *    UserWithRelations:
 *      allOf:
 *        - $ref: '#/components/schemas/UserWithPassword'
 *        - type: object
 *          properties:
 *            addresses:
 *              type: array
 *              items:
 *                type: string
 *                description: The User Address ID
 *                example: 69ebb7c772e6ce705398924b
 *            studies:
 *              type: array
 *              items:
 *                type: string
 *                description: The User Study ID
 *                example: 69ebba978bfac6546f8f1a20
 *
 *    Address:
 *      type: object
 *      properties:
 *        _id:
 *          type: string
 *          description: The Address ID
 *          example: 69ebb7c772e6ce705398924b
 *        street:
 *          type: string
 *          description: The Address street
 *          example: My Street 1234
 *        city:
 *          type: string
 *          description: The Address city
 *          example: Wichita
 *        province:
 *          type: string
 *          description: The Address province or state
 *          example: Kansas
 *        country:
 *          type: string
 *          description: The Address country
 *          example: USA
 *        user:
 *          type: string
 *          description: The Address User ID
 *          example: "69ebe66fa7998cbb6c4baceb"
 *
 *    Study:
 *      type: object
 *      properties:
 *        _id:
 *          type: string
 *          description: The Study ID
 *          example: 69ebba978bfac6546f8f1a20
 *        title:
 *          type: string
 *          description: The Study title
 *          example: System Engineer
 *        institution:
 *          type: string
 *          description: The Study institution
 *          example: National Technological University
 *        startDate:
 *          type: string
 *          description: The Study start date
 *          format: date
 *          example: 2005-03-07T00:00:00.000Z
 *        endDate:
 *          type: string
 *          description: The Study start date
 *          format: date
 *          example: 2016-12-21T00:00:00.000Z
 *        user:
 *          type: string
 *          description: The Study User ID
 *          example: "69ebe66fa7998cbb6c4baceb"
 *
 *    AuthResponse:
 *      type: object
 *      properties:
 *        token:
 *          type: string
 *          description: The JWT (Jason Web Token) that contains logged-in User ID
 *          example: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OWViYjczNDcyZTZjZTcwNTM5ODkyNDkiLCJpYXQiOjE3Nzg0MjQ0MDYsImV4cCI6MTc3OTAyOTIwNn0.vu17Xi_DH-L4i5qGI-fR3hBf6VLTRYqti3H35XA0yOo
 *
 *    UserWithRelationsResponse:
 *      type: object
 *      properties:
 *        data:
 *          $ref: '#/components/schemas/UserWithRelations'
 *
 *    UserWithPasswordResponse:
 *      type: object
 *      properties:
 *        data:
 *          $ref: '#/components/schemas/UserWithPassword'
 *
 *    UsersResponse:
 *      type: object
 *      properties:
 *        data:
 *          type: array
 *          items:
 *            $ref: '#/components/schemas/User'
 *
 *    AddressResponse:
 *      type: object
 *      properties:
 *        data:
 *          $ref: '#/components/schemas/Address'
 *
 *    AddressesResponse:
 *      type: object
 *      properties:
 *        data:
 *          type: array
 *          items:
 *            $ref: '#/components/schemas/Address'
 *
 *    StudyResponse:
 *      type: object
 *      properties:
 *        data:
 *          $ref: '#/components/schemas/Study'
 *
 *    StudiesResponse:
 *      type: object
 *      properties:
 *        data:
 *          type: array
 *          items:
 *            $ref: '#/components/schemas/Study'
 *
 *    SuccessMessage:
 *      type: object
 *      properties:
 *        message:
 *          type: string
 *          description: Message returned when an action is successful
 *          example: Address created successfully
 *
 *    ErrorResponse:
 *      type: object
 *      properties:
 *        error:
 *          type: string
 *          description: Error message returned when an action is unsuccessful
 *          example: Address not found
 */
