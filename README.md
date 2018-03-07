# AGK-TTS

## Quick and dirty wrapper around WebTTS, as well as allowing screen readers to talk through ARIA

In audio games, the quickest way to present information is through speech. Usually, people playing audio games have a screen reader running which automatically detects changes to the ARIa element. If this is not the case, you can use WebTTS which uses whatever text to speech voice your browser has access to.

## Installation

Using NPM:
npm install agk-tts

## Usage

import TTS from "agk-tts";

// Argument in constructor when true tells the library to use WebTTS, when false uses ARIA.

const speech = new TTS(true);

// Speak "Meow! I'm a cat!"
speech.speak("Meow! I'm a cat!");
// decide not to use WebTTS anymore
speech.setWebTTS(false);

// Speak "Not anymore!"
speech.speak("Not anymore!");

## Contributing

Feel free to. I'd be happy if you made it better.

## License

This code is MIT licensed.
More info in LICENSE.md