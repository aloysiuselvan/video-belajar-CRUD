import React from 'react';
import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';

const CourseCard = ({ id, title, instructor, instructorRole, rating, ratingCount, price, image, avatar }) => {
    return (
        <Link to={`/course/${id}`} className="block h-full">
            <div className="bg-white rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow duration-200 overflow-hidden flex flex-col h-full cursor-pointer group">
                <div className="relative overflow-hidden p-5">
                    <img
                        src={image}
                        alt={title}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300 rounded-xl"
                    />
                </div>
                <div className="p-4 flex-1 flex flex-col">
                    <h3 className="font-bold text-slate-900 text-lg mb-2 line-clamp-2 font-sans">
                        {title}
                    </h3>
                    <div className="flex items-center gap-3 mb-4">
                        <img
                            src={avatar}
                            alt={instructor}
                            className="w-9 h-9 rounded-lg object-cover bg-gray-100"
                        />
                        <div className="flex flex-col">
                            <span className="text-sm font-medium text-slate-900 leading-tight">
                                {instructor}
                            </span>
                            <span className="text-xs text-slate-500">{instructorRole}</span>
                        </div>
                    </div>
                    <div className="mt-auto flex items-center justify-between">
                        <div className="flex items-center gap-1">
                            <div className="flex">
                                {[...Array(5)].map((_, i) => (
                                    <Star
                                        key={i}
                                        className={`w-3.5 h-3.5 ${i < Math.floor(rating)
                                            ? 'fill-secondary text-secondary'
                                            : 'text-gray-300'
                                            }`}
                                    />
                                ))}
                            </div>
                            <span className="text-xs text-slate-500 ml-1 underline">
                                {rating} ({ratingCount})
                            </span>
                        </div>
                        <span className="text-primary font-bold text-lg">{price}</span>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default CourseCard;
