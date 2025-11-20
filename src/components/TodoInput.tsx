import { Plus } from "lucide-react"
import React, { useState } from "react"

interface TodoInputProps {
    onAdd: (text : string) => void
}

const TodoInput = ({onAdd} :TodoInputProps) => {
    const [text, setText] = useState('')

    const handleSubmit = (e :React.FormEvent) => {
        e.preventDefault()
        if(text.trim()) {
            onAdd(text)
            setText('')
        }
    }
  return (
    <div>
        <form onSubmit={handleSubmit} className="relative">
            <input type="text"
            placeholder="Tambahkan tugas baru..."
            className="w-full pl-4 pr-12 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
            value={text}
            onChange={(e) => setText(e.target.value)}
            />
            <button type="submit" disabled={!text.trim()} className="absolute right-2 top-2 bottom-2 bg-indigo-600 hover:bg-indigo-700 text-white p-2 rounded-xl transition-colors disabled:opacity-50 disabled:cursor-not-allowed " >
                <Plus size={20}/>
            </button>
        </form>
    </div>
  )
}

export default TodoInput