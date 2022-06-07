{\rtf1\ansi\ansicpg1252\cocoartf2638
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx566\tx1133\tx1700\tx2267\tx2834\tx3401\tx3968\tx4535\tx5102\tx5669\tx6236\tx6803\pardirnatural\partightenfactor0

\f0\fs24 \cf0 const arrayNumbers = [5, 7, 1, 1, 2, 3, 22];\
const limit = 5;\
const change = (numbers, limit) => \{\
  let resultChange = [];\
  let sumChange = null\
  const round = numbers.length;\
  \
  \
	for(let i = 0; i < round; i++) \{\
    const result = numbers.map((number, index) => \{\
      if(number < numbers[i]) \{\
        sumChange += number;\
        console.log(sumChange)\
        if(sumChange == numbers[i]) \{\
        \}\
      \} else if (sumChange == numbers[i] || number > numbers[i]) \{\
        return \{\
          coins: number\
        \}\
      \}\
    \});\
    console.log(result)\
    return result.filter(num => num != undefined);\
  \}\
\}\
\
// change(arrayNumbers, 1)\
\
const numeros = [3,2,1, 5, 6, 8, 9];\
const mutiplicaArray = (numbers) => \{\
  const result = numbers.map(number => \{\
    return number*number;\
  \})\
  return result.sort((a, b) => a-b);\
\}\
mutiplicaArray(numeros)}