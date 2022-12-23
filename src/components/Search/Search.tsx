import { useToggle } from "hooks";
import { ChangeEvent, HTMLInputTypeAttribute, useEffect } from "react";
import { Input, StyledCancelIcon, StyledSerch } from "./styles";

interface ISearch {
  type: HTMLInputTypeAttribute;
  placeholder: string;
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
          <Input {...props} />
          <StyledCancelIcon onClick={handleSearch} />
        </>
      ) : (
        <StyledSerch onClick={handleSearch} />
      )}
    </>
  );
};
