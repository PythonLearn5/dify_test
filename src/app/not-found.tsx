import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="mx-auto max-w-xl rounded-lg bg-white p-6 shadow-lg">
        <h1 className="mb-2 text-2xl font-bold text-gray-800">404</h1>
        <p className="mb-4 text-gray-600">页面不存在。</p>
        <Link href="/" className="text-blue-600 hover:underline">
          回到首页
        </Link>
      </div>
    </div>
  );
}
