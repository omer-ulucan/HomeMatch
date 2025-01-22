export interface SocialButtonProps {
    icon: string;
    label: string;
    onPress: () => void;
  }
  
  export interface InputFieldProps {
    label: string;
    placeholder: string;
    type?: "text" | "password";
    value: string;
    onChange: (text: string) => void;
    showIcon?: boolean;
    iconSource?: string;
  }