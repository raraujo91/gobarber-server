export default {
  jwt: {
    secret: process.env.APP_SECRET || 'secretKey',
    expiresIn: '1d',
  },
};
