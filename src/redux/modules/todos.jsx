import shortid from "shortid";
import {useState} from 'react';

const initialState=[
    {id:shortid.generate(),
    title:"자바스크립트 공부하기",
    body:"자바스크립트 개념 공부하기",
    isDone:true,
    },
    {id:shortid.generate(),
    title:"프로그래머스 입문 문제 풀기",
    body:"문제풀이 및 해설 til 쓰기",
    isDone:true,
    },
    {id:shortid.generate(),
    title:"리액트 공부하기",
    body:"리액트 실습으로 공부하기",
    isDone:false,
    },
    {id:shortid.generate(),
    title:"리덕스 공부하기",
    body:"리덕스로 todolist 만들기",
    isDone:false,
    },
    ]
  const [title,setTitle] = useState("")
  const [body,setBody] = useState("")

    const todos = (state=initialState,action)=>{
        switch(action.type){
            case "ADD_TODO":
              return[...state,action.payload];
            case "DELETE_TODO":
              return state.filter((todo)=> todo.id !== action.payload);
            case "SWITCH_TODO":
              return state.map ((todo)=>{
                if (todo.id === action.payload){
                  return {...todo, isDone:!todo.isDone};
                }else{
                  return todo;
                }
              })
            default:
              return state;
            
        }
    }
    export default todos;