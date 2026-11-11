import { useState, type FormEvent, type ReactNode } from 'react'
import { Link, useLocation } from 'react-router-dom'
import {
  ArrowDown, ArrowRight, ArrowUpRight, Boxes, BriefcaseBusiness,
  Check, ChevronDown, Code2, HeartPulse, Menu, Network, PanelsTopLeft,
  Settings2, X,
} from 'lucide-react'
import './site.css'

const HR = 'hr@danalyticsinc.com'
const PHONE1 = '(678) 383-4523'
const PHONE2 = '(510) 967-3651'
const ADDRESS = '11535 Parkwoods Circle, Suite A, Alpharetta, GA 30005'
const ORIGIN = 'https://danalyticsinc.com'
const links = [
  ['Home', '/'], ['About', '/about'], ['Services', '/services'],
  ['Solutions', '/solutions'], ['Careers', '/careers'], ['Contact', '/contact'],
] as const

function Brand() {
  return <Link to="/" className="da-brand" aria-label="Discovery Analytics home">
    <img className="da-brand-mark" src="/images/discovery/home/discovery-monogram.svg" alt="" />
    <span className="da-brand-name"><strong>discovery</strong><small>analytics</small></span>
  </Link>
}

function SiteHeader() {
  const [open, setOpen] = useState(false)
  return <header className="da-header">
    <div className="da-nav">
      <Brand />
      <nav className={`da-nav-links${open ? ' is-open' : ''}`} aria-label="Main navigation">
        {links.slice(1).map(([label, href]) => <Link key={href} to={href} onClick={() => setOpen(false)}>{label}</Link>)}
        <Link className="da-button da-button-primary da-nav-cta" to="/contact" onClick={() => setOpen(false)}>Start a conversation <ArrowUpRight size={16} /></Link>
      </nav>
      <Link className="da-mobile-contact" to="/contact">Contact <ArrowUpRight size={14} /></Link>
      <button className="da-menu-toggle" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
    </div>
  </header>
}

function SiteFooter() {
  return <footer className="da-footer">
    <div className="da-footer-main">
      <div className="da-footer-promise"><Brand /><h2>Technology. Talent.<br />Forward.</h2><p>Human insight. Technology in motion.</p></div>
      <div className="da-footer-nav"><div><b>EXPLORE</b>{links.slice(0, 4).map(([label, href]) => <Link key={href} to={href}>{label}</Link>)}</div><div><b>CONNECT</b><Link to="/careers">Careers</Link><Link to="/contact">Contact</Link><a href={`mailto:${HR}`}>Email us <ArrowUpRight size={12} /></a></div></div>
    </div>
    <div className="da-footer-contact"><a href={`mailto:${HR}`}>{HR}</a><span>{PHONE1} &nbsp;·&nbsp; {PHONE2}</span><span>{ADDRESS}</span></div>
    <div className="da-footer-bottom"><span>© 2026 Discovery Analytics. All rights reserved.</span><span>HUMAN INSIGHT. &nbsp; TECHNOLOGY IN MOTION.</span></div>
  </footer>
}

function DiscoveryHead({ title, description }: { title: string; description: string }) {
  const location = useLocation()
  const pageUrl = `${ORIGIN}${location.pathname}`
  return <>
    <title>{`${title} | Discovery Analytics`}</title>
    <meta name="description" content={description}/><meta name="author" content="Discovery Analytics"/><meta name="robots" content="index, follow"/>
    <link rel="canonical" href={pageUrl}/><meta property="og:title" content={`${title} | Discovery Analytics`}/><meta property="og:description" content={description}/><meta property="og:type" content="website"/><meta property="og:url" content={pageUrl}/><meta property="og:image" content={`${ORIGIN}/images/discovery/home/discovery-monogram.svg`}/>
    <meta name="twitter:card" content="summary"/><meta name="twitter:title" content={`${title} | Discovery Analytics`}/><meta name="twitter:description" content={description}/><meta name="twitter:image" content={`${ORIGIN}/images/discovery/home/discovery-monogram.svg`}/><link rel="icon" href="/images/discovery/home/discovery-monogram.svg" type="image/svg+xml"/>
  </>
}

function PageFrame({ title, description, children }: { title: string; description: string; children: ReactNode }) {
  return <div className="da-site"><DiscoveryHead title={title} description={description}/><SiteHeader />{children}<SiteFooter /></div>
}

function Eyebrow({ children, light = false }: { children: ReactNode; light?: boolean }) {
  return <div className={`da-eyebrow${light ? ' is-light' : ''}`}><i />{children}</div>
}

function Button({ to = '/contact', children, secondary = false }: { to?: string; children: ReactNode; secondary?: boolean }) {
  return <Link className={`da-button${secondary ? ' da-button-outline' : ' da-button-primary'}`} to={to}>{children}<ArrowUpRight size={16} /></Link>
}

function NetworkStudy() {
  return <div className="da-network-study" aria-label="Illustration of connected people, processes, and technology">
    <div className="da-study-caption">FIG. A / CONNECTED INTELLIGENCE</div>
    <span className="da-study-label da-label-left">HUMAN INSIGHT</span><span className="da-study-label da-label-right">TECHNOLOGY IN MOTION</span>
    <img className="da-network-layer da-routes" src="/images/discovery/home/signal-routes.svg" alt="" />
    <img className="da-network-layer da-prism" src="/images/discovery/home/intelligence-prism.svg" alt="" />
    <img className="da-network-layer da-data-streams" src="/images/discovery/home/data-streams.svg" alt="" />
    <img className="da-network-layer da-orbital-path" src="/images/discovery/home/orbital-path.png" alt="" />
    <img className="da-network-layer da-outer-orbit" src="/images/discovery/home/outer-orbit.svg" alt="" />
    <img className="da-network-layer da-coordinate-grid" src="/images/discovery/home/coordinate-grid.svg" alt="" />
    <img className="da-network-layer da-network-node da-node-1" src="/images/discovery/home/network-node.svg" alt="" />
    <img className="da-network-layer da-network-node da-node-2" src="/images/discovery/home/network-node1.svg" alt="" />
    <img className="da-network-layer da-network-node da-node-3" src="/images/discovery/home/network-node1.svg" alt="" />
    <img className="da-network-layer da-network-node da-node-4" src="/images/discovery/home/network-node1.svg" alt="" />
    <img className="da-network-layer da-network-node da-node-5" src="/images/discovery/home/network-node1.svg" alt="" />
    <div className="da-study-key"><i /> PEOPLE × PROCESS × TECHNOLOGY</div>
  </div>
}

