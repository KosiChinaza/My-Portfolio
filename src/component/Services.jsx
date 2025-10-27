import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Code2, Network, Monitor, Globe } from 'lucide-react';

function Services() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const services = [
    {
      title: 'Smart Contract Development',
      description:
        'I write secure, optimized, and scalable smart contracts for blockchain applications.',
      icon: <Code2 size={40} className="text-purple-400" />,
    },
    {
      title: 'DApp Development',
      description:
        'I build decentralized applications with seamless Web3 integrations and responsive UI.',
      icon: <Network size={40} className="text-purple-400" />,
    },
    {
      title: 'Portfolio Websites',
      description:
        'I build personalized, elegant, and responsive portfolio websites that highlight your unique brand.',
      icon: <Monitor size={40} className="text-purple-400" />,
    },
    {
      title: 'Web Applications',
      description:
        'I build high-performing, user-friendly web apps built with modern frameworks and clean UI/UX.',
      icon: <Globe size={40} className="text-purple-400" />,
    },
  ];

  return (
    <section
      ref={ref}
      className={`min-h-screen flex flex-col mt-30 py-6 px-6 bg-[#0b031a] relative text-purple-100 transition-all duration-1000 ease-out
        [background-image:linear-gradient(0deg,rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px),radial-gradient(circle_at_center,#3b0066,#0a0010)] [background-size:40px_40px,40px_40px,100%_100%]
        ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}
      `}
    >
     
      <div className="absolute inset-0 flex justify-center">
        <div className="w-[600px] h-[400px] bg-purple-600/40 blur-[200px] rounded-full"></div>
      </div>

 
      <div className="flex justify-between relative z-10">
        <h1 className="text-3xl md:text-4xl text-purple-300 font-semibold mb-12">
          Services I Offer
        </h1>
      </div>

      <div
        className={`bg-gradient-to-br from-[#1c0f2e] to-[#24103d] mt-5 h-full w-full md:w-[95%] lg:w-[85%] xl:w-[80%] mx-auto rounded-2xl shadow-lg p-8 transform transition-all duration-1000 ${
          inView
            ? 'opacity-100 translate-y-0 scale-100'
            : 'opacity-0 translate-y-12 scale-95'
        }`}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 text-center">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-[#111] p-6 rounded-2xl shadow-[0_0_20px_#a855f7]/20 hover:shadow-[0_0_30px_#a855f7] transition-all duration-300"
            >
              <div className="flex justify-center mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-sm text-purple-200">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
