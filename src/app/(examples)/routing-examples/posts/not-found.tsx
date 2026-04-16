import Link from "next/link";

export default function PostNotFound() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="mx-auto max-w-3xl rounded-lg bg-white p-6 shadow-lg">
        <h2 className="mb-3 text-xl font-semibold text-gray-800">Post Not Found</h2>
        <p className="mb-4 text-gray-600">该文章不存在。</p>
        <Link href="/routing-examples" className="text-blue-600 hover:underline">
          返回路由示例首页
        </Link>
      </div>
    </div>
  );
}
