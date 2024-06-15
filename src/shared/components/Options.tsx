import { ComponentModel } from '../models/component.model'

const Options = ({ items }: { items: ComponentModel[] }): JSX.Element => {
  const className =
    'flex h-full w-full items-center justify-center p-4 text-orange duration-300 ease-in-out hover:text-green'
  return (
    <>
      {items.map((item: ComponentModel) => {
        return (
          <div key={item.id} className={`${className} ${item.styleClasses}`}>
            <h2 className="text-2xl"> {item.title}</h2>
          </div>
        )
      })}
    </>
  )
}

export default Options
