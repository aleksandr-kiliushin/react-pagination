import { Dispatch, SetStateAction, createContext } from 'react'

interface IPaginationContext {
  pageIndex: number
  pagesCount: number
  pageSize: number
  setPageIndex: Dispatch<SetStateAction<number>>
  setPagesCount: Dispatch<SetStateAction<number>>
}

const PaginationContext = createContext<IPaginationContext>({
  pageIndex: 0,
  pagesCount: 0,
  pageSize: 0,
  setPageIndex: () => {},
  setPagesCount: () => {},
})

export default PaginationContext
