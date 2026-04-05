import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../layouts/Navbar';
import FormField from '../components/ui/FormField';
import Input from '../components/ui/Input';
import PasswordInput from '../components/ui/PasswordInput';
import PhoneInput from '../components/ui/PhoneInput';
import Button from '../components/ui/Button';
import googleIcon from '../assets/google.svg';

const Register = () => {
    return (
        <div className="bg-surface text-slate-900 font-sans min-h-screen flex flex-col">
            <Navbar />

            <div className="flex justify-center items-start pt-10 pb-12 px-4 flex-1">
                <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 w-full max-w-md mt-10">
                    <div className="text-center mb-8">
                        <h2 className="text-2xl font-bold text-slate-900 mb-2">Pendaftaran Akun</h2>
                        <p className="text-slate-500 text-sm">Yuk, daftarkan akunmu sekarang juga!</p>
                    </div>

                    <form className="space-y-5">
                        <FormField label="Nama Lengkap" required>
                            <Input type="text" placeholder="Nama Lengkap Anda" required />
                        </FormField>

                        <FormField label="E-Mail" required>
                            <Input type="email" placeholder="nama@email.com" required />
                        </FormField>

                        <FormField label="No. Hp" required>
                            <PhoneInput required />
                        </FormField>

                        <FormField label="Kata Sandi" required>
                            <PasswordInput placeholder="Min. 8 karakter" required />
                        </FormField>

                        <FormField label="Konfirmasi Kata Sandi" required>
                            <PasswordInput placeholder="Ulangi kata sandi" required />
                        </FormField>

                        <div className="space-y-3 pt-2">
                            <Button type="submit" variant="primary" className="w-full">
                                Daftar
                            </Button>
                            <Link to="/login" className="block w-full">
                                <Button type="button" variant="muted" className="w-full">
                                    Masuk
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
                            Daftar dengan Google
                        </Button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;
