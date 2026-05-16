export async function GET() {
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">

  <url>
    <loc>https://albatros-sailing.com.tr</loc>
  </url>

  <url>
    <loc>https://albatros-sailing.com.tr/programs</loc>
  </url>

  <url>
    <loc>https://albatros-sailing.com.tr/contact</loc>
  </url>

  <url>
    <loc>https://albatros-sailing.com.tr/verify</loc>
  </url>

  <url>
    <loc>https://albatros-sailing.com.tr/bodrum-yelken-egitimi</loc>
  </url>

  <url>
    <loc>https://albatros-sailing.com.tr/offshore-yelken-egitimi</loc>
  </url>

  <url>
    <loc>https://albatros-sailing.com.tr/konaklamali-yelken-egitimi</loc>
  </url>

  <url>
    <loc>https://albatros-sailing.com.tr/yat-kaptanligi-egitimi</loc>
  </url>

  <url>
    <loc>https://albatros-sailing.com.tr/yelkenli-yat-okulu</loc>
  </url>

  <url>
    <loc>https://albatros-sailing.com.tr/ege-denizi-yelken-rotalari</loc>
  </url>

</urlset>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}