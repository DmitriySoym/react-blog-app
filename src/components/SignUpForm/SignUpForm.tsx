import { StyledForm, Label, Input, Button, Error } from "./styles";
import { useForm, SubmitHandler } from "react-hook-form";

interface ISignUpForm {
  name: string;
  surname: string;
  email: string;
  password: string;
}

export const SignUpForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ISignUpForm>();

  const onSubmit: SubmitHandler<ISignUpForm> = (data: any) => {
    console.log(data);
  };
  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <Label>
        Your name
        <Input
          type="text"
          placeholder="Your name"
          {...register("name", {
            required: "Please, enter your name",
            minLength: { value: 3, message: "Name length minimum 3 symbols" },
            maxLength: { value: 20, message: "Name length maximum 20 symbols" },
          })}
        />
        {errors.name && <Error>{errors.name.message}</Error>}
      </Label>
      <Label>
        Your surname
        <Input
          type="text"
          placeholder="Your surname"
          {...register("surname", {
            required: "Please, enter your surname",
            minLength: { value: 3, message: "Surname length minimum 3 symbols" },
            maxLength: { value: 20, message: "Surname length maximum 20 symbols" },
          })}
        />
        {errors.surname && <Error>{errors.surname.message}</Error>}
      </Label>
      <Label>
        Your email
        <Input type="email" placeholder="Your email" {...register("email", { required: true })} />
      </Label>
      <Label>
        Set password
        <Input
          type="password"
          placeholder="Enter password"
          {...register("password", {
            required: true,
            minLength: { value: 6, message: "Password length minimum 6 symbols" },
          })}
        />
      </Label>
      {errors.password && <Error>{errors.password.message}</Error>}
      <Button type="submit">Sign Up</Button>
    </StyledForm>
  );
};
