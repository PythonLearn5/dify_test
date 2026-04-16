export const dynamic = "force-dynamic";

export default function SsrDemoPage() {
  const serverTime = new Date().toISOString();

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="mx-auto w-full max-w-3xl rounded-lg bg-white p-6 shadow-lg">
        <h1 className="mb-3 text-2xl font-bold text-gray-800">SSR 示例（动态渲染）</h1>
        <p className="mb-3 text-gray-700">
          这个页面使用 <code>force-dynamic</code>，每次请求都在服务端重新渲染。
        </p>
        <p className="rounded-md bg-blue-50 px-3 py-2 text-sm text-blue-800">
          服务端当前时间：{serverTime}
        </p>
      </div>
    </div>
  );
}
