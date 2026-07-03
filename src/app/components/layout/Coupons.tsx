type CouponState = "active" | "expiring" | "expired";

interface Coupon {
  code: string;
  reward: string;
  state: CouponState;
}

const sampleCoupons: Coupon[] = [
  { code: "IMJIN2026", reward: "골드 5000", state: "active" },
  { code: "WELCOME100", reward: "성장 물약 3개", state: "active" },
  { code: "SPRING25", reward: "경험치 부스터", state: "expiring" },
  { code: "LAUNCH2025", reward: "골드 10000", state: "expired" },
];

const stateLabel: Record<CouponState, string> = {
  active: "사용 가능",
  expiring: "만료 예정",
  expired: "만료됨",
};

const stateColor: Record<CouponState, string> = {
  active: "var(--success)",
  expiring: "var(--warning)",
  expired: "var(--danger)",
};

export default function Coupons() {
  return (
    <section className="w-full py-16 border-t" style={{ backgroundColor: "var(--bg-primary)", borderColor: "var(--border)" }}>
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="flex items-center gap-2 mb-8">
          <h2 className="text-xl font-semibold" style={{ color: "var(--text-primary)" }}>
            쿠폰
          </h2>
          <span
            className="text-[10px] font-semibold px-2 py-0.5 rounded"
            style={{ backgroundColor: "var(--warning)", color: "#0B0D10" }}
          >
            SAMPLE
          </span>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {sampleCoupons.map((coupon) => (
            <div
              key={coupon.code}
              className="flex items-center justify-between px-5 py-4 border rounded-md"
              style={{ backgroundColor: "var(--surface)", borderColor: "var(--border)" }}
            >
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-sm font-semibold" style={{ color: "var(--text-primary)" }}>
                    {coupon.code}
                  </span>
                  <span
                    className="text-[10px] font-medium px-2 py-0.5 rounded"
                    style={{ color: stateColor[coupon.state], border: `1px solid ${stateColor[coupon.state]}` }}
                  >
                    {stateLabel[coupon.state]}
                  </span>
                </div>
                <p className="text-xs" style={{ color: "var(--text-secondary)" }}>
                  {coupon.reward}
                </p>
              </div>

              <button
                disabled={coupon.state === "expired"}
                className="text-xs font-medium px-3 py-1.5 rounded-md disabled:opacity-40"
                style={{ backgroundColor: "var(--gold-primary)", color: "#0B0D10" }}
              >
                복사
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}