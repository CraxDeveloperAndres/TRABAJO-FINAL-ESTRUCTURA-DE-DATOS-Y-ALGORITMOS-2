
import React, { useState } from "react";
import { LogIn, UserPlus } from "lucide-react";
import { auth } from "../src/Components/Firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

function Login({ onLoged }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [tryRegister, setTryRegister] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();

    if (tryRegister) {
      if (password !== password2) {
        alert("Las contraseñas no coinciden");
        return;
      }
      try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        console.log("Registrado como:", userCredential.user.email);
        onLoged(); // Ejecuta lógica de éxito
      } catch (error) {
        console.error("Error en registro:", error.message);
        alert(error.message);
      }
    } else {
      try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        console.log("Logueado como:", userCredential.user.email);
        onLoged(); // Ejecuta lógica de éxito
      } catch (error) {
        console.error("Error en login:", error.message);
        alert("Error al iniciar sesión: " + error.message);
      }
    }
  };


  const changeLoginState = (e) => {
    e.preventDefault();
    setTryRegister(!tryRegister);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-zinc-950 px-4">
      <div className="w-full max-w-md bg-zinc-900 p-8 rounded-2xl shadow-xl border border-zinc-800">
        <h1 className="text-3xl font-bold text-white mb-6 text-center">{tryRegister ? "Crear cuenta" : "Iniciar sesión"}</h1>

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
            {tryRegister ?
              (<><UserPlus size={18} />
                Registrarse</>
              ) : (
                <><LogIn size={18} />
                  Ingresar</>
              )}
          </button>
        </form>

        <p className="mt-6 text-sm text-center text-zinc-400">
          {tryRegister ? "¿Ya tienes cuenta? " : "¿No tienes cuenta? "}
          <a onClick={changeLoginState} className="text-green-400 hover:underline">
            {tryRegister ? "Inicia sesión" : "Regístrate"}

          </a>
        </p>
      </div>
    </div>
  );
}

export default Login;