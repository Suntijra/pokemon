import { lazy } from 'react'
import App from './App.tsx'
import TablePokemon from "./page/ListPokemon.tsx"
import TodoList from './page/TodoList.tsx'
import TestAPI from './page/TestAPI.tsx'


export default [
    {
        path: "/",
        element: <App />,
    },
    {
        path: "/table",
        element: <TablePokemon />,
    },
    {
        path: "/todo",
        element: <TodoList />
    },
    {
        path: "/testapi",
        element: <TestAPI />
    },
]
