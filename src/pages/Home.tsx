import { withLayout } from '../components/withLayout';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';
import Typography from '../components/Typography';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';

const Home = () => {
  const { t } = useTranslation();
  const [showBonusQuestion, setShowBonusQuestion] = useState(false);
  const questionClassName = 'text-4xl mb-2';
  const answerClassName = 'text-3xl';

  return (
    <div className="flex flex-col flex-grow justify-start pt-20 gap-10">
      <Typography as="h1" className="text-4xl text-center">
        {t('homeHeroTitle')}
      </Typography>
      <ol className="list self-center">
        <li className="list-row">
          <Typography as="h2" className="text-4xl">
            1.
          </Typography>
          <div>
            <Typography as="h2" className={questionClassName}>
              {t('homeHeroSubtitleQuestion')}
            </Typography>
            <Typography as="p" className={answerClassName}>
              {t('homeHeroSubtitleAnswer')}
            </Typography>
          </div>
        </li>
        <li className="list-row">
          <Typography as="h2" className="text-4xl">
            2.
          </Typography>
          <div>
            <Typography as="h2" className={questionClassName}>
              {t('homeHeroSitePurposeQuestion')}
            </Typography>
            <Typography as="p" className={answerClassName}>
              {t('homeHeroSitePurposeAnswer')}
            </Typography>
          </div>
        </li>
        <li className="list-row">
          <Typography as="h2" className="text-4xl">
            3.
          </Typography>
          <div>
            <Typography as="h2" className={questionClassName}>
              {t('homeHeroTechStackQuestion')}
            </Typography>
            <Typography as="p" className={answerClassName}>
              {t('homeHeroTechStackAnswer')}
            </Typography>
          </div>
        </li>
        <li className="list-row">
          <Typography as="h2" className="text-4xl">
            4.
          </Typography>
          <div>
            <Typography as="h2" className={questionClassName}>
              {t('homeHeroEasterEggQuestion')}
            </Typography>
            <Typography as="h2" className={answerClassName}>
              {t('homeHeroEasterEggAnswer')}
            </Typography>
          </div>
        </li>
        {!showBonusQuestion && (
          <button
            className="btn btn-secondary self-center mt-10"
            onClick={() => setShowBonusQuestion(true)}
          >
            {t('homeHeroShowBonusQuestion')}
          </button>
        )}
        {showBonusQuestion && (
          <li className="list-row">
            <Typography as="h2" className="text-4xl">
              5.
            </Typography>
            <div>
              <Typography as="h2" className={questionClassName}>
                {t('homeHeroBonusQuestion')}
              </Typography>
              <Typography as="p" className={answerClassName}>
                {t('homeHeroBonusAnswer')}
              </Typography>
            </div>
          </li>
        )}
      </ol>
    </div>
  );
};

Home.displayName = 'Home';

export default Home;
