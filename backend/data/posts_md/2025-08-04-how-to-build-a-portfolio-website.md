<aside>
💡
*Headsup! If you’re looking for code/blueprints to get you started, you can checkout my GitHub page! This post serves more as a dump to share my thought processes, and what I’ve learnt.*

</aside>

Hi friendos! It’s ya boy, Isaac, here to serve you hot, fresh, dumpster fire, which is what I would call my thought processes (it’s so hard to express one thought when I have like a gajillion of them whizzing around). 

Look, I wouldn’t call myself an “expert” at building websites or anything. In fact, I think in this day & age, I might be the furthest person from being an expert at building websites. However, building this thingamajig of a website **did** bring up a **heck ton** of challenges, which some of them took a few days to learn, understand, and lastly fix / build. I would want to document and share what I’ve learnt, so that in an event where Google’s SEO picks up my website, shows it to you, and you’re (hopefully) feeling inspired to do something of your own, may this post act as a guiding light for how to even get started. 

# What are you building?

*A portfolio. That’s cool! A portfolio that does what, though? Showcase your projects and skills. Got it. But Why? Cause I’m forgetful and would want to have a place where I can go to for reference to my work + I get to learn a new skill!*

This was what went through my head when the idea of building my own website was still fresh. After browsing through talented developer’s like Alvin, Brittany and Kane, I challenged myself to do the same, not only because was I seriously impressed with their work, but also because it felt like it was **fun** (and yes, fun is arguably one of the most important factor in driving you to complete a project, if building a website is not your thing, that’s **perfectly OK**).

So, my dear friend, you *want* to build a website. But **what**?

# Start with the basics

Congrats! You’ve figured out what you want to build! You got your north star! 

*Yay! Let's start using the **most** advanced tools, because I want to **keep up with the times**, and know modern code. I want to stay relevant!*

And you're absolutely valid! **But**, in my case, starting with the basics truly laid down a solid foundation for deeper learning. I start to understand **how and why** things are done a certain way. Most importantly, you understand the **frustrations** and **problems** that arises when using a basic building block, and I promise you, the more you progress, the more you understand why certain things *just makes sense*.

I really liked how senior developer, theprimeagen put it. He drew a curve of knowledge vs. time. The curve for starting high in knowledge in a short time is usually inversely proportionate to each other, where as starting at a lower point in knowledge simply makes the curve grow exponentially overtime, because you had a solid foundational knowledge to understand intricate complexities. 

One example was during my research, I was faced with having to choose between Next.js and normal React  (Mind you, I didn't even know how React worked). Everyone in the forums just seemed like they were spewing slangs and nonsensical abbreviations. SSR? SPA? **What are these???** Yet, it seemed like all developers were choosing Next.js. I **did feel** left out and clueless. *Should I just start with Next.js?*.

The more I progressed with the building of this website, the more I understood. *Ah! **S**ingle-**P**age **A**pplications, like my React app now. I only have one home page (+ a blog). I don't need **S**erver-**S**ide **R**endering, because I don't care for SEO + it will be resource intensive ($$$).*

So, no! Turns out I didn't need Next.js (but maybe in the future!).

# Just. Put. It. Out. There.

And omg, I can’t stress this enough. **JUST PUT IT OUT THERE**. Commit,  merge that branch that is full of broken links, misaligned paddings, and un-centered divs. Learn about deployment, pay for their credits, and deploy. Just. Put. It. out. You can perfect it **later**. 

Too many times, I caught myself wondering *hmm, maybe I should not put this here? What about this? No...*. Did I learn anything from it? NO. It's only through actually visualizing, using and again, frustration, where you would eventually know what works best for **you**. 

Additionally, it helped me feel a sense of **accountability** and **urgency**. *Do I really want someone to view this website in that state? Do I want to continue paying to showcase a web like that?*

(visit v1.izack.dev to see what it looked like a few months ago.)

# Realize that the wheel has already been invented

It is every beginner’s rite-of-passage, to ask the age-old question. 

*“Girl, surely there has to be a better way to do this”* 

And fortunately for us, there is! Now if you are a newbie to webdev like me, you probably would have started with HTML and CSS for web design. *Ain't it an absolute **pain** to write its' code?*

Writing HTML and CSS *was* starting to get tedious and repetitive. Not to mention, it was not very intuitive (to me). Introducing, 
[**Tailwind CSS**](https://tailwindcss.com/), a utility-first CSS framework that allows you to write your styles in a more intuitive way. HEHE. Absoute game-changer. CSS file? WhAT CSS FILE? All I need is a few lines of code in my HTML, and I can style it however I want.

Going back to my point on starting with the basics, this was exactly why this step was so important. Somebody already shares the same frustrations as you, and they have already come up with a solution to it. I am just lucky enough to be able to use it. 

Discovering this moment was pivotal, as it made me understand why people used React, or other libraries to make their lives easier. It suddenly became clear that these are not “scary” and “intimidating” tools used to confuse me. Rather, tools that brilliant people came up with to make their lives easier, and kindly shared it with the rest of the digital world. Some day, I hope to be able to do the same for others, and I believe you can too!

# Obsess over your creation
I know I keep saying that each point is important, and I would want to say that this point is the most important, but... I mean it's not really? But like still important, iykyk. Anyways, my point is, when you start obsessing over your creation, you unknowingly start exploring the nooks and crannies of your website. You discover bugs, weird behavior, things you would want to implement (which I'll be mentioning more later). This does **not** mean frustration, but an opportunity for you to **learn** from those mistakes, which is very important (omg I gotta stop saying important).

Similarly to my previous points, you gradually gravitate towards a coding pattern/design that's optimal for your usecase. You now understand why there are standard conventions. They are not hard and fast rules! They are just **easier** that way.  

For example, I realized that I do not want to keep hitting APIs, as it was getting costly (for my free tier subscription). Solution? I realized I can store the fetched data in the browser, so each refresh would not instantiate an API request -> saved cost. I also learnt that is actually the **cache**! 

# Discover some things you would like to add
As I am finishing the project, the previous playing around gave me multiple ideas of what I could add to my website. I had the idea of a **guestbook**, where anyone who visits can say hi and leave their mark. I also had this idea of doing a writing section, to capture my thought processes as coherently as possible (though I tend to lean towards being overtly casual).

So here you are reading this (wow, all the way here!??!?!), all because I wanted a section to document my process. 

As I am coding this up, I also thought of integrating a database (maybe MongoDB), as I want to be able to change my data without affecting CI/CD and rebuilding. 

# Final thoughts
Yay! Thanks for reading all the way through! Though I can tell you about a million things on how to build a website, I want to re-emphasize, that you should **want** to build this, and it should feel **fun** (for the most part). Because oh boy-, the amount of frustrations I had because I felt **stuck**.

BUT, it's important to remember that you dont just become an expert overnight! It’s through frustrations, doing it repeatedly, failing, trying again, where your brain’s neurons can activated over and over again, until it. just. makes. sense. So don't give up! Live through your frustrations, and happy coding!