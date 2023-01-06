export default async function general(method, timeout = 1000) {
    let params = {};
    if (timeout) {
        let controller = new AbortController();
        setTimeout(() => controller.abort(), timeout);
        params = Object.assign(params, {signal: controller.signal});
    }
    const api = await fetch(`/${method}`, params);
    return api.json();
}
