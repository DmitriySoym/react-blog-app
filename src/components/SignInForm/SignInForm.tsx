import { StyledForm, Label, Input, Button, Text, ResetPass } from "./styles";
import { useForm, SubmitHandler } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { ROUTE } from "router";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { setUser, useAppDispatch } from "store";

interface ISignUpForm {
  name: string;
  email: string;
  password: string;
}

export const SignInForm = () => {
  const {
    register,
    handleSubmit,
    /* eslint-disable */
    formState: { errors },
    /* eslint-enable */
  } = useForm<ISignUpForm>();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<ISignUpForm> = ({ email, password }) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        dispatch(
          setUser({
            email: user.email,
            name: user.displayName,
            isAuth: true,
          }),
        );
        navigate(ROUTE.HOME);
      })
      .catch((error) => {
        const errorCode = error.code;
        alert(errorCode.slice(5).replace(/-/gi, " "));
      });
  };

  return (
    <StyledForm
      onSubmit={handleSubmit(onSubmit)}
      animate={{ scale: 1 }}
      initial={{ scale: 0 }}
      exit={{ scale: 0 }}
      transition={{ ease: "easeInOut", duration: 0.5 }}
    >
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
        <Link to={ROUTE.RESET_PASSWORD}>
          <ResetPass>Forgot password?</ResetPass>
        </Link>
      </Label>

      <Button type="submit">Sign In</Button>
      <Text>
        Don’t have an account? <Link to={ROUTE.REG}>Sign Up</Link>
      </Text>
    </StyledForm>
  );
};
