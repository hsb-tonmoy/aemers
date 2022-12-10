import type { APIRoute } from "astro";

import sgMail from "@sendgrid/mail";

sgMail.setApiKey(import.meta.env.SENDGRID_API_KEY);

export const post: APIRoute = async ({ request }) => {
  const { name, email, phone, service, message } = await request.json();

  const msg = {
    to: "contact@aemers.com",
    from: "no-reply@aemers.com",
    subject: `Message from ${name} about ${service}`,
    text: message,
    html: `<strong>Name:</strong> ${name}<br/><strong>Email:</strong> ${email}<br/><strong>Phone:</strong> ${phone}<br/><strong>Service:</strong> ${service}<br/><strong>Message:</strong> ${message}`,
  };

  sgMail
    .send(msg)
    .then(() => {
      return new Response(
        JSON.stringify({
          success: true,
        }),
        {
          status: 200,
        }
      );
    })
    .catch((error) => {
      console.error(error);
      return new Response("Something went wrong", { status: 400 });
    });
};
