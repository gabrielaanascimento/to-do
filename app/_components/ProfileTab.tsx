"use client";
import { useState } from 'react';
import { Upload } from 'lucide-react';

export default function ProfileTab() {
    const [nome, setNome] = useState("Marina Completo");
    const [email, setEmail] = useState("exemplo@email.com");
    const [senha, setSenha] = useState("");
    const [foto, setFoto] = useState(""); // Aqui entraria a URL da foto ou arquivo

    const handleSave = async (e: React.FormEvent) => {
        e.preventDefault();
        // AQUI ENTRA SUA INTEGRAÇÃO COM A API (PUT /users/:id)
        console.log("Dados para salvar:", { nome, email, senha, foto });
    };

    return (
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 max-w-3xl">
            <div className="flex items-center gap-6 mb-8">
                <div className="relative w-24 h-24 rounded-full bg-gray-200 overflow-hidden group cursor-pointer border-4 border-white shadow-md">
                    {/* Imagem de placeholder */}
                    <img src="https://i.pravatar.cc/150?img=47" alt="Perfil" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <Upload className="text-white w-6 h-6" />
                    </div>
                </div>
                <div>
                    <h2 className="text-2xl font-bold text-slate-700">{nome}</h2>
                    <p className="text-gray-400">Plano Pro</p>
                </div>
            </div>

            <form onSubmit={handleSave} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-sm font-semibold text-slate-600 mb-1">Nome</label>
                        <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#38c4c4] outline-none" />
                    </div>
                    <div>
                        <label className="block text-sm font-semibold text-slate-600 mb-1">Email</label>
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#38c4c4] outline-none" />
                    </div>
                    <div>
                        <label className="block text-sm font-semibold text-slate-600 mb-1">Nova Senha (opcional)</label>
                        <input type="password" value={senha} onChange={(e) => setSenha(e.target.value)} placeholder="Deixe em branco para não alterar" className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#38c4c4] outline-none" />
                    </div>
                    <div>
                        <label className="block text-sm font-semibold text-slate-600 mb-1">URL da Nova Foto</label>
                        <input type="text" value={foto} onChange={(e) => setFoto(e.target.value)} placeholder="https://..." className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#38c4c4] outline-none" />
                    </div>
                </div>

                <div className="pt-4 flex gap-4">
                    <button type="submit" className="bg-[#38c4c4] hover:bg-[#2fa8a8] text-white font-semibold py-2 px-6 rounded-lg transition-colors">
                        Salvar Alterações
                    </button>
                    <button type="button" className="bg-white border border-gray-300 text-gray-700 font-semibold py-2 px-6 rounded-lg hover:bg-gray-50 transition-colors">
                        Cancelar
                    </button>
                </div>
            </form>
        </div>
    );
}