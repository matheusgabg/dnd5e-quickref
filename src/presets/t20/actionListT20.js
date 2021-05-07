export const actionListT20 =
    [
        { 
            title: "Atacar",
			id: 0, 
            order: 0,
			containerId: 0,
            icon: "icon-crossed-swords",
            subtitle: "Corpo a corpo ou à Distância",
            description: "Você faz um ataque com uma arma corpo a corpo ou à distância",
            reference: "pg. 219.",
            bullets: [
                "Com uma arma corpo a corpo, você pode atacar qualquer inimigo dentro de seu alcance natural (1,5m para criaturas Pequenas e Médias ou um inimigo adjacente no mapa",
                "Personagens maiores, ou usando certas armas podem atacar mais longe",
                "Com uma arma de ataque à distância você pode atacar qualquer inimigo que consiga ver e que esteja no alcance da arma (ou até o dobro do alcance, sofrendo uma penalidade de -5)",
                "<i>Atirando em Combate Corpo a Corpo:</i> Quando faz um ataque à distância contra uma criatura em combate corpo a corpo, você sofre -5 no teste de ataque"
            ]
        },
        {
            title: "Agarrar",
			id: 1, 
            order: 1,
			containerId: 0,
            icon: "icon-grab",
            subtitle: "Manobra de combate",
            description: "Você tenta agarrar uma criatura",
            reference: "pg. 220.",
            bullets: [
                "Faça um teste de manobra (um teste de ataque corpo a corpo) oposto com a criatura",
                "Você usa uma mão para segurar uma criatura. Uma criatura agarrada fica <i>desprevenida</i> e <i>imóvel</i>, sofre -2 nos testes de ataque e só pode atacar com armas leves",
                "A criatura pode se soltar com uma ação padrão, vencendo um teste de manobra oposto",
                "Você pode atacar uma criatura agarrada com sua mão livre, se preferir pode substituir um ataque por um novo teste de manobra contra a criatura. Se vencer, causa dano de impacto igual a um ataque desarmado.",
                "Você pode soltá-la com uma ação livre"
            ]
        },
        {
            title: "Derrubar",
			id: 2, 
            order: 2,
			containerId: 0,
            icon: "icon-sprint",
            subtitle: "Manobra de combate",
            description: "Empurra o alvo",
            reference: "pg. 220.",
            bullets: [
                "Faça um teste de manobra (um teste de ataque corpo a corpo) oposto com a criatura",
                "Você deixa o alvo caído. Esta queda não causa dano",
                "Se você vencer o teste oposto por 5 ou mais. derruba o oponente em um quadrado em uma direção a sua escolha",
                "Se a criatura for jogada além de um parapeito ou precipício, ela pode fazer um teste de Reflexos (CD 20) para se agarrar em uma beirada"
            ]
        },
        {
            title: "Desarmar",
			id: 3, 
            order: 3,
			containerId: 0,
            icon: "icon-fall-down",
            subtitle: "Manobra de combate",
            description: "Você derruba um item que a criatura esteja segurando",
            reference: "pg. 220.",
            bullets: [
                "Faça um teste de manobra (um teste de ataque corpo a corpo) oposto com a criatura",
                "Se vencer, o item cai no mesmo lugar que a criatura está.",
                "Se verncer por 5 pontos ou mais, derruba o item um quadrado a mais em uma direção a sua escolha."
            ]
        },
        {
            title: "Empurrar",
			id: 4, 
            order: 4,
			containerId: 0,
            icon: "icon-hand",
            subtitle: "Manobra de combate",
            description: "Você empurra a criatura em 1,5m (1 quadrado)",
            reference: "pg. 220.",
            bullets: [
                "Faça um teste de manobra (um teste de ataque corpo a corpo) oposto com a criatura",
                "Para cada 5 pontos de diferença você empurra o alvo mais 1,5m (1 quadrado).",
                "Você pode gastar uma ação de movimento para avançãr junto com a criatura (até o limite do seu deslocamento)",
            ]
        },
        {
            title: "Quebrar",
			id: 5, 
            order: 5,
			containerId: 0,
            icon: "icon-sword-break",
            subtitle: "Manobra de combate",
            description: "Você atinge um item que a criatura esteja segurando",
            reference: "pg. 220.",
            bullets: [
                "Veja regras de quebrar objetos pg. 225.",
            ]
        },
        {
            title: "Atropelar",
			id: 6, 
            order: 6,
			containerId: 0,
            icon: "icon-sprint",
            subtitle: "Avançar o inimigo",
            description: "Você usa uma ação padrão durante um movimento para avançar pelo espaço ocupado por uma criatura.",
            reference: "pg. 220.",
            bullets: [
                "Normalmente, você não pode fazer um ação padrão durante um movimento; isto é uma exceção",
                "A criatura pode lhe dar passagem ou resistir. Se der passagem, você avança pelo espaço dela.",
                "Se resistir faça um teste de manobra oposto; se vencer deixa a criatura caída e continua seu avanço. Se o alvo vencer, continua de pé e detém seu avanço",
                "Atropelar é uma ação livre durante uma <i>investida</i>",
            ]
        },
        {
            title: "Fintar",
			id: 7, 
            order: 7,
			containerId: 0,
            icon: "icon-journey",
            subtitle: "Engana o inimigo",
            description: "",
            reference: "PHB, pg. 195.",
            bullets: [
                "Faça um teste de Enganação oposto ao teste de Reflexos de uma criatura em alcance curto",
                "Se você passar, ela fica <i>desprevenida</i> contra seu próximo ataque, mas apenas até o fim do seu próximo turno."
            ]
        },
        {
            title: "Lançar magia",
			id: 8, 
            order: 8,
			containerId: 0,
            icon: "icon-magic-swirl",
            subtitle: "Execução de 1 ação padrão",
            description: "A maioria das magias exige uma ação padrão para ser executada",
            reference: "pg. 220.",
            bullets: [
            ]
        },
        {
            title: "Preparar",
			id: 9, 
            order: 9,
			containerId: 0,
            icon: "icon-stopwatch",
            subtitle: "Prepara uma ação",
            description: "Você prepara uma ação (livre, movimento ou padrão) para realizar mais tarde após o seu turno, mas antes de seu turno na próxima rodada",
            reference: "pg. 220.",
            bullets: [
                "Diga a ação que vai fazer e em quais circunstâncias (ex: 'disparar minha besta na primeira criatura que passar pela porta')",
                "A qualquer momento antes de seu próximo turno, você faz a ação preparada como uma reação a essas circunstâncias.",
                "Se você ainda não tiver realizado sua ação preparada, não pode mais realizá-la (embora possa preparar a mesma ação de novo)",
                "Pelo resto do combate, sua iniciativa fica imediatamente acima da qual você fez sua ação preparada"
            ]
        },
        {
            title: "Usar habilidade",
			id: 10, 
            order: 10,
			containerId: 0,
            icon: "icon-embrassed-energy",
            subtitle: "Habilidades raciais ou de classe",
            description: "Algumas habilidades exigem uma ação padrão para serem usadas",
            reference: "pg. 220.",
            bullets: [
            ]
        },
        {
            title: "Usar Item Mágico",
			id: 11, 
            order: 11,
			containerId: 0,
            icon: "icon-aura",
            subtitle: "Poções ou itens",
            description: "Poções e alguns itens mágicos exigem uma ação padrão para serem usados",
            reference: "pg. 220.",
            bullets: [
            ]
        },
        {
            title: "Movimentar",
			id: 12, 
            order: 12,
			containerId: 1,
            icon: "icon-run",
            subtitle: "Percorrer deslocamento",
            description: "Percorre uma distância igual ao seu deslocamento",
            reference: "pg. 224.",
            bullets: [
                "Se estiver carregando carga pesada, seu deslocamento diminui em 3m",
                "Você pode se mover livremente através de um espaço ocupado por um aliado mas não de um inimigo, a menos que ele esteja indefeso ou seja três categorias de tamanho maior ou menor que você.",
                "Você pode atravessar um espaço ocupado usando a perícia <i>Acrobacia</i> ou a manobra <i>Atropelar</i>",
                "Mover-se em diagonal custa o dobro, ou seja, 1,5m na diagonal conta como 3m"
            ]
        },
        {
            title: "Nadar ou Voar",
			id: 13, 
            order: 13,
			containerId: 1,
            icon: "icon-at-sea",
            subtitle: "Movimento especial",
            description: "Voando ou nadando, movimentar-se na vertical custa o dobro na subida (ou o triplo em diagonais), e metade na descida (ou o normal em diagonais)",
            reference: "pg. 224.",
            bullets: [

            ]
        },
        {
            title: "Terreno Difícil",
			id: 14, 
            order: 14,
			containerId: 1,
            icon: "icon-stone-pile",
            subtitle: "Movimento especial",
            description: "Mover-se em terreno difícil custa o dobro.",
            reference: "pg. 224.",
            bullets: [

            ]
        },
        {
            title: "Levantar-se",
			id: 15, 
            order: 15,
			containerId: 1,
            icon: "icon-strong",
            subtitle: "Levantar do chão",
            description: "Levantar-se exige uma ação de movimento",
            reference: "pg. 220.",
            bullets: [
            ]
        },
        {
            title: "Manipular Item",
			id: 16, 
            order: 16,
			containerId: 1,
            icon: "icon-snatch",
            subtitle: "Manipular um item qualquer",
            description: "Muitas vezes, manipular um item exige uma ação de movimento. Ex: Pegar um objeto em sua mochila, abrir ou fechar uma porta ou atirar uma corda para ajudar alguém",
            reference: "pg. 220.",
            bullets: [
                ]
        },
        {
            title: "Sacar ou guardar arma",
			id: 17, 
            order: 17,
			containerId: 1,
            icon: "icon-spinning-sword",
            subtitle: "Manipular arma",
            description: "Se você tiver o poder Saque Rápido, pode sacar ou guardar itens como uma ação livre",
            reference: "pg. 220.",
            bullets: [
                ]
        },
        {
            title: "Corrida",
			id: 18, 
            order: 18,
			containerId: 2,
            icon: "icon-sprint",
            subtitle: "Correr mais que deslocamento",
            description: "Se você tiver o poder Saque Rápido, pode sacar ou guardar itens como uma ação livre",
            reference: "pg. 221.",
            bullets: [
                "Faça um teste de <i>Atletismo</i>. Você avança o resultado do teste x 1 quadrado (1,5m)",
                "Você recebe um modificador de +/- 2 para cada 1,5m de deslocamento acima ou abaixo de 9m que possua.",
                "Você só pode correr em linha reta e não pode correr em terreno difícil.",
                "Você pode manter a corrida por 1+CON rodadas, após isso deve fazer um teste de <i>Fortitude</i> (CD 15 + 1 por teste anterior). Se falhar fica fatigado",
                ]
        },
        {
            title: "Golpe de misericórdia",
			id: 19, 
            order: 19,
			containerId: 2,
            icon: "icon-dripping-sword",
            subtitle: "Golpe letal num inimigo",
            description: "Você desfere um golpe letal em um oponente adjacente e indefeso",
            reference: "pg. 221.",
            bullets: [
                "Um golpe de misericórdia é um acerto crítico automático.",
                "Além de sofrer dano, a vítima tem uma chance de morrer instantaneamente de 25% (1 em 1d4) para NPCs importantes e 75% para NPCs comuns",
                ]
        },
        {
            title: "Investida",
			id: 20, 
            order: 20,
			containerId: 2,
            icon: "icon-sprint",
            subtitle: "Avançar no inimigo",
            description: "Avança até o dobro do seu deslocamento (mínimo de 3m) em linha reta e no fim do movimento, faz um ataque corpo a corpo",
            reference: "pg. 221.",
            bullets: [
                "Você recebe +2 no teste de ataque e -2 no teste de Defesa até o seu próximo turno.",
                "Você não pode realizar uma investida em terreno difícil",
                "Durante uma investida você pode realizar a manobra atropelar como uma ação livre (mas não pode atropelar e atacar o mesmo alvo).",
                ]
        },
        {
            title: "Lançar uma magia",
			id: 21, 
            order: 21,
			containerId: 2,
            icon: "icon-magic-swirl",
            subtitle: "Execução de 1 ação completa",
            description: "Algumas magias podem usar uma (ou mais) ações completas",
            reference: "pg. 221.",
            bullets: [
                ]
        },
        {
            title: "Atrasar",
			id: 22, 
            order: 22,
			containerId: 3,
            icon: "icon-sands-of-time",
            subtitle: "Agir mais tarde",
            description: "Reduz sua iniciativa voluntariamente até -10 menos seu bonus de Iniciativa",
            reference: "pg. 221.",
            bullets: [
                "Você pode especificar sua iniciativa, ou esperar até algum momento e então agir, fixando sua nova Iniciativa neste ponto"
                ]
        },
        {
            title: "Falar",
			id: 23, 
            order: 23,
			containerId: 3,
            icon: "icon-telepathy",
            subtitle: "Conversar durante combate",
            description: "O mestre pode limitar o quanto você pode falar.",
            reference: "pg. 222.",
            bullets: [
                ]
        },
        {
            title: "Jogar-se no chão",
			id: 24, 
            order: 24,
			containerId: 3,
            icon: "icon-crawl",
            subtitle: "Fica caído",
            description: "Você recebe os benefícios e penalidades por estar caído.",
            reference: "pg. 222.",
            bullets: [
                ]
        },
        {
            title: "Largar um item",
			id: 25, 
            order: 25,
			containerId: 3,
            icon: "icon-fall-down",
            subtitle: "Largar item no chão",
            description: "Deixar um item cair com a intenção de acertar alguém é uma ação padrão. E deixar cair com a intenção que outra pessoa agarre é uma ação de movimento",
            reference: "pg. 222.",
            bullets: [
                ]
        },
        {
            title: "Abalado",
			id: 26, 
            order: 26,
			containerId: 4,
            icon: "icon-six-eyes",
            subtitle: "Condição de medo",
            description: "-2 em testes de perícia. Se ficar abalado novamente, em vez disso fica apavorado",
            reference: "pg. 393.",
            bullets: [
                
            ]
        },
        {
            title: "Agarrado",
			id: 27, 
            order: 27,
			containerId: 4,
            icon: "icon-manacles",
            subtitle: "Condição de paralisia",
            description: "O personagem fica desprevenido e imóvel, sofre -2 em testes de ataque e só pode atacar com armas leves.",
            reference: "pg. 393.",
            bullets: [
                "Um personagem que atacar um alvo envolvido no agarramento tem 50% de chance de acertar o alvo errado"
                ]
        },
        {
            title: "Alquebrado",
			id: 28, 
            order: 28,
			containerId: 4,
            icon: "icon-poison-gas",
            subtitle: "Condição mental",
            description: "O custo em pontos de mana das habilidades e magias do personagem aumenta em +1",
            reference: "pg. 393.",
            bullets: [
                ]
        },
        {
            title: "Apavorado",
			id: 29, 
            order: 29,
			containerId: 4,
            icon: "icon-eyeball",
            subtitle: "Condição de medo",
            description: "-5 em testes de perícia e deve fugir da fonte do medo da maneira mais eficiente possível.",
            reference: "pg. 393.",
            bullets: [
                ]
        },
        {
            title: "Atordoado",
			id: 30, 
            order: 30,
			containerId: 4,
            icon: "icon-internal-injury",
            subtitle: "Condição mental",
            description: "O personagem fica desprevenido e não pode fazer ações",
            reference: "pg. 393.",
            bullets: [
                ]
        },
        {
            title: "Caído",
			id: 31, 
            order: 31,
			containerId: 4,
            icon: "icon-crawl",
            subtitle: "Deitado no chão",
            description: "",
            reference: "pg. 393.",
            bullets: [
                "-5 em ataques corpo a corpo e seu deslocamento é reduzido a 1,5m",
                "-5 de Defesa em ataques corpo a corpo e +5 de Defesa em ataques à Distância"
                ]
        },
        {
            title: "Cego",
			id: 32, 
            order: 32,
			containerId: 4,
            icon: "icon-one-eyed",
            subtitle: "Condição de sentidos",
            description: "Personagem fica desprevenido e lento.",
            reference: "pg. 393.",
            bullets: [
                "Não pode fazer testes de <i>Percepção</i>.",
                "Para você, todos inimigos recebem camuflagem total",
                "-5 em testes de <i>Força</i> ou <i>Destreza</i>."
                ]
        },
        {
            title: "Confuso",
			id: 33, 
            order: 33,
			containerId: 4,
            icon: "icon-worried-eyes",
            subtitle: "Condição mental",
            description: "Personagem comporta-se de modo aleatório. Role 1d6:",
            reference: "pg. 393.",
            bullets: [
                "1) Movimenta-se em uma direção escolhida por uma rolagem de 1d8",
                "2-3) Não pode fazer ações, exceto reações, e fica balbuciando incoerentemente",
                "4-5) Usa a arma que estiver empunhando para atacar a criatura mais próxima, ou a si mesmo se estiver sozinho (nesse caso role apenas o dano)",
                "6) A condição termina"
                ]
        },
        {
            title: "Debilitado",
			id: 34, 
            order: 34,
			containerId: 4,
            icon: "icon-sleepy",
            subtitle: "",
            description: "-5 em testes de atributos físicos (FOR, DES, CON) e perícias baseadas nesses atributos. ",
            reference: "pg. 393.",
            bullets: [
                "Se ficar debilitado novamente, fica <i>inconsciente</i>"
                ]
        },
        {
            title: "Desprevinido",
			id: 35, 
            order: 35,
			containerId: 4,
            icon: "icon-surprised",
            subtitle: "",
            description: "-5 em Defesa e Reflexos.",
            reference: "pg. 393.",
            bullets: [
                "Você fica desprevinido contra inimigos que não possa ver."
                ]
        },
        {
            title: "Doente",
			id: 36, 
            order: 36,
			containerId: 4,
            icon: "icon-sleepy",
            subtitle: "",
            description: "Sob efeito de uma doença",
            reference: "pg. 393.",
            bullets: [
                ]
        },
        {
            title: "Em Chamas",
			id: 37, 
            order: 37,
			containerId: 4,
            icon: "icon-small-fire",
            subtitle: "",
            description: "O personagem está pegando fogo",
            reference: "pg. 393.",
            bullets: [
                "No início do turno, sofre 1d6 de dano",
                "Pode gastar uma ação padrão para apagar o fogo",
                "Submergir em água pode apagar as chamas"
                ]
        },
        {
            title: "Enjoado",
			id: 38, 
            order: 38,
			containerId: 4,
            icon: "icon-crawl",
            subtitle: "",
            description: "Só pode realizar uma ação padrão ou de movimento (não ambas)",
            reference: "pg. 393.",
            bullets: [
                "Pode realizar uma investida, mas avançando no máximo seu deslocamento (e não o dobro)"
                ]
        },
        {
            title: "Enredado",
			id: 39, 
            order: 39,
			containerId: 4,
            icon: "icon-web-spit",
            subtitle: "Condição de paralisia",
            description: "O personagem fica lento, vulnerável e sofre -2 em testes de ataque.",
            reference: "pg. 393.",
            bullets: [
                ]
        },
        {
            title: "Envenenado",
			id: 40, 
            order: 40,
			containerId: 4,
            icon: "icon-poison-bottle",
            subtitle: "",
            description: "O efeito varia de acordo com o veneno",
            reference: "pg. 393.",
            bullets: [
                ]
        },
        {
            title: "Esmorecido",
			id: 41, 
            order: 41,
			containerId: 4,
            icon: "icon-sleepy",
            subtitle: "Condição mental",
            description: "-5 em testes de atributos mentais (INT, SAB, CAR) e de perícias baseadas nesses atributos.",
            reference: "pg. 393.",
            bullets: [
                ]
        },
        {
            title: "Exausto",
			id: 42, 
            order: 42,
			containerId: 4,
            icon: "icon-crawl",
            subtitle: "Condição de fatiga",
            description: "Personagem fica debilitado, lento e vulnerável",
            reference: "pg. 393.",
            bullets: [
                "Se ficar exausto novamente, em vez disso fica <i>inconsciente</i>"
                ]
        },
        {
            title: "Fascinado",
			id: 43, 
            order: 43,
			containerId: 4,
            icon: "icon-crystal-eye",
            subtitle: "Condição mental",
            description: "-5 em Percepção e não pode fazer ações.",
            reference: "pg. 393.",
            bullets: [
                "Qualquer ação hostil contra o personagem anula esta condição.",
                "Outro personagem pode gastar uma ação padrão para tirá-la desse estado"
                ]
        },
        {
            title: "Fatigado",
			id: 44, 
            order: 44,
			containerId: 4,
            icon: "icon-sleepy",
            subtitle: "Condição de fatiga",
            description: "Personagem fica fraco e vulnerável",
            reference: "pg. 393.",
            bullets: [
                "Se ficar fatigado novamente, em vez disso fica <i>exausto</i>"
                ]
        },
        {
            title: "Fraco",
			id: 45, 
            order: 45,
			containerId: 4,
            icon: "icon-crawl",
            subtitle: "",
            description: "-2 em atributos físicos (FOR, DES, CON) e perícias baseadas nesses atributos",
            reference: "pg. 393.",
            bullets: [
                "Se ficar fraco novamente, em vez disso fica <i>debilitado</i>"
                ]
        },
        {
            title: "Frustrado",
			id: 46, 
            order: 46,
			containerId: 4,
            icon: "icon-worried-eyes",
            subtitle: "Condição mental",
            description: "-2 em atributos mentais (INT, SAB, CAR) e perícias baseadas nesses atributos",
            reference: "pg. 393.",
            bullets: [
                "Se ficar frustrado novamente, em vez disso fica <i>esmorecido</i>"
                ]
        },
        {
            title: "Imóvel",
			id: 47, 
            order: 47,
			containerId: 4,
            icon: "icon-internal-injury",
            subtitle: "Condição de paralisia",
            description: "Todas as formas de deslocamento são reduzidas a 0",
            reference: "pg. 393.",
            bullets: [
                ]
        },
        {
            title: "Inconsciente",
			id: 48, 
            order: 48,
			containerId: 4,
            icon: "icon-coma",
            subtitle: "",
            description: "Personagem fica indefeso e não pode agir",
            reference: "pg. 393.",
            bullets: [
                "Acordar um personagem inconsciente gasta uma ação padrão"
                ]
        },
        {
            title: "Indefeso",
			id: 49, 
            order: 49,
			containerId: 4,
            icon: "icon-puppet",
            subtitle: "",
            description: "Personagem fica desprevinido e sofre -10 na Defesa",
            reference: "pg. 394.",
            bullets: [
                "Falha automaticamente em testes de <i>Reflexos</i> e pode sofrer golpes de misericórdia"
                ]
        },
        {
            title: "Lento",
			id: 50, 
            order: 50,
			containerId: 4,
            icon: "icon-crawl",
            subtitle: "Condição de paralisia",
            description: "Deslocamento é reduzido à metade",
            reference: "pg. 394.",
            bullets: [
                "Personagem não pode fazer investidas"
                ]
        },
        {
            title: "Ofuscado",
			id: 51, 
            order: 51,
			containerId: 4,
            icon: "icon-poison-cloud",
            subtitle: "Condição de sentidos",
            description: "-2 em testes de ataque e de Percepção",
            reference: "pg. 394.",
            bullets: [
                ]
        },
        {
            title: "Paralisado",
			id: 52, 
            order: 52,
			containerId: 4,
            icon: "icon-internal-injury",
            subtitle: "Condição de paralisia",
            description: "O personagem fica imovel e indefeso e só pode realizar ações mentais",
            reference: "pg. 394.",
            bullets: [
                ]
        },
        {
            title: "Pasmo",
			id: 53, 
            order: 53,
			containerId: 4,
            icon: "icon-eyeball",
            subtitle: "Condição mental",
            description: "O personagem não pode fazer ações, exceto reações",
            reference: "pg. 394.",
            bullets: [
                ]
        },
        {
            title: "Petrificado",
			id: 54, 
            order: 54,
			containerId: 4,
            icon: "icon-stone-sphere",
            subtitle: "",
            description: "O personagem fica inconsciente e recebe RD 8",
            reference: "pg. 394.",
            bullets: [
                ]
        },
        {
            title: "Sangrando",
			id: 55, 
            order: 55,
			containerId: 4,
            icon: "icon-bloody-stash",
            subtitle: "",
            description: "",
            reference: "pg. 394.",
            bullets: [
                "No início do seu turno o personagem deve fazer um teste de Constituição (CD 15)",
                "Se passar, remove a condição. Se falhar sofre 1d6 dano"
                ]
        },
        {
            title: "Surdo",
			id: 56, 
            order: 56,
			containerId: 4,
            icon: "icon-human-ear",
            subtitle: "Condição de sentidos",
            description: "",
            reference: "pg. 394.",
            bullets: [
                "Personagem não pode fazer testes de Percepção para ouvir",
                "Sofre -5 em Iniciativa",
                "Considerado em condição ruim para lançar magias"
                ]
        },
        {
            title: "Surpreendido",
			id: 57, 
            order: 57,
			containerId: 4,
            icon: "icon-surprised",
            subtitle: "",
            description: "O personagem fica desprevenido e não pode fazer ações, exceto reações",
            reference: "pg. 394.",
            bullets: [
                ]
        },
        {
            title: "Vulnerável",
			id: 58, 
            order: 58,
			containerId: 4,
            icon: "icon-internal-injury",
            subtitle: "",
            description: "-2 na Defesa",
            reference: "pg. 394.",
            bullets: [
                ]
        }
    ];
