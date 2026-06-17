import {computed, Injectable, signal, WritableSignal} from '@angular/core';
import {TestQuestionList, TestQuestions} from '../../../types/test.types';
import {
  initFiveMultipleChoiceQuestion,
  initFiveScaleQuestion,
  initFourMultipleChoiceQuestion,
  initTrueFalseQuestion,
  initTwoMultipleChoiceQuestion, testTypeKeys
} from '../../../util/question.util';

@Injectable({
  providedIn: 'root',
})
export class QuestionService {

  private testQuestions: WritableSignal<TestQuestions> = signal({
    bigFive: [
      initFiveScaleQuestion(1,testTypeKeys.bigFive,`I am fascinated by art, theater, literature, or deep philosophical theories.`),
      initFiveScaleQuestion(2,testTypeKeys.bigFive,`I keep my belongings highly organized and always try to show up on time.`),
      initFiveScaleQuestion(3,testTypeKeys.bigFive,`I feel energized when I am surrounded by a large, lively group of people.`),
      initFiveScaleQuestion(4,testTypeKeys.bigFive,`I tend to sympathize with other people's feelings and enjoy helping them.`),
      initFiveScaleQuestion(5,testTypeKeys.bigFive,`I find myself worrying a lot about things that could go wrong.`),
      initFiveScaleQuestion(6,testTypeKeys.bigFive,`I prefer sticking to familiar routines rather than trying new, unpredictable things.`),
      initFiveScaleQuestion(7,testTypeKeys.bigFive,`I sometimes procrastinate or leave tasks unfinished until the last minute.`),
      initFiveScaleQuestion(8,testTypeKeys.bigFive,`I am a quiet person who prefers solitary activities over crowded social gatherings.`),
      initFiveScaleQuestion(9,testTypeKeys.bigFive,`I am generally suspicious of other people's motives until they prove they are trustworthy.`),
      initFiveScaleQuestion(10,testTypeKeys.bigFive,`I handle high-stress situations calmly and rarely get overwhelmed by anxiety.`),
      initFiveScaleQuestion(11,testTypeKeys.bigFive,`I have a vivid imagination and love brainstorming original ideas.`),
      initFiveScaleQuestion(12,testTypeKeys.bigFive,`I pride myself on being thorough, dependable, and precise in my work.`),
      initFiveScaleQuestion(13,testTypeKeys.bigFive,`I am natural at striking up conversations and making friends with strangers.`),
      initFiveScaleQuestion(14,testTypeKeys.bigFive,`I believe most people are basically good-natured, honest, and well-intentioned.`),
      initFiveScaleQuestion(15,testTypeKeys.bigFive,`I experience frequent ups and downs in my mood or feel easily irritated.`),
      initFiveScaleQuestion(16,testTypeKeys.bigFive,`I find abstract or highly theoretical discussions boring or impractical.`),
      initFiveScaleQuestion(17,testTypeKeys.bigFive,`I struggle to stay self-disciplined when a task becomes boring or difficult.`),
      initFiveScaleQuestion(18,testTypeKeys.bigFive,`I often keep my thoughts to myself and don't speak up in group meetings.`),
      initFiveScaleQuestion(19,testTypeKeys.bigFive,`I can be blunt or overly critical if someone is being illogical or incompetent.`),
      initFiveScaleQuestion(20,testTypeKeys.bigFive,`I snap back to normal quickly after experiencing an embarrassing or stressful event.`),
    ],
    myersBrigs: [
      initTwoMultipleChoiceQuestion(1,testTypeKeys.myersBrigs,`After a long, exhausting week, how do you prefer to recharge?`,{
        A: `Going out with friends, attending a party, or being around a crowd.`,
        B: `Having a quiet night in, reading, watching a movie, or doing a solo hobby.`
      }),
      initTwoMultipleChoiceQuestion(2,testTypeKeys.myersBrigs,`When in a large social setting, you usually:`,{
        A: `Introduce yourself to new people and strike up conversations easily.`,
        B: `Stick to a few people you already know well.`
      }),
      initTwoMultipleChoiceQuestion(3,testTypeKeys.myersBrigs,`In group projects or meetings, you tend to:`,{
        A: `Think out loud, voicing your ideas as they come to you.`,
        B: `Process your thoughts internally first and speak only when your idea is fully formed.`
      }),
      initTwoMultipleChoiceQuestion(4,testTypeKeys.myersBrigs,`Which describes your ideal work environment?`,{
        A: `A bustling, collaborative space with plenty of interaction.`,
        B: `A quiet, independent space where you can focus without interruption.`
      }),
      initTwoMultipleChoiceQuestion(5,testTypeKeys.myersBrigs,`You would describe yourself as more:`,{
        A: `Outgoing, expressive, and open.`,
        B: `Reserved, reflective, and private.`
      }),
      initTwoMultipleChoiceQuestion(6,testTypeKeys.myersBrigs,`When learning a new skill, you prefer to:`,{
        A: `Learn practical, real-world applications with clear instructions.`,
        B: `Understand the overarching theories, concepts, and creative possibilities.`
      }),
      initTwoMultipleChoiceQuestion(7,testTypeKeys.myersBrigs,`If you are describing a movie to a friend, you are more likely to:`,{
        A: `Detail exactly what happened, the plot points, and the visual scenes.`,
        B: `Talk about the underlying themes, deeper meanings, and the vibe of the film.`
      }),
      initTwoMultipleChoiceQuestion(8,testTypeKeys.myersBrigs,`You tend to focus more on:`,{
        A: `The present reality—what is currently happening and what is tangible.`,
        B: `Future possibilities—what could be and what the big picture looks like.`
      }),
      initTwoMultipleChoiceQuestion(9,testTypeKeys.myersBrigs,`People often compliment you for your:`,{
        A: `Common sense, practicality, and attention to detail.`,
        B: `Imagination, creativity, and original ideas.`
      }),
      initTwoMultipleChoiceQuestion(10,testTypeKeys.myersBrigs,`You prefer facts and data over hunches and gut feelings.`,{
        A: `True. Show me the evidence.`,
        B: `False. I trust my intuition and patterns.`
      }),
      initTwoMultipleChoiceQuestion(11,testTypeKeys.myersBrigs,`When making an important decision, your final choice is usually guided by:`,{
        A: `Logic, objective analysis, and cold hard facts.`,
        B: `Your values, feelings, and how the decision impacts others.`
      }),
      initTwoMultipleChoiceQuestion(12,testTypeKeys.myersBrigs,`When a friend comes to you with a problem, your first instinct is to:`,{
        A: `Offer practical solutions and analyze how to fix the issue.`,
        B: `Offer practical solutions and analyze how to fix the issue.`
      }),
      initTwoMultipleChoiceQuestion(13,testTypeKeys.myersBrigs,`In an argument or debate, you care more about being:`,{
        A: `Fair, accurate, and logically correct.`,
        B: `Compassionate, harmonious, and understanding.`
      }),
      initTwoMultipleChoiceQuestion(14,testTypeKeys.myersBrigs,`Which statement sounds more like you?`,{
        A: `I try to keep my emotions out of my decisions so I can stay objective.`,
        B: `I follow my heart and make sure everyone's feelings are respected.`
      }),
      initTwoMultipleChoiceQuestion(15,testTypeKeys.myersBrigs,`If you have to give someone constructive criticism, you worry most about:`,{
        A: `Being too blunt or hurting their feelings (but you say it anyway because it's true).`,
        B: `Hurting their feelings, so you sugarcoat it or avoid saying it entirely.`
      }),
      initTwoMultipleChoiceQuestion(16,testTypeKeys.myersBrigs,`When preparing for a trip, you usually:`,{
        A: `Plan out a detailed itinerary, book things in advance, and pack early.`,
        B: `Pack at the last minute and figure out what to do once you arrive.`
      }),
      initTwoMultipleChoiceQuestion(17,testTypeKeys.myersBrigs,`How do you feel about strict routines and schedules?`,{
        A: `They comfort me; I feel organized and in control.`,
        B: `They suffocate me; I feel trapped and prefer flexibility.`
      }),
      initTwoMultipleChoiceQuestion(18,testTypeKeys.myersBrigs,`When given a major deadline or project, you usually:`,{
        A: `Break it into steps and work on it steadily so you finish early.`,
        B: `Wait until the pressure kicks in near the deadline to do your best work.`
      }),
      initTwoMultipleChoiceQuestion(19,testTypeKeys.myersBrigs,`Your living or workspace is generally:`,{
        A: `Neat, organized, and everything has its proper place.`,
        B: `A bit chaotic or "organized clutter"—you know where things are, but it looks messy.`
      }),
      initTwoMultipleChoiceQuestion(20,testTypeKeys.myersBrigs,`You prefer to have things:`,{
        A: `Settled, decided, and closed so you can move on.`,
        B: `Open-ended, flexible, and subject to change if better options come up.`
      }),
    ],
    pen: [
      initTrueFalseQuestion(1,testTypeKeys.pen,`Do you prefer having a large circle of friends over having just one or two close confidants?`),
      initTrueFalseQuestion(2,testTypeKeys.pen,`Do you often find yourself worrying about things that might go wrong?`),
      initTrueFalseQuestion(3,testTypeKeys.pen,`Would you enjoy taking part in a high-risk sport or a thrilling, unpredictable activity?`),
      initTrueFalseQuestion(4,testTypeKeys.pen,`Do you find it easy to strike up a conversation with a total stranger?`),
      initTrueFalseQuestion(5,testTypeKeys.pen,`Are your feelings easily hurt by criticism or minor slights?`),
      initTrueFalseQuestion(6,testTypeKeys.pen,`Do you tend to keep your opinions to yourself if you think they might upset social harmony?`),
      initTrueFalseQuestion(7,testTypeKeys.pen,`Do you consider yourself a lively, energetic person in social situations?`),
      initTrueFalseQuestion(8,testTypeKeys.pen,`Do you experience frequent ups and downs in your mood for no apparent reason?`),
      initTrueFalseQuestion(9,testTypeKeys.pen,`Do you think that strictly following all of society's rules and laws is overrated?`),
      initTrueFalseQuestion(10,testTypeKeys.pen,`Do you usually take the initiative to organize social gatherings or outings?`),
      initTrueFalseQuestion(11,testTypeKeys.pen,`Do you often feel tense, restless, or "on edge"?`),
      initTrueFalseQuestion(12,testTypeKeys.pen,`Do you place a high value on cooperation, empathy, and making sure others feel comfortable?`),
      initTrueFalseQuestion(13,testTypeKeys.pen,`Would you describe yourself as a quiet person who prefers solitary activities?`),
      initTrueFalseQuestion(14,testTypeKeys.pen,`Does it take you a long time to get over an embarrassing or stressful situation?`),
      initTrueFalseQuestion(15,testTypeKeys.pen,`Do you sometimes enjoy being deliberately unconventional or shocking others with your behavior?`),
    ],
    fiveModern: [
      initFiveMultipleChoiceQuestion(1,testTypeKeys.fiveModern,`When a conflict or argument arises with your partner, what is your immediate instinct?`, {
        A: `To quickly back down, apologize, or change the subject just to keep the peace.`,
        B: `To withdraw, feel helpless, or wait for them to decide how to handle it because I feel stuck.`,
        C: `To take charge of the conversation, lay out the facts, or set strict boundaries to manage the situation.`,
        D: `To feel deeply hurt, angry, or abandoned, and intensely demand that they see my side.`,
        E: `To suggest a calm timeout if emotions are running too high, then talk it out constructively.`
      }),
      initFiveMultipleChoiceQuestion(2,testTypeKeys.fiveModern,`How do you usually feel about your partner having a life entirely separate from you?`, {
        A: `I say I’m fine with it, but I secretly worry they will find someone better while they are away.`,
        B: `I am used to being left to fend for myself, so I just emotionally disconnect until they get back.`,
        C: `I prefer to know their schedule, who they are with, and when they will be home so I feel at ease.`,
        D: `I feel highly anxious or resentful when they choose to spend time away from me instead of with me.`,
        E: `I genuinely encourage it; we both need our individual hobbies and friendships to stay healthy.`
      }),
      initFiveMultipleChoiceQuestion(3,testTypeKeys.fiveModern,`Which statement best describes how you handle your own emotional needs?`, {
        A: `I put my needs completely on the back burner to make sure my partner is happy first.`,
        B: `I rarely expect my partner to meet my needs; I’ve learned it's safer not to hope for much.`,
        C: `I manage my own needs through routine and self-reliance; I don't like relying on others.`,
        D: `I expect my partner to intuitively know what I need, and I get deeply disappointed when they don't.`,
        E: `I feel comfortable stating my needs clearly and directly without feeling guilty or demanding.`
      }),
      initFiveMultipleChoiceQuestion(4,testTypeKeys.fiveModern,`When a relationship is in the early "honeymoon phase," you typically:`, {
        A: `Do everything you can to mold yourself into their perfect ideal partner.`,
        B: `Feel anxious or waiting for the other shoe to drop, expecting them to eventually mistreat you.`,
        C: `Assess them logically to make sure they fit smoothly into your structured lifestyle.`,
        D: `Fall incredibly fast and hard, putting them on a pedestal as your absolute soulmate.`,
        E: `Enjoy the connection while keeping a grounded perspective on real-world compatibility.`
      }),
      initFiveMultipleChoiceQuestion(5,testTypeKeys.fiveModern,`What is your deepest, most subconscious fear in a romance?`, {
        A: `Rejection or having my partner be upset with me.`,
        B: `Emotional chaos, pain, or being completely overpowered/trapped.`,
        C: `Vulnerability, losing control, or being caught off guard by a betrayal.`,
        D: `Abandonment, being forgotten, or discovering the "spark" was an illusion.`,
        E: `Losing a meaningful connection, but I know I can ultimately survive and heal on my own.`
      }),
    ],
    seduction: [
      initFourMultipleChoiceQuestion(1,testTypeKeys.seduction,`When you first start dating someone, what is your primary goal?`, {
        A: `To create an undeniable, electric spark and a deep physical/emotional attraction.`,
        B: `To make them feel safe, cared for, and deeply supported by me.`,
        C: `To see if they match my lifestyle, respect my independence, and can keep up with me.`,
        D: `To observe them quietly and see if they are deep enough to earn my trust.`
      }),
      initFourMultipleChoiceQuestion(2,testTypeKeys.seduction,`How do you usually express your affection?`, {
        A: `Through intense eye contact, flirtation, compliments, and physical touch.`,
        B: `By taking care of them—cooking, helping them organize their life, or giving practical advice.`,
        C: `By planning exciting dates, pushing them toward their goals, and offering absolute loyalty.`,
        D: `Through quiet quality time, deep late-night conversations, and soulful gifts.`
      }),
      initFourMultipleChoiceQuestion(3,testTypeKeys.seduction,`What is your relationship "superpower"?`, {
        A: `Magnetism. I know how to make a partner feel incredibly desired and captivated.`,
        B: `Nurturing. I can turn any chaotic situation into a warm, comfortable sanctuary.`,
        C: `Empowerment. I inspire my partners to achieve their dreams and stand on their own two feet.`,
        D: `Intuition. I can read between the lines and understand my partner's hidden thoughts.`
      }),
      initFourMultipleChoiceQuestion(4,testTypeKeys.seduction,`What is your biggest fear or pet peeve in a romance?`, {
        A: `The spark dying out, leading to a boring, predictable routine.`,
        B: `Being unappreciated or taken for granted after giving so much of myself.`,
        C: `Feeling controlled, suffocated, or having my personal freedom restricted.`,
        D: `Superficiality, small talk, or a partner who violates my privacy.`
      }),
      initFourMultipleChoiceQuestion(5,testTypeKeys.seduction,`When your partner is going through a hard time, you usually:`, {
        A: `Try to distract them with romance, fun, or physical intimacy to lift their spirits.`,
        B: `Immediately step in to fix things, soothe them, and handle their daily responsibilities.`,
        C: `Give them a motivating pep talk and help them brainstorm a logical solution.`,
        D: `Sit with them in silence, offering a calm, non-judgmental space to process their feelings.`
      }),
      initFourMultipleChoiceQuestion(6,testTypeKeys.seduction,`How do you feel about vulnerability in a relationship?`, {
        A: `I love emotional intensity; open up to me completely right away!`,
        B: `I find it easy to be vulnerable if it means helping my partner heal.`,
        C: `I struggle with it. I prefer to keep my guard up so I don't look weak.`,
        D: `I am a vault. I only reveal my deepest layers over a long period of time.`
      }),
      initFourMultipleChoiceQuestion(7,testTypeKeys.seduction,`Your ideal date night involves:`, {
        A: `Dressing up to the nines, a dim candlelit dinner, and a glamorous vibe.`,
        B: `A cozy, intimate night in with home-cooked comfort food and cuddling.`,
        C: `An adventurous activity like a concert, hiking, or exploring a new city.`,
        D: `A quiet museum visit, a stroll in nature, or a late-night drive talking about the universe.`
      }),
      initFourMultipleChoiceQuestion(8,testTypeKeys.seduction,`What is your classic "shadow behavior" (your biggest flaw) when dating?`, {
        A: `I can get addicted to the honeymoon phase and pull away when things get normal.`,
        B: `I over-give, burn myself out, and accidentally mother or "fix" my partner.`,
        C: `I can be overly competitive, blunt, or emotionally detached when I'm stressed.`,
        D: `I can become distant, icy, or walls-up, shutting my partner out completely.`
      }),
    ],
    sixStyles: [
      initFiveScaleQuestion(1,testTypeKeys.sixStyles,`My partner and I had the right physical chemistry right from the start.`),
      initFiveScaleQuestion(2,testTypeKeys.sixStyles,`I try to keep my partner a little uncertain about my commitment to them.`),
      initFiveScaleQuestion(3,testTypeKeys.sixStyles,`It is hard to say exactly where friendship ends and love begins; for me, they melt into each other.`),
      initFiveScaleQuestion(4,testTypeKeys.sixStyles,`An important consideration in choosing a partner is whether they will be a good fit for my family and future goals.`),
      initFiveScaleQuestion(5,testTypeKeys.sixStyles,`When things aren't right between my partner and me, my stomach gets upset or I can't sleep.`),
      initFiveScaleQuestion(6,testTypeKeys.sixStyles,`I would rather suffer myself than let my partner suffer.`),
      initFiveScaleQuestion(7,testTypeKeys.sixStyles,`I feel that my partner and I were meant for each other.`),
      initFiveScaleQuestion(8,testTypeKeys.sixStyles,`I have sometimes had to keep two or more lovers moving along at the same time without them knowing.`),
      initFiveScaleQuestion(9,testTypeKeys.sixStyles,`Our love is the best kind because it grew out of a long, deep friendship.`),
      initFiveScaleQuestion(10,testTypeKeys.sixStyles,`I carefully plan my life and relationship milestones before I choose a partner.`),
      initFiveScaleQuestion(11,testTypeKeys.sixStyles,`If my partner ignores me for a while, I sometimes do stupid things to get their attention back.`),
      initFiveScaleQuestion(12,testTypeKeys.sixStyles,`I am usually willing to sacrifice my own wishes to let my partner achieve theirs.`),
      initFiveScaleQuestion(13,testTypeKeys.sixStyles,`Intense physical attraction and a visual "spark" are absolutely essential to me.`),
      initFiveScaleQuestion(14,testTypeKeys.sixStyles,`I enjoy playing the "game" of romance and love keeping things lighthearted and uncommitted.`),
      initFiveScaleQuestion(15,testTypeKeys.sixStyles,`I expect to always stay friends with the person I love, even if the romance fades.`),
      initFiveScaleQuestion(16,testTypeKeys.sixStyles,`I look at a partner’s career prospects and financial stability before getting deeply attached.`),
      initFiveScaleQuestion(17,testTypeKeys.sixStyles,`Since I fell in love, I have trouble concentrating on anything else; it consumes me.`),
      initFiveScaleQuestion(18,testTypeKeys.sixStyles,`Whatever I own belongs to my partner if they need it.`),
    ]
  });

  private testQuestionList = computed(() => {
    const keys = Object.keys(this.testQuestions());
    const values = Object.values(this.testQuestions());
    const result: TestQuestionList = [];

    return result;
  });



}
