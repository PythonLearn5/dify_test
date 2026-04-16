"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import type { User } from "@/lib/users-data";

export default function UserDetailPage() {
  const params = useParams<{ id: string }>();
  const userId = params.id;
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadUser = async () => {
      try {
        const response = await fetch(`/api/users/${userId}`);

        if (response.status === 404) {
          throw new Error("User not found");
        }

        if (!response.ok) {
          throw new Error("Failed to load user detail.");
        }

        const data = (await response.json()) as User;
        setUser(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Unknown error");
      } finally {
        setIsLoading(false);
      }
    };

    void loadUser();
  }, [userId]);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="mx-auto w-full max-w-2xl rounded-lg bg-white p-6 shadow-lg">
        <div className="mb-4">
          <Link href="/users" className="text-sm text-blue-600 hover:underline">
            Back to users
          </Link>
        </div>

        <h1 className="mb-6 text-2xl font-bold text-gray-800">User Detail</h1>

        {isLoading && <p className="text-gray-600">Loading user detail...</p>}
        {error && <p className="text-red-600">Error: {error}</p>}

        {!isLoading && !error && user && (
          <div className="space-y-3">
            <p>
              <span className="font-semibold">ID:</span> {user.id}
            </p>
            <p>
              <span className="font-semibold">Name:</span> {user.name}
            </p>
            <p>
              <span className="font-semibold">Email:</span> {user.email}
            </p>
            <p>
              <span className="font-semibold">Role:</span> {user.role}
            </p>
            <p>
              <span className="font-semibold">Status:</span>{" "}
              <span className="capitalize">{user.status}</span>
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
