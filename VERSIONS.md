# Formal delivery version index

All timestamps below are the local modification times of the original delivery ZIP files in Asia/Shanghai (`UTC+08:00`). SHA-256 values identify the original, unmodified ZIP files attached to the corresponding private GitHub Releases.

| Delivery | Date and time | Git tag | Original ZIP | Size (MiB) | SHA-256 |
|---|---|---|---|---:|---|
| Initial, unnumbered | 2026-07-27 13:47:45 | `demo-delivery-v0.1.0` | `MeetGames-SDK-Demo.zip` | 0.236 | `5D04E0E3728903D36DFEB766F143C896B5512E39B95C8EC894D5E35201A6EA58` |
| V1 | 2026-07-28 16:04:47 | `demo-delivery-v1.0.0` | `MeetGames-SDK-Demo-V1.zip` | 2.730 | `1020F65ACDD752DAD2469073675D2ECDE61B6C627DBF2BBE263788798DF21D33` |
| V1.1 | 2026-07-29 15:24:21 | `demo-delivery-v1.1.0` | `MeetGames-SDK-Demo-V1.1.zip` | 2.744 | `D16AACD815711DB59D3C67524A29EEED1765A514E9F1F251CFA72475F0F01351` |
| V1.2 | 2026-07-29 16:17:53 | `demo-delivery-v1.2.0` | `MeetGames-SDK-Demo-V1.2.zip` | 2.745 | `6F42CEB50B1FCE297CABF3F2DF9E1BD210F701767D78D7304149E6D99DF9A067` |
| V1.3 | 2026-07-30 11:42:25 | `demo-delivery-v1.3.0` | `MeetGames-SDK-Demo-V1.3.zip` | 2.752 | `5F3F5F99C75E1B969AA86D1703FD90974EF76BEB184890ECE7B623C7E38119B7` |
| V1.5 | 2026-07-31 15:44:53 | `demo-delivery-v1.5.0` | `MeetGames-SDK-Demo-V1.5.zip` | 2.755 | `88E6FC5615142FD1A515119E9F80A18B5EE54FC948D68080CB3CBF70267445E2` |
| V1.6 | 2026-08-03 15:23:32 | `demo-delivery-v1.6.0` | `MeetGames-SDK-Demo-V1.6.zip` | 2.763 | `6D55E4FAED5BE990696ADE1B6AE3C02B55DD840A0ABD500E34E03EC385B1AFB3` |
| V1.7 | 2026-08-04 11:51:45 | `demo-delivery-v1.7.0` | `MeetGames-SDK-Demo-V1.7.zip` | 2.768 | `748B032BA8D66A5AE979C3B66E03B510A31C0C7D4E78DD404B03B20A25152BE0` |
| V1.8 | 2026-08-04 16:48:20 | `demo-delivery-v1.8.0` | `MeetGames-SDK-Demo-V1.8.zip` | 2.778 | `568124373A46B976438A5D4F3D9E4FF146D157F262F24D62C8DF6D078682CA02` |
| V1.9 | 2026-08-05 15:39:50 | `demo-delivery-v1.9.0` | `MeetGames-SDK-Demo-V1.9.zip` | 2.797 | `811360438768DAC4AF723A0C019C1A4FE9087B92E80D2050D8DD00E5C67E36E3` |
| V2.0 | 2026-08-06 11:42:08 | `demo-delivery-v2.0.0` | `MeetGames-SDK-Demo-V2.0.zip` | 2.807 | `8F906908A42125A5E1F38081A6D3D7EF2028D3EE8778571CA8971DE7CB09FF64` |
| V2.1 | 2026-08-06 16:29:46 | `demo-delivery-v2.1.0` | `MeetGames-SDK-Demo-V2.1.zip` | 2.809 | `0E22929E1E7E3DA789D9718DF811F5C4F7FABE4F1B33F09D54D36C25C4CDDE12` |
| V2.2 | 2026-08-10 09:29:49 | `demo-delivery-v2.2.0` | `MeetGames-SDK-Demo-V2.2.zip` | 2.814 | `FBFD577A613D73F425A588FFD015B9016E648093F6819BAAF178808CD7BEBA54` |
| V2.3 | 2026-08-10 16:46:41 | `demo-delivery-v2.3.0` | `MeetGames-SDK-Demo-V2.3.zip` | 2.820 | `1C5171F05CED14822E55CDBC5D9A3606293F6139FB098C5B554DAE66C38D99BF` |
| V2.4 | 2026-08-11 18:16:25 | `demo-delivery-v2.4.0` | `MeetGames-SDK-Demo-V2.4.zip` | 2.830 | `6C78BD0309DEA9DE3993E09CB7443C12E6BDDB53856EB808D64F32F85900CC3A` |
| V2.5 | 2026-08-14 09:37:50 | `demo-delivery-v2.5.0` | `MeetGames-SDK-Demo-V2.5.zip` | 2.832 | `656EDC177F8786AD2F172C2E62CFBA9182EC8EE9CC3269E2B00B02A8068CC420` |
| V2.4.1 — final confirmed | 2026-08-18 14:18:25 | `demo-delivery-v2.4.1` | `MeetGames-SDK-Demo-V2.4.1.zip` | 2.832 | `EF4C8407AB3FA7E22C290578AB01B4A45A09F9E9674E8292AC06D5F1B036EC46` |

## Current status and non-monotonic numbering

| Delivery | Status | Effective date | Notes |
|---|---|---|---|
| V2.4.1 | **Current / final confirmed** | 2026-08-18 | Same game and channel may contain multiple independent packages; a new package inherits the last successfully saved operations snapshot from the most recently generated same-channel package. |
| V2.5 | Superseded / trace only | 2026-08-18 | Preserved unchanged for audit. See [V2.5 superseded status](docs/releases/V2.5-SUPERSEDED.md). |

V2.4.1 appears after V2.5 because this table preserves real delivery chronology. The lower version number is an explicit product decision, not a sorting error.

V2.4.1 Demo and PRD bundle checksums are recorded in [`docs/releases/MeetGames-SDK-V2.4.1-SHA256SUMS.txt`](docs/releases/MeetGames-SDK-V2.4.1-SHA256SUMS.txt).

## Missing V1.4

The formal delivery sequence contains no V1.4 directory/ZIP pair. A V1.4 source backup existed locally, but it was neither treated as a formal delivery nor uploaded. No `demo-delivery-v1.4.0` tag or Release is created.

## Integrity basis

Each of the 17 delivery ZIP files was compared with its same-named extracted directory. File paths, file counts, sizes, and per-file SHA-256 values matched for all 17 pairs.
