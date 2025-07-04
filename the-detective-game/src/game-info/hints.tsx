type Hint = {
  message: string
  isLie: boolean
}

export const hintsCases: Hint[][] = [
  // Case 1
  [
    { message: "I heard footsteps heading toward the display before the lights went out.", isLie: false },
    { message: "I was near the entrance when the blackout happened.", isLie: false },
    { message: "Someone bumped into me during the blackout.", isLie: false },
    { message: "I heard a glass shatter, but I couldn't see who did it.", isLie: false },
    { message: "I stayed frozen the whole time. It was pitch black.", isLie: false },
    { message: "I think the thief planned it. The blackout felt too perfect.", isLie: false },
    { message: "I heard whispers — someone was coordinating.", isLie: false },
    { message: "I was holding my breath, afraid to move.", isLie: false },
    { message: "There was a cold draft, like someone opened a door quickly.", isLie: false },
    { message: "I smelled a strange perfume — not one I recognize.", isLie: false },
    { message: "I heard the display alarm beep right before the blackout.", isLie: false },
    { message: "I saw someone holding the diamond before the blackout.", isLie: true }
  ],

  // Case 2
  [
    { message: "I was near the pond sketching flowers when it happened.", isLie: false },
    { message: "I heard a crack but didn't see who was nearby.", isLie: false },
    { message: "The teacher told us not to touch the equipment, so I stayed clear.", isLie: false },
    { message: "I was helping set up the picnic area far from the drone table.", isLie: false },
    { message: "Everyone jumped when they heard the breaking sound.", isLie: false },
    { message: "I didn't even get close to the drone station the entire morning.", isLie: false },
    { message: "I was under the tree reading when it happened.", isLie: false },
    { message: "It sounded like plastic snapping hard.", isLie: false },
    { message: "I was trying to take photos of butterflies on the other side.", isLie: false },
    { message: "There were only two or three students near the table when it broke.", isLie: false },
    { message: "I turned quickly and saw someone running away holding the controller.", isLie: true },
    { message: "I was helping the teacher collect trash bags away from the station.", isLie: false }
  ],

  // Case 3
  [
    { message: "I was refilling my coffee in the break room, didn't even enter the main hall.", isLie: false },
    { message: "I saw someone from IT near the booth earlier, maybe checking something.", isLie: false },
    { message: "I was running slides in Hall B, we had a glitch on our projector.", isLie: false },
    { message: "Everyone was panicking over the Wi-Fi, so I was with the tech crew.", isLie: false },
    { message: "I overheard someone say the USB slot was loose — maybe it's hardware?", isLie: false },
    { message: "I didn't even bring my badge this morning, so I stayed out of all secure areas.", isLie: false },
    { message: "I was on a call with our partners in Dubai when it happened.", isLie: false },
    { message: "I went to the bathroom right before the presentation time.", isLie: false },
    { message: "Honestly, the whole booth seemed untouched when I walked by.", isLie: false },
    { message: "I saw the intern fiddling with the USB before the crash — looked suspicious.", isLie: true },
    { message: "I was helping prep the marketing banners near the registration desk.", isLie: false },
    { message: "I never got close to the laptop, I was finalizing the social posts on my phone.", isLie: false }
  ],

  // Case 4
  [
    { message: "I stayed after hours to double-check inventory logs.", isLie: false },
    { message: "I handed off the security tablet before my shift ended.", isLie: false },
    { message: "I saw someone accessing the shipment zone camera feed.", isLie: false },
    { message: "I was labeling boxes in Zone C during the incident.", isLie: false },
    { message: "I remember the seal was intact when I did my walkthrough.", isLie: false },
    { message: "I was on the phone with the supplier sorting tomorrow's delivery.", isLie: false },
    { message: "I had no idea a shipment even arrived today.", isLie: false },
    { message: "I helped move the pallet into the secure aisle.", isLie: false },
    { message: "I scanned the barcode and handed the scanner to Ahmed.", isLie: false },
    { message: "I didn't see anything unusual — just regular unloading.", isLie: false },
    { message: "I left before the delivery came, no idea what happened after.", isLie: false },
    { message: "I never entered the warehouse that day.", isLie: true }
  ],

  // Case 5
  [
    { message: "I was manning the entrance, checking conference badges all morning.", isLie: false },
    { message: "I overheard someone talking about USB drives in the lounge.", isLie: false },
    { message: "I noticed the tech box was left unlocked during break.", isLie: false },
    { message: "I was fixing audio cables on the main stage.", isLie: false },
    { message: "I saw the team huddled around the laptop just before the break.", isLie: false },
    { message: "I only arrived 10 minutes before the main event.", isLie: false },
    { message: "I had to step outside to take a personal call.", isLie: false },
    { message: "I thought the intern looked nervous the whole time.", isLie: false },
    { message: "I was with logistics team handling booth assignments.", isLie: false },
    { message: "I stayed back late last night helping with presentation setup.", isLie: false },
    { message: "I was reviewing notes in the prep room at the time of the crash.", isLie: true },
    { message: "I grabbed lunch during the window when the laptop was accessed.", isLie: false }
  ],

  // Case 6
  [
    { message: "I was calibrating lab sensors around 1 AM.", isLie: false },
    { message: "I checked the logs — only one entry at 2:17 AM.", isLie: false },
    { message: "My shift ended just before midnight.", isLie: false },
    { message: "I was asked to review footage, but the cameras glitched.", isLie: false },
    { message: "I stayed home last night working on paperwork.", isLie: false },
    { message: "I was running diagnostics remotely, not in the lab.", isLie: false },
    { message: "I saw an unauthorized login but didn't act fast enough.", isLie: false },
    { message: "The chemical storage was sealed when I left.", isLie: false },
    { message: "I noticed the keypad was smudged, like recently used.", isLie: false },
    { message: "I think someone cloned a keycard — mine went missing last week.", isLie: false },
    { message: "I came in early this morning — first one on site.", isLie: false },
    { message: "I had no reason to be there at 2 AM.", isLie: true }
  ],

  // Case 7
  [
    { message: "I was prepping our client's slides in the side room.", isLie: false },
    { message: "The IT guy asked for the laptop earlier — he looked rushed.", isLie: false },
    { message: "I took a break outside right before the rehearsal resumed.", isLie: false },
    { message: "The booth was empty when I stopped by — even the lights were off.", isLie: false },
    { message: "I helped carry the demo gear to the room.", isLie: false },
    { message: "I saw Emma plug something into the USB port briefly.", isLie: false },
    { message: "There was a spilled coffee cup next to the table — very close to the laptop.", isLie: false },
    { message: "I had a meeting in another hall — wasn't nearby.", isLie: false },
    { message: "I stayed behind to fix the sound feedback issue.", isLie: false },
    { message: "I saw the drawer was open slightly when I passed by.", isLie: false },
    { message: "I was backstage helping coordinate speaker order.", isLie: true },
    { message: "I was printing handouts while they set up inside.", isLie: false }
  ]
]


