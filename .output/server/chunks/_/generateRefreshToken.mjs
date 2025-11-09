import jwt from 'jsonwebtoken';
import { s as setCookie } from '../runtime.mjs';

function generateJwtToken(user, event) {
  const secretKey = process.env.NUXT_JWT_SECRET;
  if (!secretKey) {
    throw new Error("JWT_SECRET is not defined");
  }
  const tokenPayload = {
    id: user.id,
    username: user.username,
    exp: Math.round(new Date(Date.now() + 15 * 60 * 1e3).getTime() / 1e3)
    // 15 دقیقه
  };
  try {
    return jwt.sign(tokenPayload, secretKey);
  } catch (error) {
    console.error("Error generating JWT:", error);
    throw new Error("Failed to generate JWT");
  }
}

function generateRefreshToken(event, userId) {
  const secretKey = process.env.NUXT_JWT_SECRET;
  if (!secretKey) {
    throw new Error("JWT_SECRET is not defined in environment variables");
  }
  const tokenPayload = userId ? { userId } : {};
  try {
    const token = jwt.sign(tokenPayload, secretKey, { expiresIn: "7d" });
    const expires = new Date(Date.now() + 7 * 24 * 60 * 60 * 1e3);
    setCookie(event, "refreshToken", token, {
      expires,
      path: "/",
      httpOnly: true,
      secure: true,
      // فقط در تولید HTTPS
      sameSite: "strict"
      // جلوگیری از CSRF
    });
    console.log("Generated refreshToken:", token);
    return token;
  } catch (error) {
    console.error("Error generating refresh token:", error);
    throw new Error("Failed to generate refresh token");
  }
}

export { generateJwtToken as a, generateRefreshToken as g };
