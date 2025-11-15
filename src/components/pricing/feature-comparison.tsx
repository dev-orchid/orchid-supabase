import * as React from "react";
import { Check, X } from "lucide-react";

const features = [
  {
    category: "Team & Engagement",
    items: [
      { name: "Developers", startup: "1 developer", growth: "2 developers", enterprise: "6+ developers" },
      { name: "Engagement Level", startup: "Part-time (20 hrs/week)", growth: "Full-time (160 hrs/month)", enterprise: "Dedicated team" },
      { name: "Sprint Cycles", startup: "Bi-weekly", growth: "Weekly", enterprise: "Custom cadence" },
      { name: "Project Manager", startup: false, growth: true, enterprise: true },
    ],
  },
  {
    category: "Development Services",
    items: [
      { name: "Web/Mobile Development", startup: true, growth: true, enterprise: true },
      { name: "Custom Software Development", startup: false, growth: true, enterprise: true },
      { name: "Cloud Architecture & DevOps", startup: "Basic", growth: true, enterprise: true },
      { name: "Database Design & Optimization", startup: false, growth: true, enterprise: true },
      { name: "API Development & Integration", startup: false, growth: true, enterprise: true },
      { name: "AI & Machine Learning", startup: false, growth: false, enterprise: true },
      { name: "Microservices Architecture", startup: false, growth: false, enterprise: true },
    ],
  },
  {
    category: "Support & Management",
    items: [
      { name: "Email & Chat Support", startup: true, growth: true, enterprise: true },
      { name: "Priority Support", startup: false, growth: "24/5", enterprise: "24/7" },
      { name: "Dedicated Account Manager", startup: false, growth: false, enterprise: true },
      { name: "On-site Collaboration", startup: false, growth: false, enterprise: true },
    ],
  },
  {
    category: "Additional Features",
    items: [
      { name: "Code Repository Access", startup: true, growth: true, enterprise: true },
      { name: "Technical Documentation", startup: "Basic", growth: true, enterprise: true },
      { name: "Security Best Practices", startup: true, growth: true, enterprise: "Audits & Compliance" },
      { name: "Performance Optimization", startup: false, growth: true, enterprise: true },
      { name: "SLA Guarantees", startup: false, growth: false, enterprise: true },
      { name: "Legacy System Migration", startup: false, growth: false, enterprise: true },
      { name: "Technical Consulting", startup: false, growth: false, enterprise: true },
    ],
  },
];

function FeatureCell({ value }: { value: boolean | string }) {
  if (typeof value === "boolean") {
    return value ? (
      <Check className="mx-auto h-5 w-5 text-green-600 dark:text-green-500" />
    ) : (
      <X className="mx-auto h-5 w-5 text-gray-300 dark:text-gray-600" />
    );
  }
  return <span className="text-sm font-medium">{value}</span>;
}

export function FeatureComparison() {
  return (
    <section className="container mx-auto px-4 py-20 md:py-28">
      <div className="mb-12 text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
          Compare Plans in Detail
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">
          See exactly what&apos;s included in each plan
        </p>
      </div>

      <div className="overflow-x-auto">
        <div className="inline-block min-w-full align-middle">
          <div className="overflow-hidden rounded-xl border">
            <table className="min-w-full divide-y divide-border">
              <thead className="bg-muted/50">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold">Feature</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold">Startup</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold">
                    <div className="inline-flex flex-col">
                      <span>Growth</span>
                      <span className="mt-1 rounded-full bg-primary/10 px-2 py-0.5 text-xs font-bold text-primary">
                        Popular
                      </span>
                    </div>
                  </th>
                  <th className="px-6 py-4 text-center text-sm font-semibold">Enterprise</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border bg-background">
                {features.map((category, categoryIndex) => (
                  <React.Fragment key={categoryIndex}>
                    <tr className="bg-muted/30">
                      <td
                        colSpan={4}
                        className="px-6 py-3 text-sm font-semibold text-foreground"
                      >
                        {category.category}
                      </td>
                    </tr>
                    {category.items.map((item, itemIndex) => (
                      <tr key={itemIndex} className="hover:bg-muted/20">
                        <td className="px-6 py-4 text-sm text-muted-foreground">{item.name}</td>
                        <td className="px-6 py-4 text-center">
                          <FeatureCell value={item.startup} />
                        </td>
                        <td className="bg-primary/5 px-6 py-4 text-center">
                          <FeatureCell value={item.growth} />
                        </td>
                        <td className="px-6 py-4 text-center">
                          <FeatureCell value={item.enterprise} />
                        </td>
                      </tr>
                    ))}
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
