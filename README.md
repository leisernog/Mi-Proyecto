# Proyecto de Automatización con Playwright y TypeScript

Este proyecto implementa pruebas automatizadas utilizando Playwright con TypeScript y siguiendo el patrón Page Object Model (POM).

## Estructura del Proyecto

```
├── pages/
│   ├── BasePage.ts
│   └── LoginPage.ts
├── tests/
│   └── login.spec.ts
├── playwright.config.ts
└── tsconfig.json
```

## Requisitos Previos

- Node.js (versión 14 o superior)
- npm (incluido con Node.js)

## Instalación

1. Clonar el repositorio
2. Instalar dependencias:
   ```bash
   npm install
   ```
3. Instalar navegadores de Playwright:
   ```bash
   npx playwright install
   ```

## Ejecutar Pruebas

- Ejecutar todas las pruebas:
  ```bash
  npm test
  ```

- Ejecutar pruebas con interfaz gráfica:
  ```bash
  npm run test:headed
  ```

- Ejecutar pruebas en modo debug:
  ```bash
  npm run test:debug
  ```

- Ver reporte de pruebas:
  ```bash
  npm run report
  ```

## Estructura POM

- `BasePage.ts`: Contiene métodos comunes reutilizables para todas las páginas
- `LoginPage.ts`: Implementación específica para la página de login
- Cada página nueva debe extender de BasePage

## Configuración

La configuración de Playwright se encuentra en `playwright.config.ts`, donde puedes modificar:
- Timeouts
- Navegadores
- Reportes
- Capturas de pantalla
- Videos
- Trazas 