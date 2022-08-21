declare namespace Express {
    interface Request {
      user: {
        data: string;
        iat: number;
        exp: number;
      };
    }
  }