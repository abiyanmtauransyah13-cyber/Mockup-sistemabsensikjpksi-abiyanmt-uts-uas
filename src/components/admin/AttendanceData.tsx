import { useState } from 'react';
import { Button } from '../ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Input } from '../ui/input';
import { Badge } from '../ui/badge';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from '../ui/table';
import { 
  ArrowLeft, 
  Download, 
  Search, 
  Filter, 
  CheckCircle, 
  XCircle, 
  FileSpreadsheet,
  FileText,
  Calendar
} from 'lucide-react';
import { toast } from 'sonner@2.0.3';

interface AttendanceDataProps {
  onBack: () => void;
}

interface StudentAttendance {
  id: string;
  name: string;
  nim: string;
  status: 'present' | 'absent' | 'failed';
  time: string;
  location: string;
}

export function AttendanceData({ onBack }: AttendanceDataProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterStatus, setFilterStatus] = useState<'all' | 'present' | 'absent' | 'failed'>('all');

  // Mock data
  const attendanceData: StudentAttendance[] = [
    {
      id: '1',
      name: 'Ahmad Fauzi',
      nim: '1234567890',
      status: 'present',
      time: '07:15 WIB',
      location: 'Kampus UNJ - Gedung A'
    },
    {
      id: '2',
      name: 'Siti Nurhaliza',
      nim: '1234567891',
      status: 'present',
      time: '07:18 WIB',
      location: 'Kampus UNJ - Gedung A'
    },
    {
      id: '3',
      name: 'Budi Santoso',
      nim: '1234567892',
      status: 'failed',
      time: '07:22 WIB',
      location: 'Di luar radius'
    },
    {
      id: '4',
      name: 'Dewi Lestari',
      nim: '1234567893',
      status: 'present',
      time: '07:25 WIB',
      location: 'Kampus UNJ - Gedung A'
    },
    {
      id: '5',
      name: 'Eko Prasetyo',
      nim: '1234567894',
      status: 'present',
      time: '07:28 WIB',
      location: 'Kampus UNJ - Gedung A'
    },
    {
      id: '6',
      name: 'Fitri Handayani',
      nim: '1234567895',
      status: 'absent',
      time: '-',
      location: '-'
    },
    {
      id: '7',
      name: 'Gilang Ramadhan',
      nim: '1234567896',
      status: 'present',
      time: '07:30 WIB',
      location: 'Kampus UNJ - Gedung A'
    },
    {
      id: '8',
      name: 'Hana Pertiwi',
      nim: '1234567897',
      status: 'present',
      time: '07:32 WIB',
      location: 'Kampus UNJ - Gedung A'
    },
    {
      id: '9',
      name: 'Irfan Hakim',
      nim: '1234567898',
      status: 'failed',
      time: '07:35 WIB',
      location: 'Di luar radius'
    },
    {
      id: '10',
      name: 'Jasmine Amalia',
      nim: '1234567899',
      status: 'present',
      time: '07:38 WIB',
      location: 'Kampus UNJ - Gedung A'
    },
  ];

  const filteredData = attendanceData.filter((student) => {
    const matchesSearch = 
      student.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      student.nim.includes(searchQuery);
    const matchesFilter = filterStatus === 'all' || student.status === filterStatus;
    return matchesSearch && matchesFilter;
  });

  const stats = {
    total: attendanceData.length,
    present: attendanceData.filter(s => s.status === 'present').length,
    absent: attendanceData.filter(s => s.status === 'absent').length,
    failed: attendanceData.filter(s => s.status === 'failed').length,
  };

  const exportToExcel = () => {
    toast.success('Data berhasil diekspor ke Excel!');
  };

  const exportToPDF = () => {
    toast.success('Data berhasil diekspor ke PDF!');
  };

  const getStatusBadge = (status: StudentAttendance['status']) => {
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-amber-100">
      {/* Header */}
      <div className="bg-gradient-to-r from-amber-900 to-amber-800 text-white p-8 shadow-lg">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center mb-6">
            <Button
              variant="ghost"
              onClick={onBack}
              className="text-white hover:bg-white/20 mr-4"
            >
              <ArrowLeft className="w-5 h-5" />
            </Button>
            <div>
              <h1 className="mb-2">Data Kehadiran</h1>
              <p className="text-amber-200">Kelola dan ekspor data kehadiran mahasiswa</p>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <CardContent className="pt-6">
                <div className="text-center">
                  <p className="text-2xl">{stats.total}</p>
                  <p className="text-xs text-amber-200 mt-1">Total</p>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <CardContent className="pt-6">
                <div className="text-center">
                  <p className="text-2xl">{stats.present}</p>
                  <p className="text-xs text-amber-200 mt-1">Hadir</p>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <CardContent className="pt-6">
                <div className="text-center">
                  <p className="text-2xl">{stats.absent}</p>
                  <p className="text-xs text-amber-200 mt-1">Tidak Hadir</p>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <CardContent className="pt-6">
                <div className="text-center">
                  <p className="text-2xl">{stats.failed}</p>
                  <p className="text-xs text-amber-200 mt-1">Gagal</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto p-8">
        {/* Filters and Export */}
        <Card className="border-amber-200 shadow-lg mb-6">
          <CardHeader>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <CardTitle className="text-amber-900">Daftar Kehadiran</CardTitle>
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={exportToExcel}
                  className="border-amber-300 text-amber-900 hover:bg-amber-100"
                >
                  <FileSpreadsheet className="w-4 h-4 mr-2" />
                  Excel
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={exportToPDF}
                  className="border-amber-300 text-amber-900 hover:bg-amber-100"
                >
                  <FileText className="w-4 h-4 mr-2" />
                  PDF
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            {/* Search and Filter */}
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-amber-600" />
                <Input
                  placeholder="Cari nama atau NIM..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 border-amber-300 focus:border-amber-500"
                />
              </div>
              <div className="flex gap-2">
                <Button
                  variant={filterStatus === 'all' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setFilterStatus('all')}
                  className={filterStatus === 'all' ? 'bg-amber-900 hover:bg-amber-800' : 'border-amber-300 text-amber-900 hover:bg-amber-100'}
                >
                  Semua
                </Button>
                <Button
                  variant={filterStatus === 'present' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setFilterStatus('present')}
                  className={filterStatus === 'present' ? 'bg-green-600 hover:bg-green-700' : 'border-amber-300 text-amber-900 hover:bg-amber-100'}
                >
                  Hadir
                </Button>
                <Button
                  variant={filterStatus === 'absent' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setFilterStatus('absent')}
                  className={filterStatus === 'absent' ? 'bg-gray-600 hover:bg-gray-700' : 'border-amber-300 text-amber-900 hover:bg-amber-100'}
                >
                  Tidak Hadir
                </Button>
                <Button
                  variant={filterStatus === 'failed' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setFilterStatus('failed')}
                  className={filterStatus === 'failed' ? 'bg-red-600 hover:bg-red-700' : 'border-amber-300 text-amber-900 hover:bg-amber-100'}
                >
                  Gagal
                </Button>
              </div>
            </div>

            {/* Table */}
            <div className="border border-amber-200 rounded-lg overflow-hidden">
              <Table>
                <TableHeader>
                  <TableRow className="bg-amber-50 hover:bg-amber-50">
                    <TableHead className="text-amber-900">No</TableHead>
                    <TableHead className="text-amber-900">Nama</TableHead>
                    <TableHead className="text-amber-900">NIM</TableHead>
                    <TableHead className="text-amber-900">Status</TableHead>
                    <TableHead className="text-amber-900">Waktu</TableHead>
                    <TableHead className="text-amber-900">Lokasi</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredData.map((student, index) => (
                    <TableRow key={student.id} className="hover:bg-amber-50">
                      <TableCell className="text-amber-900">{index + 1}</TableCell>
                      <TableCell className="text-amber-900">{student.name}</TableCell>
                      <TableCell className="text-amber-700">{student.nim}</TableCell>
                      <TableCell>{getStatusBadge(student.status)}</TableCell>
                      <TableCell className="text-amber-700">{student.time}</TableCell>
                      <TableCell className="text-amber-700">{student.location}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>

            {filteredData.length === 0 && (
              <div className="text-center py-8 text-amber-600">
                Tidak ada data yang sesuai dengan pencarian
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
