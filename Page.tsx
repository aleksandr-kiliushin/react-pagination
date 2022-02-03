import { ElementType, FC, useEffect } from 'react'

import usePagination from './usePagination'

interface Props {
  Component: ElementType
}

const Page: FC<Props> = ({ children, Component }) => {
  const { pageIndex, pageSize, setPagesCount } = usePagination()

  useEffect(() => {
    const pagesCount = Math.ceil((children as []).length / pageSize)
    setPagesCount(pagesCount)
  }, [children, pageSize, setPagesCount])

  const from = pageIndex * pageSize
  const to = from + pageSize

  const pageContent = (children as []).slice(from, to)

  return <Component>{pageContent}</Component>
}

export default Page
