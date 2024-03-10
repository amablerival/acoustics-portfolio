import { MasonryGridOption } from '../models/masonry-grid.model'

const MasonryGrid = ({ items }: { items?: MasonryGridOption[][] }) => {
  return (
    <>
      <div className="grid grid-cols-2 gap-0 md:grid-cols-4">
        {items?.map((grid, i) => {
          return (
            <div key={i} className="grid gap-0">
              {grid.map((item) => (
                <a key={item.id} href={item.id}>
                  {' '}
                  <img
                    key={item.src}
                    src={item.src}
                    alt={item.alt}
                    className="duration-300 ease-in-out hover:opacity-10"
                  ></img>
                </a>
              ))}
            </div>
          )
        })}
      </div>
    </>
  )
}

export default MasonryGrid
