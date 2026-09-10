import { Calendar } from 'lucide-react';
import InDevelopment from './InDevelopment';

export default function CalendarTab() {
    return (
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 h-[70vh]">
            <InDevelopment
                icon={<Calendar size={64} strokeWidth={1} />}
                text="Funcionalidade de calendário em desenvolvimento."
            />
        </div>
    );
}