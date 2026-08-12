import { Reveal } from "./Reveal";
import { ArrowUpRight, Server, Calendar, LayoutTemplate, Store, Timer } from "lucide-react";

const projects = [
  {
    n: "01",
    title: "Sistema de Agendamento para Barbearia",
    icon: Calendar,
    desc: "Aplicação web desenvolvida para facilitar o gerenciamento de agendamentos de uma barbearia, utilizando integração com serviços externos e banco de dados.",
    tech: "JavaScript · Node.js · Firebase · Google Calendar API",
    featured: true,
    link: "https://barbeariatxulipa.web.app/",
  },
  {
    n: "02",
    title: "Sistema de Compras para Loja",
    icon: Store,
    desc: "Desenvolvimento de uma loja virtual responsiva para apresentação e divulgação de produtos, com catálogo de camisetas, informações de preços e área de contato para facilitar a comunicação com os clientes.",
    tech: "HTML · CSS · JavaScript · Node.js",
    featured: true,
    link: "https://erikrafael03.github.io/JM-Store/",
  },
  {
    n: "03",
    title: "Cronômetro para Estudos e Atividades",
    icon: Timer,
    desc: "Aplicação web desenvolvida para monitorar o tempo de estudos e diferentes tipos de atividades, permitindo acompanhar a duração de cada sessão de forma simples, prática e organizada.",
    tech: "HTML · CSS · JavaScript",
    featured: true,
    link: "https://erikrafael03.github.io/Cronometer/",
  },
];

export function Projects() {
  return (
    <section id="projetos" className="relative overflow-hidden py-20 sm:py-28 lg:py-32">
      <div className="mx-auto w-full max-w-6xl px-6 lg:px-8">
        <Reveal>
          <p className="eyebrow">Prática</p>
          <h2 className="mt-3 text-3xl font-bold text-foreground sm:text-4xl">Projetos</h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
            Projetos e experiências que representam minha evolução em tecnologia.
          </p>
        </Reveal>

        <div className="mt-10 space-y-5 sm:mt-14 sm:space-y-6">
          {projects.map((p, i) => (
            <Reveal key={p.n} delay={i * 0.1}>
              <article
                className={`group grid gap-6 rounded-3xl border bg-card p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-sand hover:shadow-lift sm:gap-8 sm:p-9 md:grid-cols-[auto_1fr_auto] md:items-center lg:p-10 ${
                  p.featured ? "border-brand/25 shadow-soft" : "border-border"
                }`}
              >
                <div className="flex items-center gap-5">
                  <span className="font-display text-sm font-bold text-sand">{p.n}</span>
                  <span
                    className={`inline-flex h-14 w-14 items-center justify-center rounded-2xl transition-transform duration-300 group-hover:scale-105 ${
                      p.featured ? "bg-brand text-primary-foreground" : "bg-accent text-brand"
                    }`}
                  >
                    <p.icon size={22} />
                  </span>
                </div>

                <div>
                  {/* {p.featured && (
                    <span className="mb-3 inline-block rounded-full bg-sand-soft px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-brand">
                      Infraestrutura
                    </span>
                  )} */}
                  <h3 className="font-display text-xl font-semibold text-foreground sm:text-2xl">
                    {p.title}
                  </h3>
                  <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                    {p.desc}
                  </p>
                  <p className="mt-4 text-xs font-medium tracking-wide text-brand-light">
                    {p.tech}
                  </p>
                </div>

                <a
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 self-start rounded-full border border-brand px-5 py-2.5 text-sm font-semibold text-brand transition-colors duration-300 hover:bg-brand hover:text-primary-foreground md:self-center"
                >
                  Ver projeto
                  <ArrowUpRight size={15} />
                </a>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
