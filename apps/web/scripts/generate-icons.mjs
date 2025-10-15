import sharp from 'sharp';
import { readFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const sizes = [
  { size: 192, name: 'pwa-192x192.png' },
  { size: 512, name: 'pwa-512x512.png' },
  { size: 180, name: 'apple-touch-icon.png' },
  { size: 32, name: 'favicon.ico' },
];

const svgPath = join(__dirname, '../public/icon.svg');
const publicDir = join(__dirname, '../public');

console.log('🎨 Generating PWA icons...\n');

async function generateIcons() {
  const svgBuffer = readFileSync(svgPath);

  for (const { size, name } of sizes) {
    const outputPath = join(publicDir, name);

    await sharp(svgBuffer)
      .resize(size, size)
      .png()
      .toFile(outputPath);

    console.log(`✓ Generated ${name} (${size}x${size})`);
  }

  // Create maskable icon (with padding for Android adaptive icons)
  const maskableSize = 512;
  const padding = Math.floor(maskableSize * 0.1); // 10% padding

  await sharp({
    create: {
      width: maskableSize,
      height: maskableSize,
      channels: 4,
      background: { r: 15, g: 23, b: 42, alpha: 1 } // #0f172a
    }
  })
    .composite([
      {
        input: await sharp(svgBuffer)
          .resize(maskableSize - padding * 2, maskableSize - padding * 2)
          .toBuffer(),
        top: padding,
        left: padding
      }
    ])
    .png()
    .toFile(join(publicDir, 'pwa-512x512-maskable.png'));

  console.log(`✓ Generated pwa-512x512-maskable.png (${maskableSize}x${maskableSize})`);

  console.log('\n✨ All icons generated successfully!');
}

generateIcons().catch(console.error);
