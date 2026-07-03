interface Champion {
  name: string;
  faction: string;
  unitType: string;
  tier: string;
  pvp: string;
  pve: string;
}

const sampleChampions: Champion[] = [
  { name: "이순신", faction: "조선", unitType: "수군", tier: "S", pvp: "S", pve: "A" },
  { name: "권율", faction: "조선", unitType: "보병", tier: "S", pvp: "A", pve: "S" },
  { name: "김시민", faction: "조선", unitType: "궁병", tier: "A", pvp: "B", pve: "A" },
  { name: "곽재우", faction: "조선", unitType: "의병", tier: "A", pvp: "A", pve: "B" },
];

export default function PowerfulChampions() {
  return (
    <section className="w-full py-16 border-t" style={{ backgroundColor: "var(--bg-secondary)", borderColor: "var(--border)" }}>
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="flex items-center gap-2 mb-8">
          <h2 className="text-xl font-semibold" style={{ color: "var(--text-primary)" }}>
            강력한 장수
          </h2>
          <span
            className="text-[10px] font-semibold px-2 py-0.5 rounded"
            style={{ backgroundColor: "var(--warning)", color: "#0B0D10" }}
          >
            SAMPLE
          </span>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {sampleChampions.map((c) => (
            <div
              key={c.name}
              className="border rounded-md overflow-hidden"
              style={{ backgroundColor: "var(--surface)", borderColor: "var(--border)" }}
            >
              <div
                className="h-32 flex items-center justify-center text-xs"
                style={{ backgroundColor: "var(--bg-primary)", color: "var(--text-secondary)" }}
              >
                이미지 준비중
              </div>

              <div className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-semibold" style={{ color: "var(--text-primary)" }}>
                    {c.name}
                  </span>
                  <span className="text-xs font-bold" style={{ color: "var(--gold-primary)" }}>
                    {c.tier}
                  </span>
                </div>

                <p className="text-xs mb-3" style={{ color: "var(--text-secondary)" }}>
                  {c.faction} · {c.unitType}
                </p>

                <div className="flex gap-3 mb-3 text-xs">
                  <span style={{ color: "var(--text-secondary)" }}>PvP {c.pvp}</span>
                  <span style={{ color: "var(--text-secondary)" }}>PvE {c.pve}</span>
                </div>

                <button
                  className="w-full text-xs font-medium py-2 rounded-md border"
                  style={{ borderColor: "var(--gold-muted)", color: "var(--gold-primary)" }}
                >
                  상세보기
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}