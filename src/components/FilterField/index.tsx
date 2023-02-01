import { MagnifyingGlass } from 'phosphor-react';
import {
  ChangeEvent,
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from 'react';
import { InputField } from '../InputField';
import { FilterFieldContainer } from './styles';

interface FilterFieldProps {
  placeholder: string;
  itemsList: any[];
  onFilter: Dispatch<SetStateAction<any>>;
  filter: string;
}

export const FilterField = ({
  placeholder,
  itemsList,
  filter,
  onFilter,
}: FilterFieldProps) => {
  const [filterSearch, setFilterSearch] = useState('');

  const filteredPosts = itemsList?.filter((item) =>
    item[filter].toLowerCase().includes(filterSearch)
  );

  useEffect(() => {
    onFilter(filteredPosts);
  }, [filterSearch]);

  const handleFilterSearch = (event: ChangeEvent<HTMLInputElement>) => {
    setFilterSearch(event.target.value.toLowerCase());
  };

  return (
    <FilterFieldContainer>
      <InputField
        label={placeholder}
        placeholder={placeholder}
        icon={<MagnifyingGlass />}
        onChange={handleFilterSearch}
        srLabel
      />
    </FilterFieldContainer>
  );
};
