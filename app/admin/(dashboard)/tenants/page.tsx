import React from 'react';
import Link from 'next/link';
import { Building2, Plus, Search, Filter, ChevronRight, MoreVertical } from 'lucide-react';
import fs from 'fs/promises';
import path from 'path';

async function getTenants() {
    const filePath = path.join(process.cwd(), 'data', 'tenants.json');
    const fileData = await fs.readFile(filePath, 'utf-8');
    return JSON.parse(fileData);
}

export default async function TenantsPage() {
    const tenants = await getTenants();

    return (
        <div className="space-y-8">
            {/* Header section */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-black text-slate-950 tracking-tight italic">Tenants Management</h1>
                    <p className="text-slate-500 mt-1 font-medium">Manage and onboard organizations on TicketBD.</p>
                </div>
                <button className="flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white px-5 py-3 rounded-2xl font-bold transition-all shadow-lg shadow-slate-200">
                    <Plus size={20} />
                    <span>Onboard New Tenant</span>
                </button>
            </div>

            {/* Stats Overview */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                    { label: 'Total Tenants', value: tenants.length, color: 'blue' },
                    { label: 'Active', value: tenants.filter((t: any) => t.status === 'active').length, color: 'emerald' },
                    { label: 'Pending Review', value: tenants.filter((t: any) => t.status === 'pending').length, color: 'amber' },
                ].map((stat) => (
                    <div key={stat.label} className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm shadow-slate-200/50">
                        <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">{stat.label}</p>
                        <p className="text-3xl font-black text-slate-950 italic">{stat.value}</p>
                    </div>
                ))}
            </div>

            {/* Controls */}
            <div className="bg-white p-4 rounded-3xl border border-slate-100 shadow-sm flex flex-col md:flex-row gap-4">
                <div className="relative flex-1">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                    <input
                        type="text"
                        placeholder="Search by name or slug..."
                        className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-sm"
                    />
                </div>
                <button className="flex items-center justify-center gap-2 px-6 py-3 border border-slate-200 rounded-2xl text-sm font-bold text-slate-700 hover:bg-slate-50 transition-all">
                    <Filter size={18} />
                    <span>Filters</span>
                </button>
            </div>

            {/* Tenants List */}
            <div className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="border-b border-slate-50">
                                <th className="px-6 py-5 text-xs font-bold text-slate-500 uppercase tracking-widest">Organization</th>
                                <th className="px-6 py-5 text-xs font-bold text-slate-500 uppercase tracking-widest">Status</th>
                                <th className="px-6 py-5 text-xs font-bold text-slate-500 uppercase tracking-widest">Onboarded</th>
                                <th className="px-6 py-5 text-xs font-bold text-slate-500 uppercase tracking-widest text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-50">
                            {tenants.map((tenant: any) => (
                                <tr key={tenant.id} className="hover:bg-slate-50/50 transition-colors group">
                                    <td className="px-6 py-5">
                                        <div className="flex items-center gap-4">
                                            <div
                                                className="w-12 h-12 rounded-2xl flex items-center justify-center text-white font-bold shadow-inner"
                                                style={{ backgroundColor: tenant.branding.primaryColor }}
                                            >
                                                <img src={tenant.branding.logo} alt={tenant.name} className="w-8 h-8 rounded-lg" />
                                            </div>
                                            <div>
                                                <p className="font-bold text-slate-950">{tenant.name}</p>
                                                <p className="text-xs text-slate-500 font-medium">@{tenant.slug}</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-5">
                                        <span className={`px-3 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest border ${tenant.status === 'active'
                                                ? 'bg-emerald-50 text-emerald-700 border-emerald-100'
                                                : 'bg-amber-50 text-amber-700 border-amber-100'
                                            }`}>
                                            {tenant.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-5 text-sm text-slate-600 font-medium">
                                        {new Date(tenant.createdAt).toLocaleDateString('en-GB')}
                                    </td>
                                    <td className="px-6 py-5 text-right">
                                        <Link
                                            href={`/admin/tenants/${tenant.id}`}
                                            className="inline-flex items-center justify-center w-10 h-10 rounded-xl hover:bg-slate-100 text-slate-400 hover:text-primary transition-all"
                                        >
                                            <ChevronRight size={20} />
                                        </Link>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
