import { useState } from 'react';
import { Toaster } from './components/ui/sonner';
import { PhoneFrame } from './components/PhoneFrame';
import { SplashScreen } from './components/student/SplashScreen';
import { StudentLogin } from './components/student/StudentLogin';
import { StudentHome } from './components/student/StudentHome';
import { QRScanner } from './components/student/QRScanner';
import { AttendanceHistory } from './components/student/AttendanceHistory';
import { Certificate } from './components/student/Certificate';
import { SpeakerProfile } from './components/student/SpeakerProfile';
import { Leaderboard } from './components/student/Leaderboard';
import { Schedule } from './components/student/Schedule';
import { Announcements } from './components/student/Announcements';
import { AdminLogin } from './components/admin/AdminLogin';
import { AdminDashboard } from './components/admin/AdminDashboard';
import { QRGenerator } from './components/admin/QRGenerator';
import { AttendanceData } from './components/admin/AttendanceData';
import { Button } from './components/ui/button';
import { Badge } from './components/ui/badge';
import { Smartphone } from 'lucide-react';

type StudentView = 'splash' | 'login' | 'home' | 'scanner' | 'history' | 'certificate' | 'speakers' | 'leaderboard' | 'schedule' | 'announcements';
type AdminView = 'login' | 'dashboard' | 'qr-generator' | 'attendance-data';
type AppMode = 'student' | 'admin';

interface LastAttendance {
  status: 'present' | 'absent' | 'failed' | null;
  date?: string;
  time?: string;
}

export default function App() {
  const [appMode, setAppMode] = useState<AppMode>('student');
  const [studentView, setStudentView] = useState<StudentView>('splash');
  const [adminView, setAdminView] = useState<AdminView>('login');
  const [studentData, setStudentData] = useState({ nim: '', name: '' });
  const [lastAttendance, setLastAttendance] = useState<LastAttendance>({
    status: null,
  });
  const [phoneVariant, setPhoneVariant] = useState<'iphone' | 'android'>('iphone');

  // Student Handlers
  const handleStudentLogin = (nim: string, name: string) => {
    setStudentData({ nim, name });
    setStudentView('home');
  };

  const handleScanSuccess = (result: { status: 'present' | 'failed'; message: string }) => {
    const now = new Date();
    setLastAttendance({
      status: result.status,
      date: now.toLocaleDateString('id-ID'),
      time: now.toLocaleTimeString('id-ID'),
    });
    setStudentView('home');
  };

  const handleStudentLogout = () => {
    setStudentData({ nim: '', name: '' });
    setLastAttendance({ status: null });
    setStudentView('login');
  };

  // Admin Handlers
  const handleAdminLogin = () => {
    setAdminView('dashboard');
  };

  const handleAdminLogout = () => {
    setAdminView('login');
  };

  // Mode Switch
  const switchToAdmin = () => {
    setAppMode('admin');
    setAdminView('login');
  };

  const switchToStudent = () => {
    setAppMode('student');
    setStudentView('login');
  };

  return (
    <div className="min-h-screen">
      {appMode === 'student' ? (
        <PhoneFrame variant={phoneVariant}>
          {/* Phone Variant Selector */}
          <div className="absolute top-2 right-2 z-[60] flex gap-1">
            <Button
              size="sm"
              variant={phoneVariant === 'iphone' ? 'default' : 'ghost'}
              onClick={() => setPhoneVariant('iphone')}
              className={phoneVariant === 'iphone' ? 'h-6 px-2 text-xs bg-amber-900 hover:bg-amber-800' : 'h-6 px-2 text-xs text-slate-600 hover:text-slate-900 hover:bg-slate-100'}
            >
              iPhone
            </Button>
            <Button
              size="sm"
              variant={phoneVariant === 'android' ? 'default' : 'ghost'}
              onClick={() => setPhoneVariant('android')}
              className={phoneVariant === 'android' ? 'h-6 px-2 text-xs bg-amber-900 hover:bg-amber-800' : 'h-6 px-2 text-xs text-slate-600 hover:text-slate-900 hover:bg-slate-100'}
            >
              Android
            </Button>
          </div>

          {studentView === 'splash' && (
            <SplashScreen onFinish={() => setStudentView('login')} />
          )}
          
          {studentView === 'login' && (
            <div className="relative">
              <StudentLogin onLogin={handleStudentLogin} />
              <div className="absolute bottom-6 right-6">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={switchToAdmin}
                  className="border-amber-300 text-amber-900 hover:bg-amber-100 shadow-lg"
                >
                  Login Admin
                </Button>
              </div>
            </div>
          )}
          
          {studentView === 'home' && (
            <StudentHome
              studentName={studentData.name}
              studentNim={studentData.nim}
              lastAttendance={lastAttendance}
              onScanQR={() => setStudentView('scanner')}
              onViewHistory={() => setStudentView('history')}
              onViewCertificate={() => setStudentView('certificate')}
              onViewSpeakers={() => setStudentView('speakers')}
              onViewLeaderboard={() => setStudentView('leaderboard')}
              onViewSchedule={() => setStudentView('schedule')}
              onViewAnnouncements={() => setStudentView('announcements')}
              onLogout={handleStudentLogout}
            />
          )}
          
          {studentView === 'scanner' && (
            <QRScanner
              onBack={() => setStudentView('home')}
              onScanSuccess={handleScanSuccess}
            />
          )}
          
          {studentView === 'history' && (
            <AttendanceHistory
              onBack={() => setStudentView('home')}
              studentName={studentData.name}
            />
          )}

          {studentView === 'certificate' && (
            <Certificate
              onBack={() => setStudentView('home')}
              studentName={studentData.name}
              studentNim={studentData.nim}
            />
          )}

          {studentView === 'speakers' && (
            <SpeakerProfile
              onBack={() => setStudentView('home')}
            />
          )}

          {studentView === 'leaderboard' && (
            <Leaderboard
              onBack={() => setStudentView('home')}
              currentStudentNim={studentData.nim}
            />
          )}

          {studentView === 'schedule' && (
            <Schedule
              onBack={() => setStudentView('home')}
            />
          )}

          {studentView === 'announcements' && (
            <Announcements
              onBack={() => setStudentView('home')}
            />
          )}
        </PhoneFrame>
      ) : (
        <>
          {/* Admin views without phone frame */}
          <div className="relative">
            <div className="fixed top-4 left-4 z-50">
              <Button
                size="sm"
                variant="outline"
                onClick={switchToStudent}
                className="border-amber-300 text-amber-900 hover:bg-amber-100 shadow-lg bg-white/90 backdrop-blur-sm"
              >
                <Smartphone className="w-4 h-4 mr-2" />
                Kembali ke Tampilan HP
              </Button>
            </div>
          </div>

          {adminView === 'login' && (
            <AdminLogin 
              onLogin={handleAdminLogin}
              onBackToStudent={switchToStudent}
            />
          )}
          
          {adminView === 'dashboard' && (
            <AdminDashboard
              onGenerateQR={() => setAdminView('qr-generator')}
              onViewData={() => setAdminView('attendance-data')}
              onLogout={handleAdminLogout}
            />
          )}
          
          {adminView === 'qr-generator' && (
            <QRGenerator onBack={() => setAdminView('dashboard')} />
          )}
          
          {adminView === 'attendance-data' && (
            <AttendanceData onBack={() => setAdminView('dashboard')} />
          )}
        </>
      )}

      <Toaster />
    </div>
  );
}
