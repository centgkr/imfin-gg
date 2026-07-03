const sampleChampions = [
  { name: "이순신", faction: "조선", tier: "S" },
  { name: "권율", faction: "조선", tier: "S" },
  { name: "김시민", faction: "조선", tier: "A" },
  { name: "원균", faction: "조선", tier: "B" },
  { name: "곽재우", faction: "조선", tier: "A" },
];

export default function WeeklyMeta() {
  return (
    <section className="w-full py-16 border-t" style={{ backgroundColor: "var(--bg-secondary)", borderColor: "var(--border)" }}>
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="flex items-center gap-2 mb-8">
          <h2 className="text-xl font-semibold" style={{ color: "var(--text-primary)" }}>
            시즌 메타
          </h2>
          <span
            className="text-[10px] font-semibold px-2 py-0.5 rounded"
            style={{ backgroundColor: "var(--warning)", color: "#0B0D10" }}
          >
            SAMPLE
          </span>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-sm font-medium mb-4" style={{ color: "var(--text-secondary)" }}>
              인기 장수 TOP 5
            </h3>
            <div className="space-y-2">
              {sampleChampions.map((c, i) => (
                <div
                  key={c.name}
                  className="flex items-center justify-between px-4 py-3 border rounded-md"
                  style={{ backgroundColor: "var(--surface)", borderColor: "var(--border)" }}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-semibold w-4" style={{ color: "var(--gold-primary)" }}>
                      {i + 1}
                    </span>
                    <span className="text-sm" style={{ color: "var(--text-primary)" }}>
                      {c.name}
                    </span>
                    <span className="text-xs" style={{ color: "var(--text-secondary)" }}>
                      {c.faction}
                    </span>
                  </div>
                  <span className="text-xs font-semibold" style={{ color: "var(--gold-muted)" }}>
                    {c.tier}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4">
            {["PvP 추천 장수", "PvE 추천 장수", "국가전 추천 장수"].map((label) => (
              <div
                key={label}
                className="px-4 py-4 border rounded-md"
                style={{ backgroundColor: "var(--surface)", borderColor: "var(--border)" }}
              >
                <p className="text-xs mb-1" style={{ color: "var(--text-secondary)" }}>
                  {label}
                </p>
                <p className="text-sm font-medium" style={{ color: "var(--text-primary)" }}>
                  이순신, 권율
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}