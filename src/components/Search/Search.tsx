import { useToggle } from "hooks";
import { ChangeEvent, HTMLInputTypeAttribute, useEffect } from "react";
import { SearchIcon } from "assets";
import { Input } from "./styles";
import { CancelIcon } from "assets";

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
      {!isSearchActive ? (
        <>
          <Input {...props} />{" "}
          <CancelIcon
            onClick={handleSearch}
            style={{ position: "fixed", right: "24%", cursor: "pointer" }}
          />
        </>
      ) : (
        <SearchIcon onClick={handleSearch} style={{ cursor: "pointer" }} />
      )}
    </>
  );
};
