import { Ellipsis, Search } from "lucide-react";


export function PikHeaderComponent() {
    return <div className="bg-slate-200 py-4 px-8 flex flex-row gap-2 rounded-4xl">
         <div>
             PIK
         </div>

        <div>
            <Ellipsis />
        </div>

        <a>
            Личный компонент
        </a>

        <a>
            Параметры квартиры
        </a>

        <a href="tel:88005353535" className="ml-auto">
            8 800 5353535
        </a>

        <div>
            <Search />
        </div>

        <div>

        </div>
    </div>;
}
