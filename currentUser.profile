function registerUser(){
    const nome = document.getElementById('regNome').value.trim();
    const cognome = document.getElementById('regCognome').value.trim();
    const email = document.getElementById('regEmail').value.trim();
    const password = document.getElementById('regPassword').value;

    if(!nome || !cognome || !email || !password){ 
        alert("Compila tutti i campi!"); 
        return;
    }

    // Controlla se l'utente esiste già
    if(users.find(u => u.email === email)){ 
        alert("Utente già registrato!"); 
        return;
    }

    // CREA L'UTENTE CON IL PROFILE BASE
    const newUser = {
        nome,
        cognome,
        email,
        password,
        profile: {
            nick: nome,   // nickname di default
            avatar: ""    // avatar inizialmente vuoto
        }
    };

    // Salva utente in users
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));

    // Salva l'utente corrente
    localStorage.setItem('currentUser', email);

    // Mostra messaggio e porta direttamente alla chat
    alert("Registrazione completata! Ora verrai portato alla chat.");
    window.location.href = "chat.html"; // redirect diretto alla chat
}
