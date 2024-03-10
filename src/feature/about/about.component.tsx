import Container from '@/shared/components/container.component'
import Header from '@/shared/components/header.component'
import Options from '@/shared/components/options.component'

import AboutService from './about.service'

const About = () => {
  const service = new AboutService()
  return (
    <div className="size-full flex flex-col items-center text-white">
      <Container data={{ styleClasses: 'basis-1/4 bg-eggshell' }}>
        <Options items={service.getTopData()}></Options>
      </Container>
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

export default About
