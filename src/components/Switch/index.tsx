import { InputHTMLAttributes } from 'react';
import { Checkbox, Label } from './styles';

interface SwitchProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  srLabel: string;
}

export const Switch = ({ id, srLabel, title, ...props }: SwitchProps) => {
  return (
    <>
      <Checkbox type="checkbox" id={id} {...props} />
      <Label htmlFor={id} title={title}>
        <span>{srLabel}</span>
      </Label>
    </>
  );
};
