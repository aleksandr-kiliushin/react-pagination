import { useContext } from 'react'

import PaginationContext from './context'

const usePagination = () => useContext(PaginationContext)

export default usePagination
