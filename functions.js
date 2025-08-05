
//  معکوس کردن رشته
function reverseString(str) {
  return str.split('').reverse().join('');
}

//  عدد پرتکرار (تعداد بیشترین تکرار)
function mostFrequent(arr) {
  if (!Array.isArray(arr) || arr.length === 0) return null;
  const freq = new Map();
  for (const num of arr) {
    freq.set(num, (freq.get(num) || 0) + 1);
  }
  let maxCount = -1;
  let mostFreq = null;
  for (const [num, count] of freq.entries()) {
    if (count > maxCount) {
      maxCount = count;
      mostFreq = num;
    }
  }
  return mostFreq;
}

//  بررسی عدد اول
function isPrime(n) {
  if (typeof n !== 'number' || !Number.isInteger(n) || n < 2) return false;
  if (n === 2) return true;
  if (n % 2 === 0) return false;
  const limit = Math.sqrt(n);
  for (let i = 3; i <= limit; i += 2) {
    if (n % i === 0) return false;
  }
  return true;
}

//  جمع قطر اصلی ماتریس مربعی
function diagonalSum(matrix) {
  if (!Array.isArray(matrix) || matrix.length === 0) {
    throw new Error('ورودی باید ماتریس غیرتهی باشد.');
  }
  const n = matrix.length;
  for (const row of matrix) {
    if (!Array.isArray(row) || row.length !== n) {
      throw new Error('ماتریس باید مربعی باشد.');
    }
  }
  let sum = 0;
  for (let i = 0; i < n; i++) {
    const val = matrix[i][i];
    if (typeof val !== 'number') {
      throw new Error('عنصرهای قطر اصلی باید عددی باشند.');
    }
    sum += val;
  }
  return sum;
}

//  مرتب‌سازی کلمات در جمله 
function sortWords(sentence) {
  if (typeof sentence !== 'string') return '';
  const words = sentence.trim().split(/\s+/);
  words.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
  return words.join(' ');
}

// تست توابع
console.log('reverseString("hello") =>', reverseString("hello"));
console.log('mostFrequent([1,2,2,3,3,3,4]) =>', mostFrequent([1,2,2,3,3,3,4]));
console.log('isPrime(7) =>', isPrime(7));
console.log('diagonalSum([[9,8,7],[6,5,4],[3,2,1]]) =>', diagonalSum([[9,8,7],[6,5,4],[3,2,1]]));
console.log('sortWords("machine learning is fun") =>', sortWords("machine learning is fun"));
