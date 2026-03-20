export const main = {
  extends: 'Page',
  padding: '20px',
  background: '#f8fafc',
  fontFamily: 'system-ui, -apple-system, sans-serif',

  state: {
    wines: []
  },

  onRender: (el, s) => {
    fetch('https://api.sampleapis.com/wines/reds')
      .then(res => res.json())
      .then(data => s.update({ wines: data }))
  },

  Title: {
    tag: 'h1',
    text: (el, s) => s.wines.length + ' Red Wines',
    margin: '0 0 10 0',
    color: '#0f172a'
  },

  Grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '24px',
    width: '100%',
    $children: (el, s) => s.wines,
    childExtends: 'WineCard'
  }
}
