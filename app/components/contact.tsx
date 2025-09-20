"use client";
import Header from "./ui/header";
import TextInput from "./ui/text-input";
import TextArea from "./ui/textarea";
import toast from "react-hot-toast";
import { FaPaperPlane } from "react-icons/fa6";
import SubmitButton from "./ui/submit-button";
import { useSectionInView } from "../lib/hooks";
import { motion } from "framer-motion";

export default function Contact() {
  const { ref } = useSectionInView("Contact", 0.5);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    const name = (formData.get("name") as string) || null;
    const email = formData.get("email") as string;
    const subject = formData.get("subject") as string;
    const message = formData.get("message") as string;

    try {
      const res = await fetch("/api/sendemail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, subject, message }),
      });

      const data = await res.json();

      if (!res.ok) {
        toast.error(data.error || "Something went wrong.");
        return;
      }

      toast.success("Message sent. Thanks for reaching out!");
      form.reset();
    } catch (err) {
      toast.error("Failed to send message.");
      console.error(err);
    }
  };

  return (
    <section ref={ref} id="contact" className="scroll-mt-24">
      <Header animateOpacity className="text-center">
        Contact Me!
      </Header>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.5 }}
      >
        <p className="text-center text-lg text-gray-400 sm:px-12 md:px-32 lg:px-48">
          Thank you for checking out my website! If you have any questions or
          would like to get in touch, feel free to reach out to me.
        </p>
        <form
          id="contact-form"
          className="mt-12 sm:px-12 md:px-32 lg:px-48"
          onSubmit={handleSubmit}
        >
          <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
            <TextInput
              placeholder="Your Name"
              type="text"
              name="name"
              max={100}
            />
            <TextInput
              placeholder="E-mail"
              type="email"
              name="email"
              required
              max={100}
            />
          </div>
          <TextInput
            placeholder="Subject"
            name="subject"
            required
            min={3}
            max={200}
            className="mb-4"
          />
          <TextArea
            placeholder="Message"
            className="mb-4"
            name="message"
            required
            maxLength={5000}
          />
          <SubmitButton className="group">
            Send Message{" "}
            <FaPaperPlane className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:transform" />
          </SubmitButton>
        </form>
      </motion.div>
    </section>
  );
}
