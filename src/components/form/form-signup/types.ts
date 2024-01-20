export type Inputs = {
  phone: string;
  email: string;
  password: string;
  password2: string;
};

export interface IFormSignup {
  onSubmitHandler?: (values: Inputs) => void;
  errorMessage?: string;
}
