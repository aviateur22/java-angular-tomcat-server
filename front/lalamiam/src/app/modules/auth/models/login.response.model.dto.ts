export interface LoginResponseDto {
  jwt: string,
  email: string,
  id: BigInt,
  roles: string[],
  message: string
}
