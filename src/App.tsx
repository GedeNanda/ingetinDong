import EmptyState from "./components/EmptyState"
import FilterTabs from "./components/FilterTabs"
import Header from "./components/Header"
import TodoInput from "./components/TodoInput"
import TodoItem from "./components/TodoItem"
import { useTodos } from "./hooks/useTodos"

const App = () => {

  const {
    activeCount,
    addTodo,
    filter,
    setFilter,
    deletedTodo,
    filteredTodos,
    toggleTodo,
    updateTodo
  } = useTodos()


  return (
    <div className="min-h-screen bg-slate-100 text-slate-800 font-sans ">
      <div className="max-w-md mx-auto bg-white shadow-xl overflow-hidden">
        <Header activeCount={activeCount}/>
        <TodoInput onAdd={addTodo}/>
        <FilterTabs currentFilter={filter} onFilterChange={setFilter}/>
        <div className="=bg-slate-50 overflow-y-auto">
          {filteredTodos.length === 0 ? (
            <EmptyState message={filter === "completed" ? "Belum ada tugas selesai..." : "Tidak ada tugas ditemukan"}/>
          ) : (
            filteredTodos.map(todo => (
              <TodoItem onDeleted={deletedTodo} onToggle={toggleTodo} onUpdated={updateTodo} todo={todo} key={todo.id}/>
            ))
          )
          }
        </div>
      </div>
      
    </div>
  )
}

export default App