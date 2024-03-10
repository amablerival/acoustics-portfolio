import Container from '@/shared/components/container.component'
import Header from '@/shared/components/header.component'
import MasonryGrid from '@/shared/components/masonry-grid.component'
import Options from '@/shared/components/options.component'

import HomeService from './home.service'

const Home = () => {
  const homeService = new HomeService()
  return (
    // <div className="flex basis-11/12 items-center justify-center bg-blue">
    <div className="flex h-full w-full flex-col items-center text-white">
      <Container data={{ styleClasses: 'basis-1/4 bg-eggshell' }}>
        <Options items={homeService.getTopData()}></Options>
      </Container>
      <MasonryGrid items={homeService.getMiddleData()}></MasonryGrid>
      <Container
        data={{
          styleClasses: 'basis-1/6 flex-col bg-white text-orange py-5'
        }}
      >
        <Header item={homeService.getBottomData()}></Header>
      </Container>
    </div>
    // </div>
  )
}

export default Home
