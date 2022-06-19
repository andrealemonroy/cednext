export const appendgtm = () => {
  const script = document.createElement('script');
  script.id = 'gpt';
  script.src = "https://www.googletagservices.com/tag/js/gpt.js";
  script.async = true;
  document.body.appendChild(script);
}

export const appendembi = () => {
  const script = document.createElement('script');
  script.id = 'embi';
  script.src = "https://embi-media.com/hb_resources/cuanto_esta_el_dolar/3ad87725.js";
  script.async = true;
  document.body.appendChild(script);
}

export const removegtm = () => {
  const gpt = document.getElementById('gpt')
  if(gpt) document.body.removeChild(gpt);
}

export const removeembi = () => {
  const embi = document.getElementById('embi')
  const render = false;
  if(embi) {
    document.body.removeChild(embi);
    render = true;
  }
  return render;
}

export const refreshSlots = () => {
  console.log("REFRESH SLOTS::")
  setTimeout(() => {
    const googletag = window.googletag || {};
    googletag.cmd = googletag.cmd || [];
    googletag.cmd.push(()=>{
      try {
        googletag.pubads().refresh();
      } catch (error) {
        googletag.pubads().refresh();
      }
    })
  }, 200);
}