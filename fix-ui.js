const fs = require('fs');

// 1. Fix globals.css dotted line and btn-primary sci-fi vibe
let css = fs.readFileSync('src/app/globals.css', 'utf8');
css = css.replace(/background-size: 10px 1px;/g, 'background-size: 24px 1px;');
css = css.replace(/background-image: radial-gradient\(circle, rgba\(0,0,0,0\.18\) 1\.5px, transparent 1\.5px\);/g, 'background-image: radial-gradient(circle, rgba(0,0,0,0.25) 1px, transparent 1px);');
// Remove old btn-primary overrides from bottom if any
css = css.replace(/\/\* ═══════════════════════════════════════════\r?\n   BUTTON MATURE UI EFFECTS[\s\S]*?@keyframes shine \{\r?\n  100% \{ left: 200%; \}\r?\n\}\r?\n/g, '');
// Add new sci-fi button style
const scifiBtn = `
/* ═══════════════════════════════════════════
   BUTTON MATURE UI EFFECTS (SCI-FI / BLUEPRINT VIBE)
   ═══════════════════════════════════════════ */
.btn-primary {
  background: rgba(0, 0, 0, 0.95);
  color: #FFFFFF;
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 0 10px rgba(0,0,0,0.1), inset 0 0 10px rgba(255,255,255,0.05);
  position: relative;
  overflow: hidden;
  border-radius: 4px;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  font-size: 0.75rem;
  transition: all 0.3s ease;
}
.btn-primary::before {
  content: '';
  position: absolute;
  top: 0; left: 0; width: 100%; height: 1px;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.6), transparent);
  transform: translateX(-100%);
  transition: none;
}
.btn-primary:hover {
  background: #000;
  border-color: rgba(255, 255, 255, 0.25);
  box-shadow: 0 0 20px rgba(0,0,0,0.15), inset 0 0 15px rgba(255,255,255,0.1);
}
.btn-primary:hover::before {
  transform: translateX(100%);
  transition: transform 0.6s ease-in-out;
}
`;
css += '\n' + scifiBtn;
fs.writeFileSync('src/app/globals.css', css);

// 2. Fix career page
let career = fs.readFileSync('src/app/(marketing)/career/page.tsx', 'utf8');
career = career.replace(/className="max-w-xl text-white"/g, 'className="max-w-xl text-white" style={{ color: "#fff" }}');
// Replace dark background CTA with a cool scifi one
career = career.replace(/background: "linear-gradient\(135deg, #080808 0%, #151210 62%, #241b16 100%\)"/g, 'background: "#000", border: "1px solid rgba(255,255,255,0.1)", boxShadow: "0 20px 40px rgba(0,0,0,0.15)"');
career = career.replace(/text-\[10px\] font-semibold uppercase tracking-\[0\.16em\] text-white\/40/g, 'text-[10px] font-semibold uppercase tracking-[0.16em] text-white/50');
fs.writeFileSync('src/app/(marketing)/career/page.tsx', career);

// 3. Fix about page margins
let about = fs.readFileSync('src/app/(marketing)/about/page.tsx', 'utf8');
about = about.replace(/className="section-container"/g, 'className="section-container px-6 sm:px-12 md:px-24"');
about = about.replace(/className="section-container relative z-10 w-full"/g, 'className="section-container px-6 sm:px-12 md:px-24 relative z-10 w-full"');
fs.writeFileSync('src/app/(marketing)/about/page.tsx', about);

// 4. Products page grainy effect and hover
let products = fs.readFileSync('src/app/(marketing)/products/page.tsx', 'utf8');
products = products.replace(/className="relative aspect-\[16\/10\] w-full"/g, 'className="relative aspect-[16/10] w-full overflow-hidden"');
// We need to match <Image ... />
products = products.replace(/quality=\{84\}\r?\n\s*\/>/g, `quality={84} />
                      <div className="absolute inset-0 z-10 opacity-[0.15] mix-blend-overlay pointer-events-none transition-opacity duration-500 group-hover:opacity-[0.35]" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.85%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E')" }} />
                      <div className="absolute inset-0 z-20 bg-black/0 transition-colors duration-500 group-hover:bg-black/[0.03] pointer-events-none" />`);
fs.writeFileSync('src/app/(marketing)/products/page.tsx', products);

// 5. Testimonials page compact/cool
let test = fs.readFileSync('src/components/sections/Testimonials.tsx', 'utf8');
test = test.replace(/columns-1 md:columns-2 lg:columns-3/g, 'columns-1 md:columns-2');
test = test.replace(/p-7 border border-black\/\[0\.04\] shadow-sm/g, 'p-6 border border-black/[0.08] bg-white/[0.6] backdrop-blur-md shadow-[0_2px_10px_rgba(0,0,0,0.02)] transition-all hover:border-black/[0.15] hover:shadow-[0_4px_20px_rgba(0,0,0,0.04)]');
test = test.replace(/text-5xl/g, 'text-4xl');
test = test.replace(/fontSize: "0\.98rem"/g, 'fontSize: "0.9rem"');
test = test.replace(/mb-8/g, 'mb-6');
test = test.replace(/w-10/g, 'w-8');
test = test.replace(/h-10/g, 'h-8');
test = test.replace(/fontSize: "0\.95rem"/g, 'fontSize: "0.85rem"');
test = test.replace(/text-\[10px\]/g, 'text-[9px]');
fs.writeFileSync('src/components/sections/Testimonials.tsx', test);
