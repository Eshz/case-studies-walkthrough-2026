import coverIntelliframeGif from './assets/cover-intelliframe.gif';
import coverThumbnailIntelliframe from './assets/cover-thumbnail-intelliframe.png';
import coverTranscriptProject from './assets/cover-transcriptProject.png';
import coverVideoGenwayGif from './assets/cover-video-genway.gif';
import genwayConference from './assets/genway-conference.jpg';
import genwayFunnel from './assets/genway-funnel.svg';
import logoGenway from './assets/logo-genway.svg';
import logoMicrosoft from './assets/logo-microsoft.png';

export interface CaseStudySection {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  icon: string;
  imageFit?: 'cover' | 'contain';
  imageBackgroundClassName?: string;
  imageClassName?: string;
  isLogo?: boolean;
  showTitle?: boolean;
}

export interface CaseStudy {
  id: string;
  name: string;
  client: string;
  sections: CaseStudySection[];
}

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'genway',
    name: 'Genway AI',
    client: 'Head of Product Design',
    sections: [
      {
        id: 'context',
        title: 'Context',
        subtitle: 'The Mission',
        description: 'Working on an AI platform that conducts user interviews and generates insights automatically. The goal: replace weeks of manual research with hours.',
        image: logoGenway,
        icon: 'Layout',
        imageFit: 'contain',
        imageBackgroundClassName: 'flex items-center justify-center bg-white',
        imageClassName: 'h-auto w-auto max-h-[68px] max-w-[240px]',
        isLogo: true,
        showTitle: false,
      },
      {
        id: 'problem',
        title: 'The Problem',
        subtitle: 'Comprehension Gap',
        description: 'The challenge wasn’t usability — it was understanding. Users didn’t know what ‘AI-moderated research’ meant, leading to high drop-off before experiencing value.',
        image: coverVideoGenwayGif,
        icon: 'Zap',
      },
      {
        id: 'insight',
        title: 'Key Insight',
        subtitle: 'Network of Encounters',
        description: 'Onboarding wasn’t a single flow; it was a network of first encounters. We needed to design multiple entry points — each explaining the product and building trust.',
        image: genwayFunnel,
        icon: 'Lightbulb',
      },
      {
        id: 'action-a',
        title: 'Onboarding System',
        subtitle: 'Four Stages',
        description: 'Mapped the experience into four stages: discovering, creating, participating, and receiving. Each became a distinct design problem.',
        image: genwayConference,
        icon: 'Workflow',
      },
      {
        id: 'action-b',
        title: 'Value First',
        subtitle: 'Genway GPT',
        description: 'Introduced a lighter entry point: an input field on the landing page. Users describe goals and immediately generate a research setup. Value before commitment.',
        image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1600&h=900',
        icon: 'Zap',
      },
      {
        id: 'action-c',
        title: 'Designing Trust',
        subtitle: 'Transparency',
        description: 'Redesigned the interview ‘lobby’ to explain the AI process and data usage. Improved stakeholder reports to build trust in AI-generated insights.',
        image: coverTranscriptProject,
        icon: 'ShieldCheck',
      },
      {
        id: 'impact',
        title: 'Impact',
        subtitle: 'Conversion & Alignment',
        description: 'More users reached the insight generation phase. Improved alignment across product, marketing, and sales through a shared user journey understanding.',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1600&h=900',
        icon: 'TrendingUp',
      },
      {
        id: 'reflection',
        title: 'Reflection',
        subtitle: 'Comprehension First',
        description: 'In AI products, the core challenge is comprehension and trust. If users don’t understand what the system does, UX details won’t matter.',
        image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1600&h=900',
        icon: 'Brain',
      },
    ]
  },
  {
    id: 'microsoft',
    name: 'IntelliFrame',
    client: 'Microsoft',
    sections: [
      {
        id: 'context',
        title: 'Context',
        subtitle: 'Hybrid Meetings',
        description: 'Working on IntelliFrame — an AI feature for hybrid meetings that automatically detects and frames people in a physical meeting room.',
        image: logoMicrosoft,
        icon: 'Layout',
        imageFit: 'contain',
        imageBackgroundClassName: 'flex items-center justify-center bg-white',
        imageClassName: 'h-auto w-auto max-h-[58px] max-w-[272px]',
        isLogo: true,
        showTitle: false,
      },
      {
        id: 'problem',
        title: 'The Problem',
        subtitle: 'Non-Deterministic AI',
        description: 'The system wasn’t deterministic. AI would sometimes miss people or frame them inconsistently, creating a variable experience across meetings.',
        image: coverIntelliframeGif,
        icon: 'Zap',
      },
      {
        id: 'insight',
        title: 'Key Insight',
        subtitle: 'Designing for Variability',
        description: 'We couldn’t design this like a traditional UI problem. We had to ask: how does this behave across a range of imperfect states?',
        image: coverThumbnailIntelliframe,
        icon: 'Lightbulb',
      },
      {
        id: 'action-a',
        title: 'Defining Success',
        subtitle: 'Uncertainty Metrics',
        description: 'Defined what ‘good’ looks like under inconsistency: detection accuracy, framing stability, and when errors become noticeable to users.',
        image: 'https://images.unsplash.com/photo-1551288049-bbda38a5f9a2?auto=format&fit=crop&q=80&w=1600&h=900',
        icon: 'Target',
      },
      {
        id: 'action-b',
        title: 'Perception',
        subtitle: 'Visual Stability',
        description: 'Perceived quality matters as much as accuracy. We reduced sudden changes and smoothed transitions to avoid visual ‘jumps’ that break trust.',
        image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1600&h=900',
        icon: 'Eye',
      },
      {
        id: 'impact',
        title: 'Impact',
        subtitle: 'Shared Language',
        description: 'Improved collaboration between design, engineering, and AI teams by creating a shared language for discussing quality in non-deterministic spaces.',
        image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1600&h=900',
        icon: 'TrendingUp',
      },
      {
        id: 'reflection',
        title: 'Reflection',
        subtitle: 'Systems, Not Screens',
        description: 'Designing AI products means designing systems, not screens. Success isn’t about eliminating errors — it’s about managing how they are experienced.',
        image: 'https://images.unsplash.com/photo-1507413245164-6160d8298b31?auto=format&fit=crop&q=80&w=1600&h=900',
        icon: 'Brain',
      },
    ]
  }
];
