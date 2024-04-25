//
// Load and export list of characters

export const cards = [
  {id: crypto.randomUUID(), name: 'Bulma', img: '/src/assets/characters/bulma.png', clicked: false},
  {id: crypto.randomUUID(), name: 'Majinbu', img: '/src/assets/characters/majinbu2.png', clicked: false}, 
  {id: crypto.randomUUID(), name: 'Freezer', img: '/src/assets/characters/freezer.png', clicked: false},
  {id: crypto.randomUUID(), name: 'Gohan', img: '/src/assets/characters/gohan.png', clicked: false},
  {id: crypto.randomUUID(), name: 'Goku', img: '/src/assets/characters/goku2.png', clicked: false},
  {id: crypto.randomUUID(), name: 'Krillin', img: '/src/assets/characters/krillin.png', clicked: false},
  {id: crypto.randomUUID(), name: 'Piccolo', img: '/src/assets/characters/piccolo.png', clicked: false},
  {id: crypto.randomUUID(), name: 'Roshi', img: '/src/assets/characters/roshi.png', clicked: false},
  {id: crypto.randomUUID(), name: 'Satan', img: '/src/assets/characters/satan.png', clicked: false},
  {id: crypto.randomUUID(), name: 'Trunks', img: '/src/assets/characters/trunks.png', clicked: false},
  {id: crypto.randomUUID(), name: 'Vegeta', img: '/src/assets/characters/vegeta.png', clicked: false},
  {id: crypto.randomUUID(), name: 'Androide', img: '/src/assets/characters/androide.png', clicked: false},
  {id: crypto.randomUUID(), name: 'Goten', img: '/src/assets/characters/goten.png', clicked: false},
  {id: crypto.randomUUID(), name: 'OldKai', img: '/src/assets/characters/oldkai.png', clicked: false},
  {id: crypto.randomUUID(), name: 'Tenjinhan', img: '/src/assets/characters/tenjinhan.png', clicked: false},
  {id: crypto.randomUUID(), name: 'Chichi', img: '/src/assets/characters/chichi.png', clicked: false},
  {id: crypto.randomUUID(), name: 'Yayirobe', img: '/src/assets/characters/yayirobe.png', clicked: false},
  {id: crypto.randomUUID(), name: 'Pilaf', img: '/src/assets/characters/pilaf.png', clicked: false}
]

//
// shuffle array function

export function shuffle(array) {
  let shuffled = [... array]
  for (let i = shuffled.length - 1; i > 0; i--) { 
    const j = Math.floor(Math.random() * (i + 1)); 
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]; 
  } 
  return shuffled; 
}


