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

## ⚙️ Características principales

### 🔐 Autenticación y autorización

- Registro de usuarios
- Inicio de sesión con `JWT`
- Middleware de autenticación
- Middleware de roles
- Encriptación de contraseñas con `bcrypt`

### 👤 Gestión de usuarios

- CRUD de usuarios
- Perfil autenticado
- Roles de usuario
- Validaciones con `express-validator`

### 🏠 Gestión de domicilios

- Crear domicilios
- Obtener domicilios de usuarios
- Actualizar domicilios
- Eliminar domicilios

### 🎓 Gestión de estudios

- Crear estudios
- Obtener estudios por usuario
- Actualizar estudios
- Eliminar estudios

### 📘 Documentación API

- Swagger UI integrado
- OpenAPI 3.1.1
- Documentación modularizada por rutas
- Schemas reutilizables

### 🧪 Testing

- Tests unitarios e integración
- Jest
- Supertest
- MongoDB Memory Server

## ⚡ Inicio rápido

### 📋 Prerrequisitos

- **Node.js** (versión especificada en `.nvmrc`)
- **npm** - [Guía de instalación](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)
- **nvm** (opcional pero recomendado) - [UNIX](https://github.com/nvm-sh/nvm) | [Windows](https://github.com/coreybutler/nvm-windows)

### 🛠️ Instalación

```bash
# 1. Clonar el repositorio
git clone https://github.com/dauncosaciar/praefectus-backend.git
cd praefectus-backend

# 2. Usar la versión correcta de Node (la tomará de .nvmrc)
nvm use

# 3. Instalar dependencias
npm install

# 4. Levantar backend
npm run dev:api
```

El backend de Praefectus se levantará en `http://localhost:3333`

## 🔑 Variables de entorno

El proyecto utiliza distintos archivos `.env` según el entorno.

### `.env.development`

```env
DATABASE_URL=<mongodb_connection_string>
JWT_SECRET=<jwt_secret>
```

### `.env.test`

```env
DATABASE_URL=<mongodb_connection_string>
JWT_SECRET=<jwt_secret>
```

## ▶️ Scripts disponibles

### Desarrollo

```bash
npm run dev
```

Levanta el servidor en modo desarrollo utilizando Nodemon y TypeScript.

### Desarrollo API

```bash
npm run dev:api
```

Levanta el servidor en modo desarrollo utilizando Nodemon y TypeScript.

### Build de producción

```bash
npm run build
```

Compila TypeScript hacia JavaScript en la carpeta `dist`.

### Testing

```bash
npm test
```

### Cobertura de tests

```bash
npm run test:coverage
```

## 🌐 Endpoints principales

### Auth

| Método | Endpoint                |
| ------ | ----------------------- |
| POST   | `/api/v1/auth/register` |
| POST   | `/api/v1/auth/login`    |
| GET    | `/api/v1/auth/user`     |

### Profile

| Método | Endpoint                   |
| ------ | -------------------------- |
| GET    | `/api/v1/profile`          |
| POST   | `/api/v1/profile/password` |

### Users

| Método | Endpoint                |
| ------ | ----------------------- |
| POST   | `/api/v1/users`         |
| GET    | `/api/v1/users`         |
| GET    | `/api/v1/users/:userId` |
| PUT    | `/api/v1/users/:userId` |
| DELETE | `/api/v1/users/:userId` |

### Addresses

| Método | Endpoint                                     |
| ------ | -------------------------------------------- |
| POST   | `/api/v1/users/:userId/addresses`            |
| GET    | `/api/v1/users/:userId/addresses`            |
| GET    | `/api/v1/users/:userId/addresses/:addressId` |
| PUT    | `/api/v1/users/:userId/addresses/:addressId` |
| DELETE | `/api/v1/users/:userId/addresses/:addressId` |

### Studies

| Método | Endpoint                                 |
| ------ | ---------------------------------------- |
| POST   | `/api/v1/users/:userId/studies`          |
| GET    | `/api/v1/users/:userId/studies`          |
| GET    | `/api/v1/users/:userId/studies/:studyId` |
| PUT    | `/api/v1/users/:userId/studies/:studyId` |
| DELETE | `/api/v1/users/:userId/studies/:studyId` |

## 📘 Documentación Swagger

La documentación interactiva está disponible en:

```bash
http://localhost:3333/docs
```

Incluye:

- Endpoints documentados
- Schemas reutilizables
- Seguridad JWT Bearer
- Ejemplos de requests/responses
- Swagger UI personalizado

## 📄 Archivos JSON de endpoints y ambiente

En la raíz de este repositorio se adjuntan los archivos `.json` de Postman referentes a las **colecciones** de endpoints de la api (`Praefectus.postman_collection.json`) y del **environment** donde están las variables se utilizan en todas las colecciones (`Praefectus.postman_environment.json`).

Puedes abrir Postman e importar estos archivos para tener todas las colecciones y las variables del environment para así poder interactuar y probar la API.

## 🧱 Arquitectura utilizada

El proyecto sigue una arquitectura modular basada en capas:

- **Routes** → Definición de endpoints
- **Controllers** → Lógica de negocio
- **Models** → Esquemas y modelos de MongoDB
- **Middlewares** → Validaciones y autorización
- **Config** → Configuraciones globales
- **Docs** → Swagger/OpenAPI
- **Tests** → Unit tests y de integración
- **Utils** → Funciones auxiliares

## 🔒 Seguridad

- Contraseñas hasheadas con `bcrypt`
- Autenticación mediante `JWT`
- Protección de rutas privadas
- Validación de datos con `express-validator`
- Variables sensibles mediante `dotenv`

## 🧪 Testing y calidad

El proyecto cuenta con:

- Tests automatizados
- Cobertura de endpoints
- Base de datos en memoria para testing (`mongodb-memory-server`)

## 👨‍💻 Autor

[**Daniel Alejandro Uncos Aciar**](https://daua-dev-portfolio.infinityfreeapp.com/)

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
