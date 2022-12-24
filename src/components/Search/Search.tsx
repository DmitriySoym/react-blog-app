import { useToggle } from "hooks";
import { ChangeEvent, HTMLInputTypeAttribute, useEffect } from "react";
import { Input, StyledCancelIcon, StyledSerch } from "./styles";

interface ISearch {
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const Search = (props: ISearch) => {
  const [isSearchActive, toggleSearchActive] = useToggle(true);
  const handleSearch = () => {
    toggleSearchActive();
  };
  useEffect(() => {
    handleSearch();
  }, []);

  return (
    <>
      {isSearchActive ? (
        <>
          <Input type="search" placeholder="Search..." {...props} />
          <StyledCancelIcon onClick={handleSearch} />
        </>
      ) : (
        <StyledSerch onClick={handleSearch} />
      )}
    </>
  );
};
