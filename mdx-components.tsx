import { MDXComponents } from 'mdx/types';

const components = {
  // TODO: Add custom components here
} satisfies MDXComponents;

declare global {
  type MDXProvidedComponents = typeof components;
}

export function useMDXComponents(): MDXProvidedComponents {
  return components;
}
