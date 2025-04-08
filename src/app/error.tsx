"use client";

import { Button } from "@/components/ui/button";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-6xl font-bold mb-4">Something went wrong!</h1>
        <p className="text-muted-foreground mb-8 max-w-md">
          An unexpected error has occurred. Please try again.
        </p>
        <Button onClick={() => reset()}>Try again</Button>
      </div>
    </div>
  );
}