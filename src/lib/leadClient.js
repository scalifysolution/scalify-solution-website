import emailjs from "@emailjs/browser";

export async function sendLead(payload) {
  const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "";
  const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "";
  const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "";

  if (serviceId && templateId && publicKey) {
    await emailjs.send(serviceId, templateId, payload, { publicKey });
    return { ok: true, via: "emailjs" };
  }

  const to = "sales@scalifysolutions.com";
  const subj = encodeURIComponent(payload.subject || "New lead");
  const body = encodeURIComponent(
    [
      "New inquiry (Scalify website)",
      "",
      `Name: ${payload.name}`,
      `Phone: ${payload.phone}`,
      `Email: ${payload.email}`,
      `Subject: ${payload.subject}`,
      payload.page ? `Page: ${payload.page}` : "",
      "",
      payload.message ? `Message:\n${payload.message}` : "",
    ]
      .filter(Boolean)
      .join("\n")
  );

  window.location.href = `mailto:${to}?subject=${subj}&body=${body}`;
  return { ok: true, via: "mailto" };
}

