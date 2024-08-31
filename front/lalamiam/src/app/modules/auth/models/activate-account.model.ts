export enum ActivatedAccountStatus {
  SUCCESS,
  FAILURE,
  ALREADY_ACTIVATED
}

export class ActivateAccountResponse {
  constructor(
    public readonly accountActivatedStatus: ActivatedAccountStatus,
    public readonly message: string){}
}
