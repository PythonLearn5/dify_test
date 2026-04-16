type Props = {
  children: React.ReactNode;
  team: React.ReactNode;
  analytics: React.ReactNode;
};

export default function ParallelLayout({ children, team, analytics }: Props) {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-4 lg:grid-cols-3">
        <div className="rounded-lg bg-white p-4 shadow-lg">{children}</div>
        <div className="rounded-lg bg-white p-4 shadow-lg">{team}</div>
        <div className="rounded-lg bg-white p-4 shadow-lg">{analytics}</div>
      </div>
    </div>
  );
}
