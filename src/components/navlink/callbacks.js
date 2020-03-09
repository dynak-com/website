export function onResize(navLinkRef) {
  if (window.innerWidth >= 992) {
    navLinkRef.current.dataset.toggle = '';
  } else {
    navLinkRef.current.dataset.toggle = 'collapse';
  }
}
