import React from 'react';

const InstructorCard = ({ name, role, description, avatar }) => {
    return (
        <div className="bg-white rounded-xl border border-gray-100 p-5 flex flex-col md:flex-row gap-4 items-start shadow-sm mb-4">
            <img
                src={avatar}
                alt={name}
                className="w-16 h-16 rounded-full object-cover shrink-0"
            />
            <div>
                <h4 className="font-bold text-slate-900 text-lg mb-0.5">{name}</h4>
                <p className="text-slate-500 text-sm mb-3">{role}</p>
                <p className="text-slate-600 text-sm leading-relaxed">{description}</p>
            </div>
        </div>
    );
};

const ReviewCard = ({ name, batch, review, rating, avatar }) => {
    return (
        <div className="bg-white rounded-xl border border-gray-100 p-5 shadow-sm min-w-[300px] flex-1">
            <div className="flex items-center gap-3 mb-4">
                <img
                    src={avatar}
                    alt={name}
                    className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                    <h4 className="font-bold text-slate-900 text-sm">{name}</h4>
                    <p className="text-slate-500 text-xs">{batch}</p>
                </div>
            </div>
            <p className="text-slate-600 text-sm mb-4 leading-relaxed">{review}</p>
            <div className="flex items-center gap-1">
                <div className="flex text-yellow-400">
                    {'★'.repeat(Math.round(rating))}
                    <span className="text-gray-300">{'★'.repeat(5 - Math.round(rating))}</span>
                </div>
                <span className="text-xs text-slate-500 ml-1">{rating}</span>
            </div>
        </div>
    );
};

export { InstructorCard, ReviewCard };
