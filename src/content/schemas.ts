import { z } from 'zod';
const faqItem = z.object({
  "id": z.string(),
  "q": z.string(),
  "a": z.string()
});
export const schemas = {
  site: z.object({
    "name": z.string(),
    "tagline": z.string(),
    "description": z.string(),
    "location": z.string(),
    "email": z.string(),
    "nav": z.array(z.object({
      "label": z.string(),
      "href": z.string(),
      "id": z.string()
    }))
  }),
  pages: {
    home: z.object({
      "hero": z.object({
        "headline": z.string(),
        "subheadline": z.string(),
        "body": z.string(),
        "cta_primary": z.string(),
        "cta_secondary": z.string()
      }),
      "expertise": z.object({
        "heading": z.string(),
        "body": z.string()
      }),
      "uae_it": z.object({
        "heading": z.string(),
        "body": z.string(),
        "items": z.array(z.object({
          "id": z.string(),
          "text": z.string()
        }))
      }),
      "services": z.object({
        "heading": z.string(),
        "items": z.array(z.object({
          "id": z.string(),
          "title": z.string(),
          "description": z.string(),
          "href": z.string()
        }))
      }),
      "why": z.object({
        "heading": z.string(),
        "items": z.array(z.object({
          "id": z.string(),
          "title": z.string(),
          "description": z.string()
        }))
      }),
      "industries": z.object({
        "heading": z.string(),
        "items": z.array(z.object({
          "id": z.string(),
          "name": z.string()
        }))
      }),
      "approach": z.object({
        "heading": z.string(),
        "steps": z.array(z.object({
          "id": z.string(),
          "number": z.string(),
          "title": z.string(),
          "description": z.string()
        }))
      }),
      "cta": z.object({
        "heading": z.string(),
        "button": z.string()
      })
    }),
    consulting_approach: z.object({
      "hero": z.object({
        "eyebrow": z.string(),
        "heading": z.string(),
        "body": z.string()
      }),
      "principles": z.array(z.object({
        "id": z.string(),
        "title": z.string(),
        "description": z.string()
      })),
      "steps": z.array(z.object({
        "id": z.string(),
        "number": z.string(),
        "title": z.string(),
        "description": z.string()
      }))
    }),
    fare_position: z.object({
      "hero": z.object({
        "eyebrow": z.string(),
        "heading": z.string(),
        "body": z.string()
      }),
      "howItWorks": z.object({
        "heading": z.string(),
        "steps": z.array(z.object({
          "id": z.string(),
          "number": z.string(),
          "title": z.string(),
          "description": z.string()
        }))
      })
    }),
    fare_builder: z.object({
      "hero": z.object({
        "eyebrow": z.string(),
        "headline_line1": z.string(),
        "headline_line2": z.string(),
        "lead": z.string()
      }),
      "how_it_works": z.object({
        "eyebrow": z.string(),
        "heading": z.string(),
        "steps": z.array(z.object({
          "id": z.string(),
          "num": z.string(),
          "heading": z.string(),
          "body": z.string()
        }))
      }),
      "access": z.object({
        "eyebrow": z.string(),
        "heading": z.string(),
        "intro": z.string(),
        "success_title": z.string(),
        "success_body": z.string(),
        "footnote": z.string()
      })
    }),
    services: z.object({
      "serviceGroups": z.array(z.object({
        "heading": z.string(),
        "items": z.array(z.object({
          "label": z.string(),
          "href": z.string(),
          "description": z.string(),
          "id": z.string()
        })),
        "id": z.string()
      }))
    }),
    airport_technology_solutions: z.object({
      "eyebrow": z.string(),
      "title": z.string(),
      "intro": z.string(),
      "pax_heading": z.string(),
      "pax_body": z.string(),
      "cuss_heading": z.string(),
      "cuss_body": z.string(),
      "kiosk_heading": z.string(),
      "kiosk_body": z.string(),
      "baggage_heading": z.string(),
      "baggage_body": z.string(),
      "fids_heading": z.string(),
      "fids_body": z.string(),
      "api_heading": z.string(),
      "api_body": z.string(),
      "integration_heading": z.string(),
      "integration_body": z.string(),
      "who_heading": z.string(),
      "who": z.string(),
      "closing": z.string(),
      "faq_heading": z.string().optional(),
      "faq": z.array(faqItem).optional()
    }),
    aviation_technology_consulting: z.object({
      "eyebrow": z.string(),
      "title": z.string(),
      "intro": z.string(),
      "pss_heading": z.string(),
      "pss_body": z.string(),
      "dcs_heading": z.string(),
      "dcs_body": z.string(),
      "rm_heading": z.string(),
      "rm_body": z.string(),
      "ndc_heading": z.string(),
      "ndc_body": z.string(),
      "cargo_heading": z.string(),
      "cargo_body": z.string(),
      "selection_heading": z.string(),
      "selection_body": z.string(),
      "who_heading": z.string(),
      "who": z.string(),
      "closing": z.string(),
      "faq_heading": z.string().optional(),
      "faq": z.array(faqItem).optional()
    }),
    flight_operations_systems: z.object({
      "eyebrow": z.string(),
      "title": z.string(),
      "intro": z.string(),
      "efb_heading": z.string(),
      "efb_body": z.string(),
      "fp_heading": z.string(),
      "fp_body": z.string(),
      "occ_heading": z.string(),
      "occ_body": z.string(),
      "crew_heading": z.string(),
      "crew_body": z.string(),
      "tech_heading": z.string(),
      "tech_body": z.string(),
      "fuel_heading": z.string(),
      "fuel_body": z.string(),
      "who_heading": z.string(),
      "who": z.string(),
      "closing": z.string(),
      "faq_heading": z.string().optional(),
      "faq": z.array(faqItem).optional()
    }),
    flight_data_monitoring: z.object({
      "eyebrow": z.string(),
      "title": z.string(),
      "intro": z.string(),
      "workflow_heading": z.string(),
      "workflow_body": z.string(),
      "workflow_steps": z.array(z.object({
        "id": z.string(),
        "step": z.string(),
        "desc": z.string()
      })),
      "capabilities_heading": z.string(),
      "capabilities": z.array(z.object({
        "id": z.string(),
        "text": z.string()
      })).optional(),
      "subsections": z.array(z.object({
        "id": z.string(),
        "heading": z.string(),
        "items": z.array(z.object({
          "id": z.string(),
          "text": z.string()
        }))
      })).optional(),
      "who_heading": z.string(),
      "who": z.string(),
      "closing": z.string(),
      "faq_heading": z.string().optional(),
      "faq": z.array(faqItem).optional()
    }),
    it_infrastructure_cloud: z.object({
      "eyebrow": z.string(),
      "title": z.string(),
      "intro": z.string(),
      "capabilities_heading": z.string(),
      "capabilities": z.array(z.object({
        "id": z.string(),
        "text": z.string()
      })),
      "sections": z.array(z.object({
        "id": z.string(),
        "heading": z.string(),
        "body": z.string()
      })),
      "who_heading": z.string(),
      "who": z.string(),
      "closing": z.string(),
      "faq_heading": z.string().optional(),
      "faq": z.array(faqItem).optional()
    }),
    cybersecurity: z.object({
      "eyebrow": z.string(),
      "title": z.string(),
      "intro": z.string(),
      "risk_heading": z.string(),
      "risk_body": z.string(),
      "maturity_heading": z.string(),
      "maturity_body": z.string(),
      "governance_heading": z.string(),
      "governance_body": z.string(),
      "incident_heading": z.string(),
      "incident_body": z.string(),
      "compliance_heading": z.string(),
      "compliance_body": z.string(),
      "who_heading": z.string(),
      "who": z.string(),
      "closing": z.string(),
      "faq_heading": z.string().optional(),
      "faq": z.array(faqItem).optional()
    }),
    commercial_digital_platforms: z.object({
      "eyebrow": z.string(),
      "title": z.string(),
      "intro": z.string(),
      "capabilities_heading": z.string(),
      "capabilities": z.array(z.object({
        "id": z.string(),
        "text": z.string()
      })),
      "who_heading": z.string(),
      "who": z.string(),
      "closing": z.string(),
      "faq_heading": z.string().optional(),
      "faq": z.array(faqItem).optional()
    }),
    digital_transformation: z.object({
      "eyebrow": z.string(),
      "title": z.string(),
      "intro": z.string(),
      "maturity_heading": z.string(),
      "maturity_body": z.string(),
      "roadmap_heading": z.string(),
      "roadmap_body": z.string(),
      "legacy_heading": z.string(),
      "legacy_body": z.string(),
      "data_heading": z.string(),
      "data_body": z.string(),
      "ai_heading": z.string(),
      "ai_body": z.string(),
      "automation_heading": z.string(),
      "automation_body": z.string(),
      "governance_heading": z.string(),
      "governance_body": z.string(),
      "who_heading": z.string(),
      "who": z.string(),
      "closing": z.string(),
      "faq_heading": z.string().optional(),
      "faq": z.array(faqItem).optional()
    }),
    project_management_office: z.object({
      "eyebrow": z.string(),
      "title": z.string(),
      "intro": z.string(),
      "governance_heading": z.string(),
      "governance_body": z.string(),
      "vendor_heading": z.string(),
      "vendor_body": z.string(),
      "rfp_heading": z.string(),
      "rfp_body": z.string(),
      "risk_heading": z.string(),
      "risk_body": z.string(),
      "testing_heading": z.string(),
      "testing_body": z.string(),
      "cutover_heading": z.string(),
      "cutover_body": z.string(),
      "golive_heading": z.string(),
      "golive_body": z.string(),
      "who_heading": z.string(),
      "who": z.string(),
      "closing": z.string(),
      "faq_heading": z.string().optional(),
      "faq": z.array(faqItem).optional()
    }),
    procurement_advisory: z.object({
      "eyebrow": z.string(),
      "title": z.string(),
      "intro": z.string(),
      "requirements_heading": z.string(),
      "requirements_body": z.string(),
      "rfp_heading": z.string(),
      "rfp_body": z.string(),
      "shortlist_heading": z.string(),
      "shortlist_body": z.string(),
      "technical_heading": z.string(),
      "technical_body": z.string(),
      "commercial_heading": z.string(),
      "commercial_body": z.string(),
      "contract_heading": z.string(),
      "contract_body": z.string(),
      "acceptance_heading": z.string(),
      "acceptance_body": z.string(),
      "who_heading": z.string(),
      "who": z.string(),
      "closing": z.string(),
      "faq_heading": z.string().optional(),
      "faq": z.array(faqItem).optional()
    }),
    passenger_service_system_consulting: z.object({
      "eyebrow": z.string(),
      "title": z.string(),
      "intro": z.string(),
      "lifecycle": z.array(z.object({
        "id": z.string(),
        "phase": z.string(),
        "desc": z.string()
      })),
      "who_heading": z.string(),
      "who": z.string(),
      "related_heading": z.string(),
      "closing": z.string(),
      "faq_heading": z.string().optional(),
      "faq": z.array(faqItem).optional()
    }),
    pss_migration_consulting: z.object({
      "eyebrow": z.string(),
      "title": z.string(),
      "intro": z.string(),
      "lifecycle": z.array(z.object({
        "id": z.string(),
        "phase": z.string(),
        "desc": z.string()
      })),
      "who_heading": z.string(),
      "who": z.string(),
      "closing": z.string(),
      "faq_heading": z.string().optional(),
      "faq": z.array(faqItem).optional()
    }),
    departure_control_system_consulting: z.object({
      "eyebrow": z.string(),
      "title": z.string(),
      "intro": z.string(),
      "lifecycle": z.array(z.object({
        "id": z.string(),
        "phase": z.string(),
        "desc": z.string()
      })),
      "who_heading": z.string(),
      "who": z.string(),
      "closing": z.string(),
      "faq_heading": z.string().optional(),
      "faq": z.array(faqItem).optional()
    }),
    airline_revenue_management_consulting: z.object({
      "eyebrow": z.string(),
      "title": z.string(),
      "intro": z.string(),
      "lifecycle": z.array(z.object({
        "id": z.string(),
        "phase": z.string(),
        "desc": z.string()
      })),
      "who_heading": z.string(),
      "who": z.string(),
      "closing": z.string(),
      "faq_heading": z.string().optional(),
      "faq": z.array(faqItem).optional()
    }),
    airline_ndc_one_order_consulting: z.object({
      "eyebrow": z.string(),
      "title": z.string(),
      "intro": z.string(),
      "lifecycle": z.array(z.object({
        "id": z.string(),
        "phase": z.string(),
        "desc": z.string()
      })),
      "who_heading": z.string(),
      "who": z.string(),
      "closing": z.string(),
      "faq_heading": z.string().optional(),
      "faq": z.array(faqItem).optional()
    }),
    efb_consulting: z.object({
      "eyebrow": z.string(),
      "title": z.string(),
      "intro": z.string(),
      "lifecycle": z.array(z.object({
        "id": z.string(),
        "phase": z.string(),
        "desc": z.string()
      })),
      "who_heading": z.string(),
      "who": z.string(),
      "closing": z.string(),
      "faq_heading": z.string().optional(),
      "faq": z.array(faqItem).optional()
    }),
    airline_occ_consulting: z.object({
      "eyebrow": z.string(),
      "title": z.string(),
      "intro": z.string(),
      "lifecycle": z.array(z.object({
        "id": z.string(),
        "phase": z.string(),
        "desc": z.string()
      })),
      "who_heading": z.string(),
      "who": z.string(),
      "closing": z.string(),
      "faq_heading": z.string().optional(),
      "faq": z.array(faqItem).optional()
    }),
    flight_planning_system_consulting: z.object({
      "eyebrow": z.string(),
      "title": z.string(),
      "intro": z.string(),
      "lifecycle": z.array(z.object({
        "id": z.string(),
        "phase": z.string(),
        "desc": z.string()
      })),
      "who_heading": z.string(),
      "who": z.string(),
      "closing": z.string(),
      "faq_heading": z.string().optional(),
      "faq": z.array(faqItem).optional()
    }),
    insights: z.object({
      "hero": z.object({
        "eyebrow": z.string(),
        "heading": z.string(),
        "body": z.string()
      }),
      "articles": z.array(z.object({
        "id": z.string(),
        "slug": z.string(),
        "title": z.string(),
        "summary": z.string(),
        "relatedPage": z.string(),
        "relatedLabel": z.string(),
        "published": z.boolean(),
        "outline": z.string()
      }))
    }),
    industries_airlines: z.object({
      "eyebrow": z.string(),
      "title": z.string(),
      "intro": z.string(),
      "services_heading": z.string(),
      "services": z.array(z.object({
        "id": z.string(),
        "title": z.string(),
        "desc": z.string(),
        "href": z.string()
      })),
      "closing": z.string()
    }),
    industries_regional_airlines: z.object({
      "eyebrow": z.string(),
      "title": z.string(),
      "intro": z.string(),
      "challenges_heading": z.string(),
      "challenges": z.array(z.object({
        "id": z.string(),
        "title": z.string(),
        "desc": z.string()
      })),
      "services_heading": z.string(),
      "services": z.array(z.object({
        "id": z.string(),
        "title": z.string(),
        "desc": z.string(),
        "href": z.string()
      })),
      "closing": z.string()
    }),
    industries_airports: z.object({
      "eyebrow": z.string(),
      "title": z.string(),
      "intro": z.string(),
      "services_heading": z.string(),
      "services": z.array(z.object({
        "id": z.string(),
        "title": z.string(),
        "desc": z.string(),
        "href": z.string()
      })),
      "closing": z.string()
    }),
    article_pss_selection: z.object({
      "meta": z.object({
        "title": z.string(),
        "description": z.string(),
        "datePublished": z.string(),
        "eyebrow": z.string()
      }),
      "hero": z.object({
        "heading": z.string(),
        "summary": z.string()
      }),
      "sections": z.array(z.object({
        "id": z.string(),
        "heading": z.string(),
        "body": z.string()
      })),
      "faq_heading": z.string(),
      "faq": z.array(z.object({
        "id": z.string(),
        "q": z.string(),
        "a": z.string()
      })),
      "related": z.array(z.object({
        "id": z.string(),
        "label": z.string(),
        "href": z.string(),
        "desc": z.string()
      }))
    }),
    article_fdm: z.object({
      "meta": z.object({
        "title": z.string(),
        "description": z.string(),
        "datePublished": z.string(),
        "eyebrow": z.string()
      }),
      "hero": z.object({
        "heading": z.string(),
        "summary": z.string()
      }),
      "sections": z.array(z.object({
        "id": z.string(),
        "heading": z.string(),
        "body": z.string()
      })),
      "faq_heading": z.string(),
      "faq": z.array(z.object({
        "id": z.string(),
        "q": z.string(),
        "a": z.string()
      })),
      "related": z.array(z.object({
        "id": z.string(),
        "label": z.string(),
        "href": z.string(),
        "desc": z.string()
      }))
    }),
    article_independent_vs_vendor: z.object({
      "meta": z.object({
        "title": z.string(),
        "description": z.string(),
        "datePublished": z.string(),
        "eyebrow": z.string()
      }),
      "hero": z.object({
        "heading": z.string(),
        "summary": z.string()
      }),
      "sections": z.array(z.object({
        "id": z.string(),
        "heading": z.string(),
        "body": z.string()
      })),
      "faq_heading": z.string(),
      "faq": z.array(z.object({
        "id": z.string(),
        "q": z.string(),
        "a": z.string()
      })),
      "related": z.array(z.object({
        "id": z.string(),
        "label": z.string(),
        "href": z.string(),
        "desc": z.string()
      }))
    }),
    article_digital_transformation_roadmap: z.object({
      "meta": z.object({
        "title": z.string(),
        "description": z.string(),
        "datePublished": z.string(),
        "eyebrow": z.string()
      }),
      "hero": z.object({
        "heading": z.string(),
        "summary": z.string()
      }),
      "sections": z.array(z.object({
        "id": z.string(),
        "heading": z.string(),
        "body": z.string()
      })),
      "faq_heading": z.string(),
      "faq": z.array(z.object({
        "id": z.string(),
        "q": z.string(),
        "a": z.string()
      })),
      "related": z.array(z.object({
        "id": z.string(),
        "label": z.string(),
        "href": z.string(),
        "desc": z.string()
      }))
    }),
    article_smart_airport: z.object({
      "meta": z.object({
        "title": z.string(),
        "description": z.string(),
        "datePublished": z.string(),
        "eyebrow": z.string()
      }),
      "hero": z.object({
        "heading": z.string(),
        "summary": z.string()
      }),
      "sections": z.array(z.object({
        "id": z.string(),
        "heading": z.string(),
        "body": z.string()
      })),
      "faq_heading": z.string(),
      "faq": z.array(z.object({
        "id": z.string(),
        "q": z.string(),
        "a": z.string()
      })),
      "related": z.array(z.object({
        "id": z.string(),
        "label": z.string(),
        "href": z.string(),
        "desc": z.string()
      }))
    }),
    article_pss_migration: z.object({
      "meta": z.object({
        "title": z.string(),
        "description": z.string(),
        "datePublished": z.string(),
        "eyebrow": z.string()
      }),
      "hero": z.object({
        "heading": z.string(),
        "summary": z.string()
      }),
      "sections": z.array(z.object({
        "id": z.string(),
        "heading": z.string(),
        "body": z.string()
      })),
      "faq_heading": z.string(),
      "faq": z.array(z.object({
        "id": z.string(),
        "q": z.string(),
        "a": z.string()
      })),
      "related": z.array(z.object({
        "id": z.string(),
        "label": z.string(),
        "href": z.string(),
        "desc": z.string()
      }))
    }),
    article_efb_gcaa: z.object({
      "meta": z.object({
        "title": z.string(),
        "description": z.string(),
        "datePublished": z.string(),
        "eyebrow": z.string()
      }),
      "hero": z.object({
        "heading": z.string(),
        "summary": z.string()
      }),
      "sections": z.array(z.object({
        "id": z.string(),
        "heading": z.string(),
        "body": z.string()
      })),
      "faq_heading": z.string(),
      "faq": z.array(z.object({
        "id": z.string(),
        "q": z.string(),
        "a": z.string()
      })),
      "related": z.array(z.object({
        "id": z.string(),
        "label": z.string(),
        "href": z.string(),
        "desc": z.string()
      }))
    }),
    article_cybersecurity_uae: z.object({
      "meta": z.object({
        "title": z.string(),
        "description": z.string(),
        "datePublished": z.string(),
        "eyebrow": z.string()
      }),
      "hero": z.object({
        "heading": z.string(),
        "summary": z.string()
      }),
      "sections": z.array(z.object({
        "id": z.string(),
        "heading": z.string(),
        "body": z.string()
      })),
      "faq_heading": z.string(),
      "faq": z.array(z.object({
        "id": z.string(),
        "q": z.string(),
        "a": z.string()
      })),
      "related": z.array(z.object({
        "id": z.string(),
        "label": z.string(),
        "href": z.string(),
        "desc": z.string()
      }))
    })
  }
};
export type Schemas = typeof schemas;