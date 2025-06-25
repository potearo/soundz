name: 🪲 Bug Report
description: Report a reproducible bug or unexpected behavior.
labels: bug

body:
  - type: input
    id: package
    attributes:
      label: Component Name
      placeholder: e.g., Soundz, SoundzProvider
  - type: textarea
    id: description
    attributes:
      label: What Happened?
      placeholder: Describe the bug clearly
  - type: textarea
    id: steps
    attributes:
      label: Steps to Reproduce
      placeholder: Go to '...'\n2. Click on '...'\n3. See error
  - type: textarea
    id: expected
    attributes:
      label: What did you Expect to Happen?
  - type: input
    id: system
    attributes:
      label: System Info
      placeholder: OS, Browser, Node/NPM version