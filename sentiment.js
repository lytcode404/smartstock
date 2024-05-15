const calculateSentimentScore = require("./sentimentScore");

const tempReviewArr = [
  "This product is amazing!",
  "terrible experience, would not recommend.",
  "It's okay, nothing special.",
];

const tempReviewArr2 = [
  "This product is amazing!",
  "great experience, would recommend.",
  "It's okay, nothing special.",
];

// Calculate sentiment score
const score = calculateSentimentScore(tempReviewArr2);
console.log("Sentiment Score:", score);
