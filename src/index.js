export default {
  async fetch(request) {
    const ip = request.headers.get('CF-Connecting-IP') || '8.8.8.8';
    const res = await fetch(`http://ip-api.com/json/${ip}`);
    const data = await res.json();

    const html = `
      <html><head><title>IP Info</title></head><body>
        <h1>IP: ${ip}</h1>
        <pre>${JSON.stringify(data, null, 2)}</pre>
      </body></html>
    `;

    return new Response(html, {
      headers: { 'content-type': 'text/html' }
    });
  }
}