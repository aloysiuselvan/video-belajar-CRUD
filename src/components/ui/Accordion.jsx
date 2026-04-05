import React, { useState } from 'react';
import { ChevronDown, ChevronUp, PlayCircle, Clock } from 'lucide-react';

const AccordionItem = ({ title, duration, isOpen, onClick, content }) => {
    return (
        <div className="border border-gray-100 rounded-lg mb-4 overflow-hidden">
            <button
                onClick={onClick}
                className={`w-full flex items-center justify-between p-4 text-left transition-colors ${isOpen ? 'bg-green-50 text-primary' : 'bg-white text-slate-700 hover:bg-gray-50'
                    }`}
            >
                <span className="font-semibold text-sm md:text-base">{title}</span>
                {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
            </button>

            {isOpen && (
                <div className="bg-white p-4 border-t border-gray-100">
                    {content.map((item, idx) => (
                        <div key={idx} className="flex items-center justify-between py-3 border-b border-gray-50 last:border-0 text-sm text-slate-600">
                            <span className="font-medium">{item.title}</span>
                            <div className="flex items-center gap-4 text-slate-400 text-xs">
                                <div className="flex items-center gap-1">
                                    <PlayCircle className="w-4 h-4" />
                                    <span>Video</span>
                                </div>
                                <div className="flex items-center gap-1">
                                    <Clock className="w-4 h-4" />
                                    <span>{item.duration}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

const Accordion = ({ items }) => {
    const [openIndex, setOpenIndex] = useState(0);

    return (
        <div className="w-full">
            {items.map((item, index) => (
                <AccordionItem
                    key={index}
                    title={item.title}
                    isOpen={openIndex === index}
                    onClick={() => setOpenIndex(index === openIndex ? -1 : index)}
                    content={item.content}
                />
            ))}
        </div>
    );
};

export default Accordion;
