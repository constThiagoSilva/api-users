import jwt from "jsonwebtoken";

interface GenerateTokenDTO {
  data: string;
  secret: string;
  expires: string | number;
}

export const generateToken = async ({
  data,
  expires,
  secret,
  ...rest
}: GenerateTokenDTO) => {
  return jwt.sign({ data }, secret, { expiresIn: expires });
};
