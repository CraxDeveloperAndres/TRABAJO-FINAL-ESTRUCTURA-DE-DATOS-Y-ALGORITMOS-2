// src/Pages/Login.jsx
import React, { useState } from "react";
import { LogIn, UserPlus } from "lucide-react";

function Login({onLoged}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [tryRegister, setTryRegister] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    // Aquí iría tu lógica de autenticación
    if(tryRegister)
    {
        console.log("Registrandose", email, password);
        // tu logica de registro
        onLoged();
    }else{
        console.log("Login con", email, password);
        // tu logica de login
        onLoged();
    }
  };

  const changeLoginState = (e) => {
    e.preventDefault();
    setTryRegister(!tryRegister);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-zinc-950 px-4">
      <div className="w-full max-w-md bg-zinc-900 p-8 rounded-2xl shadow-xl border border-zinc-800">
        <h1 className="text-3xl font-bold text-white mb-6 text-center">{tryRegister?"Crear cuenta":"Iniciar sesión"}</h1>

        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-zinc-300">
              Correo electrónico
            </label>
            <input
              type="email"
              id="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-zinc-500"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-zinc-300">
              Contraseña
            </label>
            <input
              type="password"
              id="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block w-full px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-zinc-500"
            />
          </div>

        {tryRegister && (
          <div>
            <label htmlFor="password2" className="block text-sm font-medium text-zinc-300">
              Contraseña
            </label>
            <input
              type="password"
              id="password2"
              required
              value={password2}
              onChange={(e) => setPassword2(e.target.value)}
              className="mt-1 block w-full px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-zinc-500"
            />
          </div>
        )}

          <button
            type="submit"
            className="w-full flex justify-center items-center gap-2 px-4 py-2 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg transition"
          >
            { tryRegister ?
            (<><UserPlus size={18} />
            Registrarse</>
            ):(
                <><LogIn size={18} />
            Ingresar</>
            )}
          </button>
        </form>

        <p className="mt-6 text-sm text-center text-zinc-400">
          {tryRegister?"¿Ya tienes cuenta? ":"¿No tienes cuenta? "}
          <a onClick={changeLoginState} className="text-green-400 hover:underline">
            {tryRegister?"Inicia sesión":"Regístrate"}
            
          </a>
        </p>
      </div>
    </div>
  );
}

export default Login;