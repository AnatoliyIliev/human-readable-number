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

  let numberStr = number.toString();
  if (number === 0) {
    return 'zero';
  } else if (number < 20) {
    return dozens[number];
  } else if (number < 100) {
    return `${doz[numberStr.charAt(0)]} ${dozens[numberStr.charAt(1)]}`.trim();
  } else if (number > 99 && number % 100 != 0) {
    return `${dozens[numberStr.charAt(0)] + ' hundred'} ${toReadable(
      number % 100,
    )}`.trim();
  } else {
    return `${dozens[numberStr.charAt(0)] + ' hundred'}`;
  }
};
