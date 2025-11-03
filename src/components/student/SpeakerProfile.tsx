import { useState } from 'react';
import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';
import { Badge } from '../ui/badge';
import { ArrowLeft, User, BookOpen, Calendar, MapPin, Award, Mail, Phone } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

interface Speaker {
  id: string;
  name: string;
  title: string;
  expertise: string[];
  bio: string;
  image: string;
  topics: string[];
  sessions: number;
  email: string;
  phone: string;
  education: string;
  achievements: string[];
}

interface SpeakerProfileProps {
  onBack: () => void;
}

export function SpeakerProfile({ onBack }: SpeakerProfileProps) {
  const [selectedSpeaker, setSelectedSpeaker] = useState<Speaker | null>(null);

  const speakers: Speaker[] = [
    {
      id: '1',
      name: 'Dr. Ahmad Hidayat, M.Si',
      title: 'Dosen UIN Jakarta',
      expertise: ['Studi Islam Kontemporer', 'Filsafat Islam', 'Psikologi Islam'],
      bio: 'Pakar dalam bidang studi Islam kontemporer dengan pengalaman lebih dari 15 tahun dalam pengajaran dan penelitian. Telah menulis berbagai karya ilmiah tentang Islam dan modernitas.',
      image: 'https://images.unsplash.com/photo-1762098370191-aa2e33da8fd6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBzcGVha2VyJTIwcHJlc2VudGVyfGVufDF8fHx8MTc2MjE3NDc3NXww&ixlib=rb-4.1.0&q=80&w=1080',
      topics: [
        'Islam dan Teknologi Modern',
        'Membangun Karakter Islami di Era Digital',
        'Relevansi Nilai-nilai Islam dalam Kehidupan Modern'
      ],
      sessions: 8,
      email: 'ahmad.hidayat@uinjkt.ac.id',
      phone: '0812-3456-7890',
      education: 'S3 Islamic Studies - Al-Azhar University',
      achievements: [
        'Penulis 5 buku tentang Islam Kontemporer',
        'Pembicara di 50+ seminar nasional',
        'Peneliti terbaik UIN Jakarta 2023'
      ]
    },
    {
      id: '2',
      name: 'Ustadz Mahmud Rahman, Lc',
      title: 'Direktur Yayasan An-Nur',
      expertise: ['Tafsir Al-Quran', 'Hadits', 'Fiqih Kontemporer'],
      bio: 'Alumni Universitas Madinah dengan spesialisasi dalam tafsir dan hadits. Aktif dalam dakwah dan pengajaran Al-Quran di berbagai institusi.',
      image: 'https://images.unsplash.com/photo-1708195886023-3ecb00ac7a49?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHByb2Zlc3Npb25hbCUyMHBvcnRyYWl0fGVufDF8fHx8MTc2MjE2ODU5NXww&ixlib=rb-4.1.0&q=80&w=1080',
      topics: [
        'Memahami Al-Quran dengan Konteks Kekinian',
        'Sunnah Nabi dalam Kehidupan Sehari-hari',
        'Hukum Islam dalam Transaksi Modern'
      ],
      sessions: 12,
      email: 'mahmud.rahman@an-nur.org',
      phone: '0813-4567-8901',
      education: 'Sarjana Syariah - Islamic University of Madinah',
      achievements: [
        'Pengajar Al-Quran bersertifikat internasional',
        'Hafidz 30 Juz',
        'Pembicara di 100+ majelis ta\'lim'
      ]
    },
    {
      id: '3',
      name: 'Dr. Siti Aminah, M.Pd.I',
      title: 'Dosen IAIN Syekh Nurjati',
      expertise: ['Pendidikan Islam', 'Psikologi Remaja', 'Kajian Gender'],
      bio: 'Ahli dalam pendidikan Islam dan psikologi remaja. Fokus penelitian pada pengembangan pendidikan karakter berbasis nilai-nilai Islam untuk generasi muda.',
      image: 'https://images.unsplash.com/photo-1574281570877-bd815ebb50a4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFjaGVyJTIwbGVjdHVyZXIlMjBwcm9mZXNzb3J8ZW58MXx8fHwxNzYyMTc0Nzc3fDA&ixlib=rb-4.1.0&q=80&w=1080',
      topics: [
        'Membangun Kepribadian Islami di Kampus',
        'Mengelola Emosi dengan Ajaran Islam',
        'Peran Mahasiswa Muslim dalam Masyarakat'
      ],
      sessions: 6,
      email: 'siti.aminah@iaincirebon.ac.id',
      phone: '0814-5678-9012',
      education: 'S3 Pendidikan Islam - UIN Jakarta',
      achievements: [
        'Peneliti pendidikan Islam terbaik 2022',
        'Penulis 3 buku pendidikan karakter',
        'Konsultan pendidikan 20+ lembaga'
      ]
    }
  ];

  if (selectedSpeaker) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-amber-50 to-amber-100">
        {/* Header */}
        <div className="bg-gradient-to-r from-amber-900 to-amber-800 text-white p-6 sticky top-0 z-10 shadow-lg">
          <div className="flex items-center">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setSelectedSpeaker(null)}
              className="text-white hover:bg-white/20 mr-3"
            >
              <ArrowLeft className="w-5 h-5" />
            </Button>
            <div>
              <h2>Profil Penceramah</h2>
              <p className="text-amber-200 text-sm">{selectedSpeaker.name}</p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Profile Header */}
          <Card className="border-amber-300 shadow-xl overflow-hidden">
            <div className="bg-gradient-to-r from-amber-900 to-amber-800 h-32 relative">
              <div className="absolute -bottom-16 left-6">
                <div className="w-32 h-32 rounded-full border-4 border-white overflow-hidden bg-white shadow-xl">
                  <ImageWithFallback
                    src={selectedSpeaker.image}
                    alt={selectedSpeaker.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
            <CardContent className="pt-20 pb-6">
              <h3 className="text-amber-900 mb-1">{selectedSpeaker.name}</h3>
              <p className="text-amber-700 mb-3">{selectedSpeaker.title}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {selectedSpeaker.expertise.map((exp, index) => (
                  <Badge key={index} variant="outline" className="border-amber-400 text-amber-700">
                    {exp}
                  </Badge>
                ))}
              </div>
              <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
                <div className="flex items-center text-amber-900 mb-2">
                  <Award className="w-5 h-5 mr-2" />
                  <span className="text-sm">Sudah mengisi {selectedSpeaker.sessions} sesi KJP</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Bio */}
          <Card className="border-amber-200 shadow-lg">
            <CardContent className="pt-6">
              <div className="flex items-center text-amber-900 mb-3">
                <User className="w-5 h-5 mr-2" />
                <h4>Tentang</h4>
              </div>
              <p className="text-sm text-amber-700 leading-relaxed">
                {selectedSpeaker.bio}
              </p>
            </CardContent>
          </Card>

          {/* Education */}
          <Card className="border-amber-200 shadow-lg">
            <CardContent className="pt-6">
              <div className="flex items-center text-amber-900 mb-3">
                <BookOpen className="w-5 h-5 mr-2" />
                <h4>Pendidikan</h4>
              </div>
              <p className="text-sm text-amber-700">{selectedSpeaker.education}</p>
            </CardContent>
          </Card>

          {/* Topics */}
          <Card className="border-amber-200 shadow-lg">
            <CardContent className="pt-6">
              <div className="flex items-center text-amber-900 mb-4">
                <BookOpen className="w-5 h-5 mr-2" />
                <h4>Topik yang Pernah Dibawakan</h4>
              </div>
              <div className="space-y-3">
                {selectedSpeaker.topics.map((topic, index) => (
                  <div key={index} className="flex items-start bg-amber-50 p-3 rounded-lg border border-amber-200">
                    <div className="bg-amber-200 p-1.5 rounded-full mr-3 mt-0.5">
                      <BookOpen className="w-3 h-3 text-amber-900" />
                    </div>
                    <p className="text-sm text-amber-900">{topic}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Achievements */}
          <Card className="border-amber-200 shadow-lg">
            <CardContent className="pt-6">
              <div className="flex items-center text-amber-900 mb-4">
                <Award className="w-5 h-5 mr-2" />
                <h4>Prestasi & Pencapaian</h4>
              </div>
              <div className="space-y-3">
                {selectedSpeaker.achievements.map((achievement, index) => (
                  <div key={index} className="flex items-start">
                    <div className="bg-amber-200 p-1 rounded-full mr-3 mt-1">
                      <Award className="w-3 h-3 text-amber-900" />
                    </div>
                    <p className="text-sm text-amber-700">{achievement}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Contact */}
          <Card className="border-amber-200 shadow-lg bg-amber-50">
            <CardContent className="pt-6">
              <div className="flex items-center text-amber-900 mb-4">
                <Phone className="w-5 h-5 mr-2" />
                <h4>Kontak</h4>
              </div>
              <div className="space-y-3">
                <div className="flex items-center text-sm text-amber-700">
                  <Mail className="w-4 h-4 mr-3" />
                  <span>{selectedSpeaker.email}</span>
                </div>
                <div className="flex items-center text-sm text-amber-700">
                  <Phone className="w-4 h-4 mr-3" />
                  <span>{selectedSpeaker.phone}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

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
            <h2>Profil Penceramah</h2>
            <p className="text-amber-200 text-sm">Daftar penceramah KJP</p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        {speakers.map((speaker) => (
          <Card
            key={speaker.id}
            className="border-amber-200 shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
            onClick={() => setSelectedSpeaker(speaker)}
          >
            <CardContent className="pt-6">
              <div className="flex items-start space-x-4">
                <div className="w-20 h-20 rounded-full overflow-hidden bg-amber-100 flex-shrink-0 border-2 border-amber-300">
                  <ImageWithFallback
                    src={speaker.image}
                    alt={speaker.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-amber-900 mb-1">{speaker.name}</h4>
                  <p className="text-sm text-amber-700 mb-2">{speaker.title}</p>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {speaker.expertise.slice(0, 2).map((exp, index) => (
                      <Badge
                        key={index}
                        variant="outline"
                        className="border-amber-400 text-amber-700 text-xs"
                      >
                        {exp}
                      </Badge>
                    ))}
                    {speaker.expertise.length > 2 && (
                      <Badge variant="outline" className="border-amber-400 text-amber-700 text-xs">
                        +{speaker.expertise.length - 2}
                      </Badge>
                    )}
                  </div>
                  <div className="flex items-center text-xs text-amber-600">
                    <Calendar className="w-3 h-3 mr-1" />
                    {speaker.sessions} sesi KJP
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
