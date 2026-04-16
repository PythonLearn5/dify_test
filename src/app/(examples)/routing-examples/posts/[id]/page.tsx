import { notFound } from "next/navigation";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

function wait(ms: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

export default async function PostPage({ params }: Props) {
  const { id } = await params;

  if (id === "404") {
    notFound();
  }

  if (id === "500") {
    throw new Error("示例：主动抛出错误，触发 error.tsx");
  }

  await wait(1200);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="mx-auto max-w-3xl rounded-lg bg-white p-6 shadow-lg">
        <h1 className="mb-3 text-2xl font-bold text-gray-800">Post #{id}</h1>
        <p className="text-gray-700">这是一个用于演示 loading / error / not-found 的动态路由页面。</p>
      </div>
    </div>
  );
}
