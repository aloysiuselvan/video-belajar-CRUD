import React, { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, ChevronDown, ChevronUp, PlayCircle, FileText, HelpCircle, Star, Menu, CheckCircle, XCircle, RotateCcw, Download, Trophy } from 'lucide-react';
import Button from '../components/ui/Button';

const courseContent = [
    {
        id: 1,
        title: 'Introduction to HR',
        modules: [
            { id: 'p1', type: 'pretest', title: 'Pre-Test: Introduction to HR', duration: '10 Pertanyaan', completed: false },
            { id: 'v1', type: 'video', title: 'Video: Introduction to HR', duration: '12 Menit', completed: true },
            { id: 'v2', type: 'video', title: 'Video: Introduction to HR', duration: '12 Menit', completed: true },
            { id: 'v3', type: 'video', title: 'Video: Introduction to HR', duration: '12 Menit', completed: true },
            { id: 'v4', type: 'video', title: 'Video: Introduction to HR', duration: '12 Menit', completed: true },
            { id: 'd1', type: 'doc', title: 'Rangkuman: Introduction to HR', duration: '12 Menit', completed: true },
            { id: 'q1', type: 'quiz', title: 'Quiz: Introduction to HR', duration: '10 Pertanyaan', completed: false },
            { id: 'e1', type: 'exam', title: 'Ujian Akhir: Introduction to HR', duration: '10 Pertanyaan', completed: false },
        ]
    },
    {
        id: 2,
        title: 'Recruitment & Selection',
        modules: [
            { id: 'v5', type: 'video', title: 'Video: Recruitment Strategies', duration: '15 Menit', completed: false },
        ]
    }
];

const VideoSection = ({ currentModuleId, completedModules, allModules }) => {
    const isCompleted = completedModules.has(currentModuleId);

    return (
        <div className="flex flex-col md:h-full bg-white md:overflow-y-auto">
            <div className="w-full aspect-video bg-black flex items-center justify-center relative group shrink-0">
                {isCompleted ? (
                    <div className="absolute inset-x-4 inset-y-4 md:inset-x-16 md:inset-y-12 bg-white rounded-xl shadow-xl flex flex-col items-center justify-center p-4 md:p-6 text-center animate-in fade-in zoom-in z-10 border border-gray-100">
                        <h2 className="font-bold text-lg md:text-xl text-slate-900 mb-1 md:mb-2">25% Modul Telah Selesai</h2>
                        <p className="text-slate-500 text-xs md:text-sm mb-4 md:mb-6 max-w-sm">
                            Selesaikan Semua Modul Untuk Mendapatkan Sertifikat
                        </p>
                        <Button disabled className="w-full max-w-xs bg-gray-300 text-white font-bold py-2 md:py-3">
                            Ambil Sertifikat
                        </Button>
                    </div>
                ) : (
                    <>
                        <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                            <PlayCircle className="w-16 h-16 md:w-20 md:h-20 text-white opacity-80" />
                        </div>
                        <p className="text-white text-base md:text-lg font-medium">Video Player Placeholder</p>
                    </>
                )}
            </div>

            <div className="p-4 md:p-8 max-w-4xl">
                <h1 className="font-bold text-xl md:text-2xl text-slate-900 mb-2">Praktikkan Skill dengan Technical Book</h1>
                <p className="text-slate-500 mb-6 text-sm md:text-base">
                    Pelajari dan praktikkan skill teknis dalam berbagai industri dengan Technical Book Riselearn
                </p>

                <div className="flex items-start gap-4 mb-6">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-gray-200 overflow-hidden shrink-0">
                        <img src="/src/assets/avatar-1.jpg" alt="Instructor" className="w-full h-full object-cover" />
                    </div>
                    <div>
                        <p className="font-bold text-slate-900 text-sm md:text-base">Jenna Ortega</p>
                        <p className="text-xs text-slate-500">Senior Accountant di Gojek</p>
                    </div>
                </div>

                <div className="flex items-center gap-2">
                    <div className="flex text-yellow-400">
                        {[1, 2, 3, 4].map(i => <Star key={i} className="w-4 h-4 md:w-5 md:h-5 fill-current" />)}
                        <Star className="w-4 h-4 md:w-5 md:h-5 fill-gray-200 text-gray-200" />
                    </div>
                    <span className="text-slate-500 text-sm underline font-medium">3.5 (86)</span>
                </div>
            </div>
        </div>
    );
};

