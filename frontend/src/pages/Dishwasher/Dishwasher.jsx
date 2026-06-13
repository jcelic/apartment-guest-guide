import { useTranslation } from 'react-i18next';
import styles from './Dishwasher.module.css';
import panel1 from '../../assets/panel1.png';
import panel2 from '../../assets/panel2.png';
import panel3 from '../../assets/panel3.png';
import InfoCard from '../../components/InfoCard/InfoCard';
import { LuPower, LuSettings, LuPlay, LuPackage2 } from 'react-icons/lu';
import { BsFiletypePdf } from 'react-icons/bs';
import usePageTitle from '../../hooks/usePageTitle';

const Dishwasher = () => {
  const { t } = useTranslation();
  usePageTitle(t('dishwasher.title'));

  return (
    <div className={styles.dishwasher}>
      <h1 className="pageTitle">{t('dishwasher.title')}</h1>
      <h3 className="pageSubtitle">{t('dishwasher.subtitle')}</h3>

      <p className={styles.intro}>{t('dishwasher.intro')}</p>

      <div className={styles.cards}>
        <InfoCard icon={<LuPackage2 />} title={t('dishwasher.capsules.title')}>
          <p>{t('dishwasher.capsules.text')}</p>
        </InfoCard>

        <InfoCard icon={<LuPower />} title={t('dishwasher.turnOn.title')}>
          <p>{t('dishwasher.turnOn.text')}</p>
          <img src={panel1} alt={t('dishwasher.alts.power')} />
        </InfoCard>

        <InfoCard
          icon={<LuSettings />}
          title={t('dishwasher.selectProgram.title')}
        >
          <p>{t('dishwasher.selectProgram.text')}</p>
          <img src={panel2} alt={t('dishwasher.alts.program')} />
        </InfoCard>

        <InfoCard icon={<LuPlay />} title={t('dishwasher.start.title')}>
          <p>{t('dishwasher.start.text')}</p>
          <img src={panel3} alt={t('dishwasher.alts.start')} />
        </InfoCard>
      </div>

      <h4>{t('dishwasher.programsIntro')}</h4>

      <table className={styles.programTable}>
        <thead>
          <tr>
            <th>{t('dishwasher.table.program')}</th>
            <th>{t('dishwasher.table.whenToUse')}</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>{t('dishwasher.table.p1')}</td>
            <td>{t('dishwasher.table.p1Use')}</td>
          </tr>

          <tr>
            <td>{t('dishwasher.table.p2')}</td>
            <td>{t('dishwasher.table.p2Use')}</td>
          </tr>

          <tr>
            <td>{t('dishwasher.table.p3')}</td>
            <td>{t('dishwasher.table.p3Use')}</td>
          </tr>

          <tr>
            <td>{t('dishwasher.table.p4')}</td>
            <td>{t('dishwasher.table.p4Use')}</td>
          </tr>
        </tbody>
      </table>

      <h4>{t('dishwasher.manualText')}</h4>

      <a
        href="/manuals/dishwasher-manual.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.primaryBtn}
      >
        <BsFiletypePdf />
        {t('dishwasher.manualButton')}
      </a>
    </div>
  );
};

export default Dishwasher;
