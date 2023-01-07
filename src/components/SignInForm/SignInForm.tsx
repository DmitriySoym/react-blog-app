import { StyledForm, Label, Input, Button, Error, Text, ResetPass } from "./styles";
import { useForm, SubmitHandler } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { ROUTE } from "router";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { setUser, useAppDispatch } from "store";

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
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<ISignUpForm> = ({ email, password }) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password).then(({ user }) => {
      console.log(user);
      dispatch(
        setUser({
          email: user.email,
          name: user.displayName,
          isAuth: true,
        }),
      );

      navigate(ROUTE.HOME);
    });
    // .catch((error) => {
    // });
  };

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
        Don’t have an account? <Link to={ROUTE.REG}>Sign Up</Link>
      </Text>
    </StyledForm>
  );
};