const capabilities = [
  { n: '01', kind: 'BUILD', title: 'Application development', text: 'Custom software, architecture, integration and portfolio management. Built around the way your business works.', icon: Code2, image: 'capability-illustration.svg', tone: 'dark' },
  { n: '02', kind: 'ENABLE', title: 'IT consulting', text: 'A clear perspective on complex challenges. Strategy that connects business priorities with technical decisions.', icon: Network, image: 'capability-illustration1.svg', tone: 'lavender' },
  { n: '03', kind: 'CONNECT', title: 'Staffing', text: 'Connect the right skills with the right opportunities through tailored recruitment and staff augmentation.', icon: BriefcaseBusiness, image: 'capability-illustration2.svg', tone: 'light' },
  { n: '04', kind: 'ENABLE', title: 'Healthcare technology', text: 'Healthcare management systems designed around the needs of care organizations and their operations.', icon: HeartPulse, image: 'capability-illustration3.svg', tone: 'mint' },
  { n: '05', kind: 'ENABLE', title: 'ERP solutions', text: 'Bring enterprise processes together with SAP and ERP services, integration and application support.', icon: PanelsTopLeft, image: 'capability-illustration4.svg', tone: 'soft' },
  { n: '06', kind: 'ENABLE', title: 'Networking', text: 'Wireless, mobility, optimization and resilient network design. Connect your business with confidence.', icon: Network, image: 'capability-illustration5.svg', tone: 'soft' },
  { n: '07', kind: 'MANAGE', title: 'Systems management', text: 'Monitoring, storage, data security and recovery planning for the systems your business relies on.', icon: Settings2, image: 'capability-illustration6.svg', tone: 'light' },
  { n: '08', kind: 'IMAGINE', title: 'Animation', text: 'Ideas brought into motion through 2D and 3D animation, VFX, CGI, storyboarding and postproduction.', icon: Boxes, image: 'capability-illustration7.svg', tone: 'lavender' },
]

function CapabilityCard({ capability: c, large = false }: { capability: typeof capabilities[number]; large?: boolean }) {
  return <Link to="/services" className={`da-cap-card da-tone-${c.tone}${large ? ' is-large' : ''}`}>
    <div className="da-card-top"><span>{c.n} / {c.kind}</span><span className={`da-card-art${large ? ' is-large' : ''}`}><img src={`/images/discovery/home/${c.image}`} alt="" /></span></div>
    <div className="da-cap-detail"><h3>{c.title}</h3><p>{c.text}</p><span className="da-card-link">{c.n === '01' ? 'Discuss your application' : c.n === '02' ? 'Talk technology strategy' : 'Explore capability'} <ArrowUpRight size={13}/></span></div>
  </Link>
}

const phases = [
  ['01', 'Discover', 'Understand the challenge, the people and the systems behind it.'],
  ['02', 'Design', 'Connect requirements to a practical solution and delivery plan.'],
  ['03', 'Deliver', 'Bring technology and talent together through close collaboration.'],
  ['04', 'Evolve', 'Support, manage and refine as your business needs change.'],
]

function Process({ title = 'A practical path forward.', label = 'OUR APPROACH / CONNECTED DELIVERY' }: { title?: ReactNode; label?: string }) {
  return <section className="da-process da-dark-section"><div className="da-wrap"><Eyebrow light>{label}</Eyebrow><div className="da-process-heading"><h2>{title}</h2><p>Start with the challenge, shape a clear plan and keep the business context in view throughout delivery.</p></div><div className="da-phase-grid">{phases.map(([n, t, d]) => <article key={n}><div className="da-phase-line"><span>{n}</span><i /></div><h3>{t}</h3><p>{d}</p></article>)}</div></div></section>
}

function Partnership({ title = 'Let’s have a candid conversation.', text = 'Talk through your priorities, our approach and what you need to make an informed decision.' }: { title?: string; text?: string }) {
  return <section className="da-partnership"><div><Eyebrow>{'THE START OF A GOOD PARTNERSHIP'}</Eyebrow><h2>{title}</h2><p>{text}</p></div><Button>Start a conversation</Button></section>
}

function SplitHero({ label, title, text, action = 'Discuss your priorities', list, visual }: { label: string; title: ReactNode; text: string; action?: string; list?: string[]; visual?: ReactNode }) {
  return <section className="da-subhero da-dark-section"><div className="da-wrap da-subhero-grid"><div><Eyebrow light>{label}</Eyebrow><h1>{title}</h1><p>{text}</p><Button>{action}</Button></div><div className={`da-subhero-side${visual ? ' has-visual' : ''}`}>{visual || list?.map((x,i)=><div key={x}><span>0{i+1}</span><b>{x}</b><ArrowUpRight size={16}/></div>)}</div></div></section>
}

