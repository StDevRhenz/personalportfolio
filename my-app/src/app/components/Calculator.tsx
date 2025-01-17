// filepath: /c:/Users/Ganotice/OneDrive/Desktop/OWN WEBSITE/Portfolio/personalPortfolio2025/PersonalPortfolio-1/my-app/src/app/components/Calculator.tsx
"use client";

import React, { useState } from 'react';

const Calculator: React.FC = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState<number | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleCalculate = () => {
    try {
      // Evaluate the input as a mathematical expression
      const evalResult = eval(input);
      setResult(evalResult);
    } catch (error) {
      setResult(null);
      alert('Invalid expression');
    }
  };

  return (
    <div>
      <input
        type="text"
        value={input}
        onChange={handleInputChange}
        placeholder="Enter expression"
        
      />
      <button onClick={handleCalculate}>Calculate</button>
      {result !== null && <div>Result: {result}</div>}
    </div>
  );
};

export default Calculator;