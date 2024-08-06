import {HttpMethod} from "./types.ts";

export function getHttpMethodColor(httpMethod: HttpMethod) {
    switch (httpMethod) {
        case HttpMethod.GET: return "#9ffe9e"
        case HttpMethod.POST: return "#92ade8"
        case HttpMethod.PUT: return "#d6eaa2"
        case HttpMethod.DELETE: return "#dd9192"
        default: return "#eee"
    }
}
