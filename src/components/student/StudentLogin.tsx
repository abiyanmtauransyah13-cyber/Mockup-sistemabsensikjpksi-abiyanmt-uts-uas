import { useState } from 'react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { GraduationCap, Lock, User } from 'lucide-react';
import { toast } from 'sonner@2.0.3';

interface StudentLoginProps {
  onLogin: (nim: string, name: string) => void;
}

export function StudentLogin({ onLogin }: StudentLoginProps) {
  const [nim, setNim] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (nim && password) {
      // Mock login - no password validation for demo
      toast.success('Login berhasil!');
      onLogin(nim, `Mahasiswa ${nim}`);
    } else {
      toast.error('Mohon isi semua field!');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-amber-100 flex flex-col items-center justify-center p-6">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center bg-gradient-to-br from-amber-900 to-amber-800 p-4 rounded-full mb-4 shadow-lg">
            <GraduationCap className="w-12 h-12 text-white" />
          </div>
          <h1 className="text-amber-900">KSI Smart Attendance</h1>
          <p className="text-amber-700 mt-2">Sistem Absensi KJP</p>
        </div>

        <Card className="border-amber-200 shadow-xl">
          <CardHeader>
            <CardTitle className="text-amber-900">Login Mahasiswa</CardTitle>
            <CardDescription>Masukkan NIM dan password Anda</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="nim" className="text-amber-900">NIM</Label>
                <div className="relative">
                  <User className="absolute left-3 top-3 h-5 w-5 text-amber-600" />
                  <Input
                    id="nim"
                    type="text"
                    placeholder="Masukkan NIM"
                    value={nim}
                    onChange={(e) => setNim(e.target.value)}
                    className="pl-10 border-amber-300 focus:border-amber-500"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="password" className="text-amber-900">Password</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 h-5 w-5 text-amber-600" />
                  <Input
                    id="password"
                    type="password"
                    placeholder="Masukkan password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="pl-10 border-amber-300 focus:border-amber-500"
                  />
                </div>
              </div>
              <Button 
                type="submit" 
                className="w-full bg-gradient-to-r from-amber-900 to-amber-800 hover:from-amber-800 hover:to-amber-700"
              >
                Login
              </Button>
            </form>
            <p className="text-center text-amber-600 mt-4 text-sm">
              Demo: gunakan NIM dan password apa saja
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
