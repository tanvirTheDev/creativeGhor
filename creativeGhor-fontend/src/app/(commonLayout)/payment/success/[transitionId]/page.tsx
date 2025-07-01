"use client";
import { CheckCircle } from "lucide-react";
import { useParams, useRouter } from "next/navigation";

export default function PaymentSuccessPage() {
  const router = useRouter();
  const { transitionId } = useParams();
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="w-full max-w-sm mx-auto p-8 border border-gray-200 rounded-xl flex flex-col items-center">
        <CheckCircle className="text-green-400 w-16 h-16 mb-4" />
        <h1 className="text-xl font-semibold text-gray-800 mb-2">
          Payment Successful
        </h1>
        <p className="text-gray-500 text-center mb-2 text-sm">
          Thank you for your purchase.
          <br />
          Your payment was processed successfully.
        </p>
        {transitionId && (
          <p className="text-xs text-gray-400 mb-4">
            Transaction ID: {transitionId}
          </p>
        )}
        <button
          className="bg-gray-900 hover:bg-gray-800 text-white font-medium py-2 px-5 rounded transition"
          onClick={() => router.push("/")}
        >
          Go to Home
        </button>
      </div>
    </div>
  );
}
