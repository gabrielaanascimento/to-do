"use client";
import { useState } from 'react';
import { LayoutDashboard, Calendar, Bot, User, LogOut, CheckCircle, Bell } from 'lucide-react';

// Importando nossos componentes
import ProfileTab from '../_components/ProfileTab';
import ChatTab from '../_components/ChatTab';
import CalendarTab from '../_components/CalendarTab';
import InDevelopment from '../_components/InDevelopment'; // Caso queira usar em Dashboard também
import DashboardTab from '../_components/DashboardTab';

export default function Painel() {
    const [activeTab, setActiveTab] = useState('painel');

    // Controle de título do Header
    const titles: Record<string, string> = {
        painel: 'Olá, Marina! Seu Dia',
        calendario: 'Seu Calendário',
        ia: 'Assistente de Produtividade',
        perfil: 'Meu Perfil'
    };

    return (
        <div className="flex h-screen bg-slate-50">
            {/* SIDEBAR */}
            <aside className="w-64 bg-[#41768c] text-white flex flex-col justify-between">
                <div>
                    <div className="p-6 flex items-center gap-3">
                        <div className="bg-[#38c4c4] p-1.5 rounded-md"><CheckCircle size={24} /></div>
                        <h1 className="text-xl font-bold">SyncTask</h1>
                    </div>

                    <nav className="mt-6 flex flex-col gap-2 px-4">
                        <SidebarItem icon={<LayoutDashboard />} label="Painel" isActive={activeTab === 'painel'} onClick={() => setActiveTab('painel')} />
                        <SidebarItem icon={<Calendar />} label="Calendário" isActive={activeTab === 'calendario'} onClick={() => setActiveTab('calendario')} />
                        <SidebarItem icon={<Bot />} label="IA Assistente" isActive={activeTab === 'ia'} onClick={() => setActiveTab('ia')} />
                        <SidebarItem icon={<User />} label="Perfil" isActive={activeTab === 'perfil'} onClick={() => setActiveTab('perfil')} />
                    </nav>
                </div>

                <div className="p-6">
                    <button className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors">
                        <LogOut size={20} /> Sair
                    </button>
                </div>
            </aside>

            {/* CONTEÚDO PRINCIPAL */}
            <main className="flex-1 flex flex-col overflow-hidden">
                {/* HEADER */}
                <header className="bg-white px-8 py-5 flex justify-between items-center border-b border-gray-100 shadow-sm">
                    <h2 className="text-xl font-semibold text-[#41768c]">{titles[activeTab]}</h2>
                    <div className="flex items-center gap-4">
                        <button className="text-gray-400 hover:text-[#38c4c4] transition-colors"><Bell size={20} /></button>
                        <img src="https://i.pravatar.cc/150?img=47" alt="User" className="w-10 h-10 rounded-full border-2 border-gray-200" />
                    </div>
                </header>

                {/* ÁREA DE RENDERIZAÇÃO DAS ABAS */}
                <div className="p-8 overflow-y-auto flex-1">
                    {activeTab === 'perfil' && <ProfileTab />}
                    {activeTab === 'ia' && <ChatTab />}
                    {activeTab === 'calendario' && <CalendarTab />}
                    {activeTab === 'painel' && <DashboardTab />}
                </div>
            </main>
        </div>
    );
}

// Sub-componente simples para os botões da Sidebar
function SidebarItem({ icon, label, isActive, onClick }: any) {
    return (
        <button
            onClick={onClick}
            className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors w-full ${isActive ? 'bg-[#38c4c4] text-white font-medium shadow-md' : 'text-gray-200 hover:bg-[#4d869e]'
                }`}
        >
            {icon}
            <span>{label}</span>
        </button>
    );
}