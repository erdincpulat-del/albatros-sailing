const fs = require("fs");
const path = require("path");

const outDir = path.join(process.cwd(), "public", "flags");

if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

const flags = {
  "A.svg": `
<svg width="512" height="320" viewBox="0 0 512 320" xmlns="http://www.w3.org/2000/svg">
  <rect width="512" height="320" fill="#FFFFFF"/>
  <rect width="256" height="320" fill="#0033A0"/>
</svg>
`.trim(),

  "B.svg": `
<svg width="512" height="320" viewBox="0 0 512 320" xmlns="http://www.w3.org/2000/svg">
  <rect width="512" height="320" fill="#D6001C"/>
</svg>
`.trim(),

  "C.svg": `
<svg width="512" height="320" viewBox="0 0 512 320" xmlns="http://www.w3.org/2000/svg">
  <rect width="170.67" height="320" fill="#0033A0"/>
  <rect x="170.67" width="170.67" height="320" fill="#FFFFFF"/>
  <rect x="341.34" width="170.66" height="320" fill="#D6001C"/>
</svg>
`.trim(),

  "N.svg": `
<svg width="512" height="320" viewBox="0 0 512 320" xmlns="http://www.w3.org/2000/svg">
  <rect width="512" height="320" fill="#0033A0"/>
  <rect y="106.67" width="512" height="106.67" fill="#FFFFFF"/>
</svg>
`.trim(),

  "O.svg": `
<svg width="512" height="320" viewBox="0 0 512 320" xmlns="http://www.w3.org/2000/svg">
  <rect width="512" height="320" fill="#FFD100"/>
  <rect x="128" y="80" width="256" height="160" fill="#D6001C"/>
</svg>
`.trim(),

  "Q.svg": `
<svg width="512" height="320" viewBox="0 0 512 320" xmlns="http://www.w3.org/2000/svg">
  <rect width="512" height="320" fill="#FFD100"/>
</svg>
`.trim(),
};

for (const [fileName, content] of Object.entries(flags)) {
  fs.writeFileSync(path.join(outDir, fileName), content, "utf8");
  console.log(`Created: public/flags/${fileName}`);
}

console.log("Done.");