const mockQuestions = [
    {
        id: 1,
        question: "Memikirkan dan mengantisipasi secara teliti adanya user secara tidak sengaja mengutak-atik konfigurasi, namun dapat diatasi dengan membuat default yang mengurangi kepanikan pada user adalah pengertian dari ...",
        options: [
            "Memikirkan tentang default",
            "Mempertimbangkan page layout berdasarkan suatu tujuan tertentu",
            "Memastikan bahwa sistem berjalan sesuai dengan apa yang terjadi saat itu juga",
            "Menciptakan konsistensi dan menggunakan elemen UI umum"
        ],
        correctAnswer: 0
    },
    {
        id: 2,
        question: "Manakah dari berikut ini yang BUKAN merupakan prinsip dasar UI Design?",
        options: ["Clarity", "Flexibility", "Complexity", "Consistency"],
        correctAnswer: 2
    },
    {
        id: 3,
        question: "Warna yang sering digunakan untuk notifikasi error adalah...",
        options: ["Hijau", "Kuning", "Merah", "Biru"],
        correctAnswer: 2
    },
    {
        id: 4,
        question: "Apa fungsi dari White Space dalam desain?",
        options: [
            "Mengisi kekosongan",
            "Memberikan ruang bernapas antar elemen",
            "Membuat desain terlihat penuh",
            "Menghabiskan layar"
        ],
        correctAnswer: 1
    },
    {
        id: 5,
        question: "Typography dalam UI Design berfokus pada...",
        options: [
            "Pemilihan gambar",
            "Keterbacaan dan keindahan teks",
            "Warna latar belakang",
            "Animasi"
        ],
        correctAnswer: 1
    },
];


const SubmitModal = ({ isOpen, onClose, onConfirm, type }) => {
    if (!isOpen) return null;

    let title = "Selesaikan Quiz";
    let message = "Apakah kamu yakin untuk menyelesaikan quiz ini?";
    let buttonText = "Selesai";

    if (type === 'pretest') {
        title = "Selesaikan Pretest";
        message = "Apakah kamu yakin untuk menyelesaikan pretest ini?";
    } else if (type === 'exam') {
        title = "Selesaikan Ujian Akhir";
        message = "Apakah kamu yakin untuk menyelesaikan ujian akhir ini?";
    }

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
            <div className="bg-white rounded-xl shadow-xl w-full max-w-md p-6 flex flex-col items-center text-center animate-in fade-in zoom-in duration-200">
                <div className="w-32 h-24 md:w-48 md:h-32 mb-6">
                    <div className="w-full h-full bg-blue-50 rounded-lg flex items-center justify-center text-blue-200">
                        <Star className="w-12 h-12 md:w-16 md:h-16" />
                    </div>
                </div>

                <h3 className="font-bold text-lg md:text-xl text-slate-900 mb-2">{title}</h3>
                <p className="text-slate-500 mb-8 max-w-xs">{message}</p>

                <div className="flex gap-3 md:gap-4 w-full">
                    <Button
                        variant="outline"
                        onClick={onClose}
                        className="flex-1 border-green-500 text-green-500 hover:bg-green-50 font-bold py-2 md:py-3"
                    >
                        Batal
                    </Button>
                    <Button
                        variant="primary"
                        onClick={onConfirm}
                        className="flex-1 bg-green-500 hover:bg-green-600 text-white font-bold shadow-lg shadow-green-100 py-2 md:py-3"
                    >
                        {buttonText}
                    </Button>
                </div>
            </div>
        </div>
    );
};



