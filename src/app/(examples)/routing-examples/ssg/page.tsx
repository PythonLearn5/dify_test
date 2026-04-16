export const dynamic = "force-static";

export default function SsgDemoPage() {
  const generatedAtBuildTime = new Date().toISOString();

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="mx-auto w-full max-w-3xl rounded-lg bg-white p-6 shadow-lg">
        <h1 className="mb-3 text-2xl font-bold text-gray-800">SSG 示例（静态生成）</h1>
        <p className="mb-3 text-gray-700">
          这个页面使用 <code>force-static</code>，会在构建阶段生成静态内容。
        </p>
        <p className="rounded-md bg-emerald-50 px-3 py-2 text-sm text-emerald-800">
          构建时刻时间：{generatedAtBuildTime}
        </p>
      </div>
    </div>
  );
}
