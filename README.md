# Praefectus Backend

![Praefectus Hero][praefectus-hero]

Backend REST API de **Praefectus**, desarrollado con Node.js, Express y TypeScript.

El proyecto implementa autenticación basada en JWT, gestión de `Usuarios`, `Perfiles`, `Domicilios` y `Estudios`, roles y permisos de usuarios, además de documentación interactiva mediante Swagger/OpenAPI.

## 🚀 Stack tecnológico

![Node.js][Node.js] ![TypeScript][TypeScript] ![Express.js][Express.js] ![MongoDB][MongoDB] ![Mongoose][Mongoose] ![JWT][JWT] ![Swagger][Swagger] ![Jest][Jest]

## 📁 Estructura del proyecto

```bash
📦 praefectus-backend/
├─ 📂 public/
│  └─ 📂 assets/
│     ├─ 📄 favicon.svg
│     ├─ 📄 logo.svg
│     └─ 📄 praefectus-backend-github.jpg
├─ 📂 src/
│  ├─ 📂 config/
│  │  ├─ 📄 db.config.ts
│  │  └─ 📄 swagger.config.ts
│  ├─ 📂 controllers/
│  │  ├─ 📄 address.controller.ts
│  │  ├─ 📄 auth.controller.ts
│  │  ├─ 📄 profile.controller.ts
│  │  ├─ 📄 study.controller.ts
│  │  └─ 📄 user.controller.ts
│  ├─ 📂 docs/
│  │  ├─ 📄 address.routes.docs.ts
│  │  ├─ 📄 auth.routes.docs.ts
│  │  ├─ 📄 profile.routes.docs.ts
│  │  ├─ 📄 schemas.ts
│  │  ├─ 📄 study.routes.docs.ts
│  │  └─ 📄 user.routes.docs.ts
│  ├─ 📂 middlewares/
│  │  ├─ 📄 address.middleware.ts
│  │  ├─ 📄 auth.middleware.ts
│  │  ├─ 📄 role.middleware.ts
│  │  ├─ 📄 study.middleware.ts
│  │  ├─ 📄 user.middleware.ts
│  │  └─ 📄 validation.middleware.ts
│  ├─ 📂 models/
│  │  ├─ 📄 address.model.ts
│  │  ├─ 📄 study.model.ts
│  │  └─ 📄 user.model.ts
│  ├─ 📂 routes/
│  │  ├─ 📄 address.routes.ts
│  │  ├─ 📄 auth.routes.ts
│  │  ├─ 📄 profile.routes.ts
│  │  ├─ 📄 study.routes.ts
│  │  └─ 📄 user.routes.ts
│  ├─ 📂 tests/
│  │  ├─ 📂 controllers/
│  │  │  ├─ 📄 address.controller.test.ts
│  │  │  ├─ 📄 auth.controller.test.ts
│  │  │  ├─ 📄 profile.controller.test.ts
│  │  │  ├─ 📄 study.controller.test.ts
│  │  │  └─ 📄 user.controller.test.ts
│  │  ├─ 📂 middlewares/
│  │  │  ├─ 📄 address.middleware.test.ts
│  │  │  ├─ 📄 auth.middleware.test.ts
│  │  │  ├─ 📄 role.middleware.test.ts
│  │  │  ├─ 📄 study.middleware.test.ts
│  │  │  ├─ 📄 user.middleware.test.ts
│  │  │  └─ 📄 validation.middleware.test.ts
│  │  ├─ 📂 routes/
│  │  │  ├─ 📄 address.routes.test.ts
│  │  │  ├─ 📄 auth.routes.test.ts
│  │  │  ├─ 📄 profile.routes.test.ts
│  │  │  ├─ 📄 study.routes.test.ts
│  │  │  └─ 📄 user.routes.test.ts
│  │  └─ 📂 setup/
│  │     ├─ 📄 app.ts
│  │     ├─ 📄 db.ts
│  │     └─ 📄 jest.ts
│  ├─ 📂 utils/
│  │  ├─ 📄 auth.ts
│  │  └─ 📄 jwt.ts
│  ├─ 📄 index.ts
│  └─ 📄 server.ts
├─ 📄 .env.development
├─ 📄 .env.test
├─ 📄 .gitignore
├─ 📄 jest.config.js
├─ 📄 package-lock.json
├─ 📄 package.json
├─ 📄 README.md
└─ 📄 tsconfig.json
```

<!-- MARKDOWN LINKS & IMAGES -->

[praefectus-hero]: public/assets/praefectus-backend-github.jpg
[Node.js]: https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white
[TypeScript]: https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white
[Express.js]: https://img.shields.io/badge/Express.js-404D59?style=for-the-badge&logo=express&logoColor=white
[MongoDB]: https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white
[Mongoose]: https://img.shields.io/badge/Mongoose-880000?style=for-the-badge&logo=mongoose&logoColor=white
[JWT]: https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens
[Swagger]: https://img.shields.io/badge/Swagger-%23Clojure?style=for-the-badge&logo=swagger&logoColor=white
[Jest]: https://img.shields.io/badge/Jest-C21325?style=for-the-badge&logo=jest&logoColor=white
