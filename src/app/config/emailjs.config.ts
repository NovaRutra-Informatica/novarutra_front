/**
 * EmailJS credentials (https://dashboard.emailjs.com).
 *
 * The public key is meant to be shipped in client-side code — it is not a
 * secret. What protects it is the allow-list: in the EmailJS dashboard, under
 * Account → Security, restrict requests to `novarutra.com.br` (and
 * `localhost` while developing) so the key cannot be reused from other sites.
 *
 * The template referenced by `templateId` must declare these variables:
 *   {{from_name}}  {{from_email}}  {{company}}  {{message}}
 */
export const EMAILJS_CONFIG = {
    serviceId: 'SEU_SERVICE_ID',
    templateId: 'SEU_TEMPLATE_ID',
    publicKey: 'SUA_PUBLIC_KEY',
} as const;
