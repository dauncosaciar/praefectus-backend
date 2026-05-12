import swaggerJSDoc from "swagger-jsdoc";
import { SwaggerUiOptions } from "swagger-ui-express";

const options: swaggerJSDoc.Options = {
  swaggerDefinition: {
    openapi: "3.1.1",
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT"
        }
      }
    },
    tags: [
      { name: "Auth", description: "Authentication endpoints" },
      { name: "Profile", description: "Authenticated user profile" },
      { name: "Users", description: "User management" },
      { name: "Addresses", description: "User addresses" },
      { name: "Studies", description: "User studies" }
    ],
    info: {
      title: "AddressDashboard: API Documentation",
      version: "1.0.0",
      description:
        "API Docs for AddressDashboard. This API is developed using Node.js, Express.js, JavaScript, and TypeScript, and uses Mongoose as the ODM and MongoDB as the database."
    }
  },
  apis: ["./src/docs/*.ts"]
};

const swaggerSpec = swaggerJSDoc(options);

const swaggerUiOptions: SwaggerUiOptions = {
  customSiteTitle: "AddressDashboard: API Documentation"
};

export default swaggerSpec;

export { swaggerUiOptions };
