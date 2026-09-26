import {
  AllQuestionTypes,
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
    initBigFiveQuestion(1, `Is talkative`),
    initBigFiveQuestion(2, `Tends to find fault with others`),
    initBigFiveQuestion(3, `Does a thorough job`),
    initBigFiveQuestion(4, `Is depressed, blue`),
    initBigFiveQuestion(5, `Is original, comes up with new ideas`),
    initBigFiveQuestion(6, `Is reserved`),
    initBigFiveQuestion(7, `Is helpful and unselfish with others`),
    initBigFiveQuestion(8, `Can be somewhat careless`),
    initBigFiveQuestion(9, `Is relaxed, handles stress well`),
    initBigFiveQuestion(10, `Is curious about many different things`),
    initBigFiveQuestion(11, `Is full of energy`),
    initBigFiveQuestion(12, `Starts arguments with others`),
    initBigFiveQuestion(13, `Is a reliable worker`),
    initBigFiveQuestion(14, `Can be tense`),
    initBigFiveQuestion(15, `Is ingenious, a deep thinker`),
    initBigFiveQuestion(16, `Generates a lot of enthusiasm`),
    initBigFiveQuestion(17, `Has a forgiving nature`),
    initBigFiveQuestion(18, `Tends to be disorganized`),
    initBigFiveQuestion(19, `Worries a lot`),
    initBigFiveQuestion(20, `Has an active imagination`),
    initBigFiveQuestion(21, `Tends to be quiet`),
    initBigFiveQuestion(22, `Is generally trusting`),
    initBigFiveQuestion(23, `Tends to be lazy`),
    initBigFiveQuestion(24, `Is emotionally stable, not easily upset`),
    initBigFiveQuestion(25, `Is inventive`),
    initBigFiveQuestion(26, `Has an assertive personality`),
    initBigFiveQuestion(27, `Can be cold and aloof`),
    initBigFiveQuestion(28, `Perseveres until the task is finished`),
    initBigFiveQuestion(29, `Can be moody`),
    initBigFiveQuestion(30, `Values artistic, aesthetic experiences`),
    initBigFiveQuestion(31, `Is sometimes shy, inhibited`),
    initBigFiveQuestion(32, `Is considerate and kind to almost everyone`),
    initBigFiveQuestion(33, `Does things efficiently`),
    initBigFiveQuestion(34, `Remains calm in tense situations`),
    initBigFiveQuestion(35, `Prefers work that is routine`),
    initBigFiveQuestion(36, `Is outgoing, sociable`),
    initBigFiveQuestion(37, `Is sometimes rude to others`),
    initBigFiveQuestion(38, `Makes plans and follows through with them`),
    initBigFiveQuestion(39, `Gets nervous easily`),
    initBigFiveQuestion(40, `Reflects, plays with ideas`),
    initBigFiveQuestion(41, `Has few artistic interests`),
    initBigFiveQuestion(42, `Likes to cooperate with others`),
    initBigFiveQuestion(43, `Is easily distracted`),
    initBigFiveQuestion(44, `Is sophisticated in art, music, or literature`)

    /*
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

     */
  ];
}
export function initMyersBrigsQuestions() {
  return [

    // Extroversion (A) vs Introversion (B)
    initMyersBrigsQuestion(1, `After a long, exhausting week, how do you prefer to recharge?`, {
      A: `Going out with friends, attending a party, or being around a crowd.`,
      B: `Having a quiet night in, reading, watching a movie, or doing a solo hobby.`
    }),
    initMyersBrigsQuestion(2, `When in a large social setting, you usually:`, {
      A: `Introduce yourself to new people and strike up conversations easily.`,
      B: `Stick to a few people you already know well.`
    }),
    initMyersBrigsQuestion(3, `In group projects or meetings, you tend to:`, {
      A: `Think out loud, voicing your ideas as they come to you.`,
      B: `Process your thoughts internally first and speak only when your idea is fully formed.`
    }),
    initMyersBrigsQuestion(4, `At a social event where you don't know many people, you tend to:`, {
      A: `Circulate freely and chat animatedly with multiple groups.`,
      B: `Find one or two interesting people and have a deep, prolonged conversation.`
    }),
    initMyersBrigsQuestion(5, `How do you generally feel about being the center of attention?`, {
      A: `You enjoy it and feel energized by the spotlight.`,
      B: `You prefer to stay behind the scenes and avoid being the main focus.`
    }),

    // Sensing (A) vs Intuition (B)
    initMyersBrigsQuestion(6, `When learning a new skill or system, you prefer to:`, {
      A: `Focus on concrete facts, step-by-step instructions, and practical applications.`,
      B: `Look at the big picture, understand the underlying theories, and explore possibilities.`
    }),
    initMyersBrigsQuestion(7, `When tackling a project, you are more likely to:`, {
      A: `Trust proven methods and experiences that have worked reliably in the past.`,
      B: `Invent new, creative approaches and look for innovative ways to do things.`
    }),
    initMyersBrigsQuestion(8, `When someone is describing a problem to you, you tend to focus on:`, {
      A: `The realistic details and the current, practical facts of the situation.`,
      B: `The hidden meanings, symbolism, and future implications of the scenario.`
    }),
    initMyersBrigsQuestion(9, `When reading or watching a story, you prefer details that are:`, {
      A: `Literal, straightforward, and clearly grounded in realistic settings.`,
      B: `Metaphorical, open to interpretation, and rich with hidden symbolism.`
    }),
    initMyersBrigsQuestion(10, `You tend to pay more attention to:`, {
      A: `What is happening right now in the physical, tangible world around you.`,
      B: `Patterns, future trends, and abstract ideas about where things are heading.`
    }),

    // Thinking (A) vs Feeling (B)
    initMyersBrigsQuestion(11, `When making an important decision, you place the highest value on:`, {
      A: `Logic, objective analysis, and consistency, regardless of personal feelings.`,
      B: `Empathy, harmony, and how the outcome will impact people's feelings.`
    }),
    initMyersBrigsQuestion(12, `In an argument or debate, you are more persuaded by:`, {
      A: `Hard data, rational arguments, and clear cause-and-effect reasoning.`,
      B: `Compassionate appeals, personal stories, and maintaining good relationships.`
    }),
    initMyersBrigsQuestion(13, `When evaluating someone's performance, you tend to be:`, {
      A: `Direct, honest, and critical if standards aren't met, prioritizing truth over tact.`,
      B: `Tactful, encouraging, and careful not to hurt anyone's feelings or discourage them.`
    }),
    initMyersBrigsQuestion(14, `Which compliment would you value more?`, {
      A: `"You are exceptionally logical and sharp-minded."`,
      B: `"You are deeply compassionate and caring."`
    }),
    initMyersBrigsQuestion(15, `When a friend comes to you with a personal problem, your first instinct is to:`, {
      A: `Offer logical, practical solutions to fix the issue efficiently.`,
      B: `Offer emotional validation, a listening ear, and a shoulder to lean on.`
    }),

    // Judging (A) vs Perceiving (B)
    initMyersBrigsQuestion(16, `How do you typically approach your daily schedule and tasks?`, {
      A: `You like having a clear plan, structured timelines, and lists checked off.`,
      B: `You prefer to keep things flexible, spontaneous, and open to last-minute changes.`
    }),
    initMyersBrigsQuestion(17, `When working on a deadline, you usually:`, {
      A: `Finish well ahead of time to avoid any last-minute stress or surprises.`,
      B: `Work in bursts of energy close to the deadline when the pressure motivates you.`
    }),
    initMyersBrigsQuestion(18, `Your living or workspace is typically:`, {
      A: `Neat, organized, and everything has a designated place.`,
      B: `A bit cluttered or creative, with items left out because they are in active use.`
    }),
    initMyersBrigsQuestion(19, `When going on a trip or vacation, you prefer to:`, {
      A: `Book hotels, map out activities, and have a well-structured itinerary.`,
      B: `Book a flight, find a place to stay, and figure out the daily plans as you go.`
    }),
    initMyersBrigsQuestion(20, `You generally feel more comfortable when things are:`, {
      A: `Decided, settled, and officially wrapped up.`,
      B: `Left open-ended so you can adapt if circumstances change.`
    })

    /*
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

     */
  ];
}
export function initPenQuestions() {

  /*
  return [
    // Extroversion & Psychoticism / General Traits
    initPenQuestion(1, `Do you have many different hobbies?`),
    initPenQuestion(2, `Do you stop to think things over before doing anything?`),
    initPenQuestion(3, `Does your mood often go up and down?`),
    initPenQuestion(4, `Have you ever taken the praise for something you knew someone else had really done?`),
    initPenQuestion(5, `Do you take much notice of what people think?`),
    initPenQuestion(6, `Are you a talkative person?`),
    initPenQuestion(7, `Would being in debt worry you?`),
    initPenQuestion(8, `Do you ever feel 'just miserable' for no reason?`),
    initPenQuestion(9, `Do you give money to charities?`),
    initPenQuestion(10, `Were you ever greedy by helping yourself to more than your share of anything?`),
    initPenQuestion(11, `Are you rather lively?`),
    initPenQuestion(12, `Would it upset you a lot to see a child or an animal suffer?`),
    initPenQuestion(13, `Do you often worry about things you should not have done or said?`),
    initPenQuestion(14, `Do you dislike people who don't know how to behave themselves?`),
    initPenQuestion(15, `If you say you will do something, do you always keep your promise no matter how inconvenient it might be?`),
    initPenQuestion(16, `Can you usually let yourself go and enjoy yourself at a lively party?`),
    initPenQuestion(17, `Are you an irritable person?`),
    initPenQuestion(18, `Should people always respect the law?`),
    initPenQuestion(19, `Have you ever blamed someone for doing something you knew was really your fault?`),
    initPenQuestion(20, `Do you enjoy meeting new people?`),
    initPenQuestion(21, `Are good manners very important?`),
    initPenQuestion(22, `Are your feelings easily hurt?`),
    initPenQuestion(23, `Are all your habits good and desirable ones?`),
    initPenQuestion(24, `Do you tend to keep in the background on social occasions?`),
    initPenQuestion(25, `Would you take drugs which may have strange or dangerous effects?`),
    initPenQuestion(26, `Do you often feel 'fed-up'?`),
    initPenQuestion(27, `Have you ever taken anything (even a pin or button) that belonged to someone else?`),
    initPenQuestion(28, `Do you like going out a lot?`),
    initPenQuestion(29, `Do you prefer to go your own way rather than act by the rules?`),
    initPenQuestion(30, `Do you enjoy hurting people you love?`),
    initPenQuestion(31, `Are you often troubled about feelings of guilt?`),
    initPenQuestion(32, `Do you sometimes talk about things you know nothing about?`),
    initPenQuestion(33, `Do you prefer reading to meeting people?`),
    initPenQuestion(34, `Do you have enemies who want to harm you?`),
    initPenQuestion(35, `Would you call yourself a nervous person?`),
    initPenQuestion(36, `Do you have many friends?`),
    initPenQuestion(37, `Do you enjoy practical jokes that can sometimes really hurt people?`),
    initPenQuestion(38, `Are you a worrier?`),
    initPenQuestion(39, `As a child did you do as you were told immediately and without grumbling?`),
    initPenQuestion(40, `Would you call yourself happy-go-lucky?`),
    initPenQuestion(41, `Do you generally-speak do and say things quickly without stopping to think?`),
    initPenQuestion(42, `Do you lose your temper easily?`),
    initPenQuestion(43, `Do you always practice what you preach?`),
    initPenQuestion(44, `Do you easily get bored?`),
    initPenQuestion(45, `Do you like telling jokes and funny stories to your friends?`),
    initPenQuestion(46, `Do you mostly spend your time alone?`),
    initPenQuestion(47, `Do you often feel lonely?`),
    initPenQuestion(48, `Can you easily get some life into a rather dull party?`),
    initPenQuestion(49, `Do you like to make other people look foolish?`),
    initPenQuestion(50, `Are you often troubled by aches and pains?`),
    initPenQuestion(51, `Would you be unhappy if you could not see many people most of the time?`),
    initPenQuestion(52, `Would you call yourself a tense or highly-strung person?`),
    initPenQuestion(53, `Do you think marriage is old-fashioned and should be done away with?`),
    initPenQuestion(54, `Do you worry too long after an embarrassing experience?`),
    initPenQuestion(55, `Do you try to avoid looking at a place where someone has died or been badly hurt?`),
    initPenQuestion(56, `Do you suffer from sleeplessness?`),
    initPenQuestion(57, `Do you sometimes feel that life is just not worth living?`),
    initPenQuestion(58, `Should people take more notice of moral laws?`),
    initPenQuestion(59, `Do you find it hard to sleep at night because of your thoughts?`),
    initPenQuestion(60, `Do you like to mix socially with other people?`),
    initPenQuestion(61, `Do you ever feel that you are hard to understand?`),
    initPenQuestion(62, `Do you think people spend too much time safeguarding their future with savings and insurances?`),
    initPenQuestion(63, `Do you hate being in a crowd that is pushing and shoving?`),
    initPenQuestion(64, `Do you think people should obey the rules even when nobody is watching?`),
    initPenQuestion(65, `Do you have periods of such great restlessness that you cannot sit still in a chair?`),
    initPenQuestion(66, `Are you inclined to be moody?`),
    initPenQuestion(67, `Do you like doing things in which you have to move quickly?`),
    initPenQuestion(68, `Do you worry about your health?`),
    initPenQuestion(69, `Do you ever lose your patience with people?`),
    initPenQuestion(70, `Are you usually quiet when you are with other people?`),
    initPenQuestion(71, `Do other people think of you as being very lively?`),
    initPenQuestion(72, `Do you think bad thoughts that you wouldn't want anyone to know about?`),
    initPenQuestion(73, `Can you snap out of a bad mood quickly?`),
    initPenQuestion(74, `Do you find it difficult to show your feelings?`),
    initPenQuestion(75, `Do you enjoy doing things that take a lot of daring?`),
    initPenQuestion(76, `Do you like to keep people guessing what you are going to do?`),
    initPenQuestion(77, `Are you afraid of the dark?`),
    initPenQuestion(78, `Do you ever take advantage of someone?`),
    initPenQuestion(79, `Do you feel easily hurt when people find fault with you or the work you do?`),
    initPenQuestion(80, `Do you often buy things on impulse?`),
    initPenQuestion(81, `Do you like to get ahead of others in a game or at work?`),
    initPenQuestion(82, `Do you find it hard to take 'no' for an answer when you want something?`),
    initPenQuestion(83, `Do you often feel that you are right and others are wrong?`),
    initPenQuestion(84, `Do you like to do things that are a bit risky?`),
    initPenQuestion(85, `Do you prefer to be by yourself when you have free time?`),
    initPenQuestion(86, `Do you like to change your routines often?`),
    initPenQuestion(87, `Do you feel that you are a failure at times?`),
    initPenQuestion(88, `Do you feel that you can never quite catch up with everything you have to do?`),
    initPenQuestion(89, `Do you like to tease people playfully?`),
    initPenQuestion(90, `Do you find it easy to make new friends?`),
    initPenQuestion(91, `Do you like telling a white lie to spare someone's feelings?`),
    initPenQuestion(92, `Do you feel uncomfortable when you are the center of attention?`),
    initPenQuestion(93, `Do you enjoy competing against others?`),
    initPenQuestion(94, `Do you often find yourself daydreaming?`),
    initPenQuestion(95, `Do you think it's important to win at whatever you do?`),
    initPenQuestion(96, `Do you feel a strong need for change and variety?`),
    initPenQuestion(97, `Do you ever regret things you have said or done?`),
    initPenQuestion(98, `Do you prefer working alone rather than in a group?`),
    initPenQuestion(99, `Do you find it easy to laugh at yourself?`),
    initPenQuestion(100, `Do you feel confident about your future?`)
  ];

   */


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
    initFiveModernQuestion(1, `When a conflict or argument arises with your partner, what is your immediate instinct?`, {
      A: `To quickly back down, apologize, or change the subject just to keep the peace.`,
      B: `To withdraw, feel helpless, or wait for them to decide how to handle it because I feel stuck.`,
      C: `To take charge of the conversation, lay out the facts, or set strict boundaries to manage the situation.`,
      D: `To feel deeply hurt, angry, or abandoned, and intensely demand that they see my side.`,
      E: `To suggest a calm timeout if emotions are running too high, then talk it out constructively.`
    }),
    initFiveModernQuestion(2, `How do you usually feel about your partner having a life entirely separate from you?`, {
      A: `I say I’m fine with it, but I secretly worry they will find someone better while they are away.`,
      B: `I am used to being left to fend for myself, so I just emotionally disconnect until they get back.`,
      C: `I prefer to know their schedule, who they are with, and when they will be home so I feel at ease.`,
      D: `I feel highly anxious or resentful when they choose to spend time away from me instead of with me.`,
      E: `I genuinely encourage it; we both need our individual hobbies and friendships to stay healthy.`
    }),
    initFiveModernQuestion(3, `Which statement best describes how you handle your own emotional needs?`, {
      A: `I put my needs completely on the back burner to make sure my partner is happy first.`,
      B: `I rarely expect my partner to meet my needs; I’ve learned it's safer not to hope for much.`,
      C: `I manage my own needs through routine and self-reliance; I don't like relying on others.`,
      D: `I expect my partner to intuitively know what I need, and I get deeply disappointed when they don't.`,
      E: `I feel comfortable stating my needs clearly and directly without feeling guilty or demanding.`
    }),
    initFiveModernQuestion(4, `What is your biggest fear or anxiety when entering into a serious, long-term relationship?`, {
      A: `That I will lose my identity or fail to keep my partner satisfied enough to stay.`,
      B: `That I will eventually be trapped, taken advantage of, or let down completely.`,
      C: `That things will spiral out of control and I won't be able to manage the chaos.`,
      D: `That I will be rejected, forgotten, or left behind by the person I love most.`,
      E: `That I will lose my personal independence or be forced to compromise my core boundaries.`
    }),
    initFiveModernQuestion(5, `When your partner is going through a stressful period at work or with family, you tend to:`, {
      A: `Over-function by taking on all their chores and responsibilities so they don't have to stress.`,
      B: `Feel overwhelmed by their bad mood and quietly step back to avoid being a burden.`,
      C: `Offer a step-by-step action plan to fix their problems whether they asked for advice or not.`,
      D: `Worry that their stress means they are pulling away from you or losing interest.`,
      E: `Provide a steady, listening ear and ask how best you can support them without taking it on yourself.`
    }),
    initFiveModernQuestion(6, `How do you handle receiving critical feedback or constructive advice from your partner?`, {
      A: `I take it deeply to heart, immediately assume I'm a bad partner, and try to fix it right away.`,
      B: `I shut down internally, feeling like criticism is just proof that things never work out for me.`,
      C: `I tend to get defensive, pointing out flaws in their own logic or behavior instead.`,
      D: `I feel personally attacked and experience a rush of strong emotions that make it hard to stay calm.`,
      E: `I listen objectively, take what is useful, and discuss it without letting it threaten my self-worth.`
    }),
    initFiveModernQuestion(7, `When it comes to making major decisions in a relationship (like finances or moving), you prefer to:`, {
      A: `Let your partner take the lead so you don't risk causing a disagreement.`,
      B: `Go along with whatever is chosen, feeling like your opinion doesn't carry much weight anyway.`,
      C: `Take total control of the planning and execution to ensure everything is done right.`,
      D: `Insist on constant validation and reassurance that you are both completely on the same page.`,
      E: `Collaborate openly, weighing both partners' thoughts and feelings equally.`
    }),
    initFiveModernQuestion(8, `How do you typically react when your partner forgets a special date or fails to text you back promptly?`, {
      A: `I make excuses for them and pretend it doesn't hurt me at all.`,
      B: `I shrug it off and assume I shouldn't rely on anyone anyway.`,
      C: `I feel annoyed by their disorganization and feel tempted to correct or lecture them about it.`,
      D: `I panic, spiral into worst-case scenarios, and send follow-up messages to check if they are mad.`,
      E: `I recognize it as an honest mistake and bring it up calmly later without jumping to conclusions.`
    }),
    initFiveModernQuestion(9, `What is your relationship pattern when things start getting too close or vulnerable?`, {
      A: `I lean in even harder, sometimes losing sight of my own boundaries to keep the closeness going.`,
      B: `I pull back emotionally, preferring to keep a safe distance so I don't get hurt.`,
      C: `I try to establish rigid rules or expectations to keep the dynamic structured and predictable.`,
      D: `I swing between intense craving for intimacy and sudden panic that it's too much.`,
      E: `I embrace the vulnerability comfortably, feeling safe to share my true self.`
    }),
    initFiveModernQuestion(10, `How would you define a truly successful, modern romantic partnership?`, {
      A: `One where everyone is happy and my partner feels constantly cared for and valued.`,
      B: `One where you accept that relationships are hard and you just try to keep the peace.`,
      C: `One where both people are efficient, organized partners who manage life smoothly together.`,
      D: `One of intense, passionate devotion where you share every thought and experience together.`,
      E: `A healthy partnership of two complete individuals who choose to support and grow alongside each other.`
    }),
    initFiveModernQuestion(11, `When your partner is having a bad day and snaps at you unexpectedly, your first reaction is to:`, {
      A: `Blame yourself and immediately try to cheer them up to restore harmony.`,
      B: `Assume you always bear the brunt of their bad moods and quietly retreat.`,
      C: `Call out their bad behavior and tell them they have no right to take it out on you.`,
      D: `Feel deeply rejected and experience a rush of anxiety that they are pulling away from you.`,
      E: `Recognize they are stressed, give them a little grace, and check in calmly.`
    }),
    initFiveModernQuestion(12, `How do you handle sharing your deep insecurities or past trauma with a partner?`, {
      A: `I keep them hidden because I’m afraid my baggage will scare them away or make them unhappy.`,
      B: `I rarely share them because I assume nobody wants to deal with my heavy past.`,
      C: `I keep things strictly analytical and practical, avoiding overly emotional vulnerability.`,
      D: `I share them intensely and quickly, looking for immediate and absolute reassurance.`,
      E: `I share them gradually at a comfortable pace as trust naturally builds between us.`
    }),
    initFiveModernQuestion(13, `When planning a weekend trip or a vacation together, you tend to prefer:`, {
      A: `Whatever your partner wants to do, as long as they are happy with the plan.`,
      B: `Letting your partner handle all the details because you expect things to go wrong anyway.`,
      C: `Controlling the entire itinerary, booking, and schedule to make sure everything runs smoothly.`,
      D: `Expecting your partner to read your mind on what you want, then getting upset if they guess wrong.`,
      E: `Collaborating together to build an itinerary that balances both of your personal interests.`
    }),
    initFiveModernQuestion(14, `How do you view independence versus togetherness in a healthy romance?`, {
      A: `Togetherness is everything; true love means doing almost everything side by side.`,
      B: `It doesn't matter much either way; relationships usually end up feeling lonely eventually.`,
      C: `There needs to be a strict, orderly structure for how we divide our time and responsibilities.`,
      D: `It's a constant emotional push-and-pull where I crave total fusion but fear being smothered.`,
      E: `It's a balanced dance of sharing a life while fiercely respecting each other's individual freedom.`
    }),
    initFiveModernQuestion(15, `When you make a mistake in the relationship, how easy is it for you to apologize?`, {
      A: `I over-apologize excessively, even for things that weren't actually my fault.`,
      B: `I find it hard because I feel like I'm always the one blamed anyway.`,
      C: `I struggle with it because admitting fault makes me feel incompetent or vulnerable.`,
      D: `I apologize dramatically, but I expect immediate absolution and heavy reassurance back.`,
      E: `I can easily own my mistakes, apologize sincerely, and work on correcting them.`
    }),
    initFiveModernQuestion(16, `How do you feel when your partner receives praise or attention from other people?`, {
      A: `I beam with pride, making sure they feel celebrated (while hiding any secret insecurities).`,
      B: `I feel indifferent, figuring it's just standard behavior.`,
      C: `I judge how they handle the attention and might offer "pointers" on how to stay humble.`,
      D: `I feel a sudden spike of jealousy or insecurity, wondering if they prefer that person's company.`,
      E: `I genuinely celebrate their success and feel secure in our mutual bond.`
    }),
    initFiveModernQuestion(17, `When thinking about the long-term future of a relationship, your primary driver is:`, {
      A: `Making sure my partner stays comfortable, loved, and never has a reason to leave.`,
      B: `Hoping for the best, but bracing yourself for inevitable disappointment or heartbreak.`,
      C: `Building a stable, secure, and highly organized fortress against future life uncertainties.`,
      D: `Seeking a passionate, high-intensity fairy tale romance with zero emotional distance.`,
      E: `Building a stable, communicative partnership based on mutual trust and personal growth.`
    }),
    initFiveModernQuestion(18, `How do you react when your partner wants to spend a weekend hanging out with their friends instead of you?`, {
      A: `I hide my disappointment and tell them to have fun, even if I feel lonely at home.`,
      B: `I don't mind because I'm used to entertaining myself or being alone anyway.`,
      C: `I check to see if their plans fit into our agreed-upon household schedule or responsibilities.`,
      D: `I feel secretly hurt, tracking their updates and wishing they prioritized me more.`,
      E: `I encourage it enthusiastically, knowing that independent social time enriches our relationship.`
    }),
    initFiveModernQuestion(19, `When you feel unappreciated or overlooked by your partner, your behavioral pattern is to:`, {
      A: `Work twice as hard to win their approval and affection.`,
      B: `Sulk in silence, play the victim, and wait for them to notice how much they hurt you.`,
      C: `Confront them directly with a list of all the ways they aren't pulling their weight.`,
      D: `Pick a fight or test their loyalty to see if they will chase after you and prove they care.`,
      E: `Express your feelings openly and calmly using "I" statements without attacking them.`
    }),
    initFiveModernQuestion(20, `What does genuine emotional safety mean to you in a modern partnership?`, {
      A: `Knowing that nobody is mad at me and that peace is being maintained at all costs.`,
      B: `Realizing that you can ultimately rely only on yourself no matter what happens.`,
      C: `Having clear rules, predictable expectations, and a well-managed life structure.`,
      D: `Feeling an intense, unbreakable, and all-consuming bond where you are never left guessing.`,
      E: `Knowing you can be completely yourself, make mistakes, and resolve conflicts with mutual respect.`
    })
  ];

  /*
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

   */
}
export function initSeductionQuestions() {

  return [
    initSeductionQuestion(1, `When you first start dating someone, what is your primary goal?`, {
      A: `To create an undeniable, electric spark and a deep physical/emotional attraction.`,
      B: `To make them feel safe, cared for, and deeply supported by me.`,
      C: `To see if they match my lifestyle, respect my independence, and can keep up with me.`,
      D: `To observe them quietly and see if they are deep enough to earn my trust.`
    }),
    initSeductionQuestion(2, `How do you usually express your affection?`, {
      A: `Through intense eye contact, flirtation, compliments, and physical touch.`,
      B: `By taking care of them—cooking, helping them organize their life, or giving practical advice.`,
      C: `By planning exciting dates, pushing them toward their goals, and offering absolute loyalty.`,
      D: `Through quiet quality time, deep late-night conversations, and soulful gifts.`
    }),
    initSeductionQuestion(3, `When someone catches your interest in a social setting, how do you make your move?`, {
      A: `I walk right up, flash a confident smile, and lay on the charm immediately.`,
      B: `I look for a way to help them or make sure they are comfortable in the room.`,
      C: `I engage them in a witty, playful banter or challenge them intellectually.`,
      D: `I watch them from afar, dropping subtle, mysterious hints to see if they notice me.`
    }),
    initSeductionQuestion(4, `What is your biggest fear or turn-off during the early stages of romance?`, {
      A: `A lack of passion or losing that initial electric thrill too quickly.`,
      B: `Feeling like my care and kindness are being taken for granted or unappreciated.`,
      C: `Someone trying to control my schedule or moving way too fast for my comfort.`,
      D: `Superficial conversation and a partner who lacks emotional depth or introspection.`
    }),
    initSeductionQuestion(5, `How do you handle the "chase" or the early tension of dating?`, {
      A: `I love the heat of the chase; I lean into the excitement and keep things passionate.`,
      B: `I focus on building a warm, stable comfort zone so they know they can rely on me.`,
      C: `I keep things cool and independent, making sure we both retain our personal freedom.`,
      D: `I take it slow, testing the waters carefully to ensure emotional safety before opening up.`
    }),
    initSeductionQuestion(6, `What kind of compliment makes you feel the most desired or seen?`, {
      A: `Praise about my attractiveness, confidence, and magnetic energy.`,
      B: `Appreciation for how kind, thoughtful, and nurturing I am.`,
      C: `Compliments on my capability, ambition, and sharp independence.`,
      D: `Recognition of my inner depth, unique perspective, and soul.`
    }),
    initSeductionQuestion(7, `When planning a first date, what style do you naturally gravitate toward?`, {
      A: `Something high-energy, exciting, and adventurous that builds adrenaline.`,
      B: `A cozy, intimate setting where we can focus entirely on comfort and care.`,
      C: `An active, practical outing like a museum, gallery walk, or lively venue.`,
      D: `A quiet, low-pressure spot where deep conversation can flow naturally.`
    }),
    initSeductionQuestion(8, `How do you handle conflict or a dip in chemistry during the dating phase?`, {
      A: `I try to reignite the spark quickly with high emotion, drama, or playful teasing.`,
      B: `I over-accommodate to fix whatever went wrong and restore peace.`,
      C: `I analyze the dynamic logically and pull back to reevaluate if it's worth my time.`,
      D: `I retreat into my shell to process my feelings and protect myself from potential hurt.`
    }),
    initSeductionQuestion(9, `What is your approach to texting and communication when courting someone?`, {
      A: `Frequent, flirtatious, and bold messages that keep the energy high and lively.`,
      B: `Warm, supportive check-ins to make sure they know I'm thinking about them.`,
      C: `Direct and purposeful communication; I don't love endless small talk.`,
      D: `Meaningful exchanges, often sharing deep thoughts, music, or articles.`
    }),
    initSeductionQuestion(10, `How do you view physical intimacy in the arc of a new relationship?`, {
      A: `It's a crucial, immediate expression of chemistry that shouldn't be delayed too long.`,
      B: `It should naturally follow an established sense of emotional safety and deep trust.`,
      C: `It's important, but secondary to mutual respect and intellectual alignment.`,
      D: `It's a sacred connection that requires complete emotional vulnerability first.`
    }),
    initSeductionQuestion(11, `When your partner or date shares a vulnerability with you, how do you respond?`, {
      A: `I try to cheer them up, inject positivity, or shift the focus to something exciting.`,
      B: `I envelop them in support, taking on their pain to comfort them completely.`,
      C: `I offer practical solutions and rational guidance to help them solve the problem.`,
      D: `I match their depth, sharing a vulnerability of my own to deepen our bond.`
    }),
    initSeductionQuestion(12, `What role does mystery play in your style of attraction?`, {
      A: `Very little; I am an open book with my desires and intentions.`,
      B: `Moderate; I like to reveal my nurturing layers slowly over time.`,
      C: `High; I prefer keeping certain aspects of my inner life guarded and elite.`,
      D: `Very high; my quiet, enigmatic nature is usually what draws people in.`
    }),
    initSeductionQuestion(13, `How do you react if a love interest pulls away or becomes distant?`, {
      A: `I pursue them with more intensity to win back their attention.`,
      B: `I worry I did something wrong and try harder to please them.`,
      C: `I match their distance immediately—if they pull away, I step back twice as far.`,
      D: `I quietly withdraw, assuming they weren't deep enough for me anyway.`
    }),
    initSeductionQuestion(14, `Which word best describes your overall aura when you walk into a dating environment?`, {
      A: `Magnetic, bold, and captivating.`,
      B: `Warm, inviting, and nurturing.`,
      C: `Sharp, confident, and self-contained.`,
      D: `Intriguing, deep, and observant.`
    }),
    initSeductionQuestion(15, `What do you look for most in terms of intellectual compatibility?`, {
      A: `Someone who can match my wit and keep up with playful banter.`,
      B: `Someone who shares core values about kindness and helping others.`,
      C: `Someone ambitious, sharp, and capable of holding their own in a debate.`,
      D: `Someone capable of profound philosophical or emotional exploration.`
    }),
    initSeductionQuestion(16, `How do you handle jealousy or competition for your partner's attention?`, {
      A: `I step up my game and show everyone why I am the primary choice.`,
      B: `I feel quietly insecure, wondering if I'm not good enough to be chosen.`,
      C: `I find it mildly amusing or irritating; I expect my partner to have standards.`,
      D: `I find it distasteful and will often quietly exit a messy dynamic.`
    }),
    initSeductionQuestion(17, `When making decisions about where a relationship is heading, you tend to:`, {
      A: `Trust your gut feelings and go wherever the passion leads.`,
      B: `Focus on how well you take care of each other and build a home together.`,
      C: `Evaluate the logistics, compatibility, and mutual freedom rationally.`,
      D: `Take your time analyzing every subtle shift in emotional alignment.`
    }),
    initSeductionQuestion(18, `What is your typical posture or body language when flirting?`, {
      A: `Open, expressive, leaning in close with direct eye contact.`,
      B: `Soft, welcoming, open-armed, and gentle.`,
      C: `Poised, controlled, observant, and subtly commanding.`,
      D: `Reserved initially, unfolding slowly as comfort is established.`
    }),
    initSeductionQuestion(19, `What is your ideal definition of a romantic reward or milestone?`, {
      A: `An unforgettable, passionate night out that leaves you both breathless.`,
      B: `A peaceful evening at home feeling completely secure and deeply appreciated.`,
      C: `Achieving a major life or relationship goal side-by-side as a power duo.`,
      D: `A profound breakthrough in understanding each other's deepest truths.`
    }),
    initSeductionQuestion(20, `Looking back at your romantic history, what is your signature seduction trait?`, {
      A: `An undeniable, hard-to-resist magnetic charm and bold confidence.`,
      B: `An irresistible warmth that makes people feel instantly at home with you.`,
      C: `An alluring independence that makes people want to earn your approval.`,
      D: `A deep, hypnotic mystery that draws people in to figure you out.`
    })
  ]

  /*
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
  */
}
export function initSixStylesQuestions() {
  return [
    // Eros (1 to 7)
    initSixStylesQuestion(1, `My partner and I had the right physical chemistry right from the start.`),
    initSixStylesQuestion(2, `My partner and I physically fit together well.`),
    initSixStylesQuestion(3, `I feel that my partner and I were meant for each other.`),
    initSixStylesQuestion(4, `My partner fulfills my ideal standards of physical beauty and attractiveness.`),
    initSixStylesQuestion(5, `We became emotionally involved rather quickly.`),
    initSixStylesQuestion(6, `My partner and I have an intense, passionate connection right from the beginning.`),
    initSixStylesQuestion(7, `I am deeply drawn to my partner's physical appearance and mannerisms.`),

    // Ludus (8 to 14)
    initSixStylesQuestion(8, `I try to keep my partner a little uncertain about my commitment to them.`),
    initSixStylesQuestion(9, `I believe that what my partner doesn't know about my past won't hurt them.`),
    initSixStylesQuestion(10, `When my partner gets too dependent on me, I want to back off a little.`),
    initSixStylesQuestion(11, `I enjoy playing the game of dating and romance with multiple people at once.`),
    initSixStylesQuestion(12, `I get restless if I stay with the same partner for too long without excitement.`),
    initSixStylesQuestion(13, `I would rather keep romantic relationships casual than get tied down quickly.`),
    initSixStylesQuestion(14, `I sometimes trick or test my partner to see how much they care.`),

    // Storge (15 to 21)
    initSixStylesQuestion(15, `It is hard to say exactly where friendship ends and love begins; for me, they melt into each other.`),
    initSixStylesQuestion(16, `The best love grows out of an enduring, deep friendship.`),
    initSixStylesQuestion(17, `Our love is a quiet, steady kind of affection rather than wild passion.`),
    initSixStylesQuestion(18, `True love is built on a foundation of shared history and companionship.`),
    initSixStylesQuestion(19, `I expect to always be close friends with the person I love.`),
    initSixStylesQuestion(20, `Our relationship is built upon mutual trust and deeply compatible life goals.`),
    initSixStylesQuestion(21, `I feel most loved when my partner treats me like a trusted, lifelong companion.`),

    // Pragma (22 to 28)
    initSixStylesQuestion(22, `Before getting seriously involved with someone, I try to figure out what their background and future prospects look like.`),
    initSixStylesQuestion(23, `I carefully consider whether a potential partner will fit into my family and lifestyle before committing.`),
    initSixStylesQuestion(24, `A main goal in my life is to find a partner who shares my financial and professional values.`),
    initSixStylesQuestion(25, `It is wise to plan carefully before choosing a long-term partner rather than just following sudden feelings.`),
    initSixStylesQuestion(26, `I evaluate how well a partner can handle practical responsibilities before building a life together.`),
    initSixStylesQuestion(27, `I believe compatibility in life planning is more important than raw emotional intensity.`),
    initSixStylesQuestion(28, `I prefer partners who are established and practical over those who are wildly unpredictable.`),

    // Mania (29 to 35)
    initSixStylesQuestion(29, `When I am in love, I get so confused and overwhelmed that I cannot concentrate on anything else.`),
    initSixStylesQuestion(30, `I get very anxious and upset when my partner is away from me for too long.`),
    initSixStylesQuestion(31, `If my partner doesn't pay attention to me, I feel sick to my stomach and deeply insecure.`),
    initSixStylesQuestion(32, `I find myself obsessively checking my phone to see if my partner has texted me back.`),
    initSixStylesQuestion(33, `My romantic relationships are a roller coaster of intense emotional highs and devastating lows.`),
    initSixStylesQuestion(34, `I sometimes demand immediate proof that my partner truly loves me.`),
    initSixStylesQuestion(35, `I worry constantly that my partner might abandon me or lose interest in me.`),

    // Agape (36 to 42)
    initSixStylesQuestion(36, `I would rather suffer myself than let my partner experience hardship or pain.`),
    initSixStylesQuestion(37, `I am willing to endure almost anything to keep my partner happy and fulfilled.`),
    initSixStylesQuestion(38, `My partner's needs and happiness always come before my own personal desires.`),
    initSixStylesQuestion(39, `I find deep joy in taking care of my partner without ever expecting anything in return.`),
    initSixStylesQuestion(40, `I am completely forgiving of my partner's faults and mistakes out of unconditional care.`),
    initSixStylesQuestion(41, `Loving someone means putting their well-being entirely above your own comfort.`),
    initSixStylesQuestion(42, `I feel a profound, selfless duty to protect and support my partner through every trial.`)
  ];
  /*
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
   */
}

