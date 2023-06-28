class AlarmClock {
    constructor() {
        this.alarmCollection = [];
        this.intervalId = null;
    };

    addClock(time, callback) {
        if(!time || !callback) {
            throw new Error('Отсутствуют обязательные аргументы');
        }

        if(this.alarmCollection.find(time => time === time)) {
            console.warn('Уже присутствует звонок на это же время')
        }
        
        this.alarmCollection.push({callback, time, canCall: true})
    }

    removeClock(time) {
        this.alarmCollection = this.alarmCollection.filter(
            timeRemove => timeRemove.time !== time
        );
    }

    getCurrentFormattedTime() {
        const currentDate = new Date();
        const hours = currentDate.getHours();
        const minutes = currentDate.getMinutes();

        // Форматирование компонентов времени в нужный стиль
        const formattedHours = hours.toString().padStart(2, '0');
        const formattedMinutes = minutes.toString().padStart(2, '0');

        //вывод текущего времени в формате HH:MM
        const time = `${formattedHours}:${formattedMinutes}`;
        return time;
    }

    start() {
        if (this.intervalId !== null) {
          return;
        }
    
        this.intervalId = setInterval(() => {
          const currentTime = this.getCurrentFormattedTime();
      
          this.alarmCollection.forEach((item) => {
            if (item.time === currentTime && item.canCall) {
              item.canCall = false;
              item.callback();
            }
          });
        }, 1000);
    }

    stop() {
        clearInterval();
         this.intervalId = null;
    }

    resetAllCalls() { 
        this.alarmCollection.forEach((item) => item.canCall = true);
    }

    clearAlarms() {
        this.stop();
        this.alarmCollection.length = 0;
    }

}