export function HomePage() {
  return <PageFrame title="Home" description="Connect business, technology and talent with Discovery Analytics.">
    <main>
      <section className="da-home-hero da-dark-section"><div className="da-wrap da-hero-layout"><div className="da-hero-copy"><Eyebrow light>HUMAN INSIGHT. TECHNOLOGY IN MOTION.</Eyebrow><h1>Complexity,<br />connected.</h1><p>Bring technology, talent and business into alignment. We help you navigate what’s complex — and build what comes next.</p><div className="da-actions"><Button>Let’s talk</Button><Button secondary to="/services">Explore services</Button></div><small>TAILORED SOLUTIONS. LASTING PARTNERSHIPS.</small></div><NetworkStudy /></div><div className="da-capability-ribbon"><div>ONE PARTNER.<br />CONNECTED CAPABILITIES.</div><b>IT services <i>/</i> Human capital <i>/</i> Product development</b><a href="#perspective">DISCOVER MORE ↓</a></div></section>
      <section className="da-section da-wrap" id="perspective"><Eyebrow>01 / OUR PERSPECTIVE</Eyebrow><div className="da-editorial-grid"><h2>Progress starts with the right connections.</h2><div><p>Discovery Analytics is an emerging global IT services, recruitment and human capital organization. Our work begins with understanding your business — not prescribing a solution.</p><p>We connect strategic advice, technical expertise and the right talent to shape solutions around your challenges.</p><Link to="/about" className="da-text-link">Meet our way of thinking <ArrowUpRight size={14}/></Link></div></div><div className="da-story-visual"><img className="da-story-image" src="/images/discovery/home/material-study-in-alignment.png" alt="A study of layered glass and geometric forms"/><div><Eyebrow>A STUDY IN ALIGNMENT</Eyebrow><h3>Built around your next step.</h3><p>Our vision is to bring complete IT solutions and staff augmentation together, helping organizations move from business challenge to a practical path forward.</p><Link to="/about" className="da-text-link">Learn about us <ArrowUpRight size={14}/></Link></div></div></section>
      <section className="da-section da-capabilities da-wrap"><Eyebrow>02 / CONNECTED CAPABILITIES</Eyebrow><div className="da-editorial-grid da-section-head"><h2>Built for the challenge.<br />Not the category.</h2><p>From a single application to the people and infrastructure behind it. Explore eight ways we can move your business forward.</p></div><div className="da-cap-grid">{[[capabilities[0],capabilities[1]],[...capabilities.slice(2,5)],[...capabilities.slice(5,8)]].map((row,rowIndex)=><div className={`da-cap-row row-${rowIndex+1}`} key={rowIndex}>{row.map((c)=><CapabilityCard key={c.n} capability={c} large={rowIndex===0}/>)}</div>)}</div><p className="da-not-sure">Not sure where to begin? <Link to="/contact">Start with the challenge <ArrowUpRight size={14}/></Link></p></section>
      <Process title={<>Less fragmentation.<br />More forward motion.</>} label="03 / FROM CHALLENGE TO SOLUTION" />
      <section className="da-section da-dark-section da-product-section"><div className="da-wrap"><Eyebrow light>SOFTWARE / E2</Eyebrow><div className="da-editorial-grid da-section-head"><h2>Focused tools.<br />Connected thinking.</h2><p>Explore our E2 software offerings as a starting point. We’ll map your requirements and integration needs before recommending a fit.</p></div><div className="da-product-card"><div><small>E2 / 01</small><h3>Time Tracker</h3><p>Make time part of the bigger picture. Explore requirements, existing processes and the connections your organization needs.</p><Button>Discuss Time Tracker</Button></div><div className="da-time-study"><span>WORKFLOW TO EXPLORE</span><div>Capture <i>→</i> Review <i>→</i> Report</div><small>YOUR PEOPLE + YOUR PROCESSES + YOUR SYSTEMS</small></div></div><div className="da-product-list"><details><summary><span>E2 / 02</span><b>E-Recruit</b><small>Recruitment workflows</small><span>+</span></summary><p>Discuss your recruitment process, the information your team needs and the way an E-Recruit offering might fit your existing environment.</p><a href={`mailto:${HR}?subject=E-Recruit`}>Discuss E-Recruit <ArrowUpRight size={13}/></a></details><details><summary><span>E2 / 03</span><b>E-Invoice</b><small>Invoicing workflows</small><span>+</span></summary><p>Explore invoicing requirements, business processes and integration needs before assessing an E-Invoice fit.</p><a href={`mailto:${HR}?subject=E-Invoice`}>Discuss E-Invoice <ArrowUpRight size={13}/></a></details></div></div></section>
      <section className="da-section da-wrap"><Eyebrow>04 / WHY DISCOVERY ANALYTICS</Eyebrow><div className="da-editorial-grid da-section-head"><h2>Confidence is<br />in the approach.</h2><p>The technology matters. So does the thinking, care and collaboration behind it. This is how we approach your work.</p></div><div className="da-principles">{[['01','Reliability by design','Continuity, recovery and resilience belong in the conversation from the start — not as an afterthought.'],['02','Expertise with context','We look at the architecture and the business behind it, connecting specialist knowledge to your priorities.'],['03','Quality in the details','A thoughtful approach to design, integration and ongoing support keeps the whole lifecycle in view.'],['04','Your goals, shared','Close collaboration, tailored advice and lasting relationships guide how we work with your team.']].map(([n,t,d])=><article key={n}><span>{n}</span><h3>{t}</h3><p>{d}</p></article>)}</div></section>
      <section className="da-section da-wrap"><Eyebrow>05 / THE PEOPLE BEHIND THE THINKING</Eyebrow><div className="da-editorial-grid da-section-head"><h2>Different disciplines.<br />Shared purpose.</h2><div><p>Global perspective. Close collaboration. Our consultants work with clients to understand business challenges and bring strategic advice, technology and talent into the same conversation.</p><Link to="/careers" className="da-text-link">Explore careers at Discovery <ArrowUpRight size={14}/></Link></div></div><div className="da-collab-study"><div className="da-collab-orbit"><img className="da-collab-lines" src="/images/discovery/home/collaboration-connections.svg" alt=""/><img className="da-collab-focus" src="/images/discovery/home/shared-focus-orbit.png" alt=""/><span>Creative</span><span>Talent</span><strong>Your challenge</strong><span>Technology</span><span>Strategy</span></div><div className="da-values"><p><b>Equity and opportunity</b><br/>Room for different perspectives.</p><p><b>Innovation</b><br/>Creativity and continued development.</p><p><b>Teamwork</b><br/>Care for the responsibilities we share.</p></div></div></section>
      <div className="da-wrap"><Partnership /></div>
      <section className="da-contact-feature"><div className="da-wrap"><div><Eyebrow light>06 / LET’S TALK</Eyebrow><h2>Your next chapter<br />starts here.</h2><p>A new platform. A critical hire. A more connected business. Tell us the challenge — let’s explore the possibilities together.</p><a href={`mailto:${HR}`} className="da-feature-email">{HR} <ArrowUpRight size={15}/></a><div className="da-feature-details"><span>{PHONE1}<br/>{PHONE2}</span><span>{ADDRESS}</span></div></div><ContactForm compact /></div></section>
    </main>
  </PageFrame>
}

