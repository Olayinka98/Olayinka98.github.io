const currentDayOfTheWeekElement = document.querySelector('[data-testid="currentDayOfTheWeek"]');

if (currentDayOfTheWeekElement) {
  const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const currentDayIndex = new Date().getDay();
  const currentDay = daysOfWeek[currentDayIndex];

  currentDayOfTheWeekElement.textContent = `Current Day: ${currentDay}`;
}

const currentUTCTimeElement = document.querySelector('[data-testid="currentUTCTime"]');

function updateUTCTime() {
  const currentUTCTime = new Date().getTime();
  currentUTCTimeElement.textContent = `UTC Time: ${currentUTCTime} milliseconds`;
}

setInterval(updateUTCTime, 1000);
