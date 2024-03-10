import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";
import useGameQueryStore from "../store";
import { useNavigate } from "react-router-dom";

interface Props {
  onSearch: (searchText: string) => void;
}

const SearchInput = () =>
  // { onSearch }: Props
  {
    const ref = useRef<HTMLInputElement>(null);
    // use selector so that when any value in the store changes this component won't rerender
    // and this component only depend on setSearchText and not the whole store value
    const setSearchText = useGameQueryStore((s) => s.setSearchText); // selector

    const navigate = useNavigate();

    return (
      <form
        onSubmit={(event) => {
          event.preventDefault();
          if (ref.current) {
            setSearchText(ref.current.value);
            navigate("/");
          }
        }}
      >
        <InputGroup>
          <InputLeftElement children={<BsSearch />} />
          <Input
            ref={ref}
            borderRadius={20}
            placeholder="Search games..."
            variant="filled"
          />
        </InputGroup>
      </form>
    );
  };

export default SearchInput;
