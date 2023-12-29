import Camp from '@/components/Camp';
import Features from '@/components/Features';
import GetApp from '@/components/GetApp';
import Hero from '@/components/Hero';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <Hero />
      <Camp />
      <Features />
      <GetApp />
    </>
  );
}
