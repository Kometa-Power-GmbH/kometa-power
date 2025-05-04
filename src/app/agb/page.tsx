import Image from "next/image";

export default function AGB() {
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
        <h2 className="lg:text-4xl text-2xl font-black mb-6 text-[#FDEAA8]">
          Allgemeine Geschäftsbedingungen (AGB)
        </h2>
        <div className="space-y-4 text-sm md:text-base leading-relaxed">
          <p>
            <strong>Kometa Power GmbH</strong>
            <br />
            Heiligenseestraße 36A
            <br />
            13503 Berlin
          </p>

          <p>
            <strong>1. Geltungsbereich</strong>
            <br />
            1.1 Diese AGB gelten für alle Verträge über Bau- und
            Montageleistungen zwischen der Kometa Power GmbH („Auftragnehmer“)
            und dem Kunden („Auftraggeber“), sofern nichts anderes vereinbart
            ist.
            <br />
            1.2 Abweichende AGB des Auftraggebers gelten nur bei ausdrücklicher
            Zustimmung.
            <br />
            1.3 Die VOB/B wird nur bei ausdrücklicher schriftlicher Vereinbarung
            Vertragsbestandteil.
          </p>

          <p>
            <strong>2. Angebote und Vertragsabschluss</strong>
            <br />
            2.1 Unsere Angebote sind freibleibend.
            <br />
            2.2 Ein Vertrag kommt durch schriftliche Bestätigung oder
            Leistungsbeginn zustande.
            <br />
            2.3 Nur ausdrücklich als verbindlich bezeichnete Angaben sind
            verbindlich.
          </p>

          <p>
            <strong>3. Leistungsumfang</strong>
            <br />
            3.1 Umfang gemäß Vertrag, Angebot, Leistungsbeschreibung.
            <br />
            3.2 Der Einsatz von Subunternehmern ist zulässig.
            <br />
            3.3 Der Auftraggeber stellt notwendige Informationen rechtzeitig
            bereit.
          </p>

          <p>
            <strong>4. Vergütung und Zahlungsbedingungen</strong>
            <br />
            4.1 Preise verstehen sich netto zzgl. USt.
            <br />
            4.2 Zahlung: 14 Tage nach Rechnung ohne Abzug.
            <br />
            4.3 Abschläge gem. § 632a BGB oder VOB/B.
            <br />
            4.4 Verzugszinsen: 9 bzw. 5 Prozentpunkte über Basiszins.
          </p>

          <p>
            <strong>5. Ausführungsfristen und Termine</strong>
            <br />
            5.1 Nur ausdrücklich als verbindlich bezeichnete Termine sind
            verbindlich.
            <br />
            5.2 Höhere Gewalt o.ä. berechtigt zur Fristverlängerung.
            <br />
            5.3 Keine Haftung für fremdverursachte Verzögerungen.
          </p>

          <p>
            <strong>6. Abnahme</strong>
            <br />
            6.1 Abnahmepflicht nach Anzeige der Fertigstellung.
            <br />
            6.2 Geringfügige Mängel verhindern Abnahme nicht.
            <br />
            6.3 Bei Nutzung gilt die Leistung als abgenommen.
          </p>

          <p>
            <strong>7. Gewährleistung</strong>
            <br />
            7.1 Gesetzliche Vorschriften oder VOB/B.
            <br />
            7.2 Fristen: 5 Jahre Bau, 2 Jahre sonstige Leistungen.
            <br />
            7.3 Mängel sind schriftlich zu rügen. Nacherfüllung ist zulässig.
          </p>

          <p>
            <strong>8. Haftung</strong>
            <br />
            8.1 Uneingeschränkte Haftung bei Verletzung von Leben, Körper,
            Gesundheit, Vorsatz, grober Fahrlässigkeit.
            <br />
            8.2 Bei einfacher Fahrlässigkeit nur bei Kardinalpflichten,
            beschränkt auf typischen Schaden.
            <br />
            8.3 Keine Haftung für entgangenen Gewinn/Folgeschäden, soweit
            zulässig.
          </p>

          <p>
            <strong>9. Eigentumsvorbehalt</strong>
            <br />
            9.1 Materialien bleiben bis zur Bezahlung Eigentum des
            Auftragnehmers.
            <br />
            9.2 Der Auftraggeber schützt Vorbehaltsware vor Schäden.
          </p>

          <p>
            <strong>10. Kündigung</strong>
            <br />
            10.1 Kündigung aus wichtigem Grund jederzeit möglich.
            <br />
            10.2 Bauleistungen: § 648 BGB oder VOB/B.
          </p>

          <p>
            <strong>11. Datenschutz</strong>
            <br />
            11.1 Datenverarbeitung nach DSGVO. Siehe:{" "}
            <a href="/datenschutz" className="underline text-[#FDEAA8]">
              Datenschutzerklärung
            </a>
          </p>

          <p>
            <strong>12. Gerichtsstand und anwendbares Recht</strong>
            <br />
            12.1 Gerichtsstand: Berlin (bei Kaufleuten etc.).
            <br />
            12.2 Deutsches Recht gilt, kein UN-Kaufrecht.
          </p>

          <p>
            <strong>13. Schlussbestimmungen</strong>
            <br />
            13.1 Änderungen bedürfen Schriftform.
            <br />
            13.2 Unwirksame Klauseln werden ersetzt, übrige bleiben gültig.
          </p>
        </div>
      </div>
    </div>
  );
}
