import { Route } from '@/routes/details.$itemId'
import Container from '@/shared/components/container.component'
import Header from '@/shared/components/header.component'
import ItemService from '@/shared/services/item.service'

const Details = () => {
  const { itemId } = Route.useParams()
  const item = new ItemService()
    .getItems()
    .flat()
    .find((f) => f.id == itemId)
  return (
    <div className="flex h-full w-full flex-col items-center text-white">
      <Container
        data={{
          styleClasses: 'basis-1/6 flex-col bg-white text-orange py-5'
        }}
      >
        <Header
          item={{ id: itemId, title: itemId, description: 'diz nutz' }}
        ></Header>
        <img key={item?.src} src={item?.src} alt={item?.alt}></img>
      </Container>
    </div>
  )
}

export default Details
