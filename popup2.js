const Sentiment = require("sentiment");
const sentiment = new Sentiment();
//  import Sentiment from "sentiment";

function calculateSentimentScore(reviewArr) {
  let score = 0;

  reviewArr.forEach((text) => {
    score += sentiment.analyze(text).score;
  });

  if (score > 0) {
    return 1;
  } else if (score < 0) {
    return -1;
  } else {
    return 0;
  }
}
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
console.log(tempReviewArr2);
console.log("Sentiment Score:", score);
