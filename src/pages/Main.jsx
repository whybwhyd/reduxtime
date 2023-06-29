import React from 'react';
import { styled } from 'styled-components';
import todos from"../redux/modules/todos";


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
          {todos.title}
          {todos.body}
        </TodoBox>
      </div>
      <div>
        <DoneBox>
          DONE
          {todos.title}
          {todos.body}
        </DoneBox>
      </div>

    </div>
  )
}

export default Main