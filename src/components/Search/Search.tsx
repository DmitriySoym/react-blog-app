import { useToggle } from "hooks";
import { memo } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { generatePath, useNavigate } from "react-router-dom";
import { ROUTE } from "router";
import { setCurrentPageValue, setIsMenuOpen, useAppDispatch } from "store";
import { Input, StyledCancelIcon, StyledSerch, SearchWrapper } from "./styles";

interface ISerchValue {
  search: string;
}

export const Search = memo(() => {
  const { reset, register, handleSubmit } = useForm<ISerchValue>();
  const [isSearchActive, toggleSearchActive] = useToggle();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleSearchToggle = () => {
    toggleSearchActive();
    reset();
  };

  const handleSearch: SubmitHandler<ISerchValue> = (query) => {
    dispatch(setCurrentPageValue(1));
    reset();
    handleSearchToggle();
    dispatch(setIsMenuOpen());
    navigate(generatePath(ROUTE.SEARCH, { serchValue: query.search }));
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
});
