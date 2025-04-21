import News from './news';
import { data } from '../../common/mocks/mock-data1';

const NewsContainer = () => {
  return (
    <>
      <News data={data} />
    </>
  );
};

export default NewsContainer;
