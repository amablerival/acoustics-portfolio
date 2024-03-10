import Container from '@/shared/components/container.component'
import Header from '@/shared/components/header.component'
import MasonryGrid from '@/shared/components/masonry-grid.component'
import Options from '@/shared/components/options.component'

import HomeService from './home.service'

const Home = () => {
  const service = new HomeService()
  return (
    <div className="size-full flex flex-col items-center text-white">
      <Container data={{ styleClasses: 'basis-1/4 bg-eggshell' }}>
        <Options items={service.getTopData()}></Options>
      </Container>
      <MasonryGrid items={service.getMiddleData()}></MasonryGrid>
      <Container
        data={{
          styleClasses: 'basis-1/6 flex-col bg-white text-orange py-5'
        }}
      >
        <Header item={service.getBottomData()}></Header>
      </Container>
    </div>
  )
}

export default Home
