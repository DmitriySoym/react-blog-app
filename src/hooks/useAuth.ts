import { useAppSelector } from "store";

export const useAuth = () => {
  const { email, name } = useAppSelector((state) => state.user);

  return {
    isAuth: !!email,
    name,
    email,
  };
};
