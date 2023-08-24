import { FC } from 'react';
import { ArrowLeft } from '@renderer/icons/ArrowLeft';
import styles from '../theme/buttons.module.css';

interface BackButtonProps {
  onClick: () => void;
}
export const BackButton: FC<BackButtonProps> = ({ onClick }) => {
  const handleClick = () => {
    onClick();
  };
  return (
    <button onClick={handleClick} className={styles.backBtn}>
      <ArrowLeft />
      Back
    </button>
  );
};
