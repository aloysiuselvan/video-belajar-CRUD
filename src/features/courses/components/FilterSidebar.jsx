import React, { useState } from 'react';
import { ChevronDown, ChevronUp, CheckSquare, X } from 'lucide-react';

const FilterSection = ({ title, options, selectedOptions, onChange }) => {
    const [isOpen, setIsOpen] = useState(true);

    return (
        <div className="mb-6 border border-gray-100 rounded-xl p-4 bg-white shadow-sm">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center justify-between w-full mb-3 text-primary font-bold text-sm"
            >
                <span className="flex items-center gap-2">
                    {title}
                </span>
                {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </button>

            {isOpen && (
                <div className="space-y-3">
                    {options.map((option, idx) => (
                        <label key={idx} className="flex items-center gap-3 cursor-pointer group">
                            <div
                                className={`w-5 h-5 rounded border flex items-center justify-center transition-colors ${selectedOptions.includes(option) ? 'bg-primary border-primary' : 'border-gray-300 group-hover:border-primary'
                                    }`}
                                onClick={(e) => {
                                    e.preventDefault();
                                    onChange(option);
                                }}
                            >
                                {selectedOptions.includes(option) && <CheckSquare className="w-3.5 h-3.5 text-white" />}
                            </div>
                            <span className="text-slate-600 text-sm group-hover:text-slate-900">{option}</span>
                        </label>
                    ))}
                </div>
            )}
        </div>
    );
};

const FilterSidebar = ({ isOpen, onClose, filters, onFilterChange }) => {
    const handleOptionChange = (category, option) => {
        onFilterChange(category, option);
    };

    return (
        <>
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-40 lg:hidden"
                    onClick={onClose}
                ></div>
            )}

            <div className={`
            fixed lg:static top-0 left-0 h-full lg:h-auto w-80 lg:w-full bg-white lg:bg-transparent z-50 p-6 lg:p-0 overflow-y-auto transition-transform duration-300 ease-in-out shadow-2xl lg:shadow-none
            ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        `}>
                <div className="flex justify-between items-center mb-6 lg:mb-4">
                    <h3 className="font-bold text-slate-900 text-lg lg:text-base">Filter</h3>
                    <div className="flex gap-4">
                        <button
                            onClick={() => onFilterChange('reset')}
                            className="text-red-500 text-sm font-medium hover:underline"
                        >
                            Reset
                        </button>
                        <button onClick={onClose} className="lg:hidden text-slate-500">
                            <X className="w-6 h-6" />
                        </button>
                    </div>
                </div>

                <FilterSection
                    title={<><span className="mr-2">📚</span> Bidang Studi</>}
                    options={['Pemasaran', 'Digital & Teknologi', 'Pengembangan Diri', 'Bisnis Manajemen', 'Desain']}
                    selectedOptions={filters.categories}
                    onChange={(opt) => handleOptionChange('categories', opt)}
                />
                <FilterSection
                    title={<><span className="mr-2">🏷️</span> Harga</>}
                    options={['Gratis', 'Di bawah Rp 100K', 'Rp 100K - Rp 500K', 'Di atas Rp 500K']}
                    selectedOptions={filters.prices}
                    onChange={(opt) => handleOptionChange('prices', opt)}

                />
                <FilterSection
                    title={<><span className="mr-2">⏱️</span> Durasi</>}
                    options={['Kurang dari 4 Jam', '4 - 8 Jam', 'Lebih dari 8 Jam']}
                    selectedOptions={filters.durations}
                    onChange={(opt) => handleOptionChange('durations', opt)}
                />
            </div>
        </>
    );
};

export default FilterSidebar;
