import { motion } from "motion/react";
import { ArrowRight, Mail } from "lucide-react";

const fade = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0 },
};

function NetworkDiagram() {
  const nodes = [
    { x: 50, y: 14 },
    { x: 18, y: 52 },
    { x: 50, y: 52 },
    { x: 82, y: 52 },
    { x: 32, y: 88 },
    { x: 68, y: 88 },
  ];
  const edges: Array<{ x1: number; y1: number; x2: number; y2: number }> = [
    { x1: 50, y1: 14, x2: 50, y2: 52 },
    { x1: 50, y1: 52, x2: 18, y2: 52 },
    { x1: 50, y1: 52, x2: 82, y2: 52 },
    { x1: 18, y1: 52, x2: 32, y2: 88 },
    { x1: 82, y1: 52, x2: 68, y2: 88 },
    { x1: 32, y1: 88, x2: 68, y2: 88 },
  ];

  return (
    <svg viewBox="0 0 100 100" className="h-full w-full" aria-hidden="true">
      {edges.map((e, i) => (
        <motion.line
          key={i}
          x1={e.x1}
          y1={e.y1}
          x2={e.x2}
          y2={e.y2}

          stroke="currentColor"
          strokeWidth="0.4"
          className="text-brand/30"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.6 + i * 0.12, ease: "easeOut" }}
        />
      ))}
      {nodes.map((n, i) => (
        <motion.g
          key={i}
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.8 + i * 0.1 }}
          style={{ transformOrigin: `${n.x}px ${n.y}px` }}
        >
          <circle cx={n.x} cy={n.y} r={i === 0 ? 4.5 : 3} className="fill-brand" />
          <circle
            cx={n.x}
            cy={n.y}
            r={i === 0 ? 9 : 7}
            className="fill-none stroke-sand"
            strokeWidth="0.5"
          />
        </motion.g>
      ))}
    </svg>
  );
}

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex items-center overflow-hidden pb-16 pt-28 sm:pb-20 sm:pt-32 lg:min-h-[80vh] lg:pt-24"
    >
      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 px-6 sm:gap-16 lg:grid-cols-[1.15fr_0.85fr] lg:px-8">
        <motion.div initial="hidden" animate="show" className="max-w-xl">
          <motion.p
            variants={fade}
            transition={{ duration: 0.5 }}
            className="eyebrow flex items-center gap-3"
          >
            <span className="h-px w-8 bg-sand" />
            Técnico de Informática · Infraestrutura de TI
          </motion.p>

          <motion.h1
            variants={fade}
            transition={{ duration: 0.6, delay: 0.12 }}
            className="mt-6 text-5xl font-bold text-foreground sm:text-6xl"
          >
            Erik Rafael
          </motion.h1>

          <motion.p
            variants={fade}
            transition={{ duration: 0.6, delay: 0.24 }}
            className="mt-4 font-display text-xl font-medium text-brand sm:text-2xl"
          >
            Tecnologia, suporte e infraestrutura.
          </motion.p>

          <motion.p
            variants={fade}
            transition={{ duration: 0.6, delay: 0.36 }}
            className="mt-6 text-base leading-relaxed text-muted-foreground"
          >
            Profissional de TI com experiência em suporte técnico e atuação em ambientes
            corporativos, desenvolvendo continuamente conhecimentos em infraestrutura, servidores,
            redes e administração de sistemas.
          </motion.p>

          <motion.div
            variants={fade}
            transition={{ duration: 0.6, delay: 0.48 }}
            className="mt-10 flex flex-wrap gap-3"
          >
            <a
              href="#projetos"
              className="group inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-semibold text-primary-foreground shadow-soft transition-all duration-300 hover:bg-brand-light hover:shadow-lift"
            >
              Ver projetos
              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>
            <a
              href="#contato"
              className="inline-flex items-center gap-2 rounded-full border border-brand px-6 py-3 text-sm font-semibold text-brand transition-colors duration-300 hover:bg-brand hover:text-primary-foreground"
            >
              <Mail size={16} />
              Entre em contato
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative mx-auto hidden aspect-square w-full max-w-sm items-center justify-center rounded-3xl border border-border bg-card p-10 shadow-soft lg:flex"
        >
          <NetworkDiagram />
          <span className="absolute bottom-5 left-1/2 -translate-x-1/2 whitespace-nowrap text-[10px] font-semibold tracking-[0.2em] text-muted-foreground">
            REDES · SERVIDORES · SISTEMAS
          </span>
        </motion.div>
      </div>
    </section>
  );
}
