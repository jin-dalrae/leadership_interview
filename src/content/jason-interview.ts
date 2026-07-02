export type Speaker = 'Jason' | 'Josh' | 'Rae'

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
        speaker: 'Jason',
        text: 'So in college, I needed a lot of people who did a lot of drawings — diagrams of books. Oh my God, they’re on my website. If you go to the diagrams section, you can see all of them.',
      },
      {
        speaker: 'Josh',
        text: 'You mean like you were painting, but it was diagrams?',
      },
      {
        speaker: 'Jason',
        text: 'Yeah, they’re diagrams. Yeah, because I’m a big fan of infographics, that sort of thing. But with your hands, not with a computer. This is all hand-drawn.',
      },
      {
        speaker: 'Rae',
        text: 'Wow. Awesome. I’m a big fan of maps.',
      },
      {
        speaker: 'Jason',
        text: 'Oh, I’ll show you. Do you have the Instagram account? They’re called Diagrams. Different diagrams of books, different books. And drips of paint. That’s awesome.',
      },
      {
        speaker: 'Josh',
        text: 'So yeah, these are what I thought. I told you, I have one of his paintings at my house.',
      },
      {
        speaker: 'Rae',
        text: 'He does. Oh really?',
      },
      {
        speaker: 'Josh',
        text: 'Yeah. It’s like… Whoa. You’re that good friend?',
      },
      {
        speaker: 'Jason',
        text: 'I guess so, yeah. I mean, I had to pay a million dollars. No, no, no.',
      },
      {
        speaker: 'Rae',
        text: 'Oh, I see it. But yeah, so this is a diagram of a book with dripped paint on top, and these with napkins. This giant one — awesome installation. This is like 9 feet by 16 feet, just directly installed on the wall.',
      },
      {
        speaker: 'Josh',
        text: 'So you are basically an artist, but you are working as a designer.',
      },
      {
        speaker: 'Jason',
        text: 'Yeah, well, I had to pay the bills somewhere. So back in the day, designers or artists. Yeah. Really? Yeah, now. Did you know that? Now they’re not. We went to college, we had options for degrees. You could be like graphic design, industrial design, or fine arts. But it wasn’t UX design at all. Like you really didn’t have much juice from him. And so I chose fine arts.',
      },
    ],
  },
  {
    id: 'art-school',
    label: 'Art school',
    title: 'Learning to talk about subjective things',
    turns: [
      {
        speaker: 'Josh',
        text: 'Awesome. And I think the thing about going to art school that I really enjoyed was it teaches you how to talk about subjective things. Because a lot of the time… They show photos. I have been inside there. Is this for jewelry? Yeah. Sculpture. Metal working, yeah.',
      },
      {
        speaker: 'Jason',
        text: 'So yeah, I think you learn about how to speak about subjective things, which is all design. In a corporate environment, you have to defend subjective decision making all the time, and art school teaches you how to do that really well. Definitely.',
      },
      {
        speaker: 'Rae',
        text: 'But like those… oh wow. Is there remote around here? That was not on American for the whole year. I would look at this thing a lot. But now I have that. But you kind of, that’s kind of funny, yeah, and actually modern at the same time.',
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
        text: 'So in our school I did freelance web design and web development, because back then if you wanted to be a web designer, you had to also put up the web pages. Definitely. I did all that stuff. Awesome.',
      },
      {
        speaker: 'Josh',
        text: 'So when was the time you started building those webpages?',
      },
      {
        speaker: 'Jason',
        text: 'I was really interested in technology, computers. Computer games early was the first thing. And I used to write my own Visual Basic games on a very old Apple Macintosh that my parents got. So I’ve been interested in computers for a really long time. I was interested in design, and I just felt like I wanted a job that was creative and had something to do with computers.',
      },
      {
        speaker: 'Jason',
        text: 'When I went to school I did drawing and painting, ‘cause like I said, I didn’t have a lot of options. And I graduated from school knowing how to pay bills and get a job, and so I did freelance web design and web development for a few years. That’s really tough being a freelancer at that time. Then I got an in-house design job at an engineering company in Austin, and then I worked at a couple different advertising agencies. And then eventually I got that startup in Austin. And I was still an individual contributor. And then I became a manager pretty soon after I worked at the startup because they needed one.',
      },
      {
        speaker: 'Jason',
        text: 'At the startup we were designing software websites and software for… It’s kind of like Dropbox. And it was a company that owned a Usenet service. Using that application. Cool.',
      },
      {
        speaker: 'Rae',
        text: 'This is the 3D printing lab. Oh, they’re open. I didn’t know that then.',
      },
      {
        speaker: 'Josh',
        text: 'What are you working on right now?',
      },
      {
        speaker: 'Rae',
        text: 'Well, I’m gonna build something for another class. For my social lab. I’m gonna build something like a 12 box for elderly people in case they fall or something. They can do a safe word like “rubber ducky” and it’ll… I’ll show it to you Wednesday.',
      },
      {
        speaker: 'Josh',
        text: 'This is cool.',
      },
      {
        speaker: 'Rae',
        text: 'So is that the time when you got into the startup and became a manager? It’s the time you maybe started being a UX designer or something.',
      },
      {
        speaker: 'Jason',
        text: 'I was a UX designer before that too. So I was doing UX design for applications and websites. It didn’t take long for me to start doing that.',
      },
    ],
  },
  {
    id: 'career',
    label: 'Career journey',
    title: 'Austin, agencies, Boston, Microsoft',
    turns: [
      {
        speaker: 'Josh',
        text: 'So maybe you could finish sharing about your career journey first.',
      },
      {
        speaker: 'Jason',
        text: 'Sure. Yeah. Okay, cool.',
      },
      {
        speaker: 'Jason',
        text: 'So yeah, I was doing freelance web design and web development. I got a corporate job. I worked in-house design at an engineering company, worked at some advertising agencies, was leading kind of the interactive design team. And this is just because I was interested in computers from when I was younger. It was like my entire life. Technology was really something that I was super interested in.',
      },
      {
        speaker: 'Jason',
        text: 'I remember when CSS became a thing. It was a huge deal because before that, if we were building a webpage, we had to do everything inline. And when CSS came around, it was like, oh my god, you can do so much more with it. And then divs were introduced at a later point in HTML and CSS, and it opened up new ways for us to design things.',
      },
      {
        speaker: 'Jason',
        text: 'Then I got a job at a startup in Boston, and we started doing software. So I was working on software for Windows and Mac. And then at that point I was recruited by Microsoft to go up and work there for 5 years. I’d become a manager already at this point.',
      },
      {
        speaker: 'Jason',
        text: 'At Microsoft I led their e-commerce team. When I started, there were basically 9 different teams doing e-commerce at Microsoft. My team was formed to consolidate all those into a single team that was building a single e-commerce experience — a universal store. That was my first real big horizontal job across an entire company.',
      },
      {
        speaker: 'Jason',
        text: 'I had to negotiate, manage emotions, because these teams realized their team was going to go away. It was a very political situation.',
      },
      {
        speaker: 'Jason',
        text: 'I was there during the Steve Ballmer transition to Satya Nadella. Ballmer ran the company like a sales team — stack ranking. When Satya took over, he really changed the culture of the company in a really good way.',
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
        text: 'Then I got a job at Google and I was leading the shopping team doing UX on web search, image search, Gmail, YouTube, and Maps. My team was responsible for 150 pixels of UI on the web search page. And it generated $22 billion worth of revenue.',
      },
      {
        speaker: 'Jason',
        text: 'It’s interesting when you work at a big tech company. You learn how dynamic the UI on the search results page is. We had to negotiate with the organic team who owns the design system for any changes, because they cared about different metrics.',
      },
      {
        speaker: 'Jason',
        text: 'Then I went over to Meta, worked on their commerce team. That team was responsible for basically all of the e-commerce experiences on Instagram and Facebook — both buyer and seller side. That was my largest team. I managed over 55 people.',
      },
      {
        speaker: 'Rae',
        text: 'Once you started working as a manager in your startup, you’ve been a manager the whole time?',
      },
      {
        speaker: 'Jason',
        text: 'Yes, yeah. I’ve been a manager of individual contributors or manager of managers. At Meta it was mostly managing managers.',
      },
      {
        speaker: 'Jason',
        text: 'At Meta it was during the pandemic. There were a lot of top-down mandates. We had weekly reviews with Mark on what we were planning to ship. It was super stressful.',
      },
      {
        speaker: 'Jason',
        text: 'We asked people what they wanted — they said a more social shopping experience. We built it and it didn’t perform well. People weren’t using Instagram and Facebook Shops. There were trust issues with Facebook. It was hard to change habits.',
      },
      {
        speaker: 'Jason',
        text: 'Then Square — seller experience team. Weird time because we had a CEO transition. Jack Dorsey came back during my tenure.',
      },
      {
        speaker: 'Jason',
        text: 'The CEO actually has a huge impact on the culture of the company. Every company is like its own universe with its own laws. You have to relearn these things. Microsoft very top-down, Google very grassroots, Facebook different.',
      },
    ],
  },
  {
    id: 'leadership',
    label: 'Leadership',
    title: 'Safe space, crits, and becoming a manager',
    turns: [
      {
        speaker: 'Josh',
        text: 'Fostering team creativity… How do you protect your team’s creative spirit and encourage them to take risky, innovative design leaps?',
      },
      {
        speaker: 'Jason',
        text: 'A lot of this is about creating a safe space for designers. I always make a space that is just the design team… weekly crit where we look at work in early stages, messy files, half-baked. No engineers, no product people.',
      },
      {
        speaker: 'Jason',
        text: 'We celebrate failures as learning moments. At Google, 95% of experiments failed. We repackaged them as learnings so we could celebrate those too.',
      },
      {
        speaker: 'Jason',
        text: 'When we had to go from 1-2% growth to 10%, we had to take big risks.',
      },
      {
        speaker: 'Rae',
        text: 'You became a manager maybe a little bit early in your career. What made you feel confident being a manager?',
      },
      {
        speaker: 'Jason',
        text: 'It was something I wanted to do. I knew I could have a bigger impact as a design leader. I had to change the way I work — from craft to working through other people.',
      },
      {
        speaker: 'Jason',
        text: 'Early on it was more like a chef directing hands. In more mature organizations, it’s about nurturing individual designers to become better.',
      },
      {
        speaker: 'Jason',
        text: 'Design maturity in an organization matters. Every company’s in a different stage.',
      },
    ],
  },
  {
    id: 'leaders',
    label: 'Partners & impact',
    title: 'Great leaders, worst leaders, favorite chapter',
    turns: [
      {
        speaker: 'Rae',
        text: 'Which stage was your favorite?',
      },
      {
        speaker: 'Jason',
        text: 'What I enjoy is producing work that I’m proud of that made an impact. I think I had the most impact at Google. Most human beings saw the things that my team did. It felt very satisfying.',
      },
      {
        speaker: 'Josh',
        text: 'You’ve been working together with a lot of different leaders. Can you give examples of great leader and worst leader?',
      },
      {
        speaker: 'Jason',
        text: 'It’s about trust you develop with your partner. Great when you have a product partner who has a positive view of the design team.',
      },
      {
        speaker: 'Jason',
        text: 'I’ve worked with people who see designers as just making things pretty or executing orders. That’s really frustrating. It takes a lot of time and effort to change that mindset.',
      },
      {
        speaker: 'Jason',
        text: 'If I was interviewing and got a bad vibe from my product partner, I just wouldn’t work there. I’m interviewing them as much as they’re interviewing me.',
      },
      {
        speaker: 'Jason',
        text: 'Designers are proving their value every single day. Especially in engineer/founder-led companies. Now with AI it’s even more so.',
      },
      {
        speaker: 'Jason',
        text: 'At a certain point you have to be an expert in your area and start becoming experts in other areas.',
      },
      {
        speaker: 'Jason',
        text: 'A lot of my time was spent helping designers understand that the design system is in service of what we need, not the other way around.',
      },
      {
        speaker: 'Jason',
        text: 'In large companies it was all very hierarchical. 20% of my job was design. 80% was socializing and political stuff.',
      },
    ],
  },
]

export const CLOSING_SUMMARY = {
  id: 'summary',
  label: 'Summary',
  title: 'What we took away',
  paragraphs: [
    'Jason’s path doesn’t fit a neat UX origin story — and that’s the point. He chose fine arts when UX wasn’t on the menu, learned to defend subjective calls in studio crits, and carried that same muscle into rooms where nine e-commerce teams had to become one.',
    'What stayed with us is how consistently he names the work behind the work: weekly design-only crits, failures repackaged as learnings, product partners interviewed as carefully as designers. The 150 pixels at Google. The politics at Microsoft. The habits that didn’t change at Meta. None of it sounded like war stories — it sounded like someone who still cares how teams see.',
    'He’s still making diagrams by hand. Still paying bills with design leadership. Still the friend whose painting hangs in Josh’s house. We’re grateful he gave us the afternoon.',
  ],
  signoff: '— Josh Yule & Rae Jin',
}