export function AboutPage() {
  return <PageFrame title="About" description="Meet Discovery Analytics and learn how we connect technology, people, and business.">
    <main><SplitHero label="ABOUT / DISCOVERY ANALYTICS" title={<>Progress starts with<br className="desktop-only"/> the right connections.</>} text="We’re an emerging global human capital, recruitment and IT services organization. Tailored solutions and lasting partnerships are at the heart of our work." action="Meet your next partner" visual={<img className="da-subhero-image" src="/images/discovery/about/material-study-in-alignment.png" alt="A study of transparent glass and geometric forms"/>} />
      <section className="da-section da-wrap"><Eyebrow>01 / OVERVIEW</Eyebrow><div className="da-editorial-grid da-section-head"><h2>Business understanding.<br/>Technical perspective.</h2><div><p>Our consultants combine technical and business knowledge, working closely with each client to analyze challenges and shape practical advice.</p><p>Our work spans product development, product support, printing outsourcing and staffing. We connect the right disciplines around the needs of the organization, rather than treating each challenge in isolation.</p><p>Staff augmentation supports specific assignments and periods of peak demand, bringing qualified IT personnel into collaboration with existing internal teams.</p><Link to="/services" className="da-text-link">Explore our services <ArrowUpRight size={14}/></Link></div></div><div className="da-overview-grid">{[['Product development','From understanding the business challenge to shaping and building software.'],['Product support','Technical knowledge and close collaboration throughout an application’s life.'],['Printing outsourcing','Outsourced printing support considered alongside your operational needs.'],['Staffing','Technically qualified, customer-centric IT personnel to augment internal teams.']].map(([t,d])=><article key={t}><span>CAPABILITY / {t.toUpperCase()}</span><h3>{t}</h3><p>{d}</p></article>)}</div></section>
      <section className="da-section da-dark-section"><div className="da-wrap"><Eyebrow light>02 / VISION</Eyebrow><div className="da-editorial-grid da-section-head"><h2>Complete solutions.<br/>Shared responsibility.</h2><p>Our vision is to provide complete IT solutions and staff augmentation, with a commitment to quality, on-time delivery and work that respects the client’s budget.</p></div><div className="da-value-grid">{[['01','Understand','Understand the business before recommending a solution.'],['02','Innovate','Bring innovation and creativity to practical delivery.'],['03','Grow','Encourage professional growth and effective teamwork.'],['04','Commit','Uphold ethics, quality and commitment in every relationship.']].map(([n,t,d])=><article key={n}><span>{n}</span><h3>{t}</h3><p>{d}</p></article>)}</div></div></section>
      <section className="da-section da-wrap"><Eyebrow>03 / CULTURE</Eyebrow><div className="da-editorial-grid da-section-head"><h2>Different disciplines.<br/>Shared purpose.</h2><p>We believe our entire team shares responsibility for equity and inclusion. Quality and human values are inseparable from the way we work.</p></div><div className="da-collab-study"><div className="da-collab-orbit"><span>Your challenge</span><span>Talent</span><strong>Business</strong><span>Technology</span><span>Collaboration</span></div><div className="da-values"><p><b>Equity and inclusion</b><br/>We respect global communities and make room for authentic perspectives.</p><p><b>Learning and growth</b><br/>Innovation, creativity and personal development belong in everyday work.</p><p><b>Quality and human values</b><br/>We respect employees, vendors and customers, and how we work together.</p></div></div></section>
      <section className="da-section da-light-band"><div className="da-wrap"><Eyebrow>04 / CONTINUED LEARNING</Eyebrow><div className="da-editorial-grid da-section-head"><h2>A culture that keeps learning.</h2><p>Our specialized training efforts focus on challenging technology domains, supporting personal and professional growth alongside the work.</p></div><div className="da-topic-chips">{['Software engineering','Networking and operating systems','Client-server technologies','Database administration (DBA)','Web technologies','Mobile computing'].map(x=><span key={x}>{x}<ArrowRight size={13}/></span>)}</div><Link to="/careers" className="da-text-link">Explore careers at Discovery <ArrowUpRight size={14}/></Link></div></section>
      <div className="da-wrap"><Partnership title="Build a lasting partnership." text="Bring us your business challenge, talent needs or technology priorities. Let’s explore what the right connections can make possible." /></div>
    </main>
  </PageFrame>
}

