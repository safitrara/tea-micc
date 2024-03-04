window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

    if (window.SpeechRecognition) {
      const recognition = new SpeechRecognition();
      recognition.lang = 'en-US';

      recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        document.getElementById('result').textContent = `You said: ${transcript}`;
      };

      recognition.onend = () => {
        recognition.start();
      };

      recognition.start();
    } else {
      document.getElementById('result').textContent = 'Speech recognition is not supported in your browser.';
    }