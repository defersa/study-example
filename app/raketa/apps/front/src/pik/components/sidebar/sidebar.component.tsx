import { SidebarPanelComponent } from "./components/sidebar-panel.component";


export function SidebarComponent() {
    return <div className="flex flex-col gap-3 rounded-2xl bg-white p-4">
        <SidebarPanelComponent name={'Мои объекты'}/>
    </div>;
}
