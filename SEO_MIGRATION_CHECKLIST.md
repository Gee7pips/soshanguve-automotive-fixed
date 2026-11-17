# Google Search Preservation and Hosting Migration Checklist

**Project:** Soshanguve Engineering School Of Specialisation  
**Preferred public URL:** https://www.sosha-automotive.org  
**Preferred canonical URL:** https://www.sosha-automotive.org/  
**Release branch:** `preview/school-site-final`  
**Status:** preparation only — no custom-domain or DNS change is authorised by this checklist

## 1. Migration principle

This release is a website redesign and hosting/project handoff while keeping the existing public hostname. The goal is to keep the same page URLs wherever possible, not to launch a new domain.

- Keep `https://www.sosha-automotive.org` as the canonical host.
- Keep the apex `https://sosha-automotive.org` redirecting to the www host.
- Keep HTTPS as the only public protocol.
- Do not change domain registration, nameservers, DNS records, or Vercel custom-domain assignments until the separate cutover is approved.
- Do not submit a Google Search Console Change of Address request for this hosting change. Google's tool is for moves to a different domain or subdomain; it is not needed when the user-visible URL stays the same.
- Do not remove the old Vercel project or its last working deployment. It is the rollback target until the new deployment is stable.

Google guidance: [Changing your web hosting with no URL changes](https://developers.google.com/search/docs/crawling-indexing/site-move-no-url-changes) and [Change of Address tool — when not to use it](https://support.google.com/webmasters/answer/9370220).

## 2. Legacy URL inventory and mapping

The previous `main` branch exposed these route paths. The public Google search results checked during this QA also showed the existing `/academics` and `/achievements` pages.

| Existing path | Release path / action | SEO handling |
|---|---|---|
| `/` | `/` | Keep the homepage path |
| `/about` | `/about` | Keep the path |
| `/academics` | `/academics` | Keep the path |
| `/achievements` | `/achievements` | Keep the path |
| `/activities` | `/activities` | Keep the path |
| `/apply` | `/apply` | Keep the path; update admissions dates from GDE |
| `/contact` | `/contact` | Keep the path and both official email contacts |
| `/documents` | `/documents` | Keep the path and provide useful current information |
| `/partnerships` | `/partnerships` | Keep the path |
| `/programs` | `/programs` | Keep the path |
| `/support-us` | `/support-us` | Keep the path |
| `/learn-more` | `/about` | Permanent redirect (already configured) |
| `/staff` | `/about` | Permanent redirect; former staff page was explicitly an under-construction placeholder |
 
New routes such as `/innovations`, `/privacy`, and `/terms` are additional pages; they do not replace the existing core paths.

This is a repository and public-search-derived inventory, not a complete Search Console export. Before cutover, compare this map against the full list of indexed URLs, top landing pages, and inbound-link URLs from the school's Search Console property. Add any additional discovered legacy URL to the map before release. Do not redirect unrelated old pages to the homepage; use a close equivalent or preserve the page.

Google guidance: [Site moves and URL mapping](https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes) and [301 redirects and Google Search](https://developers.google.com/search/docs/crawling-indexing/301-redirects).

## 3. Technical SEO release checks

- [x] Global metadata uses `https://www.sosha-automotive.org` as its metadata base and canonical homepage.
- [x] Route metadata uses the same www hostname; the Documents canonical was normalised during QA.
- [x] Sitemap URLs use the www canonical host and include current live public routes.
- [x] `robots.txt` allows public crawling and advertises the canonical sitemap.
- [x] The site does not intentionally add a site-wide `noindex` directive.
- [x] Existing high-value paths `/academics` and `/achievements` are retained.
- [x] Legacy `/learn-more` and `/staff` paths have permanent redirects.
- [ ] Re-run route/redirect HTTP tests against the final production deployment after the later domain cutover.
- [ ] Verify canonical tags, sitemap, robots, response codes, and structured data using Google's URL Inspection / Rich Results tooling after cutover.
- [ ] Confirm social preview image URLs load and are publicly accessible from the final deployment.

## 4. Search Console baseline — do before cutover

The website repository does not contain Search Console performance or indexing data. The account owner must capture it before the production switch:

1. Confirm access to the Search Console Domain property for `sosha-automotive.org` and the URL-prefix property for `https://www.sosha-automotive.org/` if present.
2. Export or record the last 16 months of Search results performance: clicks, impressions, CTR, average position, queries, pages, countries and devices.
3. Record the current Page indexing report, sitemap processing status, manual actions, security issues and any prominent crawl errors.
4. Export top landing pages and URLs with external links; check these URLs against the route map above.
5. Inspect the homepage and high-traffic URLs with URL Inspection and note their indexed canonical.
6. Keep the old Search Console property/data and do not use the Removals tool to hide old URLs during a same-host redesign.

**Do not claim Google visibility is preserved solely because the site builds successfully.** The Search Console baseline and post-cutover crawl checks are necessary to verify that.

## 5. Domain cutover gate — separate approval required

Before assigning the live domain to the new Vercel project:

- The reviewed release must have a successful production-target build using production environment variables.
- The production-target deployment must be tested on its Vercel deployment URL before it receives the custom domain.
- Run an automated smoke test against every mapped path, including redirect targets.
- Confirm the new Vercel project has no preview-only password/SSO behavior on the custom-domain production traffic.
- Confirm both `www` and apex domain behaviours, TLS certificates, and the apex-to-www redirect are correct.
- Have the previous Vercel project ID and working deployment URL ready for a fast rollback.
- Move the custom domains only as an explicit, separately approved action. Keep the old project and deployment.

Because the visible URL is staying on the same domain, this is a hosting/project switch rather than a domain-name migration. Google recommends preparing and testing the new hosting, switching the domain only when ready, monitoring traffic/crawling, and shutting down the old hosting only after the new copy is working correctly.

Google guidance: [Changing your web hosting with no URL changes](https://developers.google.com/search/docs/crawling-indexing/site-move-no-url-changes).

## 6. After cutover — monitoring

- Verify that the canonical homepage and each mapped page returns the intended status code.
- Verify every redirect resolves directly to its final destination (no chains or loops).
- Fetch `https://www.sosha-automotive.org/robots.txt` and `https://www.sosha-automotive.org/sitemap.xml`.
- Submit or refresh the canonical sitemap in Search Console; don't submit preview URLs.
- Use URL Inspection on the homepage, `/academics`, `/achievements`, `/programs`, `/apply`, `/contact`, and any other top landing pages identified in the baseline.
- Monitor Page indexing, crawl stats, Googlebot errors and Search performance weekly for at least the first month. Compare clicks/impressions with the pre-cutover baseline.
- Keep any necessary legacy path redirects for at least one year; ideally keep them for as long as old links and search results still exist.

## 7. Current status

- The public domain and live Vercel project have not been changed.
- No DNS records or nameservers have been changed.
- No Search Console Change of Address or URL removal requests have been submitted.
- Search Console baseline data has not been accessed by this workflow; the account owner still needs to provide/verify it before the final production cutover.