const services = [
  { n:'01', verb:'ALIGN / ENTERPRISE', title:'Business', summary:'Align enterprise IT assets with the way your business operates. We start with the business context and consider how technology can support a more connected organization.', bullets:['Enterprise IT asset alignment','Business and technical requirements','Connections across people, processes and systems'], image:'briefcase-business.svg', tone:'dark', link:'Discuss business' },
  { n:'02', verb:'CONNECT / COLLABORATE', title:'E-Business', summary:'Support collaboration through open communication and connected business processes. Our focus is the technology behind shorter response times and more effective ways of working.', bullets:['Collaboration and open communications','Connected digital business processes','Response-time and workflow considerations'], image:'workflow.svg', tone:'lavender', link:'Discuss e-business' },
  { n:'03', verb:'SUPPORT / CARE', title:'Health Care', summary:'Bring business and technology perspectives to healthcare management systems. We work with organizations to understand the applications and information needs behind their operations.', bullets:['Healthcare management systems','Application and operational requirements','Technical collaboration with client teams'], image:'heart-pulse.svg', tone:'mint', link:'Discuss health care' },
  { n:'04', verb:'MANAGE / EVOLVE', title:'Maintenance services', summary:'Application management begins with understanding the whole portfolio. We help frame maintenance requirements alongside portfolio strategy, cost considerations and IT investment decisions.', bullets:['Application management and maintenance','Application portfolio strategy','Maintenance costs and IT investment decisions'], image:'settings2.svg', tone:'soft', link:'Discuss maintenance services' },
  { n:'05', verb:'INTEGRATE / ENABLE', title:'ERP Solutions', summary:'Connect enterprise systems and the people who work with them. Our ERP scope includes SAP R/3 implementation, software implementation and the technical support around enterprise change.', bullets:['SAP R/3 implementation','Staff augmentation and software implementation','Internet technologies and ongoing support'], image:'panels-top-left.svg', tone:'soft', link:'Discuss ERP solutions' },
  { n:'06', verb:'IMAGINE / CREATE', title:'Animation', summary:'Creative production support from the first concept through postproduction. Discuss the formats, production stages and visual requirements that suit your project.', bullets:['2D animation, cel animation and 3D animation','Visual effects (VFX) and CGI','Concept, development and preproduction','Storyboarding and animatic','Gaming and postproduction'], image:'clapperboard.svg', tone:'lavender', link:'Discuss animation' },
]

export function ServicesPage() {
  return <PageFrame title="Services" description="Business, technology and creative services shaped around your requirements.">
    <main><SplitHero label="SERVICES / DISCOVERY ANALYTICS" title={<>Expertise around<br className="desktop-only"/> your business.</>} text="Enterprise needs rarely fit a single category. Connect business services, technology and creative capabilities with the right people to deliver them." action="Discuss your priorities" list={['Business & digital','Platforms & operations','Creative production']} />
      <section className="da-section da-wrap"><Eyebrow>ONE PARTNER / CONNECTED CAPABILITIES</Eyebrow><div className="da-service-ribbon"><span>Business · E-Business · Health Care</span><span>Maintenance services · ERP Solutions</span><span>Creative production · Animation · VFX · Gaming</span></div></section>
      <section className="da-section da-wrap"><Eyebrow>01 / OUR SERVICES</Eyebrow><div className="da-editorial-grid da-section-head"><h2>The right support.<br/>In the right context.</h2><p>Explore our six service areas. Every conversation starts with your requirements, the systems you already use and the people involved.</p></div><div className="da-service-grid">{services.map(s=><article key={s.n} className={`da-service-card da-tone-${s.tone}`}><div className="da-card-top"><span>{s.n} / {s.verb}</span><img src={`/images/discovery/services/${s.image}`} alt="" /></div><h3>{s.title}</h3><p>{s.summary}</p><ul>{s.bullets.map(x=><li key={x}><Check size={13}/>{x}</li>)}</ul><a href={`mailto:${HR}?subject=${encodeURIComponent(s.link)}`} className="da-text-link">{s.link} <ArrowUpRight size={13}/></a></article>)}</div></section>
      <section className="da-section da-light-band"><div className="da-wrap"><Eyebrow>02 / THE PEOPLE BEHIND THE WORK</Eyebrow><div className="da-editorial-grid da-section-head"><h2>Technology needs people who understand it.</h2><p>Services are only part of the picture. IT consulting and staffing connect specialist knowledge with your business needs, whether you need advice, specific expertise or support for an internal team.</p></div><div className="da-two-columns"><article><Eyebrow>ADVISE / ANALYZE</Eyebrow><h3>IT consulting</h3><p>Business and technical analysis, strategic advice and close client collaboration help frame the path from challenge to solution.</p></article><article><Eyebrow>CONNECT / CONTRIBUTE</Eyebrow><h3>Staff augmentation</h3><p>Customer-centric IT personnel support specific assignments and periods of peak demand alongside your existing team.</p><Link to="/careers" className="da-text-link">Talk about your talent needs <ArrowUpRight size={13}/></Link></article></div></div></section>
      <Process title="Clarity before complexity." label="03 / WORKING TOGETHER"/><div className="da-wrap"><Partnership title="Start with the challenge." text="A service inquiry, a quote or a specialist skill. Tell us where you need support and we’ll explore the right starting point." /></div>
    </main>
  </PageFrame>
}

const solutionAreas = [
  { n:'01', title:'Application Development', summary:'From planning and design to build, test and launch, connect software decisions with the needs of your business. Our scope spans custom applications, portfolio management and enterprise integration.', steps:'PLAN → DESIGN → BUILD → TEST → LAUNCH', items:['Portfolio application management','Custom applications','Customer experience, branding and usability','Enterprise application integration','Enterprise architecture and technology','Enterprise resource development and integration'] },
  { n:'02', title:'Business Continuity', summary:'Prepare for disruption with continuity planning and recovery considerations shaped around your organization. Discuss the systems, dependencies and recovery needs that matter to your business.', steps:'PREPARE / CONTINUE / RECOVER', items:['Business continuity consulting','Continuity services for medium businesses','High availability','IT recovery consulting','Enterprise Remote Copy Management Facility implementation','Geographically Dispersed Parallel Sysplex installation'] },
  { n:'03', title:'Networking', summary:'Bring convergence, mobility and resiliency into one network conversation. We consider connectivity alongside performance, security and the environment in which your teams operate.', steps:'CONNECTIVITY / MOBILITY / RESILIENCY', items:['Network convergence','Mobility and wireless','Network optimization','Security and resiliency','Medium-business networking services','Banking-industry networking'] },
  { n:'04', title:'Large Scale Enterprise Class Storage Solutions', summary:'Enterprise-scale information needs a considered storage foundation. Explore how data handling, performance, high availability and security fit together across your storage environment.', steps:'SCALE / PERFORMANCE / AVAILABILITY', items:['Enterprise-scale data handling','Storage performance considerations','High availability','Storage security requirements'] },
  { n:'05', title:'Systems Management', summary:'Monitor, manage and optimize IT infrastructure with a view across the whole environment. Connect storage compatibility, protection and consolidation needs rather than managing each in isolation.', steps:'MONITOR / MANAGE / OPTIMIZE', items:['Compatible storage and heterogeneous environments','Snapshots and backup','IP storage','Infrastructure consolidation','Encrypted communication'] },
]

