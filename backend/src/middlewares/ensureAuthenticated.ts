import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";

import authConfig from "../config/auth";

interface ITokenPayload {
  iat: number;
  exp: number;
  sub: string;
}

export default function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction
): void {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    throw new Error("Ausencia de Token");
  }

  const [, token] = authHeader.split(" ");

  const { secret } = authConfig.jwt;

  try {
    const decoded = verify(token, secret);

    const { sub } = decoded as ITokenPayload;

    request.usuario = {
      id: sub,
    };

    return next();
  } catch {
    throw new Error("Token Invalido");
  }
}
