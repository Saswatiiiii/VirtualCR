import React from 'react';
import Navbar from "../components/landing/Navbar";
import Image from "next/image";
import Link from 'next/link';
import HeroVisual from "../components/landing/HeroVisual";
import { 
  Users, 
  BookOpen, 
  Bell, 
  ShieldCheck, 
  LayoutDashboard, 
  Building2, 
  ArrowRight, 
  GraduationCap, 
  Briefcase, 
  UserCheck ,
  School
} from 'lucide-react';

export default function LandingPage() {
  return (
    
    <div className="min-h-screen bg-[#0a0f1d] text-slate-100 font-sans selection:bg-blue-500 selection:text-white">

      <Navbar />
      
      {/* Background Decorative Gradient Blobs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl" />
        <div className="absolute top-1/3 -right-40 w-96 h-96 bg-indigo-600/15 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* --- HERO SECTION --- */}
        <section id="home" className="pt-24 pb-16 md:pt-32 md:pb-24 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold tracking-wide">
              <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
              Smart Academic Management Platform
            </div>

            {/* Headline */}
            <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              Manage your institution. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">
                Smarter.
              </span>
            </h1>

            {/* Subheading */}
            <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-slate-400 sm:text-lg lg:mx-0">
              Virtual CR brings students, teachers, HODs, and institutions together on one modern, unified academic platform.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <Link 
                href="/login" 
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 font-semibold text-white transition-all shadow-lg shadow-blue-600/25 flex items-center justify-center gap-2 group"
              >
                Get Started
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a 
                href="#features" 
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-slate-800/80 hover:bg-slate-800 border border-slate-700/80 font-semibold text-slate-300 transition-all text-center"
              >
                Explore Features ↓
              </a>
            </div>

            {/* Key Metrics / Highlights */}
            <div className="grid grid-cols-3 gap-4 pt-8 border-t border-slate-800/80 max-w-lg mx-auto lg:mx-0">
              <div>
                <p className="text-2xl font-bold text-slate-100">4+</p>
                <p className="text-xs text-slate-400 mt-0.5">User Roles</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-slate-100">1</p>
                <p className="text-xs text-slate-400 mt-0.5">Unified Platform</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-slate-100">24/7</p>
                <p className="text-xs text-slate-400 mt-0.5">Accessibility</p>
              </div>
            </div>
          </div>

        {/* Right */}
        <HeroVisual/>
       
        </section>

        {/* --- AUDIENCE / ROLES SECTION --- */}
        <section className="py-16 border-t border-slate-800/60">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-blue-400 font-semibold text-xs tracking-widest uppercase">One Platform</span>
            <h2 className="text-3xl font-bold mt-2 text-slate-100">Built for Everyone</h2>
            <p className="text-slate-400 mt-2 text-sm">Virtual CR seamlessly connects every vital role in an educational institution.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'Students',
                desc: 'Access courses, notices, schedule, and academic tracking in one simple workspace.',
                icon: GraduationCap,
                color: 'text-blue-400',
                bg: 'bg-blue-500/10',
              },
              {
                title: 'Teachers',
                desc: 'Manage classes, student progress, assignments, and daily academic tasks efficiently.',
                icon: UserCheck,
                color: 'text-indigo-400',
                bg: 'bg-indigo-500/10',
              },
              {
                title: 'HODs',
                desc: 'Coordinate department activities, faculty assignments, and operational workflows.',
                icon: Briefcase,
                color: 'text-purple-400',
                bg: 'bg-purple-500/10',
              },
              {
                title: 'Institutions',
                desc: 'Gain high-level centralized visibility and governance over institutional operations.',
                icon: Building2,
                color: 'text-emerald-400',
                bg: 'bg-emerald-500/10',
              },
            ].map((role, idx) => (
              <div 
                key={idx} 
                className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800/80 hover:border-slate-700 transition-all duration-300 group hover:-translate-y-1"
              >
                <div className={`w-12 h-12 rounded-xl ${role.bg} ${role.color} flex items-center justify-center mb-5`}>
                  <role.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold text-slate-100 mb-2">{role.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{role.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* --- FEATURES SECTION --- */}
        <section id="features" className="py-16 border-t border-slate-800/60">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-blue-400 font-semibold text-xs tracking-widest uppercase">Powerful Features</span>
            <h2 className="text-3xl font-bold mt-2 text-slate-100">Everything in One Place</h2>
            <p className="text-slate-400 mt-2 text-sm">Designed to simplify everyday academic administration and communication.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Academic Dashboard',
                desc: 'Get an instant overview of system status, active metrics, and critical alerts.',
                icon: LayoutDashboard,
              },
              {
                title: 'People Management',
                desc: 'Streamline administration for students, teachers, HODs, and staff members.',
                icon: Users,
              },
              {
                title: 'Department Management',
                desc: 'Organize and structure departments, faculties, and subject divisions.',
                icon: Building2,
              },
              {
                title: 'Course Management',
                desc: 'Easily design, update, and monitor academic curricula and course schedules.',
                icon: BookOpen,
              },
              {
                title: 'Instant Notices',
                desc: 'Broadcast targeted announcements and updates directly to specific roles.',
                icon: Bell,
              },
              {
                title: 'Centralized Control',
                desc: 'Role-based authorization and complete administrative security across the platform.',
                icon: ShieldCheck,
              },
            ].map((feat, idx) => (
              <div 
                key={idx} 
                className="p-6 rounded-2xl bg-slate-900/30 border border-slate-800/80 hover:bg-slate-900/60 hover:border-blue-500/30 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center mb-4">
                  <feat.icon className="w-5 h-5" />
                </div>
                <h3 className="text-base font-semibold text-slate-200 mb-2">{feat.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{feat.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* --- BOTTOM CTA SECTION --- */}
      <section
        id="about"
        className="px-6 py-24 sm:px-10 lg:px-20"
      >
          <div className="rounded-3xl bg-gradient-to-r from-blue-950/40 via-indigo-950/40 to-slate-900/40 border border-blue-500/20 p-8 sm:p-12 text-center relative overflow-hidden">
            <div className="relative z-10 max-w-2xl mx-auto space-y-6">
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-100">
                Ready to simplify academic management?
              </h2>
              <p className="text-slate-400 text-base">
                Bring your entire institution together with Virtual CR.
              </p>
              <div>
                <Link 
                  href="/login" 
                  className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 font-semibold text-white transition-all shadow-lg shadow-blue-600/25"
                >
                  Get Started
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* --- FOOTER --- */}
        <footer 
        id="contact"
        className="py-8 border-t border-slate-800/60 text-center sm:flex sm:justify-between sm:text-left text-xs text-slate-500">
          <div>
            <p className="font-semibold text-slate-300 text-sm">Virtual <span className="text-blue-400">CR</span></p>
            <p className="mt-1">Smart academic management for modern institutions.</p>
          </div>
          <p className="mt-4 sm:mt-0">© {new Date().getFullYear()} Virtual CR. All rights reserved.</p>
        </footer>

      </div>
    </div>
  );
}
