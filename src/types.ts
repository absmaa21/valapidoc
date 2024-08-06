export type EndpointRoute = {
    route: Route,
    endpoint: Endpoint,
}

export type Route = {
    path: string,
    title: string,
}

export type Endpoint = {
    url: string,
    title: string,
    httpMethod: string,
    description: string,
    headers: {
        key: string,
        value: string,
        preValue?: string, // like Bearer
    }[],
    urlParameters: {
        title: string,
        description: string,
        optional?: boolean,
    }[],
    response: string, // json string
    body?: string, // json string
}

export enum HttpMethod {
    GET = "GET",
    POST = "POST",
    PUT = "PUT",
    DELETE = "DELETE",
}
