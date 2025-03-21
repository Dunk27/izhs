import React, { useState } from "react";
import { motion } from "framer-motion";

const products = [
  "Стратегическое партнерство в рамках g100",
  "Внедрение независимого строительного",
  "Всероссийский форум качества",
  "Бизнес-стажировка",
  "О ГК ИЖС.РФ. Информационный блок",
  "Контент 1",
  "Контент 2",
];

export default function Home() {
  const [section, setSection] = useState("about");

  return (
    <div className="p-4 space-y-4">
      <div className="bg-white p-4 rounded-lg shadow-md">
        <h2 className="text-xl font-bold">О нас</h2>
        <p className="text-gray-600">
          Мы проводим исследования, изучаем рынок, работаем с проблемами и
          прогнозируем развитие.
        </p>
        <button
          onClick={() => setSection("products")}
          className="mt-2 bg-blue-500 text-white p-2 rounded"
        >
          Смотреть продукты
        </button>
      </div>
      {section === "products" && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="grid grid-cols-1 gap-4"
        >
          {products.map((product, index) => (
            <div key={index} className="bg-gray-100 p-4 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold">{product}</h3>
            </div>
          ))}
        </motion.div>
      )}
    </div>
  );
}