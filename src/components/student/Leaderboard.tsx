import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';
import { Badge } from '../ui/badge';
import { ArrowLeft, Trophy, Award, Medal, TrendingUp, User } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

interface LeaderboardProps {
  onBack: () => void;
  currentStudentNim: string;
}

interface Student {
  rank: number;
  nim: string;
  name: string;
  attendance: number;
  totalSessions: number;
  percentage: number;
  avatar?: string;
}

export function Leaderboard({ onBack, currentStudentNim }: LeaderboardProps) {
  const students: Student[] = [
    { rank: 1, nim: '1234567890', name: 'Ahmad Rizki Pratama', attendance: 12, totalSessions: 12, percentage: 100 },
    { rank: 2, nim: '1234567891', name: 'Siti Nurhaliza', attendance: 11, totalSessions: 12, percentage: 91.7 },
    { rank: 3, nim: '1234567892', name: 'Muhammad Fadhil', attendance: 11, totalSessions: 12, percentage: 91.7 },
    { rank: 4, nim: '1234567893', name: 'Dewi Kartika', attendance: 10, totalSessions: 12, percentage: 83.3 },
    { rank: 5, nim: '1234567894', name: 'Budi Santoso', attendance: 10, totalSessions: 12, percentage: 83.3 },
    { rank: 6, nim: '1234567895', name: 'Rina Wulandari', attendance: 9, totalSessions: 12, percentage: 75 },
    { rank: 7, nim: '1234567896', name: 'Eko Prasetyo', attendance: 9, totalSessions: 12, percentage: 75 },
    { rank: 8, nim: '1234567897', name: 'Fitri Handayani', attendance: 8, totalSessions: 12, percentage: 66.7 },
    { rank: 9, nim: '1234567898', name: 'Doni Setiawan', attendance: 8, totalSessions: 12, percentage: 66.7 },
    { rank: 10, nim: '1234567899', name: 'Maya Sari', attendance: 7, totalSessions: 12, percentage: 58.3 },
  ];

  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1:
        return <Trophy className="w-6 h-6 text-yellow-500" />;
      case 2:
        return <Award className="w-6 h-6 text-slate-400" />;
      case 3:
        return <Medal className="w-6 h-6 text-amber-700" />;
      default:
        return null;
    }
  };

  const getRankBadgeColor = (rank: number) => {
    if (rank === 1) return 'bg-gradient-to-r from-yellow-500 to-yellow-600';
    if (rank === 2) return 'bg-gradient-to-r from-slate-400 to-slate-500';
    if (rank === 3) return 'bg-gradient-to-r from-amber-700 to-amber-800';
    return 'bg-gradient-to-r from-amber-900 to-amber-800';
  };

  const topThree = students.slice(0, 3);
  const others = students.slice(3);
  const currentStudent = students.find(s => s.nim === currentStudentNim);

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
            <h2>Leaderboard Kehadiran</h2>
            <p className="text-amber-200 text-sm">Peringkat mahasiswa KSI</p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 space-y-6">
        {/* Top 3 Podium */}
        <Card className="border-amber-300 shadow-xl bg-gradient-to-br from-white to-amber-50 overflow-hidden">
          <div className="bg-gradient-to-r from-amber-900 to-amber-800 p-4 text-center text-white">
            <Trophy className="w-8 h-8 mx-auto mb-2" />
            <h3 className="text-lg">Top 3 Terbaik</h3>
          </div>
          <CardContent className="pt-6 pb-6">
            <div className="flex items-end justify-center gap-4">
              {/* Rank 2 */}
              {topThree[1] && (
                <div className="flex flex-col items-center flex-1">
                  <div className="relative">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-slate-400 to-slate-500 flex items-center justify-center text-white mb-2 border-4 border-white shadow-lg">
                      <User className="w-8 h-8" />
                    </div>
                    <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-slate-400 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs">
                      2
                    </div>
                  </div>
                  <div className="bg-gradient-to-br from-slate-400 to-slate-500 text-white p-3 rounded-lg w-full text-center mt-4 h-24 flex flex-col justify-center shadow-lg">
                    <p className="text-xs truncate">{topThree[1].name}</p>
                    <p className="text-lg mt-1">{topThree[1].percentage}%</p>
                  </div>
                </div>
              )}

              {/* Rank 1 */}
              {topThree[0] && (
                <div className="flex flex-col items-center flex-1 -mt-4">
                  <Trophy className="w-8 h-8 text-yellow-500 mb-2" />
                  <div className="relative">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-yellow-500 to-yellow-600 flex items-center justify-center text-white mb-2 border-4 border-white shadow-xl">
                      <User className="w-10 h-10" />
                    </div>
                    <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-yellow-500 text-white rounded-full w-7 h-7 flex items-center justify-center">
                      1
                    </div>
                  </div>
                  <div className="bg-gradient-to-br from-yellow-500 to-yellow-600 text-white p-4 rounded-lg w-full text-center mt-4 h-28 flex flex-col justify-center shadow-xl">
                    <p className="text-xs truncate">{topThree[0].name}</p>
                    <p className="text-2xl mt-1">{topThree[0].percentage}%</p>
                  </div>
                </div>
              )}

              {/* Rank 3 */}
              {topThree[2] && (
                <div className="flex flex-col items-center flex-1">
                  <div className="relative">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-amber-700 to-amber-800 flex items-center justify-center text-white mb-2 border-4 border-white shadow-lg">
                      <User className="w-8 h-8" />
                    </div>
                    <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-amber-700 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs">
                      3
                    </div>
                  </div>
                  <div className="bg-gradient-to-br from-amber-700 to-amber-800 text-white p-3 rounded-lg w-full text-center mt-4 h-24 flex flex-col justify-center shadow-lg">
                    <p className="text-xs truncate">{topThree[2].name}</p>
                    <p className="text-lg mt-1">{topThree[2].percentage}%</p>
                  </div>
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Your Position */}
        {currentStudent && currentStudent.rank > 3 && (
          <Card className="border-amber-400 bg-amber-100 shadow-lg">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="bg-amber-900 text-white rounded-full w-10 h-10 flex items-center justify-center mr-3">
                    #{currentStudent.rank}
                  </div>
                  <div>
                    <p className="text-sm text-amber-900">Posisi Anda</p>
                    <p className="text-xs text-amber-700">{currentStudent.name}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-2xl text-amber-900">{currentStudent.percentage}%</p>
                  <p className="text-xs text-amber-700">{currentStudent.attendance}/{currentStudent.totalSessions} sesi</p>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Others */}
        <div className="space-y-3">
          {others.map((student) => (
            <Card
              key={student.nim}
              className={`border-amber-200 shadow-md transition-all ${
                student.nim === currentStudentNim ? 'border-amber-400 bg-amber-50 shadow-lg' : ''
              }`}
            >
              <CardContent className="pt-4 pb-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center flex-1 min-w-0">
                    <div className={`${getRankBadgeColor(student.rank)} text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0 text-sm`}>
                      {student.rank}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm text-amber-900 truncate">{student.name}</p>
                      <p className="text-xs text-amber-600">{student.nim}</p>
                    </div>
                  </div>
                  <div className="text-right ml-3">
                    <p className="text-lg text-amber-900">{student.percentage}%</p>
                    <p className="text-xs text-amber-600">{student.attendance}/{student.totalSessions}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Info */}
        <Card className="border-amber-200 bg-amber-50">
          <CardContent className="pt-6">
            <div className="flex items-start">
              <div className="bg-amber-200 p-2 rounded-full mr-3">
                <TrendingUp className="w-5 h-5 text-amber-900" />
              </div>
              <div>
                <p className="text-sm text-amber-900">Tips Naik Peringkat</p>
                <p className="text-xs text-amber-700 mt-1">
                  Hadiri setiap sesi KJP dengan tepat waktu dan pastikan lokasi GPS Anda aktif saat melakukan absensi
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
