//
// Load and export list of characters
import bulma from './assets/characters/bulma.png'
import majinbu from './assets/characters/majinbu2.png'
import freezer from './assets/characters/freezer.png'
import goku from './assets/characters/goku2.png'
import gohan from './assets/characters/gohan.png'
import krillin from './assets/characters/krillin.png'
import piccolo from './assets/characters/piccolo.png'
import roshi from './assets/characters/roshi.png'
import satan from './assets/characters/satan.png'
import trunks from './assets/characters/trunks.png'
import vegeta from './assets/characters/vegeta.png'
import androide from './assets/characters/androide.png'
import goten from './assets/characters/goten.png'
import oldkai from './assets/characters/oldkai.png'
import tenjinhan from './assets/characters/tenjinhan.png'
import chichi from './assets/characters/chichi.png'
import yayirobe from './assets/characters/yayirobe.png'
import pilaf from './assets/characters/pilaf.png'

export const cards = [
  {id: crypto.randomUUID(), name: 'Bulma', img: bulma, clicked: false},
  {id: crypto.randomUUID(), name: 'Majinbu', img: majinbu, clicked: false}, 
  {id: crypto.randomUUID(), name: 'Freezer', img: freezer, clicked: false},
  {id: crypto.randomUUID(), name: 'Gohan', img: gohan, clicked: false},
  {id: crypto.randomUUID(), name: 'Goku', img: goku, clicked: false},
  {id: crypto.randomUUID(), name: 'Krillin', img: krillin, clicked: false},
  {id: crypto.randomUUID(), name: 'Piccolo', img: piccolo, clicked: false},
  {id: crypto.randomUUID(), name: 'Roshi', img: roshi, clicked: false},
  {id: crypto.randomUUID(), name: 'Satan', img: satan, clicked: false},
  {id: crypto.randomUUID(), name: 'Trunks', img: trunks, clicked: false},
  {id: crypto.randomUUID(), name: 'Vegeta', img: vegeta, clicked: false},
  {id: crypto.randomUUID(), name: 'Androide', img: androide, clicked: false},
  {id: crypto.randomUUID(), name: 'Goten', img: goten, clicked: false},
  {id: crypto.randomUUID(), name: 'OldKai', img: oldkai, clicked: false},
  {id: crypto.randomUUID(), name: 'Tenjinhan', img: tenjinhan, clicked: false},
  {id: crypto.randomUUID(), name: 'Chichi', img: chichi, clicked: false},
  {id: crypto.randomUUID(), name: 'Yayirobe', img: yayirobe, clicked: false},
  {id: crypto.randomUUID(), name: 'Pilaf', img: pilaf, clicked: false}
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


