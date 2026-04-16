import Link from "next/link";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function InterceptedPhotoModal({ params }: Props) {
  const { id } = await params;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
      <div className="w-full max-w-md rounded-lg bg-white p-6 shadow-2xl">
        <h2 className="mb-2 text-xl font-bold text-gray-800">Intercepted Modal</h2>
        <p className="mb-4 text-gray-600">当前 photo id: {id}</p>
        <Link href="/routing-examples/gallery" className="text-blue-600 hover:underline">
          关闭
        </Link>
      </div>
    </div>
  );
}
