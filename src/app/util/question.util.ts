import {
  FiveMultipleChoiceQuestion,
  FiveMultipleChoiceResponses,
  FiveScaleQuestion,
  FourMultipleChoiceQuestion,
  FourMultipleChoiceResponses, Question, TestType, TestTypeKeys,
  TrueFalseQuestion,
  TwoMultipleChoiceQuestion,
  TwoMultipleChoiceResponses
} from '../types/test.types';


export const testKeys: TestTypeKeys = {
  bigFive: "bigFive",
  fiveModern: "fiveModern",
  myersBrigs: "myersBrigs",
  pen: "pen",
  seduction: "seduction",
  sixStyles: "sixStyles"
};

// Question Init
export function initTrueFalseQuestion(id: number,test: TestType,question: string): TrueFalseQuestion {
  return {id:{num: id,test},question, answer: undefined};
}

export function initFiveScaleQuestion(id: number,test: TestType,question: string): FiveScaleQuestion {
  return {id:{num: id,test},question, answer: undefined};
}

export function initTwoMultipleChoiceQuestion(id: number,test: TestType,question: string, responses:TwoMultipleChoiceResponses): TwoMultipleChoiceQuestion {
  return { id:{num: id,test},question, responses, answer: undefined};
}

export function initFourMultipleChoiceQuestion(id: number,test: TestType,question: string, responses:FourMultipleChoiceResponses): FourMultipleChoiceQuestion {
  return { id:{num: id,test},question, responses, answer: undefined};
}

export function initFiveMultipleChoiceQuestion(id: number,test: TestType,question: string, responses:FiveMultipleChoiceResponses): FiveMultipleChoiceQuestion {
  return { id:{num: id,test},question, responses, answer: undefined};
}

// Cast Helpers
export function castToTrueFalseQuestion(question: any): TrueFalseQuestion {
  return question as TrueFalseQuestion;
}

export function castToFiveScaleQuestion(question: any): FiveScaleQuestion {
  return question as FiveScaleQuestion;
}

export function castToTwoMultipleChoiceQuestion(question: any): TwoMultipleChoiceQuestion {
  return question as TwoMultipleChoiceQuestion;
}

export function castToTFourMultipleChoiceQuestion(question: any): FourMultipleChoiceQuestion {
  return question as FourMultipleChoiceQuestion;
}

export function castToFiveMultipleChoiceQuestion(question: any): FiveMultipleChoiceQuestion {
  return question as FiveMultipleChoiceQuestion;
}


// Test Question Init
export function initBigFiveQuestion(id:number,question: string) {
  return initFiveScaleQuestion(id,testKeys.bigFive,question);
}
export function initMyersBrigsQuestion(id:number,question: string,responses:TwoMultipleChoiceResponses) {
  return initTwoMultipleChoiceQuestion(id,testKeys.myersBrigs,question,responses);
}
export function initPenQuestion(id: number,question:string) {
  return initTrueFalseQuestion(id,testKeys.pen,question);
}

export function initFiveModernQuestion(id: number,question:string,responses:FiveMultipleChoiceResponses) {
  return initFiveMultipleChoiceQuestion(id,testKeys.fiveModern,question,responses);
}
export function initSeductionQuestion(id: number,question: string,responses:FourMultipleChoiceResponses) {
  return initFourMultipleChoiceQuestion(id,testKeys.seduction,question,responses);
}
export function initSixStylesQuestion(id: number,question: string) {
  return initFiveScaleQuestion(id,testKeys.sixStyles,question);
}

