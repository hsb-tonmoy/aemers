import sgMail from '@sendgrid/mail';

sgMail.setApiKey(import.meta.env.VITE_SENDGRID_API_KEY);

export const POST = async ({ request }) => {
	const { name, email, phone, service, message } = await request.json();

	const msg = {
		to: 'contact@aemers.com',
		from: 'no-reply@aemers.com',
		subject: `Message from ${name} about ${service}`,
		text: message,
		html: `<strong>Name:</strong> ${name}<br/><strong>Email:</strong> ${email}<br/><strong>Phone:</strong> ${phone}<br/><strong>Service:</strong> ${service}<br/><strong>Message:</strong> ${message}`
	};

	try {
		sgMail.send(msg);
		return new Response('Message sent', { status: 200 });
	} catch (error) {
		console.error(error);
	}

	return new Response('Message not sent', { status: 400 });
};
