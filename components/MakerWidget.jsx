const MakerWidget = () => {
    const script = `
    (function(d, h, m){
      var js, fjs = d.getElementsByTagName(h)[0];
      if (d.getElementById(m)){return;}
      js = d.createElement(h); js.id = m;
      js.onload = function(){
          window.makerWidgetComInit({
          position: "right",          
          widget: "bzj4epbml0qwscke-lccro6xdn2ialfkq-0iwh2c4nnxxuwmne"                
      })};
      js.src = "https://makerwidget.com/js/embed.js";
      fjs.parentNode.insertBefore(js, fjs)
  }(document, "script", "dhm"))
  `
  
    return (
      <>
        <script async src="https://makerwidget.com/js/embed.js"></script>
        <script dangerouslySetInnerHTML={{ __html: script }} />
      </>
    )
  }
  
  export default MakerWidget;