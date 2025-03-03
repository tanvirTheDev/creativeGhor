/* eslint-disable @typescript-eslint/no-explicit-any */
export const registerSeller = async (sellerData: any) => {
  const API_URL = process.env.NEXT_PUBLIC_API_URL;

  if (!API_URL) {
    throw new Error("API URL is not defined. Check your .env.local file.");
  }
  try {
    const response = await fetch(`${API_URL}/api/v1/register-seller`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(sellerData),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Registration failed");
    }

    const registerSeller = await response.json(); // Success response
    console.log("registerSeller", registerSeller);
    return registerSeller;
  } catch (error: any) {
    throw new Error(error.message || "Something went wrong");
  }
};
