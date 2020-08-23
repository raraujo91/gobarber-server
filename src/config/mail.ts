interface IMailConfig {
  driver: 'ethereal' | 'ses';
  defaults: {
    from: {
      email: string;
      name: string;
    };
  };
}

export default {
  defaults: {
    from: {
      email: 'renan@renanalv.es',
      name: 'Renan Alves',
    },
  },
  driver: process.env.MAIL_DRIVER || 'ethereal',
} as IMailConfig;
