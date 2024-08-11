import Header from '@/shared/components/Header';

import HomeService from './home.service';

const Home = () => {
  const { getTopData } = new HomeService();
  return (
    <div className="flex size-full flex-col items-center justify-center text-white">
      <div className="flex flex-col items-center justify-center px-60">
        <Header item={getTopData()}></Header>
        {/* {new Array(10).fill(10).map((_, i) => {
          return <Header key={i} item={getTopData()}></Header>;
        })} */}
      </div>
    </div>
  );
};

export default Home;
