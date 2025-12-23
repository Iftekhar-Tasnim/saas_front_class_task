"use client";

import React from 'react';
import Link from 'next/link';
import { Ticket, Mail, Lock, ArrowRight } from 'lucide-react';

export default function AdminLoginPage() {
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

            <div className="bg-white py-10 px-6 shadow-xl shadow-slate-200/50 sm:rounded-3xl sm:px-12 border border-slate-100">
                <div className="mb-8">
                    <h2 className="text-2xl font-black text-slate-950 italic mb-2">Welcome Back</h2>
                    <p className="text-slate-500 text-sm">Please enter your credentials to access the platform control panel.</p>
                </div>

                <form className="space-y-6" action="#" method="POST">
                    <div>
                        <label htmlFor="email" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                            Email Address
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
                                placeholder="admin@ticketbd.com"
                                className="block w-full pl-11 pr-4 py-3.5 bg-slate-50 border border-slate-200 rounded-2xl text-slate-900 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all shadow-sm"
                            />
                        </div>
                    </div>

                    <div>
                        <div className="flex items-center justify-between mb-2">
                            <label htmlFor="password" className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                                Password
                            </label>
                            <div className="text-xs">
                                <a href="#" className="font-bold text-primary hover:text-emerald-700 transition-colors">
                                    Forgot password?
                                </a>
                            </div>
                        </div>
                        <div className="relative group">
                            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400 group-focus-within:text-primary transition-colors">
                                <Lock size={18} />
                            </div>
                            <input
                                id="password"
                                name="password"
                                type="password"
                                autoComplete="current-password"
                                required
                                placeholder="••••••••"
                                className="block w-full pl-11 pr-4 py-3.5 bg-slate-50 border border-slate-200 rounded-2xl text-slate-900 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all shadow-sm"
                            />
                        </div>
                    </div>

                    <div className="flex items-center">
                        <input
                            id="remember-me"
                            name="remember-me"
                            type="checkbox"
                            className="h-4 w-4 text-primary focus:ring-primary border-slate-300 rounded-md transition-all cursor-pointer"
                        />
                        <label htmlFor="remember-me" className="ml-3 block text-sm text-slate-600 font-medium cursor-pointer">
                            Remember me
                        </label>
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="w-full flex justify-center items-center gap-2 py-4 px-4 border border-transparent rounded-2xl shadow-xl shadow-primary/20 text-sm font-bold text-white bg-primary hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-all hover:-translate-y-0.5 active:scale-95"
                        >
                            Sign In to Dashboard
                            <ArrowRight size={18} />
                        </button>
                    </div>
                </form>

                <div className="mt-8 pt-8 border-t border-slate-50 text-center">
                    <p className="text-sm text-slate-500 font-medium">
                        Don't have an admin account?{' '}
                        <Link href="/admin/register" className="text-primary font-bold hover:underline">
                            Register Tenant
                        </Link>
                    </p>
                </div>
            </div>

            <p className="mt-8 text-center text-xs text-slate-400 italic">
                &copy; {new Date().getFullYear()} TicketBD. Authorized Access Only.
            </p>
        </div>
    );
}
