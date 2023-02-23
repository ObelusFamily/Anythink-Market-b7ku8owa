module.exports = {
  secret: process.env.NODE_ENV === 'production' ? process.env.SECRET : 'secret',
  openai_token: process.env.OPENAITOKEN
};
