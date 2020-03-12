const 
questions = 
[
  {
    "title": "{הקדמה}",
    "question": "ברכות__תהליך זה מטרתו לעזור לך לצמצם את הפער בין המצוי לרצוי ע״י בירור וחקירה שכלית",
    "dialogeType": "prompt",
    "buttons": { "a": "המשך"},
    "answer": "",
    "css": [{"color": [ {"ברכות":"#8c94a8"}]},
    {"font-size": [{"ברכות":"20px"}]}
  ],
  "blockDesign": true
  },
{
  "title": "{המציאות}",
  "question": "בתור התחלה, האם הינך מרוצה בשלמות מהמציאות?",
  "dialogeType": "prompt",
  "buttons": { "a": "לא", "b": "כן" },
  "next": { "a": "{2המציאות}", "b": "{סיימת}" },
  "answer": "",
  "blockDesign": true
}, 
 {
  "title": "{סיימת}",
  "question": "ברכות!",
  "dialogeType": "prompt",
  "buttons": { "a": "מהתחלה"},
  "next": { "a": "{המציאות}"},
  "answer": "",
  "css": [{"color":[{"ברכות!":"#ffba01"}]},
  {"font-size": [{"ברכות":"20px"}]}],
  "clear": true,
  "blockDesign": true
}, 
  {
    "title": "{2המציאות}",
    "question": "איסוף נתונים__ממה במציאות אינך מרוצה?",
    "dialogeType": "horizontal",
    "placeholder": "תאר בחופשיות",
    "answer": "",
    "css": [{"color": [ {"איסוף נתונים":"#8c94a8"}]},
    {"font-size": [{"איסוף נתונים":"20px"}]}],
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
  // {
  //   "title": "{ההיפךשלמציאות2}",
  //   "question": "מה ההיפך של המציאות {2המציאות}?",
  //   "dialogeType": "horizontal",
  //   "placeholder": "ההיפך של המציאות",
  //   "buttons": "?",
  //   "answer": "",
  //   "ref": ["{2המציאות}"],
  //   "mirror": false,
  //   "css": [{"color":[{"{2המציאות}":"#ffba01"}]}]
  // },

  // {
  //   "title": "{וידוי3}",
  //   "h1": "עקרון ראשון",
  //   "question": "אם לא היית רוצה {רצון1},__האם היה מפריע לך {ההיפךשלרצון1}?",
  //   "dialogeType": "prompt",
  //   "buttons": { "a": "לא", "b": "כן" },
  //   "answer": "",
  //   "ref": ["{רצון1}","{ההיפךשלרצון1}"],
  //   "css": [{"color":[{"רוצה":"#ffba01"}]}]
  // },
  {
    "title": "{הכנהלרצון2}",
    "question": "תחילת חקירה__למה הינך רוצה {רצון1}?",
    "dialogeType": "horizontal",
    "placeholder": "סיבת הרצון",
    "buttons": { "a": "המשך", "b": "סיים" },
    "answer": "",
    "ref": ["{רצון1}"],
    "css": [{"color": [ {"תחילת חקירה":"#8c94a8"}]},
    {"font-size": [{"תחילת חקירה":"20px"}]}],
    "blockDesign": false
  },
  {
    "title": "{רצון2}",
    "question": "אז מה הינך בעצם רוצה? ⤴",
    "dialogeType": "horizontal",
    "placeholder": "סיבת הרצון",
    "css": [
    {"font-size": [{"⤴":"40px"}]}],
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
    "question": "לתפיסתך מה ההיפך של {רצון2}?",
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
    "question": "סיבה ⬅ תוצאה__האם ועד כמה מחויב שאם {רצון1},__אז זה יגרום לתוצאה של {רצון2}?",
    "dialogeType": "prompt",
    "buttons": { "a": "לא מחויב", "b": "מחויב" },
    "answer": "",
    "ref": ["{רצון2}","{רצון1}"],
    "css": [{"color": [ {"סיבה ⬅ תוצאה":"#8c94a8"}]},
    {"font-size": [{"סיבה ⬅ תוצאה":"20px"}]}],
    "blockDesign": false
  },
  {
    "title": "{האםהסיבהמחייבת}",
    "question": "האם יש אפשרות ש{רצון1} יגרום לתוצאה אחרת__או אפילו ל{ההיפךשלרצון2}?",
    "dialogeType": "prompt",
    "buttons": { "a": "בלתי אפשרי", "b": "אפשרי" },
    "answer": "",
    "ref": ["{ההיפךשלרצון2}","{רצון1}"],
    "css": [{"color": [ {"האם הסיבה מחייבת את התוצאה?":"#8c94a8"}]}],
    "blockDesign": true
  },
  {
    "title": "{האםהתוצאהמתחייבת}",
    "question": "תוצאה ⬅ סיבה__האם {רצון2} בהכרח מתחייב מ{רצון1}?",
    "dialogeType": "prompt",
    "buttons": { "a": "לא בהכרח", "b": "כן בהכרח" },
    "answer": "",
    "ref": ["{רצון2}","{רצון1}"],
    "css": [{"color": [    {"תוצאה ⬅ סיבה":"#8c94a8"}]},
    {"font-size": [{"תוצאה ⬅ סיבה":"20px"}]}],
     "blockDesign": true
  },
  {
    "title": "{האםהתוצאהמתחייבת}",
    "question": "האם יש אפשרות שיש דרכים אחרות ל{רצון2} מאשר {רצון1}?",
    "dialogeType": "prompt",
    "buttons": { "a": "בלתי אפשרי", "b": "אולי יש אפשרות" },
    "answer": "",
    "ref": ["{רצון2}","{רצון1}","{רצון2}","{ההיפךשלרצון1}"],
    "css": [{"color": [    {"האם התוצאה מתחייבת מהסיבה?":"#8c94a8"}]}],
    "swap" : {  "{2המציאות}" : "{ההיפךשלרצון1}",
                "{רצון1}" : "{רצון2}",
                "{ההיפךשלרצון1}" : "{ההיפךשלרצון2}"},
    "blockDesign": true
  },
  {
    "title": "{האםהתוצאהמתחייבת}",
    "question": "האם יש אפשרות {רצון2} בדרך ההפוכה?__{רצון2} מכך {ההיפךשלרצון1}?",
    "dialogeType": "prompt",
    "buttons": { "a": "בלתי אפשרי", "b": "אולי יש אפשרות" },
    "answer": "",
    "ref": ["{רצון2}","{רצון1}","{רצון2}","{ההיפךשלרצון1}"],
    "css": [{"color": [    {"האם התוצאה מתחייבת מהסיבה?":"#8c94a8"}]}],
    "swap" : {  "{2המציאות}" : "{ההיפךשלרצון1}",
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
    "css": [{"color": [ {"העמקת חקירה":"#8c94a8"}]},
    {"font-size": [{"העמקת חקירה":"20px"}]}],
    "goto": "{רצון2}"
  },
  ]

export default questions;

