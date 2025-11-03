import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';
import { Badge } from '../ui/badge';
import { ArrowLeft, Calendar, Clock, MapPin, CheckCircle, XCircle } from 'lucide-react';

interface AttendanceRecord {
  id: string;
  date: string;
  time: string;
  status: 'present' | 'absent' | 'failed';
  location: string;
}

interface AttendanceHistoryProps {
  onBack: () => void;
  studentName: string;
}

export function AttendanceHistory({ onBack, studentName }: AttendanceHistoryProps) {
  // Mock data
  const attendanceRecords: AttendanceRecord[] = [
    {
      id: '1',
      date: '27 Oktober 2024',
      time: '07:15 WIB',
      status: 'present',
      location: 'Kampus UNJ - Gedung A'
    },
    {
      id: '2',
      date: '20 Oktober 2024',
      time: '07:20 WIB',
      status: 'present',
      location: 'Kampus UNJ - Gedung A'
    },
    {
      id: '3',
      date: '13 Oktober 2024',
      time: '07:45 WIB',
      status: 'failed',
      location: 'Di luar radius'
    },
    {
      id: '4',
      date: '6 Oktober 2024',
      time: '07:10 WIB',
      status: 'present',
      location: 'Kampus UNJ - Gedung A'
    },
    {
      id: '5',
      date: '29 September 2024',
      time: '-',
      status: 'absent',
      location: '-'
    },
    {
      id: '6',
      date: '22 September 2024',
      time: '07:25 WIB',
      status: 'present',
      location: 'Kampus UNJ - Gedung A'
    },
  ];

  const getStatusBadge = (status: AttendanceRecord['status']) => {
    switch (status) {
      case 'present':
        return (
          <Badge className="bg-green-600 hover:bg-green-700">
            <CheckCircle className="w-3 h-3 mr-1" />
            Hadir
          </Badge>
        );
      case 'failed':
        return (
          <Badge variant="destructive">
            <XCircle className="w-3 h-3 mr-1" />
            Gagal
          </Badge>
        );
      case 'absent':
        return (
          <Badge variant="secondary">
            <XCircle className="w-3 h-3 mr-1" />
            Tidak Hadir
          </Badge>
        );
    }
  };

  const presentCount = attendanceRecords.filter(r => r.status === 'present').length;
  const totalSessions = attendanceRecords.length;
  const attendanceRate = ((presentCount / totalSessions) * 100).toFixed(0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-amber-100">
      {/* Header */}
      <div className="bg-gradient-to-r from-amber-900 to-amber-800 text-white p-6 sticky top-0 z-10 shadow-lg">
        <div className="flex items-center mb-4">
          <Button
            variant="ghost"
            size="sm"
            onClick={onBack}
            className="text-white hover:bg-white/20 mr-3"
          >
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <div>
            <h2>Riwayat Kehadiran</h2>
            <p className="text-amber-200 text-sm">{studentName}</p>
          </div>
        </div>

        {/* Stats Card */}
        <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
          <CardContent className="pt-6">
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <p className="text-2xl">{presentCount}</p>
                <p className="text-xs text-amber-200 mt-1">Hadir</p>
              </div>
              <div>
                <p className="text-2xl">{totalSessions}</p>
                <p className="text-xs text-amber-200 mt-1">Total Sesi</p>
              </div>
              <div>
                <p className="text-2xl">{attendanceRate}%</p>
                <p className="text-xs text-amber-200 mt-1">Kehadiran</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Attendance List */}
      <div className="p-6 space-y-3">
        {attendanceRecords.map((record) => (
          <Card key={record.id} className="border-amber-200 shadow-md hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <div className="flex justify-between items-start mb-3">
                <div className="flex items-start space-x-3">
                  <div className={`p-2 rounded-full ${
                    record.status === 'present' 
                      ? 'bg-green-100' 
                      : record.status === 'failed' 
                      ? 'bg-red-100' 
                      : 'bg-gray-100'
                  }`}>
                    <Calendar className={`w-5 h-5 ${
                      record.status === 'present' 
                        ? 'text-green-700' 
                        : record.status === 'failed' 
                        ? 'text-red-700' 
                        : 'text-gray-700'
                    }`} />
                  </div>
                  <div>
                    <p className="text-amber-900">{record.date}</p>
                    <div className="flex items-center mt-1 text-sm text-amber-700">
                      <Clock className="w-3 h-3 mr-1" />
                      {record.time}
                    </div>
                  </div>
                </div>
                {getStatusBadge(record.status)}
              </div>
              <div className="flex items-center text-sm text-amber-700 bg-amber-50 p-2 rounded-lg">
                <MapPin className="w-4 h-4 mr-2" />
                {record.location}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
