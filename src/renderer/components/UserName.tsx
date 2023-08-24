import React, { useState } from 'react';
import styles from './UserName.module.css';

export const UserName: React.FC<{
  userName: string | null;
}> = ({ userName }) => {
  return (
    <div>
      <p className={userName ? styles.usernameLabel : styles.usernameEmpty}>
        @{`${userName || 'Your username'}`}
      </p>
    </div>
  );
};
