import { mainBlueColor } from '../../common/style/consts';

export const newsContainer: React.CSSProperties = {
  maxWidth: '1280px',
  display: 'flex',
  flexDirection: 'column',
  gap: '15px',
  border: '1px solid grey',
  borderRadius: '10px',
  padding: '20px',
  margin: '10px 20px',
  width: '100%',
};

export const srcBtnStyle: React.CSSProperties = {
  borderColor: 'transparent',
  boxShadow: 'none',
  color: mainBlueColor,
  borderRadius: '10px',
};

export const showMoreStyle: React.CSSProperties = {
  padding: '2px',
};

export const viewBtnStyle: React.CSSProperties = {
  padding: '18px',
  fontSize: '16px',
};
