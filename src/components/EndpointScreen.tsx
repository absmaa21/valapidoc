import {Endpoint, HttpMethod} from "../types.ts";
import {getHttpMethodColor} from "../helpers.ts";
import "../css/global.css"
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter';
import {vscDarkPlus as syntaxStyle} from 'react-syntax-highlighter/dist/esm/styles/prism';

interface Props {
    endpoint: Endpoint,
}

function EndpointScreen({endpoint}: Props) {
    const httpColor = getHttpMethodColor(endpoint.httpMethod as HttpMethod)

    return (
        <div className={"bg-dark min-vh-100 text-white p-2"}>
            <div className={'container d-flex flex-column gap-3'}>
                <h1 className={"text-center fw-normal"}>
                    <span className={"me-3 fw-semibold"}
                          style={{color: httpColor}}>{endpoint.httpMethod}</span>
                    {endpoint.title}
                </h1>
                <div className={"d-flex justify-content-center fs-5"}>
                    <code
                        className={"d-block bg-black p-2 rounded break-all max-w-fit text-white"}>{endpoint.url}</code>
                </div>
                <p className={"fs-5"}>{endpoint.description}</p>
                <div>
                    <h4>Headers</h4>
                    {endpoint.headers.map(h =>
                        <ul className={"d-flex mb-2 fs-5-4 ps-0 gap-4"}>•
                            <li className={"d-block bg-black code break-all max-w-fit px-1"}>
                                {h.key}: {h.preValue}
                                <span className={"text-highlight"}>{h.value}</span>
                            </li>
                        </ul>
                    )}
                </div>
                <div>
                    <h4>URL Parameters</h4>
                    {endpoint.urlParameters.map(p =>
                        <ul className={"d-flex mb-2 fs-5-4 ps-0 gap-4"}>•
                            <div>
                                <div className={"d-flex gap-2"}>
                                    <li className={"d-block bg-black code max-w-fit px-1 text-highlight mb-1"}>
                                        {p.title}
                                    </li>
                                    {p.optional && <span className={"code fs-6 text-white-50"}>optional</span>}
                                </div>
                                <pre className={"text-white ps-3 code"}>{p.description}</pre>
                            </div>
                        </ul>
                    )}
                </div>
                {endpoint.body && <>
                    <h4 style={{marginBottom: -6}}>Body</h4>
                    <SyntaxHighlighter language={"typescript"} style={syntaxStyle}
                                       customStyle={{backgroundColor: 'black', borderRadius: 8}}>
                        {`type ${endpoint.title.replace(" ", "")}Body = ${endpoint.body}`}
                    </SyntaxHighlighter>
                </>}
                <h4 style={{marginBottom: -10}}>Response</h4>
                <SyntaxHighlighter language={"typescript"} style={syntaxStyle}
                                   customStyle={{backgroundColor: 'black', borderRadius: 8}}>
                    {`type ${endpoint.title.replace(" ", "")}Response = ${endpoint.response}`}
                </SyntaxHighlighter>
            </div>
        </div>
    );
}

export default EndpointScreen;
