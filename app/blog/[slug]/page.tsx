import { notFound } from 'next/navigation';
import type { JSX } from 'react';

type Props = {
  params: {
    slug: string;
  };
};

export default async function BlogPost(props: Props) {
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
