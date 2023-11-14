import { MouseEventHandler } from 'react';

export interface ICustomButtonProps {
  title: string;
  containerStyles?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  btnType?: 'submit' | 'button';
}

export interface IManufacturerProps {
  manufacturer: string;
  setManufacturer: (manufacturer: string) => void;
}
