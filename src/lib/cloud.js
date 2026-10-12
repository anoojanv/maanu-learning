import { supabase } from './supabase.js'

// Aiden and Aliya's progress lives in one household row in Supabase. There is
// no login: the household key identifies the row, and the database only
// answers through functions that require that key.
const HOUSEHOLD = import.meta.env.VITE_MAANU_HOUSEHOLD_KEY

async function call(fn, args) {
  const { data, error } = await supabase.rpc(fn, { p_key: HOUSEHOLD, ...args })
  if (error) throw error
  return data
}

/** The saved app state, or null when nothing has been saved yet. */
export async function loadState() {
  const state = await call('maanu_load')
  return state && state.v ? state : null
}

export async function saveState(state) {
  const ok = await call('maanu_save', { p_state: state })
  if (!ok) throw new Error('Unknown household key')
}

export async function recordAnswer(learner, skillId, correct, scoreAfter) {
  try {
    await call('maanu_log_answer', { p_learner: learner, p_skill: skillId, p_correct: correct, p_score: scoreAfter })
  } catch (e) {
    console.warn('Could not record answer', e.message)
  }
}

/** Answers from the last `days` days, oldest first. */
export async function recentAnswers(learner, days = 7) {
  const since = new Date()
  since.setHours(0, 0, 0, 0)
  since.setDate(since.getDate() - (days - 1))
  return call('maanu_recent_answers', { p_learner: learner, p_since: since.toISOString() })
}
