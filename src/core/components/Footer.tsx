/* eslint-disable react/react-in-jsx-scope */
import FooterService from '../services/footer.service';

const Footer = () => {
  const service = new FooterService();
  return (
    <div className="bg-offwhite flex basis-1/12 items-center justify-center bg-opacity-70 py-6">
      {service.getFooterData().map((item) => (
        <div
          key={item.id}
          className="flex basis-1/12 items-center justify-center"
        >
          <a href={item?.url ?? '#'} target="_blank" rel="noreferrer">
            {item.title}
          </a>
        </div>
      )) ?? <p>FOOTER</p>}
    </div>
  );
};
export default Footer;
