import { Channels, ToggleWindowMode } from '@interfaces';
import { FC } from 'react';
import settingsIcon from 'assets/images/settings-icon.svg';
import { ClearStore } from '@renderer/components/ClearStore';
import { UserAvatar } from '@renderer/components/UserAvatar';
import { UserName } from '@renderer/components/UserName';
import { useNavigate } from 'react-router-dom';
import { sentryEventHandler } from '@main/utils/sentryEventHandler';
import styles from './ProfileDetails.module.css';

export const ProfileDetails: FC<{
  state: { avatarId: string | null; nickName: string | null };
}> = ({ state: { avatarId, nickName } }) => {
  const navigate = useNavigate();

  const openSettings = () => {
    sentryEventHandler('OpenSettings');
    window.electron.ipcRenderer.sendMessage(Channels.toggleProfileWindow, {
      mode: ToggleWindowMode.open,
    });
    navigate('/choose-avatar');
  };

  return (
    <div className={styles.container}>
      <header className={styles.userProfileHeader}>
        <UserName userName={nickName} />
        <img
          src={settingsIcon}
          className={styles.settingIcon}
          onClick={openSettings}
        />
      </header>
      <UserAvatar avatarId={avatarId} />
    </div>
  );
};
