import React from 'react';
import { Users, Shield, ShieldCheck, Mail, Clock } from 'lucide-react';
import fs from 'fs/promises';
import path from 'path';

async function getAdmins() {
    const filePath = path.join(process.cwd(), 'data', 'admins.json');
    const fileData = await fs.readFile(filePath, 'utf-8');
    return JSON.parse(fileData);
}

export default async function UsersPage() {
    const admins = await getAdmins();

    return (
        <div className="space-y-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-black text-slate-950 tracking-tight italic">Platform Users</h1>
                    <p className="text-slate-500 mt-1 font-medium">Super admins and platform control users.</p>
                </div>
                <button className="flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-3 rounded-2xl font-bold transition-all shadow-lg shadow-indigo-200">
                    <PlusIcon size={20} />
                    <span>Invite Platform Admin</span>
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {admins.map((admin: any) => (
                    <div key={admin.id} className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm shadow-slate-200/50 relative overflow-hidden group hover:border-indigo-100 transition-all">
                        <div className="absolute top-4 right-4 text-indigo-100 group-hover:text-indigo-600 transition-colors">
                            <ShieldCheck size={24} />
                        </div>

                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-14 h-14 rounded-2xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600 font-black text-xl italic shadow-sm">
                                {(admin.fullName || admin.firstName || 'A').charAt(0)}
                            </div>
                            <div>
                                <h3 className="font-bold text-slate-950 text-lg leading-tight">
                                    {admin.fullName || `${admin.firstName || ''} ${admin.lastName || ''}`.trim() || 'Administrator'}
                                </h3>
                                <p className="text-xs text-slate-500 font-bold uppercase tracking-widest">
                                    {admin.designation || 'Platform Staff'}
                                </p>
                            </div>
                        </div>

                        <div className="space-y-3">
                            <div className="flex items-center gap-3 text-slate-600">
                                <Mail size={16} className="text-slate-400" />
                                <span className="text-sm font-medium">{admin.email}</span>
                            </div>
                            <div className="flex items-center gap-3 text-slate-600">
                                <Clock size={16} className="text-slate-400" />
                                <span className="text-sm font-medium">Joined {new Date(admin.createdAt).toLocaleDateString('en-GB')}</span>
                            </div>
                        </div>

                        <div className="mt-8 pt-6 border-t border-slate-50 flex items-center justify-between">
                            <span className="px-3 py-1.5 rounded-full bg-indigo-50 text-indigo-700 text-[10px] font-black uppercase tracking-widest border border-indigo-100">
                                Platinum Admin
                            </span>
                            <button className="text-xs font-bold text-slate-400 hover:text-red-500 transition-colors">
                                Revoke Access
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

function PlusIcon({ size }: { size: number }) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <line x1="12" y1="5" x2="12" y2="19"></line>
            <line x1="5" y1="12" x2="19" y2="12"></line>
        </svg>
    )
}
