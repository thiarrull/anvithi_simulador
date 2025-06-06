document.querySelector('.login-form').addEventListener('submit', function(event) {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === '' || password === '') {
        alert('Por favor, preencha todos os campos!');
        event.preventDefault(); // Impede o envio do formulário
    }
    // Aqui você pode adicionar mais validações, como comprimento mínimo da senha, etc.
});