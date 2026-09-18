import { useEffect, useState } from "react";

export default function App() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [showAppointment, setShowAppointment] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const hospital = {
    name: "RichieCare",
    fullName: "RichieCare Multispeciality Hospital",
    address:
      "12 Healthcare Avenue, Green Valley, Hyderabad, Telangana - 500081",
    phone: "+91 98765 43210",
    email: "care@richiecarehospital.com",
    whatsapp: "919876543210",
  };

  const heroImage =
    "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1800&q=95";

  const aboutImage =
    "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1400&q=95";

  const doctors = [
    {
      name: "Dr. Rahul Mehta",
      specialty: "Orthopaedic Specialist",
      image:
        "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=900&h=1100&q=95",
      description: [
        "Experienced in advanced orthopaedic care",
        "joint replacement and sports injuries.",
      ],
    },
    {
      name: "Dr. Ananya Reddy",
      specialty: "Paediatrician",
      image:
        "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=900&h=1100&q=95",
      description: [
        "Providing compassionate healthcare for",
        "children with personalised treatment.",
      ],
    },
    {
      name: "Dr. Vikram Singh",
      specialty: "Senior Neurologist",
      image:
        "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=900&h=1100&q=95",
      description: [
        "Specialist neurological consultation",
        "with modern diagnostic support.",
      ],
    },
    {
      name: "Dr. Sneha Kapoor",
      specialty: "General Physician",
      image:
        "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=900&h=1100&q=95",
      description: [
        "Comprehensive medical consultation",
        "for everyday health concerns.",
      ],
    },
    {
      name: "Dr. Kiran Rao",
      specialty: "General Surgeon",
      image:
        "https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&w=900&h=1100&q=95",
      description: [
        "Advanced surgical procedures supported",
        "by modern hospital facilities.",
      ],
    },
  ];

  const departments = [
    {
      icon: "❤️",
      title: "Cardiology",
      description: [
        "Advanced heart care and cardiac",
        "consultation with modern technology.",
      ],
    },
    {
      icon: "🧠",
      title: "Neurology",
      description: [
        "Specialised diagnosis and treatment",
        "for neurological conditions.",
      ],
    },
    {
      icon: "🦴",
      title: "Orthopaedics",
      description: [
        "Expert treatment for bones, joints,",
        "muscles and movement disorders.",
      ],
    },
    {
      icon: "👶",
      title: "Paediatrics",
      description: [
        "Complete healthcare services for",
        "infants, children and adolescents.",
      ],
    },
    {
      icon: "🩺",
      title: "General Medicine",
      description: [
        "Comprehensive medical consultation",
        "and preventive healthcare.",
      ],
    },
    {
      icon: "🔬",
      title: "Diagnostics",
      description: [
        "Reliable diagnostic services supported",
        "by modern medical equipment.",
      ],
    },
  ];

  const services = [
    {
      icon: "🚑",
      title: "24/7 Emergency",
      description: [
        "Round-the-clock emergency medical",
        "care for urgent health situations.",
      ],
    },
    {
      icon: "⚕️",
      title: "Advanced Surgery",
      description: [
        "Modern surgical facilities supported",
        "by experienced medical specialists.",
      ],
    },
    {
      icon: "🔬",
      title: "Diagnostic Care",
      description: [
        "Accurate diagnostic testing for faster",
        "and informed treatment decisions.",
      ],
    },
    {
      icon: "🏥",
      title: "Critical Care",
      description: [
        "Dedicated critical care support for",
        "patients requiring close monitoring.",
      ],
    },
  ];

  const facilities = [
    {
      image:
        "https://images.unsplash.com/photo-1519494140681-8b17d830a3e9?auto=format&fit=crop&w=1000&q=90",
      title: "Modern Patient Rooms",
      description: [
        "Comfortable and hygienic rooms designed",
        "for patient recovery and family support.",
      ],
    },
    {
      image:
        "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=1000&q=90",
      title: "Advanced Operation Theatres",
      description: [
        "Modern operation theatres equipped",
        "for safe and efficient procedures.",
      ],
    },
    {
      image:
        "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=1000&q=90",
      title: "Diagnostic Centre",
      description: [
        "Advanced diagnostic facilities helping",
        "doctors make informed decisions.",
      ],
    },
    {
      image:
        "https://images.unsplash.com/photo-1585435557343-3b092031a831?auto=format&fit=crop&w=1000&q=90",
      title: "Pharmacy Services",
      description: [
        "Convenient access to essential medicines",
        "and pharmacy support.",
      ],
    },
    {
      image:
        "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=1000&q=90",
      title: "Comfortable Waiting Areas",
      description: [
        "Clean and welcoming spaces designed",
        "for patients and visitors.",
      ],
    },
    {
      image:
        "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?auto=format&fit=crop&w=1000&q=90",
      title: "Specialist Consultation",
      description: [
        "Access experienced specialists across",
        "multiple medical departments.",
      ],
    },
  ];

  const gallery = [
    {
      title: "Hospital Exterior",
      image:
        "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=90",
    },
    {
      title: "Patient Care",
      image:
        "https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&w=1200&q=90",
    },
    {
      title: "Operation Theatre",
      image:
        "https://images.unsplash.com/photo-1511174511562-5f7f18b874f8?auto=format&fit=crop&w=1200&q=90",
    },
    {
      title: "Medical Team",
      image:
        "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?auto=format&fit=crop&w=1200&q=90",
    },
    {
      title: "Healthcare Facilities",
      image:
        "https://images.unsplash.com/photo-1580281658628-4f2e3b1f0f96?auto=format&fit=crop&w=1200&q=90",
    },
    {
      title: "Hospital Interior",
      image:
        "https://images.unsplash.com/photo-1516841273335-e39b37888115?auto=format&fit=crop&w=1200&q=90",
    },
    {
      title: "Medical Consultation",
      image:
        "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=90",
    },
    {
      title: "Healthcare Team",
      image:
        "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=1200&q=90",
    },
  ];

  const Lines = ({ lines, className = "" }) => {
    return (
      <span className={`lines ${className}`}>
        {lines.map((line, index) => (
          <span className="line" key={`${line}-${index}`}>
            {line || "\u00A0"}
          </span>
        ))}
      </span>
    );
  };

  const handleImageError = (event) => {
    event.currentTarget.src =
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=80";
  };

  const scrollTo = (id) => {
    setMobileMenu(false);

    setTimeout(() => {
      const element = document.getElementById(id);

      if (element) {
        const headerHeight = window.innerWidth <= 850 ? 72 : 118;

        const top =
          element.getBoundingClientRect().top +
          window.pageYOffset -
          headerHeight;

        window.scrollTo({
          top,
          behavior: "smooth",
        });
      }
    }, 50);
  };

  const openWhatsApp = () => {
    const message = encodeURIComponent(
      "Hello RichieCare Multispeciality Hospital, I would like to know more about your medical services."
    );

    window.open(
      `https://wa.me/${hospital.whatsapp}?text=${message}`,
      "_blank"
    );
  };

  const submitAppointment = (event) => {
    event.preventDefault();

    alert(
      "Thank you. Your appointment request has been submitted. Our hospital team will contact you shortly."
    );

    setShowAppointment(false);
  };

  useEffect(() => {
    document.body.style.margin = "0";
    document.body.style.background = "#f7f4ed";
    document.body.style.fontFamily =
      "Inter, Arial, Helvetica, sans-serif";

    return () => {
      document.body.style.margin = "";
      document.body.style.background = "";
      document.body.style.fontFamily = "";
    };
  }, []);

  return (
    <>
      <style>{`
        * {
          box-sizing: border-box;
        }

        html {
          scroll-behavior: smooth;
        }

        body {
          margin: 0;
          background: #f7f4ed;
          color: #171717;
        }

        button,
        input,
        select,
        textarea {
          font: inherit;
        }

        img {
          max-width: 100%;
          display: block;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        section {
          scroll-margin-top: 110px;
        }

        .container {
          width: min(1320px, calc(100% - 48px));
          margin: 0 auto;
        }

        /* ==============================
           PERFECT LINE BY LINE TEXT SYSTEM
        ============================== */

        .lines {
          display: inline-flex;
          flex-direction: column;
          align-items: flex-start;
          width: auto;
          max-width: 100%;
          margin: 0;
          padding: 0;
          vertical-align: top;
          gap: 0;
        }

        .line {
          display: block;
          width: max-content;
          max-width: 100%;
          min-height: 1.45em;
          margin: 0;
          padding: 0;
          line-height: 1.55;
          text-align: left;
          white-space: nowrap;
        }

        .center .lines {
          display: inline-flex;
          align-items: center;
          width: auto;
          max-width: 100%;
          text-align: center;
        }

        .center .line {
          width: max-content;
          max-width: 100%;
          text-align: center;
        }

        h1 .lines,
        h2 .lines,
        h3 .lines {
          display: flex;
          width: auto;
          align-items: flex-start;
        }

        h1 .line,
        h2 .line,
        h3 .line {
          width: max-content;
          max-width: 100%;
        }

        p .lines {
          display: flex;
          width: auto;
          align-items: flex-start;
        }

        p .line {
          width: max-content;
          max-width: 100%;
        }

        .hero-description .lines {
          display: flex;
          width: auto;
          max-width: 100%;
          align-items: flex-start;
        }

        .hero-description .line {
          width: max-content;
          max-width: 100%;
          min-height: 1.8em;
          line-height: 1.8;
        }

        .about-text .lines {
          display: flex;
          width: auto;
          align-items: flex-start;
        }

        .about-text .line {
          width: max-content;
          max-width: 100%;
          min-height: 1.8em;
          line-height: 1.8;
        }

        .department-card p .lines {
          display: flex;
          width: auto;
          align-items: flex-start;
        }

        .department-card p .line {
          width: max-content;
          max-width: 100%;
          min-height: 1.7em;
          line-height: 1.7;
        }

        .service-card p .lines {
          display: flex;
          width: auto;
          align-items: flex-start;
        }

        .service-card p .line {
          width: max-content;
          max-width: 100%;
          min-height: 1.7em;
          line-height: 1.7;
        }

        .facility-content p .lines {
          display: flex;
          width: auto;
          align-items: flex-start;
        }

        .facility-content p .line {
          width: max-content;
          max-width: 100%;
          min-height: 1.7em;
          line-height: 1.7;
        }

        .doctor-description .lines {
          display: flex;
          width: auto;
          align-items: flex-start;
        }

        .doctor-description .line {
          width: max-content;
          max-width: 100%;
          min-height: 1.8em;
          line-height: 1.8;
        }

        .cta p .lines {
          display: inline-flex;
          align-items: center;
          width: auto;
          max-width: 100%;
        }

        .cta p .line {
          width: max-content;
          max-width: 100%;
          min-height: 1.8em;
          line-height: 1.8;
          text-align: center;
        }

        .emergency-card p .lines {
          display: flex;
          width: auto;
          align-items: flex-start;
        }

        .emergency-card p .line {
          width: max-content;
          max-width: 100%;
          min-height: 1.8em;
          line-height: 1.8;
        }

        .footer p .lines {
          display: flex;
          width: auto;
          align-items: flex-start;
        }

        .footer p .line {
          width: max-content;
          max-width: 100%;
          min-height: 1.8em;
          line-height: 1.8;
        }

        .contact-card > p .lines {
          display: flex;
          width: auto;
          align-items: flex-start;
        }

        .contact-card > p .line {
          width: max-content;
          max-width: 100%;
          min-height: 1.8em;
          line-height: 1.8;
        }

        .contact-detail .lines {
          display: flex;
          width: auto;
          align-items: flex-start;
        }

        .contact-detail .line {
          width: max-content;
          max-width: 100%;
        }

        /* ==============================
           TOP BAR
        ============================== */

        .top-bar {
          background: #101010;
          color: #fff;
          min-height: 38px;
          display: flex;
          align-items: center;
          font-size: 13px;
        }

        .top-bar-inner {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 16px;
        }

        .top-item {
          display: flex;
          align-items: center;
          gap: 7px;
          white-space: nowrap;
        }

        .top-item strong {
          color: #d5ac60;
          font-weight: 700;
        }

        /* ==============================
           HEADER
        ============================== */

        .header {
          position: sticky;
          top: 0;
          z-index: 1000;
          background: rgba(255, 252, 245, 0.97);
          backdrop-filter: blur(12px);
          border-bottom: 1px solid rgba(183, 134, 53, 0.2);
        }

        .nav {
          min-height: 80px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
        }

        .logo {
          display: flex;
          align-items: center;
          gap: 12px;
          flex-shrink: 0;
        }

        .logo-symbol {
          width: 46px;
          height: 46px;
          border-radius: 50%;
          background: #101010;
          color: #d5ac60;
          display: grid;
          place-items: center;
          font-size: 22px;
          border: 1px solid #d5ac60;
        }

        .logo-text {
          display: flex;
          flex-direction: column;
          line-height: 1;
        }

        .logo-name {
          font-family: Georgia, serif;
          font-size: 24px;
          font-weight: 700;
          letter-spacing: 0.5px;
        }

        .logo-sub {
          margin-top: 0;
          font-size: 9px;
          letter-spacing: 2px;
          color: #8b6a36;
          text-transform: uppercase;
        }

        .nav-links {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .nav-links button {
          border: 0;
          background: transparent;
          cursor: pointer;
          color: #252525;
          font-size: 14px;
          font-weight: 600;
          padding: 8px 0;
          position: relative;
        }

        .nav-links button::after {
          content: "";
          position: absolute;
          left: 0;
          right: 100%;
          bottom: 0;
          height: 2px;
          background: #b78635;
          transition: 0.25s;
        }

        .nav-links button:hover::after {
          right: 0;
        }

        .nav-appointment {
          border: 1px solid #b78635 !important;
          padding: 11px 17px !important;
          color: #fff !important;
          background: #101010 !important;
        }

        .nav-appointment::after {
          display: none;
        }

        .menu-toggle {
          display: none;
          border: 0;
          background: transparent;
          font-size: 28px;
          cursor: pointer;
        }

        /* ==============================
           PREMIUM HOME PAGE
        ============================== */

        .hero {
          min-height: min(620px, calc(100vh - 118px));
          position: relative;
          display: flex;
          align-items: center;
          overflow: hidden;
          background: #111;
        }

        .hero-image {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
        }

        .hero-overlay {
          position: absolute;
          inset: 0;
          background:
            linear-gradient(
              90deg,
              rgba(5, 8, 12, 0.96) 0%,
              rgba(8, 12, 17, 0.88) 35%,
              rgba(12, 17, 23, 0.55) 65%,
              rgba(12, 17, 23, 0.22) 100%
            );
        }

        .hero-content {
          position: relative;
          z-index: 2;
          width: min(1320px, calc(100% - 48px));
          margin: 0 auto;
          padding: 48px 0;
          color: #fff;
        }

        .hero-kicker {
          color: #e2bd76;
          font-size: 13px;
          font-weight: 800;
          letter-spacing: 3px;
          text-transform: uppercase;
          margin-bottom: 15px;
          text-shadow: 0 2px 12px rgba(0, 0, 0, 0.5);
        }

        .hero h1 {
          font-family: Georgia, serif;
          font-size: clamp(38px, 4.8vw, 64px);
          line-height: 1;
          max-width: 800px;
          margin: 0 0 20px;
          font-weight: 600;
          color: #ffffff;
          text-shadow:
            0 3px 18px rgba(0, 0, 0, 0.65),
            0 1px 3px rgba(0, 0, 0, 0.8);
        }

        .hero h1 .line {
          line-height: 1.05;
          color: #ffffff;
        }

        .hero-description {
          max-width: 700px;
          color: #ffffff;
          font-size: 17px;
          margin-bottom: 24px;
          text-shadow: 0 2px 12px rgba(0, 0, 0, 0.7);
        }

        .hero-description .line {
          color: #ffffff;
        }

        .hero-buttons {
          display: flex;
          flex-wrap: wrap;
          gap: 13px;
        }

        .btn {
          border: 0;
          cursor: pointer;
          padding: 14px 24px;
          font-weight: 700;
          font-size: 14px;
          transition: 0.25s;
        }

        .btn-gold {
          background: #b78635;
          color: #fff;
        }

        .btn-gold:hover {
          background: #9d712d;
          transform: translateY(-2px);
        }

        .btn-light {
          background: rgba(255, 255, 255, 0.1);
          color: #fff;
          border: 1px solid rgba(255, 255, 255, 0.6);
        }

        .btn-light:hover {
          background: #fff;
          color: #111;
        }

        /* ==============================
           SECTION COMMON
        ============================== */

        .section {
          padding: 40px 0;
        }

        .section-tight {
          padding: 36px 0;
        }

        .section-heading {
          margin-bottom: 22px;
        }

        .section-heading h2 {
          font-family: Georgia, serif;
          font-size: clamp(32px, 4vw, 48px);
          line-height: 1.05;
          font-weight: 500;
          margin: 0 0 13px;
          color: #171717;
        }

        .section-heading p {
          margin: 0;
          color: #6c675f;
          font-size: 15px;
        }

        .section-heading.center {
          text-align: center;
        }

        .section-heading.center .lines {
          align-items: center;
        }

        .eyebrow {
          color: #b78635;
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 2.5px;
          text-transform: uppercase;
          margin-bottom: 10px;
        }

        /* ==============================
           FEATURED DOCTOR
        ============================== */

        .featured-doctor {
          background: #171717;
          color: #fff;
          padding: 11px 0;
        }

        .featured-inner {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 16px;
        }

        .featured-left {
          display: flex;
          align-items: center;
          gap: 18px;
        }

        .featured-image {
          width: 72px;
          height: 72px;
          border-radius: 50%;
          object-fit: cover;
          border: 2px solid #d5ac60;
        }

        .featured-name {
          font-family: Georgia, serif;
          font-size: 22px;
          margin-bottom: 3px;
        }

        .featured-specialty {
          color: #d5ac60;
          font-size: 13px;
        }

        .featured-right {
          text-align: right;
        }

        .featured-right small {
          color: #aaa;
          display: block;
          margin-bottom: 7px;
        }

        /* ==============================
           ABOUT
        ============================== */

        .about-section {
          background: #f7f4ed;
        }

        .about-grid {
          display: grid;
          grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
          gap: 28px;
          align-items: stretch;
        }

        .about-image-wrap {
          height: 100%;
          min-height: 400px;
          display: flex;
        }

        .about-image {
          width: 100%;
          height: 100%;
          min-height: 400px;
          object-fit: cover;
          border-radius: 3px;
          cursor: pointer;
          box-shadow: 0 18px 45px rgba(0, 0, 0, 0.13);
        }

        .about-content {
          height: 100%;
          min-height: 400px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 8px 5px;
        }

        .about-content h2 {
          font-family: Georgia, serif;
          font-size: clamp(34px, 4vw, 52px);
          font-weight: 500;
          line-height: 1.05;
          margin: 0 0 20px;
          color: #171717;
        }

        .about-main-heading {
          color: #171717 !important;
        }

        .about-main-heading .line {
          color: #171717 !important;
        }

        .about-text {
          color: #656057;
          font-size: 16px;
          margin-bottom: 13px;
        }

        .about-points {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 7px 16px;
          margin-top: 0;
        }

        .about-point {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 14px;
          font-weight: 700;
        }

        .about-point span {
          width: 22px;
          height: 22px;
          display: grid;
          place-items: center;
          border-radius: 50%;
          background: #171717;
          color: #d5ac60;
          font-size: 11px;
        }

        /* ==============================
           STATS
        ============================== */

        .stats {
          background: #101010;
          color: #fff;
          padding: 34px 0;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px;
        }

        .stat {
          text-align: center;
          padding: 10px;
          border-right: 1px solid rgba(255, 255, 255, 0.12);
        }

        .stat:last-child {
          border-right: 0;
        }

        .stat-number {
          font-family: Georgia, serif;
          font-size: 35px;
          color: #d5ac60;
          margin-bottom: 3px;
        }

        .stat-label {
          color: #bbb;
          font-size: 12px;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        /* ==============================
           DEPARTMENTS
        ============================== */

        .departments {
          background: #fffdf8;
        }

        .department-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 18px;
        }

        .department-card {
          background: #f7f4ed;
          border: 1px solid #e8dfd0;
          padding: 20px;
          min-height: 165px;
          transition: 0.25s;
        }

        .department-card:hover {
          transform: translateY(-4px);
          border-color: #c79742;
          box-shadow: 0 14px 30px rgba(0, 0, 0, 0.07);
        }

        .department-icon {
          width: 50px;
          height: 50px;
          display: grid;
          place-items: center;
          background: #171717;
          color: #d5ac60;
          border-radius: 50%;
          font-size: 22px;
          margin-bottom: 13px;
        }

        .department-card h3 {
          font-family: Georgia, serif;
          font-size: 24px;
          font-weight: 500;
          margin: 0 0 10px;
        }

        .department-card p {
          margin: 0;
          color: #6c675f;
          font-size: 14px;
        }

        /* ==============================
           DOCTORS
        ============================== */

        .doctors {
          background: #f7f4ed;
        }

        .doctor-grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 16px;
        }

        .doctor-card {
          background: #fffdf8;
          border: 1px solid #e6ddce;
          overflow: hidden;
          transition: 0.25s;
        }

        .doctor-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 16px 35px rgba(0, 0, 0, 0.08);
        }

        .doctor-image {
          width: 100%;
          height: 290px;
          object-fit: cover;
          object-position: center top;
          cursor: pointer;
        }

        .doctor-content {
          padding: 19px;
        }

        .doctor-content h3 {
          font-family: Georgia, serif;
          font-size: 20px;
          font-weight: 500;
          margin: 0 0 5px;
        }

        .doctor-specialty {
          color: #b78635;
          font-size: 12px;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.8px;
          margin-bottom: 12px;
        }

        .doctor-description {
          color: #6c675f;
          font-size: 13px;
        }

        /* ==============================
           SERVICES
        ============================== */

        .services {
          background: #101010;
          color: #fff;
        }

        .services .section-heading h2 {
          color: #fff;
        }

        .services .section-heading p {
          color: #aaa;
        }

        .service-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px;
        }

        .service-card {
          border: 1px solid rgba(255, 255, 255, 0.12);
          padding: 19px 18px;
          min-height: 165px;
          transition: 0.25s;
        }

        .service-card:hover {
          border-color: #b78635;
          transform: translateY(-4px);
        }

        .service-icon {
          font-size: 27px;
          margin-bottom: 20px;
        }

        .service-card h3 {
          font-family: Georgia, serif;
          font-size: 23px;
          font-weight: 500;
          margin: 0 0 11px;
        }

        .service-card p {
          color: #aaa;
          margin: 0;
          font-size: 14px;
        }

        /* ==============================
           FACILITIES
        ============================== */

        .facilities {
          background: #fffdf8;
        }

        .facility-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
        }

        .facility-card {
          position: relative;
          background: #f7f4ed;
          border: 1px solid #e7dece;
          overflow: hidden;
          transition: transform 0.45s ease, box-shadow 0.45s ease, border-color 0.45s ease;
          animation: facilityFloat 5.5s ease-in-out infinite;
          will-change: transform;
        }

        .facility-card:nth-child(2n) {
          animation-delay: -1.5s;
        }

        .facility-card:nth-child(3n) {
          animation-delay: -3s;
        }

        .facility-card:hover {
          transform: translateY(-10px) scale(1.015);
          box-shadow: 0 22px 45px rgba(0, 0, 0, 0.15);
          border-color: #d5ac60;
        }

        .facility-card::after {
          content: "";
          position: absolute;
          left: -80%;
          top: 0;
          width: 55%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.32), transparent);
          transform: skewX(-18deg);
          transition: left 0.8s ease;
          pointer-events: none;
        }

        .facility-card:hover::after {
          left: 125%;
        }

        .facility-image {
          width: 100%;
          height: 180px;
          object-fit: cover;
          cursor: pointer;
          transition: transform 0.7s cubic-bezier(.2,.7,.2,1), filter 0.5s ease;
        }

        .facility-card:hover .facility-image {
          transform: scale(1.09);
          filter: saturate(1.08) contrast(1.03);
        }

        @keyframes facilityFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }

        .facility-content {
          padding: 15px;
        }

        .facility-content h3 {
          font-family: Georgia, serif;
          font-size: 22px;
          font-weight: 500;
          margin: 0 0 9px;
        }

        .facility-content p {
          color: #6c675f;
          font-size: 14px;
          margin: 0;
        }

        /* ==============================
           GALLERY
        ============================== */

        .gallery {
          background: #f7f4ed;
        }

        .gallery-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px;
          perspective: 1200px;
        }

        .gallery-item {
          position: relative;
          height: 205px;
          overflow: hidden;
          cursor: pointer;
          background: #222;
          border-radius: 12px;
          border: 1px solid rgba(183, 134, 53, 0.28);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.10);
          transform: translateY(0) rotateZ(0deg);
          animation: galleryFloat 6s ease-in-out infinite;
          transition: transform 0.55s cubic-bezier(.2,.8,.2,1), box-shadow 0.55s ease, border-color 0.35s ease;
          will-change: transform;
        }

        .gallery-item:nth-child(2n) {
          animation-delay: -1.2s;
        }

        .gallery-item:nth-child(3n) {
          animation-delay: -2.4s;
        }

        .gallery-item:nth-child(4n) {
          animation-delay: -3.6s;
        }

        .gallery-item::before {
          content: "";
          position: absolute;
          inset: 0;
          z-index: 2;
          background: linear-gradient(135deg, rgba(255,255,255,0.18), transparent 35%, rgba(0,0,0,0.12));
          opacity: 0.65;
          transition: opacity 0.45s ease;
          pointer-events: none;
        }

        .gallery-item:hover {
          animation-play-state: paused;
          transform: translateY(-12px) scale(1.025) rotateZ(-0.6deg);
          box-shadow: 0 24px 48px rgba(0, 0, 0, 0.19);
          border-color: #d5ac60;
        }

        .gallery-item:hover::before {
          opacity: 0.2;
        }

        .gallery-item img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.8s cubic-bezier(.2,.7,.2,1), filter 0.55s ease;
        }

        .gallery-item:hover img {
          transform: scale(1.13) translate3d(0, -3px, 0);
          filter: saturate(1.12) contrast(1.04);
        }

        @keyframes galleryFloat {
          0%, 100% { transform: translateY(0) rotateZ(0deg); }
          50% { transform: translateY(-7px) rotateZ(0.35deg); }
        }

        .gallery-caption {
          position: absolute;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: 3;
          padding: 42px 15px 14px;
          color: #fff;
          font-weight: 700;
          font-size: 14px;
          background: linear-gradient(transparent, rgba(0, 0, 0, 0.88));
          transform: translateY(5px);
          transition: transform 0.45s ease;
        }

        .gallery-item:hover .gallery-caption {
          transform: translateY(0);
        }

        .gallery-caption-title {
          display: block;
          color: #fff;
          letter-spacing: 0.2px;
        }

        .gallery-caption-text {
          display: block;
          margin-top: 5px;
          color: rgba(255,255,255,0.78);
          font-size: 11px;
          font-weight: 400;
          line-height: 1.45;
          transform: translateY(8px);
          opacity: 0;
          transition: opacity 0.45s ease, transform 0.45s ease;
        }

        .gallery-item:hover .gallery-caption-text {
          opacity: 1;
          transform: translateY(0);
        }

        /* ==============================
           CTA
        ============================== */

        .cta {
          background:
            linear-gradient(
              110deg,
              #171717,
              #2a2117
            );
          color: #fff;
          text-align: center;
          padding: 40px 20px;
        }

        .cta h2 {
          font-family: Georgia, serif;
          font-size: clamp(32px, 4vw, 50px);
          font-weight: 500;
          margin: 0 0 15px;
        }

        .cta p {
          color: #ccc;
          margin: 0 0 20px;
        }

        .cta .lines {
          align-items: center;
        }

        /* ==============================
           CONTACT
        ============================== */

        .contact {
          background: #fffdf8;
        }

        .contact-grid {
          display: grid;
          grid-template-columns: 1.15fr 0.85fr;
          gap: 16px;
        }

        .contact-card {
          border: 1px solid #e7dece;
          background: #f7f4ed;
          padding: 22px;
        }

        .contact-card h3 {
          font-family: Georgia, serif;
          font-size: 30px;
          font-weight: 500;
          margin: 0 0 15px;
        }

        .contact-card > p {
          color: #6c675f;
          font-size: 14px;
          margin-bottom: 25px;
        }

        .contact-details {
          display: grid;
          gap: 9px;
        }

        .contact-detail {
          display: flex;
          align-items: flex-start;
          gap: 13px;
        }

        .contact-icon {
          width: 38px;
          height: 38px;
          flex-shrink: 0;
          display: grid;
          place-items: center;
          background: #171717;
          color: #d5ac60;
          border-radius: 50%;
        }

        .contact-detail strong {
          display: block;
          margin-bottom: 3px;
          font-size: 13px;
        }

        .contact-detail span {
          color: #6c675f;
          font-size: 14px;
        }

        .emergency-card {
          background: #171717;
          color: #fff;
          padding: 22px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .emergency-card .eyebrow {
          color: #d5ac60;
        }

        .emergency-card h3 {
          font-family: Georgia, serif;
          font-size: 35px;
          font-weight: 500;
          margin: 0 0 14px;
        }

        .emergency-card p {
          color: #bbb;
          font-size: 14px;
          margin: 0 0 22px;
        }

        .emergency-number {
          font-family: Georgia, serif;
          font-size: 30px;
          color: #d5ac60;
          margin-bottom: 13px;
        }

        /* ==============================
           FOOTER
        ============================== */

        .footer {
          background: #0d0d0d;
          color: #fff;
          padding: 28px 0 15px;
        }

        .footer-grid {
          display: grid;
          grid-template-columns: 1.3fr 0.8fr 0.8fr 1fr;
          gap: 35px;
          padding-bottom: 20px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .footer h3 {
          font-family: Georgia, serif;
          font-size: 20px;
          font-weight: 500;
          margin: 0 0 16px;
        }

        .footer p {
          color: #999;
          font-size: 13px;
          margin: 0;
        }

        .footer-links {
          display: grid;
          gap: 9px;
        }

        .footer-links button,
        .footer-links a {
          border: 0;
          background: transparent;
          color: #999;
          padding: 0;
          text-align: left;
          cursor: pointer;
          font-size: 13px;
        }

        .footer-links button:hover,
        .footer-links a:hover {
          color: #d5ac60;
        }

        .footer-bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 16px;
          padding-top: 11px;
          color: #777;
          font-size: 12px;
        }

        .footer-bottom a {
          color: #d5ac60;
        }

        /* ==============================
           WHATSAPP
        ============================== */

        .whatsapp {
          position: fixed;
          right: 22px;
          bottom: 22px;
          z-index: 1100;
          width: 58px;
          height: 58px;
          border-radius: 50%;
          border: 0;
          cursor: pointer;
          background: #25d366;
          color: #fff;
          font-size: 27px;
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.25);
        }

        /* ==============================
           MODAL
        ============================== */

        .modal-backdrop {
          position: fixed;
          inset: 0;
          z-index: 2000;
          background: rgba(0, 0, 0, 0.72);
          display: grid;
          place-items: center;
          padding: 20px;
        }

        .appointment-modal {
          width: min(650px, 100%);
          max-height: 92vh;
          overflow-y: auto;
          background: #fffdf8;
          padding: 22px;
          position: relative;
        }

        .modal-close {
          position: absolute;
          right: 15px;
          top: 12px;
          border: 0;
          background: transparent;
          font-size: 28px;
          cursor: pointer;
        }

        .appointment-modal h2 {
          font-family: Georgia, serif;
          font-size: 34px;
          font-weight: 500;
          margin: 0 0 8px;
        }

        .appointment-modal > p {
          color: #777;
          font-size: 14px;
          margin: 0 0 25px;
        }

        .form-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 9px;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .form-group.full {
          grid-column: 1 / -1;
        }

        .form-group label {
          font-size: 12px;
          font-weight: 700;
        }

        .form-group input,
        .form-group select,
        .form-group textarea {
          width: 100%;
          border: 1px solid #ddd3c4;
          background: #fff;
          padding: 12px;
          outline: none;
        }

        .form-group textarea {
          min-height: 100px;
          resize: vertical;
        }

        .form-group input:focus,
        .form-group select:focus,
        .form-group textarea:focus {
          border-color: #b78635;
        }

        /* ==============================
           LIGHTBOX
        ============================== */

        .lightbox {
          position: fixed;
          inset: 0;
          z-index: 3000;
          background: rgba(0, 0, 0, 0.9);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
        }

        .lightbox img {
          max-width: 92vw;
          max-height: 86vh;
          object-fit: contain;
        }

        .lightbox-close {
          position: absolute;
          right: 25px;
          top: 15px;
          color: #fff;
          border: 0;
          background: transparent;
          font-size: 38px;
          cursor: pointer;
        }

        /* ==============================
           RESPONSIVE
        ============================== */

        @media (max-width: 1100px) {
          .nav-links {
            gap: 9px;
          }

          .doctor-grid {
            grid-template-columns: repeat(3, 1fr);
          }

          .department-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .facility-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .gallery-grid {
            grid-template-columns: repeat(3, 1fr);
          }

          .footer-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .facility-card,
          .gallery-item {
            animation: none !important;
            transition: none !important;
          }
        }

        @media (max-width: 850px) {
          .top-bar {
            display: none;
          }

          .nav {
            min-height: 72px;
          }

          .menu-toggle {
            display: block;
          }

          .nav-links {
            position: absolute;
            top: 72px;
            left: 0;
            right: 0;
            background: #fffdf8;
            border-bottom: 1px solid #ddd3c4;
            display: none;
            flex-direction: column;
            align-items: stretch;
            padding: 15px 24px 22px;
            gap: 3px;
          }

          .nav-links.open {
            display: flex;
          }

          .nav-links button {
            width: 100%;
            text-align: left;
            padding: 13px 0;
          }

          .nav-appointment {
            text-align: center !important;
            margin-top: 6px;
          }

          .hero {
            min-height: 570px;
          }

          .hero-overlay {
            background:
              linear-gradient(
                90deg,
                rgba(5, 8, 12, 0.95),
                rgba(8, 12, 17, 0.75)
              );
          }

          .hero-content {
            padding: 55px 0;
          }

          .about-grid {
            grid-template-columns: 1fr;
            gap: 16px;
          }

          .about-image-wrap,
          .about-image {
            min-height: 370px;
            height: 370px;
          }

          .about-content {
            min-height: auto;
            height: auto;
            padding: 0;
          }

          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .stat:nth-child(2) {
            border-right: 0;
          }

          .service-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .contact-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 650px) {
          .container,
          .hero-content {
            width: min(100% - 30px, 1320px);
          }

          .section {
            padding: 40px 0;
          }

          .section-tight {
            padding: 36px 0;
          }

          .hero {
            min-height: 570px;
          }

          .hero-content {
            padding: 48px 0;
          }

          .hero h1 {
            font-size: 38px;
          }

          .hero-description {
            font-size: 15px;
          }

          .about-image-wrap,
          .about-image {
            min-height: 290px;
            height: 290px;
          }

          .about-points {
            grid-template-columns: 1fr;
          }

          .department-grid,
          .doctor-grid,
          .facility-grid,
          .service-grid {
            grid-template-columns: 1fr;
          }

          .doctor-image {
            height: 350px;
          }

          .gallery-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .gallery-item {
            height: 180px;
          }

          .footer-grid {
            grid-template-columns: 1fr;
            gap: 16px;
          }

          .footer-bottom {
            flex-direction: column;
            align-items: flex-start;
          }

          .form-grid {
            grid-template-columns: 1fr;
          }

          .form-group.full {
            grid-column: auto;
          }

          .appointment-modal {
            padding: 28px 20px;
          }

          .lines {
            display: flex;
            width: auto;
            max-width: 100%;
            align-items: flex-start;
          }

          .line {
            width: auto;
            max-width: 100%;
            white-space: normal;
            overflow-wrap: anywhere;
          }

          .center .lines {
            width: 100%;
            align-items: center;
          }

          .center .line {
            width: auto;
            max-width: 100%;
            text-align: center;
          }

          h1 .lines,
          h2 .lines,
          h3 .lines {
            width: auto;
          }

          h1 .line,
          h2 .line,
          h3 .line {
            width: auto;
            max-width: 100%;
            white-space: normal;
          }

          p .lines {
            width: auto;
            max-width: 100%;
          }

          p .line {
            width: auto;
            max-width: 100%;
            white-space: normal;
          }
        }
      `}</style>

      {/* ==============================
          TOP BAR
      ============================== */}

      <div className="top-bar">
        <div className="container top-bar-inner">
          <div className="top-item">
            <strong>24/7</strong>
            Emergency & Medical Support
          </div>

          <div className="top-item">
            <strong>Call:</strong>
            {hospital.phone}
          </div>
        </div>
      </div>

      {/* ==============================
          HEADER
      ============================== */}

      <header className="header">
        <div className="container nav">
          <button
            className="logo"
            onClick={() => scrollTo("home")}
            style={{
              border: 0,
              background: "transparent",
              cursor: "pointer",
              padding: 0,
            }}
          >
            <div className="logo-symbol">✚</div>

            <div className="logo-text">
              <div className="logo-name">{hospital.name}</div>

              <div className="logo-sub">
                Multispeciality Hospital
              </div>
            </div>
          </button>

          <button
            className="menu-toggle"
            onClick={() => setMobileMenu(!mobileMenu)}
            aria-label="Open menu"
          >
            {mobileMenu ? "×" : "☰"}
          </button>

          <nav className={`nav-links ${mobileMenu ? "open" : ""}`}>
            <button onClick={() => scrollTo("home")}>Home</button>

            <button onClick={() => scrollTo("about")}>
              About
            </button>

            <button onClick={() => scrollTo("departments")}>
              Departments
            </button>

            <button onClick={() => scrollTo("doctors")}>
              Doctors
            </button>

            <button onClick={() => scrollTo("services")}>
              Services
            </button>

            <button onClick={() => scrollTo("facilities")}>
              Facilities
            </button>

            <button onClick={() => scrollTo("gallery")}>
              Gallery
            </button>

            <button onClick={() => scrollTo("contact")}>
              Contact
            </button>

            <button
              className="nav-appointment"
              onClick={() => {
                setMobileMenu(false);
                setShowAppointment(true);
              }}
            >
              Book Appointment
            </button>
          </nav>
        </div>
      </header>

      {/* ==============================
          HOME
      ============================== */}

      <section id="home" className="hero">
        <img
          src={heroImage}
          alt="RichieCare Hospital"
          className="hero-image"
          onError={handleImageError}
        />

        <div className="hero-overlay"></div>

        <div className="hero-content">
          <div className="hero-kicker">
            Excellence in Healthcare
          </div>

          <h1>
            <Lines
              lines={[
                "Compassionate care.",
                "Advanced medicine.",
                "Better health.",
              ]}
            />
          </h1>

          <div className="hero-description">
            <Lines
              lines={[
                "RichieCare Multispeciality Hospital brings together",
                "experienced doctors, advanced technology and",
                "patient-focused care under one roof.",
              ]}
            />
          </div>

          <div className="hero-buttons">
            <button
              className="btn btn-gold"
              onClick={() => setShowAppointment(true)}
            >
              Book an Appointment
            </button>

            <button
              className="btn btn-light"
              onClick={() => scrollTo("departments")}
            >
              Explore Departments
            </button>
          </div>
        </div>
      </section>

      {/* ==============================
          FEATURED DOCTOR
      ============================== */}

      <section className="featured-doctor">
        <div className="container featured-inner">
          <div className="featured-left">
            <img
              src={doctors[0].image}
              alt={doctors[0].name}
              className="featured-image"
              onError={handleImageError}
            />

            <div>
              <div className="featured-name">
                {doctors[0].name}
              </div>

              <div className="featured-specialty">
                {doctors[0].specialty}
              </div>
            </div>
          </div>

          <div className="featured-right">
            <small>Featured Specialist</small>

            <button
              className="btn btn-gold"
              onClick={() => scrollTo("doctors")}
            >
              Meet Our Doctors
            </button>
          </div>
        </div>
      </section>

      {/* ==============================
          ABOUT
      ============================== */}

      <section id="about" className="section about-section">
        <div className="container">
          <div className="about-grid">
            <div className="about-image-wrap">
              <img
                src={aboutImage}
                alt="RichieCare medical care"
                className="about-image"
                onClick={() => setSelectedImage(aboutImage)}
                onError={handleImageError}
              />
            </div>

            <div className="about-content">
              <div className="eyebrow">About RichieCare</div>

              <h2 className="about-main-heading">
                <Lines
                  lines={[
                    "Your health deserves",
                    "the right care.",
                  ]}
                />
              </h2>

              <div className="about-text">
                <Lines
                  lines={[
                    "RichieCare Multispeciality Hospital is built around",
                    "one simple principle — every patient deserves",
                    "expert medical attention with compassion.",
                    "",
                    "Our hospital brings together specialised doctors,",
                    "modern technology and comfortable facilities to",
                    "provide complete healthcare for every family.",
                  ]}
                />
              </div>

              <div className="about-points">
                <div className="about-point">
                  <span>✓</span>
                  Experienced Specialists
                </div>

                <div className="about-point">
                  <span>✓</span>
                  Advanced Technology
                </div>

                <div className="about-point">
                  <span>✓</span>
                  Patient-Centred Care
                </div>

                <div className="about-point">
                  <span>✓</span>
                  24/7 Support
                </div>
              </div>

              <div style={{ marginTop: "25px" }}>
                <button
                  className="btn btn-gold"
                  onClick={() => scrollTo("contact")}
                >
                  Contact Our Team
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==============================
          STATS
      ============================== */}

      <section className="stats">
        <div className="container stats-grid">
          <div className="stat">
            <div className="stat-number">24/7</div>
            <div className="stat-label">Emergency Care</div>
          </div>

          <div className="stat">
            <div className="stat-number">20+</div>
            <div className="stat-label">Medical Experts</div>
          </div>

          <div className="stat">
            <div className="stat-number">10+</div>
            <div className="stat-label">Departments</div>
          </div>

          <div className="stat">
            <div className="stat-number">15+</div>
            <div className="stat-label">Years of Care</div>
          </div>
        </div>
      </section>

      {/* ==============================
          DEPARTMENTS
      ============================== */}

      <section id="departments" className="section departments">
        <div className="container">
          <div className="section-heading center">
            <div className="eyebrow">Medical Departments</div>

            <h2>
              <Lines
                lines={[
                  "Comprehensive medical specialties.",
                ]}
              />
            </h2>

            <p>
              <Lines
                lines={[
                  "Specialised medical departments working together",
                  "for complete patient care.",
                ]}
              />
            </p>
          </div>

          <div className="department-grid">
            {departments.map((department) => (
              <div
                className="department-card"
                key={department.title}
              >
                <div className="department-icon">
                  {department.icon}
                </div>

                <h3>
                  <Lines lines={[department.title]} />
                </h3>

                <p>
                  <Lines lines={department.description} />
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==============================
          DOCTORS
      ============================== */}

      <section id="doctors" className="section doctors">
        <div className="container">
          <div className="section-heading">
            <div className="eyebrow">Our Specialists</div>

            <h2>
              <Lines
                lines={[
                  "Experienced doctors.",
                  "Personalised care.",
                ]}
              />
            </h2>

            <p>
              <Lines
                lines={[
                  "Meet our experienced medical professionals",
                  "dedicated to patient-focused healthcare.",
                ]}
              />
            </p>
          </div>

          <div className="doctor-grid">
            {doctors.map((doctor) => (
              <div className="doctor-card" key={doctor.name}>
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="doctor-image"
                  onClick={() => setSelectedImage(doctor.image)}
                  onError={handleImageError}
                />

                <div className="doctor-content">
                  <h3>
                    <Lines lines={[doctor.name]} />
                  </h3>

                  <div className="doctor-specialty">
                    {doctor.specialty}
                  </div>

                  <div className="doctor-description">
                    <Lines lines={doctor.description} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==============================
          SERVICES
      ============================== */}

      <section id="services" className="section services">
        <div className="container">
          <div className="section-heading center">
            <div className="eyebrow">Healthcare Services</div>

            <h2>
              <Lines
                lines={[
                  "Complete care.",
                  "One trusted hospital.",
                ]}
              />
            </h2>

            <p>
              <Lines
                lines={[
                  "From emergency care to advanced treatment,",
                  "our services are designed around your needs.",
                ]}
              />
            </p>
          </div>

          <div className="service-grid">
            {services.map((service) => (
              <div className="service-card" key={service.title}>
                <div className="service-icon">
                  {service.icon}
                </div>

                <h3>
                  <Lines lines={[service.title]} />
                </h3>

                <p>
                  <Lines lines={service.description} />
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==============================
          FACILITIES
      ============================== */}

      <section id="facilities" className="section facilities">
        <div className="container">
          <div className="section-heading center">
            <div className="eyebrow">Hospital Facilities</div>

            <h2>
              <Lines
                lines={[
                  "Designed for comfort.",
                  "Built for better care.",
                ]}
              />
            </h2>

            <p>
              <Lines
                lines={[
                  "Modern hospital facilities supporting patients",
                  "through every stage of their healthcare journey.",
                ]}
              />
            </p>
          </div>

          <div className="facility-grid">
            {facilities.map((facility) => (
              <div
                className="facility-card"
                key={facility.title}
              >
                <img
                  src={facility.image}
                  alt={facility.title}
                  className="facility-image"
                  onClick={() =>
                    setSelectedImage(facility.image)
                  }
                  onError={handleImageError}
                />

                <div className="facility-content">
                  <h3>
                    <Lines lines={[facility.title]} />
                  </h3>

                  <p>
                    <Lines lines={facility.description} />
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==============================
          GALLERY
      ============================== */}

      <section id="gallery" className="section gallery">
        <div className="container">
          <div className="section-heading center">
            <div className="eyebrow">Hospital Gallery</div>

            <h2>
              <Lines
                lines={[
                  "Inside RichieCare.",
                ]}
              />
            </h2>

            <p>
              <Lines
                lines={[
                  "Explore our hospital environment, facilities",
                  "and dedicated healthcare team.",
                ]}
              />
            </p>
          </div>

          <div className="gallery-grid">
            {gallery.map((item) => (
              <div
                className="gallery-item"
                key={item.title}
                onClick={() => setSelectedImage(item.image)}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  onError={handleImageError}
                />

                <div className="gallery-caption">
                  <span className="gallery-caption-title">{item.title}</span>
                  <span className="gallery-caption-text">
                    A glimpse of our caring healthcare environment.
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==============================
          CTA
      ============================== */}

      <section className="cta">
        <div className="container">
          <div className="eyebrow">Your Health Matters</div>

          <h2>
            <Lines
              lines={[
                "Care that puts you first.",
              ]}
            />
          </h2>

          <p>
            <Lines
              lines={[
                "Speak with our medical team and take",
                "the next step towards better health.",
              ]}
            />
          </p>

          <button
            className="btn btn-gold"
            onClick={() => setShowAppointment(true)}
          >
            Book Your Appointment
          </button>
        </div>
      </section>

      {/* ==============================
          CONTACT
      ============================== */}

      <section id="contact" className="section contact">
        <div className="container">
          <div className="section-heading">
            <div className="eyebrow">Contact RichieCare</div>

            <h2>
              <Lines
                lines={[
                  "We are here for you.",
                ]}
              />
            </h2>
          </div>

          <div className="contact-grid">
            <div className="contact-card">
              <h3>
                <Lines
                  lines={[
                    "Get in touch.",
                  ]}
                />
              </h3>

              <p>
                <Lines
                  lines={[
                    "For appointments, consultations and general",
                    "healthcare enquiries, contact our hospital team.",
                  ]}
                />
              </p>

              <div className="contact-details">
                <div className="contact-detail">
                  <div className="contact-icon">📍</div>

                  <div>
                    <strong>Hospital Address</strong>

                    <span>
                      <Lines
                        lines={[
                          hospital.address,
                        ]}
                      />
                    </span>
                  </div>
                </div>

                <div className="contact-detail">
                  <div className="contact-icon">☎</div>

                  <div>
                    <strong>Phone</strong>

                    <span>
                      <Lines
                        lines={[
                          hospital.phone,
                        ]}
                      />
                    </span>
                  </div>
                </div>

                <div className="contact-detail">
                  <div className="contact-icon">✉</div>

                  <div>
                    <strong>Email</strong>

                    <span>
                      <Lines
                        lines={[
                          hospital.email,
                        ]}
                      />
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="emergency-card">
              <div className="eyebrow">
                Emergency Services
              </div>

              <h3>
                <Lines
                  lines={[
                    "Need urgent medical care?",
                  ]}
                />
              </h3>

              <p>
                <Lines
                  lines={[
                    "Our emergency support team is available",
                    "around the clock for urgent situations.",
                  ]}
                />
              </p>

              <div className="emergency-number">
                {hospital.phone}
              </div>

              <div>
                <button
                  className="btn btn-gold"
                  onClick={openWhatsApp}
                >
                  WhatsApp Us
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==============================
          FOOTER
      ============================== */}

      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div>
              <h3>{hospital.name}</h3>

              <p>
                <Lines
                  lines={[
                    "RichieCare Multispeciality Hospital",
                    "providing compassionate, modern and",
                    "patient-focused healthcare.",
                  ]}
                />
              </p>
            </div>

            <div>
              <h3>Quick Links</h3>

              <div className="footer-links">
                <button onClick={() => scrollTo("home")}>
                  Home
                </button>

                <button onClick={() => scrollTo("about")}>
                  About
                </button>

                <button onClick={() => scrollTo("departments")}>
                  Departments
                </button>

                <button onClick={() => scrollTo("doctors")}>
                  Doctors
                </button>
              </div>
            </div>

            <div>
              <h3>Explore</h3>

              <div className="footer-links">
                <button onClick={() => scrollTo("services")}>
                  Services
                </button>

                <button onClick={() => scrollTo("facilities")}>
                  Facilities
                </button>

                <button onClick={() => scrollTo("gallery")}>
                  Gallery
                </button>

                <button onClick={() => scrollTo("contact")}>
                  Contact
                </button>
              </div>
            </div>

            <div>
              <h3>Contact</h3>

              <p>
                <Lines
                  lines={[
                    hospital.phone,
                    hospital.email,
                    "Hyderabad, Telangana",
                  ]}
                />
              </p>
            </div>
          </div>

          <div className="footer-bottom">
            <div>
              © 2026 RichieCare Multispeciality Hospital. All
              Rights Reserved.
            </div>

            <div>
              Website by{" "}
              <a
                href="https://www.astroideasoftway.com/"
                target="_blank"
                rel="noreferrer"
              >
                Astroidea Softway LLP
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* ==============================
          WHATSAPP BUTTON
      ============================== */}

      <button
        className="whatsapp"
        onClick={openWhatsApp}
        aria-label="Chat on WhatsApp"
      >
        ☎
      </button>

      {/* ==============================
          APPOINTMENT MODAL
      ============================== */}

      {showAppointment && (
        <div
          className="modal-backdrop"
          onClick={() => setShowAppointment(false)}
        >
          <div
            className="appointment-modal"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              className="modal-close"
              onClick={() => setShowAppointment(false)}
            >
              ×
            </button>

            <h2>
              <Lines
                lines={[
                  "Book an Appointment",
                ]}
              />
            </h2>

            <p>
              <Lines
                lines={[
                  "Complete the form and our team will contact you.",
                ]}
              />
            </p>

            <form onSubmit={submitAppointment}>
              <div className="form-grid">
                <div className="form-group">
                  <label>Full Name</label>

                  <input
                    type="text"
                    placeholder="Enter your full name"
                    required
                  />
                </div>

                <div className="form-group">
                  <label>Phone Number</label>

                  <input
                    type="tel"
                    placeholder="Enter phone number"
                    required
                  />
                </div>

                <div className="form-group">
                  <label>Email Address</label>

                  <input
                    type="email"
                    placeholder="Enter email address"
                  />
                </div>

                <div className="form-group">
                  <label>Department</label>

                  <select required defaultValue="">
                    <option value="" disabled>
                      Select department
                    </option>

                    {departments.map((department) => (
                      <option
                        value={department.title}
                        key={department.title}
                      >
                        {department.title}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="form-group full">
                  <label>Preferred Date</label>

                  <input
                    type="date"
                    required
                  />
                </div>

                <div className="form-group full">
                  <label>Message</label>

                  <textarea
                    placeholder="Tell us how we can help you"
                  ></textarea>
                </div>

                <div className="form-group full">
                  <button
                    type="submit"
                    className="btn btn-gold"
                    style={{ width: "100%" }}
                  >
                    Submit Appointment Request
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ==============================
          IMAGE LIGHTBOX
      ============================== */}

      {selectedImage && (
        <div
          className="lightbox"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="lightbox-close"
            onClick={() => setSelectedImage(null)}
          >
            ×
          </button>

          <img
            src={selectedImage}
            alt="Hospital preview"
            onClick={(event) => event.stopPropagation()}
            onError={handleImageError}
          />
        </div>
      )}
    </>
  );
}