# Restaurant

Menú de platos, búsqueda de platos, funcionalidades para agregar platos al menú y calcular promedios a partir de sus características.

## Ejecutando la aplicación

- Se debera proporcional una API KEY para SpoonacularAPI en `src/environments/environment.ts`

`environment.ts` debe verse así:
    export const environment = {
        production: false,
        API_URI: "https://api.spoonacular.com/recipes",
        API_KEY: "api_key_here",
        MAX_SEARCH_RESULTS: 6
    };

- Instalar las dependencias
- Ejecutar el script `start` para comenzar el servidor en `http://localhost:4200/`
- Deberás validarte en la pantalla de login para acceder al home

## Dependencias
- Angular 14
- Bootstrap
- Sweetalert2