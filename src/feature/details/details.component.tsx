import { Route } from '@/routes/details.$itemId'
import Container from '@/shared/components/container.component'
import Header from '@/shared/components/header.component'
import ItemService from '@/shared/services/item.service'

const Details = () => {
  const { itemId } = Route.useParams()
  const item = ItemService.getInstance().findItem({ itemId })
  return (
    <div className="flex size-full flex-col items-center text-white">
      <Container
        data={{
          styleClasses: 'basis-1/6 flex-col bg-white text-orange py-5'
        }}
      >
        <Header
          item={{ id: itemId, title: itemId, description: 'diz nutz' }}
        ></Header>
        {item ? (
          <img key={item?.src} src={item?.src} alt={item?.alt}></img>
        ) : (
          <p>NO IMAGE</p>
        )}
      </Container>
    </div>
  )
}

export default Details
