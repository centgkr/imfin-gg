export default function Hero() {
  return (
    <section
      className="w-full py-24 border-b"
      style={{ backgroundColor: "var(--bg-primary)", borderColor: "var(--border)" }}
    >
      <div className="max-w-[1280px] mx-auto px-6">
        <p
          className="text-sm font-medium tracking-widest mb-4"
          style={{ color: "var(--gold-muted)" }}
        >
          IMJIN.GG DATA PLATFORM
        </p>

        <h1
          className="text-4xl md:text-5xl font-bold mb-6 max-w-2xl leading-tight"
          style={{ color: "var(--text-primary)" }}
        >
          임진왜란: 조선의 반격
          <br />
          <span style={{ color: "var(--gold-primary)" }}>데이터 플랫폼</span>
        </h1>

        <div className="max-w-xl">
          <div
            className="flex items-center border rounded-md overflow-hidden"
            style={{ borderColor: "var(--border)", backgroundColor: "var(--surface)" }}
          >
            <input
              type="text"
              placeholder="장수 이름을 검색하세요. 예: 이순신"
              className="flex-1 px-4 py-3 bg-transparent outline-none text-sm"
              style={{ color: "var(--text-primary)" }}
            />
            <button
              className="px-6 py-3 font-medium text-sm"
              style={{ backgroundColor: "var(--gold-primary)", color: "#0B0D10" }}
            >
              검색
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}