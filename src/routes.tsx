import { RouteObject } from 'react-router';
import { lazy } from 'react';
import HomePage from './pages/index';
import AboutPage from './pages/about';
import ServicesPage from './pages/services';
import FlightDataMonitoringPage from './pages/flight-data-monitoring';
import CybersecurityPage from './pages/cybersecurity';
import DigitalTransformationPage from './pages/digital-transformation';
import IndustriesPage from './pages/industries';
import ConsultingApproachPage from './pages/consulting-approach';
import ContactPage from './pages/contact';
// Service pages
import AviationTechPage from './pages/aviation-technology-consulting';
import CommercialDigitalPage from './pages/commercial-digital-platforms';
import FlightOpsPage from './pages/flight-operations-systems';
import AirportTechPage from './pages/airport-technology-solutions';
import ITInfrastructurePage from './pages/it-infrastructure-cloud';
import ProjectManagementPage from './pages/project-management-office';
import ProcurementAdvisoryPage from './pages/procurement-advisory';
// Phase 4: Specialist landing pages
import PSSConsultingPage from './pages/passenger-service-system-consulting';
import PSSMigrationPage from './pages/pss-migration-consulting';
import DCSConsultingPage from './pages/departure-control-system-consulting';
import RevenueManagementPage from './pages/airline-revenue-management-consulting';
import NDCOneOrderPage from './pages/airline-ndc-one-order-consulting';
import EFBConsultingPage from './pages/efb-consulting';
import OCCConsultingPage from './pages/airline-occ-consulting';
import FlightPlanningPage from './pages/flight-planning-system-consulting';
// Phase 5: Insights + Industry landing pages
import InsightsPage from './pages/insights';
import IndustriesAirlinesPage from './pages/industries/airlines';
import IndustriesRegionalAirlinesPage from './pages/industries/regional-airlines';
import IndustriesAirportsPage from './pages/industries/airports';
// Insights articles
import ArticlePSSSelection from './pages/insights/how-to-choose-a-passenger-service-system';
import ArticlePSSMigration from './pages/insights/pss-migration-timeline-risks-best-practices';
import ArticleEFBGCAA from './pages/insights/efb-implementation-gcaa-approval-uae';
import ArticleFDM from './pages/insights/why-airlines-need-flight-data-monitoring';
import ArticleCybersecurityUAE from './pages/insights/aviation-cybersecurity-uae-regulations-risks-readiness';
import ArticleSmartAirport from './pages/insights/smart-airport-technology-trends-middle-east';
import ArticleIndependentVsVendor from './pages/insights/independent-vs-vendor-aviation-it-procurement';
import ArticleDigitalTransformationRoadmap from './pages/insights/airline-digital-transformation-roadmap';
// Eager import so renderToString doesn't hit a Suspense boundary on 404 routes
import ProdNotFoundPage from './pages/_404';

const NotFoundPage = ProdNotFoundPage;

export const routes: RouteObject[] = [
  { path: '/', element: <HomePage /> },
  { path: '/about', element: <AboutPage /> },
  { path: '/services', element: <ServicesPage /> },
  // Core service pages
  { path: '/flight-data-monitoring', element: <FlightDataMonitoringPage /> },
  { path: '/cybersecurity', element: <CybersecurityPage /> },
  { path: '/digital-transformation', element: <DigitalTransformationPage /> },
  { path: '/aviation-technology-consulting', element: <AviationTechPage /> },
  { path: '/commercial-digital-platforms', element: <CommercialDigitalPage /> },
  { path: '/flight-operations-systems', element: <FlightOpsPage /> },
  { path: '/airport-technology-solutions', element: <AirportTechPage /> },
  { path: '/it-infrastructure-cloud', element: <ITInfrastructurePage /> },
  { path: '/project-management-office', element: <ProjectManagementPage /> },
  { path: '/procurement-advisory', element: <ProcurementAdvisoryPage /> },
  // Specialist landing pages
  { path: '/passenger-service-system-consulting', element: <PSSConsultingPage /> },
  { path: '/pss-migration-consulting', element: <PSSMigrationPage /> },
  { path: '/departure-control-system-consulting', element: <DCSConsultingPage /> },
  { path: '/airline-revenue-management-consulting', element: <RevenueManagementPage /> },
  { path: '/airline-ndc-one-order-consulting', element: <NDCOneOrderPage /> },
  { path: '/efb-consulting', element: <EFBConsultingPage /> },
  { path: '/airline-occ-consulting', element: <OCCConsultingPage /> },
  { path: '/flight-planning-system-consulting', element: <FlightPlanningPage /> },
  // Insights
  { path: '/insights', element: <InsightsPage /> },
  // Insights articles
  { path: '/insights/how-to-choose-a-passenger-service-system', element: <ArticlePSSSelection /> },
  { path: '/insights/pss-migration-timeline-risks-best-practices', element: <ArticlePSSMigration /> },
  { path: '/insights/efb-implementation-gcaa-approval-uae', element: <ArticleEFBGCAA /> },
  { path: '/insights/why-airlines-need-flight-data-monitoring', element: <ArticleFDM /> },
  { path: '/insights/aviation-cybersecurity-uae-regulations-risks-readiness', element: <ArticleCybersecurityUAE /> },
  { path: '/insights/smart-airport-technology-trends-middle-east', element: <ArticleSmartAirport /> },
  { path: '/insights/independent-vs-vendor-aviation-it-procurement', element: <ArticleIndependentVsVendor /> },
  { path: '/insights/airline-digital-transformation-roadmap', element: <ArticleDigitalTransformationRoadmap /> },
  // Industry landing pages
  { path: '/industries/airlines', element: <IndustriesAirlinesPage /> },
  { path: '/industries/regional-airlines', element: <IndustriesRegionalAirlinesPage /> },
  { path: '/industries/airports', element: <IndustriesAirportsPage /> },
  // Core pages
  { path: '/industries', element: <IndustriesPage /> },
  { path: '/consulting-approach', element: <ConsultingApproachPage /> },
  { path: '/contact', element: <ContactPage /> },
  { path: '*', element: <NotFoundPage /> },
];

export type Path =
  | '/'
  | '/about'
  | '/services'
  | '/flight-data-monitoring'
  | '/cybersecurity'
  | '/digital-transformation'
  | '/aviation-technology-consulting'
  | '/commercial-digital-platforms'
  | '/flight-operations-systems'
  | '/airport-technology-solutions'
  | '/it-infrastructure-cloud'
  | '/project-management-office'
  | '/procurement-advisory'
  | '/passenger-service-system-consulting'
  | '/pss-migration-consulting'
  | '/departure-control-system-consulting'
  | '/airline-revenue-management-consulting'
  | '/airline-ndc-one-order-consulting'
  | '/efb-consulting'
  | '/airline-occ-consulting'
  | '/flight-planning-system-consulting'
  | '/insights'
  | '/industries/airlines'
  | '/industries/regional-airlines'
  | '/industries/airports'
  | '/industries'
  | '/consulting-approach'
  | '/contact';

export type Params = Record<string, string | undefined>;
