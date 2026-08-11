'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { 
  GraduationCap, 
  Users, 
  Building2, 
  School 
} from 'lucide-react';

export default function HeroVisual() {
  const [transform, setTransform] = useState('rotateX(0deg) rotateY(0deg)');

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    
    const rotateX = (-y / rect.height) * 12;
    const rotateY = (x / rect.width) * 12;
    
    setTransform(`rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg)`);
  };

  const handleMouseLeave = () => {
    setTransform('rotateX(0deg) rotateY(0deg)');
  };

  return (
    <div className="lg:col-span-5 relative flex min-h-[520px] items-center justify-center p-4">
      
      {/* Orbital Ring Guide Line */}
      <div className="absolute left-1/2 top-1/2 h-[380px] w-[380px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-blue-500/20 bg-blue-500/5 pointer-events-none z-0" />

      {/* 3D Interactive Stage */}
      <div 
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="relative h-[500px] w-full max-w-[540px] [perspective:1000px] cursor-pointer"
      >
        <div 
          style={{ transform }}
          className="relative h-full w-full transition-transform duration-200 ease-out [transform-style:preserve-3d]"
        >
          
          {/* CENTER PLATFORM CORE (Seamless logooo.png with custom glow) */}
{/* CENTER PLATFORM CORE (Curved Edges + Seamless Glow) */}
<div className="absolute left-1/2 top-1/2 z-30 -translate-x-1/2 -translate-y-1/2 [transform:translateZ(40px)]">
  <div className="group relative flex h-60 w-60 items-center justify-center transition-all duration-300">
    
    {/* Permanent Ambient Glow Layer */}
    <div className="absolute inset-2 bg-blue-500/30 blur-2xl pointer-events-none animate-pulse rounded-3xl" />

    {/* Image Container with Curved Edges */}
    <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-[0_0_35px_rgba(59,130,246,0.35)] transition-all duration-300 group-hover:scale-105 group-hover:shadow-[0_0_50px_rgba(59,130,246,0.55)]">
      <Image
        src="/images/logooo.png"
        alt="Virtual CR"
        fill
        className="object-cover"
        priority
      />
    </div>

  </div>
</div>

          {/* ORBIT CONTAINER (Pauses on Hover) */}
          <div className="absolute left-1/2 top-1/2 h-0 w-0 z-20 group/orbit">
            
            {/* 1. STUDENTS CARD */}
            <div className="absolute -translate-x-1/2 -translate-y-1/2 animate-[orbitOne_24s_linear_infinite] group-hover/orbit:[animation-play-state:paused]">
              <div className="group flex items-center gap-3 rounded-2xl border border-slate-800 bg-[#0d1527] px-4 py-3 shadow-lg transition-all duration-300 hover:-translate-y-3 hover:scale-105 hover:border-blue-400/80 hover:bg-slate-900 hover:shadow-[0_0_30px_rgba(59,130,246,0.4)]">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/10 border border-blue-500/20 transition-all duration-300 group-hover:bg-blue-500/20 group-hover:border-blue-400">
                  <GraduationCap className="h-5 w-5 text-blue-400" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-100 group-hover:text-white whitespace-nowrap">Students</p>
                  <p className="text-[11px] text-slate-400 whitespace-nowrap">Academic portal</p>
                </div>
              </div>
            </div>

            {/* 2. TEACHERS CARD */}
            <div className="absolute -translate-x-1/2 -translate-y-1/2 animate-[orbitTwo_24s_linear_infinite] group-hover/orbit:[animation-play-state:paused]">
              <div className="group flex items-center gap-3 rounded-2xl border border-slate-800 bg-[#0d1527] px-4 py-3 shadow-lg transition-all duration-300 hover:-translate-y-3 hover:scale-105 hover:border-indigo-400/80 hover:bg-slate-900 hover:shadow-[0_0_30px_rgba(99,102,241,0.4)]">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-500/10 border border-indigo-500/20 transition-all duration-300 group-hover:bg-indigo-500/20 group-hover:border-indigo-400">
                  <Users className="h-5 w-5 text-indigo-400" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-100 group-hover:text-white whitespace-nowrap">Teachers</p>
                  <p className="text-[11px] text-slate-400 whitespace-nowrap">Class management</p>
                </div>
              </div>
            </div>

            {/* 3. HODs CARD */}
            <div className="absolute -translate-x-1/2 -translate-y-1/2 animate-[orbitThree_24s_linear_infinite] group-hover/orbit:[animation-play-state:paused]">
              <div className="group flex items-center gap-3 rounded-2xl border border-slate-800 bg-[#0d1527] px-4 py-3 shadow-lg transition-all duration-300 hover:-translate-y-3 hover:scale-105 hover:border-purple-400/80 hover:bg-slate-900 hover:shadow-[0_0_30px_rgba(168,85,247,0.4)]">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-500/10 border border-purple-500/20 transition-all duration-300 group-hover:bg-purple-500/20 group-hover:border-purple-400">
                  <Building2 className="h-5 w-5 text-purple-400" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-100 group-hover:text-white whitespace-nowrap">HODs</p>
                  <p className="text-[11px] text-slate-400 whitespace-nowrap">Department control</p>
                </div>
              </div>
            </div>

            {/* 4. INSTITUTIONS CARD */}
            <div className="absolute -translate-x-1/2 -translate-y-1/2 animate-[orbitFour_24s_linear_infinite] group-hover/orbit:[animation-play-state:paused]">
              <div className="group flex items-center gap-3 rounded-2xl border border-slate-800 bg-[#0d1527] px-4 py-3 shadow-lg transition-all duration-300 hover:-translate-y-3 hover:scale-105 hover:border-emerald-400/80 hover:bg-slate-900 hover:shadow-[0_0_30px_rgba(16,185,129,0.4)]">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10 border border-emerald-500/20 transition-all duration-300 group-hover:bg-emerald-500/20 group-hover:border-emerald-400">
                  <School className="h-5 w-5 text-emerald-400" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-100 group-hover:text-white whitespace-nowrap">Institutions</p>
                  <p className="text-[11px] text-slate-400 whitespace-nowrap">Centralized control</p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}