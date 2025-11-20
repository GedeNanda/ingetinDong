import type { FilterType } from "../types/todo"

interface FilterTabProps{
  currentFilter: FilterType
  onFilterChange: (filter:FilterType) => void
}


const FilterTabs = ({currentFilter, onFilterChange}:FilterTabProps) => (
  <div className="flex p-2 bg-slate-50 border-b border-slate-100 overflow-x-auto">
    {(['all', 'active', 'completed'] as FilterType[]).map((f) => (
      <button 
        key={f}
        onClick={() => onFilterChange(f)}
        className={`flex-1 py-2 px-3 rounded-md text-sm font-medium capitalize transition-colors ${
          currentFilter === f 
            ? 'bg-white text-indigo-600 shadow-sm border border-slate-200'
            : 'text-slate-500 hover:text-slate-700 hover:bg-slate-100'
        }`}
      >
        {f === 'all' ? 'Semua' : f === 'active' ? 'Aktif' : 'Selesai'}
      </button>
    ))
    }
  </div>
)
  

export default FilterTabs