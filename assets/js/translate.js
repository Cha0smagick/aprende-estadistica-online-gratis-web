/* Google Translate bajo demanda: no se carga nada de Google hasta que el usuario pulsa "Traducir". */
(function(){
  let loading=false, loaded=false;
  function load(){
    if(loaded||loading) return;
    loading=true;
    window.googleTranslateElementInit=function(){
      try{
        new window.google.translate.TranslateElement(
          {pageLanguage:"es",autoDisplay:false,layout:window.google.translate.TranslateElement.InlineLayout.SIMPLE},
          "google_translate_element"
        );
        loaded=true;
      }catch(e){
        const box=document.getElementById("google_translate_element");
        if(box) box.textContent="No se pudo cargar el traductor.";
      }
    };
    const s=document.createElement("script");
    s.src="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    s.onerror=function(){
      const box=document.getElementById("google_translate_element");
      if(box) box.textContent="No se pudo cargar el traductor.";
    };
    document.head.appendChild(s);
  }
  document.addEventListener("DOMContentLoaded",function(){
    const btn=document.getElementById("translate-toggle");
    const box=document.getElementById("google_translate_element");
    if(!btn||!box) return;
    btn.addEventListener("click",function(){
      box.style.display="block";
      btn.setAttribute("aria-expanded","true");
      load();
    });
  });
})();
