export const WineCard = {
  extends: 'Flex',
  flow: 'column',
  padding: 'A',
  gap: 'Z',
  background: 'white',
  round: 'A',
  borderWidth: '1px',
  borderStyle: 'solid',
  borderColor: '#e2e8f0',

  WineImage: {
    tag: 'img',
    src: (el, s) => s.image || '',
    width: '100%',
    height: '180px',
    objectFit: 'contain'
  },

  Winery: {
    tag: 'span',
    text: (el, s) => s.winery || '',
    fontSize: '12px',
    color: '#64748b'
  },

  WineName: {
    tag: 'h3',
    text: (el, s) => s.wine || '',
    margin: '0',
    fontSize: '16px',
    fontWeight: '600',
    color: '#0f172a'
  },

  Location: {
    tag: 'span',
    text: (el, s) => s.location || '',
    fontSize: '13px',
    color: '#475569'
  }
}
