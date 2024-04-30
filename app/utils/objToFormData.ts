const objToFormData = (obj: Record<string, string>) => {
  const formData = new URLSearchParams();
  Object.entries(obj).forEach(([key, value]) => {
    formData.append(key, value);
  });
  return formData.toString();
};

export default objToFormData;
