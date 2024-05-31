import { SuspenseComponent } from '@/components/SuspenseComponent/SuspenseComponent';
import { Lazy } from './Lazy.lazy';

export const LazyComponent: React.FC = (): JSX.Element => {
  return (
    <SuspenseComponent fallback=".....Loading">
      <Lazy />
    </SuspenseComponent>
  );
};
