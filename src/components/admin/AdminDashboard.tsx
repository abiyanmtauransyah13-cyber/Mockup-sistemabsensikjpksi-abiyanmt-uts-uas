import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Users, CheckCircle, XCircle, QrCode, Download, BarChart3, Calendar, TrendingUp } from 'lucide-react';
import { Badge } from '../ui/badge';

interface AdminDashboardProps {
  onGenerateQR: () => void;
  onViewData: () => void;
  onLogout: () => void;
}

export function AdminDashboard({ onGenerateQR, onViewData, onLogout }: AdminDashboardProps) {
  const todayStats = {
    total: 45,
    present: 38,
    absent: 5,
    failed: 2,
    date: new Date().toLocaleDateString('id-ID', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    })
  };

  const attendanceRate = ((todayStats.present / todayStats.total) * 100).toFixed(1);

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-amber-100">
      {/* Header */}
      <div className="bg-gradient-to-r from-amber-900 to-amber-800 text-white p-8 shadow-lg">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h1 className="mb-2">Admin Dashboard</h1>
              <p className="text-amber-200">KSI Smart Attendance System</p>
            </div>
            <Button
              variant="ghost"
              onClick={onLogout}
              className="text-white hover:bg-white/20"
            >
              Logout
            </Button>
          </div>

          {/* Date Info */}
          <div className="flex items-center bg-white/10 backdrop-blur-sm p-4 rounded-lg">
            <Calendar className="w-5 h-5 mr-3" />
            <span>{todayStats.date}</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto p-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="border-amber-200 shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm text-amber-900">Total Anggota</CardTitle>
              <Users className="w-4 h-4 text-amber-700" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl text-amber-900">{todayStats.total}</div>
              <p className="text-xs text-amber-600 mt-1">Anggota KSI terdaftar</p>
            </CardContent>
          </Card>

          <Card className="border-green-200 shadow-lg hover:shadow-xl transition-shadow bg-green-50">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm text-green-900">Hadir Hari Ini</CardTitle>
              <CheckCircle className="w-4 h-4 text-green-700" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl text-green-900">{todayStats.present}</div>
              <p className="text-xs text-green-600 mt-1">
                <TrendingUp className="w-3 h-3 inline mr-1" />
                {attendanceRate}% kehadiran
              </p>
            </CardContent>
          </Card>

          <Card className="border-gray-200 shadow-lg hover:shadow-xl transition-shadow bg-gray-50">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm text-gray-900">Tidak Hadir</CardTitle>
              <XCircle className="w-4 h-4 text-gray-700" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl text-gray-900">{todayStats.absent}</div>
              <p className="text-xs text-gray-600 mt-1">Belum melakukan absen</p>
            </CardContent>
          </Card>

          <Card className="border-red-200 shadow-lg hover:shadow-xl transition-shadow bg-red-50">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm text-red-900">Absen Gagal</CardTitle>
              <XCircle className="w-4 h-4 text-red-700" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl text-red-900">{todayStats.failed}</div>
              <p className="text-xs text-red-600 mt-1">Di luar radius lokasi</p>
            </CardContent>
          </Card>
        </div>

        {/* Action Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <Card className="border-amber-300 shadow-lg hover:shadow-xl transition-shadow cursor-pointer" onClick={onGenerateQR}>
            <CardHeader>
              <CardTitle className="flex items-center text-amber-900">
                <div className="bg-amber-100 p-3 rounded-full mr-3">
                  <QrCode className="w-6 h-6 text-amber-700" />
                </div>
                Generate QR Code
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-amber-700 mb-4">Buat QR Code baru untuk sesi KJP dengan pengaturan geo-fencing</p>
              <Button className="w-full bg-gradient-to-r from-amber-900 to-amber-800 hover:from-amber-800 hover:to-amber-700">
                <QrCode className="w-4 h-4 mr-2" />
                Buat QR Code Baru
              </Button>
            </CardContent>
          </Card>

          <Card className="border-amber-300 shadow-lg hover:shadow-xl transition-shadow cursor-pointer" onClick={onViewData}>
            <CardHeader>
              <CardTitle className="flex items-center text-amber-900">
                <div className="bg-amber-100 p-3 rounded-full mr-3">
                  <BarChart3 className="w-6 h-6 text-amber-700" />
                </div>
                Data Kehadiran
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-amber-700 mb-4">Lihat dan kelola data kehadiran lengkap dengan fitur ekspor</p>
              <Button className="w-full bg-gradient-to-r from-amber-900 to-amber-800 hover:from-amber-800 hover:to-amber-700">
                <BarChart3 className="w-4 h-4 mr-2" />
                Lihat Data Lengkap
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Recent Activity */}
        <Card className="border-amber-200 shadow-lg">
          <CardHeader>
            <CardTitle className="text-amber-900">Aktivitas Terbaru</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { name: 'Ahmad Fauzi', nim: '1234567890', time: '07:15 WIB', status: 'present' },
                { name: 'Siti Nurhaliza', nim: '1234567891', time: '07:18 WIB', status: 'present' },
                { name: 'Budi Santoso', nim: '1234567892', time: '07:22 WIB', status: 'failed' },
                { name: 'Dewi Lestari', nim: '1234567893', time: '07:25 WIB', status: 'present' },
              ].map((activity, index) => (
                <div key={index} className="flex items-center justify-between py-3 border-b border-amber-100 last:border-0">
                  <div className="flex items-center space-x-3">
                    <div className="bg-amber-100 p-2 rounded-full">
                      <Users className="w-4 h-4 text-amber-700" />
                    </div>
                    <div>
                      <p className="text-sm text-amber-900">{activity.name}</p>
                      <p className="text-xs text-amber-600">NIM: {activity.nim}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-amber-600">{activity.time}</p>
                    {activity.status === 'present' ? (
                      <Badge className="mt-1 bg-green-600 hover:bg-green-700 text-xs">Hadir</Badge>
                    ) : (
                      <Badge variant="destructive" className="mt-1 text-xs">Gagal</Badge>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
