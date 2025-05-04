import Image from "next/image";

export default function Impressum() {
  return (
    <div className="relative min-h-screen text-black overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/intro.jpg"
          alt="Background"
          fill
          style={{
            objectFit: "cover",
            filter: "grayscale(100%) brightness(0.4)",
          }}
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      <div className="relative max-w-3xl mx-auto text-white bg-[#202020] p-8 md:p-12 shadow-2xl rounded-xl">
        <h2 className="text-4xl font-black mb-6 text-[#FDEAA8]">Impressum</h2>
        <div className="space-y-4 text-sm font-semibold md:text-base leading-relaxed">
          <p><strong>Kometa Power GmbH</strong></p>
          <p>Heiligenseestraße 36A<br />13503 Berlin</p>
          <p><strong>Vertreten durch:</strong><br />Mihai Savciuc (Geschäftsführer)</p>
          <p><strong>Kontakt:</strong><br />Telefon: +49 176 707 00 689<br />E-Mail:</p>
          <p><strong>Registereintrag:</strong><br />Eintragung im Handelsregister<br />Registergericht: Amtsgericht Charlottenburg (Berlin)<br />Registernummer: HRB 254779 B</p>
          <p><strong>Steuernummer:</strong><br />30/392/50716</p>
          <p><strong>Commerzbank GF-B48</strong><br />IBAN: DE26 1004 0048 0360 4618 00<br />BIC: COBADEFFXXX</p>
          <p><strong>Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:</strong><br />Mihai Savciuc<br />Heiligenseestraße 36A<br />13503 Berlin</p>
        </div>
      </div>
    </div>
  );
}
