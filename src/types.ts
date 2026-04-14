import coverIntelliframeGif from './assets/cover-intelliframe.gif';
import coverVideoGenwayGif from './assets/cover-video-genway.gif';
import frame12 from './assets/Frame 12.png';
import genwayBackcover from './assets/genway-backcover.png';
import genwayConference from './assets/genway-conference.jpg';
import genwayFunnel from './assets/genway-funnel.svg';
import genwayGptFramer from './assets/genway-gpt-framer.png';
import genwayLobby02 from './assets/genway-lobby-2.png';
import image19 from './assets/image 19.png';
import logoGenway from './assets/logo-genway.svg';
import logoMicrosoft from './assets/logo-microsoft.png';
import slide17 from './assets/Slide17.png';
import slide6 from './assets/Slide6.png';
import slide7 from './assets/Slide7.png';
import slide9 from './assets/Slide9.png';

export interface CaseStudySection {
  id: string;
  title: string;
  navTitle?: string;
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
        navTitle: 'Cover',
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
        title: 'Context',
        navTitle: 'Context',
        subtitle: 'Not Enough Published Projects',
        description: 'The main business problem was that too few users were publishing projects. The product team believed that if more projects got published, more users would reach insights and overall adoption would grow.',
        image: coverVideoGenwayGif,
        icon: 'Zap',
        showTitle: false,
      },
      {
        id: 'insight',
        title: 'The Problem',
        subtitle: 'Start Earlier In The Funnel',
        description: 'Instead of optimizing publishing first, we chose to move one step earlier in the journey. If we could increase the number of people who created a project, that would feed the next stage of the funnel and raise the number of published projects over time.',
        image: genwayFunnel,
        icon: 'Lightbulb',
      },
      {
        id: 'action-a',
        title: 'Key Insight',
        subtitle: 'Creation Before Publishing',
        description: 'We mapped the funnel and focused on the earliest meaningful behavior we could improve quickly: getting more users to create a project. The assumption was simple: stronger creation volume would naturally improve publishing volume downstream.',
        image: genwayConference,
        icon: 'Workflow',
      },
      {
        id: 'action-b',
        title: 'Funnel Strategy',
        subtitle: 'Landing Page And GPT First Value',
        description: 'A core part of the funnel strategy was improving the landing page and shifting onboarding from setup first to value first. Instead of asking users to configure a project before they understood the product, Genway GPT let them express a research goal immediately and get value before setup.',
        image: genwayGptFramer,
        icon: 'Zap',
      },
      {
        id: 'action-c',
        title: 'Move Fast',
        subtitle: 'Lobby Screen For Participants',
        description: 'Section 6 focused on the lobby screen and onboarding for participating users who were about to be interviewed. I improved the pre-interview experience so participants had more context, lower friction, and a clearer sense of what would happen before joining the interview itself.',
        image: genwayLobby02,
        icon: 'ShieldCheck',
      },
      {
        id: 'impact',
        title: 'Impact',
        subtitle: 'Visual Identity And Impact',
        description: 'Together, these onboarding changes created a clearer and more expressive first impression of the product. By combining GPT-first value, a stronger lobby screen, and a sharper visual identity, we improved the path into project creation and supported the broader adoption goals behind the funnel.',
        image: genwayBackcover,
        icon: 'TrendingUp',
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
        navTitle: 'Cover',
        subtitle: 'Cloud IntelliFrame',
        description: 'At Microsoft, I worked on Cloud IntelliFrame for Teams — an AI feature that helps remote participants better see people in physical meeting rooms by turning one room camera into individual participant views.',
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
        navTitle: 'Context',
        subtitle: 'Unstable Real-World Input',
        description: 'The challenge looked simple on paper: detect faces and show them as tiles. In reality, people move, overlap, turn away, and enter or leave the frame across rooms with different lighting, sizes, cameras, and setups. Because the system is AI-driven, the output is probabilistic, so the real design problem was creating a coherent experience when the input is constantly unstable.',
        image: coverIntelliframeGif,
        icon: 'Zap',
      },
      {
        id: 'insight',
        title: 'Key Insight',
        subtitle: 'A Behavioral System, Not A Screen',
        description: 'The key realization was that this was not a UI problem. We were designing how the system behaves across many imperfect scenarios, and users would judge it not only by accuracy, but by whether it felt stable, understandable, and trustworthy.',
        image: slide6,
        icon: 'Lightbulb',
      },
      {
        id: 'action-a',
        title: 'Reframed The Goal',
        subtitle: 'Human Comprehension',
        description: 'We reframed the product from showing AI detections to helping remote participants understand who is in the room. That shifted the focus from technical output to human comprehension.',
        image: image19,
        icon: 'Target',
      },
      {
        id: 'action-b',
        title: 'UX System',
        subtitle: 'Rules, Not Just Layouts',
        description: 'Instead of designing one layout, I defined a system of rules for when to switch views, how to handle overlap and movement, how the experience should adapt to different rooms and participant counts, and what should happen when AI confidence was low. We were designing logic, not just visuals.',
        image: slide9,
        icon: 'Eye',
      },
      {
        id: 'action-c',
        title: 'Designed For Variability',
        subtitle: 'Transitions And Trust',
        description: 'A major shift was designing for real-world conditions instead of perfect demos. We focused heavily on transitions, because if the system constantly reframes people or jumps between states, it breaks trust. The goal was to make motion feel smooth, predictable, and non-disruptive even when the AI kept changing underneath.',
        image: slide7,
        icon: 'Workflow',
      },
      {
        id: 'impact',
        title: 'Impact',
        subtitle: 'Reusable UX Framework',
        description: 'The outcome was not just a feature, but a reusable UX framework: clearer rules for gallery composition and behavior, better collaboration between design, engineering, and AI teams, and a more consistent experience across real-world conditions that supported productization and launch readiness.',
        image: slide17,
        icon: 'TrendingUp',
      },
      {
        id: 'reflection',
        title: 'Reflection',
        subtitle: 'Designing Under Uncertainty',
        description: 'This project shaped how I think about AI design: you are not designing perfect outputs, you are designing how systems behave under uncertainty. Trust does not come from accuracy alone, but from making the system feel stable, predictable, and appropriate.',
        image: frame12,
        icon: 'Brain',
      },
    ]
  }
];
