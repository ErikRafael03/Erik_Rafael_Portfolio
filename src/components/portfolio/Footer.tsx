import { Reveal } from "./Reveal";
import { Linkedin, Github, Mail, FileUser } from "lucide-react";

const links = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/erik-rafael/", icon: Linkedin },
  { label: "GitHub", href: "https://github.com/ErikRafael03", icon: Github },
  { label: "Email", href: "https://mail.google.com/mail/?view=cm&fs=1&to=erikrafael.dev@gmail.com", icon: Mail },
];

export function Footer() {
  return (
    <footer id="contato" className="relative overflow-hidden bg-brand text-primary-foreground">
      <div className="relative mx-auto w-full max-w-6xl px-6 py-16 sm:py-24 lg:px-8">
        <div className="grid gap-10 md:grid-cols-[1.1fr_0.9fr] md:items-end md:gap-12">
          <Reveal>
            <span className="h-px w-10 bg-sand" />
            <h2 className="mt-5 text-3xl font-bold sm:text-4xl">Vamos conversar?</h2>
            <p className="mt-4 max-w-lg text-sm leading-relaxed text-primary-foreground/75">
              Estou sempre aberto a novas oportunidades, projetos e conexões na área de Tecnologia da
              Informação.
            </p>
          </Reveal>

          <Reveal delay={0.12} className="md:justify-self-end">
            <div className="flex flex-col items-start gap-6 md:items-end">
              <div className="flex flex-wrap gap-5">
                {links.map((l) => (
                  <a
                    key={l.label}
                    href={l.href}
                    target={l.href.startsWith("http") ? "_blank" : undefined}
                    rel="noreferrer"
                    className="group inline-flex items-center gap-2 text-sm font-medium text-primary-foreground/80 transition-colors duration-200 hover:text-sand"
                  >
                    <l.icon size={16} className="text-sand" />
                    {l.label}
                  </a>
                ))}
              </div>
              <a
                href={`${import.meta.env.BASE_URL}erikcurriculo.pdf`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-sand px-6 py-3 text-sm font-semibold text-brand transition-all duration-300 hover:-translate-y-0.5 hover:bg-sand-soft"
              >
                <FileUser size={16} />
                Baixar CV
              </a>
            </div>
          </Reveal>
        </div>

        <div className="mt-12 border-t border-primary-foreground/15 pt-6 sm:mt-16">
          <p className="text-center text-xs text-primary-foreground/60">
            © 2026 Erik Rafael. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
