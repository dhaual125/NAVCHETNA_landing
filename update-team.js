const fs = require('fs');

// 1. Update team avatars with real photos in about/page.tsx
let about = fs.readFileSync('src/app/(marketing)/about/page.tsx', 'utf8');

about = about.replace(
  'avatar: "/ref/voice-bg-04.png"',
  'avatar: "/assets/ayushmaan.jpg"'
);
about = about.replace(
  'avatar: "/ref/voice-bg-01.png"',
  'avatar: "/assets/varun.jpg"'
);
about = about.replace(
  'avatar: "/ref/voice-bg-03.png"',
  'avatar: "/assets/swastik.jpg"'
);
about = about.replace(
  'avatar: "/ref/voice-bg-07.png"',
  'avatar: "/assets/dhraval.jpg"'
);
about = about.replace(
  'avatar: "/ref/voice-bg-05.png"',
  'avatar: "/assets/suman.jpg"'
);
about = about.replace(
  'avatar: "/ref/voice-bg-06.png"',
  'avatar: "/assets/kuldeep.jpg"'
);

fs.writeFileSync('src/app/(marketing)/about/page.tsx', about);
console.log('✓ Team avatars updated');

// 2. Revert "What we do" section in services/page.tsx
let services = fs.readFileSync('src/app/(marketing)/services/page.tsx', 'utf8');

const newWhatWeDo = `<article className="group relative overflow-hidden rounded-2xl bg-white border border-black/[0.06] shadow-[0_4px_24px_rgba(0,0,0,0.02)] transition-all duration-500 hover:shadow-[0_12px_40px_rgba(0,0,0,0.06)] hover:border-black/[0.12] p-8 md:p-10">
                  <div className="absolute top-0 left-0 w-1 h-full bg-black/10 group-hover:bg-black/30 transition-colors" />
                  <div className="grid gap-8 md:grid-cols-[0.8fr_1.2fr] pl-2">
                    {/* Left Column: Number & Title */}
                    <div className="flex flex-col">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="flex items-center justify-center size-8 rounded-full bg-black/[0.04] text-[11px] font-semibold text-black/60 tracking-wider">
                          {service.num}
                        </span>
                        <span className="text-[11px] font-semibold text-black/40 tracking-widest uppercase">
                          {service.tag}
                        </span>
                      </div>
                      <h2
                        className="text-[1.75rem] mt-2"
                        style={{
                          fontFamily: "var(--font-waldenburg)",
                          fontWeight: 500,
                          letterSpacing: "-0.02em",
                          lineHeight: 1.15,
                          color: "var(--heading-color)"
                        }}
                      >
                        {service.title}
                      </h2>
                    </div>

                    {/* Right Column: Description & Bullets */}
                    <div className="flex flex-col md:pl-8 md:border-l border-solid border-black/[0.08]">
                      <p className="text-black/60 mb-8" style={{ lineHeight: 1.7, fontSize: "1rem" }}>
                        {service.desc}
                      </p>
                      <div className="grid sm:grid-cols-2 gap-y-5 gap-x-4">
                        {service.bullets.map((item) => (
                          <div key={item} className="flex items-center gap-3">
                            <span className="flex size-6 items-center justify-center rounded-md bg-black/[0.03] text-black/40">
                              <service.icon weight="bold" className="size-3.5" />
                            </span>
                            <span className="text-[13.5px] font-medium text-black/70">
                              {item}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </article>`;

const originalWhatWeDo = `<article className="grid gap-6 md:grid-cols-[0.8fr_1.2fr] border-l border-dotted border-black/[0.25] pl-6">
                  {/* Left Column: Number & Title */}
                  <div className="flex flex-col">
                    <span className="text-[10px] font-semibold text-black/30 mb-2 tracking-widest">
                      {service.num} · {service.tag}
                    </span>
                    <h2
                      className="text-2xl mt-1"
                      style={{
                        fontFamily: "var(--font-waldenburg)",
                        fontWeight: 500,
                        letterSpacing: "-0.02em",
                        lineHeight: 1.15,
                        color: "var(--heading-color)"
                      }}
                    >
                      {service.title}
                    </h2>
                  </div>

                  {/* Right Column: Description & Bullets */}
                  <div className="flex flex-col md:pl-8 md:border-l border-dotted border-black/[0.15]">
                    <p className="text-black/60 mb-6" style={{ lineHeight: 1.65, fontSize: "0.95rem" }}>
                      {service.desc}
                    </p>
                    <div className="grid sm:grid-cols-2 gap-4">
                      {service.bullets.map((item) => (
                        <div key={item} className="flex items-start gap-2">
                          <service.icon weight="duotone" className="size-4 text-black/40 mt-1 shrink-0" />
                          <span className="text-[13px] font-medium text-black/70 leading-relaxed">
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </article>`;

if (services.includes(newWhatWeDo)) {
  services = services.replace(newWhatWeDo, originalWhatWeDo);
  fs.writeFileSync('src/app/(marketing)/services/page.tsx', services);
  console.log('✓ What we do section reverted');
} else {
  console.log('! What we do: pattern not found — may already be original');
}