export function SolutionsPage() {
  return <PageFrame title="Solutions" description="A practical set of connected technology solutions for business systems and infrastructure.">
    <main><section className="da-subhero da-dark-section"><div className="da-wrap da-solutions-hero"><div><Eyebrow light>SOLUTIONS / DISCOVERY ANALYTICS</Eyebrow><h1>Less fragmentation.<br/>More forward<br/>motion.</h1><p>Good solutions connect more than systems. They connect business goals, people and a clear way to deliver — from applications to the infrastructure behind them.</p><Button>Explore your requirements</Button></div><div className="da-solution-index"><Eyebrow light>SOLUTION AREAS</Eyebrow>{[...solutionAreas.map(x=>[x.n,x.title]),['06','E2 Tips']].map(([n,t])=><a key={n} href={`#solution-${n}`}><span>{n}</span>{t}<ArrowDown size={14}/></a>)}</div></div></section>
      <section className="da-section da-wrap"><Eyebrow>CONNECTED SOLUTIONS / BUSINESS TO INFRASTRUCTURE</Eyebrow>{solutionAreas.map(s=><article className="da-solution-row" id={`solution-${s.n}`} key={s.n}><div><Eyebrow>{s.n} / SOLUTION</Eyebrow><h2>{s.title}</h2><p>{s.summary}</p><a className="da-text-link" href={`mailto:${HR}?subject=${encodeURIComponent(s.title)}`}>Discuss {s.title.toLowerCase()} <ArrowUpRight size={13}/></a></div><div className="da-solution-panel"><span>{s.steps}</span><ul>{s.items.map(x=><li key={x}><Check size={13}/>{x}</li>)}</ul></div></article>)}</section>
      <section className="da-section da-dark-section"><div className="da-wrap"><Eyebrow light>06 / E2 TIPS</Eyebrow><div className="da-editorial-grid da-section-head"><h2>Focused tools.<br/>Connected thinking.</h2><p>Explore our E2 software offerings as a starting point. We’ll map your requirements and integration needs before recommending a fit.</p></div><div className="da-product-list da-e2-list"><details id="solution-06" open><summary><span>E2 / 01</span><b>Time Tracker</b><small>TIME WORKFLOWS</small><ChevronDown size={16}/></summary><p>Make time part of the bigger picture. Start a conversation about time tracking that fits your team. Together, we can explore requirements, existing processes and the connections your organization needs.</p><a href={`mailto:${HR}?subject=Time%20Tracker`}>Discuss Time Tracker <ArrowUpRight size={13}/></a><div className="da-time-study"><span>WORKFLOW TO EXPLORE</span><div>Capture <i>→</i> Review <i>→</i> Report</div><small>YOUR PEOPLE + YOUR PROCESSES + YOUR SYSTEMS</small></div></details><details><summary><span>E2 / 02</span><b>E-Recruit</b><small>RECRUITMENT WORKFLOWS</small><ChevronDown size={16}/></summary><p>Discuss your recruitment process, the information your team needs and the way an E-Recruit offering might fit your existing environment.</p><a href={`mailto:${HR}?subject=E-Recruit`}>Discuss E-Recruit <ArrowUpRight size={13}/></a></details><details><summary><span>E2 / 03</span><b>E-Invoice</b><small>INVOICING WORKFLOWS</small><ChevronDown size={16}/></summary><p>Explore invoicing requirements, business processes and integration needs before assessing an E-Invoice fit.</p><a href={`mailto:${HR}?subject=E-Invoice`}>Discuss E-Invoice <ArrowUpRight size={13}/></a></details></div><p className="da-fine-print">These are workflow discussion areas, not a demonstration of product features. We’ll confirm suitability and scope with you.</p></div></section>
      <Process/><div className="da-contact-cta da-dark-section"><div className="da-wrap"><div><Eyebrow light>THE START OF A GOOD PARTNERSHIP</Eyebrow><h2>Connect the pieces that matter.</h2><p>Tell us about your applications, infrastructure or workflows. We’ll explore the requirements before recommending a solution.</p></div><Button>Start a conversation</Button></div></div>
    </main>
  </PageFrame>
}

