import { Reveal } from "./Reveal";
import { Headphones, Server, Code2 } from "lucide-react";

const pillars = [
  {
    n: "01",
    title: "Infraestrutura de TI",
    icon: Server,
    desc: "Servidores, redes, Active Directory e políticas de segurança.",
    strong: true,
  },
  {
    n: "02",
    title: "Desenvolvimento Web",
    icon: Code2,
    desc: "Competência complementar para criar soluções digitais.",
    strong: true,
  },
  {
    n: "03",
    title: "Suporte Técnico",
    icon: Headphones,
    desc: "Atendimento ao usuário, manutenção e sistemas operacionais.",
    strong: true,
  },
];

export function About() {
  return (
    <section id="sobre" className="relative overflow-hidden py-20 sm:py-28 lg:py-32">
      <div className="mx-auto w-full max-w-6xl px-6 lg:px-8">
        <Reveal>
          <p className="eyebrow">Perfil</p>
          <h2 className="mt-3 text-3xl font-bold text-foreground sm:text-4xl">Sobre mim</h2>
        </Reveal>

        <div className="mt-10 grid gap-10 sm:mt-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
          <div className="space-y-5 text-base leading-relaxed text-muted-foreground">
            <Reveal delay={0.05}>
              <p className="border-l-2 border-sand pl-5">
                Atualmente atuo como Técnico de Informática, trabalhando diretamente com suporte aos
                usuários, manutenção, sistemas operacionais e ambientes de infraestrutura.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="pl-5">
                Minha trajetória profissional está direcionada para a área de infraestrutura de TI,
                buscando aprofundar conhecimentos em servidores, redes, Active Directory, políticas
                de segurança e administração de ambientes corporativos.
              </p>
            </Reveal>
            <Reveal delay={0.25}>
              <p className="pl-5">
                Também possuo conhecimentos em desenvolvimento web, que utilizo para criar soluções
                digitais e ampliar minha capacidade de resolver problemas utilizando tecnologia.
              </p>
            </Reveal>
          </div>

          <div className="space-y-4">
            {pillars.map((p, i) => (
              <Reveal key={p.n} delay={0.1 + i * 0.12} x={16} y={0}>
                <div
                  className={`group flex items-start gap-5 rounded-2xl border p-6 transition-all duration-300 ${
                    p.strong
                      ? "border-border bg-card shadow-soft hover:-translate-y-1 hover:border-sand hover:shadow-lift"
                      : "border-dashed border-border bg-transparent hover:border-sand"
                  }`}
                >
                  <span
                    className={`font-display text-sm font-bold ${p.strong ? "text-sand" : "text-muted-foreground/60"}`}
                  >
                    {p.n}
                  </span>
                  <div>
                    <div className="flex items-center gap-2">
                      <p.icon
                        size={16}
                        className={p.strong ? "text-brand" : "text-muted-foreground"}
                      />
                      <h3
                        className={`font-display text-base font-semibold ${
                          p.strong ? "text-foreground" : "text-muted-foreground"
                        }`}
                      >
                        {p.title}
                      </h3>
                    </div>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