// Init All Questions
export function initBigFiveQuestions() {
  return [
    initBigFiveQuestion(1,`I am fascinated by art, theater, literature, or deep philosophical theories.`),
    initBigFiveQuestion(2,`I keep my belongings highly organized and always try to show up on time.`),
    initBigFiveQuestion(3,`I feel energized when I am surrounded by a large, lively group of people.`),
    initBigFiveQuestion(4,`I tend to sympathize with other people's feelings and enjoy helping them.`),
    initBigFiveQuestion(5,`I find myself worrying a lot about things that could go wrong.`),
    initBigFiveQuestion(6,`I prefer sticking to familiar routines rather than trying new, unpredictable things.`),
    initBigFiveQuestion(7,`I sometimes procrastinate or leave tasks unfinished until the last minute.`),
    initBigFiveQuestion(8,`I am a quiet person who prefers solitary activities over crowded social gatherings.`),
    initBigFiveQuestion(9,`I am generally suspicious of other people's motives until they prove they are trustworthy.`),
    initBigFiveQuestion(10,`I handle high-stress situations calmly and rarely get overwhelmed by anxiety.`),
    initBigFiveQuestion(11,`I have a vivid imagination and love brainstorming original ideas.`),
    initBigFiveQuestion(12,`I pride myself on being thorough, dependable, and precise in my work.`),
    initBigFiveQuestion(13,`I am natural at striking up conversations and making friends with strangers.`),
    initBigFiveQuestion(14,`I believe most people are basically good-natured, honest, and well-intentioned.`),
    initBigFiveQuestion(15,`I experience frequent ups and downs in my mood or feel easily irritated.`),
    initBigFiveQuestion(16,`I find abstract or highly theoretical discussions boring or impractical.`),
    initBigFiveQuestion(17,`I struggle to stay self-disciplined when a task becomes boring or difficult.`),
    initBigFiveQuestion(18,`I often keep my thoughts to myself and don't speak up in group meetings.`),
    initBigFiveQuestion(19,`I can be blunt or overly critical if someone is being illogical or incompetent.`),
    initBigFiveQuestion(20,`I snap back to normal quickly after experiencing an embarrassing or stressful event.`),
  ];
}
export function initMyersBrigsQuestions() {
  return [
    initMyersBrigsQuestion(1,`After a long, exhausting week, how do you prefer to recharge?`,{
      A: `Going out with friends, attending a party, or being around a crowd.`,
      B: `Having a quiet night in, reading, watching a movie, or doing a solo hobby.`
    }),
    initMyersBrigsQuestion(2,`When in a large social setting, you usually:`,{
      A: `Introduce yourself to new people and strike up conversations easily.`,
      B: `Stick to a few people you already know well.`
    }),
    initMyersBrigsQuestion(3,`In group projects or meetings, you tend to:`,{
      A: `Think out loud, voicing your ideas as they come to you.`,
      B: `Process your thoughts internally first and speak only when your idea is fully formed.`
    }),
    initMyersBrigsQuestion(4,`Which describes your ideal work environment?`,{
      A: `A bustling, collaborative space with plenty of interaction.`,
      B: `A quiet, independent space where you can focus without interruption.`
    }),
    initMyersBrigsQuestion(5,`You would describe yourself as more:`,{
      A: `Outgoing, expressive, and open.`,
      B: `Reserved, reflective, and private.`
    }),
    initMyersBrigsQuestion(6,`When learning a new skill, you prefer to:`,{
      A: `Learn practical, real-world applications with clear instructions.`,
      B: `Understand the overarching theories, concepts, and creative possibilities.`
    }),
    initMyersBrigsQuestion(7,`If you are describing a movie to a friend, you are more likely to:`,{
      A: `Detail exactly what happened, the plot points, and the visual scenes.`,
      B: `Talk about the underlying themes, deeper meanings, and the vibe of the film.`
    }),
    initMyersBrigsQuestion(8,`You tend to focus more on:`,{
      A: `The present reality—what is currently happening and what is tangible.`,
      B: `Future possibilities—what could be and what the big picture looks like.`
    }),
    initMyersBrigsQuestion(9,`People often compliment you for your:`,{
      A: `Common sense, practicality, and attention to detail.`,
      B: `Imagination, creativity, and original ideas.`
    }),
    initMyersBrigsQuestion(10,`You prefer facts and data over hunches and gut feelings.`,{
      A: `True. Show me the evidence.`,
      B: `False. I trust my intuition and patterns.`
    }),
    initMyersBrigsQuestion(11,`When making an important decision, your final choice is usually guided by:`,{
      A: `Logic, objective analysis, and cold hard facts.`,
      B: `Your values, feelings, and how the decision impacts others.`
    }),
    initMyersBrigsQuestion(12,`When a friend comes to you with a problem, your first instinct is to:`,{
      A: `Offer practical solutions and analyze how to fix the issue.`,
      B: `Offer practical solutions and analyze how to fix the issue.`
    }),
    initMyersBrigsQuestion(13,`In an argument or debate, you care more about being:`,{
      A: `Fair, accurate, and logically correct.`,
      B: `Compassionate, harmonious, and understanding.`
    }),
    initMyersBrigsQuestion(14,`Which statement sounds more like you?`,{
      A: `I try to keep my emotions out of my decisions so I can stay objective.`,
      B: `I follow my heart and make sure everyone's feelings are respected.`
    }),
    initMyersBrigsQuestion(15,`If you have to give someone constructive criticism, you worry most about:`,{
      A: `Being too blunt or hurting their feelings (but you say it anyway because it's true).`,
      B: `Hurting their feelings, so you sugarcoat it or avoid saying it entirely.`
    }),
    initMyersBrigsQuestion(16,`When preparing for a trip, you usually:`,{
      A: `Plan out a detailed itinerary, book things in advance, and pack early.`,
      B: `Pack at the last minute and figure out what to do once you arrive.`
    }),
    initMyersBrigsQuestion(17,`How do you feel about strict routines and schedules?`,{
      A: `They comfort me; I feel organized and in control.`,
      B: `They suffocate me; I feel trapped and prefer flexibility.`
    }),
    initMyersBrigsQuestion(18,`When given a major deadline or project, you usually:`,{
      A: `Break it into steps and work on it steadily so you finish early.`,
      B: `Wait until the pressure kicks in near the deadline to do your best work.`
    }),
    initMyersBrigsQuestion(19,`Your living or workspace is generally:`,{
      A: `Neat, organized, and everything has its proper place.`,
      B: `A bit chaotic or "organized clutter"—you know where things are, but it looks messy.`
    }),
    initMyersBrigsQuestion(20,`You prefer to have things:`,{
      A: `Settled, decided, and closed so you can move on.`,
      B: `Open-ended, flexible, and subject to change if better options come up.`
    }),
  ];
}
export function initPenQuestions() {
  return [
    initPenQuestion(1,`Do you prefer having a large circle of friends over having just one or two close confidants?`),
    initPenQuestion(2,`Do you often find yourself worrying about things that might go wrong?`),
    initPenQuestion(3,`Would you enjoy taking part in a high-risk sport or a thrilling, unpredictable activity?`),
    initPenQuestion(4,`Do you find it easy to strike up a conversation with a total stranger?`),
    initPenQuestion(5,`Are your feelings easily hurt by criticism or minor slights?`),
    initPenQuestion(6,`Do you tend to keep your opinions to yourself if you think they might upset social harmony?`),
    initPenQuestion(7,`Do you consider yourself a lively, energetic person in social situations?`),
    initPenQuestion(8,`Do you experience frequent ups and downs in your mood for no apparent reason?`),
    initPenQuestion(9,`Do you think that strictly following all of society's rules and laws is overrated?`),
    initPenQuestion(10,`Do you usually take the initiative to organize social gatherings or outings?`),
    initPenQuestion(11,`Do you often feel tense, restless, or "on edge"?`),
    initPenQuestion(12,`Do you place a high value on cooperation, empathy, and making sure others feel comfortable?`),
    initPenQuestion(13,`Would you describe yourself as a quiet person who prefers solitary activities?`),
    initPenQuestion(14,`Does it take you a long time to get over an embarrassing or stressful situation?`),
    initPenQuestion(15,`Do you sometimes enjoy being deliberately unconventional or shocking others with your behavior?`),
  ];
}

