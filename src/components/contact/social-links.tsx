import { MessageCircle, Linkedin, Send, Facebook, Youtube } from "lucide-react";

const socialLinks = [
  {
    name: "WhatsApp",
    icon: MessageCircle,
    url: "https://chat.whatsapp.com/KsXiw0Xd9hU7yQ8MsIotgY",
    color: "hover:text-[#25D366] hover:bg-[#25D366]/10",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    url: "https://linkedin.com/company/orchid",
    color: "hover:text-[#0A66C2] hover:bg-[#0A66C2]/10",
  },
  {
    name: "Facebook",
    icon: Facebook,
    url: "https://www.facebook.com/orchidsw",
    color: "hover:text-[#1877F2] hover:bg-[#1877F2]/10",
  },
  {
    name: "Telegram",
    icon: Send,
    url: "https://t.me/orchid_software",
    color: "hover:text-[#0088cc] hover:bg-[#0088cc]/10",
  },
  {
    name: "YouTube",
    icon: Youtube,
    url: "#",
    color: "hover:text-[#FF0000] hover:bg-[#FF0000]/10",
  },
];

export function SocialLinks() {
  return (
    <section className="border-t bg-muted/30 py-12">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center">
          <h3 className="mb-4 text-2xl font-bold">Connect With Us</h3>
          <p className="mb-8 text-muted-foreground">
            Follow us on social media for the latest updates, insights, and news
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`group flex items-center gap-3 rounded-xl border-2 bg-background px-6 py-4 transition-all hover:border-primary/50 hover:shadow-lg ${social.color}`}
                aria-label={social.name}
              >
                <social.icon className="h-6 w-6 transition-transform group-hover:scale-110" />
                <span className="font-medium">{social.name}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
