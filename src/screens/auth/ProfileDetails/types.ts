export interface InputFieldProps {
    label: string;
    placeholder: string;
    isTextArea?: boolean;
    suffix?: string;
  }
  
  export interface SelectFieldProps {
    label: string;
    placeholder: string;
  }
  
  export interface PropertyFormData {
    rooms: string;
    bathrooms: string;
    area: string;
    address: string;
    propertyType: string;
    price: string;
    currency: string;
    notes: string;
  }