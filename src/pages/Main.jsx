import React,{useState}from 'react';
import { styled } from 'styled-components';


const HeadTitle= styled.h1`
 font-weight:bold;
`
const TodoBox= styled.div`
  border:2px solid black;
`
const DoneBox= styled.div`
  border:2px solid black;
`
function Main() {
  const [title,setTitle] = useState("")
  const [body,setBody] = useState("")
  return (
    <div>
      <HeadTitle>TODOLIST</HeadTitle>
      <form>
      title: <input/>
      body: <input/>
      <button>삭제</button>
      <button>삭제</button>
      </form>
      <div>
        <TodoBox>
          TODO
          {title}
          {body}
        </TodoBox>
      </div>
      <div>
        <DoneBox>
          DONE
          {title}
          {body}
        </DoneBox>
      </div>

    </div>
  )
}

export default Main