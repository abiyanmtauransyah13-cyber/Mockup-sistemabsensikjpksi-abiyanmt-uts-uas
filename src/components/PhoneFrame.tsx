import { ReactNode } from 'react';

interface PhoneFrameProps {
  children: ReactNode;
  variant?: 'iphone' | 'android';
}

export function PhoneFrame({ children, variant = 'iphone' }: PhoneFrameProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center p-4">
      {/* iPhone Frame */}
      {variant === 'iphone' && (
        <div className="relative">
          {/* Phone Body */}
          <div className="relative w-[375px] h-[812px] bg-black rounded-[50px] p-3 shadow-2xl ring-1 ring-white/10">
            {/* Screen Bezel */}
            <div className="relative w-full h-full bg-white rounded-[42px] overflow-hidden">
              {/* Notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-7 bg-black rounded-b-3xl z-50 flex items-center justify-center">
                <div className="w-16 h-1.5 bg-slate-800 rounded-full mt-2"></div>
              </div>
              
              {/* Content */}
              <div className="w-full h-full overflow-y-auto scrollbar-hide">
                {children}
              </div>

              {/* Home Indicator */}
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-slate-900/30 rounded-full z-50"></div>
            </div>

            {/* Power Button */}
            <div className="absolute right-0 top-32 w-1 h-16 bg-slate-700 rounded-l"></div>
            
            {/* Volume Buttons */}
            <div className="absolute left-0 top-28 w-1 h-10 bg-slate-700 rounded-r"></div>
            <div className="absolute left-0 top-40 w-1 h-10 bg-slate-700 rounded-r"></div>
          </div>
        </div>
      )}

      {/* Android Frame */}
      {variant === 'android' && (
        <div className="relative">
          {/* Phone Body */}
          <div className="relative w-[375px] h-[812px] bg-slate-900 rounded-[45px] p-2 shadow-2xl ring-1 ring-white/10">
            {/* Screen */}
            <div className="relative w-full h-full bg-white rounded-[38px] overflow-hidden">
              {/* Status Bar Camera */}
              <div className="absolute top-4 left-1/2 -translate-x-1/2 w-8 h-8 z-50">
                <div className="w-full h-full rounded-full bg-black/10 backdrop-blur-sm flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-slate-700"></div>
                </div>
              </div>
              
              {/* Content */}
              <div className="w-full h-full overflow-y-auto scrollbar-hide">
                {children}
              </div>

              {/* Navigation Bar */}
              <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-black/5 to-transparent z-50 flex items-center justify-center gap-16">
                <div className="w-8 h-1 bg-slate-900/40 rounded-full"></div>
                <div className="w-8 h-8 border-2 border-slate-900/40 rounded-full"></div>
                <div className="w-8 h-8 border-2 border-slate-900/40 rounded-sm"></div>
              </div>
            </div>

            {/* Power Button */}
            <div className="absolute right-0 top-32 w-1 h-12 bg-slate-700 rounded-l"></div>
            
            {/* Volume Buttons */}
            <div className="absolute left-0 top-28 w-1 h-8 bg-slate-700 rounded-r"></div>
            <div className="absolute left-0 top-40 w-1 h-8 bg-slate-700 rounded-r"></div>
          </div>
        </div>
      )}

      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}
