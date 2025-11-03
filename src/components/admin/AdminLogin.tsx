import { useState } from 'react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { ShieldCheck, Lock, User } from 'lucide-react';
import { toast } from 'sonner@2.0.3';

interface AdminLoginProps {
  onLogin: () => void;
  onBackToStudent: () => void;
}

export function AdminLogin({ onLogin, onBackToStudent }: AdminLoginProps) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (username && password) {
      // Mock login - no password validation for demo
      toast.success('Login admin berhasil!');
      onLogin();
    } else {
      toast.error('Mohon isi semua field!');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-900 via-amber-800 to-amber-950 flex flex-col items-center justify-center p-6">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center bg-white/10 backdrop-blur-sm p-4 rounded-full mb-4 shadow-lg">
            <ShieldCheck className="w-12 h-12 text-white" />
          </div>
          <h1 className="text-white">KSI Admin Dashboard</h1>
          <p className="text-amber-200 mt-2">Sistem Manajemen Absensi KJP</p>
        </div>

        <Card className="border-amber-700 shadow-2xl">
          <CardHeader>
            <CardTitle className="text-amber-900">Login Pengurus</CardTitle>
            <CardDescription>Masukkan kredensial admin Anda</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="username" className="text-amber-900">Username</Label>
                <div className="relative">
                  <User className="absolute left-3 top-3 h-5 w-5 text-amber-600" />
                  <Input
                    id="username"
                    type="text"
                    placeholder="Masukkan username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
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
                Login sebagai Admin
              </Button>
            </form>
            <p className="text-center text-amber-600 mt-4 text-sm">
              Demo: gunakan username dan password apa saja
            </p>
            <div className="mt-4 text-center">
              <Button
                variant="link"
                onClick={onBackToStudent}
                className="text-amber-700 hover:text-amber-900"
              >
                Kembali ke Login Mahasiswa
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
