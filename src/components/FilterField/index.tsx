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

interface FilterFieldProps<T> {
  placeholder: string;
  itemsList: T[];
  onFilter: Dispatch<SetStateAction<T>>;
  filter: string;
}

export const FilterField = <T,>({
  placeholder,
  itemsList,
  filter,
  onFilter,
}: FilterFieldProps<T>) => {
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
