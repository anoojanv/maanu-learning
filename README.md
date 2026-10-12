# Maanu Learning

A guided, playful learning app for **Aiden** (Grade 1) and **Aliya** (JK), built around their own year plans.

Each child opens to **Today**: three short on-screen steps and one activity to do together off the screen. Aiden runs the bases of a baseball diamond. Aliya's butterfly makes a garden bloom. After five days, a unit moves on to the next one.

## What's in it

| | Aiden — Grade 1 | Aliya — JK |
|---|---|---|
| Curriculum | Ontario Grade 1 Mathematics (2020) and Language (2023) | Ontario Kindergarten Program (2016) |
| Daily session | ~15 min | ~10 min, everything read aloud |
| Units | 15: Adding to 10 → Making 10 → Tens and ones → Reading short words → Add/take away to 20 → Shapes and patterns → Counting patterns → Measuring length → Canadian coins → Telling time → Greater/less → Picture graphs → Halves and fourths → Ballpark story problems → Getting ready for Grade 2 | 12: Letters in my name (A L I Y) → Shapes → Counting to 5 → Patterns → s a t p i n → Counting to 10 → Rhyme time → m d g o c k → More and fewer → Sorting and thinking → The whole alphabet → Getting ready for SK |
| Trail | Baseball diamond: 1st, 2nd, 3rd, home | Flower garden: four blooms |

**27 skills** generate endless questions that get harder as the child's Star Meter (0–100) climbs:
- **Letters and reading:** Pop the letter, Big and little, First sounds, Rhyme time, Read the word, Sight words.
- **Number:** How many?, More or fewer, Ten-frame adding, Make 10, Add and take away, Big adding and taking away, Tens and ones, Hundreds tens and ones, Greater or less, Skip counting, Equal groups, Sharing equally, Fractions.
- **Shapes, measuring and data:** Find the shape, What comes next?, Which one does not belong?, Measure it, Picture graphs, Tell the time.
- **Money and stories:** Canadian coins, Story problems (baseball for Aiden, garden for Aliya).

**All skills** (free play) lets each child try any skill at any level from Pre-K to Grade 3, so Aiden can stretch ahead and Aliya can revisit.

A wrong answer opens **Let's figure it out**: a worked visual (count-along, number-line hops, tens-and-ones blocks, running coin totals) with the answer read aloud.

**Grown-ups** shows the year as a timeline: each unit's goal, curriculum strand, activity idea, tip, and progress. A parent can move a child to any unit. A "This week" panel shows questions per day, accuracy, the most-practised skills, and a nudge when a skill is under 70%.

## Run it

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # static site in dist/
```

A grown-up signs in once per device, with email and password or an email link. An MA-learning account works too. Progress is saved to Supabase and follows the kids between devices, with a copy kept in the browser. The first sign-in uploads whatever progress the device already had.

`.env` holds the Supabase URL and publishable key. Both are meant to be public. Row-level security keeps each family's rows private.

## Supabase

The data lives in the MA-learning Supabase project (`lgfsihzhqxdglzhbbzrj`), in its own tables (see `supabase/migrations/`):

- `maanu_state`: one row per family holding the whole app state (stars, Star Meters, unit progress).
- `maanu_answers`: one row per answered question, for the weekly view.

## Where things live

```
src/data/curriculum.js   year plans for each child: units, steps, activities, tips
src/data/skills.js       the 27 skill generators (questions, choices, help)
src/data/pictures.js     picture words for reading, rhyming and sorting
src/lib/cloud.js         Supabase reads and writes
src/screens/             Who, Today, Practice, Off-screen, Skills (free play), Plan (grown-ups)
src/components/          Trail, Visuals, Inputs (choices, balloons, keypad), Pip the mascot, confetti
src/lib/                 Star Meter scoring, read-aloud and sound effects, storage
```

### Add a unit

Add an object to a plan's `units` in `src/data/curriculum.js`. Each step is a skill id, optional `params` that narrow it (for example `{ letters: 'SATPIN' }`, `{ max: 5 }`, `{ ops: '+' }`, `{ set: 2 }`), and `n`, the number of questions.

### Add a skill

Add an entry to `SKILLS` in `src/data/skills.js` with the `levels` it belongs to and a `generate({ score, name, theme, params })` function that returns a prompt, a visual, an input type (`choice`, `balloons` or `keypad`), choices, the answer and a help visual.

## Deploy

`netlify.toml` builds with `npm run build` and publishes `dist/`.

Netlify needs `VITE_SUPABASE_URL` and `VITE_SUPABASE_PUBLISHABLE_KEY` set as environment variables, because `.env` is not uploaded.

No sound files, images or trackers: speech uses the browser's built-in voice, sound effects are synthesised, and drawings are SVG.
