import { sharedMDXComponents } from './components/mdx/shared-components';

declare global {
  type MDXProvidedComponents = typeof sharedMDXComponents;
}

export function useMDXComponents(): MDXProvidedComponents {
  return sharedMDXComponents;
}
