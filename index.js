'use strict';

/** Simple wrapper class for WebTTS, or additionally to update ARIA DOMNode to automatically read with screen reading technology.
	* @param {boolean} webTTS - whether to use WebTTS or ARIA

*/

class TTS {
	constructor(webTTS = false) {
		this.synth = window.speechSynthesis;
		this.webTTS = webTTS;
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
			document.getElementById('speech').innerHTML = '';
			const para = document.createElement('p');
			para.appendChild(document.createTextNode(text));
			document.getElementById('speech').appendChild(para);
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
