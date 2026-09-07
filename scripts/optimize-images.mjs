#!/usr/bin/env node
/**
 * Generates responsive WebP/AVIF assets from assets-source.
 * Run `npm run build:images`; generated files are committed under src/assets.
 */

import sharp from 'sharp';
import { mkdir, readdir, stat } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');
const assets = path.join(root, 'src', 'assets');
const sources = path.join(root, 'assets-source');

const HERO_FILES = [
    'image1.jpeg',
    'image4.jpeg',
    'image6.jpeg',
    'image7.jpeg',
    'image8.jpeg',
    'image9.jpeg',
    'image10.jpeg',
];

// NOTE: Keep 1440 to prevent common desktop viewports from downloading the 1920 variant.
const HERO_WIDTHS = [640, 1280, 1440, 1920];
// NOTE: Hero quality assumes the dark overlay; raising it regresses transfer size with little visible gain.
const WEBP_QUALITY = 60;
const AVIF_QUALITY = 48;
const CLIENT_LOGO_MAX_WIDTH = 400;

const LOGO_JOBS = [
    {
        src: 'logos/LOGO_WHITE-WITHOUT_BACKGROUND.png',
        outDir: 'logos',
        widths: [90, 180],
        quality: 82,
    },
];

async function ensureDir(dir) {
    if (!existsSync(dir)) {
        await mkdir(dir, { recursive: true });
    }
}

async function fileSizeKb(filepath) {
    const s = await stat(filepath);
    return (s.size / 1024).toFixed(1);
}

async function processHero() {
    const srcDir = path.join(sources, 'hero');
    const outDir = path.join(assets, 'hero');
    await ensureDir(outDir);

    for (const file of HERO_FILES) {
        const src = path.join(srcDir, file);
        if (!existsSync(src)) {
            console.warn(`[images]   skip: ${file} (missing)`);
            continue;
        }

        const base = path.basename(file, path.extname(file));
        const srcKb = await fileSizeKb(src);

        for (const width of HERO_WIDTHS) {
            const outWebp = path.join(outDir, `${base}-${width}.webp`);
            await sharp(src)
                .resize({ width, withoutEnlargement: true })
                .webp({ quality: WEBP_QUALITY, effort: 5 })
                .toFile(outWebp);

            if (file === 'image1.jpeg') {
                const outAvif = path.join(outDir, `${base}-${width}.avif`);
                await sharp(src)
                    .resize({ width, withoutEnlargement: true })
                    .avif({ quality: AVIF_QUALITY, effort: 5 })
                    .toFile(outAvif);
            }
        }

        const sizes = await Promise.all(
            HERO_WIDTHS.map(async (w) =>
                fileSizeKb(path.join(outDir, `${base}-${w}.webp`)),
            ),
        );
        console.log(
            `[images] hero ${file} (${srcKb} KB) -> ${sizes
                .map((s, i) => `${HERO_WIDTHS[i]}=${s}KB`)
                .join(' ')}`,
        );
    }
}

async function processClients() {
    const srcDir = path.join(sources, 'clients');
    const outDir = path.join(assets, 'clients');
    if (!existsSync(srcDir)) return;
    await ensureDir(outDir);
    const entries = await readdir(srcDir);

    for (const file of entries) {
        const ext = path.extname(file).toLowerCase();
        if (!['.jpg', '.jpeg', '.png'].includes(ext)) continue;

        const src = path.join(srcDir, file);
        const base = path.basename(file, ext);
        const out = path.join(outDir, `${base}.webp`);
        const srcKb = await fileSizeKb(src);

        await sharp(src)
            .resize({
                width: CLIENT_LOGO_MAX_WIDTH,
                withoutEnlargement: true,
            })
            .webp({ quality: 82, effort: 5 })
            .toFile(out);

        const outKb = await fileSizeKb(out);
        console.log(
            `[images] client ${file} (${srcKb} KB) -> ${path.basename(out)} (${outKb} KB)`,
        );
    }
}

async function processLogos() {
    for (const job of LOGO_JOBS) {
        const src = path.join(sources, job.src);
        if (!existsSync(src)) {
            console.warn(`[images]   skip logo: ${job.src} (missing)`);
            continue;
        }
        const outDir = path.join(assets, job.outDir);
        await ensureDir(outDir);
        const base = path.basename(job.src, path.extname(job.src));
        const srcKb = await fileSizeKb(src);

        for (const width of job.widths) {
            const out = path.join(outDir, `${base}-${width}.webp`);
            await sharp(src)
                .resize({ width, withoutEnlargement: true })
                .webp({ quality: job.quality, effort: 5 })
                .toFile(out);
            const kb = await fileSizeKb(out);
            console.log(
                `[images] logo   ${job.src} (${srcKb} KB) -> ${path.basename(out)} (${kb} KB)`,
            );
        }
    }
}

async function main() {
    console.log('[images] starting WebP/AVIF pipeline');
    await processHero();
    await processClients();
    await processLogos();
    console.log('[images] done');
}

main().catch((err) => {
    console.error('[images] failed:', err);
    process.exit(1);
});
