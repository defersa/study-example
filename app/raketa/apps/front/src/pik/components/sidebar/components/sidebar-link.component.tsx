
// prop - без деконструкции
export function SidebarLinkComponent(prop: { name: string }) {
    return <div className="">
        {prop.name}
    </div>;
}
