import { StyledForm, Label, Input, Button, Error, Text } from "./styles";
import { useForm, SubmitHandler } from "react-hook-form";
import { setUser, useAppDispatch } from "store";
import { createUserWithEmailAndPassword, getAuth, updateProfile } from "firebase/auth";
import { ROUTE } from "router";
import { Link, useNavigate } from "react-router-dom";

interface ISignUpForm {
  name: string;
  surname: string;
  email: string;
  password: string;
}

export const SignUpForm = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ISignUpForm>();

  const dispatch = useAppDispatch();

  const onSubmit: SubmitHandler<ISignUpForm> = ({ password, email, name, surname }) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        dispatch(
          setUser({
            email: email,
            name: name,
            isAuth: true,
          }),
        );
        navigate(ROUTE.HOME);
      })
      .then(() => {
        const currentUser = auth.currentUser;
        if (currentUser) {
          updateProfile(currentUser, {
            displayName: name,
          });
        }
      });
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
      <Text>
        Already have an account? <Link to={ROUTE.AUTH}>Sign In</Link>
      </Text>
    </StyledForm>
  );
};
