export class Captcha {
  constructor(
    public readonly image: string,
    public readonly mimeType: string,
    public readonly question: string,
    public readonly response: string,
  ) {}
}
