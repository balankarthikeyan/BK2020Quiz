import React from 'react'
import Link from 'next/link'
import styled, {css} from 'styled-components'
import {QuizContext} from '../GlobalContext/context'







function QuizTemplate(props:any = {}) {
  const Button = styled.button`
    padding: 10px 20px;
    background: #b2b2b2;
    color: black;
    text-transform: uppercase;
    font-size: 1vw;
    border: none;
    margin: 5px;
    ${(props) =>
      props.active &&
      css`
      background: black;
    color: white;
      `};
  `
  let pushed = []

  const  ButtonGroup = (props: any) => {
    const {
      list,
      activeMenuIdx = 0,
      shouldToggle = false,
      renderTabItemMenu,
      ...remainingProps
    } = props as any
    const [activeTabIdx, setActiveTabIdx] = React.useState(activeMenuIdx)

    const onTabMenuClick = (e: any) => {
      e.preventDefault()
      const curMenuIdx = +e.currentTarget.getAttribute('data-key')
      if (curMenuIdx === activeTabIdx && shouldToggle === true) {
        setActiveTabIdx(-1)
      } else {
        setActiveTabIdx(curMenuIdx)
      }
    }

    const renderButtonGroup = (item: any, index: number) => {
      const title = item
      const titleClassName =
        'button-menu-title' +
        (activeTabIdx === index
          ? ` active${!shouldToggle ? ' prevent' : ''}`
          : '')
      const children =
        renderTabItemMenu !== undefined
          ? renderTabItemMenu(title, index)
          : title
          ? title
          : `Tab ${index}`

      return (
        <React.Fragment key={`button-menu-${index}`}>
          <Button
            title={title}
            className={titleClassName}
            onClick={onTabMenuClick}
            data-key={index}
            role="navigation"
            active={activeTabIdx === index}
          >
            {children}
          </Button>
        </React.Fragment>
      )
    }




    return (
        <section className="base-button-menu-panel">
          {list && list.map(renderButtonGroup)}
        </section>
    )
  }


  
  const { questionNumber = 0, question = 'text', answers = ['option 01', 'option 02'], onToggle = () => '' as any} = props as any
  return <div>
          <h1>{question}</h1>
          <ButtonGroup list={answers} activeMenuIdx={-1} />
          
        </div>
}

function QuizList() {
  const {fetchListData:list ={}} = React.useContext(QuizContext)
  const onToggle = (obj = {}) => {
    if(obj){
      list[obj.questionNumber].choosed = obj.index
    }
  }
  return list.length > 0 ? list.map((item, index) => {
    return <React.Fragment key={`item_${index}`}><QuizTemplate questionNumber={index} answers={item.answers} question={item.question} onToggle={onToggle} /></React.Fragment>
  }) : <></>
}

function Quiz(props = {}) {
  const Main = styled.main`
  width: 70%;
  margin: auto;
  text-align: center;
`
const Button = styled.button`
    padding: 10px 20px;
    background: black;
    color: white;
    text-transform: uppercase;
    font-size: 1vw;
    border: none;
    margin: 5px;
    margin-top: 40px;
   
  `

const config = [{}, {}, {}, {}, {}]
  return (
    <Main>
    <h1>Select Any One Option</h1>
    
    <QuizList />
    <Link href="/result">
        <Button> Submit </Button>
      </Link>
  </Main>
  )
}

Quiz.getInitialProps = async ()  => {
  const isServer = typeof window === 'undefined'
  return { isServer }
}



export { Quiz }
export default Quiz
