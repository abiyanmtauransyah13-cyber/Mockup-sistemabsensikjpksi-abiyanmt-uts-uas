import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';
import { ArrowLeft, Download, Award, CheckCircle, Calendar, User } from 'lucide-react';
import { toast } from 'sonner@2.0.3';

interface CertificateProps {
  onBack: () => void;
  studentName: string;
  studentNim: string;
}

export function Certificate({ onBack, studentName, studentNim }: CertificateProps) {
  const attendanceData = {
    totalSessions: 12,
    attended: 10,
    percentage: 83.3,
    semester: 'Ganjil 2024/2025',
    startDate: '1 September 2024',
    endDate: '30 November 2024'
  };

  const downloadCertificate = () => {
    toast.success('Sertifikat berhasil diunduh!');
  };

  const shareCertificate = () => {
    toast.success('Sertifikat berhasil dibagikan!');
  };

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
            <h2>Sertifikat Kehadiran</h2>
            <p className="text-amber-200 text-sm">KJP Semester {attendanceData.semester}</p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 space-y-6">
        {/* Certificate Card */}
        <Card className="border-4 border-amber-300 shadow-2xl bg-gradient-to-br from-white to-amber-50 overflow-hidden">
          <CardContent className="p-0">
            {/* Decorative Header */}
            <div className="bg-gradient-to-r from-amber-900 to-amber-800 p-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full -ml-12 -mb-12"></div>
              <div className="relative text-center">
                <div className="inline-flex items-center justify-center bg-white/20 backdrop-blur-sm p-4 rounded-full mb-3">
                  <Award className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-white mb-1">Sertifikat Kehadiran</h3>
                <p className="text-amber-200 text-sm">Unit Kegiatan Mahasiswa KSI</p>
              </div>
            </div>

            {/* Certificate Body */}
            <div className="p-6 space-y-6">
              {/* Student Info */}
              <div className="text-center space-y-2">
                <p className="text-sm text-amber-700">Diberikan kepada:</p>
                <h2 className="text-amber-900">{studentName}</h2>
                <p className="text-amber-700">NIM: {studentNim}</p>
              </div>

              {/* Divider */}
              <div className="flex items-center gap-4">
                <div className="flex-1 h-px bg-gradient-to-r from-transparent via-amber-300 to-transparent"></div>
                <Award className="w-5 h-5 text-amber-600" />
                <div className="flex-1 h-px bg-gradient-to-r from-transparent via-amber-300 to-transparent"></div>
              </div>

              {/* Achievement */}
              <div className="text-center space-y-2">
                <p className="text-sm text-amber-700">Telah mengikuti kegiatan</p>
                <p className="text-amber-900">Kajian Jumat Pagi (KJP)</p>
                <p className="text-sm text-amber-700">dengan tingkat kehadiran</p>
                <div className="inline-flex items-center justify-center bg-gradient-to-r from-amber-900 to-amber-800 text-white px-6 py-3 rounded-full shadow-lg my-2">
                  <CheckCircle className="w-5 h-5 mr-2" />
                  <span className="text-2xl">{attendanceData.percentage}%</span>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-amber-50 p-4 rounded-lg border border-amber-200 text-center">
                  <p className="text-2xl text-amber-900">{attendanceData.attended}</p>
                  <p className="text-xs text-amber-700 mt-1">Sesi Dihadiri</p>
                </div>
                <div className="bg-amber-50 p-4 rounded-lg border border-amber-200 text-center">
                  <p className="text-2xl text-amber-900">{attendanceData.totalSessions}</p>
                  <p className="text-xs text-amber-700 mt-1">Total Sesi</p>
                </div>
              </div>

              {/* Period */}
              <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
                <div className="flex items-center text-sm text-amber-700 mb-2">
                  <Calendar className="w-4 h-4 mr-2" />
                  Periode Kegiatan
                </div>
                <p className="text-xs text-amber-600">
                  {attendanceData.startDate} - {attendanceData.endDate}
                </p>
              </div>

              {/* Footer */}
              <div className="text-center pt-4">
                <p className="text-xs text-amber-600">Diterbitkan oleh</p>
                <p className="text-sm text-amber-900 mt-1">UKM Kajian Strategis Islam</p>
                <p className="text-xs text-amber-600 mt-1">Universitas Negeri Jakarta</p>
              </div>

              {/* Signature Area */}
              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-amber-200">
                <div className="text-center">
                  <div className="h-16 flex items-center justify-center">
                    <div className="text-2xl text-amber-900" style={{ fontFamily: 'cursive' }}>
                      [Signature]
                    </div>
                  </div>
                  <p className="text-xs text-amber-700 mt-2">Ketua UKM KSI</p>
                </div>
                <div className="text-center">
                  <div className="h-16 flex items-center justify-center">
                    <div className="text-2xl text-amber-900" style={{ fontFamily: 'cursive' }}>
                      [Signature]
                    </div>
                  </div>
                  <p className="text-xs text-amber-700 mt-2">Koordinator KJP</p>
                </div>
              </div>

              {/* Certificate ID */}
              <div className="text-center pt-2">
                <p className="text-xs text-amber-500">
                  No. Sertifikat: KSI/KJP/{new Date().getFullYear()}/{studentNim}
                </p>
              </div>
            </div>

            {/* Decorative Border Pattern */}
            <div className="h-4 bg-gradient-to-r from-amber-900 via-amber-600 to-amber-900"></div>
          </CardContent>
        </Card>

        {/* Action Buttons */}
        <div className="grid grid-cols-2 gap-4">
          <Button
            onClick={downloadCertificate}
            className="bg-gradient-to-r from-amber-900 to-amber-800 hover:from-amber-800 hover:to-amber-700"
          >
            <Download className="w-4 h-4 mr-2" />
            Download
          </Button>
          <Button
            onClick={shareCertificate}
            variant="outline"
            className="border-amber-300 text-amber-900 hover:bg-amber-100"
          >
            <Award className="w-4 h-4 mr-2" />
            Bagikan
          </Button>
        </div>

        {/* Info Card */}
        <Card className="border-amber-200 bg-amber-50">
          <CardContent className="pt-6">
            <div className="flex items-start">
              <div className="bg-amber-200 p-2 rounded-full mr-3">
                <CheckCircle className="w-5 h-5 text-amber-900" />
              </div>
              <div>
                <p className="text-sm text-amber-900">Sertifikat Valid</p>
                <p className="text-xs text-amber-700 mt-1">
                  Sertifikat ini dapat diverifikasi dengan nomor sertifikat yang tertera di atas
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
