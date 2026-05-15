declare namespace React {
  type ReactNode = any;
}
declare namespace JSX {
  interface Element { }
  interface ElementChildrenAttribute { children: {}; }
  interface IntrinsicAttributes { key?: any; }
  interface IntrinsicElements { [elemName: string]: any; }
}
declare module '*.css';
declare module 'react' {
  export type ReactNode = any;
  export type FormEvent = any;
  export function useState<T>(initial: T): [T, (value: T | ((previous: T) => T)) => void];
  export function useEffect(effect: () => void | (() => void), deps?: any[]): void;
}
declare module 'next' { export type Metadata = any; }
declare module 'next/link' { const Link: any; export default Link; }
declare module 'next/navigation' { export function useRouter(): { push: (href: string) => void }; export function notFound(): never; }
declare module 'tailwindcss' { export type Config = any; }
