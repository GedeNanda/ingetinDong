import { Calendar } from "lucide-react"

const EmptyState = ({message}: {message:string}) => (
    <div className="h-64 flex flex-col items-center justify-center text-slate-400 text-center p-6">
        <div className="bg-white p-4 rounded-full mb-4 shadow-sm">
            <Calendar size={32} className="text-slate-300"/>
        </div>
        <p className="font-medium">{message}</p>
    </div>
)
  


export default EmptyState