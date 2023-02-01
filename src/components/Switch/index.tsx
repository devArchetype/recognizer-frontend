import { InputHTMLAttributes } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';
import { Checkbox, Label, SwitchContainer } from './styles';

interface SwitchProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  srLabel?: boolean;
  leftLabel?: boolean;
  register?: UseFormRegisterReturn<string>;
}

export const Switch = ({
  label,
  srLabel = true,
  leftLabel = false,
  title,
  register,
  ...props
}: SwitchProps) => {
  return (
    <SwitchContainer srLabel={srLabel} leftLabel={leftLabel}>
      <Checkbox type="checkbox" {...register} {...props} />
      <Label title={title} />
      <span>{label}</span>
    </SwitchContainer>
  );
};
