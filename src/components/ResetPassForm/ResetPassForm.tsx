import { useForm, SubmitHandler } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { ROUTE } from "router";
import { Label, Input, Button, Text, StyledForm } from "./styles";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";

interface IResetPassForm {
  email: string;
}

export const ResetPassForm = () => {
  const {
    register,
    handleSubmit,
    /* eslint-disable */
    formState: { errors },
    /* eslint-enable */
  } = useForm<IResetPassForm>();
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<IResetPassForm> = ({ email }) => {
    const auth = getAuth();
    sendPasswordResetEmail(auth, email)
      .then(() => {
        navigate(ROUTE.HOME);
      })
      .catch((error) => {
        const errorCode = error.code;

        if (errorCode) {
          alert("User not found");
        }
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
