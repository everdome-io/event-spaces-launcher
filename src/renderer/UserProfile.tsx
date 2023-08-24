import { CrossWindowState, UserAttributes } from '@interfaces';
import { FC, useState } from 'react';
import { Routes, Route, HashRouter } from 'react-router-dom';
import { ProfileDetails } from './views/ProfileDetails';
import './UserProfile.css';
import { AvatarList } from './views/AvatarList';

const UserProfile: FC<{
  crossWindowState: CrossWindowState;
}> = ({ crossWindowState }) => {
  const userId = window?.electron?.store?.get('userId');
  const nickNameStore = window?.electron?.store?.get('nickName');
  const avatarIdStore = window?.electron?.store?.get('avatarId');
  const [userAttributes, setUserAttributes] = useState<UserAttributes>({
    userId,
    nickName: nickNameStore,
    avatarId: avatarIdStore,
  });

  const saveUser = async ({
    nickName,
    avatarId,
  }: {
    nickName: string;
    avatarId: string | null;
  }) => {
    setUserAttributes({ ...userAttributes, avatarId, nickName });
  };

  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<ProfileDetails state={userAttributes} />} />
        <Route
          path="/choose-avatar"
          element={<AvatarList onClickSave={saveUser} />}
        />
      </Routes>
    </HashRouter>
  );
};

export default UserProfile;
