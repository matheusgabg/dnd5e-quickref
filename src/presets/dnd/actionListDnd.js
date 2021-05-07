export const actionListDnD =
    [
        {
            id: 0, 
            order: 0,
			containerId: 0,
            title: "Move",
            icon: "icon-run",
            subtitle: "Cost: 5ft per 5ft",
            description: "Movement cost: 5ft per 5ft moved",
            reference: "PHB, pg. 190.",
            bullets: [
                "If you have more than one speed, such as your walking speed and a flying speed, you can switch back and forth between your speeds during your move. Whenever you switch, subtract the distance you've already moved from the new speed.",
                "You can move through a nonhostile creature's space.",
                "You can move through a hostile creature's space only if the creature is at least two sizes larger or smaller than you.",
                "Another creature's space is difficult terrain for you.",
                "Whether a creature is a friend or an enemy, you can't willingly end your move in its space."
            ]
        },
        {
            id: 1, 
            order: 1,
			containerId: 0,
            title: "Climb",
            icon: "icon-crags",
            subtitle: "Cost: 10ft per 5ft",
            description: "Movement cost: 10ft per 5ft climbed",
            reference: "PHB, pg. 182.",
            bullets: [
                "May involve a Strength (Athletics) check if the climb is difficult"
            ]
        },
        {
            id: 2, 
            order: 2,
			containerId: 0,
            title: "Swim",
            icon: "icon-at-sea",
            subtitle: "Cost: 10ft per 5ft",
            description: "Movement cost: 10ft per 5ft swum",
            reference: "PHB, pg. 182.",
            bullets: [
                "May involve a Strength (Athletics) check if the swim is difficult"
            ]
        },
        {
            id: 3, 
            order: 3,
			containerId: 0,
            title: "Drop prone",
            icon: "icon-falling",
            subtitle: "Cost: 0ft",
            description: "Movement cost: 0ft (free)",
            reference: "PHB, pgs. 190-191,292.",
            bullets: [
                "You can drop prone without using any of your speed",
                "To move while prone, you must crawl or use magic such as teleportation",
                "Dropping prone adds the <i>Prone</i> condition (melee attacks against you have advantage, ranged attacks against you have disadvantage, your own attacks have disadvantage)"
            ]
        },
        {
            id: 4, 
            order: 4,
			containerId: 0,
            title: "Crawl",
            icon: "icon-crawl",
            subtitle: "Cost: 10ft per 5ft",
            description: "Movement cost: 10ft per 5ft crawled",
            reference: "PHB, pg. 182.",
            bullets: [
    
            ]
        },
        {
            id: 5, 
            order: 5,
			containerId: 0,
            title: "Stand up",
            icon: "icon-strong",
            subtitle: "Cost: half movement speed",
            description: "Movement cost: half of your speed",
            reference: "PHB, pg. 190-191.",
            bullets: [
                "You can't stand up if you don't have enough movement left or if your speed is 0"
            ]
        },
        {
            id: 6, 
            order: 6,
			containerId: 0,
            title: "High jump",
            icon: "icon-wingfoot",
            subtitle: "Cost: 5ft per 5ft",
            description: "Movement cost: 5ft per 5ft jumped",   
            reference: "PHB, pg. 182.",
            bullets: [
                "You leap into the air a number of feet equal to <b>3 + your Strength modifier</b> if you move at least 10 feet on foot immediately before the jump.",
                "When you make a standing high jump, you can jump only half that distance.",
                "You can extend your arms half your height above yourself during the jump.",
                "In some circumstances, your DM might allow you to make a Strength (Athletics) check to jump higher than you normally can."
            ]
        },
        {
            id: 7, 
            order: 7,
			containerId: 0,
            title: "Long jump",
            icon: "icon-wingfoot",
            subtitle: "Cost: 5ft per 5ft",
            description: "Movement cost: 5ft per 5ft jumped",
            reference: "PHB, pg. 182.",
            bullets: [
                "You cover a number of feet up to your <b>Strength score</b> if you move at least 10 feet on foot immediately before the jump.",
                "When you make a standing long jump, you can leap only half that distance",
                "May involve a DC 10 Strength (Athletics) check to clear a low obstacle (no taller than a quarter of the jump's distance). You hit the obstacle on a failed check.",
                "May involve a DC 10 Dexterity (Acrobatics) check to land on your feet in difficult terrain. You land prone on a failed check."
            ]
        },
        {
            id: 8, 
            order: 8,
			containerId: 0,
            title: "Improvise",
            icon: "icon-juggler",
            subtitle: "Any stunt not on this list",
            description: "Perform any movement or stunt you can imagine",
            bullets: [
                "When you describe a kind of movement not detailed elsewhere in the rules, the DM tells you whether it is possible and what kind of roll you need to make, if any, to determine success or failure."
            ]
        },
        {
            id: 9, 
            order: 9,
			containerId: 0,
            title: "Difficult terrain",
            icon: "icon-stone-pile",
            subtitle: "Cost modifier: +5ft per 5ft",
            reference: "PHB, pg. 182.",
            description: "Moving in difficult terrain costs an additional 5ft per 5ft of movement",
            bullets: [
            ]
        },
        {
            id: 10, 
            order: 10,
			containerId: 0,
            title: "Grapple move",
            icon: "icon-grab",
            subtitle: "Modifier: speed halved",
            description: "Drag or carry the grappled creature with you",
            reference: "PHB, pg. 195.",
            bullets: [
                "If you move while grappling another creature, your speed is halved, unless the creature is two or more sizes smaller than you.",
                "See the attack action for how to grapple a creature."
            ]
        },
        {
			id: 11, 
            order: 11,
			containerId: 1,
            title: "Attack",
            icon: "icon-crossed-swords",
            subtitle: "Melee or ranged attack",
            description: "Perform a melee or ranged attack with your weapon",
            reference: "PHB, pgs. 192,194-195.",
            bullets: [
                "Certain features, such as the <i>Extra Attack</i> feature of the fighter, allow you to make more than one attack with this action. Each of these attacks is a separate roll and may target different creatures. You may move in between these attacks.",
                "When you attack with a light melee weapon, you can use a bonus action to attack with your other hand (see the <i>Offhand attack</i> bonus action).",
                "You may replace one of your melee attacks with a <i>Grapple</i> or a <i>Shove</i>.",
                "Some conditions give advantage on the attack: attacks against blinded, paralyzed, petrified, restrained, stunned, or unconscious targets; melee attacks against prone targets; attacks by invisible or hidden attackers.",
                "Some conditions give disadvantage on the attack: attacks against invisible or hidden targets; ranged attacks against prone targets; attacks by blinded, frightened, poisoned, or restrained attackers."
            ]
        },
        {
			id: 12, 
            order: 12,
			containerId: 1,
            title: "Grapple",
            icon: "icon-grab",
            subtitle: "Special melee attack",
            description: "Attempt to grab a creature or wrestle with it",
            reference: "PHB, pg. 195.",
            bullets: [
                "You can use the <i>Attack</i> action to make a special melee attack, a grapple. If you're able to make multiple attacks with the Attack action, this attack replaces one of them.",
                "The target of your grapple must be no more than one size larger than you, and it must be within your reach.",
                "Using at least one free hand, you try to seize the target by making a grapple check, a Strength (Athletics) check contested by the target's Strength (Athletics) or Dexterity (Acrobatics) check (the target chooses the ability to use).",
                "If you succeed, you subject the target to the grappled condition (its speed is set to 0)."
            ]
        },
        {
			id: 13, 
            order: 13,
			containerId: 1,
            title: "Shove",
            icon: "icon-hand",
            subtitle: "Special melee attack",
            description: "Shove a creature, either to knock it prone or push it away from you",
            reference: "PHB, pg. 195.",
            bullets: [
                "Using the <i>Attack</i> action, you can make a special melee attack to shove a creature. If you're able to make multiple attacks with the Attack action, this attack replaces one of them.",
                "The target of your shove must be no more than one size larger than you, and it must be within your reach.",
                "You make a Strength (Athletics) check contested by the target's Strength (Athletics) or Dexterity (Acrobatics) check (the target chooses the ability to use).",
                "If you win the contest, you either knock the target prone or push it 5 feet away from you."
            ]
        },
        {
			id: 14, 
            order: 14,
			containerId: 1,
            title: "Cast a spell",
            icon: "icon-magic-swirl",
            subtitle: "Cast time of 1 action",
            description: "Cast a spell with a casting time of 1 action",
            reference: "PHB, pg. 192.",
            bullets: [
                "You can't cast a spell with you action and a different spell with your bonus action in the same turn, except if the action is used to cast a cantrip.",
                "The target of a spell must be within the spell's range. To target something, you must have a clear path to it, so it can't be behind total cover.",
                "Spells with material components do not consume the material unless explicitly stated. Unless the cost of a material is given, you can assume that the cost is negligible and the material is simply available in a component pouch.",
                "Some spells require you to maintain concentration in order to keep their magic active. If you lose concentration, such a spell ends. You lose concentration on a spell if you cast another spell that requires concentration or when you are incapacitated. Each time you take damage, you must make a Constitution saving throw to maintain your concentration. The DC equals 10 or half the damage you take, whichever number is higher."
            ]
        },
        {
			id: 15, 
            order: 15,
			containerId: 1,
            title: "Dash",
            icon: "icon-sprint",
            subtitle: "Double movement speed",
            description: "Gain extra movement for the current turn",
            reference: "PHB, pg. 192.",
            bullets: [
                "The increase equals your speed, after applying any modifiers."
            ]
        },
        {
            id: 16, 
            order: 16,
			containerId: 1,
            title: "Disengage",
            icon: "icon-journey",
            subtitle: "Prevent opportunity attacks",
            description: "Your movement doesn't provoke opportunity attacks for the rest of the turn",
            reference: "PHB, pg. 192.",
            bullets: [
            ]
        },
        {
			id: 17, 
            order: 17,
			containerId: 1,
            title: "Dodge",
            icon: "icon-aura",
            subtitle: "Increase defenses",
            description: "Focus entirely on avoiding attacks",
            reference: "PHB, pg. 192.",
            bullets: [
                "Until the start of your next turn, any attack roll made against you has disadvantage if you can see the attacker, and you make Dexterity saving throws with advantage.",
                "You lose this benefit if you are <i>incapacitated</i> or if your speed drops to 0."
            ]
        },
        {
			id: 18, 
            order: 18,
			containerId: 1,
            title: "Escape",
            icon: "icon-manacles",
            subtitle: "Escape a grapple",
            description: "Escape a grapple",
            reference: "PHB, pg. 195.",
            bullets: [
                "To escape a grapple, you must succeed on a Strength (Athletics) or Dexterity (Acrobatics) check contested by the grappler's Strength (Athletics) check.",
                "Escaping other conditions that restrain you (such as manacles) may require a Dexterity or Strength check, as specified by the condition."
            ]
        },
        {
			id: 19, 
            order: 19,
			containerId: 1,
            title: "Help",
            icon: "icon-telepathy",
            subtitle: "Grant an ally advantage",
            description: "Grant an ally advantage on an ability check or attack",
            reference: "PHB, pg. 192.",
            bullets: [
                "The target gains advantage on the next ability check it makes to perform the task you are helping with.",
                "Alternatively, the target gains advantage on the next attack roll against against a creature within 5 feet of you.",
                "The advantage lasts until the start of your next turn."
            ]
        },
        {
			id: 20, 
            order: 20,
			containerId: 1,
            title: "Use Object",
            icon: "icon-snatch",
            subtitle: "Interact, use special abilities",
            description: "Interact with a second object or use special object abilities",
            reference: "PHB, pg. 193.",
            bullets: [
                "You can interact with one object for free during your turn (such as drawing a weapon or opening a door). If you want to interact with a second object, use this action.",
                "When an object requires your action for its use, you also take this action."
            ]
        },
        {
			id: 21, 
            order: 21,
			containerId: 1,
            title: "Use shield",
            icon: "icon-round-shield",
            subtitle: "Equip or unequip a shield",
            description: "Equip or unequip a shield",
            reference: "PHB, pgs. 144-146.",
            bullets: [
                "A shield always takes an action to equip or unequip.",
                "Armor takes several minutes to equip or unequip."
            ]
        },
        {
			id: 22, 
            order: 22,
			containerId: 1,
            title: "Hide",
            icon: "icon-hood",
            subtitle: "Attempt to hide",
            description: "Attempt to hide",
            reference: "PHB, pg. 192.",
            bullets: [
                "You can't hide from a creature that can see you. You must have total cover, be in a heavily obscured area, be invisible, or otherwise block the enemy's vision.",
                "If you make noise (such as shouting a warning or knocking over a vase), you give away your position.",
                "When you try to hide, make a Dexterity (Stealth) check and note the result. Until you are discovered or you stop hiding, that check's total is contested by the Wisdom (Perception) check of any creature that actively searches for signs of your presence.",
                "A creature notices you even if it isn't searching unless your Stealth check is higher than its Passive Perception.",
                "Out of combat, you may also use a Dexterity (Stealth) check for acts like concealing yourself from enemies, slinking past guards, slipping away without being noticed, or sneaking up on someone without being seen or heard."
            ]
        },
        {
			id: 23, 
            order: 23,
			containerId: 1,
            title: "Search",
            icon: "icon-magnifying-glass",
            subtitle: "Search for something",
            description: "Devote your attention to finding something",
            reference: "PHB, pg. 193.",
            bullets: [
                "Depending on the nature of your search, the DM might have you make a Wisdom (Perception) check or an Intelligence (Investigation) check."
            ]
        },
        {
			id: 24, 
            order: 24,
			containerId: 1,
            title: "Ready",
            icon: "icon-stopwatch",
            subtitle: "Choose trigger and action",
            description: "Choose a trigger and a response reaction",
            reference: "PHB, pg. 193.",
            bullets: [
                "First, you decide what perceivable circumstance will trigger your reaction.",
                "Then, you choose the action you will take in response to that trigger, or you choose to move up to your speed in response to it.",
                "When the trigger occurs, you can either take your reaction right after the trigger finishes or ignore the trigger.",
                "When you ready a spell, you cast it as normal but hold its energy, which you release with your reaction when the trigger occurs. To be readied, a spell must have a casting time of 1 action, and holding onto the spell's magic requires concentration"
            ]
        },
        {
			id: 25, 
            order: 25,
			containerId: 1,
            title: "Stabilize a creature",
            icon: "icon-first-aid",
            subtitle: "Administer first aid to a dying creature",
            description: "Stop a dying creature from needing to make death saving throws",
            reference: "PHB, pg. 197.",
            bullets: [
                "Make a Wisdom (Medicine) check with DC 10",
                "On a success, the creature is stable and no longer needs to make death saving throws",
                "A stable creature regains 1 hit point after 1d4 hours"
            ]
        },
        {
			id: 26, 
            order: 26,
			containerId: 1,
            title: "Improvise",
            icon: "icon-juggler",
            subtitle: "Any action not on this list",
            description: "Perform any action you can imagine",
            reference: "PHB, pg. 193.",
            bullets: [
                "When you describe an action not detailed elsewhere in the rules, the DM tells you whether that action is possible and what kind of roll you need to make, if any, to determine success or failure."
            ]
        },
        {
			id: 27, 
            order: 27,
			containerId: 1,
            title: "Use class feature",
            icon: "icon-embrassed-energy",
            subtitle: "Some features use actions",
            description: "Use a racial or class feature that uses an action",
            reference: "See class page for more information.",
            bullets: [

            ]
        },
        {
			id: 28, 
            order: 28,
			containerId: 2,
            title: "Offhand Attack",
            icon: "icon-crossed-swords",
            subtitle: "Use with the Attack action",
            description: "Attack with your off hand",
            reference: "PHB, pgs. 192,194-195.",
            bullets: [
                "Only usable if you take the <i>Attack</i> action and attack with a light melee weapon that you're holding in one hand.",
                "Perform a single attack with a different light melee weapon that you're holding in the other hand.",
                "You don't add your ability modifier to the damage of the bonus attack, unless that modifier is negative.",
                "If either weapon has the thrown property, you can throw the weapon, instead of making a melee attack with it."
            ]
        },
        {
            id: 29, 
            order: 29,
			containerId: 2,
            title: "Cast a spell",
            icon: "icon-magic-swirl",
            subtitle: "Cast time of 1 bonus action",
            description: "Cast a spell with a casting time of 1 bonus action",
            reference: "PHB, pg. 192.",
            bullets: [
                "You can't cast a spell with you action and a different spell with your bonus action in the same turn, except if the action is used to cast a cantrip.",
                "For further details, see the <i>Cast a spell</i> action."
            ]
        },
        {
			id: 30, 
            order: 30,
			containerId: 2,
            title: "Use class feature",
            icon: "icon-embrassed-energy",
            subtitle: "Some features use bonus actions",
            description: "Use a racial or class feature that uses a bonus action",
            reference: "See class page for more information.",
            bullets: [
    
            ]
        },
        {
			id: 31, 
            order: 31,
			containerId: 3,
            title: "Opportunity attack",
            icon: "icon-crossed-swords",
            subtitle: "Enemy leaves your reach",
            description: "You can rarely move heedlessly past your foes without putting yourself in danger",
            reference: "PHB, pg. 195.",
            bullets: [
                "Trigger: enemy creature you can see leaves your reach.",
                "Make one melee attack against the provoking creature.",
                "The attack interrupts the provoking creature's movement, occurring right before the creature leaves your reach.",
                "Creatures don't provoke an opportunity attack when they teleport or when someone or something moves them without using their movement, action, or reaction."
            ]
        },
        {
			id: 32, 
            order: 32,
			containerId: 3,
            title: "Readied action",
            icon: "icon-stopwatch",
            subtitle: "Part of your Ready action",
            description: "Execute the reaction specified by your Ready action",
            reference: "PHB, pg. 193.",
            bullets: [
                "Trigger: specified by your <i>Ready</i> action."
            ]
        },
        {
			id: 33, 
            order: 33,
			containerId: 3,
            title: "Cast a spell",
            icon: "icon-magic-swirl",
            subtitle: "Cast time of 1 reaction",
            description: "Cast a spell with a casting time of 1 reaction",
            reference: "PHB, pg. 192.",
            bullets: [
                "Trigger: specified by the spell.",
                "For further details, see the <i>Cast a spell</i> action."
            ]
        },
        {
			id: 34, 
            order: 34,
			containerId: 4,
            title: "Blinded",
            icon: "icon-one-eyed",
            subtitle: "You can't see",
            description: "You can't see",
            reference: "PHB, pg. 290.",
            bullets: [
                "You automatically fail any ability check which requires sight.",
                "You have disadvantage on attack rolls.",
                "Attack rolls against you have advantage."
            ]
        },
        {
			id: 35, 
            order: 35,
			containerId: 4,
            title: "Charmed",
            icon: "icon-smitten",
            subtitle: "You are charmed",
            description: "You are charmed by another creature",
            reference: "PHB, pg. 290.",
            bullets: [
                "You can't attack your charmer or target them with harmful abilities or magical effects.",
                "Your charmer has advantage on ability checks to interact socially with you."
            ]
        },
        {
			id: 36, 
            order: 36,
			containerId: 4,
            title: "Deafened",
            icon: "icon-elf-ear",
            subtitle: "You can't hear",
            description: "You can't hear",
            reference: "PHB, pg. 290.",
            bullets: [
                "You automatically fail any ability check which requires hearing."
            ]
        },
        {
			id: 37, 
            order: 37,
			containerId: 4,
            title: "Exhaustion",
            icon: "icon-crawl",
            subtitle: "You are exhausted",
            description: "Exhaustion is measured in six levels",
            reference: "PHB, pg. 291.",
            bullets: [
                "<table><tr><th>Level</th><th></th><th></th><th style='text-align:left'>Effect</th></tr><tr><td>1</td><td></td><td></td><td>Disadvantage on ability checks</td></tr><tr><td>2</td><td></td><td></td><td>Speed halved</td></tr><tr><td>3</td><td></td><td></td><td>Disadvantage on attack rolls and saving throws</td></tr><tr><td>4</td><td></td><td></td><td>Hit point maximum halved</td></tr><tr><td>5</td><td></td><td></td><td>Speed reduced to 0</td></tr><tr><td>6</td><td></td><td></td><td>Death</td></tr></table>",
                "You suffer the effect of your current level of exhaustion as well as all lower levels.",
                "Finishing a long rest reduces your exhaustion level by 1, provided that you have also had some food and drink.",
                "Also, being raised from the dead reduces a creature’s exhaustion level by 1."
            ]
        },
        {
            id: 38, 
            order: 38,
			containerId: 4,
            title: "Frightened",
            icon: "icon-sharp-smile",
            subtitle: "You are frightened",
            description: "You are frightened",
            reference: "PHB, pg. 290.",
            bullets: [
                "You have disadvantage on ability checks and attack rolls while the source of your fear is within line of sight.",
                "You can't willingly move closer to the source of your fear."
            ]
        },
        {
			id: 39, 
            order: 39,
			containerId: 4,
            title: "Grappled",
            icon: "icon-grab",
            subtitle: "You are grappled",
            description: "You are grappled",
            reference: "PHB, pg. 290.",
            bullets: [
                "Your speed becomes 0, and you can't benefit from any bonus to your speed.",
                "The condition ends if your grappler is incapacitated.",
                "The condition also ends if you are removed from the reach of your grappler."
            ]
        },
        {
			id: 40, 
            order: 40,
			containerId: 4,
            title: "Incapacitated",
            icon: "icon-internal-injury",
            subtitle: "You can't take actions or reactions",
            description: "You can't take actions or reactions",
            reference: "PHB, pg. 290.",
            bullets: [
            ]
        },
        {
			id: 41, 
            order: 41,
			containerId: 4,
            title: "Invisible",
            icon: "icon-invisible",
            subtitle: "You can't be seen",
            description: "You can't be seen without the aid of magic or a special sense",
            reference: "PHB, pg. 291.",
            bullets: [
                "For the purpose of hiding, you are heavily obscured.",
                "You can still be detected by any noise you make or tracks you leave.",
                "You have advantage on attack rolls.",
                "Attack rolls against you have disadvantage."
            ]
        },
        {
			id: 42, 
            order: 42,
			containerId: 4,
            title: "Paralyzed",
            icon: "icon-internal-injury",
            subtitle: "You are paralyzed",
            description: "You can't do anything",
            bullets: [
                "You are incapacitated and can't move or speak.",
                "Attack rolls against you have advantage.",
                "Any attack that hits you is a critical hit if the attacker is within 5 feet of you.",
                "You automatically fail Strength and Dexterity saving throws."
            ]
        },
        {
			id: 43, 
            order: 43,
			containerId: 4,
            title: "Petrified",
            icon: "icon-stone-pile",
            subtitle: "You are transformed into stone",
            description: "You are transformed, along with any nonmagical objects you are wearing or carrying, into a solid inanimate substance (usually stone)",
            reference: "PHB, pg. 291.",
            bullets: [
                "Your weight increases by a factor of ten, and you cease aging.",
                "You are incapacitated, can't move or speak, and are unaware of your surroundings.",
                "Attack rolls against you have advantage.",
                "You automatically fail Strength and Dexterity saving throws.",
                "You have resistance to all damage.",
                "You are immune to poison and disease, though a poison or disease already in your system is only suspended, not neutralized."
            ]
        },
        {
			id: 44, 
            order: 44,
			containerId: 4,
            title: "Poisoned",
            icon: "icon-deathcab",
            subtitle: "You are poisoned",
            description: "You are poisoned",
            reference: "PHB, pg. 292.",
            bullets: [
                "You have disadvantage on attack rolls and ability checks."
            ]
        },
        {
			id: 45, 
            order: 45,
			containerId: 4,
            title: "Prone",
            icon: "icon-crawl",
            subtitle: "You are prone",
            description: "You are prone",
            reference: "PHB, pg. 292.",
            bullets: [
                "Your only movement option is to crawl, unless you stand up.",
                "You have disadvantage on attack rolls.",
                "Attack rolls against you have advantage if the attacker is within 5 feet of you, otherwise the attack roll has disadvantage."
            ]
        },
        {
			id: 46, 
            order: 46,
			containerId: 4,
            title: "Restrained",
            icon: "icon-imprisoned",
            subtitle: "You are restrained",
            description: "You are restrained",
            reference: "PHB, pg. 292.",
            bullets: [
                "Your speed becomes 0, and you can't benefit from any bonus to your speed.",
                "You have disadvantage on attack rolls.",
                "Attack rolls against you have advantage.",
                "You have disadvantage on Dexterity saving throws."
            ]
        },
        {
			id: 47, 
            order: 47,
			containerId: 4,
            title: "Stunned",
            icon: "icon-internal-injury",
            subtitle: "You are stunned",
            description: "You are stunned",
            reference: "PHB, pg. 292.",
            bullets: [
                "You are incapacitated, can't move, and can speak only falteringly.",
                "Attack rolls against you have advantage.",
                "You automatically fail Strength and Dexterity saving throws."
            ]
        },
        {
            id: 48, 
            order: 48,
			containerId: 4,
            title: "Unconscious",
            icon: "icon-coma",
            subtitle: "You are unconscious",
            description: "You are unconscious",
            reference: "PHB, pg. 292.",
            bullets: [
                "You are incapacitated, can't move or speak, and are unaware of your surroundings.",
                "You drop whatever you're holding and fall prone.",
                "Attack rolls against you have advantage.",
                "Any attack that hits you is a critical hit if the attacker is within 5 feet of you.",
                "You automatically fail Strength and Dexterity saving throws.",
            ]
        },
        {
			id: 49, 
            order: 49,
			containerId: 4,
            title: "Dying",
            icon: "icon-dead-head",
            subtitle: "You are dying",
            description: "You have been dropped to zero hit points and are dying",
            reference: "PHB, pg. 197.",
            bullets: [
                "If you are reduced to 0 hit points by damage that fails to kill you, you fall unconscious and are dying.",
                "If you receive any healing you immediately regain consciousness again and no longer dying.",
                "When dying, at the start of each of your turns you make a death saving throw. Roll a d20 and do not add any modifiers.",
                "A 10 or higher is a success, 9 or lower is a failure.",
                "On your third success, you become stable.",
                "On your third failure, you die.",
                "Rolling a 1 counts as two failures.",
                "Rolling a 20 immediately causes you to regain 1 hit point.",
                "You can also be stabilized by an ally taking the Stabilize action and succeeding on a DC 10 Wisdom (Medicine) check.",
                "Once stable, you regain 1 hit point after 1d4 hours."
            ]
        },
        {
            id: 50, 
            order: 50,
			containerId: 5,
            title: "Lightly obscured",
            icon: "icon-bleeding-eye",
            subtitle: "Disadvantage on Perception",
            description: "Dim light, patchy fog, moderate foliage",
            reference: "PHB, pg. 183.",
            bullets: [
                "Creatures have <b>disadvantage on Wisdom (Perception)</b> checks that rely on sight."
            ]
        },
        {
            id: 51, 
            order: 51,
			containerId: 5,
            title: "Heavily obscured",
            icon: "icon-lightning-tear",
            subtitle: "Effectively blind",
            description: "Darkness, opaque fog, dense foliage",
            reference: "PHB, pg. 183.",
            bullets: [
                "A creature in a heavily obscured area effectively suffers from the <b>blinded condition</b>."
            ]
        }
    ];
