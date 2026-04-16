"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

type User = {
  id: number;
  name: string;
  email: string;
  role: string;
  status: "active" | "inactive";
};

export default function UsersPage() {
  const [users, setUsers] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadUsers = async () => {
      try {
        const response = await fetch("/api/users");
        if (!response.ok) {
          throw new Error("Failed to load users");
        }

        const data = (await response.json()) as User[];
        setUsers(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Unknown error");
      } finally {
        setIsLoading(false);
      }
    };

    void loadUsers();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="mx-auto w-full max-w-4xl rounded-lg bg-white p-6 shadow-lg">
        <h1 className="mb-6 text-2xl font-bold text-gray-800">User List</h1>

        {isLoading && <p className="text-gray-600">Loading users...</p>}
        {error && <p className="text-red-600">Error: {error}</p>}

        {!isLoading && !error && (
          <div className="overflow-x-auto">
            <table className="min-w-full border border-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="border-b px-4 py-2 text-left">ID</th>
                  <th className="border-b px-4 py-2 text-left">Name</th>
                  <th className="border-b px-4 py-2 text-left">Email</th>
                  <th className="border-b px-4 py-2 text-left">Role</th>
                  <th className="border-b px-4 py-2 text-left">Status</th>
                  <th className="border-b px-4 py-2 text-left">Action</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr key={user.id} className="hover:bg-gray-50">
                    <td className="border-b px-4 py-2">{user.id}</td>
                    <td className="border-b px-4 py-2">{user.name}</td>
                    <td className="border-b px-4 py-2">{user.email}</td>
                    <td className="border-b px-4 py-2">{user.role}</td>
                    <td className="border-b px-4 py-2 capitalize">{user.status}</td>
                    <td className="border-b px-4 py-2">
                      <Link
                        href={`/users/${user.id}`}
                        className="text-blue-600 hover:text-blue-800 hover:underline"
                      >
                        查看
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
