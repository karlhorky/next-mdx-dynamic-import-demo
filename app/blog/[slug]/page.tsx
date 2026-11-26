import { MDXComponents } from 'mdx/types';
import { notFound } from 'next/navigation';
import type { JSX } from 'react';

type MdxModule = {
  default: (props: {
    readonly components?: MDXComponents | undefined;
  }) => JSX.Element;
  metadata: {
    title: string;
  };
};

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  let metadata = {
    title: 'Not Found',
  };

  try {
    ({ metadata } = await import(`../../../content/${slug}.mdx`));
  } catch {
    // Swallow errors
  }

  return metadata;
}

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function BlogPost(props: Props) {
  const { slug } = await props.params;
  let MDXContent: MdxModule['default'];

  try {
    MDXContent = (await import(`../../../content/${slug}.mdx`)).default;
  } catch {
    notFound();
  }

  return (
    <main>
      <MDXContent />
    </main>
  );
}
