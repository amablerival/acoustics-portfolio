import * as Icon from 'react-feather'

import LinkBar from './Linkbar'

const NavBar = ({ title }: { title: string }) => {
  const isDesktop = true
  return (
    <div className="basis-1/12 bg-black">
      <div className="flex size-full items-center p-5 text-white">
        <div className="flex basis-1/2 justify-start text-orange">
          <Icon.Circle />
        </div>
        <div className="flex basis-1/4 justify-center">
          <h1 className="text-center text-3xl capitalize">{title}</h1>
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
  )
}

export default NavBar
