

export const defineSlot = (slotId) => {

  const googletag = window?.googletag || {};
  googletag.cmd = googletag.cmd || [];

  googletag.cmd.push(function() {
    googletag.display(slotId);
  });
}