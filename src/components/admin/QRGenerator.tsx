import { useState } from 'react';
import { Button } from '../ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { ArrowLeft, MapPin, QrCode, Download, CheckCircle, Settings } from 'lucide-react';
import { toast } from 'sonner@2.0.3';

interface QRGeneratorProps {
  onBack: () => void;
}

export function QRGenerator({ onBack }: QRGeneratorProps) {
  const [location, setLocation] = useState('Kampus UNJ - Gedung A');
  const [latitude, setLatitude] = useState('-6.2088');
  const [longitude, setLongitude] = useState('106.8456');
  const [radius, setRadius] = useState('50');
  const [qrGenerated, setQrGenerated] = useState(false);
  const [sessionCode, setSessionCode] = useState('');

  const generateQR = () => {
    const code = `KJP-${new Date().getTime()}`;
    setSessionCode(code);
    setQrGenerated(true);
    toast.success('QR Code berhasil dibuat!');
  };

  const downloadQR = () => {
    toast.success('QR Code berhasil diunduh!');
  };

  const getCurrentLocation = () => {
    toast.info('Mengambil lokasi saat ini...');
    // Simulate getting current location
    setTimeout(() => {
      setLatitude('-6.2088');
      setLongitude('106.8456');
      toast.success('Lokasi berhasil diambil!');
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-amber-100">
      {/* Header */}
      <div className="bg-gradient-to-r from-amber-900 to-amber-800 text-white p-8 shadow-lg">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center">
            <Button
              variant="ghost"
              onClick={onBack}
              className="text-white hover:bg-white/20 mr-4"
            >
              <ArrowLeft className="w-5 h-5" />
            </Button>
            <div>
              <h1 className="mb-2">Generate QR Code</h1>
              <p className="text-amber-200">Buat QR Code untuk sesi KJP dengan geo-fencing</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto p-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Settings Panel */}
          <div className="space-y-6">
            <Card className="border-amber-200 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center text-amber-900">
                  <Settings className="w-5 h-5 mr-2" />
                  Pengaturan Lokasi
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="location" className="text-amber-900">Nama Lokasi</Label>
                  <Input
                    id="location"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    placeholder="Contoh: Kampus UNJ - Gedung A"
                    className="border-amber-300 focus:border-amber-500"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="latitude" className="text-amber-900">Latitude</Label>
                    <Input
                      id="latitude"
                      value={latitude}
                      onChange={(e) => setLatitude(e.target.value)}
                      placeholder="-6.2088"
                      className="border-amber-300 focus:border-amber-500"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="longitude" className="text-amber-900">Longitude</Label>
                    <Input
                      id="longitude"
                      value={longitude}
                      onChange={(e) => setLongitude(e.target.value)}
                      placeholder="106.8456"
                      className="border-amber-300 focus:border-amber-500"
                    />
                  </div>
                </div>

                <Button
                  variant="outline"
                  onClick={getCurrentLocation}
                  className="w-full border-amber-300 text-amber-900 hover:bg-amber-100"
                >
                  <MapPin className="w-4 h-4 mr-2" />
                  Gunakan Lokasi Saat Ini
                </Button>

                <div className="space-y-2">
                  <Label htmlFor="radius" className="text-amber-900">Radius Geo-Fencing (meter)</Label>
                  <Input
                    id="radius"
                    type="number"
                    value={radius}
                    onChange={(e) => setRadius(e.target.value)}
                    placeholder="50"
                    className="border-amber-300 focus:border-amber-500"
                  />
                  <p className="text-xs text-amber-600">
                    Mahasiswa harus berada dalam radius ini untuk dapat melakukan absen
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-amber-200 bg-amber-50">
              <CardContent className="pt-6">
                <div className="flex items-start">
                  <div className="bg-amber-200 p-2 rounded-full mr-3">
                    <MapPin className="w-5 h-5 text-amber-900" />
                  </div>
                  <div>
                    <p className="text-sm text-amber-900">Informasi Geo-Fencing</p>
                    <p className="text-xs text-amber-700 mt-1">
                      Sistem akan memvalidasi lokasi mahasiswa saat melakukan scan QR Code. 
                      Mahasiswa yang berada di luar radius tidak akan berhasil melakukan absen.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* QR Code Display */}
          <div className="space-y-6">
            <Card className="border-amber-200 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center text-amber-900">
                  <QrCode className="w-5 h-5 mr-2" />
                  QR Code Preview
                </CardTitle>
              </CardHeader>
              <CardContent>
                {!qrGenerated ? (
                  <div className="aspect-square bg-gradient-to-br from-amber-100 to-amber-200 rounded-lg flex flex-col items-center justify-center p-8">
                    <QrCode className="w-24 h-24 text-amber-400 mb-4" />
                    <p className="text-amber-700 text-center">
                      QR Code akan muncul di sini setelah Anda mengklik tombol Generate
                    </p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {/* Mock QR Code */}
                    <div className="aspect-square bg-white rounded-lg p-6 border-4 border-amber-900 flex flex-col items-center justify-center">
                      <div className="grid grid-cols-8 gap-1 mb-4">
                        {Array.from({ length: 64 }).map((_, i) => (
                          <div
                            key={i}
                            className={`w-3 h-3 ${
                              Math.random() > 0.5 ? 'bg-amber-900' : 'bg-white'
                            }`}
                          />
                        ))}
                      </div>
                      <p className="text-xs text-amber-900 text-center">KSI KJP Attendance</p>
                      <p className="text-xs text-amber-700 mt-1">{sessionCode}</p>
                    </div>

                    <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                      <div className="flex items-center text-green-800">
                        <CheckCircle className="w-5 h-5 mr-2" />
                        <div>
                          <p className="text-sm">QR Code Aktif</p>
                          <p className="text-xs text-green-600 mt-1">
                            Valid untuk: {new Date().toLocaleDateString('id-ID')}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2 text-sm text-amber-900 bg-amber-50 p-4 rounded-lg">
                      <div className="flex justify-between">
                        <span className="text-amber-700">Lokasi:</span>
                        <span>{location}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-amber-700">Koordinat:</span>
                        <span>{latitude}, {longitude}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-amber-700">Radius:</span>
                        <span>{radius} meter</span>
                      </div>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Action Buttons */}
            {!qrGenerated ? (
              <Button
                onClick={generateQR}
                className="w-full h-14 bg-gradient-to-r from-amber-900 to-amber-800 hover:from-amber-800 hover:to-amber-700"
              >
                <QrCode className="w-5 h-5 mr-2" />
                Generate QR Code
              </Button>
            ) : (
              <div className="grid grid-cols-2 gap-4">
                <Button
                  onClick={downloadQR}
                  variant="outline"
                  className="border-amber-300 text-amber-900 hover:bg-amber-100"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download
                </Button>
                <Button
                  onClick={() => setQrGenerated(false)}
                  className="bg-gradient-to-r from-amber-900 to-amber-800 hover:from-amber-800 hover:to-amber-700"
                >
                  <QrCode className="w-4 h-4 mr-2" />
                  Buat Baru
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
