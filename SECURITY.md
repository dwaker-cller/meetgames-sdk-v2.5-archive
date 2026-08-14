# Security and private-data handling

This is a private archival repository. Private visibility does not make it appropriate for storing production credentials or personal data.

## Never commit

- Production client secrets, API keys, access tokens, signing keys, or passwords
- `.env` files or exported browser/session credentials
- Customer, creator, employee, or partner data exports
- Feishu Base CSV/JSON exports or downloaded profile images
- Authentication screenshots, logs, local QA dumps, or internal rollback archives

## Archived demo values

At the user's direction, the formal delivery snapshots and Release ZIP files are preserved without content sanitization. V1 through V2.5 include demo-only `ClientSecret` placeholders and one repeated role-address email used in the static demo.

These values must not be interpreted as a pattern for production implementation. Real client secrets must be stored and processed server-side with appropriate access control, encryption, rotation, audit, and redaction.

## Reporting

If this repository is ever shared with collaborators, review every collaborator's need for access and remove access promptly when it is no longer required. If a real credential is discovered, revoke or rotate it first, then remove it from every affected Git object and Release asset.
