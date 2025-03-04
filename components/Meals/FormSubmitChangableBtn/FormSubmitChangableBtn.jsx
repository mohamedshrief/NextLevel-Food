"use client";

// import { useActionState } from "react";
import { useFormStatus } from "react-dom";

export default function FormSubmitChangableBtn() {
  const { pending } = useFormStatus();

  return (
    <button disabled={pending}>
      {pending ? "Submitting..." : "Share Meal"}
    </button>
  );
}
