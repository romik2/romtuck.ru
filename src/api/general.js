export default async function general(method, timeout = 1000) {
    let params = {};
    if (timeout) {
        let controller = new AbortController();
        setTimeout(() => controller.abort(), timeout);
        params = Object.assign(params, {signal: controller.signal});
    }
    const api = await fetch(`http://127.0.0.1:8080/${method}`, params);
    return api.json();
}
