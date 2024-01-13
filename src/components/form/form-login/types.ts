export type Inputs = {
  email?: string;
  password?: string;
};

export interface IFormLogin {
  onSubmitHandler: (values: Inputs) => void;
  onClickHandler?: () => void;
  errorMessage?: string;
}
