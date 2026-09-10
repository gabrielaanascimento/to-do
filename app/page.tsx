"use client";

import { useState } from "react";
import Link from "next/link";

export default function LoginPage() {
  // Estados já preparados para capturar o que o usuário digita
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    // ==========================================
    // SUA LÓGICA DE BACKEND ENTRA AQUI!
    // Exemplo:
    // const response = await fetch('http://localhost:3000/auth/users/login', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({ email, password })
    // })
    // ==========================================

    console.log("Preparando para enviar ao backend:", { email, password });
  };

  return (
    /* Fundo com o gradiente baseado na sua imagem */
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-400 via-gray-200 to-rose-200 p-4">

      <div className="bg-white rounded-2xl shadow-xl w-full max-w-md p-8 sm:p-10">

        {/* Cabeçalho (Ícone e Títulos) */}
        <div className="flex flex-col items-center mb-8">
          <div className="bg-[#38c4c4] p-3 rounded-full mb-4 shadow-sm">
            {/* Ícone de check (SVG) */}
            <svg
              className="w-8 h-8 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h1 className="text-2xl font-bold text-slate-700">SyncTask AI</h1>
          <p className="text-gray-400 text-sm mt-1">Faça login para continuar</p>
        </div>

        {/* Formulário */}
        <form onSubmit={handleLogin} className="space-y-5">
          <div>
            <label className="block text-sm font-semibold text-slate-600 mb-1">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="exemplo@email.com"
              className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#38c4c4] focus:border-transparent transition-all"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-600 mb-1">
              Senha
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="123"
              className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#38c4c4] focus:border-transparent transition-all"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#38c4c4] hover:bg-[#2fa8a8] text-white font-semibold py-3 rounded-lg mt-2 transition-colors duration-200 shadow-md"
          >
            Entrar
          </button>
        </form>

        {/* Link para Cadastro que você pediu */}
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-500">
            Não tem uma conta?{" "}
            <Link
              href="/register"
              className="text-[#38c4c4] font-semibold hover:underline"
            >
              Cadastre-se
            </Link>
          </p>
        </div>

      </div>
    </div>
  );
}