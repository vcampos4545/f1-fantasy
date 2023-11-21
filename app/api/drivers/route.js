export async function GET(req) {
    const url = "https://fantasy.formula1.com/feeds/drivers/22_en.json"
    const resp = await fetch(url);
    const data = await resp.json()
    return new Response(JSON.stringify(data));
}