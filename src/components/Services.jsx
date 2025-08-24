import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Globe, Smartphone, Cloud, Shield, Brain, Code } from "lucide-react";

const Services = () => {
  const [isDark, setIsDark] = useState(false);

  // Detect theme changes
  useEffect(() => {
    const checkTheme = () => {
      setIsDark(document.documentElement.classList.contains("dark"));
    };
    checkTheme();
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
    return () => observer.disconnect();
  }, []);

  const services = [
    {
      icon: Globe,
      title: "Web Development",
      description: "Modern websites and web apps using React, Next.js, and Node.js.",
      features: ["Responsive Design", "SEO Optimized", "Fast Loading", "CMS Integration"]
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description: "Cross-platform mobile apps for iOS and Android.",
      features: ["iOS & Android", "Cross-platform", "UI/UX Design", "App Store Deployment"]
    },
    {
      icon: Cloud,
      title: "Cloud Solutions",
      description: "Reliable cloud infrastructure with AWS, Azure, GCP.",
      features: ["Cloud Migration", "Auto Scaling", "Data Backup", "DevOps Integration"]
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      description: "Protect your digital assets with audits and monitoring.",
      features: ["Security Audits", "Threat Monitoring", "Data Protection", "Compliance"]
    },
    {
      icon: Brain,
      title: "AI & Machine Learning",
      description: "Intelligent solutions using AI and machine learning.",
      features: ["Predictive Analytics", "Automation", "Data Mining", "Smart Algorithms"]
    },
    {
      icon: Code,
      title: "Custom Software",
      description: "Tailored software for your business needs.",
      features: ["Custom Development", "API Integration", "Database Design", "Maintenance"]
    }
  ];

  const cardBg = isDark ? "#1f2937" : "#ffffff";
  const cardBorder = isDark ? "#4b5563" : "#d1d5db";
  const textColor = isDark ? "#f9fafb" : "#111827";
  const textMuted = isDark ? "#d1d5db" : "#4b5563";

  return (
    <section style={{ padding: "5rem 1.5rem", backgroundColor: isDark ? "#111827" : "#ffffff", transition: "all 0.3s ease" ,overflowX:"hidden"}}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          style={{ marginBottom: "3rem", textAlign: "center" }}
        >
          <h2 style={{ fontSize: "3rem", fontWeight: "700", marginBottom: "1rem" ,color: isDark ? "#ffffff" : "#111827" }}>
            Our <span style={{ background: "linear-gradient(to right, #6366f1, #ec4899)", WebkitBackgroundClip: "text", color: "transparent" }}>Services</span>
          </h2>
          <p style={{ fontSize: "1.25rem", maxWidth: "800px", margin: "0 auto", color: textMuted }}>
            We offer comprehensive IT solutions to help your business thrive in the digital age.
          </p>
        </motion.div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2rem" }}>
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ type: "spring", stiffness: 300, duration: 0.3, delay: idx * 0.1 }}
              style={{
                backgroundColor: cardBg,
                border: `1px solid ${cardBorder}`,
                borderRadius: "1rem",
                padding: "1.5rem",
                cursor: "pointer",
                boxShadow: isDark ? "0 4px 12px rgba(0,0,0,0.6)" : "0 4px 12px rgba(0,0,0,0.1)",
                transition: "all 0.3s ease"
              }}
            >
              <motion.div
                whileHover={{ scale: 1.2, rotate: 5 }}
                style={{
                  width: "64px",
                  height: "64px",
                  borderRadius: "50%",
                  background: "linear-gradient(90deg, #6366f1, #ec4899)",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginBottom: "1rem",
                  color: "#fff"
                }}>
                <service.icon size={28} />
              </motion.div>

              <h3 style={{ fontSize: "1.25rem", fontWeight: "600", marginBottom: "0.5rem", color: textColor }}>{service.title}</h3>
              <p style={{ marginBottom: "1rem", color: textMuted, lineHeight: "1.6" }}>{service.description}</p>

              <ul style={{ marginBottom: "1rem" }}>
                {service.features.map((feature, i) => (
                  <li key={i} style={{ display: "flex", alignItems: "center", fontSize: "0.875rem", marginBottom: "0.5rem", color: textMuted }}>
                    <span style={{ width: "0.5rem", height: "0.5rem", backgroundColor: "#6366f1", borderRadius: "50%", marginRight: "0.5rem", flexShrink: 0 }}></span>
                    {feature}
                  </li>
                ))}
              </ul>

              <motion.button
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "#6366f1",
                  color: "#fff"
                }}
                style={{
                  padding: "0.75rem 1rem",
                  borderRadius: "0.5rem",
                  border: "1px solid #6366f1",
                  backgroundColor: "transparent",
                  color: "#6366f1",
                  cursor: "pointer",
                  fontWeight: "500",
                  transition: "all 0.3s ease"
                }}
              >
                Learn More
              </motion.button>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          style={{ textAlign: "center", marginTop: "3rem" }}
        >
          <motion.button
            whileHover={{
              scale: 1.05,
              opacity: 0.9,
              background: "linear-gradient(90deg, #6366f1, #ec4899)",
              color: "#fff"
            }}
            style={{
              padding: "1rem 2rem",
              fontSize: "1.25rem",
              fontWeight: "500",
              borderRadius: "0.5rem",
              border: "none",
              background: "linear-gradient(90deg, #6366f1, #ec4899)",
              color: "#fff",
              cursor: "pointer",
              transition: "all 0.3s ease"
            }}
          >
            Get a Free Consultation
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Services; 