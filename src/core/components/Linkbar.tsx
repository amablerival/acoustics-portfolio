import { Link } from '@tanstack/react-router';

import NavbarService from '../services/navbar.service';

const LinkBar = () => {
  const service = new NavbarService();
  return (
    <>
      <div className="flex items-center justify-center py-6">
        {service.getNavbarConfig().map((item) => (
          <div
            key={item.id}
            className="text-gray mx-5 flex items-center justify-start"
          >
            <Link
              to={item?.link ? item.link : '/'}
              activeProps={{ className: 'text-orange' }}
              inactiveProps={{ className: 'text-offwhite' }}
            >
              {item.title}
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default LinkBar;
