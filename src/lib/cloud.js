import { supabase } from './supabase.js'

// Aiden and Aliya's progress, stored as one row per signed-in family.
// Row-level security limits every query to the signed-in grown-up.

export async function loadState() {
  const { data, error } = await supabase.from('maanu_state').select('state').maybeSingle()
  if (error) throw error
  return data?.state || null
}

export async function saveState(state) {
  const { data: auth } = await supabase.auth.getUser()
  const { error } = await supabase.from('maanu_state').upsert({ family_id: auth.user.id, state })
  if (error) throw error
}

export async function recordAnswer(learner, skillId, correct, scoreAfter) {
  const { error } = await supabase.from('maanu_answers').insert({ learner, skill_id: skillId, correct, score_after: scoreAfter })
  if (error) console.warn('Could not record answer', error.message)
}

/** Answers from the last `days` days, oldest first. */
export async function recentAnswers(learner, days = 7) {
  const since = new Date()
  since.setHours(0, 0, 0, 0)
  since.setDate(since.getDate() - (days - 1))
  const { data, error } = await supabase
    .from('maanu_answers')
    .select('skill_id, correct, created_at')
    .eq('learner', learner)
    .gte('created_at', since.toISOString())
    .order('created_at')
    .limit(5000)
  if (error) throw error
  return data
}
