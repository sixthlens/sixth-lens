import { dashboard, img } from "@/data/home-v2";

export function Capabilities() {
  return (
    <section className="sec navy-sec dash"><div className="wrap">
      <div className="dash-grid">
        <div className="dash-copy">
          <span className="kicker">{dashboard.kicker}</span>
          <h2 className="h2 white">{dashboard.title}</h2>
          <p className="body">{dashboard.body}</p>
          <div className="dash-features">
            {dashboard.features.map(f => (
              <div className="dash-feature" key={f.title}>
                <span className="fx" aria-hidden="true">{f.icon}</span>
                <div><h3>{f.title}</h3><p>{f.desc}</p></div>
              </div>
            ))}
          </div>
        </div>
        <div className="dash-stage">
          <div className="dash-frame">
            <div className="bar"><i></i><i></i><i></i></div>
            <img src={img(dashboard.image)} alt="Connected operations dashboard" loading="lazy" />
          </div>
          <div className="dash-chip glass c1"><b>{dashboard.chips[0].value}</b><span>{dashboard.chips[0].label}</span></div>
          <div className="dash-chip glass c2"><b>{dashboard.chips[1].value}</b><span>{dashboard.chips[1].label}</span></div>
        </div>
      </div>
    </div></section>
  );
}
