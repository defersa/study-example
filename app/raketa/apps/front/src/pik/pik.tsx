import { PikHeaderComponent } from './components/header/header.component';
import { SidebarComponent } from "./components/sidebar/sidebar.component";


export function PickComponent(

) {

    return (<div className="w-full h-1000 px-10 py-4 bg-slate-100 flex flex-col gap-4">
        <PikHeaderComponent/>

        <div className="flex flex-row gap-3">
            <SidebarComponent/>

            <div id="content" className="w-100">

            </div>
        </div>
    </div>);
}
