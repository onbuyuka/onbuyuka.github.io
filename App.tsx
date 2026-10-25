import { ArrowDownIcon, ExternalLinkIcon, GitHubIcon, LinkedInIcon, MailIcon } from './components/Icons';
import { impact } from './data/impact';
import { dateNightProject, projects, radioProject, worldCupProject } from './data/projects';
import { Assembly } from './components/Assembly';
import { ProjectFeature } from './components/ProjectFeature';

const resumeUrl = `${import.meta.env.BASE_URL}Onat_Buyukakkus_resume.pdf`;

export default function App() {
  return (
    <div className="site-page">
      <a className="ct-skip-link" href="#main">Skip to content</a>

      <header className="ct-header ct-container" id="top">
        <a className="ct-identity" href="#top" aria-label="Onat Buyukakkus, back to top">
          <span className="ct-wordmark" aria-hidden="true">ob<span>.</span></span>
          <span className="ct-identity-name">Onat<br />Buyukakkus</span>
        </a>
        <nav aria-label="Primary navigation">
          <a href="#impact">Impact</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
          <a className="ct-resume" href={resumeUrl} target="_blank" rel="noopener noreferrer">
            R&eacute;sum&eacute; <ExternalLinkIcon />
          </a>
        </nav>
      </header>

      <main id="main" tabIndex={-1}>
        <section className="ct-hero ct-container" aria-labelledby="hero-heading">
          <div className="ct-hero-meta ct-mono">
            <span><span className="ct-square" aria-hidden="true" /> Software engineer &amp; product builder</span>
            <span>Copenhagen, Denmark</span>
          </div>
          <div className="ct-hero-grid">
            <div className="ct-hero-copy">
              <h1 id="hero-heading">
                <span>I make complex </span>
                <span>things work </span>
                <span className="ct-together">together<span className="ct-period">.</span></span>
              </h1>
              <p className="ct-hero-intro">
                I&apos;m Onat, a senior software engineer at Microsoft.
                I build business applications, integration platforms and agent-ready systems.
                On the side, I work on personal projects.
              </p>
              <div className="ct-hero-actions">
                <a className="ct-button" href="#impact">
                  Explore my work <ArrowDownIcon />
                </a>
                <a className="ct-text-link" href="#contact">Get in touch <span aria-hidden="true">&#8599;</span></a>
              </div>
            </div>
            <Assembly />
          </div>
          <div className="ct-hero-foot ct-mono">
            <span>Built to connect.</span>
            <a href="#impact" aria-label="Scroll to selected impact"><ArrowDownIcon /></a>
          </div>
        </section>

        <section className="ct-impact" id="impact" aria-labelledby="impact-heading">
          <div className="ct-container">
            <div className="ct-section-label ct-mono"><span>01 / Selected impact</span><span>At Microsoft</span></div>
            <div className="ct-section-intro">
              <h2 id="impact-heading">Behind the scenes.<br /><span>Out in the real world.</span></h2>
              <p>At Microsoft, I help build Dynamics 365 Business Central&mdash;the ERP software
                businesses rely on every day.</p>
            </div>
            <div className="ct-impact-list">
              {impact.map((item) => {
                const scope = item.scope;
                return (
                  <article className="ct-impact-row" key={item.index}>
                    <span className="ct-impact-number ct-mono">{item.index}</span>
                    <div className="ct-impact-title">
                      <p className="ct-mono">{item.label}</p>
                      <h3>{item.title}</h3>
                    </div>
                    <div className="ct-impact-detail">
                      <p>{item.description}</p>
                      <div className="ct-impact-links">
                        {item.links.map((link) => (
                          <a href={link.href} key={link.href} target="_blank" rel="noopener noreferrer">
                            {link.label} <span aria-hidden="true">&#8599;</span>
                          </a>
                        ))}
                      </div>
                    </div>
                    <div className={scope.kind === 'metric' ? 'ct-impact-scope ct-impact-adoption' : 'ct-impact-scope'}>
                      {scope.kind === 'capabilities' ? (
                        <ul className="ct-impact-capabilities">
                          {scope.items.map((capability) => <li key={capability}>{capability}</li>)}
                        </ul>
                      ) : <p>{scope.value}</p>}
                      <span className="ct-mono">{scope.label}</span>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="ct-projects ct-container" id="projects" aria-labelledby="projects-heading">
          <div className="ct-section-label ct-mono"><span>02 / Independent work</span><span>From idea to everyday use</span></div>
          <div className="ct-section-intro">
            <h2 id="projects-heading">Systems are interesting.<br /><span>People are the point.</span></h2>
            <p>Outside work, I follow an idea all the way through:
              the domain, the interface and the details that make it useful.</p>
          </div>
          <ProjectFeature
            project={dateNightProject}
            number="01"
            caption="Real application. Fictional demo events and people."
            accessNote="Organiser access is invitation-only."
          />
          <ProjectFeature
            project={worldCupProject}
            number="02"
            displayTitle="World Cup 2026"
            caption="Real application. Group standings, team details and a predicted bracket."
            accessNote="The bracket shown is a prediction, not a tournament result."
          />
          <ProjectFeature
            project={radioProject}
            number="03"
            caption="Real application. Home, playlist selection, then playback."
            accessNote="Desktop browser and Spotify Premium required. Access is limited to allow-listed accounts."
          />
          <div className="ct-experiments" id="experiments" aria-labelledby="experiments-heading">
            <div className="ct-experiment-heading">
              <h3 id="experiments-heading">More things I&apos;ve made.</h3>
              <p>Other ideas I&apos;ve followed through.</p>
            </div>
            <ol className="ct-experiment-list" start={4}>
              {projects.map((project, index) => (
                <li className="ct-experiment-row" key={project.title}>
                  <span className="ct-experiment-number ct-mono" aria-hidden="true">
                    {String(index + 4).padStart(2, '0')}
                  </span>
                  <div>
                    <h4>{project.title}</h4>
                    <p>{project.tagline}</p>
                  </div>
                  <div className="ct-experiment-links">
                    {project.liveUrl && (
                      <a className="ct-text-link" href={project.liveUrl} target="_blank" rel="noopener noreferrer" aria-label={`Open ${project.title}`}>
                        Open <ExternalLinkIcon />
                      </a>
                    )}
                    <a className="ct-text-link" href={project.repoUrl} target="_blank" rel="noopener noreferrer" aria-label={`${project.title} source code`}>
                      <GitHubIcon /> Source
                    </a>
                  </div>
                </li>
              ))}
            </ol>
            <div className="ct-more-work">
              <p>There&apos;s more where that came from.</p>
              <a className="ct-text-link" href="https://github.com/onbuyuka" target="_blank" rel="noopener noreferrer">
                <GitHubIcon /> Explore my GitHub <span aria-hidden="true">&#8599;</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="ct-contact" id="contact" aria-labelledby="contact-heading">
        <div className="ct-container">
          <div className="ct-contact-main">
            <div>
              <p className="ct-kicker ct-mono">Good things start with a conversation.</p>
              <h2 id="contact-heading">Let&apos;s build<br />something<span>.</span></h2>
            </div>
            <div className="ct-contact-side">
              <p>Got an idea, a role, or just want to talk shop over coffee?
                My inbox is open &mdash; I read everything and reply to most.</p>
              <div className="ct-socials">
                <a href="mailto:onatbuyukakkus@gmail.com" aria-label="Email Onat"><MailIcon /></a>
                <a href="https://github.com/onbuyuka" target="_blank" rel="noopener noreferrer" aria-label="Onat on GitHub"><GitHubIcon /></a>
                <a href="https://linkedin.com/in/onatbuyukakkus" target="_blank" rel="noopener noreferrer" aria-label="Onat on LinkedIn"><LinkedInIcon /></a>
              </div>
            </div>
          </div>
          <div className="ct-footer-line ct-mono">
            <span>&copy; {new Date().getFullYear()} Onat Buyukakkus</span>
            <a href="#top">Back to top <span aria-hidden="true">&#8593;</span></a>
          </div>
        </div>
      </footer>
    </div>
  );
}
