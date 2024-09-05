export class ChangeAccountPassword {
  constructor(
    public readonly message: string,
    public readonly isPasswordChange: boolean
  ) {}
}
