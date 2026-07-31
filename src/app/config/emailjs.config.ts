/**
 * EmailJS credentials (https://dashboard.emailjs.com).
 *
 * Only the PUBLIC key belongs here. This site is a static bundle on GitHub
 * Pages: everything in this file ships to the browser and is readable by
 * anyone via "view source". That is fine for the public key — it is designed
 * to be published — but the private key must never appear in this project.
 *
 * The private key (accessToken) authenticates server-to-server calls to the
 * EmailJS REST API and BYPASSES the domain allow-list. Published in a bundle,
 * it would let anyone send mail from this account from anywhere, with no
 * origin check to stop them. There is no backend here to hold it safely.
 *
 * What actually protects the public key is the allow-list: dashboard →
 * Account → Security → add `novarutra.com.br` and `localhost`, and enable
 * rate limiting while you are there.
 *
 * The template referenced by `templateId` must declare these variables:
 *   {{from_name}}  {{from_email}}  {{company}}  {{message}}
 */
export const EMAILJS_CONFIG = {
    serviceId: 'service_rw78y0m',
    templateId: 'template_wvx27pj',
    publicKey: 'yBtTVRQzx1ppjdH7w',
} as const;
