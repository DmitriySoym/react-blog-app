import { StyledForm, Label, Input, Button, Error, Text, ResetPass } from "./styles";
import { useForm, SubmitHandler } from "react-hook-form";
import { Link } from "react-router-dom";
import { ROUTE } from "router";

interface ISignUpForm {
  name: string;
  surname: string;
  email: string;
  password: string;
}

export const SignInForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ISignUpForm>();

  const onSubmit: SubmitHandler<ISignUpForm> = (data: any) => {};
  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <Label>
        Email
        <Input type="email" placeholder="Your email" {...register("email", { required: true })} />
      </Label>
      <Label>
        Password
        <Input
          type="password"
          placeholder="Your password"
          {...register("password", {
            required: true,
          })}
        />
        <ResetPass>Forgot password?</ResetPass>
      </Label>

      <Button type="submit">Sign In</Button>
      <Text>
        Don’t have an account?{" "}
        <Link to={ROUTE.REG}>
          <span>Sign Up</span>
        </Link>
      </Text>
    </StyledForm>
  );
};
