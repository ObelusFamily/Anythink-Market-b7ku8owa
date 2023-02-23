module.exports = {
  secret: process.env.NODE_ENV === 'production' ? process.env.SECRET : 'secret',
  openai_token: process.env.NODE_ENV === 'production' ? process.env.OPENAITOKEN : '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',
};
