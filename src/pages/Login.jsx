import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../layouts/Navbar';
import FormField from '../components/ui/FormField';
import Input from '../components/ui/Input';
import PasswordInput from '../components/ui/PasswordInput';
import Button from '../components/ui/Button';
import googleIcon from '../assets/google.svg';

const Login = () => {
    return (
        <div className="bg-surface text-slate-900 font-sans min-h-screen flex flex-col">
            <Navbar />

            <div className="flex justify-center items-start pt-10 pb-12 px-4 flex-1">
                <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 w-full max-w-md mt-10">
                    <div className="text-center mb-8">
                        <h2 className="text-2xl font-bold text-slate-900 mb-2">Masuk ke Akun</h2>
                        <p className="text-slate-500 text-sm">Yuk, lanjutin belajarmu di videobelajar.</p>
                    </div>

                    <form className="space-y-5">
                        <FormField label="E-Mail" required>
                            <Input type="email" placeholder="masukkan emailmu" required />
                        </FormField>

                        <FormField label="Kata Sandi" required>
                            <PasswordInput placeholder="masukkan kata sandi" required />
                        </FormField>

                        <div className="flex justify-end">
                            <a href="#" className="text-sm font-medium text-slate-600 hover:text-slate-900">
                                Lupa Password?
                            </a>
                        </div>

                        <div className="space-y-3">
                            <Button type="submit" variant="primary" className="w-full">
                                Masuk
                            </Button>
                            <Link to="/register" className="block w-full">
                                <Button type="button" variant="muted" className="w-full">
                                    Daftar
                                </Button>
                            </Link>
                        </div>

                        <div className="relative my-6">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-gray-200"></div>
                            </div>
                            <div className="relative flex justify-center text-sm">
                                <span className="px-2 bg-white text-slate-500">atau</span>
                            </div>
                        </div>

                        <Button type="button" variant="outline" className="w-full">
                            <img src={googleIcon} alt="Google" className="w-5 h-5 mr-2" />
                            Masuk dengan Google
                        </Button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
