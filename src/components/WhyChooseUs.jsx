import { motion } from "framer-motion";
import { CheckCircle, Users, DollarSign, Clock, Award, Zap } from "lucide-react";

const WhyChooseUs = () => {
  const advantages = [
    {
      icon: Users,
      title: "Expert Developers",
      description:
        "Our team consists of highly skilled and experienced developers with expertise in the latest technologies and best practices.",
    },
    {
      icon: Zap,
      title: "Scalable Solutions",
      description:
        "We build robust, scalable solutions that grow with your business and adapt to changing market demands.",
    },
    {
      icon: DollarSign,
      title: "Affordable Pricing",
      description:
        "Get premium quality services at competitive prices with transparent pricing and no hidden costs.",
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description:
        "Round-the-clock technical support and maintenance to ensure your systems run smoothly at all times.",
    },
    {
      icon: Award,
      title: "Quality Assurance",
      description:
        "Rigorous testing and quality assurance processes ensure bug-free, high-performance solutions.",
    },
    {
      icon: CheckCircle,
      title: "On-Time Delivery",
      description:
        "We pride ourselves on meeting deadlines and delivering projects on time, every time.",
    },
  ];

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-950 transition-colors duration-500 relative">
      <div className="container mx-auto px-6">
        {/* Heading Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
            Why Choose{" "}
            <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              Us?
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            We stand out from the competition with our commitment to excellence,
            innovative solutions, and customer-centric approach.
          </p>
        </motion.div>

        {/* Advantages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((advantage, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
             <div className="h-full group border rounded-2xl p-6 text-center transition-all duration-300 hover:shadow-lg border-blue-500/20 hover:border-blue-500/40 bg-white dark:bg-gray-800 dark:border-blue-700 dark:hover:border-blue-800">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-4 text-white"
                >
                  <advantage.icon size={28} />
                </motion.div>

                <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                  {advantage.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {advantage.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call-to-Action Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-8 md:p-12 text-white text-center">
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Business?
            </h3>
            <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
              Join hundreds of satisfied clients who have transformed their
              businesses with our innovative IT solutions.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <div className="text-3xl font-bold mb-2">100+</div>
                <div className="text-white/90">Projects Completed</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">50+</div>
                <div className="text-white/90">Happy Clients</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">5+</div>
                <div className="text-white/90">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">99%</div>
                <div className="text-white/90">Success Rate</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
