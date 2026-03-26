import { GoogleGenerativeAI } from '@google/generative-ai';
import type { CandidateInput, CandidateResult } from './types.ts';

export const TAG_VOCABULARY = [
  'javascript',
  'typescript',
  'css',
  'html',
  'browser',
  'web-platform',
  'frameworks',
  'react',
  'vue',
  'angular',
  'svelte',
  'solidjs',
  'astro',
  'nodejs',
  'deno',
  'bun',
  'wasm',
  'tooling',
  'build-tools',
  'testing',
  'performance',
  'dx',
  'ux',
  'accessibility',
  'design',
  'release',
  'tutorial',
];

const JUDGE_PROMPT = `You are a web dev & AI news curator for digestweb.dev.
You receive a JSON array of article candidates. For EACH candidate, triage it and — if publishable — generate full metadata.

Respond ONLY with a JSON array, same length and order as the input:

• If significance === 0:
  { "id": N, "significance": 0, "reason": "..." }

• If significance >= 1:
  { "id": N, "significance": 1|2|3|4, "reason": "...", "title": "...", "description": "...", "slug": "...", "tags": [...], "summarySection": "...", "commentarySection": "..." }

Significance scale:
  0 = skip — patch-only releases, link dumps, marketing, already-covered rehash
  1 = mention — minor release, niche article, tangential to mainstream web dev or AI, beginner-level article
  2 = highlight — notable minor release, good tutorial, community news
  3 = feature — major release with new features, significant web-platform addition, influential deep-dive
  4 = headline — landmark release, paradigm shift, Stage 3/4 TC39 proposal shipping, ecosystem-wide impact

Field rules (significance >= 1 only):
  title         — clean, engaging, max 80 chars
  description   — 1–2 sentences
  slug          — kebab-case, max 80 chars
  tags          — 1–4 items from allowed vocabulary; allowed tags: ${TAG_VOCABULARY.join(', ')}
  summarySection   — markdown for "## Summary & Key Takeaways"; use bullet points; concise; one sentence per bullet point; max 8 bullet points; start with "## Summary & Key Takeaways"; summarise the article key points - present the article; do not refer users to just read the article - don't use something like "users should review the blog post"; don't invent what the article is about - if something is missing from the provided content, fetch the article via its url
  commentarySection — markdown for "## Our Commentary"; always start with "## Our Commentary"; max 600 chars; Don't just report facts - react to them. "I genuinely don't know how to feel about this" is more human than neutrally listing pros and cons; Vary your rhythm. Short punchy sentences. Mix it up.; use "I" when it fits. First person isn't unprofessional - it's honest.; Let some mess in. Perfect structure feels algorithmic. Tangents, asides, and half-formed thoughts are human.; Be specific about feelings. Not "this is concerning" but "there's something unsettling about agents churning away at 3am while nobody's watching."; Write as plural, using "we" or "digestweb" when appropriate.; Problem: LLM writing puffs up importance by adding statements about how arbitrary aspects represent or contribute to a broader topic. Words to watch: stands/serves as, is a testament/reminder, a vital/significant/crucial/pivotal/key role/moment, underscores/highlights its importance/significance, reflects broader, symbolizing its ongoing/enduring/lasting, contributing to the, setting the stage for, marking/shaping the, represents/marks a shift, key turning point, evolving landscape, focal point, indelible mark, deeply rooted
`;

const GEMINI_TIMEOUT_MS = 10 * 60 * 1000;

export async function judgeAllWithGemini(
  candidates: CandidateInput[],
  genAI: GoogleGenerativeAI,
): Promise<CandidateResult[]> {
  const model = genAI.getGenerativeModel({
    model: 'gemini-2.5-flash',
    systemInstruction: JUDGE_PROMPT,
    generationConfig: { temperature: 0, responseMimeType: 'application/json' },
  });

  const timeoutPromise = new Promise<never>((_, reject) =>
    setTimeout(
      () =>
        reject(
          new Error(`Gemini call timed out after ${GEMINI_TIMEOUT_MS / 1000}s`),
        ),
      GEMINI_TIMEOUT_MS,
    ),
  );

  const result = await Promise.race([
    model.generateContent(JSON.stringify(candidates)),
    timeoutPromise,
  ]);
  return JSON.parse(result.response.text()) as CandidateResult[];
}
