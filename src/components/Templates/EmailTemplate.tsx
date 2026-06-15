interface EmailTemplateProps {
  name: string;
  email: string;
  message: string;
}

function escapeHtml(input: string): string {
  return input
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export function renderContactEmail({
  name,
  email,
  message,
}: EmailTemplateProps): string {
  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safeMessage = escapeHtml(message).replace(/\n/g, "<br />");

  return `<!doctype html>
<html lang="de">
  <body style="margin:0;padding:0;background-color:#0a0a0a;font-family:'Segoe UI',Roboto,sans-serif;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#0a0a0a;padding:48px 16px;">
      <tr>
        <td align="center">
          <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="background-color:#1a1a1a;border-radius:16px;border:1px solid #333;max-width:600px;width:100%;">
            <tr>
              <td style="padding:32px;color:#FDEAA8;">
                <h1 style="font-size:24px;margin:0 0 24px;color:#ffffff;">
                  Neue Nachricht von <span style="color:#FDEAA8;">Kometa Power</span>
                </h1>
                <p style="font-size:16px;margin:0 0 12px;color:#ffffff;">
                  <strong style="display:inline-block;width:100px;">Name:</strong>
                  <span style="color:#FDEAA8;">${safeName}</span>
                </p>
                <p style="font-size:16px;margin:0 0 12px;color:#ffffff;">
                  <strong style="display:inline-block;width:100px;">E-Mail:</strong>
                  <a href="mailto:${safeEmail}" style="color:#FDEAA8;text-decoration:none;">${safeEmail}</a>
                </p>
                <p style="font-size:18px;margin:24px 0 8px;color:#ffffff;">
                  <strong>Nachricht:</strong>
                </p>
                <div style="background-color:#0a0a0a;padding:16px;border-radius:8px;font-size:16px;color:#FDEAA8;border-left:4px solid #FDEAA8;">
                  ${safeMessage}
                </div>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;
}
