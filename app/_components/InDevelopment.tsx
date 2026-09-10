
import React from 'react';

interface InDevelopmentProps {
    icon: React.ReactNode;
    text: string;
}

export default function InDevelopment({ icon, text }: InDevelopmentProps) {
    return (
        <div className="flex flex-col items-center justify-center h-full min-h-[400px] text-gray-400">
            <div className="text-gray-300 mb-4">
                {icon}
            </div>
            <p className="text-lg font-medium">{text}</p>
        </div>
    );
}