const ResultPage = ({ type, score, correctCount, wrongCount, totalQuestions, onRetry, onContinue }) => {
    const isPassed = score >= 70;
    const isPretest = type === 'pretest';
    const dateStr = new Date().toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric', hour: '2-digit', minute: '2-digit' });

    const bannerColor = isPassed ? "bg-cyan-400" : "bg-orange-100";
    const titleText = isPassed ? "CONGRATS" : "TRY AGAIN";

    const Banner = () => (
        <div className={`h-48 md:h-80 ${bannerColor} relative overflow-hidden flex items-center justify-center w-full shrink-0`}>
            <h1 className="font-black text-5xl md:text-8xl text-white drop-shadow-xl tracking-wider uppercase"
                style={{ textShadow: '4px 4px 0px black', WebkitTextStroke: '2px black' }}>
                {titleText}
            </h1>
            {!isPassed && (
                <div className="absolute top-10 right-10 md:right-20 w-32 h-32 rounded-full bg-white opacity-80 blur-xl"></div>
            )}
            {isPassed && (
                <div className="absolute bottom-0 w-full h-10 md:h-16 bg-emerald-500 opacity-80 skew-y-2"></div>
            )}
        </div>
    );

    return (
        <div className="flex flex-col md:h-full bg-white md:overflow-y-auto">
            <Banner />

            <div className="p-4 md:p-8 max-w-4xl mx-auto w-full flex-1">
                <div className="mb-6 md:mb-8">
                    <h2 className="font-bold text-base md:text-lg text-slate-900 mb-1">
                        Tanggal {type === 'exam' ? 'Ujian Akhir' : type === 'pretest' ? 'Pretest' : 'Quiz'}:
                    </h2>
                    <p className="text-slate-500 text-sm">{dateStr}</p>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 mb-6 md:mb-8">
                    <div className={`p-4 md:p-6 rounded-xl border ${isPassed ? 'bg-emerald-50 border-emerald-100' : 'bg-orange-50 border-orange-100'}`}>
                        <p className={`text-sm font-medium mb-1 ${isPassed ? 'text-emerald-600' : 'text-orange-600'}`}>Nilai</p>
                        <p className={`text-3xl md:text-4xl font-bold ${isPassed ? 'text-emerald-600' : 'text-orange-600'}`}>{score}</p>
                    </div>
                    <div className="p-4 md:p-6 rounded-xl border border-gray-100 bg-white">
                        <p className="text-sm font-medium text-slate-500 mb-1">Soal</p>
                        <p className="text-3xl md:text-4xl font-bold text-slate-900">{totalQuestions}</p>
                    </div>
                    <div className="p-4 md:p-6 rounded-xl border border-gray-100 bg-white">
                        <p className="text-sm font-medium text-slate-500 mb-1">Benar</p>
                        <div className="flex items-center gap-2">
                            <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-green-500" />
                            <p className="text-3xl md:text-4xl font-bold text-slate-900">{correctCount}</p>
                        </div>
                    </div>
                    <div className="p-4 md:p-6 rounded-xl border border-gray-100 bg-white">
                        <p className="text-sm font-medium text-slate-500 mb-1">Salah</p>
                        <div className="flex items-center gap-2">
                            <XCircle className="w-5 h-5 md:w-6 md:h-6 text-orange-500" />
                            <p className="text-3xl md:text-4xl font-bold text-slate-900">{wrongCount}</p>
                        </div>
                    </div>
                </div>

                <div className="mb-6 md:mb-8">
                    <h3 className="font-bold text-lg md:text-xl text-slate-900 mb-2">
                        {isPassed ? "Selesai!" : "Sedikit Lagi!"}
                    </h3>
                    <p className="text-slate-600 text-sm md:text-base">
                        {isPassed
                            ? `${type === 'pretest' ? 'Pretest' : type === 'quiz' ? 'Quiz' : 'Ujian Akhir'} sudah selesai dan kami sudah mengetahui progresmu.`
                            : `Kamu sudah menyelesaikan ${type} dengan baik namun nilaimu belum cukup untuk melanjutkan materi.`
                        }
                    </p>
                    <p className="text-slate-600 mt-2 text-sm md:text-base">
                        {isPassed
                            ? "Saatnya memulai kelas!"
                            : `Pelajari kembali modul sebelumnya dan kerjakan kembali ${type} ini!`
                        }
                    </p>
                </div>

                {!isPassed && (
                    <Button
                        variant="outline"
                        onClick={onRetry}
                        className="flex items-center justify-center gap-2 border-green-500 text-green-500 hover:bg-green-50 font-bold px-6 py-3 md:px-8 h-auto w-full md:w-auto"
                    >
                        <RotateCcw className="w-4 h-4" /> Ulangi {type === 'exam' ? 'Ujian' : 'Quiz'}
                    </Button>
                )}
            </div>
        </div>
    );
};


const SummarySection = ({ onDownload }) => (
    <div className="flex flex-col md:h-full bg-white md:overflow-y-auto">
        <div className="w-full aspect-video bg-gray-800 flex items-center justify-center shrink-0">
            <PlayCircle className="w-16 h-16 md:w-20 md:h-20 text-white opacity-80" />
        </div>
        <div className="p-4 md:p-8 max-w-4xl mx-auto w-full flex-1">
            <h2 className="font-bold text-xl md:text-2xl text-slate-900 mb-2">Download Rangkuman Modul</h2>
            <p className="text-slate-500 text-sm md:text-base mb-6">Silakan download rangkuman modul dari materi yang telah kamu pelajari</p>

            <Button
                variant="outline"
                onClick={onDownload}
                className="border-green-500 text-green-500 hover:bg-green-50 font-bold flex items-center justify-center gap-2 px-6 py-3 h-auto w-full md:w-auto"
            >
                <Download className="w-4 h-4 md:w-5 md:h-5" /> Download Rangkuman
            </Button>
        </div>
    </div>
);

