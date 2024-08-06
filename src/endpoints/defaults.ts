export const defaultHeaders = [
    {
        key: "X-Riot-ClientPlatform",
        value: "{client_platform}",
    },
    {
        key: "X-Riot-ClientVersion",
        value: "{client_version}",
    },
    {
        key: "X-Riot-Entitlements-JWT",
        value: "{entitlement_token}",
    },
    {
        key: "Authorization",
        value: "{auth_token}",
        preValue: "Bearer "
    },
]
