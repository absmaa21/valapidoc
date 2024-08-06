import {useState} from 'react';
import NavTab from "./NavTab.tsx";
import {EndpointRoute, HttpMethod} from "../types.ts";

interface Props {
    data: EndpointRoute[],
    title: string,
}

function NavCollapsible({ data, title }: Props) {
    const [collapsed, setCollapsed] = useState(false)

    return (
        <>
            <a className={"nav-collapse-title mx-2 d-flex justify-content-between mt-1"}
               onClick={() => setCollapsed(!collapsed)}>
                {title}
                {collapsed ? <i className={"bi bi-chevron-right"}/> : <i className={"bi bi-chevron-down"}/>}
            </a>
            {!collapsed && data.map(endpoint => (
                <NavTab
                    path={endpoint.route.path}
                    title={endpoint.route.title}
                    httpMethod={endpoint.endpoint.httpMethod as HttpMethod}
                />
            ))}
        </>
    );
}

export default NavCollapsible;
