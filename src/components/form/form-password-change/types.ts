export type Inputs = {
  password: string;
  newPassword: string;
};

export interface IFormPassword {
  onSubmitHandler?: (values: Inputs) => void;
  errorMessage?: string;
}
