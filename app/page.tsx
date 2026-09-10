import Link from "next/link";
import Navbar from "@/components/Navbar";
import Reveal from "@/components/Reveal";
import ProjectConceptVisual from "@/components/ProjectConceptVisual";

const stats = [
  ["01", "Project", "In development"],
  ["01", "Core Domain", "Civil Engineering"],
  ["Continuous", "Learning", "Build · test · improve"],
  ["Focused", "Direction", "Civil × Intelligent Systems"],
];

export default function HomePage() {
  return (
    <main className="portfolio">
      <Navbar />

      <section className="home-hero">
        <div className="site-container" style={{paddingTop:"clamp(70px,9vw,128px)",paddingBottom:"clamp(68px,8vw,110px)"}}>
          <div style={{display:"grid",gridTemplateColumns:"minmax(0,1.05fr) minmax(340px,.95fr)",gap:"clamp(38px,6vw,86px)",alignItems:"center"}} className="home-project-grid">
            <div>
              <p className="eyebrow">Civil Engineering × Intelligent Systems</p>
              <h1 style={{fontSize:"clamp(58px,7.4vw,118px)",lineHeight:.86,letterSpacing:"-.055em",fontWeight:400,margin:"18px 0 34px",color:"#17292c"}}>
                Building<br /><span style={{color:"#367f82"}}>physical systems</span><br />that can think.
              </h1>
              <p className="body-large" style={{maxWidth:690}}>
                I&apos;m Muhammad Yahya, a Civil Engineering student exploring how sensing, robotics, embedded systems and machine learning can extend the way engineers observe and understand the built environment.
              </p>
              <div style={{display:"flex",gap:14,flexWrap:"wrap",marginTop:32}}>
                <Link href="/projects/aevns" className="button home-contact-button">View AEVNS-CI <span aria-hidden="true">→</span></Link>
                <Link href="/about" className="button" style={{background:"transparent",color:"#17302f",border:"1px solid rgba(23,48,47,.22)"}}>About me</Link>
              </div>
            </div>
            <ProjectConceptVisual />
          </div>
        </div>
      </section>

      <section className="section-paper" style={{borderTop:"1px solid rgba(31,55,49,.1)",borderBottom:"1px solid rgba(31,55,49,.1)"}}>
        <div className="site-container" style={{display:"grid",gridTemplateColumns:"repeat(4,minmax(0,1fr))"}}>
          {stats.map(([value,label,note],i)=><div key={label} style={{padding:"34px 22px",borderRight:i<stats.length-1?"1px solid rgba(31,55,49,.12)":"none"}}>
            <strong style={{display:"block",fontSize:20,fontWeight:500,color:"#1d3031"}}>{value}</strong>
            <span style={{display:"block",fontSize:15,marginTop:8,color:"#526967"}}>{label}</span>
            <small style={{display:"block",fontSize:11,letterSpacing:".08em",textTransform:"uppercase",marginTop:8,color:"#879692"}}>{note}</small>
          </div>)}
        </div>
      </section>

      <section className="section">
        <div className="site-container">
          <Reveal>
            <div style={{display:"grid",gridTemplateColumns:"minmax(260px,.7fr) minmax(0,1.3fr)",gap:"clamp(42px,7vw,110px)",alignItems:"start"}}>
              <div>
                <p className="eyebrow">Engineering Focus</p>
                <h2 className="section-heading">Civil engineering as the foundation.</h2>
                <p className="body-large">Intelligent technologies are the extension—not the replacement.</p>
              </div>
              <div style={{display:"grid",gridTemplateColumns:"repeat(2,minmax(0,1fr))",gap:14}}>
                {[
                  ["01","Civil Engineering","The problem domain: slope-condition inspection and the built environment."],
                  ["02","Embedded Systems","ESP32 control, sensors, energy monitoring and physical data acquisition."],
                  ["03","Robotics","Autonomous 4WD mobility used to reach and inspect test areas."],
                  ["04","Data + ML","Telemetry, structured datasets and later condition-attention analysis."],
                ].map(([n,t,d])=><article key={n} style={{padding:24,border:"1px solid rgba(32,61,54,.13)",borderRadius:20,background:"rgba(255,255,255,.48)"}}><span style={{fontSize:11,letterSpacing:".14em",color:"#6f8780"}}>{n}</span><h3 style={{fontSize:20,margin:"12px 0 8px",fontWeight:500}}>{t}</h3><p style={{margin:0,lineHeight:1.65,color:"#62716e"}}>{d}</p></article>)}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section section-paper">
        <div className="site-container">
          <div style={{display:"flex",justifyContent:"space-between",alignItems:"end",gap:24,marginBottom:32}}>
            <div><p className="eyebrow">Featured Project</p><h2 className="section-heading" style={{marginBottom:0}}>AEVNS-CI</h2></div>
            <Link href="/projects/aevns" style={{textDecoration:"none",color:"inherit"}}>Open project →</Link>
          </div>
          <Link href="/projects/aevns" style={{display:"grid",gridTemplateColumns:"minmax(320px,.95fr) minmax(0,1.05fr)",gap:34,textDecoration:"none",color:"inherit",alignItems:"center"}}>
            <ProjectConceptVisual compact />
            <div>
              <p className="eyebrow">Prototype / In Development</p>
              <h3 style={{fontSize:"clamp(34px,4vw,62px)",fontWeight:400,lineHeight:1.02,letterSpacing:"-.035em",margin:"12px 0 20px"}}>Autonomous slope-condition inspection rover</h3>
              <p className="body-large">A low-cost, solar-assisted 4WD rover being developed to observe slope inclination, soil moisture and visible ground cracks while transmitting field data to a computer for logging and later analysis.</p>
              <div className="project-tags" style={{marginTop:22}}>{["Civil Engineering","ESP32","4WD Robotics","Sensors","Telemetry","Computer Vision"].map(t=><span key={t}>{t}</span>)}</div>
            </div>
          </Link>
        </div>
      </section>

      <style>{`
        @media (max-width: 900px){
          .home-project-grid{grid-template-columns:1fr !important}
        }
        @media (max-width: 720px){
          .home-hero + section .site-container{grid-template-columns:repeat(2,1fr) !important}
          .home-hero + section .site-container > div:nth-child(2){border-right:none !important}
        }
      `}</style>
    </main>
  );
}
