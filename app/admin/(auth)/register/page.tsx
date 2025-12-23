"use client";

import React from 'react';
import Link from 'next/link';
import { Ticket, Mail, Lock, User, Building2, ArrowRight, ArrowLeft } from 'lucide-react';

export default function AdminRegisterPage() {
    return (
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="flex justify-center mb-8">
                <Link href="/" className="flex items-center gap-2.5 group">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary shadow-lg shadow-primary/25 group-hover:rotate-6 transition-transform duration-300">
                        <Ticket className="text-white" size={28} />
                    </div>
                    <div className="flex flex-col leading-tight">
                        <span className="text-2xl font-black tracking-tighter text-slate-950 italic">TicketBD</span>
                        <span className="text-xs font-bold uppercase tracking-widest text-slate-500">Admin Portal</span>
                    </div>
                </Link>
            </div>

            <div className="bg-white py-10 px-6 shadow-xl shadow-slate-200/50 sm:rounded-3xl sm:px-12 border border-slate-100 max-w-lg mx-auto">
                <div className="mb-8">
                    <Link href="/admin" className="inline-flex items-center gap-2 text-xs font-bold text-slate-400 hover:text-primary transition-colors mb-4">
                        <ArrowLeft size={14} />
                        Back to Login
                    </Link>
                    <h2 className="text-2xl font-black text-slate-950 italic mb-2">Create Organizer Account</h2>
                    <p className="text-slate-500 text-sm">Join the leading ticketing platform in Bangladesh.</p>
                </div>

                <form className="space-y-5" action="#" method="POST">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                            <label htmlFor="first_name" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                                First Name
                            </label>
                            <div className="relative group">
                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400 group-focus-within:text-primary transition-colors">
                                    <User size={18} />
                                </div>
                                <input
                                    id="first_name"
                                    name="first_name"
                                    type="text"
                                    required
                                    placeholder="John"
                                    className="block w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-2xl text-slate-900 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                                />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="last_name" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                                Last Name
                            </label>
                            <div className="relative group">
                                <input
                                    id="last_name"
                                    name="last_name"
                                    type="text"
                                    required
                                    placeholder="Doe"
                                    className="block w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-2xl text-slate-900 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                                />
                            </div>
                        </div>
                    </div>

                    <div>
                        <label htmlFor="org_name" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                            Organization Name
                        </label>
                        <div className="relative group">
                            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400 group-focus-within:text-primary transition-colors">
                                <Building2 size={18} />
                            </div>
                            <input
                                id="org_name"
                                name="org_name"
                                type="text"
                                required
                                placeholder="Nishorgo Events Ltd."
                                className="block w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-2xl text-slate-900 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                            />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                            Business Email
                        </label>
                        <div className="relative group">
                            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400 group-focus-within:text-primary transition-colors">
                                <Mail size={18} />
                            </div>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                autoComplete="email"
                                required
                                placeholder="contact@nishorgo.com"
                                className="block w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-2xl text-slate-900 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                            />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="password" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                            Password
                        </label>
                        <div className="relative group">
                            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400 group-focus-within:text-primary transition-colors">
                                <Lock size={18} />
                            </div>
                            <input
                                id="password"
                                name="password"
                                type="password"
                                required
                                placeholder="••••••••"
                                className="block w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-2xl text-slate-900 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                            />
                        </div>
                    </div>

                    <div className="pt-4">
                        <button
                            type="submit"
                            className="w-full flex justify-center items-center gap-2 py-4 px-4 border border-transparent rounded-2xl shadow-xl shadow-primary/20 text-sm font-bold text-white bg-primary hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-all hover:-translate-y-0.5 active:scale-95"
                        >
                            Start Free Trial
                            <ArrowRight size={18} />
                        </button>
                    </div>
                </form>

                <p className="mt-8 text-xs text-slate-500 text-center px-4 leading-relaxed">
                    By registering, you agree to our <a href="#" className="text-primary font-bold hover:underline">Terms of Service</a> and <a href="#" className="text-primary font-bold hover:underline">Privacy Policy</a>.
                </p>
            </div>

            <p className="mt-8 text-center text-xs text-slate-400 italic">
                &copy; {new Date().getFullYear()} TicketBD. Made with ❤️ for organizers.
            </p>
        </div>
    );
}
