import { Inter } from 'next/font/google';
import { notFound } from 'next/navigation';
import type { JSX } from 'react';

const inter = Inter({ subsets: ['latin'] });

type Props = {
  params: {
    slug: string;
  };
};

export default async function Home(props: Props) {
  let MDXContent: () => JSX.Element;
  try {
    MDXContent = (await import(`../../../content/${props.params.slug}.mdx`))
      .default;
  } catch {
    notFound();
  }

  return (
    <main>
      <MDXContent />
    </main>
  );
}
