import { motion } from "framer-motion";

interface ReactionCard {
  label: string;
  title: string;
  description: string;
  example: string;
}

const cards: ReactionCard[] = [
  {
    label: "01",
    title: "Активное сопротивление",
    description:
      "Открытые выступления против антирелигиозной политики приобретали форму массовых протестов и восстаний, особенно в сельской местности. Женщины играли ключевую роль в этих событиях.",
    example: "«Бабьи бунты» — Пителинское восстание 1930 г.",
  },
  {
    label: "02",
    title: "Пассивное сопротивление",
    description:
      "Верующие находили скрытые способы сохранения религиозной практики. Домашние обряды, тайное хранение икон и богослужебных книг стали массовым явлением.",
    example: "Домашние обряды · Тайное хранение икон · «Катакомбная церковь»",
  },
  {
    label: "03",
    title: "Легальные методы",
    description:
      "Часть верующих избирала путь легального противодействия, направляя коллективные ходатайства и жалобы в органы власти с требованием открытия храмов и прекращения преследований.",
    example: "Коллективные ходатайства в органы власти",
  },
  {
    label: "04",
    title: "Культурное сопротивление",
    description:
      "Сохранение традиций, ремёсел и литературы как способ сохранения идентичности внутри общин",
    example: "Издание религиозной литературы подпольно, народные песни и т. п.",
  },
];

const CardsSection = () => {
  return (
    <section id="cards" className="py-24 md:py-32 px-6 bg-primary">
      <div className="max-w-5xl mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-xs tracking-[0.4em] uppercase text-accent font-sans mb-4 text-center"
        >
          Реакция народа
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-serif text-3xl md:text-4xl text-center text-primary-foreground mb-20"
        >
          Формы сопротивления
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {cards.map((card, i) => (
            <motion.article
              key={card.label}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.7, delay: i * 0.15 }}
              className="group bg-primary-foreground/5 border border-primary-foreground/10 p-8 md:p-10 hover:bg-primary-foreground/10 transition-colors duration-500"
            >
              <span className="text-xs tracking-[0.2em] text-accent font-sans">
                {card.label}
              </span>
              <h3 className="font-serif text-xl md:text-2xl text-primary-foreground mt-4 mb-4">
                {card.title}
              </h3>
              <p className="text-sm text-primary-foreground/60 leading-relaxed mb-6">
                {card.description}
              </p>
              <div className="border-t border-primary-foreground/10 pt-4">
                <p className="text-xs tracking-[0.05em] text-wine-foreground/80 font-sans italic">
                  {card.example}
                </p>
              </div>
            </motion.article>
          ))}
          {/* 4th card added via data below if present */}
        </div>
      </div>
    </section>
  );
};

export default CardsSection;
