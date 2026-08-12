import { Reveal } from "./Reveal";
import { motion } from "motion/react";
import { Headphones, Server, Code2, Wrench } from "lucide-react";

const groups = [
  {
    label: "Infraestrutura",
    icon: Server,
    highlight: true,
    items: [
      "Windows Server",
      "Active Directory",
      "Group Policy (GPO)",
      "Redes",
      "DNS",
      "DHCP",
      "TCP/IP",
    ],
  },
  {
    label: "Desenvolvimento",
    icon: Code2,
    highlight: true,
    secondary: false,
    items: ["HTML", "CSS", "JavaScript", "Node.js", "Firebase", "MySQL"],
  },
  {
    label: "Suporte Técnico",
    icon: Headphones,
    highlight: true,
    items: [
      "Windows",
      "Hardware",
      "Software",
      "Troubleshooting",
      "Manutenção",
      "Atendimento ao usuário",
    ],
  },
  {
    label: "Ferramentas",
    icon: Wrench,
    highlight: true,
    items: ["Git", "GitHub", "VS Code",],
  },
];

export function Skills() {
  return (
    <section id="habilidades" className="relative overflow-hidden py-20 sm:py-28 lg:py-32">
      <div className="mx-auto w-full max-w-6xl px-6 lg:px-8">
        <Reveal>
          <p className="eyebrow">Competências</p>
          <h2 className="mt-3 text-3xl font-bold text-foreground sm:text-4xl">Habilidades</h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
            Conhecimentos que fazem parte da minha evolução profissional em Tecnologia da Informação.
          </p>
        </Reveal>

        <div className="mt-10 grid items-start gap-5 sm:mt-14 sm:gap-6 md:grid-cols-2">
          {groups.map((g, gi) => (
            <Reveal
              key={g.label}
              delay={gi * 0.1}
            >
              <div
                className={`h-full rounded-2xl border p-7 transition-all duration-300 ${
                  g.highlight
                    ? "border-brand/25 bg-card shadow-lift"
                    : g.secondary
                      ? "border-dashed border-border bg-transparent"
                      : "border-border bg-card shadow-soft"
                }`}
              >
                <div className="flex items-center gap-3">
                  <span
                    className={`inline-flex h-9 w-9 items-center justify-center rounded-xl ${
                      g.highlight ? "bg-brand text-primary-foreground" : "bg-accent text-brand"
                    }`}
                  >
                    <g.icon size={16} />
                  </span>
                  <h3
                    className={`text-xs font-bold uppercase tracking-[0.18em] ${
                      g.secondary ? "text-muted-foreground" : "text-foreground"
                    }`}
                  >
                    {g.label}
                  </h3>
                  {g.secondary && (
                    <span className="ml-auto text-[10px] font-semibold uppercase tracking-widest text-muted-foreground/70">
                      Complementar
                    </span>
                  )}
                </div>

                <div className="mt-6 flex flex-wrap gap-2.5">
                  {g.items.map((item, i) => (
                    <motion.span
                      key={item}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.4 }}
                      transition={{ duration: 0.35, delay: gi * 0.08 + i * 0.05 }}
                      className={`cursor-default rounded-full border px-4 py-2 text-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-sand ${
                        g.highlight
                          ? "border-border bg-background font-medium text-brand"
                          : g.secondary
                            ? "border-border/70 bg-transparent text-muted-foreground"
                            : "border-border bg-background text-foreground"
                      }`}
                    >
                      {item}
                    </motion.span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
