import Body from '@/components/common/Body';
import Footer from '@/components/common/Footer';
import Header from '@/components/common/Header';
import { ReactNode } from 'react';

import styles from './PageLayout.module.css';

const PageLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className={`${styles.container} mx-auto mt-14 w-screen md:w-[400px]`}>
      <Header />
      <Body>{children}</Body>
      <Footer />
    </div>
  );
};

export default PageLayout;
