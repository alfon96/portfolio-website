// Add custom JavaScript here

const runTypingEffect = () => {
  const text = "I am Alfonso Falcone";
  const typingElement = document.getElementById("typing-text");

  const typingDelay = 90;

  typeText(text, typingElement, typingDelay);
};

const typeText = (text, htmlElement, delay) => {
  for (let i = 0; i < text.length; i++) {
    setTimeout(() => {
      htmlElement.textContent += text.charAt(i);
    }, delay * i);
  }
};

document.addEventListener("DOMContentLoaded", runTypingEffect);
