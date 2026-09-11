import api from './api';

export async function getTaskByIdUser(userId: string) {
    try {
        const response = await api.get(`/tasks/get/${userId}`);
        return response.data;
    } catch (error) {
        console.error("Erro ao buscar tarefas:", error);
        throw error;
    }
}

export async function createTask(taskData: any) {
    try {
        const response = await api.post('/tasks/register', taskData);
        return response.data;
    } catch (error) {
        console.error("Erro ao criar tarefa:", error);
        throw error;
    }
}

export async function updateCompleted(status: any) {
    
}