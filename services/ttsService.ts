export const ttsService = {
  speak: (text: string, lang: string = 'nl-NL') => {
    // Stop eventuele lopende spraak
    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = lang;
    utterance.rate = 0.9; // Iets langzamer voor beter begrip
    
    window.speechSynthesis.speak(utterance);
  },
  stop: () => {
    window.speechSynthesis.cancel();
  }
};
