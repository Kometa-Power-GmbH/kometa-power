"use client";

import "@ant-design/v5-patch-for-react-19";
import { message } from "antd";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const formSchema = z.object({
  name: z.string().min(2, "Der Name muss mindestens 2 Zeichen lang sein"),
  email: z.string().email("Bitte geben Sie eine gültige E-Mail-Adresse ein"),
  message: z
    .string()
    .min(10, "Die Nachricht muss mindestens 10 Zeichen lang sein"),
});

type FormData = z.infer<typeof formSchema>;

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Fehler beim Senden der Nachricht.");
      }
      message.success("Nachricht wurde erfolgreich gesendet");
      reset();
    } catch (error) {
      console.error(error);
      message.error("Fehler beim Senden. Bitte versuchen Sie es erneut.");
    }
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8" id="contact">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start lg:gap-16 gap-10">
        {/* Left */}
        <div className="lg:w-1/2 flex flex-col justify-start">
          <h2 className="text-4xl lg:text-5xl font-extrabold text-[#FDEAA8] font-heading mb-6">
            Lassen Sie uns gemeinsam durchstarten
          </h2>
          <p className="mb-6 text-xl leading-relaxed">
            Rufen Sie uns an oder senden Sie uns eine E-Mail. Wir melden uns
            schnellstmöglich zurück und beraten Sie persönlich und kompetent
            rund um Ihr Projekt
          </p>

          <div className="flex items-center gap-3 mb-3 text-xl font-medium">
            <FaPhone color="#FDEAA8" className="text-[#202020] w-5 h-5" />
            +49 176 707 00 689
          </div>
          <div className="flex items-center gap-3 mb-3 text-xl font-medium">
            <FaEnvelope color="#FDEAA8" className="text-[#202020] w-5 h-5" />
            kometa-power@gmx.de
          </div>
          <div className="flex items-center gap-3 text-xl font-medium">
            <FaMapMarkerAlt
              color="#FDEAA8"
              className="text-[#202020] w-5 h-5"
            />
            Heiligenseestraße 36A, 13503 Berlin
          </div>
        </div>

        {/* Right - Form */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full lg:w-1/2 grid grid-cols-1 gap-y-6"
        >
          <div>
            <label htmlFor="name" className="block text-sm font-bold">
              Ihr Name
            </label>
            <input
              {...register("name")}
              type="text"
              placeholder="Name"
              required
              className="font-semibold mt-1 block w-full rounded-md border-2 border-[#b7ab98] shadow-sm py-3 px-4 focus:outline-none focus:ring-1 focus:ring-[#FDEAA8] focus:border-[#FDEAA8]"
            />
            {errors.name && (
              <p className="text-sm text-red-500 mt-1">{errors.name.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-bold">
              E-Mail-Adresse
            </label>
            <input
              {...register("email")}
              type="email"
              placeholder="E-Mail"
              required
              className="font-semibold mt-1 block w-full rounded-md border-2 border-[#b7ab98] shadow-sm py-3 px-4 focus:outline-none focus:ring-1 focus:ring-[#FDEAA8] focus:border-[#FDEAA8]"
            />
            {errors.email && (
              <p className="text-sm text-red-500 mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-bold">
              Nachricht
            </label>
            <textarea
              {...register("message")}
              placeholder="Ihre Nachricht"
              rows={5}
              required
              className="font-semibold mt-1 block w-full rounded-md border-2 border-[#b7ab98] shadow-sm py-3 px-4 focus:outline-none focus:ring-1 focus:ring-[#FDEAA8] focus:border-[#FDEAA8]"
            />
            {errors.message && (
              <p className="text-sm text-red-500 mt-1">
                {errors.message.message}
              </p>
            )}
          </div>

          <div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full inline-flex justify-center py-3 px-6 shadow-sm text-base font-medium rounded-full border-2 border-[#b7ab98] hover:bg-[#FDEAA8] hover:text-black transition-colors duration-1000"
            >
              {isSubmitting ? "Senden..." : "Nachricht senden"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
