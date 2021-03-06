const 
questions = 
[

//   {
//     "title": "{הקדמה}",
//     "question": "ברכות__מטרת תהליך זה הינו לעזור לך לצמצם את הפער בין המצוי לרצוי ע״י בירור וחקירה שכלית",
//     "dialogeType": "prompt",
//     "buttons": { "a": "המשך"},
//     "answer": "",
//     "css": [{"color": [ {"ברכות":"#8c94a8"}]},
//     {"font-size": [{"ברכות":"30px"}]}
//   ],
//   },
// {
//   "title": "{המציאות}",
//   "question": "בתור התחלה, האם הינך מרוצה בשלמות מהמציאות?",
//   "dialogeType": "prompt",
//   "buttons": { "a": "לא", "b": "כן" },
//   "next": { "a": "{2המציאות}", "b": "{סיימת}" },
//   "answer": "",
// }, 
//  {
//   "title": "{סיימת}",
//   "question": "ברכות!",
//   "dialogeType": "prompt",
//   "buttons": { "a": "מהתחלה"},
//   "next": { "a": "{המציאות}"},
//   "answer": "",
//   "css": [{"color":[{"ברכות!":"#ffba01"}]},
//   {"font-size": [{"ברכות":"30px"}]}],
//   "clear": true,
//   "blockDesign": true
// }, 
  {
    "title": "{2המציאות}",
    "question": "איסוף נתונים__ממה במציאות אינך מרוצה?",
    "dialogeType": "horizontal",
    "placeholder": "תאר בחופשיות",
    "answer": "",
    "css": [{"color": [ {"איסוף נתונים":"#8c94a8"}]},
    {"font-size": [{"איסוף נתונים":"30px"}]}],
    "blockDesign": false
  },
  
  {
    "title": "{רצון1}",
    "question": "מה רצונך בקשר לכך?",
    "dialogeType": "horizontal",
    "placeholder": "הרצון",
    "answer": "",
    "wishDBUpdate": true,
    "blockDesign": true
  },
  {
    "title": "{ההיפךשלרצון1}",
    "question": "מה ההיפך של רצון זה:__{רצון1}?",
    "dialogeType": "horizontal",
    "placeholder": "ההיפך של הרצון",
    "answer": "",
    "ref": ["{רצון1}"],
    "mirror": false,
    "css": [{"color":[{"{רצון1}":"#ffba01"}]}],
    "blockDesign": true
  },
  {
    "title": "{הכנהלרצון2}",
    "question": "תחילת חקירה__למה הינך רוצה {רצון1}?",
    "dialogeType": "horizontal",
    "placeholder": "סיבת הרצון",
    "buttons": { "a": "המשך", "b": "סיים" },
    "answer": "",
    "ref": ["{רצון1}"],
    "css": [{"color": [ {"תחילת חקירה":"#8c94a8"},{"{רצון1}":"#ffba01"}]},
    {"font-size": [{"תחילת חקירה":"30px"}]}],
    "blockDesign": false
  },
  {
    "title": "{רצון2}",
    "question": "אם הינך רוצה {רצון1} מהסיבה {הכנהלרצון2}__אז מה הינך בעצם רוצה?",
    "dialogeType": "horizontal",
    "placeholder": "סיבת הרצון",
    "ref": ["{הכנהלרצון2}","{רצון1}"],
    "css": [
    {"font-size": [{"⤴":"40px"}]},{"color": [ {"{הכנהלרצון2}":"#ffba01"},{"{רצון1}":"#ffba01"}]}],
    "answer": "",
    "wishDBUpdate": true,
    "blockDesign": true
  },
  {
    "title": "{הסבר1}",
    "h1":"ניתוח נתונים__וסיכום ביניים",
    "question": "",
    "dialogeType": "summaryInner",
    "answer": "",
    "ref": [ "{2המציאות}","{רצון1}","{רצון2}"],
    "css": [
      {"color": [{"המציאות":"#ffba01"}, {"רצונך":"#ffba01"}, {"{רצון2}":"#ffba01"}]},
      {"font-size": [{"ניתוח נתונים":"20px"}, {"וסיכום ביניים":"20px"}, {"{רצון2}":"20px"}]},
      {"text-align":[{"{רצון2}":"center !important;"}]},
      {"display":[{"{רצון2}":"block"}]}],
    "blockDesign": false
  },
  {
    "title": "{ההיפךשלרצון2}",
    "question": "לתפיסתך מה ההיפך של הרצון__{רצון2}?",
    "placeholder": "ההיפך של סיבת הרצון",
    "dialogeType": "horizontal",
    "answer": "",
    "ref": ["{רצון2}"],
    "css": [
      {"color": [{"{רצון2}":"#F4BD41"}]}],
    "blockDesign": false
  },
  {
    "title": "{האםהסיבהמחייבת}",
    "question": "חקירת סיבה ותוצאה__האם ועד כמה מחויב ש{רצון1},__יגרום לתוצאה של {רצון2}?",
    "dialogeType": "prompt",
    "buttons": { "a": "לא מחויב", "b": "מחויב" },
    "answer": "",
    "ref": ["{רצון2}","{רצון1}"],
    "css": [{"color": [ {"חקירת סיבה ותוצאה":"#8c94a8"},{"{רצון2}":"#ffba01"},{"{רצון1}":"#ffba01"}]},
    {"font-size": [{"חקירת סיבה ותוצאה":"30px"}]}],
    "blockDesign": false
  },
  {
    "title": "{האםהסיבהמחייבת}",
    "question": "האם יש אפשרות ש{רצון1} יגרום לתוצאה אחרת__או אפילו ל{ההיפךשלרצון2}?",
    "dialogeType": "prompt",
    "buttons": { "a": "בלתי אפשרי", "b": "אפשרי" },
    "answer": "",
    "ref": ["{ההיפךשלרצון2}","{רצון1}"],
    "css": [{"color": [ {"האם הסיבה מחייבת את התוצאה?":"#8c94a8"},{"{ההיפךשלרצון2}":"#ffba01"},{"{רצון1}":"#ffba01"}]}],
    "blockDesign": true
  },
  {
    "title": "{האםהתוצאהמתחייבת}",
    "question": "האם יש אפשרות שיש דרכים אחרות ל{רצון2} מאשר {רצון1}?",
    "dialogeType": "prompt",
    "buttons": { "a": "בלתי אפשרי", "b": "אולי יש אפשרות" },
    "answer": "",
    "ref": ["{רצון2}","{רצון1}","{רצון2}","{ההיפךשלרצון1}"],
    "css": [{"color": [    {"האם התוצאה מתחייבת מהסיבה?":"#8c94a8"}, {"{רצון2}":"#ffba01"},{"{רצון1}":"#ffba01"}]}],
    "blockDesign": true
  },
  {
    "title": "{האםהתוצאהמתחייבת}",
    "question": "האם יש אפשרות {רצון2} בדרך ההפוכה?__{רצון2} ע״י {ההיפךשלרצון1}?",
    "dialogeType": "prompt",
    "buttons": { "a": "בלתי אפשרי", "b": "אולי יש אפשרות" },
    "answer": "",
    "ref": ["{רצון2}","{רצון1}","{רצון2}","{ההיפךשלרצון1}"],
    "css": [{"color": [    {"האם התוצאה מתחייבת מהסיבה?":"#8c94a8"},{"{רצון2}":"#ffba01"},{"{רצון2}":"#ffba01"},{"{ההיפךשלרצון1}":"#ffba01"}]}],
    "blockDesign": true
  },
  {
    "title": "{האםהתוצאהמתחייבת}",
    "question": "אם לא היה לך צורך {רצון2}, האם היה לך צורך {רצון1}?",
    "dialogeType": "prompt",
    "buttons": { "a": "לא", "b": "כן מסיבה אחרת" },
    "answer": "",
    "ref": ["{רצון1}","{רצון2}"],
    "css": [{"color": [{"{רצון1}":"#ffba01"},{"{רצון2}":"#ffba01"}]}],
  },
  {
    "title": "{האםהתוצאהמתחייבת}",
    "question": "האם הינך חייב/ת {רצון2}?",
    "dialogeType": "prompt",
    "buttons": { "a": "לא", "b": "כן" },
    "answer": "",
    "ref": ["{רצון2}"],
    "css": [{"color": [ {"{רצון2}":"#ffba01"}]}],
    "swap" : {  
                "{רצון1}" : "{רצון2}",
                "{ההיפךשלרצון1}" : "{ההיפךשלרצון2}"},
    "blockDesign": true
  },
  {
    "title": "{הכנהלרצון3}",
    "question": "העמקת חקירה__למה הינך רוצה {רצון1}?",
    "dialogeType": "horizontal",
    "placeholder": "טקסט חופשי",
    "buttons": { "a": "המשך", "b": "סיים" },
    "answer": "",
    "ref": ["{רצון1}"],
    "blockDesign": false,
    "swap" : {  
      "{הכנהלרצון2}" : "{הכנהלרצון3}"},
    "css": [{"color": [ {"העמקת חקירה":"#8c94a8"},{"{רצון1}":"#ffba01"}]},
    {"font-size": [{"העמקת חקירה":"30px"}]}],
    "goto": "{רצון2}"
  },
  ]

export default questions;

