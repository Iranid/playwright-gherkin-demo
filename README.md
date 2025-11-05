Perfecto 👏 vamos a crear un **README completo, profesional y didáctico**, ideal para mostrar en tu perfil o compartir el repo con otros QA.

El formato incluye:

* Título y badges
* Descripción corta
* Captura general del proyecto
* Instalación
* Ejecución
* Estructura del proyecto
* Prompt de Comet
* Licencia y versión

---

## 🧾 README.md

````markdown
# 🤖 Playwright + Cucumber (Gherkin) + POM – Automation Exercise v1.0.0

![Playwright](https://img.shields.io/badge/Playwright-1.48.0-brightgreen?logo=playwright)
![Cucumber](https://img.shields.io/badge/Cucumber-BDD-blue?logo=cucumber)
![License](https://img.shields.io/badge/License-MIT-lightgrey)
![Version](https://img.shields.io/badge/version-1.0.0-orange)

Proyecto de **automatización end-to-end (E2E)** desarrollado con **Playwright**, **Cucumber (Gherkin)** y **Page Object Model (POM)**.  
Los escenarios y código base fueron generados parcialmente con **Comet de Perplexity AI**, demostrando el uso de IA para crear pruebas automatizadas completas desde cero.

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

## 💬 Prompt usado en Comet (Perplexity)

> **Actúa como un QA tester automatizador experto.**
> Quiero que pruebes el sitio: [https://automationexercise.com](https://automationexercise.com)
>
> Tareas:
> 1️⃣ Generar casos positivos y negativos (navegación, registro, login).
> 2️⃣ Crear un informe QA con ID, paso, resultado esperado, obtenido y estado.
> 3️⃣ Convertir los casos a Gherkin (en español con keywords en inglés).
> 4️⃣ Generar código reproducible en Playwright con `expect`.
>
> El código debe ejecutarse con `npx playwright test` y usar formato estándar.

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

