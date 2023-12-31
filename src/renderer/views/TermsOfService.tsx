import { FC, useState } from 'react';
import logo from 'assets/images/logo.png';
import { Channels } from '@interfaces';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from '@renderer/icons/ArrowRight';
import { sentryEventHandler } from '@main/utils/sentryEventHandler';
import styles from './TermsOfService.module.css';

export const TermsOfService: FC = () => {
  const navigate = useNavigate();
  const [isTermsChecked, setIsTermsChecked] = useState(false);
  const [isAgeChecked, setIsAgeChecked] = useState(false);
  const [isTermsValid, setIsTermsValid] = useState(true);
  const [isAgeValid, setIsAgeValid] = useState(true);
  const acceptTerms = () => {
    if (isTermsChecked && isAgeChecked) {
      window.electron.ipcRenderer.sendMessage(Channels.acceptTerms);
      sentryEventHandler('Terms accepted');
      navigate('/');
    } else {
      setIsTermsValid(isTermsChecked);
      setIsAgeValid(isAgeChecked);
    }
  };

  const onTermsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsTermsChecked(e.target.checked);
    setIsTermsValid(true);
  };

  const onAgeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsAgeChecked(e.target.checked);
    setIsAgeValid(true);
  };

  const termsLabelClass = isTermsValid
    ? styles.checkbox
    : `${styles.checkbox} ${styles.invalid}`;
  const ageLabelClass = isAgeValid
    ? styles.checkbox
    : `${styles.checkbox} ${styles.invalid}`;

  return (
    <div className={styles.tosContainer}>
      <div className={styles.banner}>
        <h1 className={styles.title}>
          Our <strong>terms of service</strong>
        </h1>
        <p className={styles.note}>
          Please read and accept the terms and conditions to enjoy the
          experience
        </p>
        <div className={styles.bannerContainer}>
          <p className={styles.poweredBy}>
            Experience powered by{' '}
            <img src={logo} alt="Everdome" width={136} height={11} />
          </p>
        </div>
      </div>
      <div className={styles.tosForm}>
        <label className={termsLabelClass}>
          <input
            type="checkbox"
            onChange={onTermsChange}
            checked={isTermsChecked}
          />
          <span className={styles.indicator} />
          <span className={styles.inputLabel}>
            I agree to the{' '}
            <a
              className={styles.tosPDF}
              target="_blank"
              href="https://metahero-dev-eu-west-2-launcher.s3.amazonaws.com/terms-of-service.pdf"
              rel="noreferrer"
            >
              terms & conditions
            </a>{' '}
            *
          </span>
        </label>
        <label className={ageLabelClass}>
          <input
            type="checkbox"
            onChange={onAgeChange}
            checked={isAgeChecked}
          />
          <span className={styles.indicator} />
          <span className={styles.inputLabel}>I am over 18 years old *</span>
        </label>
        <button className={styles.tosCTA} onClick={acceptTerms}>
          Next
          <ArrowRight />
        </button>
      </div>
    </div>
  );
};
