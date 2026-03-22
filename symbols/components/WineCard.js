export const WineCard = {
  extends: 'Flex',
  flow: 'column',
  padding: 'A',
  gap: 'Z',
  background: 'white',
  round: 'A',
  borderRadius: '40px',
  borderWidth: '1px',
  borderStyle: 'solid',
  borderColor: '#e2e8f0',

  state: {
    showLightbox: false
  },

  WineImage: {
    tag: 'img',
    src: (el, s) => s.image || '',
    width: '100%',
    height: '200px',
    objectFit: 'contain',
    cursor: 'pointer',
    on: {
      click: (ev, el, s) => {
        s.update({ showLightbox: true })
      }
    }
  },

  Lightbox: {
    if: (el, s) => s.showLightbox,
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    background: 'rgba(0, 0, 0, 0.85)',
    display: 'flex',
    align: 'center',
    justify: 'center',
    zIndex: '9999',
    borderRadius: '50px',
    padding: '125px',

    CloseButton: {
      tag: 'button',
      text: '✕',
      position: 'absolute',
      top: '24px',
      right: '24px',
      fontSize: '24px',
      lineHeight: '1',
      fontWeight: '700',
      color: '#fff',
      background: 'rgba(255, 255, 255, 0.15)',
      border: 'none',
      padding: '20',
      borderRadius: '50%',
      cursor: 'pointer',
      display: 'flex',
      on: {
        click: (ev, el, s) => {
          s.update({ showLightbox: false })
        }
      }
    },

    LargeImage: {
      tag: 'img',
      src: (el, s) => s.image || '',
      maxWidth: '75vw',
      maxHeight: '75vh',
      objectFit: 'contain',
      margin: 'auto',
      borderRadius: '8px'
    }
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
    height: '60px',
    color: '#0f172a'
  },

  Location: {
    tag: 'span',
    text: (el, s) => s.location || '',
    fontSize: '13px',
    color: '#475569'
  },

  Reviews: {
    extends: 'Flex',
    flow: 'row',
    align: 'center',
    gap: 'Z',
    marginTop: '4px',

    Rating: {
      tag: 'span',
      text: (el, s) => '⭐ ' + (s.rating?.average || 'N/A'),
      fontSize: '14px',
      fontWeight: '600',
      color: '#f59e0b'
    },

    ReviewCount: {
      tag: 'span',
      text: (el, s) => (s.rating?.reviews || '0') || '0 ratings',
      fontSize: '12px',
      color: '#64748b'
    }
  }
}
