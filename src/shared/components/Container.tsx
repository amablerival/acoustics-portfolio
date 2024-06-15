import { ContainerProps } from '../models/container-props.model'

const Container: React.FC<ContainerProps> = ({ children, data }) => {
  const className = `flex size-full items-center justify-center ${data.styleClasses}`
  return <div className={className}>{children}</div>
}

export default Container
