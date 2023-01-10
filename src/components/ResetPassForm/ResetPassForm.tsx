import { useForm, SubmitHandler } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { ROUTE } from "router";
import { setUser, useAppDispatch } from "store";
import { Label, Input, Button, Text, StyledForm } from "./styles";
// import {resetUserPassword} from "firebase"
import { getAuth, sendPasswordResetEmail } from "firebase/auth";

interface IResetPassForm {
  email: string;
}

export const ResetPassForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IResetPassForm>();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<IResetPassForm> = ({ email }) => {
    const auth = getAuth();
    sendPasswordResetEmail(auth, email)
      .then(() => {
        // Password reset email sent!
        navigate(ROUTE.HOME);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  };

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <Label>
        Email
        <Input
          type="email"
          placeholder="Your email"
          {...register("email", { required: { value: true, message: "Please, enter your email" } })}
        />
      </Label>

      <Button type="submit">Sign In</Button>
      <Text>
        Don’t have an account? <Link to={ROUTE.REG}>Sign Up</Link>
      </Text>
    </StyledForm>
  );
};
