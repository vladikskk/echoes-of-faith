import { motion } from "framer-motion";
import heroImage from "@/assets/hero-church.jpg";

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Abandoned church interior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primary/70" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-xs tracking-[0.4em] uppercase text-accent mb-8 font-sans"
        >
          Исследовательская работа · ИТМО · 2026
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.6 }}
          className="font-serif text-3xl md:text-5xl lg:text-6xl font-medium leading-tight text-primary-foreground mb-8"
        >
          Реакция народа на религиозные гонения в&nbsp;СССР
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="font-serif text-lg md:text-xl text-primary-foreground/70 mb-4"
        >
          1917–1943
        </motion.p>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.2, delay: 1.3 }}
          className="w-16 h-px bg-accent mx-auto mb-8"
        />

        {/* Expanded descriptive text to enrich visuals and context */}
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-serif text-sm md:text-base text-primary-foreground/70 mb-10 max-w-2xl mx-auto"
        >
          Это исследование рассматривает причины и последствия религиозных гонений в СССР,
          ищет связи между политикой государства и жизнью религиозных общин. Мы опираемся
          на архивные документы, свидетельства очевидцев и академические источники, чтобы
          представить многогранную картину того времени и показать, как вера и общины
          отвечали на давление власти.
        </motion.p>

        <motion.blockquote
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 1.6 }}
          className="font-serif italic text-base md:text-lg text-primary-foreground/60 max-w-lg mx-auto mb-12"
        >
          «Религия есть опиум народа»
        </motion.blockquote>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
          className="text-xs tracking-[0.15em] text-primary-foreground/50 font-sans"
        >
          Геворгян Э. · Ждахин И. · Шабельникова В.
        </motion.p>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-px h-12 bg-gradient-to-b from-transparent to-primary-foreground/40"
        />
      </motion.div>
    </section>
  );
};

export default HeroSection;
