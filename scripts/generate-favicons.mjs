import sharp from 'sharp';
import { writeFileSync, mkdirSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const publicDir = join(__dirname, '..', 'public');

const sizes = [16, 32, 48];
const sourcePath = join(publicDir, 'logo192.png');

console.log('Generating favicons...');

// Generate PNG favicons
for (const size of sizes) {
  const outputPath = join(publicDir, `favicon-${size}x${size}.png`);
  await sharp(sourcePath)
    .resize(size, size, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toFile(outputPath);
  console.log(`✓ Created ${outputPath}`);
}

// Generate multi-size ICO file
// Note: ICO format requires manual creation or using a specialized library
// For now, we'll create individual PNGs and recommend using a service like realfavicongenerator.net
// Or we can use the existing 32x32 as .ico

console.log('\n✓ Favicon generation complete!');
console.log('Files created in public/:');
console.log('  - favicon-16x16.png');
console.log('  - favicon-32x32.png');
console.log('  - favicon-48x48.png');
