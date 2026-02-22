# Goldun - Digital Gold Infrastructure

A next-generation digital commodities infrastructure platform for institutional arbitrage.

## Institutional Expansion Stack

- Advanced investor analytics dashboard: `/dashboard`
- Live analytics API: `/api/dashboard`
- Arbitrage simulator with charting (Recharts)
- Tokenomics whitepaper: `docs/tokenomics-whitepaper.md`
- Cayman + Delaware structure diagram: `docs/legal-structure.md`
- CRM-ready lead ingestion API: `/api/crm`

## Environment Variables

Required:

- `JWT_SECRET`
- `INVESTOR_PASSWORD`
- `DISCORD_WEBHOOK_URL`

Optional CRM forwarding from contact form:

- `CRM_FORWARD_ENABLED=true`
- `HUBSPOT_KEY`
- `SALESFORCE_ENDPOINT`
- `SALESFORCE_TOKEN`

## Contact + CRM Flow

1. Contact form posts to `/api/contact`
2. `/api/contact` delivers to Discord webhook
3. If `CRM_FORWARD_ENABLED=true`, lead is also forwarded to `/api/crm`
4. `/api/crm` sends to HubSpot and/or Salesforce (based on configured keys)