type Job = { tag: string; title: string; role: string; location: string; date: string; wage?: string; summary: string; skills: string; requirements: string; note: string; email?: string }
const recentJobs: Job[] = [
  { tag:'OCTOBER 2026 / VERIFY AVAILABILITY', title:'Database Architect', role:'Data Engineer', location:'Anywhere in USA · Multiple positions', date:'Published 10/06/2026', wage:'$164,736', summary:'Develop scalable, secure health-data pipelines using Python and SQL, with AWS Kubernetes, Airflow and Snowflake.', skills:'Python · SQL · AWS Kubernetes · Airflow · Snowflake', requirements:'MS + 1 year of experience.', note:'Availability must be verified with recruiting. The published wage is reproduced without an assumed pay period.', email:'jobs@danalyticsinc.com' },
  { tag:'OCTOBER 2026 / VERIFY AVAILABILITY', title:'Software Developer', role:'Software Engineer', location:'Anywhere in USA', date:'Published 10/06/2026', wage:'$136,658', summary:'Develop Java/Spring microservices and REST APIs, working with Angular, SQL and AWS DevOps tools.', skills:'Java · Spring · REST API · Angular · SQL · AWS DevOps tools', requirements:'MS + 1 year of experience.', note:'Availability must be verified with recruiting. The published wage is reproduced without an assumed pay period.', email:'jobs@danalyticsinc.com' },
]
const archiveJobs: Job[] = [
  { tag:'HISTORICAL NOTICE / 2025', title:'Software Developers', role:'Senior Programmer Analyst', location:'Alpharetta, GA · Multiple openings', date:'Published 02/15/2025 · Ended 03/15/2025', summary:'Mainframe software development and programming analysis using MVS, JCL, COBOL/CICS, TSO/ISPF, VSAM, SQL, DB2 and MQ Series.', skills:'MVS · JCL · COBOL/CICS · TSO/ISPF · VSAM · SQL · DB2 · MQ Series', requirements:'Bachelor’s degree + 5 years of experience.', note:'Competitive salary. Relocation to an unanticipated site; no national or international travel. This dated notice is historical, not a confirmed active opening.' },
  { tag:'UNDATED / AVAILABILITY UNCONFIRMED', title:'Mainframe Developer', role:'Analyst / Developer', location:'Atlanta, GA', date:'No publication or closing date supplied', summary:'Work with mainframe datasets and JCL, SQL and relational databases, and Windows 11 / RHEL environments. Basic programming knowledge and a few years of analyst or developer experience are described in the notice.', skills:'Mainframe datasets · JCL · SQL · Relational databases · Windows 11 · RHEL · Basic programming', requirements:'A few years of analyst / developer experience; confirm requirements with recruiting.', note:'This source listing is undated. Contact recruiting to confirm whether applications are being accepted.' },
  { tag:'HISTORICAL NOTICE / 2025', title:'Network and Computer Systems Administrators', role:'Network Engineer', location:'Alpharetta, GA · Multiple openings', date:'Published 05/01/2025 · Ended 05/31/2025', summary:'Network administration and engineering involving Cisco Prime, HP NNMi, NetBrain and Visio, including end-of-life inventory work.', skills:'Cisco Prime · HP NNMi · NetBrain · Visio · End-of-life inventory', requirements:'Master’s degree + 1 year of experience.', note:'Competitive salary. Relocation to an unanticipated site; no national or international travel. This dated notice is historical, not a confirmed active opening.' },
  { tag:'HISTORICAL PUBLICATION / CONFIRM AVAILABILITY', title:'Software Developers', role:'Software Engineer', location:'Alpharetta, GA · Multiple openings', date:'Published 10/27/2025 · Published end date: 11/26/2205', summary:'Develop backend software and UI integration endpoints; debug and refine architecture; automate code quality; work with frameworks, libraries and algorithms; support CI, build and release; provide documentation, support and troubleshooting.', skills:'Java/J2EE · Struts · Shell/batch scripts · REST API · IntelliJ · Postman · SonarQube · Coverity · JaCoCo', requirements:'Master’s degree + 1 year OR BS + 5 years of experience.', note:'The end date “11/26/2205” is reproduced as published and appears to be a source error; it is not a confirmed current closing date. Verify with recruiting.' },
]

function JobCard({ job }: { job: Job }) {
  const recipient = job.email || HR
  return <article className="da-job-card"><div className="da-job-summary"><Eyebrow>{job.tag}</Eyebrow><h3>{job.title}</h3><p>{job.role}</p><small>{job.location}</small><small>{job.date}</small>{job.wage && <div className="da-wage"><span>PUBLISHED WAGES</span><b>{job.wage}</b><small>Pay period not specified in the notice.</small></div>}</div><div className="da-job-detail"><p>{job.summary}</p><div className="da-job-skills">{job.skills}</div><p>{job.requirements}</p><p className="da-job-note">{job.note}</p><p>{job.email ? <>Email the notice contact: <a href={`mailto:${job.email}`}>{job.email}</a></> : 'For application inquiries, contact hr@danalyticsinc.com.'}</p><a className="da-button da-button-primary" href={`mailto:${recipient}?subject=${encodeURIComponent(`Application inquiry: ${job.title}`)}`}>Apply Now · Email HR <ArrowUpRight size={15}/></a></div></article>
}

export function CareersPage() {
  return <PageFrame title="Careers" description="Explore published opportunities and connect with Discovery Analytics recruiting.">
    <main><SplitHero label="CAREERS / DISCOVERY ANALYTICS" title="Work with Us." text="Bring your best to the assignments ahead. Connect your technical perspective with work shaped by collaboration, growth, equity and teamwork." action="Talk to recruiting" list={['Grow through the work.','Contribute as yourself.']} />
      <section className="da-section da-wrap da-careers-intro"><Eyebrow>DIFFERENT DISCIPLINES / SHARED PURPOSE</Eyebrow><div className="da-editorial-grid"><h2>Grow through the work.<br/>Contribute as yourself.</h2><p>We value authenticity, inclusion and access to opportunity. Personal and professional growth belong alongside the responsibilities we share.<br/><a href={`mailto:${HR}`} className="da-text-link">{HR} <ArrowUpRight size={13}/></a></p></div></section>
      <section className="da-section da-light-band"><div className="da-wrap"><Eyebrow>01 / PUBLISHED OPPORTUNITIES</Eyebrow><div className="da-editorial-grid da-section-head"><h2>Read the notice.<br/>Start a conversation.</h2><div><p>Below are all six published listings. The October 2026 notices are separated from historical and undated publications; publication does not confirm current availability.</p><p>Verify availability, requirements and application instructions with recruiting. All Apply Now actions use hr@danalyticsinc.com; the two newer notices also name jobs@danalyticsinc.com.</p></div></div><Eyebrow>OCTOBER 2026 / CONFIRM WITH RECRUITING</Eyebrow><h3 className="da-list-title">Recently published notices</h3><div className="da-job-list">{recentJobs.map(j=><JobCard key={j.title} job={j}/>)}</div><div className="da-archive-heading"><Eyebrow>PUBLICATION ARCHIVE / NOT CONFIRMED ACTIVE</Eyebrow><p>These source notices are retained for reference. Closed 2025 notices are historical; undated listings and the 2025 publication with an apparent end-date error require confirmation.</p></div><div className="da-job-list">{archiveJobs.map((j,i)=><JobCard key={`${j.title}-${i}`} job={j}/>)}</div></div></section>
      <section className="da-section da-dark-section"><div className="da-wrap da-career-contact"><div><Eyebrow light>02 / CONNECT WITH RECRUITING</Eyebrow><h2>Questions about<br/>your next step?</h2><p>Contact HR about published notices, availability or how to apply. Follow the recipient and mailing instructions in the relevant notice.</p><a href={`mailto:${HR}`} className="da-feature-email">{HR} <ArrowUpRight size={14}/></a><div className="da-mailing"><Eyebrow light>MAILING ADDRESS FOR PUBLISHED NOTICES</Eyebrow><p>{ADDRESS} USA</p></div></div><div className="da-employer-card"><Eyebrow>EMPLOYER ACCESS</Eyebrow><h3>Post Job</h3><p>Sign in to your employer account.</p><a className="da-button da-button-primary" href={`mailto:${HR}?subject=Employer%20access`}>Login <ArrowUpRight size={15}/></a><a href={`mailto:${HR}?subject=Employer%20access`}>New here? Contact IT Team <ArrowUpRight size={13}/></a><small>{HR}</small></div></div></section>
    </main>
  </PageFrame>
}

