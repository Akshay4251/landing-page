import { motion } from "framer-motion";
import { Target, Eye, Users, Award } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Target,
      title: "Our Mission",
      description:
        "To deliver innovative technology solutions that drive business growth and digital transformation for our clients worldwide.",
    },
    {
      icon: Eye,
      title: "Our Vision",
      description:
        "To be the leading IT solutions provider, recognized for excellence in innovation, quality, and customer satisfaction.",
    },
    {
      icon: Users,
      title: "Our Team",
      description:
        "Expert developers, designers, and consultants working together to bring your digital vision to life.",
    },
    {
      icon: Award,
      title: "Our Values",
      description:
        "Quality, integrity, innovation, and customer-centricity are the core values that guide everything we do.",
    },
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
            About{" "}
            <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              Us
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            We are <b>KALI_BYTE SOLUTIONS</b>, a forward-thinking IT company
            dedicated to transforming businesses through cutting-edge technology
            solutions. With years of experience and a team of expert
            professionals, we deliver exceptional digital experiences that drive
            growth and success.
          </p>
        </motion.div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="h-full bg-gray-50 dark:bg-gray-950 rounded-xl border border-gray-200 dark:border-gray-700 dark:hover:border-blue-900 shadow-md p-6 text-center group hover:shadow-xl transition-all duration-300">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mb-4 text-white"
                >
                  <feature.icon size={28} />
                </motion.div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-8 md:p-12 text-white">
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              Why Choose KALI_BYTE SOLUTIONS?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div>
                <div className="text-4xl font-bold mb-2">5+</div>
                <div className="text-white/90">Years of Excellence</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">100+</div>
                <div className="text-white/90">Successful Projects</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">24/7</div>
                <div className="text-white/90">Support & Maintenance</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
