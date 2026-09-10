const nodes = [
  ["FIELD", "Slope · soil · cracks"],
  ["SENSE", "IMU · moisture · camera"],
  ["CONTROL", "ESP32 · navigation"],
  ["LINK", "Wi-Fi · UDP"],
  ["ANALYSE", "Python · CSV · ML"],
];
export default function SystemFlow() {
  return <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(150px,1fr))", gap:12, marginTop:30 }}>
    {nodes.map(([k,v],i)=><div key={k} style={{position:"relative",padding:"20px 18px",borderRadius:18,border:"1px solid rgba(40,70,58,.16)",background:"rgba(255,255,255,.55)"}}>
      <span style={{fontSize:10,letterSpacing:".14em",opacity:.55}}>0{i+1} · {k}</span><p style={{margin:"9px 0 0",fontSize:14,lineHeight:1.45}}>{v}</p>
      {i<nodes.length-1 && <span aria-hidden="true" style={{position:"absolute",right:-10,top:"50%",transform:"translateY(-50%)",fontSize:18,opacity:.45}}>→</span>}
    </div>)}
  </div>
}
