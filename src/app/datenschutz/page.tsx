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
        <h2 className="lg:text-4xl text-2xl font-black mb-6 text-[#FDEAA8]">
          Datenschutz
        </h2>
        <div className="space-y-4 text-sm md:text-base leading-relaxed">
          <p>
            <strong>Datenschutzerklärung</strong>
          </p>
          <p>
            Wir, die Kometa Power GmbH, nehmen den Schutz Ihrer persönlichen
            Daten sehr ernst. Diese Datenschutzerklärung informiert Sie gemäß
            Art. 13 und 14 der Datenschutz-Grundverordnung (DSGVO) über die
            Verarbeitung Ihrer personenbezogenen Daten bei der Nutzung unserer
            Website <strong>kometa-power.com</strong>.
          </p>

          <p>
            <strong>1. Name und Kontaktdaten des Verantwortlichen</strong>
            <br />
            Kometa Power GmbH
            <br />
            Hafenstraße 2
            <br />
            16761 Hennigsdorf
            <br />
            Telefon: +49 155 672 01 810
            <br />
            E-Mail: info@kometa-power.com
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
            Zugriffszeitpunkt, Browser etc. erfasst. Diese dienen der
            Sicherheit und Stabilität und basieren auf Art. 6 Abs. 1 lit. f
            DSGVO.
          </p>

          <p>
            <strong>2.2 Kontaktaufnahme</strong>
            <br />
            Bei Nutzung unseres Kontaktformulars oder E-Mail-Kontakts
            verarbeiten wir Ihre Angaben zur Bearbeitung Ihrer Anfrage auf
            Grundlage von Art. 6 Abs. 1 lit. b oder f DSGVO.
          </p>

          <p>
            <strong>2.3 Cookies und Einwilligungsverwaltung</strong>
            <br />
            Unsere Website verwendet Cookies. Das Speichern von Informationen
            auf Ihrem Endgerät sowie der Zugriff auf bereits gespeicherte
            Informationen erfolgt ausschließlich auf Grundlage Ihrer
            Einwilligung gemäß § 25 Abs. 1 TTDSG/DDG in Verbindung mit Art. 6
            Abs. 1 lit. a DSGVO. Ausgenommen sind technisch notwendige
            Cookies, deren Einsatz auf § 25 Abs. 2 TTDSG/DDG beruht.
          </p>
          <p>
            Beim ersten Besuch unserer Website erhalten Sie einen
            Cookie-Banner, über den Sie einzelne Kategorien (Notwendig,
            Funktional, Analyse, Marketing) auswählen oder vollständig
            ablehnen können. Ihre Auswahl wird in einem Erstanbieter-Cookie
            (<strong>kp_consent</strong>) für die Dauer von 12 Monaten
            gespeichert. Sie können Ihre Entscheidung jederzeit über den Link{" "}
            <strong>&bdquo;Cookie-Einstellungen&ldquo;</strong> im Footer
            widerrufen oder anpassen.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full text-xs md:text-sm border border-white/20 rounded-lg">
              <thead className="bg-black/30">
                <tr>
                  <th className="text-left p-2 border-b border-white/20">
                    Cookie
                  </th>
                  <th className="text-left p-2 border-b border-white/20">
                    Zweck
                  </th>
                  <th className="text-left p-2 border-b border-white/20">
                    Dauer
                  </th>
                  <th className="text-left p-2 border-b border-white/20">
                    Anbieter
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-2 align-top">kp_consent</td>
                  <td className="p-2 align-top">
                    Speicherung Ihrer Cookie-Einwilligung
                  </td>
                  <td className="p-2 align-top">12 Monate</td>
                  <td className="p-2 align-top">
                    Kometa Power GmbH (Erstanbieter)
                  </td>
                </tr>
                <tr>
                  <td className="p-2 align-top">_ga, _ga_*, _gid</td>
                  <td className="p-2 align-top">
                    Reichweitenmessung (nur nach Einwilligung &bdquo;Analyse&ldquo;)
                  </td>
                  <td className="p-2 align-top">bis zu 2 Jahre</td>
                  <td className="p-2 align-top">
                    Google Ireland Ltd. / Google LLC
                  </td>
                </tr>
                <tr>
                  <td className="p-2 align-top">_fbp, _fbc</td>
                  <td className="p-2 align-top">
                    Reichweiten- und Werbemessung (nur nach Einwilligung
                    &bdquo;Marketing&ldquo;)
                  </td>
                  <td className="p-2 align-top">bis zu 90 Tage</td>
                  <td className="p-2 align-top">
                    Meta Platforms Ireland Ltd.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <p>
            <strong>
              2.4 Google Analytics / Google Tag Manager (Consent Mode v2)
            </strong>
            <br />
            Sofern Sie in die Kategorie &bdquo;Analyse&ldquo; einwilligen,
            nutzen wir Google Analytics 4 bzw. den Google Tag Manager der
            Google Ireland Ltd., Gordon House, Barrow Street, Dublin 4,
            Irland. Die IP-Adresse wird anonymisiert verarbeitet. Wir setzen
            den Google Consent Mode v2 ein, sodass vor Ihrer Einwilligung
            keine personenbezogenen Cookies gesetzt und lediglich
            anonymisierte, cookielose Signale übermittelt werden. Rechtsgrund­
            lage ist Art. 6 Abs. 1 lit. a DSGVO. Eine Übermittlung in
            Drittländer (USA) ist möglich; Google ist nach dem EU-US Data
            Privacy Framework zertifiziert, ergänzend bestehen
            Standard­vertrags­klauseln.
          </p>

          <p>
            <strong>2.5 Meta Pixel (Facebook/Instagram)</strong>
            <br />
            Sofern Sie in die Kategorie &bdquo;Marketing&ldquo; einwilligen,
            setzen wir den Meta Pixel der Meta Platforms Ireland Ltd., 4
            Grand Canal Square, Dublin 2, Irland, ein. Dieser misst die
            Wirksamkeit unserer Werbemaßnahmen. Rechtsgrundlage ist Art. 6
            Abs. 1 lit. a DSGVO. Eine Übermittlung in Drittländer (USA) ist
            möglich; Meta ist nach dem EU-US Data Privacy Framework
            zertifiziert, ergänzend bestehen Standardvertragsklauseln.
          </p>

          <p>
            <strong>2.6 Widerruf Ihrer Einwilligung</strong>
            <br />
            Sie können Ihre Einwilligung jederzeit mit Wirkung für die
            Zukunft widerrufen. Klicken Sie dazu im Footer dieser Website
            auf <strong>&bdquo;Cookie-Einstellungen&ldquo;</strong> und
            passen Sie Ihre Auswahl an. Die Rechtmäßigkeit der bis zum
            Widerruf erfolgten Verarbeitung bleibt unberührt.
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
            Einschränkung, Datenübertragbarkeit, Widerruf und Beschwerde
            gemäß DSGVO. Ansprechpartner: info@kometa-power.com
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
            Diese Datenschutzerklärung hat den Stand April 2026 und kann bei
            Bedarf angepasst werden.
          </p>

          <p>
            <strong>7. Kontakt</strong>
            <br />
            Kometa Power GmbH
            <br />
            Mihai Savciuc
            <br />
            Hafenstraße 2
            <br />
            16761 Hennigsdorf
            <br />
            E-Mail: info@kometa-power.com
          </p>
        </div>
      </div>
    </div>
  );
}
