import { TrendingUp, Users, Briefcase, Star } from "lucide-react";

const statistics = [
  {
    icon: Users,
    value: "500+",
    label: "Clients Served",
    description: "Companies trust us worldwide",
    gradient: "from-orange-500 to-amber-500",
  },
  {
    icon: Briefcase,
    value: "1,200+",
    label: "Projects Completed",
    description: "Successful deliveries since 2014",
    gradient: "from-amber-600 to-orange-600",
  },
  {
    icon: TrendingUp,
    value: "10+",
    label: "Years of Experience",
    description: "Decade of software excellence",
    gradient: "from-green-500 to-emerald-500",
  },
  {
    icon: Star,
    value: "98%",
    label: "Customer Satisfaction",
    description: "Client happiness rate",
    gradient: "from-orange-600 to-red-500",
  },
];

export function Statistics() {
  return (
    <section className="about-stats-section">
      {/* Background Pattern */}
      <div className="about-stats-grid-bg" />

      {/* Floating Orbs */}
      <div className="about-stats-orb-top" />
      <div className="about-stats-orb-bottom" />

      <div className="container relative mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center text-white">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Our Impact in Numbers
          </h2>
          <p className="mt-4 text-lg opacity-90">
            Over a decade of delivering excellence and building lasting partnerships
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {statistics.map((stat, index) => (
            <div key={index} className="stat-card group">
              <div className={`stat-icon-container bg-gradient-to-br ${stat.gradient}`}>
                <stat.icon className="h-7 w-7 text-white" />
              </div>
              <div className="stat-value">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
              <p className="stat-description">{stat.description}</p>
            </div>
          ))}
        </div>

        <div className="stats-additional-container">
          <div className="text-center">
            <div className="text-3xl font-bold text-white">50+</div>
            <div className="mt-1 text-sm text-white/80">Expert Engineers</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white">20+</div>
            <div className="mt-1 text-sm text-white/80">Countries Served</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white">99.9%</div>
            <div className="mt-1 text-sm text-white/80">Uptime SLA</div>
          </div>
        </div>
      </div>
    </section>
  );
}
