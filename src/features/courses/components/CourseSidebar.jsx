import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../../components/ui/Button';
import { ShieldCheck, Video, FileText, Award, FileQuestion } from 'lucide-react';

const CourseSidebar = ({ price, originalPrice, discountEnd, benefits }) => {
    return (
        <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-lg sticky top-24">
            <h3 className="font-bold text-lg text-slate-900 mb-4 leading-tight">
                Gapai Karier Impianmu sebagai Seorang UI/UX Designer & Product Manager.
            </h3>

            <div className="flex items-center gap-3 mb-2">
                <span className="text-primary font-bold text-2xl">{price}</span>
                <span className="text-slate-400 text-sm line-through">{originalPrice}</span>
            </div>
            <div className="flex items-center gap-2 mb-4">
                <span className="bg-yellow-100 text-yellow-700 text-xs font-bold px-2 py-0.5 rounded">Diskon 50%</span>
            </div>

            <p className="text-blue-500 text-sm font-medium mb-6">
                Penawaran spesial tersisa {discountEnd} hari lagi!
            </p>

            <Link to="/checkout" className="block w-full mb-8">
                <Button variant="primary" className="w-full bg-green-500 hover:bg-green-600 shadow-green-200">
                    Beli Sekarang
                </Button>
            </Link>

            <div className="mb-6">
                <h4 className="font-bold text-slate-900 text-sm mb-4">Kelas Ini Sudah Termasuk</h4>
                <ul className="space-y-3">
                    <li className="flex items-center gap-3 text-slate-600 text-sm">
                        <ShieldCheck className="w-5 h-5 text-slate-400" /> Ujian Akhir
                    </li>
                    <li className="flex items-center gap-3 text-slate-600 text-sm">
                        <Video className="w-5 h-5 text-slate-400" /> 49 Video
                    </li>
                    <li className="flex items-center gap-3 text-slate-600 text-sm">
                        <FileText className="w-5 h-5 text-slate-400" /> 7 Dokumen
                    </li>
                    <li className="flex items-center gap-3 text-slate-600 text-sm">
                        <Award className="w-5 h-5 text-slate-400" /> Sertifikat
                    </li>
                    <li className="flex items-center gap-3 text-slate-600 text-sm">
                        <FileQuestion className="w-5 h-5 text-slate-400" /> Pretest
                    </li>
                </ul>
            </div>

            <div>
                <h4 className="font-bold text-slate-900 text-sm mb-2">Bahasa Pengantar</h4>
                <div className="flex items-center gap-2 text-slate-600 text-sm">
                    <span>🌐</span> Bahasa Indonesia
                </div>
            </div>
        </div>
    );
};

export default CourseSidebar;
