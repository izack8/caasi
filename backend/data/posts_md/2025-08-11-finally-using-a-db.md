I've  put off writing this for some time, partly because I want to be able to form coherent paragraphs before jotting it down. But the more I delay, the more I forget (urGH, frustrating). So here's my feeble attempt in trying to describe my journey in integrating MongoDB into my website by stringing a couple of words together. 

# Context

Prior to what it is currently, the data for my website (experiences, projects, and also posts) were stored in JSON files (as an array of JSON objects). So something like this (without “tags”, “links”):

```json
[{
        "title": "Junior Associate/AI Engineer",
        "location" : "Singapore",
        "company": "Synechron Technologies",
        "duration": "Sep 2024 - Present",
        "skills": ["Python", "Azure", "Streamlit"],
        "tags": ["AI", "Web Development", "Chatbot", "PDF Processing"],
        "description": "Worked on several projects for multiple banks residing in Singapore. Projects are usually <b>AI-oriented</b>, and developed using <b>Azure services</b> such as <b>Azure OpenAI and Azure Computer Vision</b>. One such project involved training a invoice processing model using Azure Form Recognizer, to extract key information from invoices, such as invoice number, date, and amount. Another project involved developing a Streamlit Chatbot that allows employees to <b>query their company's knowledge base</b>, and retrieve relevant documents and information using <b>Retrieval Augmented Generation (RAG)</b>.",
        "link": "https://synechron.com/"
    },
    {
        "title": "Data Science/IOT-Engineer Intern",
        "location" : "Singapore",
        "company": "Groundup.AI",
        "duration": "Jan 2024 - Jul 2024",
        "skills": ["Python", "Torch", "IOT-Development"],
        "tags": ["AI", "IOT", "Machine Learning", "Predictive Maintenance"],
        "description": "<b>Developed, validated, containerised and deployed</b> predictive maintenance Machine Learning models with audio files converted into a spectrogram as training data, on <b>edge computing devices</b> like <b>Google's Coral Dev Board and Raspberry Pi</b>. The models were trained to <b>detect anomalies</b> in the audio data, and were able to predict when a machine was malfunctioning, allowing for proactive and predictive maintenance.",
        "link": "https://groundup.ai/"
    },]
```

At the beginning of the creation of this website, I knew **very little** about hosting a database, and how to retrieve it in a conventional manner. The way that makes sense the **most** for me (at that time), was just using a JSON file to store the data. (If you go back to the first iteration of my website, you are able to see my thought processes).

Well, it worked out fine… Initially, at least. I didn’t think about scaling etc. All I did was create a JavaScript function to fetch these JSON objects from the .json file. Voila! I feel so smart for doing that. LOL. *I don’t need a database man!*

# Challenges

And like clockwork, like tale as old as time, like how all things naturally converge to their balance point, I faced the damn issue of s c a l i n g. It begin with the “Projects” section at first. I’ve been developing and tinkering with new projects I wanted to show the world. Each new project means the tedious task of adding a new project, every time. The UI/UX of the VSCode IDE, whilst editing my projects .json file. There and then, I had my first “boy, is this tedious”.

The straw that broke the camel’s back, was discovering that whenever I had a typo, or something I forgot to add, I’d have to edit the original file, push the code, rebuild, and finally deploy. Geez. Surely, if I used a database, all I have to do is edit it in my database, and have an API fetch it. Which is what I did!

# MongoDB

Since my data was already in JSON format, I decided that it was best to migrate my data over to a platform that handles . MongoDB came to mind, partly because I have been using it at work, and thought that the migration wouldn’t be as challenging, as I was familiar with the basics. Thankfully, this was the case, because now all I had to do was learn how to get MongoDB to host my data, allow it to be sent over the web.

Furthermore, I’ve always wanted to learn how to use NoSQL databases,

# Files

OK it's 12:17AM now, I'm tired, I need to sleep. I will come back to this later. sljfsljkdfaslj
