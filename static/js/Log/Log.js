/**
 * This class keeps data of the log.
 */
class Log {
	/**
	 * Constructor of the Log.
	 * @param {String} type - Type of the log.
	 * @param {String} message - Message of the log.
	 * @param {*} data data - Data of the log.
	 */
	constructor(type, message, data) {
		/** @type {String} */
		this.type = type;
		/** @type {String} */
		this.message = message;
		/** @type {*} */
		this.data = data;
	}

	/**
	 * This method dispatch log to console.
	 * @param {String} type - Type of console ('log', 'info', 'error', ...).
	 */
	toConsole(type) {
		console[type](this.toString());
	}

	/**
	 * This method dispatch log as custom event.
	 * @param {String} type - Type of event.
	 */
	toEvent(type) {
		const event = new CustomEvent(type, {
			detail: {
				type: this.type,
				message: this.message,
				data: this.data
			}
		});

		window.dispatchEvent(event);
	}

	/**
	 * This method returns string which contains log data.
	 * @return {String}
	 */
	toString() {
		return `Log ${this.type}:\n${this.message}\n---\n${this.data}`;
	}
}

export default Log;
