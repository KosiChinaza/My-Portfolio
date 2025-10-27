import React, { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What do you build?",
    answer:
      "I build responsive, modern web applications designed to your satisfaction. I build DApps with seamless Web3 integrations and write secure, optimized and scalable Smart Contracts.",
    iconBg: "bg-rose-100",
    iconColor: "text-rose-500",
    icon: "✨",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "Building complex DApps and web applications or smart contracts can take 3–4 weeks, but most small projects take 2 weeks. Working with a team makes if even faster.",
    iconBg: "bg-blue-100",
    iconColor: "text-blue-500",
    icon: "⏱️",
  },
  {
    question: "What tools do you use?",
    answer:
      "I use React, Tailwind CSS, JavaScript, Solidity, and ethers.js to build scalable, beautiful web apps and DApps, and to write secure smart contracts.",
    iconBg: "bg-green-100",
    iconColor: "text-green-500",
    icon: "🛠️",
  },
  {
    question: "Can you work with a team?",
    answer:
      "Yes! I can, and I love working with a team.",
    iconBg: "bg-amber-100",
    iconColor: "text-amber-500",
    icon: "📝",
  },
];

export default function FAQ() {
  const [openLeft, setOpenLeft] = useState(null);
  const [openRight, setOpenRight] = useState(null);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  
  const leftFaqs = faqs.slice(0, Math.ceil(faqs.length / 2));
  const rightFaqs = faqs.slice(Math.ceil(faqs.length / 2));

  const toggleLeft = (index) => {
    setOpenLeft(openLeft === index ? null : index);
  };

  const toggleRight = (index) => {
    setOpenRight(openRight === index ? null : index);
  };

  return (
    <section
      ref={ref}
      className={`min-h-screen flex flex-col relative transition-all duration-1000 ease-out 
        [background-image:linear-gradient(0deg,rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px),radial-gradient(circle_at_center,#3b0066,#0a0010)] 
        [background-size:40px_40px,40px_40px,100%_100%] 
        ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
    >
      
      <h2 className="text-4xl font-extrabold text-purple-300 mb-3 pt-8 px-8 ">
        Frequently Asked Questions
      </h2>
      <p className="flex justify-center text-center text-purple-200 mb-12 pt-16 px-4 sm:px-6 md:px-10 lg:px-20">
        Quick answers to common questions.
      </p>

      <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto py-8 px-4 sm:px-6 md:px-10 lg:px-20">
        <div className="space-y-6">
          {leftFaqs.map((faq, index) => (
            <FAQBox
              key={index}
              faq={faq}
              isOpen={openLeft === index}
              toggle={() => toggleLeft(index)}
            />
          ))}
        </div>

        
        <div className="space-y-6">
          {rightFaqs.map((faq, index) => (
            <FAQBox
              key={index}
              faq={faq}
              isOpen={openRight === index}
              toggle={() => toggleRight(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}


function FAQBox({ faq, isOpen, toggle }) {
  return (
    <div className="bg-purple-200 rounded-2xl shadow-sm border border-gray-100 p-5 transition hover:shadow-md">
      <button
        onClick={toggle}
        className="flex justify-between items-center w-full"
      >
        <div className="flex items-center gap-4 text-left">
          <div
            className={`w-10 h-10 flex items-center justify-center rounded-xl ${faq.iconBg}`}
          >
            <span className={`text-xl ${faq.iconColor}`}>{faq.icon}</span>
          </div>
          <h3 className="text-lg font-semibold text-gray-900">
            {faq.question}
          </h3>
        </div>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronDown className="text-purple-700" />
        </motion.div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="text-purple-900 mt-4 leading-relaxed">
              {faq.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
