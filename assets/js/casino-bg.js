/* Animated casino background: floating chips, dice, cards, neon glow. */
(function(){
  if(window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const canvas=document.createElement("canvas");
  canvas.id="casino-bg"; canvas.style.cssText="position:fixed;inset:0;z-index:-1;pointer-events:none;opacity:.35";
  document.body.prepend(canvas);
  const ctx=canvas.getContext("2d");
  let W,H,parts=[];
  const glyphs=["♠","♥","♦","♣","CHIP","🎲","7","BAR","★"];
  const colors=["#ffb703","#fb8500","#ef4444","#34d399","#a78bfa"];
  function resize(){ W=canvas.width=innerWidth; H=canvas.height=innerHeight; }
  resize(); addEventListener("resize",resize);
  function spawn(){ return {x:Math.random()*W, y:Math.random()*H, vx:(Math.random()-.5)*.4, vy:(Math.random()-.5)*.4, r:Math.random()*14+8, g:glyphs[Math.floor(Math.random()*glyphs.length)], c:colors[Math.floor(Math.random()*colors.length)], a:Math.random()*.6+.2, rot:Math.random()*Math.PI*2, vr:(Math.random()-.5)*.01}; }
  for(let i=0;i<40;i++) parts.push(spawn());
  function draw(){
    ctx.clearRect(0,0,W,H);
    // subtle radial gradient glow
    const g=ctx.createRadialGradient(W/2,H/2,0,W/2,H/2,Math.max(W,H)/1.2);
    g.addColorStop(0,"rgba(255,183,3,0.06)"); g.addColorStop(1,"rgba(0,0,0,0)");
    ctx.fillStyle=g; ctx.fillRect(0,0,W,H);
    for(const p of parts){
      p.x+=p.vx; p.y+=p.vy; p.rot+=p.vr;
      if(p.x< -50) p.x=W+50; if(p.x>W+50) p.x=-50;
      if(p.y< -50) p.y=H+50; if(p.y>H+50) p.y=-50;
      ctx.save(); ctx.translate(p.x,p.y); ctx.rotate(p.rot);
      ctx.globalAlpha=p.a; ctx.fillStyle=p.c;
      ctx.font=`bold ${p.r}px 'Inter',sans-serif`; ctx.textAlign="center"; ctx.textBaseline="middle";
      ctx.fillText(p.g,0,0);
      ctx.restore();
    }
    ctx.globalAlpha=1;
    requestAnimationFrame(draw);
  }
  draw();
})();
