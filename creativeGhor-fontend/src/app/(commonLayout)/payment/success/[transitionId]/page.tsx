import { useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";

export default function PaymentSuccessPage() {
  const router = useRouter();
  const { txnId } = router.query;

  useEffect(() => {
    if (!txnId) return;

    axios
      .post("http://localhost:5000/api/payment/success", {
        txnId,
        amount: localStorage.getItem("paymentAmount"), // Retrieve amount
        userEmail: localStorage.getItem("userEmail"), // Retrieve user email
      })
      .then((res) => console.log("Payment saved:", res.data))
      .catch((err) => console.error("Error saving payment:", err));
  }, [txnId]);

  return <div>Payment Successful! Redirecting...</div>;
}
