# Homepage SEO Guardrail

Do not modify `index.html` body content for SEO updates.

Allowed on homepage:
- `<title>` updates
- meta description / OG / Twitter / canonical
- structured data (`application/ld+json`)

Do not change on homepage:
- hero section copy/structure
- animation classes (`w-` classes)
- interaction attributes (`data-w-id`, `data-wf-*`)
- script order/runtime wiring
- spacing/layout structure

For SEO content expansion, use:
- blog pages
- service pages
- location landing pages
