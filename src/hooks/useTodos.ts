import { useEffect, useState } from "react"
import type { FilterType, Todo } from '../types/todo'
export const useTodos = () => {
    const [todos, setTodos] = useState<Todo[]>(() =>{
        if (typeof window !== "undefined") {
            const savedTodos = localStorage.getItem('todolistapp')
            return savedTodos ? JSON.parse(savedTodos) : [];
        }
        return []
    })
    const [filter, setFilter] = useState<FilterType>('all')

    useEffect(() => {
        localStorage.setItem('todolistapp', JSON.stringify(todos))
    },[todos])

    const addTodo = (text:string) => {
        const newTodo: Todo = {
            id : Date.now(),
            text,
            completed: false,
            createdAt : new Date().toLocaleDateString('id-ID',{weekday : 'long', day:'numeric', month: 'short'} )
        }
        setTodos([newTodo,...todos])
    }

    const toggleTodo = (id : number) => {
        setTodos(todos.map(t => t.id === id ? {...t, completed : !t.completed} : t))
    }

    const deletedTodo = (id:number) => {
        setTodos(todos.filter(t => t.id !== id))
    }

    const updateTodo = (id:number, newText: string) => {
        setTodos(todos.map(t => t.id === id ? {...t, text:newText} : t ))
    }

    const filteredTodos = todos.filter(todo => {
        if(filter === 'active') return !todo.completed
        if(filter === 'completed') return todo.completed
        return true 
    })

    const activeCount = todos.filter(t => !t.completed).length
    return{
        todos,
        activeCount,
        filter,
        addTodo,
        deletedTodo,
        updateTodo,
        filteredTodos,
        toggleTodo,
        setFilter
    }
}

