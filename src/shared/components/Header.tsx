import { ComponentModel } from '../models/component.model'

const Header = ({ item }: { item: ComponentModel }) => {
  return (
    <>
      <h2 className="my-5 text-2xl">{item.title}</h2>
      <div className="my-5">
        {item.description?.split('\n').map((m) => <p key={m}>{m}</p>)}
      </div>
      <a
        href={item?.url}
        target="_blank"
        className="my-5 rounded-full bg-orange px-5 py-2 text-sm font-semibold leading-5 text-white hover:bg-orange"
        rel="noreferrer"
      >
        Learn more
      </a>
    </>
  )
}

export default Header
