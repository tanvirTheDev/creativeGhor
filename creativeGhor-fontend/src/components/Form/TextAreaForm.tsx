import { Controller, useFormContext } from "react-hook-form";
import { Textarea } from "../ui/textarea";

type TTextareaProps = {
  placeholder?: string;
  name: string;
  required?: boolean;
  className?: string;
  row?: number;
};

const TextareaForm = ({
  name,
  placeholder,
  required,
  className,
  row,
}: TTextareaProps) => {
  const { control } = useFormContext();
  return (
    <div>
      {/* Render label separately */}
      <Controller
        control={control}
        name={name}
        render={({ field }) => (
          <Textarea
            {...field}
            required={required}
            placeholder={placeholder}
            className={className}
            rows={row}
          />
        )}
      />
    </div>
  );
};

export default TextareaForm;
