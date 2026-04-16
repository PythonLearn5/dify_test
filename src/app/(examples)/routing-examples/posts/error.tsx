"use client";

import { useEffect } from "react";

export default function Error({
  error,
  unstable_retry,
}: {
  error: Error & { digest?: string };
  unstable_retry: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="mx-auto max-w-3xl rounded-lg bg-white p-6 shadow-lg">
        <h2 className="mb-3 text-xl font-semibold text-red-600">发生错误</h2>
        <p className="mb-4 text-gray-700">{error.message}</p>
        <button
          type="button"
          onClick={() => unstable_retry()}
          className="rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
        >
          重试
        </button>
      </div>
    </div>
  );
}
