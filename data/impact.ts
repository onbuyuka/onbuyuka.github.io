interface Impact {
  index: string;
  label: string;
  title: string;
  description: string;
  scope:
    | { kind: 'metric'; value: string; label: string }
    | { kind: 'capabilities'; items: string[]; label: string };
  links: { label: string; href: string }[];
}

export const impact: Impact[] = [
  {
    index: '01',
    label: 'commerce integration',
    title: 'Shopify Connector',
    scope: { kind: 'metric', value: '8,000+', label: 'active merchants' },
    description:
      'Lead engineer for the Business Central connector: architecture, implementation and product evolution across Microsoft and Shopify.',
    links: [
      {
        label: 'Explore the product',
        href: 'https://learn.microsoft.com/en-us/dynamics365/business-central/shopify/shopify-connector-overview',
      },
    ],
  },
  {
    index: '02',
    label: 'applied AI',
    title: 'Business Central MCP Server',
    scope: { kind: 'capabilities', items: ['Access', 'Tools', 'Evaluation'], label: 'Secure AI agent architecture' },
    description:
      'Application architect for secure agent access to Business Central data and capabilities through the Model Context Protocol.',
    links: [
      {
        label: 'Read the overview',
        href: 'https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/ai/mcp-overview',
      },
    ],
  },
  {
    index: '03',
    label: 'platform engineering',
    title: 'Integration platform',
    scope: { kind: 'capabilities', items: ['APIs', 'Sync', 'Virtual tables'], label: 'Connected business data' },
    description:
      'Built and owned platform capabilities spanning OData APIs, bidirectional synchronization, virtual tables and extensible integration infrastructure.',
    links: [
      {
        label: 'API v2.0',
        href: 'https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/api-reference/v2.0/',
      },
      {
        label: 'Dataverse',
        href: 'https://learn.microsoft.com/en-us/dynamics365/business-central/admin-common-data-service',
      },
      {
        label: 'Dynamics 365 Sales',
        href: 'https://learn.microsoft.com/en-us/dynamics365/business-central/marketing-integrate-dynamicscrm',
      },
    ],
  },
];