const ReviewModal = ({ isOpen, onClose, onSubmit }) => {
    if (!isOpen) return null;
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
            <div className="bg-white rounded-xl shadow-xl w-full max-w-lg p-6 md:p-8 flex flex-col items-center text-center animate-in fade-in zoom-in duration-200 relative">
                <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600">
                    <XCircle className="w-5 h-5 md:w-6 md:h-6" />
                </button>

                <h3 className="font-bold text-lg md:text-xl text-slate-900 mb-2">Tulis Review Terbaikmu!</h3>
                <p className="text-slate-500 text-sm md:text-base mb-6">Berikan rating dan review untuk modul ini</p>

                <div className="flex gap-1 md:gap-2 mb-6">
                    {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} className="w-7 h-7 md:w-8 md:h-8 fill-gray-200 text-gray-200 hover:fill-yellow-400 hover:text-yellow-400 cursor-pointer transition-colors" />
                    ))}
                </div>

                <textarea
                    className="w-full border border-gray-200 rounded-lg p-3 md:p-4 mb-6 focus:outline-none focus:ring-2 focus:ring-green-500 min-h-[100px] md:min-h-[120px] text-sm md:text-base"
                    placeholder="Masukkan Review"
                ></textarea>

                <div className="flex gap-3 md:gap-4 w-full">
                    <Button
                        variant="outline"
                        onClick={onClose}
                        className="flex-1 border-green-500 text-green-500 hover:bg-green-50 font-bold py-2 md:py-3"
                    >
                        Batal
                    </Button>
                    <Button
                        variant="primary"
                        onClick={onSubmit}
                        className="flex-1 bg-green-500 hover:bg-green-600 text-white font-bold shadow-lg shadow-green-100 py-2 md:py-3"
                    >
                        Selesai
                    </Button>
                </div>
            </div>
        </div>
    );
};

