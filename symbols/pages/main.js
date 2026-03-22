export const main = {
  extends: 'Page',
  background: '#f8fafc',
  fontFamily: 'system-ui, -apple-system, sans-serif',
  display: 'flex',
  flow: 'row',
  gap: '20px',
  padding: '20px',

  state: {
    wines: [],
    wineType: 'reds'
  },

  onRender: (el, s) => {
    fetch('https://api.sampleapis.com/wines/' + s.wineType)
      .then(res => res.json())
      .then(data => s.update({ wines: data }))
  },

  LeftPanel: {
    extends: 'Flex',
    flow: 'column',
    gap: '24px',
    width: '240px',
    flexShrink: '0',
    padding: '20px',
    background: '#fff',
    borderRadius: '12px',
    boxShadow: '0 1px 3px rgba(0,0,0,0.08)',

    WineTypeSelect: {
      tag: 'select',
      width: '100%',
      padding: '10px 12px',
      fontSize: '14px',
      fontWeight: '500',
      color: '#0f172a',
      background: '#f1f5f9',
      border: '1px solid #e2e8f0',
      borderRadius: '8px',
      cursor: 'pointer',
      outline: 'none',

      OptionRed: { tag: 'option', props: { value: 'reds' }, text: '🍷 Red' },
      OptionWhite: { tag: 'option', props: { value: 'whites' }, text: '🥂 White' },
      OptionSparkling: { tag: 'option', props: { value: 'sparkling' }, text: '✨ Sparkling' },
      OptionRose: { tag: 'option', props: { value: 'rose' }, text: '🌹 Rosé' },
      OptionPort: { tag: 'option', props: { value: 'port' }, text: '🍇 Port' },

      on: {
        change: (ev, el, s) => {
          const wineType = ev.target.value
          s.update({ wineType, wines: [] })
          fetch('https://api.sampleapis.com/wines/' + wineType)
            .then(res => res.json())
            .then(data => s.update({ wines: data }))
        }
      }
    },

    PanelTitle: {
      tag: 'h2',
      text: 'Discover Wines',
      fontSize: '22px',
      fontWeight: '700',
      color: '#0f172a',
      margin: '0'
    },

    FlavorSection: {
      extends: 'Flex',
      flow: 'column',
      gap: '6px',
      borderLeft: '3px solid #9333ea',
      paddingLeft: '12px',

      FlavorHeading: {
        tag: 'h3',
        text: '🍇 Flavor',
        fontSize: '14px',
        fontWeight: '600',
        color: '#9333ea',
        margin: '0'
      },
      FlavorText: {
        tag: 'p',
        text: 'From bold, full-bodied Cabernets to silky Pinot Noirs — explore rich tannins, dark fruit, and earthy undertones.',
        fontSize: '13px',
        lineHeight: '1.5',
        color: '#475569',
        margin: '0'
      }
    },

    AgeSection: {
      extends: 'Flex',
      flow: 'column',
      gap: '6px',
      borderLeft: '3px solid #b45309',
      paddingLeft: '12px',

      AgeHeading: {
        tag: 'h3',
        text: '🪵 Age',
        fontSize: '14px',
        fontWeight: '600',
        color: '#b45309',
        margin: '0'
      },
      AgeText: {
        tag: 'p',
        text: 'Great wine takes time. Oak-aged reserves develop complex layers of vanilla, spice, and tobacco over years in the barrel.',
        fontSize: '13px',
        lineHeight: '1.5',
        color: '#475569',
        margin: '0'
      }
    },

    PriceSection: {
      extends: 'Flex',
      flow: 'column',
      gap: '6px',
      borderLeft: '3px solid #0d9488',
      paddingLeft: '12px',

      PriceHeading: {
        tag: 'h3',
        text: '💰 Price',
        fontSize: '14px',
        fontWeight: '600',
        color: '#0d9488',
        margin: '0'
      },
      PriceText: {
        tag: 'p',
        text: 'Whether you\'re sipping a $12 everyday pour or a $200 reserve vintage, there\'s a perfect red for every occasion and budget.',
        fontSize: '13px',
        lineHeight: '1.5',
        color: '#475569',
        margin: '0'
      }
    }
  },

  RightContent: {
    extends: 'Flex',
    flow: 'column',
    flex: '1',
    gap: '10px',
    minWidth: '0',

    Title: {
      tag: 'h1',
      text: (el, s) => s.wines.length + ' ' + s.wineType,
      margin: '0 0 10 0',
      color: '#0f172a'
    },

    Grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(5, 1fr)',
      gap: '24px',
      width: '100%',
      children: (el, s) => s.wines,
      childrenAs: 'state',
      childExtends: 'WineCard'
    }
  }
}
