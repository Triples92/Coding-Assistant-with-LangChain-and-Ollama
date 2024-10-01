# Coding Assistant with LangChain and Ollama

Hey there! 👋

Welcome to another humble project! I'm fresh in the ML world, and I took on this project to expand my understanding on ML capabilities and use cases! The goal? Show that open-source tools can do the job just as well as proprietary ones like GitHub Copilot!

## What's this Project About?

This project is about using **LangChain** and **Ollama** to create a basic code assistance and uses predefined guidelines for the following coding languages:
- **React**
- **Python**
- **Django** 
- **Java**
- **Node**

It’s designed to help developers by providing:
- **Code editing**: It generates code based on the language chosen by the user. If the language chosen is one of the ones listed above, it will follow the guidelines provided in the codebase. This is done by using functions within the LM 
- **Language flexibility**: Whether you’re working in Python, JavaScript, or something else, it’s got your back.


## Why Did I Build This?

I started learning about machine learning and noticed a lot of tools out there were closed-source or required paid subscriptions (GitHub Copilot, anyone?). I wanted to show how we can create similar tools with open-source libraries like **LangChain** and **Ollama**. Plus, I love a good challenge!

## Features 🚀

- **Open-source**: Powered by open-source frameworks like LangChain, Ollama, and LangChain Core.
- **Customizability**: You can tweak it or extend it by adding more functions! 
- **Easy setup**: No complex installations—just a few commands, and you’re ready to go!

## How to Use It?

Getting started is super simple:

1. Clone the repo:
   ```bash
   git clone https://github.com/Triples92/Coding-Assistant-with-LangChain-and-Ollama
   ```

2. Install the required libraries (they’re listed in the notebook too!):
   ```bash
   pip install -qU langchain langchain_ollama langchain_core html2text
   ```

3. Install Ollama(MacOS):
```bash
brew install ollama
```
4. Run Ollama and install preferred LLMs(not all Ollama LLMs accept function tools so just keep that in mind!):
```bash
ollama serve
ollama pull llama3.1
```

4. Run the notebook and start experimenting with the code assistant. You'll find the commands to install the necessary libraries and import them in the notebook.

4. Play around with it! Modify the code, experiment with different models, and watch the assistant do its thing.

## Tools and Libraries Used

- **LangChain**: A framework for building applications powered by language models.
- **Ollama**: A model from the open-source community that helps in code completion and suggestions.
- **LangChain Core**: The backbone of LangChain for integrating different components.
- **html2text**: A simple library for converting HTML into readable text.

## What's Next?

This project is just the beginning. I plan to:
- Make it more user friendly, and try to implement it on an open source IDE.
- Enhance the accuracy and context-awareness of the code suggestions.
- Make it easier for others to contribute and customize the assistant.

## Want to Contribute?

Feel free to fork the repo and submit a pull request. Whether it’s adding a feature or fixing a bug, all contributions are welcome!
