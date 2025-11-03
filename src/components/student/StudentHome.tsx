import { useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { QrCode, History, User, MapPin, Clock, CheckCircle, XCircle, Award, UserRound, Trophy, Calendar, Megaphone, ChevronRight } from 'lucide-react';

interface StudentHomeProps {
  studentName: string;
  studentNim: string;
  lastAttendance: {
    status: 'present' | 'absent' | 'failed' | null;
    date?: string;
    time?: string;
  };
  onScanQR: () => void;
  onViewHistory: () => void;
  onViewCertificate: () => void;
  onViewSpeakers: () => void;
  onViewLeaderboard: () => void;
  onViewSchedule: () => void;
  onViewAnnouncements: () => void;
  onLogout: () => void;
}

export function StudentHome({ 
  studentName, 
  studentNim, 
  lastAttendance, 
  onScanQR, 
  onViewHistory,
  onViewCertificate,
  onViewSpeakers,
  onViewLeaderboard,
  onViewSchedule,
  onViewAnnouncements,
  onLogout 
}: StudentHomeProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const getStatusBadge = () => {
    if (!lastAttendance.status) {
      return <Badge variant="outline" className="border-amber-400 text-amber-700">Belum Absen</Badge>;
    }
    if (lastAttendance.status === 'present') {
      return <Badge className="bg-green-600 hover:bg-green-700"><CheckCircle className="w-3 h-3 mr-1" />Hadir</Badge>;
    }
    if (lastAttendance.status === 'failed') {
      return <Badge variant="destructive"><XCircle className="w-3 h-3 mr-1" />Absen Gagal</Badge>;
    }
    return <Badge variant="secondary">Tidak Hadir</Badge>;
  };

  const menuItems = [
    {
      icon: <History className="w-6 h-6" />,
      title: 'Riwayat',
      description: 'Lihat riwayat kehadiran',
      onClick: onViewHistory,
      gradient: 'from-blue-600 to-blue-700'
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: 'Sertifikat',
      description: 'Lihat sertifikat Anda',
      onClick: onViewCertificate,
      gradient: 'from-amber-600 to-amber-700'
    },
    {
      icon: <UserRound className="w-6 h-6" />,
      title: 'Penceramah',
      description: 'Profil penceramah KJP',
      onClick: onViewSpeakers,
      gradient: 'from-purple-600 to-purple-700'
    },
    {
      icon: <Trophy className="w-6 h-6" />,
      title: 'Leaderboard',
      description: 'Peringkat kehadiran',
      onClick: onViewLeaderboard,
      gradient: 'from-yellow-600 to-yellow-700'
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      title: 'Jadwal',
      description: 'Jadwal kegiatan KJP',
      onClick: onViewSchedule,
      gradient: 'from-green-600 to-green-700'
    },
    {
      icon: <Megaphone className="w-6 h-6" />,
      title: 'Pengumuman',
      description: 'Info & pengumuman',
      onClick: onViewAnnouncements,
      gradient: 'from-red-600 to-red-700'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-amber-100">
      {/* Header */}
      <div className="bg-gradient-to-r from-amber-900 to-amber-800 text-white p-6 rounded-b-3xl shadow-lg">
        <div className="flex justify-between items-start mb-4">
          <div>
            <p className="text-amber-200 text-sm">Selamat Datang,</p>
            <h2 className="mt-1">{studentName}</h2>
            <p className="text-amber-200 text-sm mt-1">NIM: {studentNim}</p>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={onLogout}
            className="text-white hover:bg-white/20"
          >
            Logout
          </Button>
        </div>
        
        {/* Status Card */}
        <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-amber-100 text-sm">Status Kehadiran Terakhir</p>
                <div className="mt-2">{getStatusBadge()}</div>
                {lastAttendance.date && (
                  <div className="flex items-center mt-2 text-sm text-amber-200">
                    <Clock className="w-4 h-4 mr-1" />
                    {lastAttendance.date} - {lastAttendance.time}
                  </div>
                )}
              </div>
              <div className="bg-white/20 p-3 rounded-full">
                <User className="w-8 h-8" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Main Content */}
      <div className="p-6 space-y-4">
        {/* Scan QR Button */}
        <Button
          onClick={onScanQR}
          className="w-full h-32 bg-gradient-to-br from-amber-900 to-amber-800 hover:from-amber-800 hover:to-amber-700 shadow-xl"
        >
          <div className="flex flex-col items-center">
            <QrCode className="w-12 h-12 mb-2" />
            <span className="text-lg">Absen Sekarang</span>
            <span className="text-xs text-amber-200 mt-1">Scan QR Code KJP</span>
          </div>
        </Button>

        {/* Horizontal Scroll Menu */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-amber-900">Menu Utama</h3>
            <ChevronRight className="w-5 h-5 text-amber-700" />
          </div>
          <div 
            ref={scrollContainerRef}
            className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {menuItems.map((item, index) => (
              <Card
                key={index}
                className="min-w-[160px] border-2 border-amber-200 shadow-lg hover:shadow-xl transition-all cursor-pointer snap-start flex-shrink-0"
                onClick={item.onClick}
              >
                <CardContent className="p-4 flex flex-col items-center text-center h-full">
                  <div className={`bg-gradient-to-br ${item.gradient} text-white p-4 rounded-2xl mb-3 shadow-md`}>
                    {item.icon}
                  </div>
                  <h4 className="text-amber-900 mb-1">{item.title}</h4>
                  <p className="text-xs text-amber-700 line-clamp-2">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Quick Access Grid */}
        <div className="grid grid-cols-2 gap-4">
          <Card className="border-amber-200 shadow-md">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center text-amber-900 text-base">
                <MapPin className="w-5 h-5 mr-2" />
                Lokasi
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-amber-700">Masjid Kampus UNJ</p>
            </CardContent>
          </Card>

          <Card className="border-amber-200 shadow-md">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center text-amber-900 text-base">
                <Clock className="w-5 h-5 mr-2" />
                Waktu
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-amber-700">Jumat 07:00 WIB</p>
            </CardContent>
          </Card>
        </div>

        {/* Info Card */}
        <Card className="border-amber-200 bg-amber-50">
          <CardContent className="pt-6">
            <div className="flex items-start">
              <div className="bg-amber-200 p-2 rounded-full mr-3">
                <Clock className="w-5 h-5 text-amber-900" />
              </div>
              <div>
                <p className="text-sm text-amber-900">Waktu Kegiatan KJP</p>
                <p className="text-xs text-amber-700 mt-1">Setiap hari Jumat, 07:00 - 09:00 WIB</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
}
