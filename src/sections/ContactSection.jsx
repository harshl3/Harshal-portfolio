import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Download, Send, CheckCircle2, AlertCircle, Loader, ArrowUpRight } from "lucide-react";
import SectionWrapper, { SectionHeader, FadeInUp } from "../components/ui/SectionWrapper";
import { personalInfo } from "../data/personal";

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = "Name is required.";
    if (!formData.email.trim()) {
      errs.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = "Please enter a valid email address.";
    }
    if (!formData.message.trim()) errs.message = "Message is required.";
    return errs;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setStatus("loading");

    const subject = encodeURIComponent(
      formData.subject || `Portfolio Contact from ${formData.name}`
    );
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
    );
    const mailtoUrl = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;

    setTimeout(() => {
      window.open(mailtoUrl, "_blank");
      setStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setStatus("idle"), 5000);
    }, 600);
  };

  return (
    <SectionWrapper id="contact" className="relative">
      <div className="section-container">
        <SectionHeader
          label="Let's Connect"
          title="Get in Touch"
          subtitle="Whether you have an Android/Flutter project, internship opportunity, or technical inquiry, my inbox is open."
        />

        <div className="grid lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-16 max-w-6xl mx-auto items-start">
          
          {/* ─── LEFT COLUMN: Free & Clean Contact Details (5 cols) ─── */}
          <div className="lg:col-span-5 space-y-7">
            <FadeInUp delay={0.1}>
              <div className="space-y-7">
                <div>
                  <h3
                    className="text-xl font-bold text-white tracking-tight"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    Contact Details
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 mt-1 leading-relaxed">
                    Reach out directly through any of these channels:
                  </p>
                </div>

                <div className="space-y-4">
                  <ContactRow
                    icon={<Mail size={16} className="text-[#5cc8ff]" />}
                    label="Email"
                    value={personalInfo.email}
                    href={`mailto:${personalInfo.email}`}
                  />
                  <ContactRow
                    icon={<Phone size={16} className="text-[#5cc8ff]" />}
                    label="Phone"
                    value={personalInfo.phone}
                    href={`tel:${personalInfo.phone}`}
                  />
                  <ContactRow
                    icon={<MapPin size={16} className="text-[#5cc8ff]" />}
                    label="Location"
                    value={personalInfo.location}
                  />
                </div>

                {/* Resume Download CTA Card */}
                <div className="pt-7 border-t border-slate-800/80">
                  <a
                    href={personalInfo.resumeUrl}
                    download
                    className="btn-primary w-full justify-center text-sm py-3.5 rounded-2xl shadow-xl"
                  >
                    <Download size={16} />
                    <span>Download Resume</span>
                  </a>
                </div>
              </div>
            </FadeInUp>
          </div>

          {/* ─── RIGHT COLUMN: Free & Open Message Form (7 cols) ─── */}
          <div className="lg:col-span-7">
            <FadeInUp delay={0.15}>
              <form
                onSubmit={handleSubmit}
                className="glass-card p-5 sm:p-8 border border-slate-800/80 rounded-2xl sm:rounded-3xl space-y-5 sm:space-y-7 shadow-xl"
                noValidate
              >
                <div>
                  <h3
                    className="text-xl font-bold text-white tracking-tight"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    Send a Message
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 mt-1">
                    Fill in your details and I'll get back to you promptly.
                  </p>
                </div>

                {/* Name Field */}
                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                    Your Name <span className="text-[#38bdf8]">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="contact-name"
                    className="form-input"
                    placeholder="Your Name Here"
                    value={formData.name}
                    onChange={handleChange}
                  />
                  {errors.name && (
                    <p className="text-xs text-rose-400 mt-1.5">{errors.name}</p>
                  )}
                </div>

                {/* Email Field */}
                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                    Your Email <span className="text-[#38bdf8]">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="contact-email"
                    className="form-input"
                    placeholder="name@example.com"
                    value={formData.email}
                    onChange={handleChange}
                  />
                  {errors.email && (
                    <p className="text-xs text-rose-400 mt-1.5">{errors.email}</p>
                  )}
                </div>

                {/* Subject Field */}
                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                    Subject <span className="text-slate-500 font-normal lowercase">(optional)</span>
                  </label>
                  <input
                    type="text"
                    name="subject"
                    id="contact-subject"
                    className="form-input"
                    placeholder="Mobile App Project, Internship Opportunity, etc."
                    value={formData.subject}
                    onChange={handleChange}
                  />
                </div>

                {/* Message Field */}
                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                    Message <span className="text-[#38bdf8]">*</span>
                  </label>
                  <textarea
                    name="message"
                    id="contact-message"
                    rows={4}
                    className="form-input resize-none"
                    placeholder="Write your message here..."
                    value={formData.message}
                    onChange={handleChange}
                  />
                  {errors.message && (
                    <p className="text-xs text-rose-400 mt-1.5">{errors.message}</p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="btn-primary w-full justify-center py-3.5 text-sm font-bold shadow-xl rounded-2xl"
                >
                  {status === "loading" ? (
                    <>
                      <Loader size={16} className="animate-spin" />
                      <span>Sending Message...</span>
                    </>
                  ) : (
                    <>
                      <Send size={16} />
                      <span>Send Message</span>
                    </>
                  )}
                </button>

                {/* Feedback Messages */}
                {status === "success" && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-start gap-2.5 p-4 rounded-2xl text-xs bg-emerald-500/10 border border-emerald-500/30 text-emerald-300"
                  >
                    <CheckCircle2 size={16} className="shrink-0 mt-0.5" />
                    <span>Your email client has been opened with your message. Thank you for reaching out!</span>
                  </motion.div>
                )}

                {status === "error" && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 p-4 rounded-2xl text-xs bg-rose-500/10 border border-rose-500/30 text-rose-300"
                  >
                    <AlertCircle size={16} className="shrink-0" />
                    <span>Something went wrong. Please email directly at {personalInfo.email}</span>
                  </motion.div>
                )}

              </form>
            </FadeInUp>
          </div>

        </div>
      </div>
    </SectionWrapper>
  );
}

function ContactRow({ icon, label, value, href }) {
  const content = (
    <div className="flex items-center justify-between gap-3.5 p-4 rounded-2xl bg-[#070d18]/75 border border-slate-800/80 hover:border-[#5cc8ff]/30 transition-all group shadow-sm">
      <div className="flex items-center gap-3.5 min-w-0">
        <div className="w-10 h-10 rounded-xl bg-[#0f172a] border border-sky-400/20 flex items-center justify-center shrink-0">
          {icon}
        </div>
        <div className="min-w-0">
          <p className="text-[0.68rem] font-bold uppercase tracking-[0.14em] text-slate-400">
            {label}
          </p>
          <p className="text-xs sm:text-sm font-medium text-slate-200 break-words min-w-0">
            {value}
          </p>
        </div>
      </div>

      {href && (
        <ArrowUpRight size={16} className="text-slate-500 group-hover:text-[#5cc8ff] transition-colors shrink-0 mr-1" />
      )}
    </div>
  );

  if (href) {
    return (
      <a href={href} target={href.startsWith("mailto:") || href.startsWith("tel:") ? "_self" : "_blank"} rel="noopener noreferrer" className="block">
        {content}
      </a>
    );
  }

  return content;
}
