import styled from '@emotion/styled'

import usePagination from './usePagination'

const ButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 4px;
  height: fit-content;
  margin-top: 26px;
`

const PaginationButton = styled.button<{ isActive: boolean }>`
  height: ${({ isActive }) => (isActive ? '8px' : '6px')};
  width: ${({ isActive }) => (isActive ? '8px' : '6px')};
  background-color: ${({ isActive }) => (isActive ? '#3e66fb' : '#bdbdbd')};
  border-radius: 50%;
  transition: all 0.15s;
  &:hover {
    background-color: #68c6e6;
  }
`

const PaginationButtons = () => {
  const { pageIndex, pagesCount, setPageIndex } = usePagination()

  return (
    <ButtonsWrapper>
      {Array.from(Array(pagesCount)).map((_, index) => (
        <PaginationButton
          isActive={index === pageIndex}
          key={index}
          onClick={() => setPageIndex(index)}
        />
      ))}
    </ButtonsWrapper>
  )
}

export default PaginationButtons
