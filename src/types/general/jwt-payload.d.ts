export interface JWTPayload {
  email: string;
  _id: string;
  expiration?: Date;
}
