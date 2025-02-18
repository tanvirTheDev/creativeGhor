import { Input } from "antd";
import { Controller, useFormContext } from "react-hook-form";
// import { Input } from "../ui/input";
type TInputProps = {
  placeholder?: string;
  type?: string;
  name: string;
  required?: boolean;
  className?: string;
};
const InputForm = ({
  name,
  type = "text",
  placeholder,
  required,
  className,
}: TInputProps) => {
  const { control } = useFormContext();
  return (
    <div>
      {/* Render label separately */}
      <Controller
        control={control}
        name={name}
        render={({ field }) => (
          <Input
            {...field}
            type={type}
            required={required}
            placeholder={placeholder}
            className={className}
          />
        )}
      />
    </div>
  );
};

export default InputForm;
