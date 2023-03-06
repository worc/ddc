import React from 'react'
import styled from 'styled-components'

interface Props {
  header: string
}
export default function ListLayout (props: React.PropsWithChildren<Props>) {
  const { children, header } = props

  return (
    <Container>
      <h2 className="list-header">{ header }</h2>
      <div className="list-container">
        { children }
      </div>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-flow: row nowrap;
  padding-top: 4px;
  transition: height 0.2s ease-in-out 0.1s;

  & > .list-header {
    flex: 0 0 auto;
    order: 2;
    writing-mode: vertical-lr;
    width: 45px;
  }

  & > .list-container {
    flex: 1 0 auto;
    max-width: calc(100% - 50px);
    order: 1;
  }
`
