function speak() {
  const message = new SpeechSynthesisUtterance("Hello, I am Charlie, your AI assistant. How can I help you?");
  message.lang = "en-US";
  window.speechSynthesis.speak(message);
}
