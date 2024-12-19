import { ErrorPage } from "@/components/frontend/error-page";

export default function NotFound() {
  return (
    <>
      <ErrorPage
        code="404"
        title="This is not the page you are looking for"
        description="Sorry, we couldn't find the page you're looking for. Please check the URL in the address bar and try again."
      />
    </>
  );
}
