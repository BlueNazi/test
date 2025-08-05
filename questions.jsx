
import React from 'react';

//  معکوس کردن رشته
export function ReverseString({ input }) {
  const reversed = input.split('').reverse().join('');
  return <p>معکوس "{input}" برابر است با: {reversed}</p>;
}

//  عدد پرتکرار
export function MostFrequent({ array }) {
  const freq = {};
  array.forEach(num => freq[num] = (freq[num] || 0) + 1);
  const most = Object.entries(freq).reduce((a, b) => a[1] >= b[1] ? a : b);
  return <p>عدد پرتکرار: {most[0]}</p>;
}

//  بررسی عدد اول
export function IsPrime({ number }) {
  const isPrime = (n) => {
    if (n < 2) return false;
    if (n === 2) return true;
    if (n % 2 === 0) return false;
    for (let i = 3; i <= Math.sqrt(n); i += 2) {
      if (n % i === 0) return false;
    }
    return true;
  };
  return <p>آیا {number} عدد اول است؟ {isPrime(number) ? "بله" : "خیر"}</p>;
}

//  جمع قطر اصلی ماتریس مربعی
export function DiagonalSum({ matrix }) {
  const n = matrix.length;
  const sum = matrix.reduce((acc, row, i) => acc + row[i], 0);
  return <p>جمع قطر اصلی ماتریس: {sum}</p>;
}

//  مرتب‌سازی کلمات جمله
export function SortedWords({ sentence }) {
  const sorted = sentence.trim().split(/\s+/)
    .sort((a, b) => a.localeCompare(b))
    .join(' ');
  return <p>جمله مرتب‌شده: {sorted}</p>;
}
