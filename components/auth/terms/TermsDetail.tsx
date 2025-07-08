interface TermsDetailProps {
  id: string;
}

export default function TermsDetail({ id }: TermsDetailProps) {
  return (
    <main className="flex-1 overflow-auto p-6">
      <h1 className="mb-4 text-2xl font-bold">{id}</h1>
      <div className="prose max-w-none"></div>
    </main>
  );
}
