export function TravelSite() {
  return (
    <div className="flex h-full w-full flex-col bg-[#f7f6f2] text-[#161616]">
      <div className="flex items-center justify-between border-b border-[#161616]/10 px-4 py-2.5">
        <span className="font-serif text-[11px] font-semibold tracking-wide">NOMAD</span>
        <div className="flex items-center gap-3 font-mono text-[8px] uppercase tracking-widest text-[#161616]/60">
          <span>Destinations</span>
          <span>Stories</span>
          <span className="border border-[#161616]/30 px-2 py-0.5">Book</span>
        </div>
      </div>
      <div className="flex flex-1 gap-4 p-5">
        <div className="flex w-1/2 flex-col justify-center">
          <p className="font-mono text-[8px] uppercase tracking-[0.28em] text-[#2457ff]">Travel / 2026</p>
          <h3 className="mt-2 font-serif text-[22px] font-semibold leading-[1.05] tracking-tight">
            Find the road
            <br />
            less travelled.
          </h3>
          <p className="mt-2 max-w-[26ch] font-mono text-[8px] leading-relaxed text-[#161616]/55">
            Curated itineraries across Indonesia. Built as a marketing site.
          </p>
          <div className="mt-4 flex items-center gap-2 border border-[#161616]/20 bg-white/60 p-2 font-mono text-[8px] text-[#161616]/70">
            <span className="flex-1">Search destination…</span>
            <span className="bg-[#161616] px-2 py-1 text-[8px] text-[#f7f6f2]">Go</span>
          </div>
        </div>
        <div className="w-1/2">
          <div className="relative h-full min-h-[120px] w-full overflow-hidden bg-[#d8d5cc]">
            <div className="absolute inset-0 bg-[#d2cfc6]" />
            <div className="absolute bottom-3 left-3 right-3 font-mono text-[8px] text-[#161616]">
              <p className="font-semibold">Bromo · East Java</p>
              <p className="text-[7px] opacity-70">3 days / 2 nights — from Rp850K</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export function CoffeeSite() {
  return (
    <div className="flex h-full w-full flex-col bg-[#101110] text-[#e9e4d8]">
      <div className="flex items-center justify-between border-b border-[#e9e4d8]/10 px-4 py-2.5">
        <span className="font-mono text-[10px] font-semibold tracking-[0.3em]">BREW&amp;CO</span>
        <span className="font-mono text-[8px] uppercase tracking-widest text-[#e9e4d8]/50">Est. 2021 — Yogyakarta</span>
      </div>
      <div className="grid flex-1 grid-cols-2 gap-px overflow-hidden">
        <div className="flex items-end bg-[#1a1b19] p-4">
          <div>
            <p className="font-mono text-[7px] uppercase tracking-[0.3em] text-[#2457ff]">Menu</p>
            <ul className="mt-2 space-y-1.5 font-mono text-[9px]">
              {['Kopi Tubruk', 'Espresso', 'Caffè Latte', 'Kopi Susu Aren'].map((x, i) => (
                <li key={x} className="flex items-baseline gap-2 text-[#e9e4d8]/85">
                  <span>{x}</span>
                  <span className="h-px flex-1 bg-[#e9e4d8]/15" />
                  <span className="text-[#2457ff]">{['18', '22', '26', '24'][i]}K</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex flex-col bg-[#151412] p-4">
          <p className="font-mono text-[8px] uppercase tracking-widest text-[#e9e4d8]/40">Roast of the week</p>
          <p className="mt-1 font-serif text-[16px] leading-tight text-[#e9e4d8]">Gayo Single Origin</p>
          <div className="mt-auto flex items-center justify-between">
            <span className="font-mono text-[8px] text-[#2457ff]">Rp 42K / 250g</span>
            <span className="border border-[#2457ff]/60 px-2 py-1 font-mono text-[7px] uppercase tracking-widest text-[#2457ff]">Order</span>
          </div>
        </div>
      </div>
      <div className="border-t border-[#e9e4d8]/10 px-4 py-2 font-mono text-[7px] uppercase tracking-[0.22em] text-[#e9e4d8]/40">
        Credit card accepted · Open daily 07.00–21.00
      </div>
    </div>
  )
}

export function Dashboard() {
  const bars = [35, 55, 40, 70, 88, 62, 92]
  return (
    <div className="flex h-full w-full bg-[#0b0d12] text-[#d7dce4]">
      <div className="flex w-[34%] flex-col border-r border-[#d7dce4]/8 px-3 py-4 font-mono text-[8px] uppercase tracking-widest text-[#d7dce4]/45">
        <p className="text-[10px] font-semibold tracking-[0.2em] text-[#d7dce4]">INVENTORY</p>
        {['Overview', 'Stock', 'Orders', 'Suppliers', 'Reports'].map((x, i) => (
          <span key={x} className={i === 0 ? 'mt-3 text-[#2457ff]' : 'mt-2'}>
            {x}
          </span>
        ))}
        <span className="mt-auto text-[7px] text-[#d7dce4]/30">v2.1.0</span>
      </div>
      <div className="flex flex-1 flex-col px-4 py-4">
        <div className="flex items-center justify-between">
          <p className="font-mono text-[9px] font-medium text-[#d7dce4]">Stock Overview</p>
          <span className="rounded-sm border border-[#2457ff]/40 px-1.5 py-0.5 font-mono text-[7px] uppercase tracking-widest text-[#2457ff]">Live</span>
        </div>
        <div className="mt-3 grid grid-cols-3 gap-2">
          {[
            ['Units', '1,284'],
            ['Value', 'Rp96M'],
            ['Alerts', '3'],
          ].map(([k, v]) => (
            <div key={k} className="border border-[#d7dce4]/10 px-2 py-1.5">
              <p className="font-mono text-[6.5px] uppercase tracking-widest text-[#d7dce4]/40">{k}</p>
              <p className="mt-0.5 font-mono text-[11px] text-[#d7dce4]">{v}</p>
            </div>
          ))}
        </div>
        <p className="mt-3 font-mono text-[7px] uppercase tracking-widest text-[#d7dce4]/40">Movement / 7d</p>
        <div className="mt-2 flex h-[52px] flex-1 items-end gap-1.5">
          {bars.map((b, i) => (
            <div key={i} className="flex-1" style={{ height: `${b}%`, background: i === 5 ? '#2457ff' : '#2a3140' }} />
          ))}
        </div>
      </div>
    </div>
  )
}

function Frame({ children, label }: { children: React.ReactNode; label: string }) {
  return (
    <div className="overflow-hidden border border-line-2 bg-ink-2 shadow-[0_1px_0_rgba(0,0,0,0.04)_inset]">
      <div className="flex items-center gap-2 border-b border-line px-3 py-2">
        <span className="flex gap-1.5">
          <span className="h-2 w-2 rounded-full bg-[#d6d5ce]" />
          <span className="h-2 w-2 rounded-full bg-[#d6d5ce]" />
          <span className="h-2 w-2 rounded-full bg-accent/70" />
        </span>
        <span className="ml-2 h-4 flex-1 max-w-[220px] rounded-sm bg-ink-3 px-2 font-mono text-[7.5px] leading-4 text-faint">
          {label}
        </span>
      </div>
      <div className="aspect-[16/10]">{children}</div>
    </div>
  )
}

export { Frame }