export const main = {
  extends: 'Page',
  background: '#f5f5f5',
  fontFamily: 'system-ui, -apple-system, sans-serif',
  display: 'flex',
  flow: 'column',
  padding: '0',

  state: {
    wines: [],
    wineType: 'reds'
  },

  onRender: (el, s) => {
    fetch('https://api.sampleapis.com/wines/' + s.wineType)
      .then(res => res.json())
      .then(data => s.update({ wines: data }))
  },

  Header: {
    extends: 'Flex',
    align: 'center',
    justify: 'space-between',
    padding: '16px 48px',
    background: '#1e1e1e',
    color: 'white',
    width: '100%',

    Logo: {
      extends: 'Flex',
      align: 'center',
      padding: '12px',
      justify: 'center',
      Icon: { tag: 'span', text: '🍷', fontSize: '24px' },
      Text: { tag: 'span', text: 'VinoSphere', fontSize: '20px', fontWeight: '700' }
    },

    NavLinks: {
      extends: 'Flex',
      padding: '24px',
      fontSize: '14px',
      color: '#9ca3af',
      justify: 'center',
      Link1: { padding: '12px', tag: 'span', text: 'Discover', cursor: 'pointer', color: 'white' },
      Link2: { padding: '12px', tag: 'span', text: 'Collections', cursor: 'pointer' },
      Link3: { padding: '12px', tag: 'span', text: 'Regions', cursor: 'pointer' },
      Link4: { padding: '12px', tag: 'span', text: 'Offers', cursor: 'pointer' }
    },

    RightActions: {
      extends: 'Flex',
      align: 'center',
      marginLeft: 'auto',
      gap: '20px',
      padding: '12px',
      Search: {
        extends: 'Flex',
        align: 'center',
        padding: '8px 16px',
        background: '#333',
        borderRadius: '20px',
        width: '240px',
        Input: { tag: 'input', placeholder: 'Search wine...', background: 'transparent', border: 'none', color: 'white', width: '100%', outline: 'none' },
        Icon: { tag: 'span', text: '🔍', fontSize: '14px' }
      },
      Profile: {
        tag: 'img',
        src: 'https://i.pravatar.cc/150?u=a042581f4e29026704d',
        width: '32px',
        height: '32px',
        borderRadius: '50%',
        objectFit: 'cover'
      }
    }
  },

  Hero: {
    extends: 'Flex',
    flow: 'column',
    align: 'center',
    justify: 'center',
    width: '100%',
    padding: '64px 24px',
    background: 'url("https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb") center/cover',
    color: 'white',
    gap: '24px',
    textAlign: 'center',

    Title: {
      background: 'linear-gradient(to top right, rgba(255, 0, 140, 0.4), rgba(25, 0, 255, 0.1))',
      borderRadius: '10px',
      padding: '5px',
      tag: 'h1',
      text: 'Discover Your Perfect Pour',
      fontSize: '128px',
      fontWeight: '800',
      margin: '0',
      lineHeight: '1.2'
    },
    Subtitle: {
      background: 'linear-gradient(to top right, rgba(255, 0, 140, 0.1), rgba(25, 0, 255, 0.4))',
      borderRadius: '10px',
      padding: '5px',
      tag: 'p',
      text: 'Explore our curated collection of fine wines from around the globe. Shop now to elevate your tasting experience.',
      fontSize: '24px',
      margin: '0',
    },
  },

  ContentArea: {
    extends: 'Flex',
    flow: 'row',
    width: '95%',
    margin: '0 auto',
    padding: '48px 24px',
    gap: '40px',

    LeftPanel: {
      extends: 'Flex',
      flow: 'column',
      width: '260px',
      flexShrink: '0',
      gap: '24px',
      background: '#fff',
      padding: '24px',
      borderRadius: '16px',
      boxShadow: '10px 5px 15px rgba(0, 0, 0, 0.05)',

      Title: {
        tag: 'h2',
        text: (el, s) => 'Discover ' + s.wineType,
        fontSize: '20px',
        fontWeight: '700',
        margin: '0',
        color: '#0f172a'
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

    RightPanel: {
      extends: 'Flex',
      flow: 'column',
      flex: '1',
      minWidth: '0',
      gap: '40px',

      CategoryNav: {
        extends: 'Flex',
        align: 'center',
        justify: 'center',
        gap: '12px',
        flexWrap: 'wrap',

        childExtends: {
          tag: 'button',
          padding: '8px 20px',
          background: (el, s) => s.wineType === el.props.value ? 'linear-gradient(to top right, rgba(136, 56, 100, 1), rgba(140, 133, 199, 1))' : '#f3f4f6',
          color: (el, s) => s.wineType === el.props.value ? 'white' : '#4b5563',
          border: 'none',
          borderRadius: '20px',
          fontSize: '14px',
          fontWeight: '500',
          cursor: 'pointer',
          on: {
            click: (ev, el, s) => {
              const wineType = el.props.value
              s.update({ wineType, wines: [] })
              fetch('https://api.sampleapis.com/wines/' + wineType)
                .then(res => res.json())
                .then(data => s.update({ wines: data }))
            }
          }
        },

        Red: { text: 'Red Wine', props: { value: 'reds' } },
        White: { text: 'White Wine', props: { value: 'whites' } },
        Sparkling: { text: 'Sparkling', props: { value: 'sparkling' } },
        Rose: { text: 'Rosé', props: { value: 'rose' } },
        Port: { text: 'Port', props: { value: 'port' } }
      },

      GridSection: {
        extends: 'Flex',
        flow: 'column',
        width: '100%',
        gap: '24px',

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
  }
}
