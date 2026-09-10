"use client";

import { useEffect, useState } from "react";
import { Plus, CheckCircle2, Circle, Bot } from "lucide-react";
import NewTaskModal from "./NewTaskModal";
import { getTaskByIdUser } from "@/services/task";

export default function DashboardTab() {
    // Estado inicial das tarefas simulando o banco de dados
    const [tasks, setTasks] = useState<any[]>([]);

    useEffect(() => {
        const fetchTasks = async () => {
            try {
                const userId = "2";
                const fetchedTasks = await getTaskByIdUser(userId);
                setTasks(fetchedTasks);
            } catch (error) {
                console.error("Erro ao buscar tarefas:", error);
            }
        }
        fetchTasks();
    }, [])

    const formatarData = (dataIso: string) => {
        if (!dataIso) return "Sem prazo";

        const data = new Date(dataIso);
        return data.toLocaleDateString('pt-BR');
    };
    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleTask = (id: number) => {
        setTasks(tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
    };

    return (
        <div className="w-full max-w-7xl mx-auto flex flex-col gap-6">

            {/* LINHA SUPERIOR: Tarefas (2/3) + Widgets (1/3) */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

                {/* COLUNA ESQUERDA: Minhas Tarefas */}
                <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-gray-100 p-6 flex flex-col">
                    <div className="flex justify-between items-center mb-6">
                        <h3 className="text-xl font-semibold text-[#41768c]">Minhas Tarefas</h3>

                        <button
                            onClick={() => setIsModalOpen(true)}
                            className="flex items-center gap-2 bg-[#38c4c4] hover:bg-[#2fa8a8] text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                            <Plus size={16} /> Nova Tarefa
                        </button>
                    </div>

                    <div className="flex flex-col gap-3 flex-1">
                        {tasks.map((task) => (
                            <div
                                key={task.id}
                                className="flex items-center gap-4 p-4 rounded-xl border border-gray-100 hover:border-[#38c4c4] transition-colors bg-white shadow-sm"
                            >
                                <button onClick={() => toggleTask(task.id)} className="flex-shrink-0">
                                    {task.completed ? (
                                        <CheckCircle2 className="text-[#38c4c4]" size={24} />
                                    ) : (
                                        <Circle className="text-gray-300 hover:text-[#38c4c4] transition-colors" size={24} />
                                    )}
                                </button>
                                <div>
                                    <p className={`font-medium ${task.completed ? 'text-gray-400 line-through' : 'text-slate-700'}`}>
                                        {task.title}
                                    </p>
                                    <p className="text-xs text-gray-400 mt-1">
                                        {formatarData(task.dueDate)} • {task.tag}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* COLUNA DIREITA: Widgets */}
                <div className="flex flex-col gap-6">

                    {/* Widget: Progresso Diário */}
                    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 flex flex-col items-center justify-center">
                        <h3 className="text-lg font-semibold text-[#41768c] w-full text-left mb-4">Progresso Diário</h3>
                        <div className="relative w-32 h-32 flex items-center justify-center">
                            {/* Círculo de Fundo */}
                            <svg className="w-full h-full transform -rotate-90">
                                <circle cx="64" cy="64" r="56" stroke="#f1f5f9" strokeWidth="12" fill="none" />
                                {/* Círculo de Progresso (33%) - strokeDasharray: 351 (circunferência 2*pi*56) */}
                                <circle
                                    cx="64"
                                    cy="64"
                                    r="56"
                                    stroke="#38c4c4"
                                    strokeWidth="12"
                                    fill="none"
                                    strokeDasharray="351.8"
                                    strokeDashoffset="235.7" /* 351.8 - (351.8 * 0.33) */
                                    strokeLinecap="round"
                                />
                            </svg>
                            <div className="absolute flex items-center justify-center">
                                <span className="text-3xl font-bold text-[#41768c]">33%</span>
                            </div>
                        </div>
                    </div>

                    {/* Widget: Dica da IA */}
                    <div className="bg-rose-50/50 rounded-xl border border-rose-100 p-6 flex-1">
                        <div className="flex items-center gap-2 mb-3 text-[#798eb3]">
                            <Bot size={20} />
                            <h3 className="font-semibold">Dica da IA</h3>
                        </div>
                        <p className="text-sm text-slate-600 leading-relaxed">
                            Para maximizar seu foco hoje, tente agrupar suas tarefas de desenvolvimento na parte da manhã.
                        </p>
                    </div>
                </div>
            </div>
            <NewTaskModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />
        </div>
    );
}