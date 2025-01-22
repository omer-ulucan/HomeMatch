export interface FormFieldProps {
    label: string;
    required?: boolean;
    children: React.ReactNode;
  }
  
  export interface InputFieldProps {
    label: string;
    required?: boolean;
    placeholder: string;
    type?: string;
    id: string;
  }
  
  export interface RadioOptionProps {
    label: string;
    value: string;
    name: string;
    id: string;
  }