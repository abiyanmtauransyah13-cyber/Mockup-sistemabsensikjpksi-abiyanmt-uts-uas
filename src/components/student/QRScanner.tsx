import { useState, useEffect } from 'react';
import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';
import { ArrowLeft, Camera, MapPin, CheckCircle, XCircle, Loader2 } from 'lucide-react';
import { toast } from 'sonner@2.0.3';

interface QRScannerProps {
  onBack: () => void;
  onScanSuccess: (result: { status: 'present' | 'failed'; message: string }) => void;
}

export function QRScanner({ onBack, onScanSuccess }: QRScannerProps) {
  const [scanning, setScanning] = useState(false);
  const [validatingLocation, setValidatingLocation] = useState(false);
  const [scanResult, setScanResult] = useState<{ status: 'present' | 'failed'; message: string } | null>(null);

  const simulateScan = () => {
    setScanning(true);
    
    // Simulate QR scanning delay
    setTimeout(() => {
      setScanning(false);
      setValidatingLocation(true);
      
      // Simulate location validation
      setTimeout(() => {
        setValidatingLocation(false);
        
        // Random success/failure for demo
        const isLocationValid = Math.random() > 0.3;
        
        if (isLocationValid) {
          const result = {
            status: 'present' as const,
            message: 'Absensi berhasil! Lokasi valid.'
          };
          setScanResult(result);
          toast.success(result.message);
          
          setTimeout(() => {
            onScanSuccess(result);
          }, 2000);
        } else {
          const result = {
            status: 'failed' as const,
            message: 'Absensi gagal! Anda berada di luar radius lokasi KJP.'
          };
          setScanResult(result);
          toast.error(result.message);
        }
      }, 1500);
    }, 2000);
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
            <h2>Scan QR Code</h2>
            <p className="text-amber-200 text-sm">Arahkan kamera ke QR Code KJP</p>
          </div>
        </div>
      </div>

      <div className="p-6">
        {/* Scanner Area */}
        {!scanResult && (
          <Card className="border-amber-300 shadow-2xl overflow-hidden">
            <CardContent className="p-0">
              <div className="relative aspect-square bg-gradient-to-br from-amber-900 to-amber-950 flex items-center justify-center">
                {/* Scanner Frame */}
                <div className="relative w-64 h-64 border-4 border-white rounded-2xl">
                  <div className="absolute top-0 left-0 w-8 h-8 border-t-4 border-l-4 border-amber-400 rounded-tl-lg"></div>
                  <div className="absolute top-0 right-0 w-8 h-8 border-t-4 border-r-4 border-amber-400 rounded-tr-lg"></div>
                  <div className="absolute bottom-0 left-0 w-8 h-8 border-b-4 border-l-4 border-amber-400 rounded-bl-lg"></div>
                  <div className="absolute bottom-0 right-0 w-8 h-8 border-b-4 border-r-4 border-amber-400 rounded-br-lg"></div>
                  
                  {scanning && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-full h-1 bg-amber-400 animate-pulse"></div>
                    </div>
                  )}
                </div>

                {/* Camera Icon */}
                {!scanning && !validatingLocation && (
                  <div className="absolute">
                    <Camera className="w-16 h-16 text-white/40" />
                  </div>
                )}

                {/* Scanning Indicator */}
                {scanning && (
                  <div className="absolute bottom-8">
                    <div className="flex items-center space-x-2 bg-black/50 px-4 py-2 rounded-full">
                      <Loader2 className="w-4 h-4 text-white animate-spin" />
                      <span className="text-white text-sm">Memindai QR Code...</span>
                    </div>
                  </div>
                )}

                {/* Validating Location */}
                {validatingLocation && (
                  <div className="absolute bottom-8">
                    <div className="flex items-center space-x-2 bg-black/50 px-4 py-2 rounded-full">
                      <Loader2 className="w-4 h-4 text-white animate-spin" />
                      <span className="text-white text-sm">Memvalidasi lokasi...</span>
                    </div>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        )}

        {/* Result Card */}
        {scanResult && (
          <Card className={`border-2 shadow-2xl ${
            scanResult.status === 'present' 
              ? 'border-green-500 bg-green-50' 
              : 'border-red-500 bg-red-50'
          }`}>
            <CardContent className="p-8 text-center">
              {scanResult.status === 'present' ? (
                <>
                  <div className="inline-flex items-center justify-center bg-green-500 p-4 rounded-full mb-4">
                    <CheckCircle className="w-16 h-16 text-white" />
                  </div>
                  <h3 className="text-green-900 mb-2">Absensi Berhasil!</h3>
                  <p className="text-green-700">{scanResult.message}</p>
                  <div className="mt-4 space-y-2 text-sm text-green-800">
                    <div className="flex items-center justify-center">
                      <MapPin className="w-4 h-4 mr-2" />
                      Lokasi: Kampus UNJ
                    </div>
                    <div className="flex items-center justify-center">
                      <span>Waktu: {new Date().toLocaleTimeString('id-ID')}</span>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="inline-flex items-center justify-center bg-red-500 p-4 rounded-full mb-4">
                    <XCircle className="w-16 h-16 text-white" />
                  </div>
                  <h3 className="text-red-900 mb-2">Absensi Gagal!</h3>
                  <p className="text-red-700">{scanResult.message}</p>
                  <Button 
                    onClick={() => setScanResult(null)}
                    className="mt-6 bg-amber-900 hover:bg-amber-800"
                  >
                    Coba Lagi
                  </Button>
                </>
              )}
            </CardContent>
          </Card>
        )}

        {/* Scan Button */}
        {!scanning && !validatingLocation && !scanResult && (
          <Button
            onClick={simulateScan}
            className="w-full mt-6 h-14 bg-gradient-to-r from-amber-900 to-amber-800 hover:from-amber-800 hover:to-amber-700"
          >
            <Camera className="w-5 h-5 mr-2" />
            Mulai Scan QR Code
          </Button>
        )}

        {/* Info */}
        <Card className="mt-6 border-amber-200 bg-amber-50">
          <CardContent className="pt-6">
            <div className="flex items-start">
              <MapPin className="w-5 h-5 text-amber-700 mr-3 mt-1" />
              <div>
                <p className="text-sm text-amber-900">Pastikan Anda berada di lokasi KJP</p>
                <p className="text-xs text-amber-700 mt-1">Sistem akan memvalidasi lokasi GPS Anda secara otomatis</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
