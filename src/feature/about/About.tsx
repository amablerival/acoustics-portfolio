import Container from '@/shared/components/Container'
import Header from '@/shared/components/Header'
import Options from '@/shared/components/Options'

import AboutService from './about.service'

const About = () => {
  const service = new AboutService()
  return (
    <div className="flex size-full flex-col items-center text-white">
      <Container data={{ styleClasses: 'basis-1/4 bg-eggshell' }}>
        <Options items={service.getTopData()}></Options>
      </Container>
      <Container
        data={{
          styleClasses: 'basis-1/6 flex-col bg-white text-orange py-5'
        }}
      >
        <Header item={service.getBottomData()}></Header>p
      </Container>
    </div>
  )
}

export default About