const QuizInterface = ({ onFinish, type }) => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [answers, setAnswers] = useState({});
    const [showSubmitModal, setShowSubmitModal] = useState(false);

    const currentQuestion = mockQuestions[currentQuestionIndex];
    const totalQuestions = mockQuestions.length;

    const handleAnswer = (optionIndex) => {
        setAnswers({ ...answers, [currentQuestionIndex]: optionIndex });
    };

    const handleNext = () => {
        if (currentQuestionIndex < totalQuestions - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        } else {
            setShowSubmitModal(true);
        }
    };

    const handleFinish = () => {
        setShowSubmitModal(false);
        let correct = 0;
        mockQuestions.forEach((q, idx) => {
            if (answers[idx] === q.correctAnswer) { correct++; }
        });
        const score = Math.round((correct / mockQuestions.length) * 100);

        onFinish({
            score,
            correctCount: correct,
            wrongCount: mockQuestions.length - correct,
            totalQuestions: mockQuestions.length
        });
    };

    const handlePrev = () => {
        if (currentQuestionIndex > 0) {
            setCurrentQuestionIndex(currentQuestionIndex - 1);
        }
    };

    return (
        <div className="flex flex-col md:flex-row md:h-full bg-white">

            <div className="w-full md:w-64 border-b md:border-r border-gray-200 p-4 md:p-6 flex flex-col shrink-0 md:h-full md:overflow-y-auto order-first bg-white">
                <h3 className="font-bold text-slate-900 mb-4 hidden md:block">List Soal</h3>
                

                <div className="flex overflow-x-auto md:grid md:grid-cols-5 gap-2 mb-3 md:mb-6 pb-2 md:pb-0 px-1 md:px-0 hide-scrollbar">
                    {mockQuestions.map((q, idx) => {
                        const isAnswered = answers[idx] !== undefined;
                        const isActive = idx === currentQuestionIndex;
                        return (
                            <button
                                key={q.id}
                                onClick={() => setCurrentQuestionIndex(idx)}
                                className={`
                                    relative w-10 h-10 shrink-0 md:shrink rounded-lg text-sm font-bold flex items-center justify-center border transition-all
                                    ${isActive
                                        ? 'border-orange-400 text-orange-500 bg-white shadow-sm ring-1 ring-orange-400'
                                        : 'border-gray-200 text-slate-600 hover:bg-gray-50'
                                    }
                                `}
                            >
                                {idx + 1}
                                {isAnswered && !isActive && (
                                    <div className="absolute top-0 right-0 w-3 h-3">
                                        <div className="absolute top-0 right-0 w-0 h-0 border-l-[12px] border-l-transparent border-t-[12px] border-t-yellow-400 rounded-tr-md"></div>
                                    </div>
                                )}
                            </button>
                        );
                    })}
                </div>

                <div className="p-3 md:p-4 bg-blue-50 border border-blue-100 rounded-xl mt-auto shadow-sm">
                    <p className="text-xs text-blue-600 font-medium cursor-pointer hover:underline text-center md:text-left" onClick={() => setShowSubmitModal(true)}>
                        Selesaikan semua soal untuk mengakhiri {type === 'exam' ? 'ujian' : type}
                    </p>
                </div>
            </div>

            <SubmitModal
                isOpen={showSubmitModal}
                onClose={() => setShowSubmitModal(false)}
                onConfirm={handleFinish}
                type={type}
            />


            <div className="flex-1 flex flex-col md:h-full md:overflow-y-auto bg-white">
                <div className="p-4 md:p-8 max-w-3xl mx-auto w-full flex-1">
                    <h2 className="font-bold text-lg md:text-2xl text-slate-900 mb-2 md:mb-4">Pertanyaan {currentQuestionIndex + 1}</h2>
                    <p className="text-slate-600 text-base md:text-lg mb-6 md:mb-8 leading-relaxed">
                        {currentQuestion.question}
                    </p>

                    <div className="space-y-3 md:space-y-4">
                        {currentQuestion.options.map((option, idx) => {
                            const isSelected = answers[currentQuestionIndex] === idx;
                            return (
                                <div
                                    key={idx}
                                    onClick={() => handleAnswer(idx)}
                                    className={`
                                        p-3 md:p-4 rounded-xl border flex items-center gap-3 md:gap-4 transition-all overflow-hidden cursor-pointer
                                        ${isSelected
                                            ? 'border-green-500 bg-green-50 ring-1 ring-green-500'
                                            : 'border-gray-200 hover:border-gray-300'
                                        }
                                    `}
                                >
                                    <div className={`
                                        w-5 h-5 md:w-6 md:h-6 rounded-full border-2 flex items-center justify-center shrink-0
                                        ${isSelected ? 'border-green-500' : 'border-gray-300'}
                                    `}>
                                        {isSelected && <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-green-500" />}
                                    </div>
                                    <span className={`text-sm md:text-base font-medium flex-1 ${isSelected ? 'text-green-700' : 'text-slate-700'}`}>
                                        {option}
                                    </span>
                                </div>
                            );
                        })}
                    </div>
                </div>


                <div className="border-t border-gray-200 p-4 md:p-6 flex justify-between items-center bg-white shrink-0 mt-6 md:mt-0">
                    <Button
                        variant="outline"
                        onClick={handlePrev}
                        disabled={currentQuestionIndex === 0}
                        className={`px-4 md:px-8 border-green-500 text-green-500 text-sm md:text-base py-2 md:py-3 h-auto justify-center ${currentQuestionIndex === 0 ? 'opacity-50 cursor-not-allowed border-gray-300 text-gray-400' : 'hover:bg-green-50'}`}
                    >
                        <ChevronLeft className="w-4 h-4 mr-1 md:mr-2" /> Sebelumnya
                    </Button>

                    {currentQuestionIndex === totalQuestions - 1 ? (
                        <Button
                            variant="primary"
                            onClick={() => setShowSubmitModal(true)}
                            className="px-4 md:px-8 bg-yellow-400 hover:bg-yellow-500 text-white border-none shadow-md text-sm md:text-base py-2 md:py-3 h-auto justify-center"
                        >
                            Selesaikan <ChevronRight className="w-4 h-4 ml-1 md:ml-2" />
                        </Button>
                    ) : (
                        <Button
                            variant="primary"
                            onClick={handleNext}
                            className="px-4 md:px-8 bg-green-500 hover:bg-green-600 text-white border-none shadow-md text-sm md:text-base py-2 md:py-3 h-auto justify-center"
                        >
                            Selanjutnya <ChevronRight className="w-4 h-4 ml-1 md:ml-2" />
                        </Button>
                    )}
                </div>
            </div>
        </div>
    );
};

const RulePage = ({ type, onStart }) => {
    let title = "Aturan";
    let buttonText = "Mulai Quiz";
    let bgClass = "bg-[#4CAF50]"; 

    if (type === 'exam') {
        buttonText = "Mulai Ujian Akhir";
    } else if (type === 'pretest') {
        buttonText = "Mulai Pre-Test";
    }

    return (
        <div className="flex flex-col md:h-full bg-white">
            <div className="h-48 md:h-80 bg-cyan-400 relative overflow-hidden flex items-center justify-center shrink-0">
                <h1 className="font-black text-5xl md:text-8xl text-white drop-shadow-lg tracking-wider" style={{ textShadow: '3px 3px 0px black' }}>
                    RULES
                </h1>
                <div className="absolute bottom-0 left-0 w-full h-12 md:h-20 bg-emerald-500 skew-y-3 origin-bottom-left"></div>
            </div>

            <div className="p-6 md:p-8 max-w-3xl mx-auto w-full flex-1">
                <h2 className="font-bold text-xl md:text-2xl text-slate-900 mb-4 md:mb-6">{title}</h2>
                <div className="prose prose-slate text-slate-600 mb-6 md:mb-8 text-sm md:text-base">
                    {type === 'pretest' ? (
                        <>
                            <p className="mb-4">
                                Kerjakan pretest dengan sebaik mungkin untuk mengukur pemahaman awalmu terkait materi yang akan kamu pelajari
                            </p>
                            <p className="mb-4">
                                Syarat Nilai Kelulusan: -<br />
                                Durasi Ujian: 5 Menit
                            </p>
                            <p>
                                Jangan khawatir, total skor tidak akan memengaruhi kelulusan dan penilaian akhirmu dalam rangkaian kelas ini
                            </p>
                        </>
                    ) : (
                        <>
                            <p className="mb-4">
                                Kerjakan {type === 'exam' ? 'ujian akhir' : type} dengan sebaik mungkin untuk mengukur pemahaman terkait materi yang telah kamu pelajari
                            </p>
                            <p className="mb-4">
                                Syarat Nilai Kelulusan: 60%
                            </p>
                            <p>
                                Kerjakan dengan sebaik mungkin untuk mencapai skor minimal agar kamu dapat melanjutkan ke modul berikutnya
                            </p>
                        </>
                    )}
                </div>

                <Button
                    onClick={onStart}
                    className={`w-full md:w-auto text-white font-bold py-2.5 md:py-3 px-6 md:px-8 rounded-lg shadow-lg hover:opacity-90 transition-opacity ${bgClass}`}
                >
                    {buttonText}
                </Button>
            </div>
        </div>
    );
};

