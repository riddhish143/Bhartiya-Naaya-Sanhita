import { addChapter, saveJSON } from "../Template/template.js"
import fs from "fs";

addChapter("Abetting mutiny, or attempting to seduce a soldier, sailor or airman from his duty.",
  `Whoever abets the committing of mutiny by an officer, soldier, sailor or airman, in the Army, Navy or Air Force of the Government of India or attempts to seduce any such officer, soldier, sailor or airman from his allegiance or his duty, shall be punished with imprisonment for life, or with imprisonment of either description for a term which may extend to ten years, and shall also be liable to fine.`
)

addChapter("Abetment of mutiny, if mutiny is committed in consequence thereof.",
  `Whoever abets the committing of mutiny by an officer, soldier, sailor or airman, in the Army, Navy or Air Force of the Government of India, shall, if mutiny be committed in consequence of that abetment, be punished with death or with imprisonment for life, or imprisonment of either description for a term which may extend to ten years, and shall also be liable to fine.`
)

addChapter("Abetment of assault by soldier, sailor or airman on his superior officer, when in execution of his office.",
  `Whoever abets an assault by an officer, soldier, sailor or airman, in the Army, Navy or Air Force of the Government of India, on any superior officer being in the execution of his office, shall be punished with imprisonment of either description for a term which may extend to three years, and shall also be liable to fine.`
)

addChapter("Abetment of such assault, if assault committed.",
  `Whoever abets an assault by an officer, soldier, sailor or airman, in the Army, Navy or Air Force of the Government of India, on any superior officer being in the execution of his office, shall, if such assault be committed in consequence of that abetment be punished with imprisonment of either description for a term which may extend to seven years, and shall also be liable to fine.`
)

addChapter("Abetment of desertion of soldier, sailor or airman",
  `Whoever abets the desertion of any officer, soldier, sailor or airman, in the Army, Navy or Air Force of the Government of India, shall be punished with imprisonment of either description for a term which may extend to two years, or with fine, or with both.`
)

addChapter("Harbouring deserter.",
  `Whoever, except as hereinafter excepted, knowing or having reason to believe that an officer, soldier, sailor or airman, in the Army, Navy or Air Force of the Government of India, has deserted, harbours such officer, soldier, sailor or airman, shall be punished with imprisonment of either description for a term which may extend to two years, or with fine or with both.
Exception.—This provision does not extend to the case in which the harbour is given by the spouse of the deserter.`
)

addChapter("Deserter concealed on board merchant vessel through negligence of master.",
  `The master or person in charge of a merchant vessel, on board of which any deserter from the Army, Navy or Air Force of the Government of India is concealed, shall, though ignorant of such concealment, be liable to a penalty not exceeding three thousand rupees, if he might have known of such concealment but for some neglect of his duty as such master or person in charge, or but for some want of discipline on board of the vessel.`
)

addChapter("Abetment of act of insubordination by soldier, sailor or airman.",
  `Whoever abets what he knows to be an act of insubordination by an officer, soldier, sailor or airman, in the Army, Navy or Air Force, of the Government of India, shall, if such act of insubordination be committed in consequence of that abetment, be punished with imprisonment of either description for a term which may extend to two years, or with fine, or with both.
`
)

addChapter("Persons subject to certain Acts.",
  `No person subject to the Air Force Act, 1950 (45 of 1950), the Army Act, 1950 (46 of 1950) and the Navy Act, 1957 (62 of 1957), or shall be subject to punishment under this Sanhita for any of the offences defined in this Chapter.
`
)

addChapter("Wearing garb or carrying token used by soldier, sailor or airman.",
  `Whoever, not being a soldier, sailor or airman in the Army, Naval or Air service of the Government of India, wears any garb or carries any token resembling any garb or token used by such a soldier, sailor or airman with the intention that it may be believed that he is such a soldier, sailor or airman, shall be punished with imprisonment of either description for a term which may extend to three months, or with fine which may extend to two thousand rupees, or with both.`
)

saveJSON("chapter8.json")