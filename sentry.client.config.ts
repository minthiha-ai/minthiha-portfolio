// This file configures the initialization of Sentry on the client.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from "@sentry/nextjs";

function initSentry() {
    if (typeof window === "undefined") return;
    try {
        Sentry.init({
            dsn: "https://c4317efc6b378792f3ccd12f8c38c93d@o4508155092008960.ingest.us.sentry.io/4508155097251840",
            integrations: [
                Sentry.replayIntegration({
                    maskAllText: true,
                    blockAllMedia: true,
                }),
                Sentry.feedbackIntegration({
                    colorScheme: "dark",
                }),
            ],
            tracesSampleRate: process.env.NODE_ENV === "production" ? 0.1 : 1,
            replaysSessionSampleRate: 0.1,
            replaysOnErrorSampleRate: 1.0,
            debug: false,
        });
    } catch (_) {
        // Prevent Sentry init from crashing the app (e.g. static export / missing __NEXT_DATA__.sentry)
    }
}

initSentry();
