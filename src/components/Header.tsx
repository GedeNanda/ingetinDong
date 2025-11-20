import { LayoutList } from "lucide-react"

const Header = ({activeCount}: {activeCount: number}) => {
  return (
    <div className="bg-indigo-600 p-6 text-white">
        <div className="flex items-center justify-between mb-4">
            <h1 className="text-2xl font-bold flex items-center gap-2">
                <LayoutList/>
                IngetinDong</h1>
            <span className="text-indigo-100 text-sm bg-indigo-700 px-3 rounded-full py-1 "> {activeCount} Tugas Aktif</span>
        </div>
        <p className="text-sm text-indigo-100">Ingetin Dong — biar hidup nggak lupa-lupa mulu.</p>
    </div>
  )
}

export default Header