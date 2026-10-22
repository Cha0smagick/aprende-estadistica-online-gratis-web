/* Tiny SVG chart helpers. No dependencies. */
window.Charts = {
  svg(w,h){ const s=document.createElementNS("http://www.w3.org/2000/svg","svg"); s.setAttribute("viewBox",`0 0 ${w} ${h}`); s.setAttribute("width","100%"); s.setAttribute("height","auto"); s.classList.add("chart"); s.style.maxWidth=w+"px"; return s; },
  txt(s,x,y,t,opts={}){ const e=document.createElementNS("http://www.w3.org/2000/svg","text"); e.setAttribute("x",x); e.setAttribute("y",y); e.textContent=t; if(opts.anchor) e.setAttribute("text-anchor",opts.anchor); if(opts.size) e.setAttribute("font-size",opts.size); if(opts.fill) e.setAttribute("fill",opts.fill); if(opts.weight) e.setAttribute("font-weight",opts.weight); return e; },
  line(s,x1,y1,x2,y2,cls="axis",color){ const e=document.createElementNS("http://www.w3.org/2000/svg","line"); e.setAttribute("x1",x1);e.setAttribute("y1",y1);e.setAttribute("x2",x2);e.setAttribute("y2",y2); e.setAttribute("class",cls); if(color) e.setAttribute("stroke",color); s.appendChild(e); },
  rect(s,x,y,w,h,cls="bar",fill){ const e=document.createElementNS("http://www.w3.org/2000/svg","rect"); e.setAttribute("x",x);e.setAttribute("y",y);e.setAttribute("width",w);e.setAttribute("height",h); e.setAttribute("class",cls); if(fill) e.setAttribute("fill",fill); s.appendChild(e); },
  path(s,d,cls="curve",fill){ const e=document.createElementNS("http://www.w3.org/2000/svg","path"); e.setAttribute("d",d); e.setAttribute("class",cls); if(fill){ e.setAttribute("fill",fill); e.setAttribute("stroke","none"); } s.appendChild(e); },
  circle(s,x,y,r,cls="point",fill){ const e=document.createElementNS("http://www.w3.org/2000/svg","circle"); e.setAttribute("cx",x);e.setAttribute("cy",y);e.setAttribute("r",r); e.setAttribute("class",cls); if(fill) e.setAttribute("fill",fill); s.appendChild(e); },
  barChart(container,data,{w=520,h=260,pad=30}={}){
    const s=this.svg(w,h); const max=Math.max(...data.map(d=>d.v),0.001); const bw=(w-2*pad)/data.length;
    data.forEach((d,i)=>{ const bh=(d.v/max)*(h-2*pad); this.rect(s,pad+i*bw+2,h-pad-bh,bw-4,bh,"bar",d.fill); s.appendChild(this.txt(s,pad+i*bw+bw/2,h-pad+14,d.label,{anchor:"middle",size:9})); });
    this.line(s,pad,h-pad,w-pad,h-pad); container.appendChild(s);
  },
  normalCurve(container,{mean=0,sd=1,w=560,h=280,pad=24, shade=true}={}){
    const s=this.svg(w,h);
    const xMin=mean-4*sd, xMax=mean+4*sd, range=xMax-xMin;
    const pdf=x=>Math.exp(-0.5*Math.pow((x-mean)/sd,2))/(sd*Math.sqrt(2*Math.PI));
    const max=pdf(mean);
    // shaded area under curve (between -1sd and +1sd, ~68%)
    if(shade){
      let d=""; const shadeXs=[]; for(let i=0;i<=100;i++) shadeXs.push(mean-sd + (2*sd)*i/100);
      shadeXs.forEach((x,i)=>{ const px=pad+(x-xMin)/range*(w-2*pad); const py=h-pad-(pdf(x)/max)*(h-2*pad); d+=(i?"L":"M")+px.toFixed(1)+","+py.toFixed(1); });
      // close path down to baseline
      const lastX=shadeXs[shadeXs.length-1]; const firstX=shadeXs[0];
      d+=`L${(pad+(lastX-xMin)/range*(w-2*pad)).toFixed(1)},${h-pad}`;
      d+=`L${(pad+(firstX-xMin)/range*(w-2*pad)).toFixed(1)},${h-pad}Z`;
      this.path(s,d,"curve", "rgba(255,183,3,0.25)");
    }
    // curve line
    const xs=[]; for(let i=0;i<=200;i++) xs.push(xMin + range*i/200);
    let d2=""; xs.forEach((x,i)=>{ const px=pad+(x-xMin)/range*(w-2*pad); const py=h-pad-(pdf(x)/max)*(h-2*pad); d2+=(i?"L":"M")+px.toFixed(1)+","+py.toFixed(1); });
    const pathEl=document.createElementNS("http://www.w3.org/2000/svg","path");
    pathEl.setAttribute("d",d2); pathEl.setAttribute("class","curve"); pathEl.setAttribute("stroke","var(--accent)"); pathEl.setAttribute("stroke-width","3"); pathEl.setAttribute("fill","none");
    s.appendChild(pathEl);
    // baseline
    this.line(s,pad,h-pad,w-pad,h-pad);
    // mean line
    const mx=pad+(mean-xMin)/range*(w-2*pad);
    this.line(s,mx,pad*0.5,mx,h-pad,"axis","#ffb703");
    // labels
    s.appendChild(this.txt(s,mx,h-pad+16,"μ",{anchor:"middle",size:11,fill:"#ffb703",weight:"bold"}));
    // ±1σ markers
    [-1,1].forEach(k=>{
      const x=mean+k*sd; const px=pad+(x-xMin)/range*(w-2*pad);
      this.line(s,px,h-pad-4,px,h-pad,"axis","#34d399");
      s.appendChild(this.txt(s,px,h-pad+16,(k>0?"+":"")+"1σ",{anchor:"middle",size:9,fill:"#34d399"}));
    });
    // ±2σ markers
    [-2,2].forEach(k=>{
      const x=mean+k*sd; const px=pad+(x-xMin)/range*(w-2*pad);
      this.line(s,px,h-pad-2,px,h-pad,"axis","#60a5fa");
    });
    // title
    s.appendChild(this.txt(s,w/2,14,"Distribución Normal N(μ,σ²)",{anchor:"middle",size:12,fill:"#e6e9ef",weight:"bold"}));
    container.appendChild(s);
  },
  scatter(container,pts,{w=420,h=320,pad=30}={}){
    const s=this.svg(w,h);
    const xs=pts.map(p=>p.x), ys=pts.map(p=>p.y);
    const xmin=Math.min(...xs), xmax=Math.max(...xs), ymin=Math.min(...ys), ymax=Math.max(...ys);
    const xr=xmax-xmin||1, yr=ymax-ymin||1;
    pts.forEach(p=>{
      const px=pad+(p.x-xmin)/xr*(w-2*pad);
      const py=h-pad-(p.y-ymin)/yr*(h-2*pad);
      this.circle(s,px,py,4,"point","#60a5fa");
    });
    this.line(s,pad,h-pad,w-pad,h-pad); this.line(s,pad,pad,pad,h-pad);
    container.appendChild(s);
  },
  regressionLine(container,pts,{w=420,h=320,pad=30}={}){
    const s=this.svg(w,h);
    const xs=pts.map(p=>p.x), ys=pts.map(p=>p.y);
    const xmin=Math.min(...xs), xmax=Math.max(...xs), ymin=Math.min(...ys), ymax=Math.max(...ys);
    const xr=xmax-xmin||1, yr=ymax-ymin||1;
    const n=pts.length;
    const mx=xs.reduce((a,b)=>a+b,0)/n, my=ys.reduce((a,b)=>a+b,0)/n;
    const num=pts.reduce((a,p)=>a+(p.x-mx)*(p.y-my),0);
    const den=pts.reduce((a,p)=>a+(p.x-mx)*(p.x-mx),0)||1;
    const b1=num/den, b0=my-b1*mx;
    pts.forEach(p=>{
      const px=pad+(p.x-xmin)/xr*(w-2*pad);
      const py=h-pad-(p.y-ymin)/yr*(h-2*pad);
      const pyh=h-pad-((b0+b1*p.x)-ymin)/yr*(h-2*pad);
      this.line(s,px,py,px,pyh,"axis","#f87171");
      this.circle(s,px,py,3,"point","#60a5fa");
    });
    const x0=xmin, x1=xmax;
    const y0=b0+b1*x0, y1v=b0+b1*x1;
    const px0=pad, px1=w-pad;
    const py0=h-pad-(y0-ymin)/yr*(h-2*pad);
    const py1=h-pad-(y1v-ymin)/yr*(h-2*pad);
    this.line(s,px0,py0,px1,py1,"curve","#ffb703");
    this.line(s,pad,h-pad,w-pad,h-pad); this.line(s,pad,pad,pad,h-pad);
    const r=num/Math.sqrt(den*pts.reduce((a,p)=>a+(p.y-my)*(p.y-my),0));
    container.appendChild(s);
    const info=document.createElement("p"); info.className="score-line"; info.innerHTML=`ŷ = ${b0.toFixed(2)} + ${b1.toFixed(2)}x · r = ${r.toFixed(3)} · r² = ${(r*r).toFixed(3)}`;
    container.appendChild(info);
  },
  histogram(container,data,{w=520,h=260,pad=30,bins=8}={}){
    const s=this.svg(w,h);
    const min=Math.min(...data), max=Math.max(...data);
    const bw=(max-min)/bins||1;
    const counts=Array(bins).fill(0);
    data.forEach(v=>{ let b=Math.floor((v-min)/bw); if(b>=bins) b=bins-1; if(b<0) b=0; counts[b]++; });
    const maxc=Math.max(...counts,1);
    const barw=(w-2*pad)/bins;
    const colors=["#60a5fa","#34d399","#ffb703","#f472b6","#a78bfa","#fb923c","#f87171","#22d3ee"];
    counts.forEach((c,i)=>{
      const bh=(c/maxc)*(h-2*pad);
      this.rect(s,pad+i*barw+1,h-pad-bh,barw-2,bh,"bar",colors[i%colors.length]);
      s.appendChild(this.txt(s,pad+i*barw+barw/2,h-pad+12,(min+i*bw).toFixed(1),{anchor:"middle",size:9,fill:"#9aa3b2"}));
      // count label on top of bar
      if(c>0) s.appendChild(this.txt(s,pad+i*barw+barw/2,h-pad-bh-4,String(c),{anchor:"middle",size:10,fill:"#e6e9ef",weight:"bold"}));
    });
    this.line(s,pad,h-pad,w-pad,h-pad); container.appendChild(s);
  }
};
