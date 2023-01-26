import { useToggle } from "hooks";
import { ChangeEvent, FormEvent, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { generatePath, useNavigate } from "react-router-dom";
import { ROUTE } from "router";
import { getMenuBurgerStatus, setIsMenuOpen, useAppDispatch, useAppSelector } from "store";
import { Input, StyledCancelIcon, StyledSerch, SearchWrapper, ButtonSubmit } from "./styles";

interface ISerchValue {
  search: string;
}

export const Search = () => {
  const { reset, register, handleSubmit } = useForm<ISerchValue>();
  const [isSearchActive, toggleSearchActive] = useToggle();
  const navigate = useNavigate();
  const { isMenuOpen } = useAppSelector(getMenuBurgerStatus);
  const dispatch = useAppDispatch();
  const handleMenuToggle = () => {
    dispatch(setIsMenuOpen());
  };

  const handleSearchToggle = () => {
    toggleSearchActive();
    reset();
    handleMenuToggle();
  };

  const handleSearch: SubmitHandler<ISerchValue> = (query) => {
    navigate(generatePath(ROUTE.SEARCH, { serchValue: query.search }));
    reset();
    handleSearchToggle();
    handleMenuToggle();
  };

  return (
    <>
      {!isSearchActive ? (
        <StyledSerch onClick={handleSearchToggle} />
      ) : (
        <SearchWrapper onSubmit={handleSubmit(handleSearch)}>
          <Input type="serch" placeholder="Search..." {...register("search")} />
          <StyledCancelIcon onClick={handleSearchToggle} />
        </SearchWrapper>
      )}
    </>
  );
};
