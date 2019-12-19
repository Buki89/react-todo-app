import React from "react";
import Radio from "../components/fields/Radio";
import { Filter as FilterType } from "../types/types";

// const Menu = styled.div`
//   display: flex;
//   div {
//     margin: 0 10px;
//     &:hover {
//       cursor: pointer;
//     }
//   }
// `;

interface FilterProps {
  handleChangeFilter: (filter: string) => void;
}

// TODO:  checked - default value

class Filter extends React.PureComponent<FilterProps> {
  render() {
    const { handleChangeFilter } = this.props;
    const options = [
      {
        id: FilterType.completed,
        label: "Completed"
      },
      {
        id: FilterType.incompleted,
        label: "Incompleted"
      },
      { id: FilterType.everything, label: "Total" }
    ];
    return (
      <Radio options={options} name="filter" onChange={handleChangeFilter} />
    );
  }
}

export default Filter;
