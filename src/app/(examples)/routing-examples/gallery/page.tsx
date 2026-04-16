import Link from "next/link";

const photos = [1, 2, 3];

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="mx-auto max-w-3xl rounded-lg bg-white p-6 shadow-lg">
        <h1 className="mb-4 text-2xl font-bold text-gray-800">Gallery（拦截路由示例）</h1>
        <p className="mb-4 text-gray-600">
          从这里点击 photo 链接，会在当前布局下显示拦截覆盖层；直接访问 URL 会进入完整详情页。
        </p>
        <ul className="space-y-2">
          {photos.map((id) => (
            <li key={id}>
              <Link href={`/routing-examples/photo/${id}`} className="text-blue-600 hover:underline">
                Open photo {id}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
