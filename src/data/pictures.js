// Picture words for reading, rhyming and sorting skills.

/** Short-vowel consonant-vowel-consonant words a child can sound out, with a picture each. */
export const CVC = [
  { w: 'cat', e: '🐱' }, { w: 'dog', e: '🐶' }, { w: 'sun', e: '☀️' }, { w: 'bus', e: '🚌' },
  { w: 'pig', e: '🐷' }, { w: 'bed', e: '🛏️' }, { w: 'hat', e: '🎩' }, { w: 'cup', e: '🥤' },
  { w: 'fox', e: '🦊' }, { w: 'hen', e: '🐔' }, { w: 'box', e: '📦' }, { w: 'bug', e: '🐛' },
  { w: 'map', e: '🗺️' }, { w: 'net', e: '🥅' }, { w: 'web', e: '🕸️' }, { w: 'log', e: '🪵' },
  { w: 'van', e: '🚐' }, { w: 'pin', e: '📌' }, { w: 'bat', e: '🦇' }, { w: 'ant', e: '🐜' },
  { w: 'jet', e: '🛩️' }, { w: 'mud', e: '🟫' }, { w: 'pen', e: '🖊️' }, { w: 'six', e: '6️⃣' },
]

/** Groups of picturable words that rhyme with each other. */
export const RHYMES = [
  [{ w: 'cat', e: '🐱' }, { w: 'hat', e: '🎩' }, { w: 'bat', e: '🦇' }],
  [{ w: 'dog', e: '🐶' }, { w: 'log', e: '🪵' }, { w: 'frog', e: '🐸' }],
  [{ w: 'bee', e: '🐝' }, { w: 'tree', e: '🌳' }, { w: 'key', e: '🔑' }],
  [{ w: 'mouse', e: '🐭' }, { w: 'house', e: '🏠' }],
  [{ w: 'star', e: '⭐' }, { w: 'car', e: '🚗' }],
  [{ w: 'bear', e: '🐻' }, { w: 'pear', e: '🍐' }, { w: 'chair', e: '🪑' }],
  [{ w: 'moon', e: '🌙' }, { w: 'spoon', e: '🥄' }],
  [{ w: 'goat', e: '🐐' }, { w: 'boat', e: '⛵' }, { w: 'coat', e: '🧥' }],
  [{ w: 'fox', e: '🦊' }, { w: 'box', e: '📦' }, { w: 'socks', e: '🧦' }],
  [{ w: 'king', e: '🤴' }, { w: 'ring', e: '💍' }],
  [{ w: 'clock', e: '🕰️' }, { w: 'rock', e: '🪨' }, { w: 'lock', e: '🔒' }],
  [{ w: 'snake', e: '🐍' }, { w: 'cake', e: '🎂' }],
]

/** Categories for "Which one does not belong?" */
export const GROUPS = [
  { name: 'fruit', items: ['🍎', '🍌', '🍇', '🍓', '🍐', '🍊', '🍉'] },
  { name: 'animals', items: ['🐶', '🐱', '🐮', '🐷', '🐴', '🐑', '🐰'] },
  { name: 'things that go', items: ['🚗', '🚌', '🚲', '🚂', '✈️', '🚀', '🚜'] },
  { name: 'clothes', items: ['👕', '👖', '🧦', '🧢', '👟', '🧤', '👗'] },
  { name: 'sky and weather', items: ['☀️', '🌧️', '❄️', '🌈', '⛅', '🌙', '⚡'] },
  { name: 'sports balls', items: ['⚽', '🏀', '⚾', '🏈', '🎾', '🏐'] },
]
