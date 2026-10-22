/* Tiny SVG chart helpers. No dependencies. */
window.Charts = {
  svg(w,h){ const s=document.createElementNS("http://www.w3.org/2000/svg","svg"); s.setAttribute("viewBox",`0 0 ${w} ${h}`); s.classList.add("chart"); return s; },
  txt(s,x,y,t,opts={}){ const e=document.createElementNS("http://www.w3.org/2000/svg","text"); e.setAttribute("x",x); e.setAttribute("y",y); e.textContent=t; if(opts.anchor) e.setAttribute("text-anchor",opts.anchor); return e; },
  line(s,x1,y1,x2,y2,cls="axis"){ const e=document.createElementNS("http://www.w3.org/2000/svg","line"); e.setAttribute("x1",x1);e.setAttribute("y1",y1);e.setAttribute("x2",x2);e.setAttribute("y2",y2); e.setAttribute("class",cls); s.appendChild(e); },
  rect(s,x,y,w,h,cls="bar"){ const e=document.createElementNS("http://www.w3.org/2000/svg","rect"); e.setAttribute("x",x);e.setAttribute("y",y);e.setAttribute("width",w);e.setAttribute("height",h); e.setAttribute("class",cls); s.appendChild(e); },
  path(s,d,cls="curve"){ const e=document.createElementNS("http://www.w3.org/2000/svg","path"); e.setAttribute("d",d); e.setAttribute("class",cls); s.appendChild(e); },
  circle(s,x,y,r,cls="point"){ const e=document.createElementNS("http://www.w3.org/2000/svg","circle"); e.setAttribute("cx",x);e.setAttribute("cy",y);e.setAttribute("r",r); e.setAttribute("class",cls); s.appendChild(e); },
  barChart(container,data,{w=420,h=240,pad=30}={}){
    const s=this.svg(w,h); const max=Math.max(...data.map(d=>d.v)); const bw=(w-2*pad)/data.length;
    data.forEach((d,i)=>{ const bh=(d.v/max)*(h-2*pad); this.rect(s,pad+i*bw+2,h-pad-bh,bw-4,bh); s.appendChild(this.txt(s,pad+i*bw+bw/2,h-pad+14,d.label,{anchor:"middle"})); });
    this.line(s,pad,h-pad,w-pad,h-pad); container.appendChild(s);
  },
  normalCurve(container,{mean=0,sd=1,w=420,h=240,pad=20}={}){
    const s=this.svg(w,h); const xs=[]; for(let i=0;i<=120;i++) xs.push(-4+8*i/120);
    const pdf=x=>Math.exp(-0.5*x*x)/Math.sqrt(2*Math.PI);
    const max=pdf(0); let d=""; xs.forEach((x,i)=>{ const px=pad+(x+4)/8*(w-2*pad); const py=h-pad - (pdf(x)/max)*(h-2*pad); d+=(i?"L":"M")+px.toFixed(1)+","+py.toFixed(1); });
    this.path(s,d); this.line(s,pad,h-pad,w-pad,h-pad); container.appendChild(s);
  }
};
