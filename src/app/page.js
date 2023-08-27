'use client'
import Image from 'next/image'
import confetti from 'canvas-confetti';

import styles from './page.module.css'

import { useEffect } from 'react';

export default function Home() {

  function handleConfetti(event) {
    const x = event.clientX / window.innerWidth;
    const y = event.clientY / window.innerHeight;
    confetti({
      origin: { x, y }
    });
  }

  useEffect(() => {
    document.addEventListener('click', handleConfetti);
    confetti();
    return () => {
      document.removeEventListener('click', handleConfetti);
    };
  }, []);

  return (<p> Edgar Puto Amo </p>)
}
