import { ReactNode, Suspense } from 'react';

interface SuspenseComponent {
  fallback: string | ReactNode;
  children: ReactNode;
}

export const SuspenseComponent: React.FC<SuspenseComponent> = ({
  fallback = '...Loading',
  children,
}): JSX.Element => {
  return <Suspense fallback={fallback}>{children}</Suspense>;
};
