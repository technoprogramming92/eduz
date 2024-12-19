"use client";

import { ErrorPage } from "@/components/frontend/error-page";

export default function Error() {
  return (
    <>
      <ErrorPage
        code="500"
        title="Something went wrong!"
        description="We're experiencing some technical difficulties. Please try again later or contact support if the problem persists."
      />
    </>
  );
}
