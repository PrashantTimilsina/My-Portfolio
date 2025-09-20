import Mailjet from "node-mailjet";

const mailjetClient = Mailjet.apiConnect(
  process.env.MAILJET_API_PUBLIC_KEY!,
  process.env.MAILJET_API_PRIVATE_KEY!
);

/**
 * Send an email from the portfolio contact form
 * @param visitorEmail - The email address entered by the user
 * @param visitorName - Optional name entered by the user
 * @param subject - Subject of the message
 * @param message - Message content
 */
export async function sendEmail(
  visitorEmail: string,
  visitorName: string | null,
  subject: string,
  message: string
) {
  try {
    const htmlPart = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; background-color: #f9f9f9; padding: 20px; border-radius: 8px; color: #333;">
        <h2 style="color: #0070f3;">New message from your portfolio ✉️</h2>
        <p><strong>Name:</strong> ${visitorName || "N/A"}</p>
        <p><strong>Email:</strong> ${visitorEmail}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <div style="margin: 20px 0; padding: 15px; background: #fff; border-radius: 6px; border: 1px solid #ddd;">
          <p style="white-space: pre-line;">${message}</p>
        </div>
        <p style="margin-top: 30px; font-size: 14px; color: #666;">
          This message was sent from your portfolio contact form.
        </p>
      </div>
    `;

    const requestMail = mailjetClient
      .post("send", { version: "v3.1" })
      .request({
        Messages: [
          {
            From: {
              Email: "portfolio@timilsinaprashant.com.np", // your verified Mailjet sender
              Name: "Portfolio Contact",
            },
            To: [
              {
                Email: "prashanttimilsina16@gmail.com", // your inbox
                Name: "Prashant Timilsina",
              },
            ],
            ReplyTo: {
              Email: visitorEmail, // allows replying directly to the visitor
              Name: visitorName || visitorEmail,
            },
            Subject: subject,
            TextPart: `New message from ${
              visitorName || "N/A"
            } <${visitorEmail}>:\n\n${message}`,
            HTMLPart: htmlPart,
          },
        ],
      });

    const result = await requestMail;
    return result.body;
  } catch (error) {
    console.error("Email sending failed:", error);
    throw error;
  }
}
