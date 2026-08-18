# MeetGames SDK Demo — private delivery archive

This private repository preserves the formal delivery history of the MeetGames SDK configuration and operations demo.

> [!IMPORTANT]
> **V2.4.1 is the current final-confirmed baseline as of 2026-08-18.** It supersedes V2.5 despite the lower version number. V2.5 remains immutable for audit and historical retrieval only.

## Current baseline

- Current formal delivery: **V2.4.1 — final confirmed**
- Runtime implementation baseline: **update=55** (`20260818-v24-multi-package-55`)
- Entry point: `demo/打开Demo.html`
- Recommended browsers: Microsoft Edge or Google Chrome

The `main` branch shows the current V2.4.1 snapshot. Historical deliveries, including the superseded V2.5 snapshot, remain available through immutable annotated Git tags and GitHub Releases.

## Important provenance note

The Git history in this repository was reconstructed from verified formal delivery directories and ZIP files. Each version tag points to an exact delivery snapshot imported in chronological order; it is **not** the original source-development commit history.

The current V2.4.1 demo is a runnable static artifact. The older Next.js source in the original working directory had drifted from the accepted static runtime, so it is intentionally not presented here as current source.

## Run the demo

1. Clone or download this private repository.
2. Open `demo/打开Demo.html`.
3. Alternatively, open `demo/index.html` or run `demo/打开Demo.bat` on Windows.

The demo stores state in the browser and generates simulated download files. It does not contain production SDK binaries.

## Repository layout

```text
demo/       Current V2.4.1 final-confirmed runnable delivery snapshot
docs/       Authoritative PRD, supporting product/engineering documents, and project history
tools/      Legacy static-entry helper retained for historical maintenance only
VERSIONS.md Formal version index, tags, dates, and checksums
SECURITY.md Credential and private-data handling notes
```

## Version history

There are 17 verified formal delivery snapshots: an unnumbered initial release, V1, V1.1–V1.3, V1.5–V1.9, V2.0–V2.5, and the later final-confirmed V2.4.1 delivery.

Version numbering is intentionally non-monotonic: V2.4.1 was confirmed after V2.5 and supersedes it. The index remains ordered by real delivery time rather than semantic version.

No formal V1.4 delivery directory or ZIP was found. A local source backup existed, but it is not treated as a formal release and was not uploaded. See [VERSIONS.md](VERSIONS.md) for the complete index.

## Archive boundaries

This repository intentionally excludes internal backups, rollback snapshots, QA extraction folders, dependency caches, build caches, logs, Feishu Base data exports, and other working-directory artifacts.

Formal delivery artifacts are preserved unchanged at the user's direction. They contain demo-only `ClientSecret` placeholders and a repeated role-address email used by the demo. Never replace those values with production credentials, and never place a real client secret in browser-side code.

## Documentation

- [Documentation index](docs/README.md)
- [Authoritative PRD V2.4.1](docs/product/V2.4.1/MeetGames-SDK-产品需求文档-PRD-V2.4.1.md)
- [Product requirement version index](docs/product/README.md)
- [V2.5 superseded status](docs/releases/V2.5-SUPERSEDED.md)
- [Archived PRD working-source Markdown](docs/project-history/MeetGames-SDK-产品需求文档-PRD-V2.5-working-source.md)
- [Project handoff snapshot](docs/project-history/HANDOFF-2026-08-14.md)

## Rights

No open-source license is granted by this archive. Usage and ownership remain subject to the original project and organizational agreements.
