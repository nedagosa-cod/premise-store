# PREMISE STORE 360°

Página web de simulación de entorno de conversacion y vista panoramica de tienda para practica de estudio de mercado

## Agradecimientos

- [Diseño carteles de madera](https://www.freepik.es/vector-gratis/conjunto-diferentes-letreros-madera_27284843.htm#fromView=search&page=1&position=1&uuid=0de51b9d-a8d4-4a10-8847-c8f70942e144)
- [Personaje de conversación](https://www.freepik.es/)
- [Mockup celular](https://www.freepik.es/autor/zlatko-plamenov)

## Authors

- [@nedagosa-cod](https://github.com/nedagosa-cod)

## Color Reference

| Color     | Hex                                                              |
| --------- | ---------------------------------------------------------------- |
| $p-color  | ![#ff5b4a](https://via.placeholder.com/10/ff5b4a?text=+) #ff5b4a |
| $p2-color | ![#ffa200](https://via.placeholder.com/10/ffa200?text=+) #ffa200 |
| $s-color  | ![#1669ff](https://via.placeholder.com/10/1669ff?text=+) #1669ff |
| $s2-color | ![#7e38ff](https://via.placeholder.com/10/7e38ff?text=+) #7e38ff |

## Instalación

Asegurate de tener instalado Node js.

Instala los paquetes de NPM

```bash
  npm install
```

Go to the project directory

```bash
  cd my-project
```

## Despliegue

para desplegar este proyecto

```bash
  npm run deploy
```

## Pantallazos

![App Screenshot](https://raw.githubusercontent.com/nedagosa-cod/premise-store/main/src/assets/wallpapers/captura_1.png)

![App Screenshot](https://raw.githubusercontent.com/nedagosa-cod/premise-store/main/src/assets/wallpapers/captura_2.png)

## Soporte

Para soporte, comuniquese al correo nestordavid94@gmail.com

## Tech Stack

**Client:** React, Sass

**Server:** "Desarrollo a cargo de PREMISE"

**Dependencias:** pannellum, swetalert2, react-data-table

## Variables para bases de datos

Las variables se encuentran en el contexto global del proyecto el cual se encuentra en la carpeta "context" del proyecto dentro del archivo MexContext.jsx

Variable de usuario : userData

```javascript
const [userData, setUserData] = useState({});
```

Variable de resultados : userResults

```javascript
const [userResults, setUserResults] = useState([]);
```

## Funcion para enviar datos

Se deja la funcion "updateResults" para el código que almacena la información en la base de datos.
