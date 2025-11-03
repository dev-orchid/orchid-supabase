import { Linkedin, Twitter, Github } from "lucide-react";

const teamMembers = [
  {
    name: "Sarah Chen",
    role: "CEO & Co-Founder",
    bio: "Former VP of Engineering at a Fortune 500 company with 15+ years building scalable systems.",
    image: "/images/team/placeholder-1.jpg",
    social: {
      linkedin: "#",
      twitter: "#",
    },
  },
  {
    name: "Michael Rodriguez",
    role: "CTO & Co-Founder",
    bio: "Full-stack architect passionate about building elegant solutions to complex problems.",
    image: "/images/team/placeholder-2.jpg",
    social: {
      linkedin: "#",
      github: "#",
    },
  },
  {
    name: "Emily Watson",
    role: "Head of Product",
    bio: "Product strategist with a track record of launching successful SaaS products from 0 to 1.",
    image: "/images/team/placeholder-3.jpg",
    social: {
      linkedin: "#",
      twitter: "#",
    },
  },
  {
    name: "David Kim",
    role: "Lead Engineer",
    bio: "Backend specialist focused on performance optimization and distributed systems.",
    image: "/images/team/placeholder-4.jpg",
    social: {
      linkedin: "#",
      github: "#",
    },
  },
  {
    name: "Jessica Martinez",
    role: "Head of Design",
    bio: "Award-winning UX designer creating intuitive interfaces that users love.",
    image: "/images/team/placeholder-5.jpg",
    social: {
      linkedin: "#",
      twitter: "#",
    },
  },
  {
    name: "James Anderson",
    role: "VP of Engineering",
    bio: "Technical leader with expertise in cloud architecture and DevOps practices.",
    image: "/images/team/placeholder-6.jpg",
    social: {
      linkedin: "#",
      github: "#",
    },
  },
];

export function Team() {
  return (
    <section className="container mx-auto px-4 py-20 md:py-28">
      <div className="mx-auto max-w-3xl text-center">
        <div className="team-section-badge">
          <span className="font-medium">Meet the Team</span>
        </div>
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
          The People Behind{" "}
          <span className="bg-gradient-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent">
            Orchid
          </span>
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">
          We&apos;re a diverse team of engineers, designers, and strategists united by our passion
          for building exceptional software.
        </p>
      </div>

      <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {teamMembers.map((member, index) => (
          <div key={index} className="team-member-card group">
            {/* Image Placeholder */}
            <div className="team-member-image-container">
              <div className="flex h-full w-full items-center justify-center">
                <div className="text-center">
                  <div className="team-member-avatar">
                    {member.name.split(" ").map((n) => n[0]).join("")}
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Team Member Photo
                    <br />
                    <span className="text-xs">(Replace with actual image)</span>
                  </p>
                </div>
              </div>
              {/* Decorative Elements */}
              <div className="team-member-orb-top" />
              <div className="team-member-orb-bottom" />
            </div>

            <div className="p-6">
              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p className="mt-1 text-sm font-medium text-primary">{member.role}</p>
              <p className="mt-3 text-sm text-muted-foreground">{member.bio}</p>

              <div className="mt-4 flex gap-3">
                {member.social.linkedin && (
                  <a
                    href={member.social.linkedin}
                    className="team-social-link"
                    aria-label={`${member.name} LinkedIn`}
                  >
                    <Linkedin className="h-4 w-4" />
                  </a>
                )}
                {member.social.twitter && (
                  <a
                    href={member.social.twitter}
                    className="team-social-link"
                    aria-label={`${member.name} Twitter`}
                  >
                    <Twitter className="h-4 w-4" />
                  </a>
                )}
                {member.social.github && (
                  <a
                    href={member.social.github}
                    className="team-social-link"
                    aria-label={`${member.name} GitHub`}
                  >
                    <Github className="h-4 w-4" />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <p className="text-muted-foreground">
          Want to join our team?{" "}
          <a href="/careers" className="font-medium text-primary hover:underline">
            View open positions
          </a>
        </p>
      </div>
    </section>
  );
}
