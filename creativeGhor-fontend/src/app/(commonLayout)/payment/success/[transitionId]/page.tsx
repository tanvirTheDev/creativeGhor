"use client";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function PaymentSuccessPage() {
  const router = useRouter();
  const { txnId } = router.query;

  useEffect(() => {
    if (!txnId) return;

    axios
      .post("https://creativeghor-backend.onrender.com/api/payment/success", {
        txnId,
        amount: localStorage.getItem("paymentAmount"), // Retrieve amount
        userEmail: localStorage.getItem("userEmail"), // Retrieve user email
      })
      .then((res) => console.log("Payment saved:", res.data))
      .catch((err) => console.error("Error saving payment:", err));
  }, [txnId]);

  return <div>Payment Successful! Redirecting...</div>;
}
