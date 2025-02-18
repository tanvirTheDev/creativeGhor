/* eslint-disable @typescript-eslint/no-unused-expressions */
import useImageUpload from "@/hooks/useImageUpload";
import { Button, message, Upload } from "antd";
import { RcFile, UploadFile } from "antd/es/upload";
import { Controller, useFormContext } from "react-hook-form";

type TUploadFormProps = {
  name: string;
  multiple?: boolean;
  listType?: "text" | "picture" | "picture-card";
  className?: string;
  buttonText?: string;
  defaultFileList?: UploadFile[]; // Add this line to define defaultFileList
};

const UploadForm = ({
  name,
  multiple = false,
  listType = "picture-card",
  className = "",
  buttonText = "Upload Images",
  defaultFileList = [],
}: TUploadFormProps) => {
  const { control, setValue, getValues } = useFormContext();
  const { uploadToCloudinary } = useImageUpload(); // Use the custom hook

  return (
    <div className={className}>
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange } }) => (
          <Upload
            multiple={multiple}
            listType={listType}
            defaultFileList={defaultFileList}
            showUploadList={{ showPreviewIcon: true }}
            customRequest={async ({ file, onSuccess, onError }) => {
              const url = await uploadToCloudinary(file as RcFile);
              console.log("Uploaded URL:", url);

              if (url) {
                const currentImages = getValues(name) || []; // Get current images array
                const updatedImages = [...currentImages, url]; // Add new URL to the array
                setValue(name, updatedImages); // Update form state
                onChange(updatedImages); // Trigger state update
                onSuccess && onSuccess("ok");
                message.success("Image uploaded successfully.");
              } else {
                onError && onError(new Error("Upload failed"));
              }
            }}
          >
            <Button>{buttonText}</Button>
          </Upload>
        )}
      />
    </div>
  );
};

export default UploadForm;
