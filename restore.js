const fs = require('fs');
const log = fs.readFileSync('C:/Users/suman/.gemini/antigravity/brain/6d40e114-506e-48d1-9e2b-e4241e139490/.system_generated/logs/overview.txt', 'utf8');

// Find the first view_file call for globals.css in the log which had the 800-line version
const startIdx = log.indexOf('File Path: `file:///c:/Users/suman/OneDrive/Desktop/NAVCHETNA_landing/src/app/globals.css`');
console.log('Found index:', startIdx);

const contentStart = log.indexOf('1: @import', startIdx);
const contentEnd = log.indexOf('The above content does NOT show', contentStart);

if (contentStart !== -1 && contentEnd !== -1) {
    const rawContent = log.substring(contentStart, contentEnd);
    const cleanContent = rawContent.split('\n').map(line => line.replace(/^\d+:\s/, '')).join('\n');
    fs.writeFileSync('src/app/globals.css', cleanContent.trim() + '\n');
    console.log('Restored correctly!');
} else {
    console.log('Failed to extract content.');
}
