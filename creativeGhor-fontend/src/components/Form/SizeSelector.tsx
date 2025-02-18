import { Controller, useFormContext } from "react-hook-form";

type SizeSelectorProps = {
  name: string;
  sizes: string[];
};

const SizeSelector = ({ name, sizes }: SizeSelectorProps) => {
  const { control, setValue, watch } = useFormContext();
  const selectedSizes = watch(name) || [];

  const handleSizeClick = (size: string) => {
    const updatedSizes = selectedSizes.includes(size)
      ? selectedSizes.filter((s: string) => s !== size)
      : [...selectedSizes, size];

    setValue(name, updatedSizes); // ✅ Updates form state
  };

  return (
    <div>
      <p className="mb-2 text-gray-600">Size:</p>
      <Controller
        control={control}
        name={name}
        render={() => (
          <div className="flex gap-2">
            {sizes.map((size) => (
              <button
                key={size}
                type="button"
                className={`px-4 py-2 rounded-lg border ${
                  selectedSizes.includes(size)
                    ? "bg-orange-500 text-white"
                    : "bg-gray-100 text-gray-600 border-gray-400"
                }`}
                onClick={() => handleSizeClick(size)}
              >
                {size}
              </button>
            ))}
          </div>
        )}
      />
    </div>
  );
};

export default SizeSelector;
