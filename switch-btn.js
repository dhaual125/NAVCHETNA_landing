const fs = require('fs');

// Replace btn btn-primary with blueprint-btn in all dark CTA cards
const files = [
  'src/components/sections/CTA.tsx',
  'src/app/(marketing)/services/page.tsx',
  'src/app/(marketing)/products/page.tsx',
  'src/app/(marketing)/about/page.tsx',
  'src/app/(marketing)/career/page.tsx',
];

for (const f of files) {
  let content = fs.readFileSync(f, 'utf8');
  // Replace btn btn-primary inside dark CTA sections with blueprint-btn
  // These are identified by being inside the dark #080808 background divs
  // We'll do a simple targeted replacement of btn-primary used for the CTA card buttons
  const before = content;
  
  // Pattern: className="btn btn-primary" with style height:2.5rem
  content = content.replace(
    /className="btn btn-primary inline-flex items-center gap-2"\s+style=\{\{ height: "2\.5rem", padding: "0 1\.5rem" \}\}/g,
    'className="blueprint-btn inline-flex items-center gap-2"'
  );
  content = content.replace(
    /className="btn btn-primary"\s+style=\{\{ height: "2\.5rem", padding: "0 1\.5rem" \}\}/g,
    'className="blueprint-btn"'
  );
  content = content.replace(
    /className="btn btn-primary"\s+style=\{\{ height: "2\.5rem", padding: "0 1\.25rem" \}\}/g,
    'className="blueprint-btn"'
  );
  
  if (content !== before) {
    fs.writeFileSync(f, content);
    console.log('✓ Updated:', f);
  } else {
    console.log('-  No match in:', f);
  }
}
