import { Select } from "@chakra-ui/react";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { todoListFilterState } from "../recoil/atoms/todoListAtom";

export function TodoListFilters() {
  const [filter, setFilter] = useState("Show All");

  const updateFilter = ({ target: { value } }: React.ChangeEvent<HTMLSelectElement>) => {
    setFilter(value);
  };

  return (
    <>
      Filter:
      <Select value={filter} onChange={updateFilter}>
        <option value="Show All">Alle</option>
        <option value="Show Completed">Ferdige</option>
        <option value="Show Uncompleted">Uferdige</option>
      </Select>
    </>
  );
}
