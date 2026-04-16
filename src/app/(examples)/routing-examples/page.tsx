import Link from "next/link";

const examples = [
  {
    title: "Catch-all",
    href: "/routing-examples/docs/a/b/c",
    description: "示例路径：/routing-examples/docs/a/b/c",
  },
  {
    title: "Optional Catch-all",
    href: "/routing-examples/shop",
    description: "示例路径：/routing-examples/shop 或 /routing-examples/shop/phone/case",
  },
  {
    title: "Loading / Error / Not Found",
    href: "/routing-examples/posts/1",
    description: "试试 /routing-examples/posts/404 或 /routing-examples/posts/500",
  },
  {
    title: "Parallel Routes",
    href: "/routing-examples/parallel",
    description: "同一页面并行渲染 team + analytics 槽位",
  },
  {
    title: "Intercepting Routes",
    href: "/routing-examples/gallery",
    description: "从 gallery 打开 photo，会以拦截方式显示覆盖层",
  },
  {
    title: "Static Image + CSS Module",
    href: "/routing-examples/styled-image",
    description: "演示静态图片与自定义样式页面",
  },
  {
    title: "SSR Demo",
    href: "/routing-examples/ssr",
    description: "每次请求服务端重新渲染（force-dynamic）",
  },
  {
    title: "SSG Demo",
    href: "/routing-examples/ssg",
    description: "构建时静态生成（force-static）",
  },
];

export default function RoutingExamplesPage() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="mx-auto w-full max-w-4xl rounded-lg bg-white p-6 shadow-lg">
        <h1 className="mb-4 text-2xl font-bold text-gray-800">Next.js 路由方式示例</h1>
        <p className="mb-6 text-gray-600">
          当前页面来自路由分组：文件在 <code>(examples)</code> 下，但 URL 不会包含分组名。
        </p>

        <ul className="space-y-3">
          {examples.map((item) => (
            <li key={item.title} className="rounded-lg border border-gray-200 p-4">
              <Link href={item.href} className="text-base font-semibold text-blue-600 hover:underline">
                {item.title}
              </Link>
              <p className="mt-1 text-sm text-gray-600">{item.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
