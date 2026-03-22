export const CategoryPill = {
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
}
