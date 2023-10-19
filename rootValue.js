const Quotes = require('inspirational-quotes');

const rootValue = () => {
  const today = new Date();
  const DAYS_OF_WEEK = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  const getRandomDiceThrow = () => Math.ceil(Math.random() * 6);
  const isTodayFriday = () => today.getDay() === 5;
  const randomCoinTossesUntilTrue = () => {
    const randomCoinToss = () => Math.random() >= 0.5;
    const results = [];
    do {
      results.push(randomCoinToss());
    } while (!results[results.length - 1]);
    return results;
  };
  return {
    greeting: 'Hello World!',
    interestingUrls: ['https://kodemia.mx', 'https://google.com'],
    randomDiceThrow: getRandomDiceThrow,
    pi: Math.PI,
    isTodayFriday,
    randomCoinTossesUntilTrue,
    today: DAYS_OF_WEEK[today.getDay()],
    workDays: DAYS_OF_WEEK.slice(1, 6),
    schrodingersCatGreeting: Math.random() >= 0.5 ? 'Meow!' : null,
    randomQuote: Quotes.getQuote()
  };
};

module.exports = rootValue;