import React from 'react'
import ReactDom from 'react-dom/client'
import "./style.css"
import { TodoApp } from './components/TodoApp'


ReactDom.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <TodoApp></TodoApp>
  </React.StrictMode>,
)
