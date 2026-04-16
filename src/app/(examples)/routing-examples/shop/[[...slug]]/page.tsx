type Props = {
  params: Promise<{
    slug?: string[];
  }>;
};

export default async function OptionalCatchAllPage({ params }: Props) {
  const { slug } = await params;

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="mx-auto max-w-3xl rounded-lg bg-white p-6 shadow-lg">
        <h1 className="mb-3 text-2xl font-bold text-gray-800">Optional Catch-all 示例</h1>
        <p className="text-gray-700">
          当前 slug: {slug?.length ? slug.join(" / ") : "空（命中 /routing-examples/shop）"}
        </p>
      </div>
    </div>
  );
}
