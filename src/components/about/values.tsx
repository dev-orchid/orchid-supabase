import {
  Zap,
  Shield,
  Users,
  Sparkles,
  TrendingUp,
  Award,
} from "lucide-react";

const values = [
  {
    icon: Zap,
    title: "Innovation First",
    description:
      "We continuously push boundaries and embrace new technologies to deliver cutting-edge solutions that keep our clients ahead of the curve.",
    gradient: "from-orange-500 to-amber-500",
  },
  {
    icon: Shield,
    title: "Security & Trust",
    description:
      "We prioritize the security and privacy of our clients' data, implementing industry-leading practices and maintaining the highest standards of integrity.",
    gradient: "from-green-500 to-emerald-500",
  },
  {
    icon: Users,
    title: "Client Success",
    description:
      "Your success is our success. We work as an extension of your team, ensuring every project delivers measurable business value and exceeds expectations.",
    gradient: "from-orange-600 to-red-500",
  },
  {
    icon: Sparkles,
    title: "Quality Excellence",
    description:
      "We never compromise on quality. Every line of code, every design decision, and every interaction is crafted with meticulous attention to detail.",
    gradient: "from-amber-500 to-yellow-500",
  },
  {
    icon: TrendingUp,
    title: "Continuous Growth",
    description:
      "We foster a culture of learning and improvement, constantly evolving our skills and processes to provide better value to our clients.",
    gradient: "from-orange-500 to-orange-600",
  },
  {
    icon: Award,
    title: "Transparency",
    description:
      "We believe in open communication and honest partnerships. No hidden costs, no surprises—just clear expectations and reliable delivery.",
    gradient: "from-amber-600 to-orange-600",
  },
];

export function Values() {
  return (
    <section className="container mx-auto px-4 py-20 md:py-28">
      <div className="mx-auto max-w-3xl text-center">
        <div className="mb-4 inline-flex items-center rounded-full border bg-background px-3 py-1 text-sm">
          <Award className="mr-2 h-4 w-4 text-primary" />
          <span className="font-medium">Core Values</span>
        </div>
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
          What Drives Us Every Day
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Our values guide every decision we make and shape the way we work with our clients and
          each other.
        </p>
      </div>

      <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {values.map((value, index) => (
          <div key={index} className="value-card group">
            <div className={`value-icon-container bg-gradient-to-br ${value.gradient}`}>
              <value.icon className="h-8 w-8 text-white" />
            </div>
            <h3 className="mb-3 text-xl font-semibold">{value.title}</h3>
            <p className="text-muted-foreground">{value.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
