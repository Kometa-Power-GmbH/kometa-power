import Image from "next/image";

export default function Datenschutz() {
  return (
    <div className="relative min-h-screen text-black overflow-hidden scroll-smooth">
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
        <h2 className="lg:text-4xl text-2xl font-black mb-6 text-[#FDEAA8]">Datenschutz</h2>
        <div className="space-y-4 text-sm md:text-base leading-relaxed">
          <p>
            <strong>Datenschutzerklärung</strong>
          </p>
          <p>
            Wir, die Kometa Power GmbH, nehmen den Schutz Ihrer persönlichen
            Daten sehr ernst. Diese Datenschutzerklärung informiert Sie gemäß
            Art. 13 und 14 der Datenschutz-Grundverordnung (DSGVO) über die
            Verarbeitung Ihrer personenbezogenen Daten bei der Nutzung unserer
            Website <strong>kometa-energie.de</strong>.
          </p>

          <p>
            <strong>1. Name und Kontaktdaten des Verantwortlichen</strong>
            <br />
            Kometa Power GmbH
            <br />
            Heiligenseestraße 36A
            <br />
            13503 Berlin
            <br />
            Telefon: +49 176 707 00 689
            <br />
            E-Mail: kontakt@kometa-energie.de
            <br />
            Vertreten durch: Mihai Savciuc (Geschäftsführer)
          </p>

          <p>
            <strong>
              2. Erhebung und Speicherung personenbezogener Daten sowie Art und
              Zweck ihrer Verwendung
            </strong>
          </p>
          <p>
            <strong>2.1 Beim Besuch der Website (Server-Logfiles)</strong>
            <br />
            Es werden automatisch Informationen wie IP-Adresse,
            Zugriffszeitpunkt, Browser etc. erfasst. Diese dienen der Sicherheit
            und Stabilität und basieren auf Art. 6 Abs. 1 lit. f DSGVO.
          </p>

          <p>
            <strong>2.2 Kontaktaufnahme</strong>
            <br />
            Bei Nutzung unseres Kontaktformulars oder E-Mail-Kontakts
            verarbeiten wir Ihre Angaben zur Bearbeitung Ihrer Anfrage auf
            Grundlage von Art. 6 Abs. 1 lit. b oder f DSGVO.
          </p>

          <p>
            <strong>2.3 Cookies</strong>
            <br />
            Wir verwenden technisch notwendige Cookies sowie – mit Ihrer
            Einwilligung – Analyse- und Marketing-Cookies. Sie können Ihre
            Einwilligung jederzeit über unsere Cookie-Einstellungen widerrufen.
          </p>

          <p>
            <strong>2.4 Google Analytics</strong>
            <br />
            Wir nutzen Google Analytics (anonymisiert) auf Basis Ihrer
            Einwilligung gemäß Art. 6 Abs. 1 lit. a DSGVO.
          </p>

          <p>
            <strong>2.5 Newsletter</strong>
            <br />
            Bei Anmeldung zum Newsletter speichern wir Ihre E-Mail-Adresse (ggf.
            Name) zwecks Versand. Die Verarbeitung erfolgt per Double-Opt-In
            nach Art. 6 Abs. 1 lit. a DSGVO. Abmeldung ist jederzeit möglich.
          </p>

          <p>
            <strong>3. Weitergabe von Daten</strong>
            <br />
            Eine Weitergabe erfolgt nur bei gesetzlicher Pflicht,
            Vertragsabwicklung oder mit Ihrer ausdrücklichen Einwilligung.
          </p>

          <p>
            <strong>4. Ihre Rechte</strong>
            <br />
            Sie haben das Recht auf Auskunft, Berichtigung, Löschung,
            Einschränkung, Datenübertragbarkeit, Widerruf und Beschwerde gemäß
            DSGVO. Ansprechpartner: kontakt@kometa-energie.de
          </p>

          <p>
            <strong>5. Datensicherheit</strong>
            <br />
            Unsere Website nutzt SSL-Verschlüsselung und technische sowie
            organisatorische Schutzmaßnahmen gegen unbefugten Zugriff.
          </p>

          <p>
            <strong>
              6. Aktualität und Änderung dieser Datenschutzerklärung
            </strong>
            <br />
            Diese Datenschutzerklärung hat den Stand Mai 2025 und kann bei
            Bedarf angepasst werden.
          </p>

          <p>
            <strong>7. Kontakt</strong>
            <br />
            Kometa Power GmbH
            <br />
            Mihai Savciuc
            <br />
            Heiligenseestraße 36A
            <br />
            13503 Berlin
            <br />
            E-Mail: kontakt@kometa-energie.de
          </p>
        </div>
      </div>
    </div>
  );
}
