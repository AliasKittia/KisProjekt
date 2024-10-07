document.getElementById('generatePassword').addEventListener('click', function() {
    const generatedPassword = generateRandomPassword();
    document.getElementById('password').value = generatedPassword;
});

// Jelszó megjelenítése
document.getElementById('showPassword').addEventListener('change', function() {
    const passwordField = document.getElementById('password');
    if (this.checked) {
        passwordField.type = 'text'; // Jelszó láthatóvá tétele
    } else {
        passwordField.type = 'password'; // Jelszó elrejtése
    }
});

function generateRandomPassword() {
    const chars = 'aábcdeéfghiíjklmnoóöőpqrstuúüűvwxyzAÁBCDEÉFGHIÍJKLMNOÓÖŐPQRSTUÚÜŰVWXYZ0123456789';
    let password = '';
    for (let i = 0; i < 10; i++) {
        password += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return password;
}


