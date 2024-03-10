import { PropsWithChildren } from 'react'

export interface ContainerProps extends PropsWithChildren {
  data: {
    styleClasses: string
  }
}
