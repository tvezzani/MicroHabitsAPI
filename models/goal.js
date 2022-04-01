module.exports = mongoose => {
  const Goal = mongoose.model(
    "goal",
    mongoose.Schema(
      {
        title: String,
        description: String,
        prompt: String,
        correctAnswer: String,
        currentAnswer: String,
        daysSuccessful: Number,
        daysTotal: Number,
        username: String
      },
      { timestamps: true }
    )
  );
  return Goal;
};