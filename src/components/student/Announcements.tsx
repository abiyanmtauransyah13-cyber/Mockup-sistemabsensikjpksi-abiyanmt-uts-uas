import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';
import { Badge } from '../ui/badge';
import { ArrowLeft, Megaphone, Calendar, Pin, Info, AlertCircle, CheckCircle } from 'lucide-react';

interface AnnouncementsProps {
  onBack: () => void;
}

interface Announcement {
  id: string;
  title: string;
  message: string;
  date: string;
  type: 'info' | 'important' | 'event' | 'success';
  pinned: boolean;
}

export function Announcements({ onBack }: AnnouncementsProps) {
  const announcements: Announcement[] = [
    {
      id: '1',
      title: 'Libur KJP - Ujian Tengah Semester',
      message: 'Kegiatan KJP akan diliburkan selama 2 minggu pada periode UTS. Akan dilanjutkan kembali pada tanggal 13 Desember 2024.',
      date: '2024-11-25',
      type: 'important',
      pinned: true
    },
    {
      id: '2',
      title: 'Perubahan Lokasi KJP Minggu Depan',
      message: 'KJP tanggal 6 Desember akan diadakan di Aula Fakultas karena masjid sedang direnovasi. Mohon perhatian untuk lokasi yang berbeda.',
      date: '2024-11-28',
      type: 'important',
      pinned: true
    },
    {
      id: '3',
      title: 'Sertifikat Kehadiran Sudah Tersedia',
      message: 'Sertifikat kehadiran semester ganjil 2024/2025 sudah dapat diunduh melalui menu Sertifikat di aplikasi. Pastikan data kehadiran Anda sudah benar.',
      date: '2024-11-20',
      type: 'success',
      pinned: false
    },
    {
      id: '4',
      title: 'Tamu Spesial: Ustadz Adi Hidayat',
      message: 'Pada tanggal 20 Desember 2024, KJP akan menghadirkan tamu spesial Ustadz Adi Hidayat dengan tema "Generasi Qurani di Era Digital". Jangan sampai ketinggalan!',
      date: '2024-11-18',
      type: 'event',
      pinned: false
    },
    {
      id: '5',
      title: 'Survey Kepuasan Peserta KJP',
      message: 'Kami mengundang seluruh peserta KJP untuk mengisi survey kepuasan kegiatan. Link survey akan dikirimkan melalui grup WhatsApp UKM KSI.',
      date: '2024-11-15',
      type: 'info',
      pinned: false
    },
    {
      id: '6',
      title: 'Update Sistem Absensi',
      message: 'Sistem absensi telah diperbarui dengan fitur validasi lokasi yang lebih akurat. Pastikan GPS smartphone Anda aktif saat melakukan absensi.',
      date: '2024-11-10',
      type: 'info',
      pinned: false
    },
    {
      id: '7',
      title: 'Pekan Dakwah Kampus',
      message: 'UKM KSI akan mengadakan Pekan Dakwah Kampus tanggal 15-20 Januari 2025. Bagi yang ingin menjadi volunteer silakan mendaftar ke panitia.',
      date: '2024-11-05',
      type: 'event',
      pinned: false
    },
    {
      id: '8',
      title: 'Minimal Kehadiran untuk Sertifikat',
      message: 'Untuk mendapatkan sertifikat kehadiran, mahasiswa minimal harus hadir 75% dari total sesi KJP dalam satu semester.',
      date: '2024-11-01',
      type: 'info',
      pinned: false
    }
  ];

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'important':
        return <AlertCircle className="w-5 h-5" />;
      case 'event':
        return <Calendar className="w-5 h-5" />;
      case 'success':
        return <CheckCircle className="w-5 h-5" />;
      default:
        return <Info className="w-5 h-5" />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'important':
        return 'border-red-400 bg-red-50';
      case 'event':
        return 'border-blue-400 bg-blue-50';
      case 'success':
        return 'border-green-400 bg-green-50';
      default:
        return 'border-amber-200 bg-white';
    }
  };

  const getTypeBadgeColor = (type: string) => {
    switch (type) {
      case 'important':
        return 'bg-red-600 hover:bg-red-700';
      case 'event':
        return 'bg-blue-600 hover:bg-blue-700';
      case 'success':
        return 'bg-green-600 hover:bg-green-700';
      default:
        return 'bg-amber-600 hover:bg-amber-700';
    }
  };

  const getTypeLabel = (type: string) => {
    switch (type) {
      case 'important':
        return 'Penting';
      case 'event':
        return 'Event';
      case 'success':
        return 'Informasi';
      default:
        return 'Info';
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' });
  };

  const pinnedAnnouncements = announcements.filter(a => a.pinned);
  const regularAnnouncements = announcements.filter(a => !a.pinned);

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
            <h2>Pengumuman</h2>
            <p className="text-amber-200 text-sm">Info terbaru KJP & UKM KSI</p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 space-y-6">
        {/* Pinned Announcements */}
        {pinnedAnnouncements.length > 0 && (
          <div>
            <div className="flex items-center mb-3">
              <Pin className="w-5 h-5 text-amber-900 mr-2" />
              <h3 className="text-amber-900">Pengumuman Penting</h3>
            </div>
            <div className="space-y-3">
              {pinnedAnnouncements.map((announcement) => (
                <Card
                  key={announcement.id}
                  className={`${getTypeColor(announcement.type)} shadow-lg border-2`}
                >
                  <CardContent className="pt-6">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <div className={`p-2 rounded-full ${
                          announcement.type === 'important' ? 'bg-red-200 text-red-700' :
                          announcement.type === 'event' ? 'bg-blue-200 text-blue-700' :
                          announcement.type === 'success' ? 'bg-green-200 text-green-700' :
                          'bg-amber-200 text-amber-700'
                        }`}>
                          {getTypeIcon(announcement.type)}
                        </div>
                        <Badge className={getTypeBadgeColor(announcement.type)}>
                          {getTypeLabel(announcement.type)}
                        </Badge>
                      </div>
                      <Pin className="w-4 h-4 text-amber-700" />
                    </div>
                    <h4 className={`mb-2 ${
                      announcement.type === 'important' ? 'text-red-900' :
                      announcement.type === 'event' ? 'text-blue-900' :
                      announcement.type === 'success' ? 'text-green-900' :
                      'text-amber-900'
                    }`}>
                      {announcement.title}
                    </h4>
                    <p className={`text-sm mb-3 ${
                      announcement.type === 'important' ? 'text-red-700' :
                      announcement.type === 'event' ? 'text-blue-700' :
                      announcement.type === 'success' ? 'text-green-700' :
                      'text-amber-700'
                    }`}>
                      {announcement.message}
                    </p>
                    <p className="text-xs text-slate-500">{formatDate(announcement.date)}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Regular Announcements */}
        {regularAnnouncements.length > 0 && (
          <div>
            <div className="flex items-center mb-3">
              <Megaphone className="w-5 h-5 text-amber-900 mr-2" />
              <h3 className="text-amber-900">Semua Pengumuman</h3>
            </div>
            <div className="space-y-3">
              {regularAnnouncements.map((announcement) => (
                <Card
                  key={announcement.id}
                  className={`${getTypeColor(announcement.type)} shadow-md hover:shadow-lg transition-shadow`}
                >
                  <CardContent className="pt-6">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <div className={`p-2 rounded-full ${
                          announcement.type === 'important' ? 'bg-red-200 text-red-700' :
                          announcement.type === 'event' ? 'bg-blue-200 text-blue-700' :
                          announcement.type === 'success' ? 'bg-green-200 text-green-700' :
                          'bg-amber-200 text-amber-700'
                        }`}>
                          {getTypeIcon(announcement.type)}
                        </div>
                        <Badge className={getTypeBadgeColor(announcement.type)}>
                          {getTypeLabel(announcement.type)}
                        </Badge>
                      </div>
                    </div>
                    <h4 className={`mb-2 ${
                      announcement.type === 'important' ? 'text-red-900' :
                      announcement.type === 'event' ? 'text-blue-900' :
                      announcement.type === 'success' ? 'text-green-900' :
                      'text-amber-900'
                    }`}>
                      {announcement.title}
                    </h4>
                    <p className={`text-sm mb-3 ${
                      announcement.type === 'important' ? 'text-red-700' :
                      announcement.type === 'event' ? 'text-blue-700' :
                      announcement.type === 'success' ? 'text-green-700' :
                      'text-amber-700'
                    }`}>
                      {announcement.message}
                    </p>
                    <p className="text-xs text-slate-500">{formatDate(announcement.date)}</p>
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
                <Megaphone className="w-5 h-5 text-amber-900" />
              </div>
              <div>
                <p className="text-sm text-amber-900">Notifikasi Pengumuman</p>
                <p className="text-xs text-amber-700 mt-1">
                  Pengumuman penting akan dikirimkan melalui grup WhatsApp UKM KSI dan ditampilkan di aplikasi ini
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
