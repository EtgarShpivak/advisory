# Fal.ai Image Generation Skill — Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Create a Claude Code local plugin with a skill that generates images via the Fal.ai REST API using curl.

**Architecture:** A pure-skill plugin (no MCP, no scripts). The SKILL.md file instructs Claude how to call Fal.ai's queue-based REST API with curl, poll for results, and download images. The API key is stored as an environment variable.

**Tech Stack:** Bash/curl, Fal.ai REST API, Claude Code plugin system

---

### Task 1: Set up FAL_KEY environment variable

**Files:**
- Modify: User's shell profile (e.g., `~/.bashrc` or equivalent)

**Step 1: Add FAL_KEY to shell environment**

```bash
# Add to shell profile so it persists
echo 'export FAL_KEY="57f3bd8d-2fa6-4da9-99d2-2e376b6c0766:a65d1e093f452081214a70819489d4f5"' >> ~/.bashrc
```

**Step 2: Verify it's set**

```bash
source ~/.bashrc && echo $FAL_KEY
```
Expected: The API key is printed.

---

### Task 2: Create plugin scaffold

**Files:**
- Create: `~/.claude/plugins/local/fal-ai-imagegen/.claude-plugin/plugin.json`

**Step 1: Create plugin directory structure**

```bash
mkdir -p ~/.claude/plugins/local/fal-ai-imagegen/.claude-plugin
mkdir -p ~/.claude/plugins/local/fal-ai-imagegen/skills/image-generator
```

**Step 2: Write plugin.json**

```json
{
  "name": "fal-ai-imagegen",
  "description": "Generate and edit images using Fal.ai models (Flux, Nano Banana, Recraft, Seedream, and more)",
  "version": "1.0.0",
  "author": {
    "name": "Etgar"
  }
}
```

---

### Task 3: Write the SKILL.md

**Files:**
- Create: `~/.claude/plugins/local/fal-ai-imagegen/skills/image-generator/SKILL.md`

**Step 1: Write the full skill file**

The skill must contain:

1. **Frontmatter** — name, description with trigger patterns, version
2. **Model registry** — table of known models with IDs, use cases, prices
3. **Model discovery instructions** — how to find new models dynamically
4. **Text-to-image workflow** — exact curl commands for submit, poll, fetch, download
5. **Image-to-image workflow** — how to handle reference images
6. **Budget guard** — $5 limit, cost estimation before generation
7. **Output handling** — save to project directory, show file path

Key curl patterns to include:

```bash
# Submit to queue
curl -s -X POST "https://queue.fal.run/{model}" \
  -H "Authorization: Key $FAL_KEY" \
  -H "Content-Type: application/json" \
  -d '{"prompt": "...", "image_size": "landscape_4_3", "num_images": 1}'

# Poll status
curl -s "https://queue.fal.run/{model}/requests/{request_id}/status" \
  -H "Authorization: Key $FAL_KEY"

# Get result
curl -s "https://queue.fal.run/{model}/requests/{request_id}" \
  -H "Authorization: Key $FAL_KEY"

# Download image
curl -s -o "./generated-images/{filename}.png" "{image_url}"
```

---

### Task 4: Verify the plugin loads

**Step 1: Check plugin is detected**

Restart Claude Code or start a new session and verify the skill appears in the available skills list.

**Step 2: Test with a simple generation**

Ask Claude to "generate an image of a sunset over mountains" and verify:
- It uses the skill
- Calls the Fal.ai API via curl
- Downloads and saves the image

---