export function initFiveModernQuestions() {
  return [
    initFiveModernQuestion(1,`When a conflict or argument arises with your partner, what is your immediate instinct?`, {
      A: `To quickly back down, apologize, or change the subject just to keep the peace.`,
      B: `To withdraw, feel helpless, or wait for them to decide how to handle it because I feel stuck.`,
      C: `To take charge of the conversation, lay out the facts, or set strict boundaries to manage the situation.`,
      D: `To feel deeply hurt, angry, or abandoned, and intensely demand that they see my side.`,
      E: `To suggest a calm timeout if emotions are running too high, then talk it out constructively.`
    }),
    initFiveModernQuestion(2,`How do you usually feel about your partner having a life entirely separate from you?`, {
      A: `I say I’m fine with it, but I secretly worry they will find someone better while they are away.`,
      B: `I am used to being left to fend for myself, so I just emotionally disconnect until they get back.`,
      C: `I prefer to know their schedule, who they are with, and when they will be home so I feel at ease.`,
      D: `I feel highly anxious or resentful when they choose to spend time away from me instead of with me.`,
      E: `I genuinely encourage it; we both need our individual hobbies and friendships to stay healthy.`
    }),
    initFiveModernQuestion(3,`Which statement best describes how you handle your own emotional needs?`, {
      A: `I put my needs completely on the back burner to make sure my partner is happy first.`,
      B: `I rarely expect my partner to meet my needs; I’ve learned it's safer not to hope for much.`,
      C: `I manage my own needs through routine and self-reliance; I don't like relying on others.`,
      D: `I expect my partner to intuitively know what I need, and I get deeply disappointed when they don't.`,
      E: `I feel comfortable stating my needs clearly and directly without feeling guilty or demanding.`
    }),
    initFiveModernQuestion(4,`When a relationship is in the early "honeymoon phase," you typically:`, {
      A: `Do everything you can to mold yourself into their perfect ideal partner.`,
      B: `Feel anxious or waiting for the other shoe to drop, expecting them to eventually mistreat you.`,
      C: `Assess them logically to make sure they fit smoothly into your structured lifestyle.`,
      D: `Fall incredibly fast and hard, putting them on a pedestal as your absolute soulmate.`,
      E: `Enjoy the connection while keeping a grounded perspective on real-world compatibility.`
    }),
    initFiveModernQuestion(5,`What is your deepest, most subconscious fear in a romance?`, {
      A: `Rejection or having my partner be upset with me.`,
      B: `Emotional chaos, pain, or being completely overpowered/trapped.`,
      C: `Vulnerability, losing control, or being caught off guard by a betrayal.`,
      D: `Abandonment, being forgotten, or discovering the "spark" was an illusion.`,
      E: `Losing a meaningful connection, but I know I can ultimately survive and heal on my own.`
    }),
  ];
}
export function initSeductionQuestions() {
  return [
    initSeductionQuestion(1,`When you first start dating someone, what is your primary goal?`, {
      A: `To create an undeniable, electric spark and a deep physical/emotional attraction.`,
      B: `To make them feel safe, cared for, and deeply supported by me.`,
      C: `To see if they match my lifestyle, respect my independence, and can keep up with me.`,
      D: `To observe them quietly and see if they are deep enough to earn my trust.`
    }),
    initSeductionQuestion(2,`How do you usually express your affection?`, {
      A: `Through intense eye contact, flirtation, compliments, and physical touch.`,
      B: `By taking care of them—cooking, helping them organize their life, or giving practical advice.`,
      C: `By planning exciting dates, pushing them toward their goals, and offering absolute loyalty.`,
      D: `Through quiet quality time, deep late-night conversations, and soulful gifts.`
    }),
    initSeductionQuestion(3,`What is your relationship "superpower"?`, {
      A: `Magnetism. I know how to make a partner feel incredibly desired and captivated.`,
      B: `Nurturing. I can turn any chaotic situation into a warm, comfortable sanctuary.`,
      C: `Empowerment. I inspire my partners to achieve their dreams and stand on their own two feet.`,
      D: `Intuition. I can read between the lines and understand my partner's hidden thoughts.`
    }),
    initSeductionQuestion(4,`What is your biggest fear or pet peeve in a romance?`, {
      A: `The spark dying out, leading to a boring, predictable routine.`,
      B: `Being unappreciated or taken for granted after giving so much of myself.`,
      C: `Feeling controlled, suffocated, or having my personal freedom restricted.`,
      D: `Superficiality, small talk, or a partner who violates my privacy.`
    }),
    initSeductionQuestion(5,`When your partner is going through a hard time, you usually:`, {
      A: `Try to distract them with romance, fun, or physical intimacy to lift their spirits.`,
      B: `Immediately step in to fix things, soothe them, and handle their daily responsibilities.`,
      C: `Give them a motivating pep talk and help them brainstorm a logical solution.`,
      D: `Sit with them in silence, offering a calm, non-judgmental space to process their feelings.`
    }),
    initSeductionQuestion(6,`How do you feel about vulnerability in a relationship?`, {
      A: `I love emotional intensity; open up to me completely right away!`,
      B: `I find it easy to be vulnerable if it means helping my partner heal.`,
      C: `I struggle with it. I prefer to keep my guard up so I don't look weak.`,
      D: `I am a vault. I only reveal my deepest layers over a long period of time.`
    }),
    initSeductionQuestion(7,`Your ideal date night involves:`, {
      A: `Dressing up to the nines, a dim candlelit dinner, and a glamorous vibe.`,
      B: `A cozy, intimate night in with home-cooked comfort food and cuddling.`,
      C: `An adventurous activity like a concert, hiking, or exploring a new city.`,
      D: `A quiet museum visit, a stroll in nature, or a late-night drive talking about the universe.`
    }),
    initSeductionQuestion(8,`What is your classic "shadow behavior" (your biggest flaw) when dating?`, {
      A: `I can get addicted to the honeymoon phase and pull away when things get normal.`,
      B: `I over-give, burn myself out, and accidentally mother or "fix" my partner.`,
      C: `I can be overly competitive, blunt, or emotionally detached when I'm stressed.`,
      D: `I can become distant, icy, or walls-up, shutting my partner out completely.`
    }),
  ];
}
export function initSixStylesQuestions() {
  return [
    initSixStylesQuestion(1,`My partner and I had the right physical chemistry right from the start.`),
    initSixStylesQuestion(2,`I try to keep my partner a little uncertain about my commitment to them.`),
    initSixStylesQuestion(3,`It is hard to say exactly where friendship ends and love begins; for me, they melt into each other.`),
    initSixStylesQuestion(4,`An important consideration in choosing a partner is whether they will be a good fit for my family and future goals.`),
    initSixStylesQuestion(5,`When things aren't right between my partner and me, my stomach gets upset or I can't sleep.`),
    initSixStylesQuestion(6,`I would rather suffer myself than let my partner suffer.`),
    initSixStylesQuestion(7,`I feel that my partner and I were meant for each other.`),
    initSixStylesQuestion(8,`I have sometimes had to keep two or more lovers moving along at the same time without them knowing.`),
    initSixStylesQuestion(9,`Our love is the best kind because it grew out of a long, deep friendship.`),
    initSixStylesQuestion(10,`I carefully plan my life and relationship milestones before I choose a partner.`),
    initSixStylesQuestion(11,`If my partner ignores me for a while, I sometimes do stupid things to get their attention back.`),
    initSixStylesQuestion(12,`I am usually willing to sacrifice my own wishes to let my partner achieve theirs.`),
    initSixStylesQuestion(13,`Intense physical attraction and a visual "spark" are absolutely essential to me.`),
    initSixStylesQuestion(14,`I enjoy playing the "game" of romance and love keeping things lighthearted and uncommitted.`),
    initSixStylesQuestion(15,`I expect to always stay friends with the person I love, even if the romance fades.`),
    initSixStylesQuestion(16,`I look at a partner’s career prospects and financial stability before getting deeply attached.`),
    initSixStylesQuestion(17,`Since I fell in love, I have trouble concentrating on anything else; it consumes me.`),
    initSixStylesQuestion(18,`Whatever I own belongs to my partner if they need it.`),
  ];
}

