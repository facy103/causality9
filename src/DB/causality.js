const questions = [
  {
    "title": "{הקדמה}",
    "question": "חקירת סיבתיות__תהליך זה נועד לבחון קשר של סיבה ותוצאה על היבטיו.",
    "dialogeType": "prompt",
    "buttons": { "a": "המשך"},
    "answer": "",
    "css": [{"color": [ {"חקירת סיבתיות":"#8c94a8"}]},
    {"font-size": [{"חקירת סיבתיות":"30px"}]}
  ],
  },
  {
    "title": "{תוצאה}",
    "question": "איסוף נתונים__תוצאה__אנא הכנס תוצאה לחקירה",
    "placeholder": "תוצאה",
    "dialogeType": "horizontal",
    "answer": "",
    "css": [{"color": [ {"תוצאה":"#8c94a8"},{"איסוף נתונים":"#8c94a8"}]},
    {"font-size": [{"תוצאה":"20px"},{"איסוף נתונים":"30px"}]}
  ],
  },
  {
    "title": "{סיבה}",
    "question":"סיבה__מה הסיבה ש{תוצאה}?",
    "dialogeType": "horizontal",
    "placeholder": "סיבה",
    "answer": "",
    "ref": ["{תוצאה}"],
    "css": [{"color":[{"{תוצאה}":"#ffba01"},{"סיבה":"#8c94a8"}]},
    {"font-size": [{"סיבה":"20px"}]}],
    "blockDesign": true
  },
  {
    "title": "{תוצאההופכית}",
    "question": "מה ההיפך של {תוצאה}?",
    "placeholder": "תוצאה הופכית",
    "dialogeType": "horizontal",
    "answer": "",
    "ref": ["{תוצאה}"],
    "css": [{"color":[{"{תוצאה}":"#ffba01"}]}],
    "blockDesign": true
  },
  {
    "title": "{סיבההופכית}",
    "question": "מה ההיפך של {סיבה}?",
    "placeholder": "סיבה הופכית",
    "dialogeType": "horizontal",
    "answer": "",
    "ref": ["{סיבה}"],
    "css": [{"color":[{"{סיבה}":"#ffba01"}]}],
    "blockDesign": true
  },
  {
    "title": "{האםהתוצאהמחוייבת}",
    "question": "התחלת חקירה__האם התוצאה מחוייבת?__האם ודאי ב 100% ש{תוצאה}?",
    "dialogeType": "prompt",
    "answer": "",
    "ref": ["{תוצאה}"],
    "buttons": { "a": "לא ב 100%", "b": "ב 100%" },
    "css":
            [{"color": [{"האם התוצאה מחוייבת?":"#8c94a8"},{"{סיבה}":"#ffba01"},{"התחלת חקירה":"#8c94a8"},{"{תוצאה}":"#ffba01"} ]},
            {"font-size": [{"התחלת חקירה":"30px"}]}
            ],
  },
  {
    "title": "{1האםהסיבהמחוייבת}",
    "question": "האם הסיבה מחויבת?__האם ודאי ב 100% ש{סיבה}?",
    "dialogeType": "prompt",
    "answer": "",
    "buttons": { "a": "לא ב 100%", "b": "ב 100%" },
    "ref": ["{סיבה}"],
    "css":
            [{"color": [{"האם הסיבה מחויבת?":"#8c94a8"},{"סיבה":"#8c94a8"},{"{סיבה}":"#ffba01"}]},
            ],
            "blockDesign": true
  },
  {
    "title": "{האםהסיבהמחייבת}",
    "question": "האם הסיבה מחויבת?__האם מחויב ש{תוצאה} מהסיבה {סיבה}?__האם יש אפשרות ש{תוצאה} מסיבה אחרת?",
    "dialogeType": "prompt",
    "answer": "",
    "buttons": { "a": "אין אפשרות", "b": "יש אפשרות" },
    "ref": ["{תוצאה}","{תוצאה}","{סיבה}"],
    "css":
            [{"color": [{"האם הסיבה מחויבת?":"#8c94a8"},{"{סיבה}":"#ffba01"},{"{תוצאה}":"#ffba01"},{"{תוצאה}":"#ffba01"}]},
            ],
            "blockDesign": true
  },
  {
    "title": "{האםהסיבהמחייבת}",
    "question": "האם יש אפשרות ש{תוצאה} מהסיבה ההפוכה? - __ש{סיבההופכית}?",
    "dialogeType": "prompt",
    "answer": "",
    "buttons": { "a": "אין אפשרות", "b": "יש אפשרות" },
    "ref": ["{תוצאה}","{תוצאה}","{סיבה}","{סיבההופכית}"],
    "css":
            [{"color": [{"{סיבההופכית}":"#ffba01"},{"{תוצאה}":"#ffba01"}]},
            ],
            "blockDesign": true
  },
  {
    "title": "{האםהסיבהמחייבת}",
    "question": "האם התוצאה מחויבת?__האם חייב ש{סיבה} יגרום ל{תוצאה}?__האם יש אפשרות ש{סיבה} יגרום לתוצאה אחרת?",
    "dialogeType": "prompt",
    "answer": "",
    "buttons": { "a": "אין אפשרות", "b": "יש אפשרות" },
    "ref": ["{סיבה}","{תוצאה}","{סיבה}"],
    "css":
            [{"color": [{"האם התוצאה מחויבת?":"#8c94a8"},{"{סיבה}":"#ffba01"},{"{תוצאה}":"#ffba01"},{"{סיבה}":"#ffba01"}]},
            ],
            "blockDesign": true
  },
  {
    "title": "{האםהסיבהמחייבת}",
    "question": "האם יש אפשרות ש{סיבה} יגרום לתוצאה ההפוכה__ל{תוצאההופכית}?",
    "dialogeType": "prompt",
    "answer": "",
    "buttons": { "a": "אין אפשרות", "b": "יש אפשרות" },
    "ref": ["{סיבה}","{תוצאההופכית}","{סיבה}"],
    "css":
            [{"color": [{"{תוצאההופכית}":"#ffba01"},{"{סיבה}":"#ffba01"},{"{סיבה}":"#ffba01"}]},
            ],
            "blockDesign": true
  },
  {
    "title": "{האםהתוצאהמחייבת}",
    "question": "בחר נתיב",
    "dialogeType": "prompt",
    "answer": "",
    "buttons": { "a": "▲ חקירה חדשה", "b": "העמקת החקירה ▼" },
    "next":{"a":"{תוצאה}", "b":"{סיבה2}"},
    "ref": ["{תוצאה}","{סיבה}","{סיבההופכית}","{תוצאה}","{תוצאה}"],
    "css":
            [
            {"font-size": [{"בחר נתיב":"20px"}]}
            ],
    "swap" : {  
      "{תוצאה}" : "{סיבה}"},
  },




// Second itteration



{
  "title": "{סיבה2}",
  "question":"הסיבה של הסיבה__מה הסיבה ש{תוצאה}?",
  "dialogeType": "horizontal",
  "placeholder": "סיבה",
  "answer": "",
  "ref": ["{תוצאה}"],
  "css": [{"color":[{"{תוצאה}":"#ffba01"},{"הסיבה של הסיבה":"#8c94a8"}]},
  {"font-size": [{"הסיבה של הסיבה":"20px"}]}],
  "swap" : {  
    "{סיבה}" : "{סיבה2}"},
},
{
  "title": "{סיבההופכית2}",
  "question": "מה ההיפך של {סיבה2}?",
  "placeholder": "סיבה הופכית",
  "dialogeType": "horizontal",
  "answer": "",
  "blockDesign": true,
  "ref": ["{סיבה2}"],
  "css": [{"color":[{"{סיבה2}":"#ffba01"}]}],
  "swap" : {  "{תוצאההופכית}" : "{סיבההופכית}",
    "{סיבההופכית}" : "{סיבההופכית2}",},
  "goto": "{1האםהסיבהמחוייבת}"
},




  ]

  export default questions;