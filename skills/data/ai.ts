import { SkillCategory } from "../skill-categories";
import { SkillProficiency } from "../skill-proficiency";
import type { Skill } from "../types";

const ai = [
    {
        key: 'ai-assisted-development',
        title: 'AI-Assisted Development',
        categories: [SkillCategory.AI],
        proficiency: SkillProficiency.Expert,
        description: "I use AI coding tools daily to accelerate development — from autocomplete and inline suggestions to fully agentic workflows that plan, edit, and test across entire codebases. I've used AI-assisted development to modernise a 25-year-old codebase at pace that would have been impossible otherwise.",
        relatedSkillKeys: ['llm-integration', 'prompt-engineering', 'mcp'],
        subSkills: [
            { name: 'GitHub Copilot', url: 'https://github.com/features/copilot' },
            { name: 'Google Antigravity', url: 'https://antigravity.google/' },
            { name: 'Amazon Kiro', url: 'https://kiro.dev/' },
            { name: 'Cursor', url: 'https://cursor.sh/' },
            { name: 'Claude Code', url: 'https://docs.anthropic.com/en/docs/claude-code' },
        ]
    },
    {
        key: 'mcp',
        title: 'Model Context Protocol (MCP)',
        categories: [SkillCategory.AI],
        proficiency: SkillProficiency.Proficient,
        description: "I integrate MCP servers to give AI agents access to external tools and data sources — browsers, databases, design tools, and custom APIs — enabling richer agentic workflows.",
        link: 'https://modelcontextprotocol.io/',
        relatedSkillKeys: ['ai-agents', 'ai-assisted-development'],
        subSkills: [
            { name: 'Playwright MCP', url: 'https://github.com/microsoft/playwright-mcp' },
            { name: 'Figma MCP', url: 'https://github.com/nichochar/figma-mcp' },
            { name: 'PostgreSQL MCP', url: 'https://github.com/modelcontextprotocol/servers' },
        ]
    },
    {
        key: 'ai-agents',
        title: 'AI Agent Orchestration',
        categories: [SkillCategory.AI, SkillCategory.Backend],
        proficiency: SkillProficiency.Proficient,
        description: "I design and build AI agent systems with tool invocations, subagent delegation, and structured workflows. I have experience with multi-step agent pipelines that coordinate across code generation, web browsing, and data retrieval tasks.",
        relatedSkillKeys: ['llm-integration', 'mcp', 'prompt-engineering', 'ai-assisted-development'],
        subSkills: [
            { name: 'Microsoft Agent Framework', url: 'https://github.com/microsoft/agents' },
            { name: 'Tool Use / Function Calling', url: 'https://platform.openai.com/docs/guides/function-calling' },
            { name: 'Subagent Patterns', url: 'https://docs.anthropic.com/en/docs/build-with-claude/agentic-patterns' },
        ]
    },
    {
        key: 'prompt-engineering',
        title: 'Prompt Engineering',
        categories: [SkillCategory.AI],
        proficiency: SkillProficiency.Proficient,
        description: "I design effective system prompts, few-shot examples, and structured output schemas for LLM-powered features. I apply chain-of-thought, tool-use, and retrieval-augmented generation patterns to get reliable, production-quality results from language models.",
        link: 'https://en.wikipedia.org/wiki/Prompt_engineering',
        relatedSkillKeys: ['llm-integration', 'ai-agents', 'ai-assisted-development'],
        subSkills: [
            { name: 'System Prompts', url: 'https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/system-prompts' },
            { name: 'Chain-of-Thought', url: 'https://arxiv.org/abs/2201.11903' },
            { name: 'Structured Outputs', url: 'https://platform.openai.com/docs/guides/structured-outputs' },
            { name: 'RAG', url: 'https://en.wikipedia.org/wiki/Retrieval-augmented_generation' },
        ]
    },
    {
        key: 'gemini-api',
        title: 'Gemini API',
        categories: [SkillCategory.AI, SkillCategory.Backend],
        proficiency: SkillProficiency.Proficient,
        description: "I have used Google's Gemini API to build LLM-powered features, taking advantage of its multimodal capabilities, long context windows, and structured output support.",
        link: 'https://ai.google.dev/',
        relatedSkillKeys: ['llm-integration', 'prompt-engineering', 'litellm'],
        subSkills: [
            { name: 'Gemini Pro', url: 'https://ai.google.dev/gemini-api/docs' },
            { name: 'Google AI Studio', url: 'https://aistudio.google.com/' },
        ]
    },
] as readonly Skill[];

export default ai;