export const storyCases = [
  "A high-tech drone controller was found smashed during a class field trip. Only 12 students were around the equipment. One of them broke it — and is now lying.",
  "During a school field trip to a botanical garden, the class was gathered on the grass near the drone station. At some point, the controller was found smashed — no one admitted to it. Each person gave a statement.",
  "At a corporate innovation summit, one team's USB drive containing their presentation was mysteriously corrupted minutes before their pitch. It had worked fine during the rehearsal. Security footage shows that someone accessed the team's laptop just before the incident — but no clear face was seen. The team questions everyone in the lounge area.",
  "A shipment of high-value components went missing from the secure warehouse section overnight. The inventory system showed everything was intact, but the morning team noticed the seal broken and items gone. Surveillance footage was inconclusive due to foggy lenses. Everyone present during the late shift is now under review.",
  "Moments before a critical pitch at the annual tech conference, the presentation file became corrupted. The laptop showed signs of an unsafely ejected USB. All team members were nearby during the prep hour, but no one reported touching the device. Organizers demand to know who caused the disruption.",
  "Sensitive data from the research lab server was accessed at 2:17 AM. Only a handful of staff had clearance, and physical access requires a keycard. While no break-in was recorded, someone bypassed protocol. Everyone with recent lab access is now being questioned.",
  "Just before a major client demo, the team discovered their demo laptop had been tampered with. The machine wouldn't boot, and several device logs had been erased. Witnesses saw activity around the booth, but no clear culprit emerged. The demo was canceled — a huge blow to the team."
]