import { FC, useState } from 'react'

import PaginationContext from './context'

interface Props {
  size: number
}

const Pagination: FC<Props> = ({ children, size }) => {
  const [pageIndex, setPageIndex] = useState(0)
  const [pagesCount, setPagesCount] = useState(0)

  return (
    <PaginationContext.Provider
      value={{
        pageIndex,
        pageSize: size,
        pagesCount,
        setPageIndex,
        setPagesCount,
      }}
    >
      {children}
    </PaginationContext.Provider>
  )
}

export default Pagination
