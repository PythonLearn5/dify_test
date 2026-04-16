type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function PhotoPage({ params }: Props) {
  const { id } = await params;

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="mx-auto max-w-2xl rounded-lg bg-white p-6 shadow-lg">
        <h1 className="mb-3 text-2xl font-bold text-gray-800">Photo Detail Page</h1>
        <p className="text-gray-700">这是正常完整页面：photo id = {id}</p>
      </div>
    </div>
  );
}
