import { ComponentModel } from '../models/component.model';

const Header = ({ item }: { item: ComponentModel }) => {
  return (
    <div className="flex flex-col items-start">
      <article className="my-5 text-pretty">
        <h3 className="font-display text-6xl text-offwhite">{item.title}</h3>
        <h3 className="font-display text-3xl text-orange">{item.subtitle}</h3>
        <br />
        <p className="whitespace-pre-line">{item.description}</p>
      </article>
      {item.url && (
        <a
          href={item?.url}
          target="_blank"
          className="my-5 rounded-full bg-orange px-5 py-2 text-sm font-semibold leading-5 text-white hover:bg-orange"
          rel="noreferrer"
        >
          Learn more
        </a>
      )}
    </div>
  );
};

export default Header;
