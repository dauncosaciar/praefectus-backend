import swaggerJSDoc from "swagger-jsdoc";

const options: swaggerJSDoc.Options = {
  swaggerDefinition: {
    openapi: "3.1.1",
    tags: [
      {
        name: "Addresses",
        description: "API operations related to CRUD of User Addresses."
      },
      {
        name: "Studies",
        description: "API operations related to CRUD of User Studies."
      },
      {
        name: "Users",
        description: "API operations related to CRUD of Users."
      },
      {
        name: "Auth",
        description: "API operations related to User registration and login."
      },
      {
        name: "Profile",
        description: "API operations related to update a logged-in User profile."
      }
    ],
    info: {
      title: "Address Dashboard Backend: REST API Node.js / Express / TypeScript",
      version: "1.0.0",
      description: "API docs for Address Dashboard"
    }
  },
  apis: [
    "./src/routes/address.routes.ts",
    "./src/routes/study.routes.ts",
    "./src/routes/user.routes.ts",
    "./src/routes/auth.routes.ts",
    "./src/routes/profile.routes.ts"
  ]
};

const swaggerSpec = swaggerJSDoc(options);

export default swaggerSpec;
