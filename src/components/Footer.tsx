import { motion } from "framer-motion";

const sources = [
  "Поспеловский Д. В. Русская православная церковь в XX веке. М., 1995.",
  "Шкаровский М. В. Русская православная церковь при Сталине и Хрущёве. М., 1999.",
  "Одинцов М. И. Государство и церковь в России. XX век. М., 1994.",
  "Алексеев В. А. Иллюзии и догмы. М., 1991.",
  "Курляндский И. А. Сталин, власть, религия. М., 2011.",
];

const Footer = () => {
  return (
    <footer id="footer" className="py-24 md:py-32 px-6 border-t border-border">
      <div className="max-w-4xl mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-xs tracking-[0.4em] uppercase text-accent font-sans mb-4 text-center"
        >
          Приложение
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-serif text-2xl md:text-3xl text-center mb-12"
        >
          Список литературы
        </motion.h2>

        <motion.ol
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="space-y-3 max-w-2xl mx-auto mb-20"
        >
          {sources.map((src, i) => (
            <li
              key={i}
              className="text-sm text-muted-foreground leading-relaxed flex gap-3"
            >
              <span className="text-accent font-sans text-xs mt-0.5 shrink-0">
                {String(i + 1).padStart(2, "0")}
              </span>
              {src}
            </li>
          ))}
        </motion.ol>

        <div className="text-center border-t border-border pt-8">
          <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground font-sans">
            Университет ИТМО · 2026
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
