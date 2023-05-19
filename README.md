# E-COMMERCE PARA HAPPY SKIN

Proyecto Final del Curso React JS de CoderHouse

```
https://github.com/GoGordini/ProyectoReactEntregaFinalTubio.git
```

## Instalación

### Dependencias

En primer lugar, debería tener instalado Node.js. Si no fuera así, lo puede instalar desde el sitio oficial:

```
https://nodejs.org
```

El proyecto usa, entre otras, las siguientes dependencias:

- Formik para trabajar con formularios https://formik.org/
- Yup para validar formularios https://www.npmjs.com/package/yup
- Firebase de Google
  https://firebase.google.com/?hl=es
- Material UI
  https://mui.com/
- Sweet Alert para alertas
  https://sweetalert2.github.io/
- Tostify para alertas
  https://www.npmjs.com/package/react-toastify

Para instalar todo lo necesario, luego de clonar el repositorio debe ejecutar en la terminal:

### `npm install`

### Variables de entorno

Se requieren las siguientes variables de entorno, que deben ser generadas en un archivo .env:

- REACT_APP_apiKey=
- REACT_APP_authDomain=
- REACT_APP_projectId=
- REACT_APP_storageBucket=
- REACT_APP_messagingSenderId=
- REACT_APP_appId=

### Base de Datos

Los documentos tienen los siguientes campos:

- title
- price
- stock
- description
- category (por la cual se filtra)
- img

### Correr el proyecto

Finalmente, para que el proyecto corra, ejecutar en la terminal:

### `npm start`

## Deployment

Próximamente, usando Vercel.
