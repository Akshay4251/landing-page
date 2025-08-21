import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      content: "+1 (555) 123-4567",
      href: "tel:+15551234567",
    },
    {
      icon: Mail,
      title: "Email",
      content: "info@kalibytesolutions.com",
      href: "mailto:info@kalibytesolutions.com",
    },
    {
      icon: MapPin,
      title: "Address",
      content: "123 Tech Street, Silicon Valley, CA 94025",
      href: "#",
    },
  ];

  return (
    <section
      id="contact"
      className="py-20 bg-white dark:bg-gray-900 transition-colors duration-500"
    >
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
            Get In{" "}
            <span className="bg-gradient-to-r from-purple-500 to-blue-500 dark:from-blue-500 dark:to-purple-500 bg-clip-text text-transparent">
              Touch
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Ready to start your next project? Contact us today for a free
            consultation and let's discuss how we can help transform your
            business.
          </p>
        </motion.div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="rounded-2xl border border-gray-200 dark:border-blue-900 shadow-md bg-gray-50 dark:bg-gray-950 dark:hover:border-blue-700 hover:border-purple-500 transition-colors">
              <div className="p-8">
                <h3 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">
                  Send us a Message
                </h3>

                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="firstName"
                        className="text-gray-800 dark:text-gray-200"
                      >
                        First Name
                      </label>
                      <input
                        id="firstName"
                        placeholder="Enter your first name"
                        className="mt-2 w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="lastName"
                        className="text-gray-800 dark:text-gray-200"
                      >
                        Last Name
                      </label>
                      <input
                        id="lastName"
                        placeholder="Enter your last name"
                        className="mt-2 w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="text-gray-800 dark:text-gray-200"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      placeholder="Enter your email address"
                      className="mt-2 w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="company"
                      className="text-gray-800 dark:text-gray-200"
                    >
                      Company (Optional)
                    </label>
                    <input
                      id="company"
                      placeholder="Enter your company name"
                      className="mt-2 w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="text-gray-800 dark:text-gray-200"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      placeholder="Tell us about your project or requirements"
                      rows={6}
                      className="mt-2 w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-white font-medium bg-gradient-to-r from-purple-500 to-blue-500 dark:from-blue-500 dark:to-purple-500 hover:opacity-90 transition"
                  >
                    <Send size={20} />
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">
                Contact Information
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                We're here to help you succeed. Reach out to us through any of
                the following channels, and our team will get back to you within
                24 hours.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="rounded-2xl border border-gray-200 dark:border-blue-900 shadow-sm bg-gray-50 dark:bg-gray-800 hover:border-purple-500 dark:hover:border-blue-700 transition-colors">
                    <div className="p-6 flex items-center space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 dark:from-blue-500 dark:to-purple-500 rounded-full flex items-center justify-center text-white">
                          <info.icon size={24} />
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                          {info.title}
                        </h4>
                        <a
                          href={info.href}
                          className="text-gray-600 dark:text-gray-300 hover:text-purple-500 dark:hover:text-blue-700 transition-colors"
                        >
                          {info.content}
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-purple-500 to-blue-500 dark:from-blue-500 dark:to-purple-500 rounded-2xl p-8 text-white"
            >
              <h4 className="text-xl font-semibold mb-4">
                Quick Response Guarantee
              </h4>
              <p className="text-white/90 mb-4">
                We value your time and ensure all inquiries receive a response
                within 24 hours.
              </p>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-sm">Available Now</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
