import Header from '@/shared/components/Header';

import AboutService from './about.service';

const About = () => {
  const { getTopData } = new AboutService();
  return (
    <div className="flex size-full flex-col items-center text-white">
      <div className="flex h-full items-center justify-center px-60 py-6">
        <Header item={getTopData()}></Header>
      </div>
    </div>
  );
};

export default About;
