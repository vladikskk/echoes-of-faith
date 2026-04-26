import { motion } from "framer-motion";
import { useState } from "react";

interface TimelineEvent {
  period: string;
  title: string;
  summary: string;
  details: string;
  stats?: string;
}

const events: TimelineEvent[] = [
  {
    period: "1917–1918",
    title: "Формирование основ политики",
    summary: "Создание законодательной базы для уничтожения влияния церкви",
    details:
      "Принятие Декрета о земле (конфискация церковных земель) и Декрета «Об отделении церкви от государства и школы от церкви» (лишение церкви имущества, прав и возможности обучать детей).",
  },
  {
    period: "1918–1922",
    title: "Гражданская война и начало репрессий",
    summary: "Радикализация политики и объявление церкви контрреволюционной силой",
    details:
      "Церковь объявляется «контрреволюционной» силой на стороне Белого движения. Начало репрессий против духовенства и создание первых атеистических организаций («Безбожная пятерка»).",
  },
  {
    period: "1922",
    title: "Кампания по изъятию церковных ценностей",
    summary: "Первая масштабная конфронтация под предлогом помощи голодающим",
    details:
      "Под предлогом помощи голодающим власть изымает святыни, провоцируя верующих на протесты. Кульминация: вооруженные столкновения (например, восстание в Шуе) и казни иерархов (расстрел митрополита Вениамина).",
  },
  {
    period: "1929–1930-е",
    title: "Административное наступление",
    summary: "Экономическое удушение церкви и массовое закрытие храмов",
    details:
      "Выдавливание церкви из публичного пространства. Массовое закрытие храмов под видом «просьб трудящихся», многократное увеличение налогов на духовенство, лишение их избирательных прав («лишенцы»).",
  },
  {
    period: "1929–1939",
    title: "Безбожная пятилетка и Большой террор",
    summary: "Переход к физическому уничтожению верующих и духовенства",
    details:
      "Массовые аресты и расстрелы десятков тысяч священнослужителей и мирян (по ст. 58 УК). Сокращение числа действующих храмов с ~50 000 до ~500. Религия окончательно уходит в подполье («катакомбная церковь»).",
    stats: "Сокращение храмов с 50 000 до 500",
  },
  {
    period: "1941–1943",
    title: "Период частичной легализации",
    summary: "Тактическое примирение власти и церкви в годы войны",
    details:
      "Осознание мобилизационного потенциала духовенства и верующих. Ключевая точка: встреча Сталина с иерархами 4 сентября 1943 г., после которой разрешено избрать патриарха, открывать храмы и духовные учебные заведения.",
  },
];

const TimelineSection = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <section id="timeline" className="py-24 md:py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-xs tracking-[0.4em] uppercase text-accent font-sans mb-4 text-center"
        >
          Хронология
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-serif text-3xl md:text-4xl text-center mb-20"
        >
          Ключевые периоды
        </motion.h2>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

          {events.map((event, i) => {
            const isExpanded = expandedIndex === i;
            const isEven = i % 2 === 0;

            return (
              <motion.div
                key={event.period}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: i * 0.15 }}
                className={`relative mb-16 last:mb-0 md:flex ${
                  isEven ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Dot */}
                <div className="absolute left-4 md:left-1/2 top-2 w-2.5 h-2.5 rounded-full bg-accent border-2 border-background -translate-x-1 md:-translate-x-[5px] z-10" />

                {/* Content */}
                <div
                  className={`ml-12 md:ml-0 md:w-1/2 ${
                    isEven ? "md:pr-12 md:text-right" : "md:pl-12"
                  }`}
                >
                  <span className="text-xs tracking-[0.2em] uppercase text-wine font-sans font-medium">
                    {event.period}
                  </span>
                  <h3 className="font-serif text-xl md:text-2xl mt-2 mb-2">
                    {event.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                    {event.summary}
                  </p>

                  <button
                    onClick={() =>
                      setExpandedIndex(isExpanded ? null : i)
                    }
                    className="text-xs tracking-[0.1em] uppercase text-accent hover:text-foreground transition-colors duration-300 font-sans"
                  >
                    {isExpanded ? "Свернуть" : "Подробнее"}
                  </button>

                  <motion.div
                    initial={false}
                    animate={{
                      height: isExpanded ? "auto" : 0,
                      opacity: isExpanded ? 1 : 0,
                    }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <p className="text-sm text-muted-foreground leading-relaxed mt-4">
                      {event.details}
                    </p>
                    {event.stats && (
                      <p className="mt-4 text-xs tracking-[0.1em] uppercase text-wine font-sans font-medium">
                        {event.stats}
                      </p>
                    )}
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
