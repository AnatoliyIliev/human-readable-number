module.exports = function toReadable(number) {
  let dozens = [
    '',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
    'ten',
    'eleven',
    'twelve',
    'thirteen',
    'fourteen',
    'fifteen',
    'sixteen',
    'seventeen',
    'eighteen',
    'nineteen',
  ];
  let doz = [
    '',
    '',
    'twenty',
    'thirty',
    'forty',
    'fifty',
    'sixty',
    'seventy',
    'eighty',
    'ninety',
  ];

  const numToString = number.toString();

  if (number === 0) {
    return 'zero';
  } else if (number < 20) {
    return dozens[number];
  } else if (number > 19 && number < 100) {
    return `${doz[numToString[0]]} ${dozens[numToString[1]]}`.trim();
  } else if (number >= 100 && number < 1000) {
    if (number % 100 < 20) {
      return `${dozens[numToString[0]] + ' hundred'} ${
        dozens[number % 100]
      }`.trim();
    } else {
      return `${dozens[numToString[0]] + ' hundred'} ${doz[numToString[1]]} ${
        dozens[numToString[2]]
      }`.trim();
    }
  }
};

// console.log(toReadable(100));
//

//
//
//   let numberStr = number.toString();
//   if (number === 0) {
//     return 'zero';
//   } else if (number < 20) {
//     return dozens[number];
//   } else if (number < 100) {
//     return `${doz[numberStr.charAt(0)]} ${dozens[numberStr.charAt(1)]}`.trim();
//   } else if (number > 99 && number % 100 != 0) {
//     return `${dozens[numberStr.charAt(0)] + ' hundred'} ${toReadable(
//       number % 100,
//     )}`.trim();
//   } else {
//     return `${dozens[numberStr.charAt(0)] + ' hundred'}`;
//   }
// };
