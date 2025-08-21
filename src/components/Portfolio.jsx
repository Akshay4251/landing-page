import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const Portfolio = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const checkTheme = () => {
      setIsDark(document.documentElement.classList.contains("dark"));
    };

    checkTheme();
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      title: "E-Commerce Platform",
      category: "Web Development",
      description:
        "Modern e-commerce solution with advanced features including inventory management, payment processing, and analytics dashboard.",
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Healthcare Mobile App",
      category: "Mobile Development",
      description:
        "Cross-platform mobile application for healthcare providers with patient management, appointment scheduling, and telemedicine features.",
      image:
        "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1170&auto=format&fit=crop",
      technologies: ["React Native", "Firebase", "Express", "WebRTC"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "AI-Powered Analytics",
      category: "AI & Machine Learning",
      description:
        "Intelligent analytics platform that uses machine learning to provide business insights and predictive analytics for enterprise clients.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      technologies: ["Python", "TensorFlow", "React", "PostgreSQL"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Cloud Infrastructure",
      category: "Cloud Solutions",
      description:
        "Scalable cloud infrastructure setup with automated deployment, monitoring, and disaster recovery for a fintech startup.",
      image:
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop",
      technologies: ["AWS", "Docker", "Kubernetes", "Terraform"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Security Audit Platform",
      category: "Cybersecurity",
      description:
        "Comprehensive security auditing tool that identifies vulnerabilities and provides detailed reports with remediation recommendations.",
      image:
        "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&h=400&fit=crop",
      technologies: ["Python", "Django", "React", "PostgreSQL"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Enterprise CRM",
      category: "Custom Software",
      description:
        "Custom customer relationship management system with advanced reporting, automation, and integration capabilities.",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      technologies: ["Vue.js", "Laravel", "MySQL", "Redis"],
      liveUrl: "#",
      githubUrl: "#",
    },
  ];

  const styles = {
    section: {
      padding: "5rem 1.5rem",
      backgroundColor: isDark ? "#030712" : "#f9fafb",
      color: isDark ? "#f9fafb" : "#111827",
      transition: "all 0.3s ease",
    },
    card: {
      position: "relative",
      backgroundColor: isDark ? "#1f2937" : "#ffffff",
      borderRadius: "0.75rem",
      overflow: "hidden",
      boxShadow: isDark
        ? "0 4px 8px rgba(0,0,0,0.6)"
        : "0 4px 8px rgba(0,0,0,0.1)",
      transition: "all 0.3s ease",
      border: `1px solid ${isDark ? "#0D47A1" : "#e5e7eb"}`,
    },
    category: {
      color: isDark ? "#d8b4fe" : "#7c3aed",
    },
    cardDescription: {
      color: isDark ? "#d1d5db" : "#4b5563",
    },
    techBadge: {
      backgroundColor: isDark ? "#6d28d9" : "#ede9fe",
      color: isDark ? "#ede9fe" : "#6d28d9",
      padding: "0.25rem 0.75rem",
      borderRadius: "9999px",
      fontSize: "0.75rem",
      marginRight: "0.5rem",
      marginBottom: "0.5rem",
      display: "inline-block",
    },
    button: {
      padding: "0.5rem 1rem",
      borderRadius: "0.5rem",
      backgroundColor: "#ffffff",
      color: "#1e3a8a",
      fontWeight: "600",
      display: "flex",
      alignItems: "center",
      gap: "0.25rem",
      cursor: "pointer",
    },
    viewAll: {
      marginTop: "3rem",
      padding: "1rem 2rem",
      fontSize: "1.25rem",
      border: "1px solid",
      borderColor: isDark ? "#d8b4fe" : "#7c3aed",
      borderRadius: "0.5rem",
      backgroundColor: isDark ? "#111827" : "#FFFFFF",
      color: isDark ? "#ffffff" : "#000000",
      cursor: "pointer",
      transition: "all 0.3s ease",
    },
  };

  return (
    <section style={styles.section}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          style={{ marginBottom: "3rem", textAlign: "center" }}
        >
          <h2 style={{ fontSize: "3rem", fontWeight: "700" }}>
            Our{" "}
            <span
              style={{
                background: "linear-gradient(to right, #3b82f6, #8b5cf6)",
                WebkitBackgroundClip: "text",
                color: "transparent",
              }}
            >
              Portfolio
            </span>
          </h2>
          <p
            style={{
              fontSize: "1.25rem",
              maxWidth: "800px",
              margin: "1rem auto",
            }}
          >
            Showcasing our expertise through successful projects that have
            transformed businesses and delivered exceptional results for our
            clients.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "2rem",
          }}
        >
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              style={styles.card}
              whileHover={{ scale: 1.02 }}
            >
              {/* Image + Overlay container */}
              <div className="group relative overflow-hidden">
                {/* Image */}
                <motion.img
                  src={project.image}
                  alt={project.title}
                  style={{ width: "100%", height: "200px", objectFit: "cover" }}
                  className="transition-transform duration-500 group-hover:scale-110"
                />

                {/* Hover Overlay (only shows when hovering image) */}
                <div
                  className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(37,99,235,0.8), rgba(139,92,246,0.8))",
                  }}
                >
                  <motion.a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={styles.button}
                    whileHover={{ scale: 1.1 }}
                  >
                    <ExternalLink size={18} /> Demo
                  </motion.a>
                  <motion.a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={styles.button}
                    whileHover={{ scale: 1.1 }}
                  >
                    <Github size={18} /> Code
                  </motion.a>
                </div>
              </div>

              {/* Text Content */}
              <div style={{ padding: "1rem" }}>
                <div style={styles.category}>{project.category}</div>
                <h3 style={{ fontSize: "1.25rem", fontWeight: "700" }}>
                  {project.title}
                </h3>
                <p style={styles.cardDescription}>{project.description}</p>
                <div>
                  {project.technologies.map((tech, i) => (
                    <span key={i} style={styles.techBadge}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <div style={{ textAlign: "center" }}>
          <motion.button
            style={styles.viewAll}
            whileHover={{ backgroundColor: "#2563eb", color: "#ffffff" }}
            transition={{ duration: 0.3 }}
          >
            View All Projects
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
