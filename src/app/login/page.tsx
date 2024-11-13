"use client"

import { useState } from 'react';
import { Button, TextField, Typography } from '@mui/material';
import { Card, CardContent } from '@mui/material';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    // Logique de connexion ici
    console.log('Connexion:', { username, password });
    router.push('/dashboard');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Card className="w-full max-w-md">
        <CardContent>
          <Typography variant="h4" className="text-center mb-4">Connexion</Typography>
          <form onSubmit={handleLogin} className="space-y-4">
            <TextField
              label="Nom d'utilisateur"
              variant="outlined"
              fullWidth
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <TextField
              label="Mot de passe"
              type="password"
              variant="outlined"
              fullWidth
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <p>vous etes avez deja un compte ? <Link href={"/"} className='text-blue-500'>{"S'inscrire"}</Link></p>
            <Button type="submit" variant="contained" color="primary" fullWidth>
              Se connecter
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