function ContactForm({ compact = false }: { compact?: boolean }) {
  const [sent, setSent] = useState(false)
  function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)
    const subject = encodeURIComponent(`Website inquiry: ${String(data.get('interest') || 'General conversation')}`)
    const body = encodeURIComponent(`Name: ${data.get('name')}\nEmail: ${data.get('email')}\nCompany: ${data.get('company')}\nService of interest: ${data.get('interest')}\n\n${data.get('message')}`)
    window.location.href = `mailto:${HR}?subject=${subject}&body=${body}`
    setSent(true)
  }
  if (sent) return <div className="da-form-card da-form-success"><Check size={24}/><h3>Your email draft is ready.</h3><p>Complete and send it in your email app. You can also reach us directly at <a href={`mailto:${HR}`}>{HR}</a>.</p></div>
  return <form className={`da-form-card${compact ? ' is-compact' : ''}`} onSubmit={submit}>
    <h3>What are you working on?</h3><p>Fields marked * are required.</p>
    <div className="da-form-grid"><label>Full name *<input name="name" required placeholder="Your full name" autoComplete="name" /></label><label>Work email *<input name="email" required type="email" placeholder="you@company.com" autoComplete="email" /></label><label>Company<input name="company" placeholder="Your organization" autoComplete="organization" /></label><label>Service of interest<select name="interest" defaultValue=""><option value="" disabled>Select a service</option>{['Business','E-Business','Health Care','Maintenance services','ERP Solutions','Animation','Application Development','Business Continuity','Networking','Staffing','General conversation'].map(x=><option key={x}>{x}</option>)}</select></label></div>
    <label>How can we help? *<textarea name="message" required placeholder="Tell us about your goals, challenges or talent needs." /></label>
    <small>Please don’t include confidential information. Your details will be used to respond to this inquiry.</small>
    <button className="da-button da-button-primary" type="submit">Send inquiry <ArrowUpRight size={15}/></button>
  </form>
}

export function ContactPage() {
  return <PageFrame title="Contact" description="Start a conversation with Discovery Analytics about business, technology, and talent needs.">
    <main><section className="da-contact-hero da-dark-section"><div className="da-wrap"><div className="da-breadcrumb"><Link to="/">Home</Link><span>/</span>Contact</div><Eyebrow light>CONTACT / DISCOVERY ANALYTICS</Eyebrow><div className="da-editorial-grid"><div><h1>Your next chapter<br/>starts here.</h1><p>A new platform. A critical hire. A more connected business. Whether you’re exploring our services, requesting a quote or just saying hello, we’d love to hear from you.</p></div><div className="da-contact-topics"><Eyebrow light>LET’S START WITH WHAT YOU NEED</Eyebrow><div><b>Services &amp; solutions</b><p>Discuss your requirements or request a quote.</p></div><div><b>Talent &amp; opportunities</b><p>Connect about staffing, assignments or published notices.</p></div><div><b>General conversation</b><p>Ask a question or introduce your organization.</p></div></div></div></div></section>
      <section className="da-contact-main da-dark-section"><div className="da-wrap da-contact-layout"><div className="da-contact-copy"><Eyebrow light>01 / LET’S TALK</Eyebrow><h2>A conversation is a good place to begin.</h2><p>Tell us about your priorities and the support you’re looking for. Use the inquiry form or contact us directly.</p><div className="da-contact-detail"><Eyebrow light>WRITE TO US</Eyebrow><a href={`mailto:${HR}`}>{HR} <ArrowUpRight size={14}/></a></div><div className="da-contact-detail"><Eyebrow light>CALL US</Eyebrow><a href="tel:+16783834523">{PHONE1}</a><a href="tel:+15109673651">{PHONE2}</a></div><div className="da-contact-detail"><Eyebrow light>FIND US</Eyebrow><span>11535 Parkwoods Circle, Suite A<br/>Alpharetta, GA 30005</span></div></div><ContactForm /></div></section>
      <section className="da-section da-wrap da-stay-connected"><Eyebrow>02 / STAY CONNECTED</Eyebrow><div className="da-editorial-grid"><div className="da-location-card"><span>ALPHARETTA / GEORGIA / USA</span><h3>Discovery Analytics</h3><p>{ADDRESS}</p><a href={`mailto:${HR}`}>Email our team before visiting <ArrowUpRight size={13}/></a></div><div><h2>Help us understand the context.</h2><p>A brief description of your goals, the service you’re considering and any relevant business context is a useful starting point.</p><p>For career inquiries, please reference the published role and confirm availability with recruiting. Avoid sending confidential project or personal information through the inquiry form.</p><Link to="/careers" className="da-text-link">Career inquiries · Email HR <ArrowUpRight size={13}/></Link></div></div></section>
    </main>
  </PageFrame>
}

