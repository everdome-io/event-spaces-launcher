import {
  NICKNAME_MAX_LENGTH,
  generateNickname,
} from '@interfaces/usernameGenerator';
import { FC, useRef, useState } from 'react';
import avatars from '@renderer/utils/avatars';
import avatarStand from 'assets/images/avatar-stand.svg';
import { Channels, ToggleWindowMode } from '@interfaces';
import { ArrowRight } from '@renderer/icons/ArrowRight';
import { ArrowLeft } from '@renderer/icons/ArrowLeft';
import { BackButton } from '@renderer/components/BackButton';
import { useNavigate } from 'react-router-dom';
import { sentryEventHandler } from '@main/utils/sentryEventHandler';
import styles from './AvatarList.module.css';

export const AvatarList: FC<{
  beforePlay?: boolean;
  onClickSave?: ({
    nickName,
    avatarId,
  }: {
    nickName: string;
    avatarId: string | null;
  }) => void;
}> = ({ beforePlay = false, onClickSave }) => {
  const avatarId = window?.electron?.store?.get('avatarId') || '0';
  const [avatarIndex, setAvatarIndex] = useState(Number(avatarId));

  const [placeholderValue] = useState(generateNickname());
  const nickName = window?.electron?.store?.get('nickName') || placeholderValue;
  const [nickNameValue, setNickNameValue] = useState(nickName);

  const nickNameRef = useRef(null);
  const navigate = useNavigate();

  const handleInputChange = (event: any) => {
    setNickNameValue(event.target.value);
  };

  const onClickNext = () => {
    setAvatarIndex(avatarIndex + 1);
  };
  const onClickPrev = () => {
    setAvatarIndex(avatarIndex - 1);
  };
  const onCancel = () => {
    window.electron.ipcRenderer.sendMessage(Channels.toggleProfileWindow, {
      mode: ToggleWindowMode.close,
    });
    navigate('/');
  };
  const onSave = async () => {
    window.electron.store.set('avatarId', avatarIndex.toString());
    window.electron.store.set('nickName', nickNameValue || placeholderValue);
    if (onClickSave) {
      onClickSave({
        avatarId: avatarIndex.toString(),
        nickName: nickNameValue || placeholderValue,
      });
    }
    window.electron.ipcRenderer.sendMessage(Channels.toggleProfileWindow, {
      mode: ToggleWindowMode.close,
    });

    if (beforePlay) {
      sentryEventHandler('Save avatar before playing');
      navigate('/how-to');
    } else {
      sentryEventHandler('Save avatar from profile');
      navigate('/');
    }
  };
  const onSaveUsername = () => {
    if (!nickNameValue) {
      setNickNameValue(placeholderValue);
    }
    (document.activeElement as HTMLElement).blur();
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        Enter <strong>username</strong> & choose your <strong>avatar</strong>
      </h1>
      <div className={styles.userNameInputBox}>
        <span className={styles.prefix}>@ </span>
        <input
          ref={nickNameRef}
          type="text"
          value={nickNameValue}
          placeholder={placeholderValue}
          onChange={handleInputChange}
          maxLength={NICKNAME_MAX_LENGTH}
        />
        <span
          className={
            nickNameValue.length === NICKNAME_MAX_LENGTH
              ? styles.suffixError
              : styles.suffix
          }
        >
          {nickNameValue.length}
        </span>
        <span className={styles.suffix}>/{NICKNAME_MAX_LENGTH}</span>

        <button onClick={onSaveUsername} className={styles.inputBtn}>
          Save
        </button>
      </div>
      <div className={styles.chooseAvatarContainer}>
        <button
          onClick={onClickPrev}
          className={styles.sliderBtn}
          disabled={avatarIndex === 0}
        >
          <ArrowLeft />
        </button>
        <div className={styles.avatar}>
          <img
            src={avatars[avatarIndex]}
            width="415"
            height="468"
            alt="Choose avatar"
          />
          <img className={styles.stand} src={avatarStand} />
        </div>
        <button
          onClick={onClickNext}
          className={styles.sliderBtn}
          disabled={avatarIndex === avatars.length - 1}
        >
          <ArrowRight />
        </button>
      </div>
      <div className={styles.actionBtns}>
        <BackButton onClick={onCancel} />
        {beforePlay ? (
          <button onClick={onSave} className={styles.playBtn}>
            Next
            <ArrowRight />
          </button>
        ) : (
          <button onClick={onSave} className={styles.saveAvatar}>
            Save
          </button>
        )}
      </div>
    </div>
  );
};
