Feature: Navegación y Autenticación en Automation Exercise

  Scenario: TC-AE-001 - Cargar página principal correctamente
    Given navego a la página principal https://automationexercise.com
    When la página carga completamente
    Then debo ver el título "Automation Exercise"
    And debo ver el menú de navegación
    And debo ver los productos destacados, las categorías y las marcas

  Scenario: TC-AE-002 - Navegar a Products y verificar listado
    Given estoy en la página principal
    When hago clic en "Products"
    Then navego a la página de productos
    And veo el listado completo con imágenes, precios y botones de acción

  Scenario: TC-AE-003 - Acceder a Signup / Login
    Given estoy en la página principal
    When hago clic en "Signup / Login"
    Then veo la pantalla con secciones de login y registro
    And los campos y botones están presentes

  Scenario: TC-AE-004 - Registrar usuario válido
    Given estoy en la pantalla de registro
    When ingreso un nombre y un email válido y completo el formulario
    Then recibo el mensaje "ACCOUNT CREATED!"
    And puedo iniciar sesión con las credenciales

  Scenario: TC-AE-005a - Registrar usuario con email inválido
    Given estoy en la pantalla de registro
    When ingreso un email inválido ("test@") y hago clic en registrar
    Then aparece advertencia de validación y no puedo continuar

  Scenario: TC-AE-005b - Registrar usuario con email duplicado
    Given ya existe un usuario con ese email registrado
    When intento registrar otro usuario con ese email
    Then aparece el mensaje "Email Address already exist!"

  Scenario: TC-AE-006 - Login con credenciales incorrectas
    Given estoy en la pantalla de login
    When ingreso credenciales incorrectas y hago clic en ingresar
    Then aparece el mensaje "Your email or password is incorrect!"
    And no inicio sesión
