---
layout: page
title: DeepPlaybook
description: Deep Learning-Based Basketball Playbook Analysis for Coaches
img: assets/img/projects/fp-p3-dashboard.jpg
importance: 1
category: student-projects
date: 2025-06-20
---

Basketball coaches spend countless hours analyzing opponent footage and manually identifying tactical patterns to prepare for games. What if AI could surface similar plays instantly while letting coaches refine the analysis with their expertise?

In the spring of 2025, I built DeepPlaybook as part of Prof. M. El-Assady's [https://ivia.ethz.ch/](https://ivia.ethz.ch/) Interactive Machine Learning course at ETH Zurich - a mixed-initiative system that transforms this tedious process into collaborative exploration.

I was particularly interested in human-AI interaction systems and wanted a hands-on opportunity to learn how to build a machine learning (ML) application from scratch. This project emerged from the practical component of the course and became a rewarding challenge in an already packed semester. Despite the time constraints, the experience was fulfilling and I'm happy to share the results.

{% include figure.liquid loading="eager" path="assets/img/projects/fp-p3-dashboard.jpg" title="Dashboard Screenshot" class="img-fluid rounded z-depth-1" %}
Dashboard Screenshot showing similar plays clustered in the main exploration plot.

_Mixed-initiative ML systems_ bridge the gap between fully automatic and manual systems. Both the human and AI are in the loop through interactions and feedback with the goal of learning from each other. These systems are useful in cases where there are cost-risk tradeoffs, contextualization, multi-objective optimization, subjective analysis, or problem ambiguity. Personalization Mixed-initiative machine learning promises to combine the efficiency of automation with the effectiveness of humans for a collaborative decision-making and problem-solving process. This can be facilitated through co-adaptive visual interfaces.

Our project, which was proposed by a former PhD candidate, was to build an interactive tool that lets basketball coaches find tactically similar plays of opponents. The tool should support exploring similar plays (suggested by the model) of other teams, adding tags and group plays, getting a visualization of the selected play, and comparing the plays of teams. A mixed-initiative system made sense due to the subjective analysis and multi-objective optimization of coaches. Each has a different mental model of looking at basketball plays and objectives to fulfill in preparation for the next game.

We used SportVU [tracking data](https://huggingface.co/datasets/dcayton/nba_tracking_data_15_16) from 632 NBA games (2015-2016 season). The games are split into plays (possessions) with player and ball coordinates on the court recorded at 25 fps. The data is unlabeled, meaning that we don't have a ground truth of the play type (e.g. Pick & Roll, Weave, etc.) which led to an unsupervised model architecture approach borrowed from autonomous vehicle research. The spatio-temporal nature and 80GB volume created both opportunities (rich training data) and constraints (interface performance). The interface only shows three teams as fast interactions require prerendering the animations and data transformations. The model training focused only on offensive (miss/made shot) plays (~90,000) limited to the half-court and leaving the defensive players out only keeping the offensive players and the ball.

**Our solution:**

DeepPlaybook - an interactive dashboard that combines machine learning with human expertise for basketball play analysis. We adopted the HoopTransformer architecture, which uses attention-based multi-agent motion prediction borrowed from autonomous vehicle research to learn tactical representations through masked motion prediction tasks. The system generates embeddings for each possession that capture underlying strategic patterns, then projects these into an interactive 2D visualization using semi-supervised UMAP clustering. Coaches explore plays via an interactive scatter plot where tactically similar possessions cluster together. They can watch animated playbacks, and reassign plays that don't match their tactical understanding. When users make changes, the system recomputes only the UMAP projection (keeping the transformer embeddings unchanged) for fast interactive updates. This creates a feedback loop where human expertise improves the AI's understanding of basketball tactics and where coaches can quickly identify opponent patterns, tag interesting plays, and prepare presentations - transforming hours of manual video analysis into an efficient, AI-assisted exploration process.

Tech stack:

- Visualisations: D3.js
- Frontend: React.js, React-Router (framework & SPA mode), tailwindcss, shadcn.ui
- Backend: Flask
- Model: PyTorch, PyTorch-lightning
- Deployment: Docker, CI/CD, Kubernetes

Now the most interesting part in my opinion are the reflections on the project and next steps.

**Key learnings:**

_Group dynamics_

_Group dynamics:_ Knowledge gaps in ML and full-stack development created friction. We lacked explicit goal alignment and workflow discussions upfront. My programming standards sometimes clashed with others' approaches, and GitLab's limited collaboration features didn't help.

The group work was enriching but inefficient and frustrating at times. Knowledge gaps in ML and full-stack development required to meet the project expectations created friction. We were somewhat aware of this at the start. However, we lacked explicit goal alignment (individual & team) and workflow discussions upfront. This led to tensions, inefficient group work, and resignation. The expectations and actual workload investment differed and we were surprised by the effort demanded by the project. As the only member with full-stack software experience, my programming model (i.e. object-oriented, finding good abstraction) and standards sometimes clashed with others' approaches, and GitLab's limited collaboration features (no pull-requests) didn't help.

_Development sequence_

Following lecture milestones forced us to build a detailed user interface first, that got bloated with features from many diffuse ideas, setting unrealistic feature expectations. It became hard to change/drop features and they always needed to be migrated over multiple major revisions. The machine learning part following the initial full-stack app implementation was much harder because of the unsupervised nature, and large data volume. Our initial approach to building a transformer model ourselves was abandoned for the HoopTransformer architecture. Then the last step was implementing the imagined feedback flow such that it is fast enough for interactions and makes sense from the user's perspective caused to alter the entire rest of the system.

Next time it would be more effective to start with a wire-frame mockup (without detail) focusing on the interactions without the implementation. Then build a first ML model, explore the training results, and start coming up with possible iterative feedback loops. At last develop the frontend, backend, and feedback loop together and iterate on this first MVP.

**Next steps:**

_Improve the feedback loop_: The system currently allows manual cluster reassignment with automatic UMAP recomputation, but this is just the foundation for true co-adaptive analytics. The proposed enhancement involves fine-tuning the model's encoder layers using user feedback as supervision signals, creating a bidirectional learning loop where both user understanding and model performance improve iteratively. Future extensions could include active learning strategies to identify the most informative examples for user annotation and confidence scoring to highlight uncertain predictions.

_User guidance_ (e.g. with intro.js) on how the tool should be used or make it self-explanatory

_Improving the explainability part:_

1.  by showing what the model learned. For example by (overlaying) the predicted trajectories of the agents in plays of a given cluster.
2.  visualising activations of layers, and neurons in the model to figure out how the model could be improved

**Conclusion**

This project reinforced that the most powerful AI systems aren't fully automated. They amplify human expertise through thoughtful interaction design. Mixed-initiative approaches could transform how domain experts work with AI across sports analytics and beyond.

- [Live version](https://fp-p3.xaiml25.ivia.ch/)
- [Github Repo](https://fp-p3.xaiml25.ivia.ch/) (mirror from Gitlab)
