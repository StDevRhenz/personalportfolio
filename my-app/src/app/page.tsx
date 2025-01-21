// filepath: /c:/Users/Ganotice/OneDrive/Desktop/OWN WEBSITE/Portfolio/personalPortfolio2025/PersonalPortfolio-1/my-app/src/app/page.tsx
import React from 'react';
import Calculator from './components/Calculator';
import Image from 'next/image';

const Home: React.FC = () => {
  return (
    <div>
      <center>
      <h1>Simple Calculator</h1>
      </center>

      <Calculator />
    </div>
  );
};

export default Home;