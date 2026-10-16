import sharp from "sharp";
import fs from "fs";
import path from "path";

const widths = {
  pfp: 1000, herobg: null, piano: 1134, moondiscoveries: 1134,
  unitar: 546, "unu-ias": 400, uie: 350, france: 454,
  google: 180, uae: 180, efset: 180, github: 72,
  ubuntu: 220, virtualbox: 220, azure: 220, python: 220,
  cinema4d: 220, docker: 220,
};

function walk(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((e) =>
    e.isDirectory() ? walk(path.join(dir, e.name)) : [path.join(dir, e.name)]
  );
}

for (const file of walk("src/assets")) {
  const { name, ext, dir } = path.parse(file);
  if (!/\.(png|jpe?g)$/i.test(ext) || !(name in widths)) continue;
  const w = widths[name];
  const out = path.join(dir, `${name}.webp`);
  let img = sharp(file);
  if (w) img = img.resize({ width: w, withoutEnlargement: true });
  await img.webp({ quality: name === "herobg" ? 72 : 80 }).toFile(out);
  console.log(`${file} -> ${out} (${(fs.statSync(out).size / 1024).toFixed(0)} KiB)`);
}
