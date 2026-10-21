# Gym Swap

Gym Swap helps people explore reviewed exercises and swap a planned exercise for one that fits the equipment they actually have, with the tradeoffs explained in plain language.

**133 exercises · 270 reviewed comparisons · 357 automated tests in the source suite.** Deterministic rules decide; optional grounded AI explains from reviewed notes.

**[Try the demo](DEMO_URL_TBD)** · screenshot: ![Gym Swap 2.8.0 on a phone](../gym-swap-2.8.0-phone.jpg)

Architecture:
- Static frontend built with esbuild; one saved workout list per browser, no accounts.
- Rules engine and reviewed card library: exercise matching, equipment readiness and Keeps / Changes / Check comparisons are written, reviewed and deterministic.
- Optional explanation service with retrieval over reviewed notes; disabled in the demo.
