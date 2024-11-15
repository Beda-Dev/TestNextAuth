"use client"

import { useState } from 'react';
import { Button, TextField, Typography } from '@mui/material';
import { Card, CardContent } from '@mui/material';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function Signup() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    // Logique d'inscription ici
    console.log('Inscription:', { username, password });
    router.push('/login');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Card className="w-full max-w-md">
        <CardContent>
          <Typography variant="h4" className="text-center mb-4">Inscription</Typography>
          <form onSubmit={handleSignup} className="space-y-4">
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
            <p>vous etes deje inscrit ? <Link href={"/login"} className='text-blue-500'>{"Se connecter"}</Link></p>
            <Button type="submit" variant="contained" color="primary" fullWidth>
              {"S'inscrire"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
