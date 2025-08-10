import { Metadata } from 'next';
import { Home } from './client';

export const metadata: Metadata = {
  title: 'Zide',
  description: 'Digital simplicity, greater efficiency. We develop open-source applications to help you improve your efficiency',
};

export default function Page() {
  return <Home />;
}
