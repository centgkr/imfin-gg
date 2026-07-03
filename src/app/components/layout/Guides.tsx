interface Guide {
  category: string;
  title: string;
  date: string;
  views: number;
  readTime: number;
}

const sampleGuides: Guide[] = [
  { category: "초보자 가이드", title: "초보자가 먼저 키워야 할 장수", date: "2026-06-20", views: 1204, readTime: 4 },
  { category: "성장 가이드", title: "무과금 성장 가이드", date: "2026-06-18", views: 892, readTime: 6 },
  { category: "국가전", title: "국가전 입문 가이드", date: "2026-06-15", views: 743, readTime: 5 },
  { category: "자원 관리", title: "초반 자원 사용법", date: "2026-06-12", views: 621, readTime: 3 },
];

export default function Guides() {
  return (
    <section className="w-full py-16 border-t" style={{ backgroundColor: "var(--bg-secondary)", borderColor: "var(--border)" }}>
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="flex items-center gap-2 mb-8">
          <h2 className="text-xl font-semibold" style={{ color: "var(--text-primary)" }}>
            최신 공략
          </h2>
          <span
            className="text-[10px] font-semibold px-2 py-0.5 rounded"
            style={{ backgroundColor: "var(--warning)", color: "#0B0D10" }}
          >
            SAMPLE
          </span>
        </div>

        <div className="space-y-3">
          {sampleGuides.map((g) => (
            <a
              key={g.title}
              href="#"
              className="flex items-center justify-between px-5 py-4 border rounded-md transition-colors"
              style={{ backgroundColor: "var(--surface)", borderColor: "var(--border)" }}
            >
              <div className="flex items-center gap-4">
                <span
                  className="text-[10px] font-medium px-2 py-1 rounded"
                  style={{ backgroundColor: "var(--bg-primary)", color: "var(--gold-primary)" }}
                >
                  {g.category}
                </span>
                <span className="text-sm font-medium" style={{ color: "var(--text-primary)" }}>
                  {g.title}
                </span>
              </div>

              <div className="flex items-center gap-4 text-xs" style={{ color: "var(--text-secondary)" }}>
                <span>{g.date}</span>
                <span>조회 {g.views.toLocaleString()}</span>
                <span>{g.readTime}분 읽기</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}