import { SESClient, SendEmailCommand } from "@aws-sdk/client-ses";

// Initialize SES client
const sesClient = new SESClient({
  region: process.env.AWS_REGION || "us-east-1",
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
  },
});

const SENDER_EMAIL = process.env.SES_FROM_EMAIL || process.env.EMAIL_FROM || "noreply@colate.io";

/**
 * Send magic link email for authentication
 * @param {string} toEmail - Recipient email
 * @param {string} url - Magic link URL
 */
export const sendMagicLinkEmail = async (toEmail: string, url: string) => {
  try {
    // HTML email template
    const htmlBody = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Login to Aumbit</title>
      </head>
      <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
        <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; border-radius: 10px; text-align: center; margin-bottom: 30px;">
          <h1 style="color: white; margin: 0; font-size: 28px;">
            Aumbit Admin Portal
          </h1>
        </div>
        
        <div style="background: #f8fafc; padding: 25px; border-radius: 10px;">
          <h2 style="color: #1e40af; margin-top: 0;">Sign in to your account</h2>
          <p>Click the button below to sign in to your Aumbit admin account:</p>
          
          <div style="text-align: center; margin: 30px 0;">
            <a href="${url}" style="display: inline-block; padding: 12px 30px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; text-decoration: none; border-radius: 6px; font-weight: bold;">
              Sign in to Aumbit
            </a>
          </div>
          
          <p style="color: #6b7280; font-size: 14px;">
            This link will expire in 10 minutes. If you didn't request this email, you can safely ignore it.
          </p>
        </div>
        
        <div style="margin-top: 30px; text-align: center; color: #6b7280; font-size: 14px;">
          <p>© ${new Date().getFullYear()} Aumbit. All rights reserved.</p>
        </div>
      </body>
      </html>
    `;

    const textBody = `
Sign in to Aumbit Admin Portal

Click this link to sign in to your account:
${url}

This link will expire in 10 minutes.

If you didn't request this email, you can safely ignore it.
    `;

    // Send email using AWS SES
    const params = {
      Source: SENDER_EMAIL,
      Destination: {
        ToAddresses: [toEmail],
      },
      Message: {
        Subject: {
          Data: "Sign in to Aumbit Admin Portal",
          Charset: "UTF-8",
        },
        Body: {
          Html: {
            Data: htmlBody,
            Charset: "UTF-8",
          },
          Text: {
            Data: textBody,
            Charset: "UTF-8",
          },
        },
      },
    };

    const command = new SendEmailCommand(params);
    const result = await sesClient.send(command);

    console.log("Magic link email sent successfully:", result.MessageId);
    return { success: true, messageId: result.MessageId };
  } catch (error) {
    console.error("Email sending error:", error);
    return {
      success: false,
      error: error instanceof Error ? error.message : "Unknown error",
    };
  }
};

/**
 * Send general email
 * @param {string} toEmail - Recipient email
 * @param {string} subject - Email subject
 * @param {string} htmlBody - HTML email body
 * @param {string} textBody - Plain text email body
 */
export const sendEmail = async (
  toEmail: string,
  subject: string,
  htmlBody: string,
  textBody?: string
) => {
  try {
    // Send email using AWS SES
    const params = {
      Source: SENDER_EMAIL,
      Destination: {
        ToAddresses: [toEmail],
      },
      Message: {
        Subject: {
          Data: subject,
          Charset: "UTF-8",
        },
        Body: {
          Html: {
            Data: htmlBody,
            Charset: "UTF-8",
          },
          ...(textBody && {
            Text: {
              Data: textBody,
              Charset: "UTF-8",
            },
          }),
        },
      },
    };

    const command = new SendEmailCommand(params);
    const result = await sesClient.send(command);

    console.log("Email sent successfully:", result.MessageId);
    return { success: true, messageId: result.MessageId };
  } catch (error) {
    console.error("Email sending error:", error);
    return {
      success: false,
      error: error instanceof Error ? error.message : "Unknown error",
    };
  }
};
