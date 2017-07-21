export function options(token: string) {
    return function (defaults, url) {
        defaults.credentials = 'include'

        if (token)
            defaults.headers['Authorization'] = `Bearer ${token}`
    }
}