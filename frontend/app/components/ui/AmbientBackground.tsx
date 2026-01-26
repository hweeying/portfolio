'use client';

import React from 'react';

export const AmbientBackground = () => {
  return (
    <div className="fixed inset-0 -z-50 h-full w-full overflow-hidden bg-background-base">
      {/* Layer 1: Base Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,#0a0a0f_0%,#050506_50%,#020203_100%)]" />

      {/* Layer 2: Animated Blobs */}
      <div className="absolute top-[-10%] left-[50%] h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-accent/20 blur-[120px] animate-blob-float" />
      <div className="absolute top-[20%] left-[10%] h-[400px] w-[400px] rounded-full bg-purple-500/10 blur-[100px] animate-blob-float [animation-delay:2s]" />
      <div className="absolute top-[10%] right-[10%] h-[300px] w-[600px] rounded-full bg-blue-500/10 blur-[100px] animate-blob-float [animation-delay:4s]" />

      {/* Layer 3: Noise Texture */}
      <div className="absolute inset-0 bg-noise opacity-[0.03] mix-blend-overlay" />
      
      {/* Layer 4: Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_100%)]" />
    </div>
  );
};