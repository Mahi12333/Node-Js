//1)Creating a Date Object:-You can create a new Date object to represent a specific date and time.
const currentDate = new Date(); // Represents the current date and time
const specificDate = new Date("2023-11-04T12:00:00"); // Represents a specific date and time

//2)Gettimg Date components:-You can extract various components of a date, such as the year, month, day, and time.
const year = currentDate.getFullYear();
const month = currentDate.getMonth(); // Note: Months are 0-based (0 = January, 11 = December)
const day = currentDate.getDate();
const hours = currentDate.getHours();
const minutes = currentDate.getMinutes();
const seconds = currentDate.getSeconds();

//3)Formatting Dates:-

const formattedDate = currentDate.toDateString();
const formattedTime = currentDate.toTimeString();

//4)Performing Date Arithmetic:-
const tomorrow = new Date();
tomorrow.setDate(currentDate.getDate() + 1); // Add one day

const nextWeek = new Date();
nextWeek.setDate(currentDate.getDate() + 7); // Add one week

