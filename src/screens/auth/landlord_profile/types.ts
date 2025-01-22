export interface FormFieldProps {
    label: string;
    required?: boolean;
    placeholder: string;
    type?: string;
    helperText?: string;
  }
  
  export interface StepIndicatorProps {
    number: string;
    label: string;
    active: boolean;
  }