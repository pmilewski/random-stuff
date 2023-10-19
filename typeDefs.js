const { gql } = require('apollo-server');

const typeDefs = gql`
  type Query {
    greeting: String!,
    interestingUrls: [String!]!,
    randomDiceThrow: Int!
    pi: Float!
    isTodayFriday: Boolean!
    randomCoinTossesUntilTrue: [Boolean!]!
    today: DayOfWeek!
    workDays: [DayOfWeek!]!
    schrodingersCatGreeting: String,
    randomQuote: Quote!
  }

  type Quote {
    text: String!
    author: String!
  }

  enum DayOfWeek {
    MON
    TUE
    WED
    THU
    FRI
    SAT
    SUN
  }
`;

module.exports = typeDefs;
