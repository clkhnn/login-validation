import React from "react";

function Login() {
  return (
    <div>
      <h1>Giriş Yap</h1>

      <form>
        <div>
          <label htmlFor="email">E-posta:</label>
          <input
            type="email"
            id="email"
            placeholder="E-posta adresinizi girin"
          />
        </div>

        <div>
          <label htmlFor="password">Şifre:</label>
          <input
            type="password"
            id="password"
            placeholder="Şifrenizi girin"
          />
        </div>

        <div>
          <input type="checkbox" id="terms" />
          <label htmlFor="terms">Şartları kabul ediyorum</label>
        </div>

        <button type="submit">Giriş Yap</button>
      </form>
    </div>
  );
}

export default Login;
