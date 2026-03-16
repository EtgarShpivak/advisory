# Fal.ai Image Generation Skill — Design Doc

**Date:** 2026-03-15
**Status:** Approved

## Overview

A Claude Code skill (local plugin) that enables image generation and editing via the Fal.ai REST API. Uses curl directly — no SDK dependencies.

## Plugin Structure

```
~/.claude/plugins/local/fal-ai-imagegen/
├── .claude-plugin/
│   └── plugin.json
└── skills/
    └── image-generator/
        └── SKILL.md
```

## Authentication

- API key stored as environment variable `FAL_KEY`
- Used in curl headers: `Authorization: Key $FAL_KEY`

## Capabilities

### Text-to-Image
1. Construct prompt from user description
2. Select model (default: `fal-ai/flux/dev`, user can override)
3. Submit via `POST https://queue.fal.run/{model}`
4. Poll status at `https://queue.fal.run/{model}/requests/{request_id}/status`
5. Fetch result from `https://queue.fal.run/{model}/requests/{request_id}`
6. Download image to project directory via `curl -o`

### Image-to-Image
1. Accept reference image path
2. Use image-supporting model (e.g., `fal-ai/flux-2-pro/edit`, `fal-ai/nano-banana-2/edit`)
3. Same queue/poll/download flow

## Model Registry (Starting Point)

| Model ID | Name | Best For | ~Price |
|----------|------|----------|--------|
| `fal-ai/flux/dev` | Flux Dev | General purpose (default) | $0.025/MP |
| `fal-ai/flux-2-pro` | Flux 2 Pro | Photorealism, portraits | ~$0.03/img |
| `fal-ai/flux/schnell` | Flux Schnell | Fast drafts (1-4 steps) | Cheapest |
| `fal-ai/nano-banana-2` | Nano Banana 2 | Fast + high quality | ~$0.04/img |
| `fal-ai/nano-banana-pro` | Nano Banana Pro | Premium + typography | ~$0.04/img |
| `fal-ai/recraft/v4/pro/text-to-image` | Recraft V4 Pro | Design/brand work | ~$0.04/img |
| `fal-ai/recraft/v3/text-to-image` | Recraft V3 | Text-in-images, vector | ~$0.04/img |
| `fal-ai/bytedance/seedream/v4.5/edit` | Seedream V4.5 | Generation + editing | ~$0.03/img |
| `fal-ai/qwen-image-2/text-to-image` | Qwen Image 2 | Text rendering, editing | $0.02/MP |

### Self-Updating Model Discovery

The model list is a snapshot. The skill explicitly instructs Claude to:
- Use ANY valid `fal-ai/*` endpoint, not just listed ones
- Check `fal.ai/models` for new/trending models when "best" or "latest" is requested
- Proactively suggest better models when discovered

## Budget Guard

- $5 spending limit unless user approves more
- Estimate cost before batch generation or expensive models
- Warn user with cost estimate before proceeding

## Trigger Patterns

Triggers on: "generate an image", "create an image", "text to image", "img2img", "image from prompt", "fal.ai", "flux", "nano banana", "recraft", "/imagine", or any request to create visual content.

## Output

Images saved to project directory (default: `./generated-images/`), user can specify path.
