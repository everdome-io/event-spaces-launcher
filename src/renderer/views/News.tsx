import { FC } from 'react';
import twitterIcon from 'assets/images/social-icons/twitter.png';
import discordIcon from 'assets/images/social-icons/discord.png';
import telegramIcon from 'assets/images/social-icons/telegram.png';
import telegramAccouncementsIcon from 'assets/images/social-icons/telegram_accouncements.png';
import youtubeIcon from 'assets/images/social-icons/youtube.png';
import instagramIcon from 'assets/images/social-icons/instagram.png';
import linkedinIcon from 'assets/images/social-icons/linkedin.png';
import styles from './News.module.css';

export const News: FC = () => {
  return (
    <section className={styles.News}>
      <div className={styles.NewsHeader}>
        <h2>News</h2>
        <span className={styles.separator} />
        <div className={styles.Social}>
          <a href="#">
            <img
              className={styles.SocialIcon}
              src={discordIcon}
              alt="discord"
            />
          </a>
          <a href="#">
            <img
              className={styles.SocialIcon}
              src={telegramIcon}
              alt="telegram"
            />
          </a>
          <a href="#">
            <img
              className={styles.SocialIcon}
              src={telegramAccouncementsIcon}
              alt="telegram_accouncements"
            />
          </a>
          <a href="#">
            <img
              className={styles.SocialIcon}
              src={linkedinIcon}
              alt="linkedin"
            />
          </a>
          <a href="#">
            <img
              className={styles.SocialIcon}
              src={youtubeIcon}
              alt="youtube"
            />
          </a>
          <a href="#">
            <img
              className={styles.SocialIcon}
              src={instagramIcon}
              alt="instagram"
            />
          </a>
          <a href="https://twitter.com/everdome">
            <img
              className={styles.SocialIcon}
              src={twitterIcon}
              alt="twitter"
            />
          </a>
        </div>
      </div>
    </section>
  );
};
