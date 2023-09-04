import styles from './Body.module.css';

interface BodyProps {
  children: React.ReactNode;
}

const Body = ({ children }: BodyProps) => {
  return <section className={`${styles.container} w-full bg-white`}>{children}</section>;
};

export default Body;
