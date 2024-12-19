'use client';

import React, { useEffect, useState } from 'react';
import { Box, Typography, LinearProgress, Avatar } from '@mui/material';
import { useRouter } from 'next/navigation'; // For navigation in Next.js
import SparLogo from './assets/img/spar-logo.png'; // Ensure the path to SparLogo is correct

const App: React.FC = () => {
  const [progress, setProgress] = useState(0);
  const [message, setMessage] = useState('');
  const router = useRouter();

  useEffect(() => {
    const loaderDuration = 10000; // 10 seconds

    // Progress simulation
    const progressInterval = setInterval(() => {
      setProgress((prev) => Math.min(prev + 100 / (loaderDuration / 100), 100));
    }, 100);

    // Typing effect for the message
    const welcomeMessage = "WWelcome to Spar...";
    let index = 0;
    const typingInterval = setInterval(() => {
      setMessage((prev) => prev + welcomeMessage.charAt(index));
      if (++index === welcomeMessage.length) clearInterval(typingInterval);
    }, 100);

    // Redirect after 10 seconds
    const redirectTimeout = setTimeout(() => {
      router.push('/web/'); // Redirect to the destination
    }, loaderDuration);

    return () => {
      clearInterval(progressInterval);
      clearInterval(typingInterval);
      clearTimeout(redirectTimeout);
    };
  }, [router]);

  return (
    <Box
      height="100vh"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      bgcolor="background.default"
      color="text.primary"
      textAlign="center"
    >
      <Avatar
        src={SparLogo.src} 
        alt="Spar Logo"
        sx={{
          width: 100,
          height: 50,
          marginBottom: 3,
          animation: "fadeInOut 2s infinite",
        }}
      />
      
      <Typography variant="h6" mb={2}>
        {message}
      </Typography>

      <Box sx={{ width: "20%" }}>
        <LinearProgress
          variant="determinate"
          value={progress}
          sx={{
            height: 10,
            borderRadius: 5,
            backgroundColor: "#e0e0e0",
            '& .MuiLinearProgress-bar': { backgroundColor: "#1F67EA" },
          }}
        />
      </Box>
      <style jsx>{`
        @keyframes fadeInOut {
          0%,
          100% {
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
        }
      `}</style>
    </Box>
  );
};

export default App;
