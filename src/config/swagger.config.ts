import swaggerJSDoc from "swagger-jsdoc";

const options: swaggerJSDoc.Options = {
  swaggerDefinition: {
    openapi: "3.1.1",
    tags: [
      { name: "Auth", description: "Authentication endpoints" },
      { name: "Users", description: "User management" },
      { name: "Addresses", description: "User addresses" },
      { name: "Profile", description: "User profile" },
      { name: "Studies", description: "User studies" }
    ],
    info: {
      title: "Address Dashboard Backend: REST API Node.js / Express / TypeScript",
      version: "1.0.0",
      description: "API docs for Address Dashboard"
    }
  },
  apis: ["./src/routes/*.ts"]
};

const swaggerSpec = swaggerJSDoc(options);

export default swaggerSpec;
