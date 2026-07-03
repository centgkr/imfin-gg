export default function Header() {
  const menuItems = ["홈", "장수도감", "티어표", "조합", "공략", "쿠폰"];

  return (
    <header
      className="w-full border-b"
      style={{
        backgroundColor: "var(--bg-secondary)",
        borderColor: "var(--border)",
      }}
    >
      <div className="max-w-[1280px] mx-auto flex items-center justify-between px-6 h-16">
        <span
          className="text-xl font-bold tracking-tight"
          style={{ color: "var(--gold-primary)" }}
        >
          IMJIN.GG
        </span>

        <nav className="hidden md:flex items-center gap-8">
          {menuItems.map((item) => (
            <a
              key={item}
              href="#"
              className="text-sm font-medium hover:opacity-80 transition-opacity"
              style={{ color: "var(--text-secondary)" }}
            >
              {item}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}