import { AppState, AppUpdate, Channels, CrossWindowState } from '@interfaces';
import { FC, useEffect } from 'react';
import chevronRight from 'assets/images/chevron-right.png';
import { Navigate, useNavigate } from 'react-router-dom';
import logoImage from 'assets/images/spaces_logo.png';
import { FileDownloader } from '@renderer/components';
import { ClearStore } from '@renderer/components/ClearStore';
import styles from './Main.module.css';

export const Main: FC<{
  state: AppState;
  updateState: AppUpdate;
  crossWindowState: CrossWindowState;
}> = ({ state, crossWindowState }) => {
  const termsAccepted = window?.electron?.store?.get('termsAccepted');
  const latestWindowsVersion: string | undefined = window?.electron?.store?.get(
    'latestWindowsVersion'
  );
  const currentVersion: string | undefined =
    window?.electron?.store?.get('appCurrentVersion');

  useEffect(() => {
    if (shouldDisplayUpdateInfo(latestWindowsVersion, currentVersion)) {
      window.electron.ipcRenderer.sendMessage(Channels.handleUpdateForWindows);
    }
  }, [latestWindowsVersion, currentVersion]);

  if (crossWindowState.errorMessage) {
    console.log(`Error message?: ${crossWindowState.errorMessage}`);
  }

  const renderView = () => {
    if (!termsAccepted) {
      return <Navigate to="/terms" />;
    }
    return (
      <div className={styles.main}>
        <div className={styles.slider}>
          <div className={styles.slide} />
          <div className={styles.slide} />
        </div>
        <div className={styles.container}>
          <img src={logoImage} alt="Everdome" width="320" height="90" />
          <section className={styles.mainSection}>
            <div className={styles.welcomeMessage}>
              <p>Description to be added</p>
              <FileDownloader state={state} />
            </div>
          </section>
          <section className={styles.poweredBy}>
            <p className={styles.poweredByText}>
              Powered by{' '}
              <a
                href="https://everdome.io/"
                target="_blank"
                className={styles.poweredByLink}
                rel="noreferrer"
              >
                Everdome
              </a>
            </p>
            <img src={chevronRight} />
          </section>
        </div>
        {/* <ClearStore /> */}
      </div>
    );
  };

  return renderView();
};

function shouldDisplayUpdateInfo(
  latestWindowsVersion: string | undefined,
  currentVersion: string | undefined
) {
  return (
    latestWindowsVersion !== undefined &&
    currentVersion !== undefined &&
    latestWindowsVersion !== currentVersion
  );
}
