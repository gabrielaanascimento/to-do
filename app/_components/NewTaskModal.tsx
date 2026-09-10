"use client";

import { useState } from "react";
import { X } from "lucide-react";
import { createTask } from "@/services/task";

interface NewTaskModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function NewTaskModal({ isOpen, onClose }: NewTaskModalProps) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [tag, setTag] = useState("");

  if (!isOpen) return null;


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    let formattedDate = null;
    if (dueDate) {
      formattedDate = new Date(dueDate).toISOString();
    }

    const taskData = {
      title,
      description,
      dueDate: formattedDate,
      tag,
      userId: Number(2),
    };

    try {
      const response = await createTask(taskData);
      console.log("Tarefa criada com sucesso:", response);
    } catch (error) {
      console.error("Erro ao criar tarefa:", error);
    }
    console.log("Salvando tarefa:", { title, description, dueDate: formattedDate, tag });

    window.location.reload();

    setTitle("");
    setDescription("");
    setDueDate("");
    setTag("");
    onClose();
  };

  return (
    // Fundo escuro transparente
    <div className="fixed inset-0 bg-black bg-opacity-40 z-50 flex items-center justify-center p-4 backdrop-blur-sm transition-opacity">

      {/* Container do Modal */}
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-md overflow-hidden animate-in fade-in zoom-in duration-200">

        {/* Cabeçalho */}
        <div className="flex justify-between items-center p-6 border-b border-gray-100">
          <h2 className="text-xl font-semibold text-[#41768c]">Nova Tarefa</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-rose-500 transition-colors p-1 rounded-md hover:bg-rose-50"
          >
            <X size={20} />
          </button>
        </div>

        {/* Formulário */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div>
            <label className="block text-sm font-semibold text-slate-600 mb-1">
              Título da Tarefa *
            </label>
            <input
              type="text"
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Ex: Revisar código do backend"
              className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#38c4c4] transition-all"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-600 mb-1">
              Tag da Tarefa *
            </label>
            <input
              type="text"
              required
              value={tag}
              onChange={(e) => setTag(e.target.value)}
              placeholder="Ex: Trabalho, Estudo, Pessoal"
              className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#38c4c4] transition-all"
            />
          </div>


          <div>
            <label className="block text-sm font-semibold text-slate-600 mb-1">
              Descrição (Opcional)
            </label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Detalhes da tarefa..."
              rows={3}
              className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#38c4c4] transition-all resize-none"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-600 mb-1">
              Prazo de Conclusão (Opcional)
            </label>
            <input
              type="datetime-local"
              value={dueDate}
              onChange={(e) => setDueDate(e.target.value)}
              className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#38c4c4] transition-all text-slate-600"
            />
          </div>

          <div className="pt-4 flex gap-3">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 bg-white border border-gray-200 text-gray-600 font-semibold py-2.5 rounded-lg hover:bg-gray-50 transition-colors"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="flex-1 bg-[#38c4c4] hover:bg-[#2fa8a8] text-white font-semibold py-2.5 rounded-lg transition-colors shadow-sm"
            >
              Criar Tarefa
            </button>
          </div>
        </form>

      </div>
    </div>
  );
}