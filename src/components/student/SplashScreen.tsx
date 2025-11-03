import { useEffect } from 'react';
import { GraduationCap } from 'lucide-react';

interface SplashScreenProps {
  onFinish: () => void;
}

export function SplashScreen({ onFinish }: SplashScreenProps) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish();
    }, 2500);
    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-900 via-amber-800 to-amber-950 flex flex-col items-center justify-center p-6">
      <div className="animate-bounce">
        <div className="bg-white/10 backdrop-blur-sm p-8 rounded-full shadow-2xl">
          <GraduationCap className="w-24 h-24 text-white" />
        </div>
      </div>
      <h1 className="mt-8 text-white text-center">KSI Smart Attendance</h1>
      <p className="mt-2 text-amber-200 text-center">For KJP - Jumat Pagi</p>
      <div className="mt-12 flex space-x-2">
        <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
        <div className="w-2 h-2 bg-white rounded-full animate-pulse delay-75"></div>
        <div className="w-2 h-2 bg-white rounded-full animate-pulse delay-150"></div>
      </div>
    </div>
  );
}