const CourseLearning = () => {
    const { id, type } = useParams();
    const navigate = useNavigate();
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [currentModuleId, setCurrentModuleId] = useState('v1');
    const [quizState, setQuizState] = useState('idle');
    const [quizResult, setQuizResult] = useState(null);
    const [showReviewModal, setShowReviewModal] = useState(false);
    const [isCertificateAvailable, setIsCertificateAvailable] = useState(false);
    const [showCertDropdown, setShowCertDropdown] = useState(false);

    const allModules = React.useMemo(() => {
        return courseContent.flatMap(section => section.modules);
    }, []);

    const [completedModules, setCompletedModules] = useState(() => {
        const initialCompleted = new Set();
        allModules.forEach(mod => {
            if (mod.completed) initialCompleted.add(mod.id);
        });
        return initialCompleted;
    });

    React.useEffect(() => {
        setQuizState('idle');
        setQuizResult(null);
    }, [currentModuleId]);

    const getContentType = (modId) => {
        if (!modId) return 'video';
        if (modId.startsWith('p')) return 'pretest';
        if (modId.startsWith('v')) return 'video';
        if (modId.startsWith('q')) return 'quiz';
        if (modId.startsWith('e')) return 'exam';
        return 'video';
    };

    const contentType = getContentType(currentModuleId);

    const markAsCompleted = (modId) => {
        setCompletedModules(prev => {
            const newSet = new Set(prev);
            newSet.add(modId);
            return newSet;
        });
    };

    const handleNextModule = () => {
        markAsCompleted(currentModuleId);
        const currentIndex = allModules.findIndex(m => m.id === currentModuleId);
        if (currentIndex < allModules.length - 1) {
            setCurrentModuleId(allModules[currentIndex + 1].id);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    const handlePrevModule = () => {
        const currentIndex = allModules.findIndex(m => m.id === currentModuleId);
        if (currentIndex > 0) {
            setCurrentModuleId(allModules[currentIndex - 1].id);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    const completedCount = completedModules.size;
    const totalCount = allModules.length;
    const progressPercent = Math.round((completedCount / totalCount) * 100);

    return (
        <div className="flex flex-col h-screen md:h-screen bg-gray-50 overflow-y-auto md:overflow-hidden font-sans">

            <header className="bg-white border-b border-gray-200 h-14 md:h-16 flex items-center justify-between px-3 md:px-4 shrink-0 z-30 sticky top-0 md:static">
                <div className="flex items-center gap-2 md:gap-4 overflow-hidden">
                    <Link to="/my-courses" className="p-1.5 md:p-2 hover:bg-gray-100 rounded-full text-slate-500 shrink-0">
                        <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
                    </Link>

                    <h1 className="font-bold text-slate-900 truncate text-sm md:text-base max-w-[150px] sm:max-w-xs md:max-w-md">Foundations of User Experience Design</h1>
                </div>

                <div className="flex items-center gap-3 md:gap-4 shrink-0">
                    {isCertificateAvailable ? (
                        <div className="relative">
                            <Button
                                onClick={() => setShowCertDropdown(!showCertDropdown)}
                                variant="outline"
                                className="border-green-500 text-green-500 hover:bg-green-50 font-bold flex items-center gap-1.5 md:gap-2 text-xs md:text-sm px-2 md:px-4 py-1.5 md:py-2 h-auto"
                            >
                                <Trophy className="w-4 h-4 text-yellow-500" /> <span className="hidden sm:inline">Ambil Sertifikat</span> <ChevronDown className="w-3 h-3 md:w-4 md:h-4" />
                            </Button>

                            {showCertDropdown && (
                                <div className="absolute top-full right-0 mt-2 w-72 md:w-80 bg-white rounded-xl shadow-xl border border-gray-100 p-5 md:p-6 z-50 animate-in fade-in slide-in-from-top-2">
                                    <div className="absolute -top-2 right-6 w-4 h-4 bg-white border-t border-l border-gray-100 transform rotate-45"></div>
                                    <h3 className="font-bold text-base md:text-lg text-slate-900 mb-1 md:mb-2">Modul sudah selesai</h3>
                                    <p className="text-xs md:text-sm text-slate-500 mb-3 md:mb-4">
                                        {completedCount} dari {totalCount} modul telah selesai, silahkan download sertifikat
                                    </p>
                                    <Link to="/certificate">
                                        <Button className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-2 md:py-3 shadow-lg shadow-green-100">
                                            Ambil Sertifikat
                                        </Button>
                                    </Link>
                                </div>
                            )}
                        </div>
                    ) : (
                        <div className="flex items-center gap-2 md:gap-3">
                            <div className="hidden md:block w-32 h-2 bg-gray-100 rounded-full overflow-hidden">
                                <div
                                    className="h-full bg-orange-400 rounded-full transition-all duration-500"
                                    style={{ width: `${progressPercent}%` }}
                                ></div>
                            </div>
                            <span className="text-xs md:text-sm font-bold text-green-500 flex items-center gap-1">
                                {completedCount}/{totalCount} <ChevronDown className="w-3 h-3 md:w-4 md:h-4" />
                            </span>
                        </div>
                    )}
                    

                    <div className="hidden md:block w-8 h-8 rounded-full bg-gray-200 overflow-hidden ml-2">
                        <img src="/src/assets/profile_image/user.jpg" alt="User" className="w-full h-full object-cover" />
                    </div>

                    <button className="md:hidden p-1 text-slate-700">
                        <Menu className="w-6 h-6" />
                    </button>
                </div>
            </header>

            <div className="flex flex-col md:flex-row flex-1 relative md:overflow-hidden min-h-0">

                <main className={`flex-1 flex flex-col min-w-0 bg-gray-50 md:bg-black relative transition-all duration-300 ${sidebarOpen ? 'md:mr-0' : ''}`}>
                    <div className="flex-1 md:overflow-y-auto bg-white flex flex-col">
                        {contentType === 'video' ? (
                            <VideoSection currentModuleId={currentModuleId} completedModules={completedModules} allModules={allModules} />
                        ) : contentType === 'doc' ? (
                            <SummarySection onDownload={() => markAsCompleted(currentModuleId)} />
                        ) : (
                            <div className="md:h-full bg-white md:overflow-y-auto">
                                {quizState === 'started' ? (
                                    <QuizInterface
                                        type={contentType}
                                        onFinish={(result) => {
                                            setQuizResult(result);
                                            setQuizState('finished');
                                            markAsCompleted(currentModuleId);
                                            if (contentType === 'exam' && result.score >= 70) {
                                                setIsCertificateAvailable(true);
                                            }
                                        }}
                                    />
                                ) : quizState === 'finished' && quizResult ? (
                                    <ResultPage
                                        type={contentType}
                                        score={quizResult.score}
                                        correctCount={quizResult.correctCount}
                                        wrongCount={quizResult.wrongCount}
                                        totalQuestions={quizResult.totalQuestions}
                                        onRetry={() => {
                                            setQuizState('started');
                                            setQuizResult(null);
                                        }}
                                    />
                                ) : (
                                    <RulePage
                                        type={contentType}
                                        onStart={() => setQuizState('started')}
                                    />
                                )}
                            </div>
                        )}
                    </div>


                    <div className="md:hidden bg-green-500 py-3 px-4 flex justify-between items-center text-white sticky bottom-0 z-20 shadow-md">
                        <button
                            onClick={handlePrevModule}
                            disabled={allModules.findIndex(m => m.id === currentModuleId) === 0}
                            className="flex items-center gap-1.5 text-sm font-semibold disabled:opacity-50"
                        >
                            <ChevronLeft className="w-4 h-4" /> Sebelumnya
                        </button>


                        
                        <button
                            onClick={handleNextModule}
                            className="flex items-center gap-1.5 text-sm font-semibold"
                        >
                            Selanjutnya <ChevronRight className="w-4 h-4" />
                        </button>
                    </div>
                </main>


                <aside className={`
                    w-full md:w-80 bg-white md:border-l border-gray-200 transition-all duration-300 flex-col shrink-0 
                    md:relative md:h-full z-10 
                    ${sidebarOpen ? 'md:flex' : 'md:hidden'} flex 
                    pb-[80px] md:pb-0 
                `}>
                    <div className="p-4 border-b border-gray-100 flex justify-between items-center bg-gray-50 md:bg-white sticky top-14 md:static z-10">
                        <h2 className="font-bold text-slate-900 text-base md:text-sm">Daftar Modul</h2>
                        <button onClick={() => setSidebarOpen(false)} className="hidden md:block text-slate-400">
                            <ChevronRight className="w-5 h-5" />
                        </button>
                    </div>
                    
                    <div className="flex-1 md:overflow-y-auto p-4 space-y-4 bg-white">
                        {courseContent.map(section => (
                            <div key={section.id}>
                                <div className="flex justify-between items-center mb-2.5 cursor-pointer">
                                    <h3 className="font-bold text-sm text-slate-900">{section.title}</h3>
                                    <ChevronUp className="w-4 h-4 text-slate-400" />
                                </div>
                                <div className="space-y-2">
                                    {section.modules.map(mod => {
                                        const isCompleted = completedModules.has(mod.id);
                                        return (
                                            <div
                                                key={mod.id}
                                                onClick={() => setCurrentModuleId(mod.id)}
                                                className={`p-3 rounded-lg border cursor-pointer hover:bg-gray-50 flex items-start gap-3 transition-colors ${currentModuleId === mod.id ? 'bg-green-50 border-green-200' : 'border-gray-200 bg-white'
                                                    }`}
                                            >
                                                <div className="mt-0.5 shrink-0">
                                                    {isCompleted ? (
                                                        <CheckCircle className="w-5 h-5 text-green-500 fill-green-50" />
                                                    ) : (
                                                        <div className="text-slate-400">
                                                            {mod.type === 'video' ? <PlayCircle className="w-5 h-5" /> :
                                                                mod.type === 'doc' ? <FileText className="w-5 h-5" /> :
                                                                    <HelpCircle className="w-5 h-5" />}
                                                        </div>
                                                    )}
                                                </div>
                                                <div className="flex-1 min-w-0">
                                                    <p className={`text-sm font-semibold truncate ${currentModuleId === mod.id ? 'text-green-700' : 'text-slate-700'}`}>
                                                        {mod.title}
                                                    </p>
                                                    <p className="text-xs text-slate-500 mt-1">{mod.duration}</p>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        ))}
                    </div>


                    <div className="hidden md:block p-0 mt-auto shrink-0 border-t border-gray-100">
                        <button
                            onClick={() => setShowReviewModal(true)}
                            className="w-full bg-yellow-400 hover:bg-yellow-500 text-slate-900 font-bold py-4 flex items-center justify-center gap-2 transition-colors"
                        >
                            <Star className="w-5 h-5 fill-slate-900" /> Beri Review & Rating
                        </button>
                    </div>


                    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-gray-100">
                        <button
                            onClick={() => setShowReviewModal(true)}
                            className="w-full bg-yellow-400 hover:bg-yellow-500 text-slate-900 font-bold py-3.5 flex items-center justify-center gap-2 transition-colors text-sm"
                        >
                            <Star className="w-4 h-4 fill-slate-900" /> Beri Review & Rating
                        </button>
                    </div>
                </aside>

                <ReviewModal
                    isOpen={showReviewModal}
                    onClose={() => setShowReviewModal(false)}
                    onSubmit={() => setShowReviewModal(false)}
                />
            </div>


            <div className="hidden md:flex h-16 bg-white border-t border-gray-200 items-center justify-between px-6 shrink-0 z-20">
                <Button
                    variant="ghost"
                    onClick={handlePrevModule}
                    disabled={allModules.findIndex(m => m.id === currentModuleId) === 0}
                    className="flex items-center gap-2 text-white bg-green-500 hover:bg-green-600 px-6 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    <ChevronLeft className="w-5 h-5" /> {contentType === 'video' && allModules.findIndex(m => m.id === currentModuleId) === 0 ? 'Foundations of User Experience Design' : 'Kembali'}
                </Button>

                <div className="flex items-center">
                    <button
                        onClick={() => setSidebarOpen(!sidebarOpen)}
                        className={`p-2 border border-gray-200 rounded-lg mr-4 transition-colors ${sidebarOpen ? 'bg-gray-100 text-green-600 border-green-200' : 'text-slate-600 hover:bg-gray-50'}`}
                        title="Toggle Daftar Modul"
                    >
                        <Menu className="w-5 h-5" />
                    </button>

                    <Button
                        onClick={handleNextModule}
                        variant="ghost"
                        className="flex items-center gap-2 text-white bg-green-500 hover:bg-green-600 px-6"
                    >
                        {contentType === 'video' ? 'Foundations of User Experience Design' : 'Lanjut'} <ChevronRight className="w-5 h-5" />
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default CourseLearning;
