import {
    AngularNodeAppEngine,
    createNodeRequestHandler,
    isMainModule,
    writeResponseToNodeResponse,
} from '@angular/ssr/node';
import express from 'express';
import { join } from 'node:path';

const browserDistFolder = join(import.meta.dirname, '../browser');
const isDev = process.env['NODE_ENV'] !== 'production';

const app = express();
const angularApp = new AngularNodeAppEngine();

// ── Security headers ──────────────────────────────────────────────────────────
app.use((_req, res, next) => {
    const devOrigins = isDev
        ? ' http://localhost:4000 http://localhost:4200'
        : '';

    // Only this domain's assets + the email service when integrated.
    // To add an email provider (e.g. EmailJS, Resend), append its API origin
    // to connect-src below, e.g.: https://api.emailjs.com
    res.setHeader(
        'Content-Security-Policy',
        [
            "default-src 'self'",
            "script-src 'self'",
            "style-src 'self' 'unsafe-inline'",
            "img-src 'self' data:",
            "font-src 'self'",
            `connect-src 'self' https://novarutra.com.br${devOrigins}`,
            "frame-src 'none'",
            "object-src 'none'",
            "base-uri 'self'",
            "form-action 'self'",
            "worker-src 'none'",
            "manifest-src 'self'",
        ].join('; '),
    );

    res.setHeader('X-Content-Type-Options', 'nosniff');
    res.setHeader('X-Frame-Options', 'DENY');
    res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
    res.setHeader(
        'Permissions-Policy',
        'camera=(), microphone=(), geolocation=(), interest-cohort=()',
    );

    next();
});

// ── Static files ──────────────────────────────────────────────────────────────
app.use(
    express.static(browserDistFolder, {
        maxAge: '1y',
        index: false,
        redirect: false,
    }),
);

// ── Angular SSR ───────────────────────────────────────────────────────────────
app.use((req, res, next) => {
    angularApp
        .handle(req)
        .then((response) =>
            response ? writeResponseToNodeResponse(response, res) : next(),
        )
        .catch(next);
});

if (isMainModule(import.meta.url) || process.env['pm_id']) {
    const port = process.env['PORT'] || 4000;
    app.listen(port, (error) => {
        if (error) {
            throw error;
        }
        console.log(
            `Node Express server listening on http://localhost:${port}`,
        );
    });
}

export const reqHandler = createNodeRequestHandler(app);
