import { Controller, useFormContext } from "react-hook-form";

type ColorSelectorProps = {
  name: string;
  colors: string[];
};

const ColorSelector = ({ name, colors }: ColorSelectorProps) => {
  const { control, setValue, watch } = useFormContext();
  const selectedColors = watch(name) || [];

  const handleColorClick = (color: string) => {
    const updatedColors = selectedColors.includes(color)
      ? selectedColors.filter((c: string) => c !== color)
      : [...selectedColors, color];

    setValue(name, updatedColors); // ✅ Updates form state
  };

  return (
    <div>
      <p className="mb-2 text-gray-600">Color:</p>
      <Controller
        control={control}
        name={name}
        render={() => (
          <div className="flex gap-2">
            {colors.map((color) => (
              <div
                key={color}
                className={`w-8 h-8 rounded-full border-2 cursor-pointer ${
                  selectedColors.includes(color)
                    ? "border-orange-500"
                    : "border-gray-400"
                }`}
                style={{ backgroundColor: color.toLowerCase() }}
                onClick={() => handleColorClick(color)}
              ></div>
            ))}
          </div>
        )}
      />
    </div>
  );
};

export default ColorSelector;
