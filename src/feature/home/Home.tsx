import Box from '@/shared/components/Box'
import Container from '@/shared/components/Container'
import Header from '@/shared/components/Header'
import MasonryGrid from '@/shared/components/MasonryGrid'
import Options from '@/shared/components/Options'

import CanvasComponent from '../canvas/Canvas'
import HomeService from './home.service'

const Home = () => {
  const service = new HomeService()
  return (
    <div className="flex size-full flex-col items-center text-white">
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
      <Container data={{ styleClasses: 'bg-black' }}>
        <CanvasComponent>
          <Box position={[-1.2, 0, 0]} />
          <Box position={[1.2, 0, 0]} />
        </CanvasComponent>
      </Container>
    </div>
  )
}

export default Home
