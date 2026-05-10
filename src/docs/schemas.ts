/**
 * @swagger
 * components:
 *  schemas:
 *    User:
 *      type: object
 *      properties:
 *        _id:
 *          type: string
 *        name:
 *          type: string
 *        lastName:
 *          type: string
 *        role:
 *          type: string
 *        email:
 *          type: string
 *
 *    UserPrivate:
 *      allOf:
 *        - $ref: '#/components/schemas/User'
 *        - type: object
 *          properties:
 *            password:
 *              type: string
 *
 *    UserWithRelations:
 *      allOf:
 *        - $ref: '#/components/schemas/User'
 *        - type: object
 *          properties:
 *            addresses:
 *              type: array
 *              items:
 *                type: string
 *            studies:
 *              type: array
 *              items:
 *                type: string
 *
 *    Address:
 *      type: object
 *      properties:
 *        _id:
 *          type: string
 *        street:
 *          type: string
 *        city:
 *          type: string
 *        province:
 *          type: string
 *        country:
 *          type: string
 *        user:
 *          type: string
 *          example: "69ebe66fa7998cbb6c4baceb"
 *
 *    Study:
 *      type: object
 *      properties:
 *        _id:
 *          type: string
 *        title:
 *          type: string
 *        institution:
 *          type: string
 *        startDate:
 *          type: string
 *          format: date
 *        endDate:
 *          type: string
 *          format: date
 *        user:
 *          type: string
 *          example: "69ebe66fa7998cbb6c4baceb"
 *
 *    AuthResponse:
 *      type: object
 *      properties:
 *        token:
 *          type: string
 *
 *    UserResponse:
 *      type: object
 *      properties:
 *        data:
 *          $ref: '#/components/schemas/UserWithRelations'
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
 *          example: "Dirección creada correctamente"
 *
 *    ErrorResponse:
 *      type: object
 *      properties:
 *        error:
 *          type: string
 *          example: "Dirección no encontrada"
 */
