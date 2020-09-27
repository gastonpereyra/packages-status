---
name: Story
about: Story to organize development
title: "[STORY] PS - XX - Add [NAME] package Info"
labels: enhancement
assignees: gastonpereyra
proyects: Node Utility

---

# :bulb: Task
## :busts_in_silhouette: Role
Dev

##  :point_up: Want
Add a new Package [NAME] tests, badges, and links

##  :+1: Result
To Have quickly access to [NAME] info

##  :ok_hand: Criteria
- Add Action File to `./actions/NAME.js` with quickly main use of the package, throwing errors if it works wrong.
- Add NPM Script `"NAME-status": "node ./actions/NAME"`
- Add Action Workflow to `./github/workflows/NAME.yml`
- Add package info, link to NPM and Repository, badges, description and example in README 

##  :blue_book: Description
This repository is used to have a quick view about packages status, as lastest version, buid, coverage statuses, how to install them, an example.
But must be added a real use of the package with latest version.