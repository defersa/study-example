import { SidebarLinkComponent } from "./sidebar-link.component";


// пропсы через деконструкцию
export function SidebarPanelComponent({ name }: { name: string }) {
    const items: string[] = ['ОДИН', 'ДВА', 'ЧЕТЫРЕ'];

    return <div className="bg-slate-100 rounded-md p-4 flex flex-col gap-3">
        <h3>{name}</h3>

        <div className="flex flex-col gap-1">
            <SidebarLinkComponent name={'ZERO'}/>

            {
                items.map((name) => <SidebarLinkComponent name={name}/>)
            }

            <SidebarLinkComponent name={'PYAT'}/>
        </div>
    </div>;
}
