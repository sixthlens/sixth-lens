const companies = ["NORTHSTAR", "AURELIA", "VERO", "FLUX", "SYNTH", "LUMEN"];

export function TrustedBy() {
  return (
    <section className="trusted-section" aria-label="Companies we work with">
      <div className="container">
        <p>Trusted by teams creating what&apos;s next</p>
        <div className="trusted-section__marquee">
          {companies.map((company) => <span key={company}>{company}</span>)}
        </div>
      </div>
    </section>
  );
}
