'use strict';

/** Text-to-speech using the Web Speech API or ARIA
 * (ARIA-based speech will only be heard if using a
 * screen reader, such as NVDA or VoiceOver)
 */
class TTS {
	
	/** Simple wrapper class for WebTTS, or additionally to update ARIA DOMNode to automatically read with screen reading technology.
	 * @param {boolean} webTTS - whether to use WebTTS or ARIA
	 */
	constructor(webTTS = false) {
		
		// Set up Web Speech API stuff
		this.synth = window.speechSynthesis;
		this.webTTS = webTTS;

		// Set up ARIA stuff
		this.aria = document.createElement('div');
		this.aria.id = "speech";
		this.aria.style = "position: absolute; left: 0px; top: -400px";
		this.aria.setAttribute("aria-live", "assertive");
		document.body.appendChild(this.aria);
	}

	/** Speaks a string.
	 * @param {string} text - The text to be spoken.
	 */
	speak(text) {
		if (this.webTTS) {
			const utterThis = new SpeechSynthesisUtterance(text);
			if (typeof this.synth.stop !== 'undefined') {
this.synth.stop();
			}
			this.synth.speak(utterThis);
		} else {
			this.aria.innerHTML = '';
			const para = document.createElement('p');
			para.appendChild(document.createTextNode(text));
			this.aria.appendChild(para);
		}
	}
	// End speak()
	
	/** Sets webTTS to true or false.
	 * @param {boolean} tts - True to use WebTTS, false to use ARIA
	 */
	setWebTTS(tts) {
		this.webTTS = tts;
	}
} // End class

export default TTS;
