import { ErrorMessage, ToggleGroupContainer, ToggleGroupItem } from './styles';

interface ToggleGroupItemProps {
  label: string | number | JSX.Element;
  value: string;
}

interface ToggleGroupProps {
  items: ToggleGroupItemProps[];
  value?: string;
  errorMessage?: string;
  onValueChange?: (value: string) => void;
}

export const ToggleGroup = ({
  items,
  value,
  errorMessage,
  onValueChange,
}: ToggleGroupProps) => {
  return (
    <ToggleGroupContainer
      type="single"
      value={value}
      onValueChange={onValueChange}
      di
    >
      {items.map(({ label, value }, index) => {
        return (
          <ToggleGroupItem key={`${index}-${label}`} value={value}>
            {label}
          </ToggleGroupItem>
        );
      })}
      <ErrorMessage>{errorMessage}</ErrorMessage>
    </ToggleGroupContainer>
  );
};
