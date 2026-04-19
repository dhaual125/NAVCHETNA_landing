const fs = require('fs');

let css = fs.readFileSync('src/app/globals.css', 'utf8');

// Remove ALL btn-primary blocks from line 762 onwards (the old appended ones)
// Find the first block after line ~760 (the old sci-fi ones we added)
// Strategy: find the marker comment and delete everything after it
const markerStart = '\n/* ═══════════════════════════════════════════';
const idx = css.indexOf(markerStart);
if (idx !== -1) {
  css = css.slice(0, idx);
  console.log('✓ Removed appended btn-primary blocks');
}

// Also remove any duplicate block at line ~335 (the one added by mistake in last tool call)
// The one at ~335 starts with a clean `\n.btn-primary {\n  background: #0A0A0A;\n  color: #FFFFFF;\n  padding: 0.5rem 1.25rem;\n  height: 2.25rem;\n  border: 1px solid rgba(0,0,0,0.1);`
// and ends before .el-muted-panel
// Let's be surgical - find between line 335's version and .el-muted-panel
const dupStart = '\n.btn-primary {\n  background: #0A0A0A;\n  color: #FFFFFF;\n  padding: 0.5rem 1.25rem;\n  height: 2.25rem;\n  border: 1px solid rgba(0,0,0,0.1);';
const dupEnd = '\n\n.el-muted-panel {';
const dIdx = css.indexOf(dupStart);
const dEndIdx = css.indexOf(dupEnd);
if (dIdx !== -1 && dEndIdx !== -1 && dIdx < dEndIdx) {
  css = css.slice(0, dIdx) + '\n' + css.slice(dEndIdx);
  console.log('✓ Removed early duplicate btn-primary block');
}

// Now ensure the canonical btn-primary at ~428 is the correct clean version
// Replace the block at that location
const oldBtnBlock = `.btn-primary {
  background: #0A0A0A;
  background-image:
    linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px);
  background-size: 8px 8px;
  color: #FFFFFF;
  padding: 0.5rem 1.25rem;
  height: 2.25rem;
  border-radius: 3px;
  border: 1px solid rgba(255,255,255,0.14);
  box-shadow: 0 2px 8px rgba(0,0,0,0.2), inset 0 0 0 1px rgba(255,255,255,0.04);
  position: relative;
  overflow: hidden;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  font-size: 0.72rem;
  font-weight: 700;
  transition: all 0.28s cubic-bezier(0.16, 1, 0.3, 1);
}
.btn-primary::before {
  content: '';
  position: absolute;
  top: 0; left: -100%; width: 60%; height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.12), transparent);
  transform: skewX(-15deg);
  transition: none;
}
.btn-primary:hover {
  background: #111;
  border-color: rgba(255,255,255,0.28);
  box-shadow: 0 4px 16px rgba(0,0,0,0.3), inset 0 0 0 1px rgba(255,255,255,0.08);
}
.btn-primary:hover::before {
  left: 150%;
  transition: left 0.7s ease-in-out;
}`;

const newBtnBlock = `.btn-primary {
  background: #0A0A0A;
  color: #FFFFFF;
  padding: 0.5rem 1.25rem;
  height: 2.25rem;
  border: none;
  font-size: 0.8125rem;
  font-weight: 600;
  letter-spacing: -0.01em;
  transition: background 0.2s ease;
}
.btn-primary:hover {
  background: #1a1a1a;
}`;

if (css.includes(oldBtnBlock)) {
  css = css.replace(oldBtnBlock, newBtnBlock);
  console.log('✓ Replaced main btn-primary block');
} else {
  console.log('! Main btn-primary block not found - will try regex...');
  // Replace via regex
  css = css.replace(/\.btn-primary \{[\s\S]*?\.btn-primary:hover::before \{[\s\S]*?\}\n/g, newBtnBlock + '\n');
  console.log('✓ Replaced via regex');
}

// Append blueprint-btn at the end
const blueprintBtn = `
/* ─────────────────────────────────────────────
   BLUEPRINT BUTTON — for dark CTA cards only
   ───────────────────────────────────────────── */
.blueprint-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  background-color: #0A0A0A;
  background-image:
    linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px);
  background-size: 8px 8px;
  color: #fff;
  border-radius: 3px;
  border: 1px solid rgba(255,255,255,0.14);
  box-shadow: 0 2px 8px rgba(0,0,0,0.2);
  text-transform: uppercase;
  letter-spacing: 0.12em;
  font-size: 0.72rem;
  font-weight: 700;
  padding: 0 1.25rem;
  height: 2.5rem;
  cursor: pointer;
  text-decoration: none;
  white-space: nowrap;
  position: relative;
  overflow: hidden;
  transition: background-color 0.2s ease, border-color 0.2s ease;
}
.blueprint-btn::before {
  content: '';
  position: absolute;
  top: 0; left: -100%; width: 60%; height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent);
  transform: skewX(-15deg);
  transition: none;
}
.blueprint-btn:hover {
  background-color: #111;
  border-color: rgba(255,255,255,0.28);
}
.blueprint-btn:hover::before {
  left: 150%;
  transition: left 0.7s ease-in-out;
}
`;
css += blueprintBtn;

fs.writeFileSync('src/app/globals.css', css);
console.log('✓ Done — CSS cleaned and blueprint-btn appended');
