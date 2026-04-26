import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

interface LocationEvent {
  city: string;
  date: string;
  event: string;
  description: string;
}

const locations: LocationEvent[] = [
  {
    city: "Москва",
    date: "1918",
    event: "Законодательный центр",
    description: "Принятие Декрета об отделении церкви от государства и школы от церкви. Начало системного демонтажа церковного влияния.",
  },
  {
    city: "Шуя",
    date: "1922",
    event: "Центр сопротивления",
    description: "Крупнейшее вооруженное восстание верующих против изъятия церковных ценностей. Жесткое подавление протестов властями.",
  },
  {
    city: "Ленинград",
    date: "1930-е",
    event: "Репрессии в столице",
    description: "Массовое закрытие соборов, аресты высшего духовенства и уничтожение церковных архивов.",
  },
  {
    city: "Екатеринбург",
    date: "1930-е",
    event: "Урал: Борьба с религией",
    description: "Активная деятельность «Союза воинствующих безбожников», закрытие храмов в промышленных центрах региона.",
  },
  {
    city: "Москва",
    date: "1943",
    event: "Политический разворот",
    description: "Встреча Сталина с митрополитами. Восстановление Патриаршества и частичная легализация церковной деятельности.",
  },
];

const MapSection = () => {
  return (
    <section id="map" className="py-24 md:py-32 px-6 bg-muted/30">
      <div className="max-w-5xl mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-xs tracking-[0.4em] uppercase text-accent font-sans mb-4 text-center"
        >
          Пространство
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-serif text-3xl md:text-4xl text-center mb-20"
        >
          География репрессий
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {locations.map((loc, i) => (
            <motion.div
              key={`${loc.city}-${loc.date}`}
              initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className="flex gap-6 p-6 rounded-sm bg-background border border-border hover:border-accent/50 transition-colors duration-300 group"
            >
              <div className="shrink-0">
                <div className="w-12 h-12 rounded-full bg-wine/10 flex items-center justify-center text-wine group-hover:bg-wine group-hover:text-white transition-colors duration-300">
                  <MapPin size={24} />
                </div>
              </div>
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="font-serif text-xl font-medium">{loc.city}</h3>
                  <span className="text-xs font-sans text-muted-foreground bg-muted px-2 py-0.5 rounded">
                    {loc.date}
                  </span>
                </div>
                <p className="text-sm font-medium text-foreground mb-2">{loc.event}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {loc.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-xs italic text-muted-foreground font-serif">
            * События распределены по ключевым центрам противостояния и государственного управления
          </p>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
