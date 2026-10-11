import sharp from 'sharp';
import { mkdirSync, readdirSync, existsSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join, parse } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const imagesDir = join(__dirname, '..', 'public', 'images');

// Облегчённые копии для сетки работ, карточек услуг и первого экрана
const jobs = [
  { from: 'img-slider', to: 'img-slider-thumb', width: 640 },
  { from: 'img-service-list', to: 'img-service-list/sm', width: 720 },
];

const single = [
  { from: 'master/master.webp', to: 'master/master-hero.webp', width: 900 },
  { from: 'master/Vmake-1698823635.webp', to: 'master/master-studio.webp', width: 840 },
];

console.log('Generating thumbnails...');

for (const { from, to, width } of jobs) {
  const outDir = join(imagesDir, to);
  mkdirSync(outDir, { recursive: true });
  for (const file of readdirSync(join(imagesDir, from))) {
    if (!/\.(webp|jpe?g|png)$/i.test(file)) continue;
    const outputPath = join(outDir, `${parse(file).name}.webp`);
    await sharp(join(imagesDir, from, file))
      .rotate()
      .resize({ width, withoutEnlargement: true })
      .webp({ quality: 78 })
      .toFile(outputPath);
    console.log(`✓ Created ${outputPath}`);
  }
}

for (const { from, to, width } of single) {
  const sourcePath = join(imagesDir, from);
  if (!existsSync(sourcePath)) continue;
  const outputPath = join(imagesDir, to);
  await sharp(sourcePath)
    .rotate()
    .resize({ width, withoutEnlargement: true })
    .webp({ quality: 80 })
    .toFile(outputPath);
  console.log(`✓ Created ${outputPath}`);
}

console.log('\n✓ Thumbnail generation complete!');
