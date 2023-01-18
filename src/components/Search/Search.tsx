import { useToggle } from "hooks";
import { ChangeEvent, useEffect } from "react";
import { Input, StyledCancelIcon, StyledSerch, SearchWrapper } from "./styles";

interface ISearch {
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const Search = (props: ISearch) => {
  const [isSearchActive, toggleSearchActive] = useToggle(false);
  const handleSearch = () => {
    toggleSearchActive();
  };

  useEffect(() => {
    handleSearch();
  }, []);

  return (
    <>
      {isSearchActive ? (
        <StyledSerch onClick={handleSearch} />
      ) : (
        <SearchWrapper>
          <Input type="search" placeholder="Search..." {...props} />
          <StyledCancelIcon onClick={handleSearch} />
        </SearchWrapper>
      )}
    </>
  );
};
