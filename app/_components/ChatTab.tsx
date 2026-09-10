
"use client";
import { useState } from 'react';
import { Send, Bot } from 'lucide-react';
import InDevelopment from './InDevelopment';

export default function ChatTab() {
    const [input, setInput] = useState("");
    const [messages, setMessages] = useState([
        { id: 1, text: "Olá! Como posso ajudar a organizar seu dia?", sender: "ai" }
    ]);

    const handleSendMessage = (e: React.FormEvent) => {
        e.preventDefault();
        if (!input.trim()) return;

        // Adiciona a mensagem do usuário na tela
        const newMessage = { id: Date.now(), text: input, sender: "user" };
        setMessages(prev => [...prev, newMessage]);
        setInput("");

        // AQUI ENTRA SUA INTEGRAÇÃO COM A API DE IA
        // const response = await fetch('/api/chat', { body: JSON.stringify({ message: input }) });
    };

    return (
        <>
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 h-[70vh]">
                <InDevelopment
                    icon={<Bot size={64} strokeWidth={1} />}
                    text="Funcionalidade de Assistente de IA em desenvolvimento."
                />
            </div>
            {/*<div className="bg-white rounded-xl shadow-sm border border-gray-100 flex flex-col h-[70vh]">
            {/* Header do Chat 
            <div className="p-4 border-b border-gray-100 flex items-center gap-3">
                <div className="bg-blue-50 p-2 rounded-lg text-[#38c4c4]">
                    <Bot size={24} />
                </div>
                <div>
                    <h3 className="font-semibold text-slate-700">Assistente AI</h3>
                    <p className="text-xs text-gray-400">Sempre pronto para ajudar</p>
                </div>
            </div>

            {/* Área de Mensagens 
            <div className="flex-1 p-6 overflow-y-auto bg-gray-50 flex flex-col gap-4">
                {messages.map((msg) => (
                    <div key={msg.id} className={`max-w-[70%] rounded-2xl p-4 ${msg.sender === 'ai' ? 'bg-white border border-gray-100 self-start' : 'bg-[#38c4c4] text-white self-end'}`}>
                        {msg.text}
                    </div>
                ))}
            </div>

            {/* Input 
            <form onSubmit={handleSendMessage} className="p-4 border-t border-gray-100 flex gap-4">
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Pergunte algo ao assistente..."
                    className="flex-1 px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#38c4c4]"
                />
                <button type="submit" className="bg-[#38c4c4] hover:bg-[#2fa8a8] text-white p-3 rounded-lg transition-colors">
                    <Send size={20} />
                </button>
            </form>
        </div>*/}
        </>
    );
}