
import React from 'react';
import { Pillar, WorkItem, Service } from './types';

export const PILLARS: Pillar[] = [
  { title: "Relentless & thoughtful", description: "strategies that stand out in crowded markets." },
  { title: "Maniacally focused on results", description: "every action maps to objectives." },
  { title: "Research-driven", description: "narratives infused with data and insight." },
  { title: "Personalized", description: "messages tailored to every audience." },
  { title: "Bold. Unwavering. Accountable.", description: "ownership from start to finish." },
];

export const WORK_ITEMS: WorkItem[] = [
  { title: "AppliedVR + Kernel Flow clinical results", date: "Jun 8, 2024", category: "Coverage", link: "#" },
  { title: "Tia outcomes data", date: "Jun 8, 2024", category: "Press", link: "#" },
  { title: "Hims & Hers GLP-1 access", date: "Jun 8, 2024", category: "Coverage", link: "#" },
  { title: "Accolade beats estimates; Teladoc optimism; JPM roundup", date: "Feb 19, 2020", category: "Update", link: "#" },
];

export const SERVICES: Service[] = [
  { title: "PR & Media Relations", description: "announcements, selective pitching, interview prep, coverage tracking." },
  { title: "Messaging & Narrative", description: "brand promise, positioning, voice, pillars, audience value." },
  { title: "Content & Collateral", description: "investor deck, sales deck, one-pagers." },
  { title: "Research-Driven Content", description: "surveys and data storytelling." },
  { title: "External Integrated Comms", description: "consistent, outward-facing voice." },
  { title: "Thought Leadership", description: "POVs that move the industry." },
  { title: "Speaking, Awards & Events", description: "shortlist, submissions, on-site media." },
  { title: "Digital Content & Web Design", description: "site content, design support, assets." },
];

export const ArrowIcon: React.FC<{className?: string}> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
    </svg>
);
