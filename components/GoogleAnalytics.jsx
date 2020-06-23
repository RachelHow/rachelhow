const GoogleAnalytics = () => {
    const script = `
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'UA-170426932-1');
  `
  
    return (
      <>
        <script async src="https://www.googletagmanager.com/gtag/js?id=UA-170426932-1"></script>
        <script dangerouslySetInnerHTML={{ __html: script }} />
      </>
    )
  }
  
  export default GoogleAnalytics;