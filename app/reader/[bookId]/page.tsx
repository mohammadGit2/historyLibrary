import { ReaderClient } from '@/components/ReaderClient';

type ReaderPageProps = {
  params: Promise<{ bookId: string }>;
};

export default async function ReaderPage({ params }: ReaderPageProps) {
  const { bookId } = await params;
  return <ReaderClient bookId={bookId} />;
}
