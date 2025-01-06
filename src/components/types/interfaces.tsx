export interface IButton {
  children: string;
  isDisabled: boolean;
  typeButton: string;
}

export interface IInput {
  title: string;
  isDisabled: boolean;
  type: string;
  placeholder: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name?: string;
  value?: string; 
}

export interface IText {
  children: string;
  type: string;
}

export interface Task {
  id: string;
  name: string;
  status: string;
  date: string;
}




