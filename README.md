# ProcesssoftProyecto

Este proyecto se generó con [Angular CLI](https://github.com/angular/angular-cli) versión 14.1.1.

## Programas necesarios

- [Nodejs](https://nodejs.org/es/download/) v12.18.0 o Superior.
- IDE de desarrollo de tu comodidad Ej. [VS Code](https://code.visualstudio.com/download)
- [PostMan](https://www.postman.com/downloads/) para puebas de APIS. (Opcional)
- [Git](https://git-scm.com/downloads) para poder gestionar las versiones.

## Como Clonar

Comando para clonar:

` git clone [LINK DEL REPOSITORIO]` 

## Instrucciones de uso para Front-end

Abrirlo desde un entorno de desarrollo (recomendado Visual Studio)
Tener instalado nodejs, nodemon, angular CLI en la versión 14 y GIT.
Usar el comando `npm i` para instalar librerias.

## Correr proyecto de desarrollo

Ejecute `ng serve` o `ng s`  para correr este proyecto. Navegue a `http://localhost:4200/`. 
La aplicación se recargará automáticamente si cambia alguno de los archivos de origen.


## Cambio de rutas para correr el proyecto

Debe dirigirse a la carpeta 'src/enviroments' abrir los dos archivos y modificar el apiUrl del proyecto en caso de que sea requerido, por defecto se usa:   
`apiUrl : 'http://localhost:3000'`

## Subir cambios

Para subir cambios al repositorio es necesario utilizar los siguientes comandos.

`git add .`
`git commit -m "tu mensaje"`
`git push origin master`
