export const WineCard = {
  extends: 'Flex',
  flow: 'column',
  gap: '12px',
  cursor: 'pointer',
  border: '1px solid #ccd3e2ff',
  background: '#ffffff',
  boxShadow: '10px 5px 15px rgba(0, 0, 0, 0.05)',
  borderRadius: '16px',
  padding: '12px',

  state: {
    showLightbox: false
  },

  ImageContainer: {
    extends: 'Flex',
    align: 'center',
    justify: 'center',
    borderRadius: '16px',
    padding: '24px',
    position: 'relative',

    FavoriteIcon: {
      tag: 'span',
      text: '❤️',
      position: 'absolute',
      top: '16px',
      right: '16px',
      fontSize: '18px',
      background: 'white',
      padding: '10px',
      display: 'flex',
      align: 'center',
      justify: 'center',
      borderRadius: '50%',
      background: '#f8f8f8ff',
      boxShadow: '10px 5px 5px rgba(0, 0, 0, 0.05)'
    },

    WineImage: {
      tag: 'img',
      src: (el, s) => s.image || '',
      width: '100%',
      height: '240px',
      objectFit: 'contain',
      on: {
        click: (ev, el, s) => {
          s.update({ showLightbox: true })
        }
      }
    }
  },

  Lightbox: {
    if: (el, s) => s.showLightbox,
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    background: 'rgba(110, 110, 110, 0.75)',
    display: 'flex',
    align: 'center',
    justify: 'center',
    zIndex: '9999',
    borderRadius: '50px',
    padding: '80px',
    boxShadow: '15px 10px 10px rgba(0, 0, 0, 0.2)',

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
      padding: '20px',
      borderRadius: '50%',
      cursor: 'pointer',
      display: 'flex',
      align: 'center',
      justify: 'center',
      boxShadow: '10px 5px 5px rgba(0, 0, 0, 0.05)',
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

  Info: {
    extends: 'Flex',
    flow: 'column',
    gap: '4px',

    WineryAndPrice: {
      extends: 'Flex',
      align: 'center',
      justify: 'space-between',
      marginTop: '4px',

      Winery: {
        tag: 'span',
        text: (el, s) => s.winery || '',
        fontSize: '14px',
        color: '#6b7280'
      },

      RatingPrice: {
        tag: 'span',
        text: (el, s) => '⭐ ' + (s.rating?.average || 'N/A'),
        fontSize: '14px',
        fontWeight: '600',
        color: '#111827'
      }
    },

    WineName: {
      tag: 'h3',
      text: (el, s) => s.wine || '',
      margin: '0',
      fontSize: '16px',
      fontWeight: '600',
      color: '#111827',
      lineHeight: '1.4'
    }
  }
}
