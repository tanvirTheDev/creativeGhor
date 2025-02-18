export const modifyData = (values: any) => {
  const formData = new FormData();
  formData.append("name", values.name);
  formData.append("email", values.email);
  formData.append("password", values.password);
  return formData;
};
