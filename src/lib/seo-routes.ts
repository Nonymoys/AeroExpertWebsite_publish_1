/**
 * Auto-synced registry of publicly-crawlable routes. Consumed by the
 * /sitemap.xml handler in src/server/entry.ts.
 *
 * DO NOT add or remove paths by hand. Static paths are mirrored here from
 * src/routes.tsx automatically whenever that file is edited (any manual
 * path edit would be overwritten on the next routes.tsx change). For sync
 * to pick up a route, its `path` must be a literal string starting with "/";
 * template literals and identifier refs are skipped, and dynamic-param routes
 * like "/products/:id" are excluded.
 *
 * The only fields safe to hand-edit are the per-entry metadata below, after a
 * sync:
 * - `priority` (0.0–1.0): Home = 1.0, main sections = 0.8, deep pages = 0.5.
 * - `changefreq` and `lastmod`.
 */

export interface SeoRoute {
  path: string;
  changefreq?:
    | "always"
    | "hourly"
    | "daily"
    | "weekly"
    | "monthly"
    | "yearly"
    | "never";
  priority?: number;
  lastmod?: string;
}

export const seoRoutes: SeoRoute[] = [
  { path: "/", changefreq: "weekly", priority: 1.0 },
  { path: "/about", changefreq: "monthly", priority: 0.8 },
  { path: "/services", changefreq: "monthly", priority: 0.9 },
  { path: "/flight-data-monitoring", changefreq: "monthly", priority: 0.8 },
  { path: "/cybersecurity", changefreq: "monthly", priority: 0.8 },
  { path: "/digital-transformation", changefreq: "monthly", priority: 0.8 },
  { path: "/aviation-technology-consulting", changefreq: "monthly", priority: 0.9 },
  { path: "/commercial-digital-platforms", changefreq: "monthly", priority: 0.8 },
  { path: "/flight-operations-systems", changefreq: "monthly", priority: 0.8 },
  { path: "/airport-technology-solutions", changefreq: "monthly", priority: 0.8 },
  { path: "/it-infrastructure-cloud", changefreq: "monthly", priority: 0.8 },
  { path: "/project-management-office", changefreq: "monthly", priority: 0.8 },
  { path: "/procurement-advisory", changefreq: "monthly", priority: 0.8 },
  { path: "/passenger-service-system-consulting", changefreq: "monthly", priority: 0.9 },
  { path: "/pss-migration-consulting", changefreq: "monthly", priority: 0.8 },
  { path: "/departure-control-system-consulting", changefreq: "monthly", priority: 0.8 },
  { path: "/airline-revenue-management-consulting", changefreq: "monthly", priority: 0.8 },
  { path: "/airline-ndc-one-order-consulting", changefreq: "monthly", priority: 0.8 },
  { path: "/efb-consulting", changefreq: "monthly", priority: 0.8 },
  { path: "/airline-occ-consulting", changefreq: "monthly", priority: 0.8 },
  { path: "/flight-planning-system-consulting", changefreq: "monthly", priority: 0.8 },
  { path: "/insights", changefreq: "weekly", priority: 0.8 },
  { path: "/insights/how-to-choose-a-passenger-service-system", changefreq: "monthly", priority: 0.7 },
  { path: "/insights/pss-migration-timeline-risks-best-practices", changefreq: "monthly", priority: 0.7 },
  { path: "/insights/efb-implementation-gcaa-approval-uae", changefreq: "monthly", priority: 0.7 },
  { path: "/insights/why-airlines-need-flight-data-monitoring", changefreq: "monthly", priority: 0.7 },
  { path: "/insights/aviation-cybersecurity-uae-regulations-risks-readiness", changefreq: "monthly", priority: 0.7 },
  { path: "/insights/smart-airport-technology-trends-middle-east", changefreq: "monthly", priority: 0.7 },
  { path: "/insights/independent-vs-vendor-aviation-it-procurement", changefreq: "monthly", priority: 0.7 },
  { path: "/insights/airline-digital-transformation-roadmap", changefreq: "monthly", priority: 0.7 },
  { path: "/industries/airlines", changefreq: "monthly", priority: 0.7 },
  { path: "/industries/regional-airlines", changefreq: "monthly", priority: 0.7 },
  { path: "/industries/airports", changefreq: "monthly", priority: 0.7 },
  { path: "/industries", changefreq: "monthly", priority: 0.8 },
  { path: "/consulting-approach", changefreq: "monthly", priority: 0.8 },
  { path: "/contact", changefreq: "monthly", priority: 0.8 },
];
