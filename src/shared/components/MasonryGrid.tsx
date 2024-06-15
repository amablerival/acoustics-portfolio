import { Link } from '@tanstack/react-router'

import { MasonryGridOption } from '../models/masonry-grid.model'

const MasonryGrid = ({ items }: { items?: MasonryGridOption[][] }) => {
  return (
    <>
      <div className="grid grid-cols-2 gap-0 md:grid-cols-4">
        {items?.map((grid, i) => {
          return (
            <div key={i} className="grid gap-0">
              {grid.map((item) => (
                <Link
                  key={item.id}
                  to={'/details/$itemId'}
                  params={{ itemId: item.id }}
                >
                  <img
                    key={item.src}
                    src={item.src}
                    alt={item.alt}
                    className="duration-300 ease-in-out hover:opacity-10"
                  ></img>
                </Link>
              ))}
            </div>
          )
        })}
      </div>
    </>
  )
}

export default MasonryGrid
