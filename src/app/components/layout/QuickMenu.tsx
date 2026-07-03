const menuItems = [
  { title: "최신 티어표", desc: "이번 주 메타 장수 순위", href: "#" },
  { title: "장수 도감", desc: "전체 장수 검색 및 상세정보", href: "#" },
  { title: "추천 조합", desc: "PvP/PvE 상황별 조합", href: "#" },
  { title: "쿠폰", desc: "사용 가능한 쿠폰 코드", href: "#" },
  { title: "초보자 공략", desc: "빠른 성장 가이드", href: "#" },
  { title: "계산기", desc: "자원/성장 시뮬레이터", href: "#" },
];

export default function QuickMenu() {
  return (
    <section className="w-full py-16" style={{ backgroundColor: "var(--bg-primary)" }}>
      <div className="max-w-[1280px] mx-auto px-6">
        <h2
          className="text-xl font-semibold mb-8"
          style={{ color: "var(--text-primary)" }}
        >
          빠른 메뉴
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {menuItems.map((item) => (
            <a
              key={item.title}
              href={item.href}
              className="p-5 border rounded-md transition-colors"
              style={{
                backgroundColor: "var(--surface)",
                borderColor: "var(--border)",
              }}
            >
              <h3
                className="font-semibold mb-1 text-sm"
                style={{ color: "var(--text-primary)" }}
              >
                {item.title}
              </h3>
              <p className="text-xs" style={{ color: "var(--text-secondary)" }}>
                {item.desc}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}