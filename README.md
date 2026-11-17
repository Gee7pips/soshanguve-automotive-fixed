# Soshanguve Engineering School Of Specialisation

Premium school website for Soshanguve Engineering School Of Specialisation.

## Preview

The `preview/school-site-final` branch is the final validation branch for the Vercel preview deployment. It contains the verified 2025 matric achievement, premium Programs experience, production-ready footer, and globally mounted floating WhatsApp, phone and Gmail contact controls.

## Contact architecture

Visitor enquiries open WhatsApp or Gmail with prefilled details for the visitor to send manually. No database, Supabase, Resend, administration dashboard, or automatic message submission is used.

## Production hygiene

The public contact details retain both school email inboxes. Admissions dates are linked to the current Gauteng Department of Education guidance. Legacy `/learn-more` and `/staff` routes receive permanent, relevant redirects. Privacy Policy and Terms of Use pages are included, and the sitemap contains live canonical routes only.

## Google Search preservation

The canonical host remains `https://www.sosha-automotive.org`. Existing public page paths are retained wherever possible. See [SEO_MIGRATION_CHECKLIST.md](./SEO_MIGRATION_CHECKLIST.md) for the old-route map, Search Console safeguards, launch tests and monitoring requirements. Do not change DNS, Vercel custom-domain assignments, or the live project until the checklist's launch gates are met.

## Deployment

Use the preview branch for QA. Production release requires review and merge of PR #9; the custom domain cutover is a separate, later action and is not part of this branch update.
