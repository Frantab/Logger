import Log from '../Log/Log';

/**
 * This class keeps all log for instance.
 */
class Logger {
	/**
	 * Constructor of Logger.
	 * @param {String} name - Name of logger.
	 */
	constructor(name) {
		/** @type {String} */
		this.name = name;
		/** @type {Array<Log>} */
		this.logs = [];
	}

	/**
	 * This method create log.
	 * @param {String} type - Type of the log.
	 * @param {String} message - Message of the log.
	 * @param {*} data data - Data of the log.
	 * @return {Log}
	 */
	log(type, message, data) {
		const log = new Log(type, message, data);

		this.logs.push(log);
		return log;
	}

	/**
	 * This method find all logs with specific type.
	 * @param {String} type - Type of log.
	 * @return {Array<Log>}
	 */
	findLogs(type) {
		return this.logs.filter(log => log.type === type);
	}
}

export default Logger;
