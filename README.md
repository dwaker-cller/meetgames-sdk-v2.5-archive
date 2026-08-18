# MeetGames SDK Demo — private delivery archive

This private repository preserves the formal delivery history of the MeetGames SDK configuration and operations demo.

## Current baseline

- Current formal delivery: **V2.5**
- Runtime implementation baseline: **update=54** (`20260813-config-generation-54`)
- Entry point: `demo/打开Demo.html`
- Recommended browsers: Microsoft Edge or Google Chrome

The `main` branch shows only the current V2.5 snapshot. Historical deliveries are available through annotated Git tags and GitHub Releases.

## Important provenance note

The Git history in this repository was reconstructed on 2026-08-14 from verified formal delivery directories and ZIP files. Each version commit is an exact delivery snapshot imported in chronological order; it is **not** the original source-development commit history.

The current V2.5 demo is a runnable static artifact. The older Next.js source in the original working directory had drifted from the accepted update=54 runtime and could not rebuild V2.5, so it is intentionally not presented here as current source.

## Run the demo

1. Clone or download this private repository.
2. Open `demo/打开Demo.html`.
3. Alternatively, open `demo/index.html` or run `demo/打开Demo.bat` on Windows.

The demo stores state in the browser and generates simulated download files. It does not contain production SDK binaries.

## Repository layout

```text
demo/       Current V2.5 runnable delivery snapshot
docs/       Authoritative PRD, supporting product/engineering documents, and project history
tools/      Static-entry synchronization helper
VERSIONS.md Formal version index, tags, dates, and checksums
SECURITY.md Credential and private-data handling notes
```

## Version history

There are 16 verified formal delivery snapshots: an unnumbered initial release, V1, V1.1–V1.3, V1.5–V1.9, and V2.0–V2.5.

No formal V1.4 delivery directory or ZIP was found. A local source backup existed, but it is not treated as a formal release and was not uploaded. See [VERSIONS.md](VERSIONS.md) for the complete index.

## Archive boundaries

This repository intentionally excludes internal backups, rollback snapshots, QA extraction folders, dependency caches, build caches, logs, Feishu Base data exports, and other working-directory artifacts.

Formal delivery artifacts are preserved unchanged at the user's direction. They contain demo-only `ClientSecret` placeholders and a repeated role-address email used by the demo. Never replace those values with production credentials, and never place a real client secret in browser-side code.

## Documentation

- [Documentation index](docs/README.md)
- Authoritative PRD V2.5: [DOCX](docs/product/MeetGames-SDK-产品需求文档-PRD-V2.5.docx) · [PDF](docs/product/MeetGames-SDK-产品需求文档-PRD-V2.5.pdf)
- [Archived PRD working-source Markdown](docs/project-history/MeetGames-SDK-产品需求文档-PRD-V2.5-working-source.md)
- [Project handoff snapshot](docs/project-history/HANDOFF-2026-08-14.md)

## Rights

No open-source license is granted by this archive. Usage and ownership remain subject to the original project and organizational agreements.
