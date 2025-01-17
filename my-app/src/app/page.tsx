// filepath: /c:/Users/Ganotice/OneDrive/Desktop/OWN WEBSITE/Portfolio/personalPortfolio2025/PersonalPortfolio-1/my-app/src/app/page.tsx
import React from 'react';
import Calculator from './components/Calculator';
import Image from 'next/image';

const Home: React.FC = () => {
  return (
    <div>
      <h1>Simple Calculator</h1>
      <Calculator />
      <Image
        src="/images/nextjs.png"
        alt="Next.js logo"
        width={200}
        height={200}
      />
    </div>
  );
};

export default Home;