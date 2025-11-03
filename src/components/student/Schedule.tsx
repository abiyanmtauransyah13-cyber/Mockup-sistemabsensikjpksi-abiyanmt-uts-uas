import { useState } from 'react';
import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';
import { Badge } from '../ui/badge';
import { ArrowLeft, Calendar, Clock, MapPin, User, ChevronLeft, ChevronRight, BookOpen } from 'lucide-react';

interface ScheduleProps {
  onBack: () => void;
}

interface KJPSession {
  id: string;
  date: string;
  dayName: string;
  time: string;
  topic: string;
  speaker: string;
  location: string;
  status: 'upcoming' | 'today' | 'completed';
  attended?: boolean;
}

export function Schedule({ onBack }: ScheduleProps) {
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const sessions: KJPSession[] = [
    {
      id: '1',
      date: '2024-11-01',
      dayName: 'Jumat',
      time: '07:00 - 09:00',
      topic: 'Islam dan Teknologi Modern',
      speaker: 'Dr. Ahmad Hidayat, M.Si',
      location: 'Masjid Kampus UNJ',
      status: 'completed',
      attended: true
    },
    {
      id: '2',
      date: '2024-11-08',
      dayName: 'Jumat',
      time: '07:00 - 09:00',
      topic: 'Memahami Al-Quran dengan Konteks Kekinian',
      speaker: 'Ustadz Mahmud Rahman, Lc',
      location: 'Masjid Kampus UNJ',
      status: 'completed',
      attended: true
    },
    {
      id: '3',
      date: '2024-11-15',
      dayName: 'Jumat',
      time: '07:00 - 09:00',
      topic: 'Membangun Kepribadian Islami di Kampus',
      speaker: 'Dr. Siti Aminah, M.Pd.I',
      location: 'Masjid Kampus UNJ',
      status: 'completed',
      attended: false
    },
    {
      id: '4',
      date: '2024-11-22',
      dayName: 'Jumat',
      time: '07:00 - 09:00',
      topic: 'Adab dan Etika dalam Menuntut Ilmu',
      speaker: 'Dr. Ahmad Hidayat, M.Si',
      location: 'Masjid Kampus UNJ',
      status: 'completed',
      attended: true
    },
    {
      id: '5',
      date: '2024-11-29',
      dayName: 'Jumat',
      time: '07:00 - 09:00',
      topic: 'Mengelola Waktu dengan Prinsip Islam',
      speaker: 'Ustadz Mahmud Rahman, Lc',
      location: 'Masjid Kampus UNJ',
      status: 'today'
    },
    {
      id: '6',
      date: '2024-12-06',
      dayName: 'Jumat',
      time: '07:00 - 09:00',
      topic: 'Berkontribusi untuk Umat',
      speaker: 'Dr. Siti Aminah, M.Pd.I',
      location: 'Masjid Kampus UNJ',
      status: 'upcoming'
    },
    {
      id: '7',
      date: '2024-12-13',
      dayName: 'Jumat',
      time: '07:00 - 09:00',
      topic: 'Menjaga Kesehatan Mental Secara Islami',
      speaker: 'Dr. Ahmad Hidayat, M.Si',
      location: 'Masjid Kampus UNJ',
      status: 'upcoming'
    },
    {
      id: '8',
      date: '2024-12-20',
      dayName: 'Jumat',
      time: '07:00 - 09:00',
      topic: 'Persiapan Menghadapi Dunia Kerja',
      speaker: 'Ustadz Mahmud Rahman, Lc',
      location: 'Masjid Kampus UNJ',
      status: 'upcoming'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'today':
        return 'bg-green-600';
      case 'upcoming':
        return 'bg-amber-600';
      case 'completed':
        return 'bg-slate-400';
      default:
        return 'bg-slate-400';
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case 'today':
        return 'Hari Ini';
      case 'upcoming':
        return 'Akan Datang';
      case 'completed':
        return 'Selesai';
      default:
        return 'Unknown';
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' });
  };

  const upcomingSessions = sessions.filter(s => s.status === 'upcoming' || s.status === 'today');
  const completedSessions = sessions.filter(s => s.status === 'completed');

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-amber-100">
      {/* Header */}
      <div className="bg-gradient-to-r from-amber-900 to-amber-800 text-white p-6 sticky top-0 z-10 shadow-lg">
        <div className="flex items-center">
          <Button
            variant="ghost"
            size="sm"
            onClick={onBack}
            className="text-white hover:bg-white/20 mr-3"
          >
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <div>
            <h2>Jadwal KJP</h2>
            <p className="text-amber-200 text-sm">Semester Ganjil 2024/2025</p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 space-y-6">
        {/* Today's Session Highlight */}
        {sessions.find(s => s.status === 'today') && (
          <Card className="border-green-400 bg-gradient-to-br from-green-50 to-white shadow-xl">
            <div className="bg-gradient-to-r from-green-600 to-green-500 p-4 text-white">
              <div className="flex items-center">
                <Calendar className="w-6 h-6 mr-2" />
                <h3>Kajian Hari Ini</h3>
              </div>
            </div>
            <CardContent className="pt-6">
              {sessions
                .filter(s => s.status === 'today')
                .map((session) => (
                  <div key={session.id}>
                    <div className="flex items-center text-sm text-green-700 mb-3">
                      <Clock className="w-4 h-4 mr-2" />
                      {session.dayName}, {formatDate(session.date)}
                    </div>
                    <h4 className="text-green-900 mb-3">{session.topic}</h4>
                    <div className="space-y-2">
                      <div className="flex items-center text-sm text-green-700">
                        <User className="w-4 h-4 mr-2" />
                        {session.speaker}
                      </div>
                      <div className="flex items-center text-sm text-green-700">
                        <Clock className="w-4 h-4 mr-2" />
                        {session.time}
                      </div>
                      <div className="flex items-center text-sm text-green-700">
                        <MapPin className="w-4 h-4 mr-2" />
                        {session.location}
                      </div>
                    </div>
                    <div className="mt-4 p-3 bg-green-100 rounded-lg border border-green-200">
                      <p className="text-xs text-green-800">
                        💡 Jangan lupa scan QR code saat datang untuk mencatat kehadiran Anda!
                      </p>
                    </div>
                  </div>
                ))}
            </CardContent>
          </Card>
        )}

        {/* Upcoming Sessions */}
        {upcomingSessions.length > 0 && (
          <div>
            <h3 className="text-amber-900 mb-3 flex items-center">
              <Calendar className="w-5 h-5 mr-2" />
              Jadwal Mendatang
            </h3>
            <div className="space-y-3">
              {upcomingSessions.map((session) => (
                <Card key={session.id} className="border-amber-200 shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="pt-6">
                    <div className="flex justify-between items-start mb-3">
                      <Badge className={`${getStatusColor(session.status)}`}>
                        {getStatusLabel(session.status)}
                      </Badge>
                      <p className="text-xs text-amber-600">{formatDate(session.date)}</p>
                    </div>
                    <h4 className="text-amber-900 mb-3">{session.topic}</h4>
                    <div className="space-y-2">
                      <div className="flex items-center text-sm text-amber-700">
                        <User className="w-4 h-4 mr-2 flex-shrink-0" />
                        <span>{session.speaker}</span>
                      </div>
                      <div className="flex items-center text-sm text-amber-700">
                        <Clock className="w-4 h-4 mr-2 flex-shrink-0" />
                        <span>{session.time}</span>
                      </div>
                      <div className="flex items-center text-sm text-amber-700">
                        <MapPin className="w-4 h-4 mr-2 flex-shrink-0" />
                        <span>{session.location}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Completed Sessions */}
        {completedSessions.length > 0 && (
          <div>
            <h3 className="text-amber-900 mb-3 flex items-center">
              <BookOpen className="w-5 h-5 mr-2" />
              Kajian Sebelumnya
            </h3>
            <div className="space-y-3">
              {completedSessions.map((session) => (
                <Card key={session.id} className="border-slate-200 shadow-md bg-slate-50">
                  <CardContent className="pt-6">
                    <div className="flex justify-between items-start mb-3">
                      <div className="flex items-center gap-2">
                        <Badge className="bg-slate-400">
                          {getStatusLabel(session.status)}
                        </Badge>
                        {session.attended !== undefined && (
                          <Badge variant="outline" className={session.attended ? 'border-green-500 text-green-700' : 'border-red-500 text-red-700'}>
                            {session.attended ? '✓ Hadir' : '✗ Tidak Hadir'}
                          </Badge>
                        )}
                      </div>
                      <p className="text-xs text-slate-500">{formatDate(session.date)}</p>
                    </div>
                    <h4 className="text-slate-700 mb-3">{session.topic}</h4>
                    <div className="space-y-2">
                      <div className="flex items-center text-sm text-slate-600">
                        <User className="w-4 h-4 mr-2 flex-shrink-0" />
                        <span>{session.speaker}</span>
                      </div>
                      <div className="flex items-center text-sm text-slate-600">
                        <Clock className="w-4 h-4 mr-2 flex-shrink-0" />
                        <span>{session.time}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Info Card */}
        <Card className="border-amber-200 bg-amber-50">
          <CardContent className="pt-6">
            <div className="flex items-start">
              <div className="bg-amber-200 p-2 rounded-full mr-3">
                <Calendar className="w-5 h-5 text-amber-900" />
              </div>
              <div>
                <p className="text-sm text-amber-900">Informasi Jadwal</p>
                <p className="text-xs text-amber-700 mt-1">
                  Jadwal KJP dilaksanakan setiap hari Jumat pukul 07:00 - 09:00 WIB di Masjid Kampus UNJ
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
