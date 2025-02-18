import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { Controller, useFieldArray, useFormContext } from "react-hook-form";
import InputForm from "./InputForm"; // Import the reusable input component

const KeyFeaturesForm = ({ name = "features" }) => {
  const { control } = useFormContext();
  const { fields, append, remove } = useFieldArray({ control, name });

  return (
    <div className="space-y-4">
      {fields.map((field, index) => (
        <div key={field.id} className="flex items-center gap-3 max-w-full">
          <Controller
            control={control}
            name={`${name}.${index}`}
            render={({ field }) => (
              <InputForm
                {...field}
                placeholder="Enter key feature"
                className="bg-gray-100 border border-gray-300 text-black w-full"
              />
            )}
          />
          <div>
            <MinusCircleOutlined
              className="text-red-500 cursor-pointer"
              onClick={() => remove(index)}
            />
          </div>
        </div>
      ))}
      <Button
        type="dashed"
        onClick={() => append("")} // Add a new empty feature
        icon={<PlusOutlined />}
        className="w-full"
      >
        Add Feature
      </Button>
    </div>
  );
};

export default KeyFeaturesForm;
