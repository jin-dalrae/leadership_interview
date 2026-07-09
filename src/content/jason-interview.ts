export type Speaker = 'Jason' | 'Interviewer'

export interface Turn {
  speaker: Speaker
  text: string
}

export interface Act {
  id: string
  label: string
  title: string
  turns: Turn[]
}

export const INTERVIEW_META = {
  subject: 'Jason Gouliard',
  interviewers: ['Josh Yule', 'Rae Jin'],
  date: 'June 18, 2026',
}

export const ACTS: Act[] = [
  {
    id: 'warm-up',
    label: 'Warm up',
    title: 'Diagrams, paint, and maps',
    turns: [
      {
        speaker: 'Interviewer',
        text: 'So you are basically an artist, but you are working as a designer.',
      },
      {
        speaker: 'Jason',
        text: 'Yeah, well, I had to pay the bills somehow. When I went to college, I had few options for degrees. You could choose between graphic design, industrial design, or fine arts. But it wasn\'t UX design at all. Like you really didn\'t have much to choose from so I chose fine arts.',
      },
    ],
  },
  {
    id: 'art-school',
    label: 'Art school',
    title: 'Learning to talk about subjective things',
    turns: [
      {
        speaker: 'Interviewer',
        text: 'And I think the thing about going to art school that I really enjoyed was that it teaches you how to talk about subjective things.',
      },
      {
        speaker: 'Jason',
        text: 'In a corporate environment, you have to defend subjective decision making all the time, everyday, and art school teaches you how to do that really well.',
      },
    ],
  },
  {
    id: 'web-era',
    label: 'Web & code',
    title: 'Visual Basic games to putting up your own pages',
    turns: [
      {
        speaker: 'Jason',
        text: 'After college I did freelance web design and web development, because back then if you wanted to be a web designer, you had to build it.',
      },
      {
        speaker: 'Interviewer',
        text: 'So when was the time you started building those webpages?',
      },
      {
        speaker: 'Jason',
        text: 'I was really interested in technology, computers. Computer games early was the first thing. I used to write my own Visual Basic games on a very old Apple Macintosh that my parents got for free from a bank. I\'ve been interested in computers for a really long time. I was interested in design, and I just felt like I wanted a job that was creative and had something to do with computers from a very early age.',
      },
      {
        speaker: 'Jason',
        text: 'I started as a freelance designer, building out my portfolio and eventually landed an in-house design job at an engineering company in Austin called National Instruments, and then I worked at a couple advertising agencies. And then eventually I landed at a small startup where I was an individual contributor. And then I became a manager pretty soon after I worked at the startup because they needed one.',
      },
      {
        speaker: 'Interviewer',
        text: 'So is that the time when you got into the startup and became a manager? Or was this the time you started as a UX designer?',
      },
      {
        speaker: 'Jason',
        text: 'I was a UX designer before that too. So I was doing UX design for',
      },
    ],
  },
  {
    id: 'career',
    label: 'Career journey',
    title: 'Austin, agencies, Boston, Microsoft',
    turns: [
      {
        speaker: 'Jason',
        text: 'At Microsoft I led their e-commerce team. When I started, there were basically 9 different teams doing e-commerce at Microsoft. My team was formed to consolidate all those into a single team that was building a single e-commerce experience — a universal store. That was my first real big horizontal job across an entire company.',
      },
      {
        speaker: 'Jason',
        text: 'I had to negotiate a ton and actively, manage stakeholders in a highly ambiguous environment, working with teams that felt threatened, when they realized the work their team was responsible for was going to go away. It was a highly political role.',
      },
    ],
  },
  {
    id: 'big-tech',
    label: 'Big tech',
    title: 'Google, Meta, Square',
    turns: [
      {
        speaker: 'Jason',
        text: 'Some roles and projects have a shelf life, and after 5 years at Microsoft, mine was coming to end. It was at that point I landed a job at Google and I was leading the shopping ads team doing UX on web search, image search, Gmail, YouTube, and Maps. My team was responsible for 150 pixels of UI on the web search page. And it generated $22 billion worth of revenue.',
      },
      {
        speaker: 'Jason',
        text: 'It\'s interesting when you work at a big tech company like Google. You learn how dynamic the UI on the search results page is. From the outside, the design of a digital product can seem static - even if you use it everyday but once you get close to the product you learn about all of these incremental tweaks that are always being tested on, spacing between pixels, font sizes, colors, etc. We had to negotiate with the organic team who owneds the design system for any changes, and it made it complicated because they cared about different metrics. They weren\'t incentivized the same way my team was incentivized so we didn\'t see eye to eye very often and had to jump through hoops to land design changes that we needed to hit our goals.',
      },
      {
        speaker: 'Jason',
        text: 'Then I went over to Meta, worked on their commerce team. That team was responsible for basically all of the e-commerce experiences on Instagram and Facebook — both buyer and seller side.',
      },
      {
        speaker: 'Interviewer',
        text: 'Once you started working as a manager have you been a manager the entire time?',
      },
      {
        speaker: 'Jason',
        text: 'Yes, I\'ve been a manager of individual contributors or manager of managers. At Meta it was mostly managing managers.',
      },
      {
        speaker: 'Jason',
        text: 'At Meta it was during the pandemic.',
      },
      {
        speaker: 'Jason',
        text: 'We asked people what they wanted — they said a more social shopping experience. We built it and it didn\'t perform well. People weren\'t using Instagram and Facebook Shops. It was hard to change habits. The company pivoted to the metaverse while I was there and I wasn\'t really a fan of it. I had seen a similar product launch while at Microsoft - the hololens - and that product followed a similar trajectory.',
      },
      {
        speaker: 'Jason',
        text: 'Then I moved over to Square as Head of Design for the seller experience team. It was great to get to lead content designers, researchers, and product designers in this role. It was a chaotic time because we had a CEO transition. Jack Dorsey returned as CEO during my tenure there.',
      },
      {
        speaker: 'Jason',
        text: 'That is where I witnessed how much impact the CEO actually has a huge impact on the culture of the company. Every company is like its own universe with its own laws. You have to relearn how to do your job at every company you work at. Microsoft was very top-down, Google was very grassroots, Facebook, somewhere in the middle.',
      },
    ],
  },
  {
    id: 'leadership',
    label: 'Leadership',
    title: 'Safe space, crits, and becoming a manager',
    turns: [
      {
        speaker: 'Interviewer',
        text: 'Fostering team creativity… How do you protect your team\'s creative spirit and encourage them to take risky, innovative design leaps?',
      },
      {
        speaker: 'Jason',
        text: 'A lot of this is about creating a safe space for designers. I always make a space that is just the design team… weekly crit where we look at work in early stages, messy files, half-baked. No engineers, no product people.',
      },
      {
        speaker: 'Jason',
        text: 'We celebrate failures as learning moments. At Google, 95% of our experiments failed. We repackaged them as learnings so we could celebrate those too.',
      },
      {
        speaker: 'Interviewer',
        text: 'You became a manager maybe a little bit early in your career. What made you feel confident being a manager?',
      },
      {
        speaker: 'Jason',
        text: 'It was something I wanted to do. I knew I could have a bigger impact as a design leader. I had to change the way I work — from craft to working through other people.',
      },
      {
        speaker: 'Jason',
        text: 'Design maturity in an organization matters. Every company is in a different stage.',
      },
    ],
  },
  {
    id: 'leaders',
    label: 'Partners & impact',
    title: 'Great leaders, worst leaders, favorite chapter',
    turns: [
      {
        speaker: 'Interviewer',
        text: 'Which stage was your favorite?',
      },
      {
        speaker: 'Jason',
        text: 'What I enjoy is producing work that I\'m proud of that made an impact. I think I had the most impact at Google. More people do the things that my team designed there. It felt very satisfying.',
      },
      {
        speaker: 'Interviewer',
        text: 'You\'ve been working together with a lot of different leaders. Can you give examples of great leaders and not so good leaders?',
      },
      {
        speaker: 'Jason',
        text: 'It\'s about trust you develop with your partner. It\'s great when you have a product partner who has a positive view of the design discipline.',
      },
      {
        speaker: 'Jason',
        text: 'I\'ve worked with product and engineering partners that didn\'t have a great POV on the role of design. They considered design as \\u201cmaking something pretty\\u201d at the end of the process. It takes a lot of time and effort to change that mindset.',
      },
      {
        speaker: 'Jason',
        text: 'If I was interviewing and got a bad vibe from a potential product partner, I just wouldn\'t work there. I\'m interviewing them as much as they\'re interviewing me.',
      },
      {
        speaker: 'Jason',
        text: 'Designers are proving their value every single day. Especially in engineer/founder-led companies. Now with AI it\'s even more so.',
      },
      {
        speaker: 'Jason',
        text: 'Curiosity is the most important thing a designer can have, and in the age of AI it\'s about to be the thing that separates a designer from the tools. AI can produce competent work instantly, but it does it by averaging everything that already exists. It\'s trained in the past, so it pulls toward the middle of what\'s already been done. It can generate a thousand options in a second. What it can\'t do is want anything. It isn\'t curious, and it has no feel for whether something is fresh, because it has no sense of what fresh is right now. That\'s the human part, and it runs on taste. Taste is just the ability to look at a thousand options and know which one is right now. And you aren\'t born with it, you build it, by being curious: paying attention, taking a lot in, noticing what moves you and asking why. Taste is curiosity practiced for years. For me that\'s literal. I paint, and I go to museums and gallery openings constantly, go to bookstores not to look at design but to keep feeding my eye. Freshness never comes from copying other designs. It comes from everywhere else: art, music, fashion, music, whatever is happening now that nobody has named yet. You have to be out there, in the culture, to feel where it\'s going. So in the age of AI the job inverts. When everyone has the same tools trained on the same data, the work stops being the differentiator and the input becomes the differentiator: what you point the tools at, the references you carry, the things you\'ve seen that no one else has.',
      },
      {
        speaker: 'Jason',
        text: 'AI can be the hands. Curiosity, and the taste it feeds, is the direction. And the direction was always the part worth anything.',
      },
    ],
  },
]

export const CLOSING_SUMMARY = {
  id: 'summary',
  label: 'Summary',
  title: 'What we took away',
  paragraphs: [
    'Jason\u2019s path doesn\u2019t fit a neat UX origin story \u2014 and that\u2019s the point. He chose fine arts when UX wasn\u2019t on the menu, learned to defend subjective calls in studio crits, and carried that same muscle into rooms where nine e-commerce teams had to become one.',
    'What stayed with us is how consistently he names the work behind the work: weekly design-only crits, failures repackaged as learnings, product partners interviewed as carefully as designers. The 150 pixels at Google. The politics at Microsoft. The habits that didn\u2019t change at Meta. None of it sounded like war stories \u2014 it sounded like someone who still cares how teams see.',
    'He\u2019s still making diagrams by hand. Still paying bills with design leadership. Still the friend whose painting hangs in Josh\u2019s house. We\u2019re grateful he gave us the afternoon.',
  ],
  signoff: '\u2014 Josh Yule & Rae Jin',
}
