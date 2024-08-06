import {NavLink} from "react-router-dom";
import {getHttpMethodColor} from "../helpers.ts";
import {HttpMethod} from "../types.ts";
import "../css/NavTab.css"

interface Props {
    path: string,
    title: string,
    httpMethod?: HttpMethod,
}

function NavTab({path, title, httpMethod}: Props) {
    return (
        <NavLink
            to={path}
            className={({ isActive}) => [
                "nav-item nav-link text-white nav-hover rounded",
                isActive ? "active" : "",
            ].join(" ")}
        >
            {httpMethod &&
                <span
                    style={{color: getHttpMethodColor(httpMethod)}}
                    className={"fw-bold me-2"}
                >
                    {httpMethod}
                </span>
            }
            {title}
        </NavLink>
    );
}

export default NavTab;
