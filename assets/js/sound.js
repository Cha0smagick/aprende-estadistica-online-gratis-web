/* Casino-style sound effects via Web Audio (no external files). */
(function(){
  let ctx = null;
  let muted = (localStorage.getItem("sound_muted") === "1");
  function getCtx(){
    if(muted) return null;
    if(!ctx){ try{ ctx = new (window.AudioContext||window.webkitAudioContext)(); }catch(e){ return null; } }
    if(ctx.state === "suspended") ctx.resume();
    return ctx;
  }
  function tone(freq, dur, type="sine", gain=0.15, delay=0){
    const c = getCtx(); if(!c) return;
    const o = c.createOscillator(); const g = c.createGain();
    o.type = type; o.frequency.value = freq;
    g.gain.setValueAtTime(0, c.currentTime+delay);
    g.gain.linearRampToValueAtTime(gain, c.currentTime+delay+0.01);
    g.gain.exponentialRampToValueAtTime(0.0001, c.currentTime+delay+dur);
    o.connect(g); g.connect(c.destination);
    o.start(c.currentTime+delay); o.stop(c.currentTime+delay+dur+0.05);
  }
  function noise(dur=0.15, gain=0.08){
    const c = getCtx(); if(!c) return;
    const buf = c.createBuffer(1, c.sampleRate*dur, c.sampleRate);
    const data = buf.getChannelData(0);
    for(let i=0;i<data.length;i++) data[i] = (Math.random()*2-1);
    const src = c.createBufferSource(); src.buffer = buf;
    const g = c.createGain(); g.gain.setValueAtTime(gain, c.currentTime);
    g.gain.exponentialRampToValueAtTime(0.0001, c.currentTime+dur);
    const filt = c.createBiquadFilter(); filt.type="bandpass"; filt.frequency.value=1200; filt.Q.value=1;
    src.connect(filt); filt.connect(g); g.connect(c.destination);
    src.start(); src.stop(c.currentTime+dur+0.02);
  }
  window.Sound = {
    muted(){ return muted; },
    toggle(){
      muted = !muted; localStorage.setItem("sound_muted", muted?"1":"0");
      if(!muted) getCtx();
      return muted;
    },
    correct(){ // slot-machine win: ascending chime + sparkle
      tone(523.25,0.12,"triangle",0.18,0);
      tone(659.25,0.12,"triangle",0.18,0.10);
      tone(783.99,0.18,"triangle",0.20,0.20);
      noise(0.08,0.05);
    },
    wrong(){ // buzzer
      tone(180,0.25,"sawtooth",0.12,0);
      tone(140,0.30,"sawtooth",0.10,0.05);
    },
    jackpot(){ // fanfare
      [523.25,659.25,783.99,1046.5].forEach((f,i)=>tone(f,0.18,"triangle",0.22,i*0.12));
      noise(0.2,0.08);
    },
    levelup(){ [392,523.25,659.25,783.99].forEach((f,i)=>tone(f,0.15,"square",0.15,i*0.10)); },
    click(){ tone(880,0.05,"sine",0.06,0); },
    complete(){ [523.25,659.25,783.99,1046.5,1318.5].forEach((f,i)=>tone(f,0.16,"triangle",0.20,i*0.10)); noise(0.25,0.10); }
  };
  // expose mute button helper
  window.Sound.initToggle = function(btn){
    if(!btn) return;
    const sync = ()=>{ btn.textContent = muted ? "🔇" : "🔊"; btn.setAttribute("aria-pressed", muted?"true":"false"); };
    sync();
    btn.addEventListener("click",()=>{ window.Sound.toggle(); sync(); });
  };
})();
