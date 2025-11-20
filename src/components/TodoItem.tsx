import { useState } from "react";
import type { Todo } from "../types/todo"
import { Check, Edit2, Trash2, X } from "lucide-react";

interface TodoItemProps {
    todo: Todo;
    onToggle : (id :number) => void;
    onDeleted : (id :number) => void;
    onUpdated: (id :number, newText: string) => void;
}
    const TodoItem = ({todo, onToggle,onDeleted,onUpdated}:TodoItemProps) => {
        const[isEditing, setIsEditing] = useState(false)
        const[editText, setEditText] = useState(todo.text)

        const handleSave = () => {
            if(editText.trim()) {
                onUpdated(todo.id, editText)
                setIsEditing(false)
            }
        }

        const handleCancel = () => {
            setEditText(todo.text)
            setIsEditing(false)
        }

        if(isEditing) {
            return(
                <div className=" flex items-center gap-2 p-4 bg-indigo-50 border-b border-indigo-100 animate-in fade-in">
                    <input 
                        type="text"
                        value={editText}
                        onChange={(e) => setEditText(e.target.value)}
                        className="flex-1 px-3 py-1 border border-indigo-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        autoFocus
                        onKeyDown={(e) => {
                            if(e.key === 'Enter') handleSave()
                            if(e.key === 'Escape') handleCancel()
                        }}
                    />
                    <button onClick={handleSave} className="text-green-600 hover:bg-green-200 p-1 rounded" title="Simpan"><Check size={18}/></button>
                    <button onClick={handleCancel} className="text-green-600 hover:bg-green-200 p-1 rounded" title="Batal"><X size={18}/></button>

                </div>
            )
        }
     return (
    <div className={`group flex items-center justify-between p-4 bg-white border-b border-slate-100 hover:bg-slate-50 transition-colors ${todo.completed ? 'bg-slate-50' : ''}`}>
      <div className="flex items-center gap-3 overflow-hidden">
        <button 
          onClick={() => onToggle(todo.id)}
          className={`shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors ${
            todo.completed 
              ? 'bg-green-500 border-green-500 text-white' 
              : 'border-slate-300 text-transparent hover:border-indigo-500'
          }`}
        >
          <Check size={14} strokeWidth={3} />
        </button>
        
        <div className="flex flex-col min-w-0">
          <span className={`truncate font-medium transition-all ${todo.completed ? 'line-through text-slate-400' : 'text-slate-700'}`}>
            {todo.text}
          </span>
          <span className="text-xs text-slate-400">{todo.createdAt}</span>
        </div>
      </div>

      <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
        {!todo.completed && (
          <button onClick={() => setIsEditing(true)} className="text-slate-400 hover:text-indigo-500 p-2 rounded-full hover:bg-indigo-50" title="Edit">
            <Edit2 size={18} />
          </button>
        )}
        <button onClick={() => onDeleted(todo.id)} className="text-slate-400 hover:text-red-500 p-2 rounded-full hover:bg-red-50" title="Hapus">
          <Trash2 size={18} />
        </button>
      </div>
    </div>
  );
};


export default TodoItem