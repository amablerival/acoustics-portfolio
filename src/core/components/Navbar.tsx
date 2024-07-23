/* eslint-disable react/react-in-jsx-scope */
import { Link } from '@tanstack/react-router';
import * as Icon from 'react-feather';

import LinkBar from './Linkbar';

import favi from '../../../public/img/Raiz Fav 1.png';
import logo from '../../../public/img/Raiz logo 4.png';

const NavBar = ({ title }: { title: string }) => {
  const isDesktop = true;
  return (
    <div className="bg-dark-green basis-1/12 bg-opacity-70">
      <div className="flex size-full items-center p-5 text-white">
        <div className="flex basis-1/2 justify-start text-orange">
          <Link to={'/'} activeProps={{ className: 'text-white' }}>
            {/* <Icon.Circle size={31} /> */}
            <img src={favi} alt="raiz-favi" style={{ width: '31px' }} />
          </Link>
        </div>
        <div className="flex basis-1/4 justify-center">
          <img src={logo} alt="raiz-logo" style={{ width: '180px' }} />
        </div>
        <div className="flex basis-1/2 justify-end">
          {isDesktop ? (
            <LinkBar></LinkBar>
          ) : (
            <button className="rounded-lg px-4 py-2">
              <Icon.Menu />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
