<!DOCTYPE html>
<html lang="it">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Login - Serpendino Geam</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background-color: #f0f2f5;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      margin: 0;
    }
    .login-container {
      background-color: #fff;
      padding: 30px 40px;
      border-radius: 10px;
      box-shadow: 0 4px 10px rgba(0,0,0,0.1);
      width: 300px;
      text-align: center;
    }
    h2 {
      margin-bottom: 20px;
      color: #333;
    }
    input[type="email"],
    input[type="password"] {
      width: 100%;
      padding: 10px;
      margin: 10px 0;
      border-radius: 5px;
      border: 1px solid #ccc;
      font-size: 14px;
    }
    button {
      width: 100%;
      padding: 10px;
      background-color: #4CAF50;
      color: white;
      border: none;
      border-radius: 5px;
      font-size: 16px;
      cursor: pointer;
      margin-top: 10px;
    }
    button:hover {
      background-color: #45a049;
    }
    .forgot-password {
      display: block;
      margin-top: 15px;
      font-size: 14px;
      text-decoration: none;
      color: #555;
    }
    .forgot-password:hover {
      text-decoration: underline;
    }
    .error-msg {
      color: red;
      font-size: 13px;
      margin-top: 10px;
      display: none;
    }
  </style>
</head>
<body>

  <div class="login-container">
    <h2>Login</h2>
    <form id="loginForm" action="login.php" method="POST">
      <input type="email" name="email" placeholder="Email" required>
      <input type="password" name="password" placeholder="Password" required>
      <button type="submit">Accedi</button>
      <span class="error-msg" id="errorMsg">Email o password errata!</span>
    </form>
    <a href="recupera_password.php" class="forgot-password">Hai dimenticato la password?</a>
  </div>

  <script>
    // Esempio: intercettare submit per mostrare errore senza ricaricare pagina
    const form = document.getElementById('loginForm');
    const errorMsg = document.getElementById('errorMsg');

    form.addEventListener('submit', function(e) {
      // Qui puoi aggiungere controlli lato client se vuoi
      // e.g. validare email/password prima di inviare al server
      // Se vuoi simulare errore senza server, puoi fare:
      // e.preventDefault();
      // errorMsg.style.display = "block";
    });
  </script>

</body>
</html>
