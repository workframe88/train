class Logger{
    protected logBuffer:string[] = []

    appendLog(msg:string):void{
        this.logBuffer.push(msg)
    }

    flush(){
        for(const msg of this.logBuffer){
            console.log(msg)
        }
        this.logBuffer = []
    }

}

const logger = new Logger()
logger.appendLog('Hello World')
logger.flush()

class TimedLogger extends Logger{
    appendLog(msg: string): void {
        this.logBuffer.push(`${new Date().toISOString()} : ${msg}`)
    }

    logColor(msg:string):void{
        console.log('\x1b[36m%s\x1b[0m',msg)
    }
}

const timedLogger = new TimedLogger()
timedLogger.appendLog('Hello World')
timedLogger.appendLog('Nice to meet you')
timedLogger.flush()
timedLogger.logColor('Colorful log')