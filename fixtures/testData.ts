export const loginData = {
    validUser: {
        username: 'usuario',
        password: 'contraseña',
        expectedUrl: 'https://ejemplo.com/dashboard'
    },
    invalidUser: {
        username: 'usuarioInvalido',
        password: 'contraseñaInvalida',
        expectedError: 'Credenciales inválidas'
    }
};

export const testUrls = {
    loginPage: 'https://ejemplo.com/login'
}; 