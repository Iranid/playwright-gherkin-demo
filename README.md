
---

````markdown
# 🤖 Playwright + Cucumber (Gherkin) + POM – Automation Exercise v1.0.0

![Playwright](https://img.shields.io/badge/Playwright-1.48.0-brightgreen?logo=playwright)
![Cucumber](https://img.shields.io/badge/Cucumber-BDD-blue?logo=cucumber)
![License](https://img.shields.io/badge/License-MIT-lightgrey)
![Version](https://img.shields.io/badge/version-1.0.0-orange)

Proyecto de **automatización end-to-end (E2E)** desarrollado con **Playwright**, **Cucumber (Gherkin)** y **Page Object Model (POM)**.  
Los escenarios y código base fueron generados parcialmente con **Comet de Perplexity AI**, demostrando el uso de IA para crear pruebas automatizadas completas desde cero.

📘 [Descargar Guía de Implementación (PDF)](Guia_de_Implementacion_Playwright_BDD_v1.0.pdf)

---

## 🧠 Descripción general

El proyecto automatiza flujos clave del sitio [automationexercise.com](https://automationexercise.com), incluyendo:

- ✅ Carga del sitio y validación de elementos principales  
- ✅ Navegación a la sección de productos  
- ✅ Acceso a la pantalla de registro/login  
- ✅ Registro exitoso de usuario  
- ✅ Manejo de errores (email inválido, duplicado, login fallido)

Usa un enfoque **BDD (Behavior Driven Development)**, donde cada prueba está escrita en lenguaje natural (`.feature`), enlazada a **step definitions** y estructurada bajo **POM**.

---

## 🧩 Tecnologías principales

| Tecnología | Propósito |
|-------------|------------|
| **Playwright** | Motor de automatización y ejecución de pruebas |
| **Cucumber (Gherkin)** | Define escenarios legibles por negocio |
| **Node.js / npm** | Entorno de ejecución y gestión de dependencias |
| **POM (Page Object Model)** | Estructura modular y mantenible |
| **Comet (Perplexity AI)** | Generación inicial de escenarios, informes QA y código base |

---

## ⚙️ Instalación y configuración

1. **Clonar el repositorio**
   ```bash
   git clone https://github.com/Iranid/playwright-gherkin-demo.git
   cd playwright-gherkin-demo
````

2. **Instalar dependencias**

   ```bash
   npm install
   ```

3. **Instalar navegadores de Playwright**

   ```bash
   npx playwright install
   ```

4. **Ejecutar los tests BDD**

   ```bash
   npm run test:bdd
   ```

---

## 🧪 Estructura del proyecto

```plaintext
playwright-gherkin-demo/
│
├── features/
│   └── signup.feature             # Escenarios en lenguaje Gherkin (BDD)
│
├── src/
│   ├── pages/                     # Page Objects
│   │   ├── HomePage.js
│   │   ├── ProductsPage.js
│   │   ├── AuthPage.js
│   │   └── AccountPage.js
│   └── steps/
│       └── automation.steps.js    # Step definitions que ejecutan acciones Playwright
│
├── cucumber.js                    # Configuración de Cucumber
├── .gitignore                     # Archivos a excluir del repositorio
├── LICENSE                        # Licencia MIT
├── package.json                   # Dependencias y scripts de ejecución
└── README.md                      # Documentación del proyecto
```

---

## 💬 Prompt completo usado en Comet (Perplexity)

> **Actúa como un QA tester automatizador experto.**
>
> Quiero que pruebes el sitio: [https://automationexercise.com](https://automationexercise.com)
>
> **Tareas a realizar:**
>
> 1️⃣ **NAVEGACIÓN Y ACCIONES (casos positivos y negativos)**
>
> * Abre la página principal y confirma que cargue correctamente.
> * Haz clic en el enlace del menú superior “Products” y verifica que se muestre el listado de productos.
> * Vuelve (o abre) la opción “Signup / Login”.
> * En la pantalla de “Signup”, intenta registrar un usuario nuevo con datos de prueba válidos (nombre y email aleatorio).
> * Luego intenta registrar otro usuario usando **un email repetido o inválido** (por ejemplo “test@” o uno ya registrado) y observa si se muestra un mensaje de error.
> * En el formulario de login, prueba iniciar sesión con credenciales incorrectas y revisa si se muestra el mensaje de error correspondiente.
> * Si la navegación o las acciones fallan, detalla lo que ocurrió.
>
> 2️⃣ **CONSTRUYE UN INFORME QA (en español)**
> Para cada caso probado, genera un informe con los siguientes campos:
>
> * ID del caso
> * Paso
> * Resultado esperado
> * Resultado obtenido (según lo que tú hayas visto durante las pruebas)
> * Estado (PASS / FAIL)
>
> Incluye al menos estos casos:
>
> * TC-AE-001: Cargar home correctamente
> * TC-AE-002: Navegar a Products y verificar listado
> * TC-AE-003: Acceder a Signup / Login
> * TC-AE-004: Registrar nuevo usuario con datos válidos
> * TC-AE-005: Intentar registrar usuario con email repetido o inválido (negativo)
> * TC-AE-006: Intentar iniciar sesión con credenciales incorrectas (negativo)
>
> 3️⃣ **GENERA LOS MISMOS CASOS EN GHERKIN**
> Convierte los casos anteriores a escenarios Gherkin en español, usando las palabras reservadas:
>
> * Given / When / Then / And / Feature
> * Usa títulos descriptivos y separa los escenarios con saltos de línea para que pueda copiarse directamente al archivo `.feature`.
>
> 4️⃣ **GENERA CÓDIGO REPRODUCIBLE EN PLAYWRIGHT**
> Crea un script de Playwright en JavaScript que:
>
> * Abra [https://automationexercise.com](https://automationexercise.com)
> * Valide que la página cargue correctamente
> * Navegue a Products
> * Vaya a Signup / Login
> * Intente registrar un usuario nuevo con email aleatorio (caso positivo)
> * Intente registrar un usuario con email inválido o repetido (caso negativo)
> * Intente login con credenciales erróneas (caso negativo)
> * Genere aserciones claras con `expect` para cada paso
>
> El código debe ser ejecutable con:
>
> ```bash
> npx playwright test
> ```
>
> Y seguir el formato estándar:
>
> ```js
> import { test, expect } from '@playwright/test';
> // ...
> ```

---

## 🧠 Ejemplo de escenario

```gherkin
Scenario: TC-AE-004 - Registrar usuario válido
  Given estoy en la pantalla de registro
  When ingreso un nombre y un email válido y completo el formulario
  Then recibo el mensaje "ACCOUNT CREATED!"
  And puedo iniciar sesión con las credenciales
```

---

## 🧩 Ejemplo de POM

```js
// src/pages/HomePage.js
class HomePage {
  constructor(page) {
    this.page = page;
    this.url = 'https://automationexercise.com/';
    this.productsLink = 'a[href="/products"]';
    this.signupLoginLink = 'a[href="/login"]';
  }

  async goto() {
    await this.page.goto(this.url);
  }

  async isLoaded() {
    await this.page.waitForLoadState('networkidle');
    return this.page.locator('text=CATEGORY').isVisible();
  }
}

module.exports = { HomePage };
```

---

## 🧾 Licencia

Este proyecto está bajo la **[MIT License](LICENSE)**.
Libre para uso, copia y modificación, manteniendo la atribución a la autora.

---

## 🏷️ Versión

**v1.0.0** – Primera versión estable
Incluye escenarios básicos de navegación, registro y login.

---

## 👩‍💻 Autora

**Iranid Pérez**
QA Engineer | Automatización BDD | IA aplicada a testing
📧 Contacto: [GitHub @Iranid](https://github.com/Iranid)

---

