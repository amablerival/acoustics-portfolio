import * as Unicons from '@iconscout/react-unicons'
import { Link } from '@tanstack/react-router'

import NavbarService from '../services/navbar.service'

const LinkBar = () => {
  const service = new NavbarService()
  return (
    <>
      <div className="flex items-center justify-center py-6">
        {service.getNavbarConfig().map((item) => (
          <div
            key={item.id}
            className="mx-5 flex items-center justify-start text-gray"
          >
            <Link
              to={item?.link ? item.link : '/'}
              activeProps={{ className: 'text-white' }}
            >
              {item.title}
            </Link>
          </div>
        ))}
      </div>
    </>
  )
}

const NavBar = ({ title }: { title: string }) => {
  const isDesktop = true
  return (
    <div className="basis-1/12 bg-black">
      <div className="flex h-full w-full items-center p-5 text-white">
        <div className="flex basis-1/2 justify-start text-orange">
          <Unicons.UilCircle />
        </div>
        <div className="flex basis-1/4 justify-center">
          <h1 className="text-center text-3xl capitalize">{title}</h1>
        </div>
        <div className="flex basis-1/2 justify-end">
          {isDesktop ? (
            <LinkBar></LinkBar>
          ) : (
            <button className="rounded-lg px-4 py-2">
              <Unicons.UilEllipsisH />
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

export default NavBar
