// Year plans for each child. Units follow the Ontario Kindergarten Program (2016)
// for Aliya and the Ontario Grade 1 Mathematics (2020) and Language (2023)
// curricula for Aiden. Each daily session is the unit's three on-screen steps
// plus one off-screen activity to do together.

export const LEARNERS = [
  { id: 'aiden', name: 'Aiden', born: 2020, level: 'g1', grade: 'Grade 1', avatar: '⚾', tone: 'blue', plan: 'aiden-g1', theme: 'diamond' },
  { id: 'aliya', name: 'Aliya', born: 2022, level: 'jk', grade: 'JK', avatar: '🦋', tone: 'red', plan: 'aliya-jk', theme: 'garden' },
]

export const PLANS = {
  'aliya-jk': {
    title: 'Aliya’s JK year',
    program: 'Ontario Kindergarten Program (2016)',
    minutes: 10,
    sessionsPerUnit: 5,
    readAloud: true,
    units: [
      {
        id: 'my-name', when: 'October', icon: '🦋', title: 'Letters in my name',
        frame: 'Literacy and mathematics behaviours',
        goal: 'I can find A, L, I and Y.',
        steps: [
          { skill: 'letter-pop', params: { letters: 'ALIY' }, n: 5 },
          { skill: 'big-little', params: { letters: 'ALIY' }, n: 4 },
          { skill: 'count', params: { max: 5 }, n: 4 },
        ],
        offscreen: { icon: '🧂', title: 'Name tray', text: 'Pour salt or sugar on a tray. Trace A-L-I-Y-A with one finger, then shake and try again.' },
        parent: 'Point out A, L, I and Y on signs, books and cereal boxes. Name letters by their names for now; sounds come next.',
      },
      {
        id: 'shapes', when: 'October', icon: '🔺', title: 'Shapes all around',
        frame: 'Problem solving and innovating',
        goal: 'I can find circles, squares, triangles and rectangles.',
        steps: [
          { skill: 'shapes', params: { shapes: ['circle', 'square', 'triangle', 'rectangle'] }, n: 5 },
          { skill: 'odd-one-out', n: 4 },
          { skill: 'count', params: { max: 5 }, n: 4 },
        ],
        offscreen: { icon: '🔍', title: 'Shape hunt', text: 'Walk around the house. Find something round, something square and something with three corners.' },
        parent: 'Use shape words every day: “Can you pass me the round plate?”',
      },
      {
        id: 'count-5', when: 'November', icon: '🐞', title: 'Counting to 5',
        frame: 'Literacy and mathematics behaviours',
        goal: 'I can count up to 5 things and say how many.',
        steps: [
          { skill: 'count', params: { max: 5 }, n: 5 },
          { skill: 'more-fewer', params: { max: 5 }, n: 4 },
          { skill: 'letter-pop', params: { letters: 'ALIYM' }, n: 4 },
        ],
        offscreen: { icon: '🍪', title: 'Snack count', text: 'Put out 5 crackers. Touch and count each one, then count again as they get eaten.' },
        parent: 'One number for each thing, touched once. The last number said is how many.',
      },
      {
        id: 'patterns', when: 'November', icon: '🔴', title: 'Patterns',
        frame: 'Problem solving and innovating',
        goal: 'I can finish a pattern like red, blue, red, blue.',
        steps: [
          { skill: 'patterns', params: { kinds: ['AB'] }, n: 5 },
          { skill: 'shapes', n: 4 },
          { skill: 'odd-one-out', n: 4 },
        ],
        offscreen: { icon: '🧱', title: 'Block patterns', text: 'Build a tower red, blue, red, blue. Let Aliya choose the next block each time.' },
        parent: 'Clap and stomp patterns too: clap, stomp, clap, stomp. Patterns are early algebra.',
      },
      {
        id: 'satpin', when: 'December', icon: '🐍', title: 'First sounds: s a t p i n',
        frame: 'Literacy and mathematics behaviours',
        goal: 'I can hear the first sound in a word.',
        steps: [
          { skill: 'letter-pop', params: { letters: 'SATPIN' }, n: 5 },
          { skill: 'first-sound', params: { letters: 'SATPIN' }, n: 4 },
          { skill: 'big-little', params: { letters: 'SATPIN' }, n: 4 },
        ],
        offscreen: { icon: '🔎', title: 'Sound hunt', text: 'Find 3 things at home that start with sss, like socks, a spoon and soap.' },
        parent: 'Stretch the first sound: “sssun”. Pure sounds help: say “sss”, not “suh”.',
      },
      {
        id: 'count-10', when: 'January', icon: '❄️', title: 'Counting to 10',
        frame: 'Literacy and mathematics behaviours',
        goal: 'I can count up to 10 things.',
        steps: [
          { skill: 'count', params: { max: 10 }, n: 6 },
          { skill: 'more-fewer', params: { max: 9 }, n: 4 },
          { skill: 'letter-pop', params: { letters: 'SATPINALIY' }, n: 4 },
        ],
        offscreen: { icon: '⛄', title: 'Snow jumps', text: 'Count 10 big jumps in the snow, or 10 stairs on the way to bed.' },
        parent: 'Line objects up in a row of 5 and a row of 5. It makes 10 easier to see.',
      },
      {
        id: 'rhymes', when: 'February', icon: '🎵', title: 'Rhyme time',
        frame: 'Literacy and mathematics behaviours',
        goal: 'I can hear words that rhyme, like cat and hat.',
        steps: [
          { skill: 'rhyme', n: 5 },
          { skill: 'first-sound', params: { letters: 'SATPIN' }, n: 4 },
          { skill: 'patterns', params: { kinds: ['AB', 'AAB'] }, n: 4 },
        ],
        offscreen: { icon: '📕', title: 'Rhyming books', text: 'Read a Dr. Seuss or nursery-rhyme book. Pause before the rhyming word and let Aliya fill it in.' },
        parent: 'Silly rhymes count: cat, hat, zat! Hearing rhymes comes before reading.',
      },
      {
        id: 'mdgock', when: 'March', icon: '🐶', title: 'More sounds: m d g o c k',
        frame: 'Literacy and mathematics behaviours',
        goal: 'I can match big and little letters and hear their sounds.',
        steps: [
          { skill: 'letter-pop', params: { letters: 'MDGOCK' }, n: 5 },
          { skill: 'first-sound', params: { letters: 'MDGOCK' }, n: 4 },
          { skill: 'big-little', params: { letters: 'MDGOCK' }, n: 4 },
        ],
        offscreen: { icon: '🎨', title: 'Letter art', text: 'Paint a big M and a little m. Add eyes to make them into monsters.' },
        parent: 'C and K make the same sound in “cat” and “kite”. That is fine to notice together.',
      },
      {
        id: 'more-fewer', when: 'April', icon: '⚖️', title: 'More and fewer',
        frame: 'Problem solving and innovating',
        goal: 'I can tell which group has more.',
        steps: [
          { skill: 'more-fewer', params: { max: 9 }, n: 6 },
          { skill: 'count', params: { max: 10 }, n: 4 },
          { skill: 'first-sound', n: 4 },
        ],
        offscreen: { icon: '🧸', title: 'Toy sort', text: 'Sort toys into two piles. Which pile has more? How can you check?' },
        parent: 'Lining up the two groups side by side shows “more” without counting.',
      },
      {
        id: 'sorting', when: 'April', icon: '🧺', title: 'Sorting and thinking',
        frame: 'Problem solving and innovating',
        goal: 'I can find the one that does not belong and say why.',
        steps: [
          { skill: 'odd-one-out', n: 5 },
          { skill: 'patterns', params: { kinds: ['AB', 'AAB', 'ABB'] }, n: 4 },
          { skill: 'rhyme', n: 4 },
        ],
        offscreen: { icon: '🧦', title: 'Laundry sort', text: 'Sort clean laundry: socks here, shirts there. Hide one wrong thing in a pile and see if she spots it.' },
        parent: 'Ask “Why doesn’t it belong?” There can be more than one good answer.',
      },
      {
        id: 'alphabet', when: 'May', icon: '🌈', title: 'The whole alphabet',
        frame: 'Literacy and mathematics behaviours',
        goal: 'I can find any letter, big or little.',
        steps: [
          { skill: 'letter-pop', n: 5 },
          { skill: 'big-little', n: 4 },
          { skill: 'first-sound', n: 4 },
        ],
        offscreen: { icon: '🎵', title: 'Alphabet song', text: 'Sing the alphabet song slowly while pointing to each letter on a chart or book.' },
        parent: 'Ending the song on “zed” keeps the Canadian rhyme with “me”.',
      },
      {
        id: 'ready-sk', when: 'June', icon: '🎒', title: 'Getting ready for SK',
        frame: 'Literacy and mathematics behaviours',
        goal: 'I can put two groups together to make 5.',
        steps: [
          { skill: 'ten-frame', params: { max: 5 }, n: 5 },
          { skill: 'rhyme', n: 4 },
          { skill: 'shapes', n: 4 },
        ],
        offscreen: { icon: '✋', title: 'Finger fives', text: 'Show 5 fingers. Fold some down. How many up? How many down?' },
        parent: 'Say it both ways: “3 and 2 make 5. 2 and 3 make 5.”',
      },
    ],
  },

  'aiden-g1': {
    title: 'Aiden’s Grade 1 year',
    program: 'Ontario Grade 1 Mathematics (2020) and Language (2023)',
    minutes: 15,
    sessionsPerUnit: 5,
    readAloud: false,
    units: [
      {
        id: 'add-10', when: 'October', icon: '🔟', title: 'Adding to 10',
        frame: 'Number', reading: 'Foundations of language',
        goal: 'I can add two numbers up to 10 using a ten frame.',
        steps: [
          { skill: 'ten-frame', n: 6 },
          { skill: 'sight-words', params: { set: 1 }, n: 5 },
          { skill: 'story', params: { ops: '+' }, n: 3 },
        ],
        offscreen: { icon: '🥚', title: 'Egg-carton toss', text: 'Toss 10 buttons at an egg carton. How many landed in? How many missed? Say it as an addition.' },
        parent: 'After each answer, ask “How do you know?” Explaining is part of the Grade 1 math expectations.',
      },
      {
        id: 'make-10', when: 'October', icon: '🧩', title: 'Making 10',
        frame: 'Number', reading: 'Foundations of language',
        goal: 'I know the pairs that make 10, like 7 and 3.',
        steps: [
          { skill: 'make-10', n: 6 },
          { skill: 'read-words', n: 4 },
          { skill: 'ten-frame', n: 3 },
        ],
        offscreen: { icon: '🃏', title: 'Go Fish for 10', text: 'Play Go Fish with cards 1–9, but a pair is two cards that make 10.' },
        parent: 'Pairs to 10 are the backbone of mental math: 8 + 5 is 8 + 2 + 3.',
      },
      {
        id: 'tens-ones', when: 'November', icon: '🧱', title: 'Tens and ones',
        frame: 'Number', reading: 'Foundations of language',
        goal: 'I can show a number up to 50 as tens and ones.',
        steps: [
          { skill: 'tens-ones', params: { max: 50 }, n: 6 },
          { skill: 'skip-count', params: { steps: [10] }, n: 4 },
          { skill: 'sight-words', params: { set: 1 }, n: 4 },
        ],
        offscreen: { icon: '🥢', title: 'Bundle it', text: 'Bundle 10 straws or popsicle sticks with an elastic. Build 34 with bundles and loose sticks.' },
        parent: 'Say numbers both ways: “34 is 3 tens and 4 ones.”',
      },
      {
        id: 'reading', when: 'November', icon: '🔤', title: 'Reading short words',
        frame: 'Number', reading: 'Foundations of language',
        goal: 'I can sound out words like cat, bug and pen.',
        steps: [
          { skill: 'read-words', n: 6 },
          { skill: 'sight-words', params: { set: 1 }, n: 4 },
          { skill: 'rhyme', n: 4 },
        ],
        offscreen: { icon: '🏷️', title: 'Label the house', text: 'Write cat, cup, bed and box on sticky notes. Aiden reads each one and sticks it on the right thing.' },
        parent: 'Point under each letter as he blends: c… a… t… cat.',
      },
      {
        id: 'add-sub-20', when: 'December', icon: '🐸', title: 'Adding and taking away to 20',
        frame: 'Number', reading: 'Foundations of language',
        goal: 'I can add and subtract numbers up to 20.',
        steps: [
          { skill: 'add-sub-20', n: 6 },
          { skill: 'story', n: 3 },
          { skill: 'sight-words', params: { set: 2 }, n: 4 },
        ],
        offscreen: { icon: '🦶', title: 'Floor number line', text: 'Tape 0 to 20 on the floor. Hop forward to add, hop back to take away.' },
        parent: 'Start from the bigger number and count on. It is faster than counting from 1.',
      },
      {
        id: 'shapes', when: 'January', icon: '🔷', title: 'Shapes and patterns',
        frame: 'Spatial sense', reading: 'Foundations of language',
        goal: 'I can name shapes and extend patterns.',
        steps: [
          { skill: 'shapes', n: 4 },
          { skill: 'patterns', params: { kinds: ['ABB', 'AAB', 'ABC', 'ABCD'] }, n: 5 },
          { skill: 'sight-words', params: { set: 2 }, n: 4 },
        ],
        offscreen: { icon: '🧩', title: 'Shape pictures', text: 'Cut paper circles, squares and triangles. Make a robot or a house and count each shape.' },
        parent: 'Ask how he knows it is a hexagon: count the sides together.',
      },
      {
        id: 'patterns', when: 'February', icon: '🦘', title: 'Counting patterns',
        frame: 'Algebra', reading: 'Foundations of language',
        goal: 'I can count by 2s, 5s and 10s.',
        steps: [
          { skill: 'skip-count', params: { steps: [2, 5, 10] }, n: 6 },
          { skill: 'add-sub-20', n: 4 },
          { skill: 'sight-words', params: { set: 2 }, n: 4 },
        ],
        offscreen: { icon: '🧦', title: 'Count in groups', text: 'Count socks by 2s, fingers by 5s and toes of the whole family by 10s.' },
        parent: 'Skip counting is the bridge to counting money next month.',
      },
      {
        id: 'measure', when: 'February', icon: '📏', title: 'Measuring length',
        frame: 'Spatial sense', reading: 'Foundations of language',
        goal: 'I can measure with cubes and compare lengths.',
        steps: [
          { skill: 'measure', n: 6 },
          { skill: 'compare', params: { max: 20 }, n: 4 },
          { skill: 'read-words', n: 3 },
        ],
        offscreen: { icon: '👣', title: 'Measure with feet', text: 'How many of Aiden’s feet long is the couch? How many of yours? Why are they different?' },
        parent: 'Units must touch end to end with no gaps. That is the big idea of measuring.',
      },
      {
        id: 'money', when: 'March', icon: '🪙', title: 'Canadian coins',
        frame: 'Financial literacy', reading: 'Foundations of language',
        goal: 'I can name Canadian coins and count nickels and dimes.',
        steps: [
          { skill: 'coins', params: { mode: 'identify' }, n: 4 },
          { skill: 'coins', params: { mode: 'count', pool: ['dime', 'nickel'] }, n: 5 },
          { skill: 'skip-count', params: { steps: [5, 10] }, n: 3 },
        ],
        offscreen: { icon: '🏪', title: 'Play store', text: 'Price 3 toys under 50¢. Pay with real nickels and dimes and make change.' },
        parent: 'Canada has no pennies, so cash totals round to the nearest 5¢.',
      },
      {
        id: 'time', when: 'March', icon: '🕒', title: 'Telling time',
        frame: 'Spatial sense', reading: 'Foundations of language',
        goal: 'I can read o’clock and half past on a clock.',
        steps: [
          { skill: 'clock', params: { step: 60 }, n: 4 },
          { skill: 'clock', params: { step: 30 }, n: 5 },
          { skill: 'sight-words', params: { set: 3 }, n: 4 },
        ],
        offscreen: { icon: '⏰', title: 'Clock detective', text: 'Check the kitchen clock at breakfast, lunch and bedtime. Is it o’clock or half past?' },
        parent: 'The short hand tells the hour. At half past, it sits halfway between two numbers.',
      },
      {
        id: 'compare', when: 'April', icon: '🐊', title: 'Greater, less, equal',
        frame: 'Number', reading: 'Foundations of language',
        goal: 'I can compare numbers up to 100 with < = >.',
        steps: [
          { skill: 'compare', n: 6 },
          { skill: 'tens-ones', n: 4 },
          { skill: 'sight-words', params: { set: 3 }, n: 4 },
        ],
        offscreen: { icon: '🃏', title: 'Card battle', text: 'Each player flips two cards to make a number. Say who wins using “greater than”.' },
        parent: 'Compare the tens first. Only look at the ones if the tens match.',
      },
      {
        id: 'graphs', when: 'April', icon: '📊', title: 'Picture graphs',
        frame: 'Data', reading: 'Comprehension',
        goal: 'I can read a picture graph and say what it tells me.',
        steps: [
          { skill: 'graphs', n: 6 },
          { skill: 'add-sub-20', n: 4 },
          { skill: 'sight-words', params: { set: 3 }, n: 4 },
        ],
        offscreen: { icon: '🍽️', title: 'Family survey', text: 'Ask everyone their favourite fruit. Draw a picture graph on paper. Which won?' },
        parent: 'Ask “What does this graph tell us?” Reading data is a Grade 1 expectation.',
      },
      {
        id: 'fractions', when: 'May', icon: '🍕', title: 'Halves and fourths',
        frame: 'Number', reading: 'Foundations of language',
        goal: 'I can share things into halves and fourths.',
        steps: [
          { skill: 'fractions', params: { parts: [2, 4] }, n: 5 },
          { skill: 'make-10', n: 4 },
          { skill: 'read-words', n: 4 },
        ],
        offscreen: { icon: '🥪', title: 'Fair shares', text: 'Cut a sandwich into 2 equal parts, then 4. Are all the pieces the same size?' },
        parent: 'Halves must be equal. Two different-sized pieces are not halves.',
      },
      {
        id: 'ballpark', when: 'May–June', icon: '⚾', title: 'Ballpark story problems',
        frame: 'Number', reading: 'Comprehension',
        goal: 'I can solve story problems by adding or taking away.',
        steps: [
          { skill: 'story', n: 6 },
          { skill: 'add-sub-20', n: 4 },
          { skill: 'sight-words', params: { set: 3 }, n: 4 },
        ],
        offscreen: { icon: '📓', title: 'Keep score', text: 'At a baseball game or on TV, keep score in a notebook and add up the runs at the end.' },
        parent: 'Ask him to tell the story back in his own words before solving it.',
      },
      {
        id: 'ready-g2', when: 'June', icon: '🚀', title: 'Getting ready for Grade 2',
        frame: 'Number', reading: 'Foundations of language',
        goal: 'I can add bigger numbers and count equal groups.',
        steps: [
          { skill: 'add-sub-100', params: { max: 100, regroup: false }, n: 5 },
          { skill: 'times', params: { max: 3 }, n: 4 },
          { skill: 'sight-words', params: { set: 4 }, n: 4 },
        ],
        offscreen: { icon: '🧁', title: 'Muffin-tin groups', text: 'Put 2 grapes in each muffin cup. Count by 2s to find how many in all.' },
        parent: 'Adding tens then ones: 34 + 25 is 50 + 9.',
      },
    ],
  },
}

/**
 * Unit order before the catalog grew, so saved progress (stored as a unit
 * position) can be moved to the same unit in the new order.
 */
export const OLD_UNIT_ORDER = {
  'aliya-jk': ['my-name', 'count-5', 'satpin', 'count-10', 'mdgock', 'more-fewer', 'alphabet'],
  'aiden-g1': ['add-10', 'tens-ones', 'add-sub-20', 'patterns', 'money', 'compare', 'ballpark'],
}

export function planFor(learner) {
  return PLANS[learner.plan]
}
