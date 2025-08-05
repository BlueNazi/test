
import React from 'react';
import { ReverseString, MostFrequent, IsPrime, DiagonalSum, SortedWords } from './questions_1_to_5';

function App() {
  return (
    <div style={{ fontFamily: 'sans-serif', padding: '20px' }}>
      <h1>تست توابع چالش فنـاپ</h1>

      <h2>1. معکوس کردن رشته</h2>
      <ReverseString input="hello" />

      <h2>2. عدد پرتکرار</h2>
      <MostFrequent array={[1, 2, 2, 3, 3, 3, 4]} />

      <h2>3. بررسی عدد اول</h2>
      <IsPrime number={7} />

      <h2>4. جمع قطر اصلی ماتریس</h2>
      <DiagonalSum matrix={[[9,8,7],[6,5,4],[3,2,1]]} />

      <h2>5. مرتب‌سازی کلمات جمله</h2>
      <SortedWords sentence="machine learning is fun" />
    </div>
  );
}

export default App;
