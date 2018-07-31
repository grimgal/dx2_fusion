/*/////////////////////////////////////////////////
Dx2 Devil Fusion Emulator
Author: Robin Chiu
E-mail: oceanxdds@gmail.com
Github: https://github.com/oceanxdds/dx2_fusion
Publish: https://oceanxdds.github.io/dx2_fusion/
//////////////////////////////////////////////////*/

// Modified by Dissi

const ddd_stable = [
    {
        name:'Herald',
        name_tw:'Herald',
        name_en:'Herald',
        formulas:[
            ['Avatar','Megami'],
            ['Avatar','Deity'],
            ['Holy','Megami'],
            ['Dragon','Megami'],    //180713 add
            ['Divine','Megami'],
            ['Divine','Holy'],
            ['Fallen','Holy']
        ],
        devils:[
            {   name:'Metatron',       name_tw:'梅塔特隆', name_en:'Metatron',   rarity:5,   grade:99,  icon:'daitensi_metatoron.png',  skills:['Holy Wrath','Infinite Chakra','Fire of Sinai'], skill4:['Enduring Soul','Mahamadyne','Salvation','Mana Gain','Repel Elec'], skill5:['','Spirit Drain','Mapoisma','Maziodyne','Maragidyne'], elements:['','Resist','Resist','Resist','Resist','Null',''], type:"Attack"     },
            {   name:'Michael',        name_tw:'米迦勒', name_en:'Michael',      rarity:5,    grade:90, icon:'daitensi_mikaeru.png', skills:["Life Aid","Soul Judgement","Megidolaon"], skill4:["Endure","Thunderclap","Mediarahan","Hellish Mask","Repel Dark"], skill5:['','Titanomachia','Resist Fire','Ziodyne','Hurricane Slash'], elements:["","","Null","Null","","Repel","Weak"], type:"Attack"     },
            {   name:'Mastema',        name_tw:'莫塞瑪特', name_en:'Mastema',     rarity:5,    grade:83, icon:'daitensi_mansemato.png', skills:["Judgement Light","Bind Voice","Ordeal of Hatred"], skill4:["Mana Gain","Ice Age","Makajamaon","Light Amp","Repel Ice"], skill5:['','Deadly Wind','Madness','Hamadyne','Resist Elec'], elements:["","Weak","Null","","Repel","Repel",""], type:"Attack"     },
            {   name:'Azrael',      name_tw:'阿斯萊爾',    name_en:'Azrael', rarity:4,    grade:67, icon:'daitensi_azuraeru.png', skills:["Tetrakarn","Evil Gaze","Agidyne"], skill4:["Makarakarn","Mudodyne","Curse","Makara Shift","Null Dark"], skill5:["","Charm Bite","Dekunda","Wild Instinct","Judgement Light"], elements:["Resist","Resist","Weak","","","Repel","Resist"], type:"Support"            },
            {   name:'Sandalphon',   name_tw:'聖達芬',     name_en:'Sandalphon', rarity:4,           grade:61, icon:'daitensi_sandaruhuon.png', skills:["Hamadyne","Zandyne","Auto-Sukukaja"], skill4:["Amrita","Mahamaon","Samarecarm","Wild Instinct","Resist Force"],skill5:["","Meposumudi","Counter","Rakunda","Megaton Press"], elements:["Resist","","","Resist","","Repel","Null"], type:"Attack"         },
            {   name:'Lailah',          name_tw:'萊拉',    name_en:'Lailah', rarity:3,           grade:43, icon:'daitensi_raira.png', skills:["Mediara","Light Boost","Mahamaon"], skill4:["Makajamaon","Hamadyne","Recarm","Life Aid","Resist Elec"],skill5:["","Zan","Mazan","Heat Wave","Bufu"], elements:["","","","Weak","Resist","Null","Weak"], type:"Attack"          }
        ]
    },
    {
        name:'Megami',
        name_tw:'Megami',
        name_en:'Megami',
        formulas:[
            ['Avian','Herald'],    //180419 add
            ['Deity','Avian'],      //180419 add
            ['Holy','Herald'],
            ['Holy','Avatar'],
            ['Genma','Avian'],      //180419 add
            ['Dragon','Divine'],      //180713 add
            ['Lady','Deity'],
            ['Lady','Genma'],
            ['Divine','Herald'],
            ['Fallen','Divine'],
            ['Femme','Herald'],
            ['Femme','Avatar'],
            ['Femme','Lady'],
            ['Femme','Fairy']
        ],
        devils:[
            {                name:'Lakshmi',         name_tw:'吉祥天', name_en:'Lakshimi',       rarity:5,                grade:85, icon:'megami_rakusyumi.png', skills:["Diarahan","Twister","Lotus Dance"], skill4:["Mana Gain","Deadly Wind","Makarakarn","Insanity","Null Force"], skill5:["","Ziodyne","Auto-Rakunda","Null Weak","Evil Gaze"], elements:["","","","","Weak","Resist","Null"], type:"Support"            },
            {                name:'Ishtar',        name_tw:'伊絲塔', name_en:'Ishtar',       rarity:5,                grade:82, icon:'megami_isyutaru.png', skills:["Mahamaon","Diarahan","Judgement"], skill4:["Samarecarm","Thunderclap","Concentrate","Tetra Shift","Null Force"], skill5:["","God's Hand","Dmg Panel V II","Dekunda","Agilao"],elements:["","","","Null","Weak","Null","Weak"], type:"Recovery"            },
            {                name:'Sarasvati',    name_tw:'妙音天女', name_en:'Sarasvati',           rarity:4,                grade:69, icon:'megami_sarasuvatei.png', skills:["Mabufula","Barrier","Silent Prayer"], skill4:["Bufudyne","Glacial Blast","Mediarama","Back Attack","Repel Ice"],skill5:["","Mecharmdi","Resist Curse","Savage Glee","Evil Gaze"], elements:["","Weak","Null","","","","Weak"], type:"Support"            },
            {                name:'Pallas Athena',      name_tw:'帕拉斯雅典娜', name_en:'Pallas Athena',         rarity:4,                grade:62, icon:'megami_parasuatena.png', skills:["Resist Force","Hurricane Slash","Holy Wrath"], skill4:["Makarakarn","Mortal Jihad","Diarahan","Mana Aid","Null Fire"],skill5:["","Tempest Slash","Silent Prayer","Toxic Sting","Twister"], elements:["Resist","","","","","Null","Weak"], type:"Attack"            },
            {                name:'Scathach',          name_tw:'斯卡哈', name_en:'Scathach',     rarity:3,                grade:50, icon:'megami_sukaaha.png', skills:["Zanma","Hades Blast","Wind Breath"], skill4:["Life Gain","Madness Nails","Diarama","Hellish Mask","Resist Elec"],skill5:["","Bufu","Counter","Fast Recovery","Rampage"], elements:["","","","Weak","Null","Resist",""], type:"Attack"            },
            {                name:'Arianrhod',     name_tw:'阿麗安蘿德', name_en:'Arianrhod',          rarity:3,                grade:44, icon:'megami_arianrodo.png', skills:["Hamaon","Media","Berserker God"], skill4:["Diara","Hurricane Slash","Lydia Break","Great Aim","Null Ice"],skill5:["","Mazio","Charmdi","Vitality Amp I","Closedi"], elements:["Resist","","","","","Resist",""], type:"Attack"            },
            {                name:'Hathor',          name_tw:'哈索爾', name_en:'Hathor',     rarity:2,                grade:27, icon:'megami_htohoru.png', skills:["Amrita","Zan","Zionga"], skill4:["Meposumudi","Mazio","Mecharmdi","Mana Bonus","Null Force"], skill5:["","Dia","Agility Amp I","Charmdi","Meweakdi"],elements:["Weak","","Resist","","Resist","Resist",""], type:"Recovery"            }
        ]
    },
    {
        name:'Avian',              //180419 add
        name_tw:'Avian',
        name_en:'Avian',
        formulas:[
            ['Avatar','Herald'],
            ['Divine','Avatar'],
            ['Yoma','Megami'],
            ['Beast','Avatar'],
            ['Fairy','Snake'],
            ['Fairy','Beast'],
            ['Femme','Holy'],
            ['Night','Brute'],
            ['Vile','Night'],
            ['Wilder','Yoma'],
            ['Wilder','Snake'],
            ['Tyrant','Yoma']
        ],
        devils:[
            {                name:'Garuda',         name_tw:'迦樓羅', name_en:'Garuda',      rarity:5,                grade:80, icon:'reityou_garuda.png', skills:["Zandyne","Auto-Rakunda","Vahana"], skill4:["Magic Amp III","Maragidyne","Fog Breath","Berserker","破魔無效"], skill5:["","Mamakajam","Amrita","Fire Boost","Agilao"], elements:["","Repel","Weak","","Null","Resist",""], type:"Attack"            },
            {                name:'Yatagarasu',         name_tw:'八咫烏', name_en:'Yatagarasu',      rarity:4,                grade:66, icon:'reityou_yatagarasu.png', skills:["Hades Blast","Auto-Sukunda","Speedster"], skill4:["Phys Boost","Mortal Jihad","Sukukaja","Evade","Resist Phys"], skill5:["","Maragion","Mana Bonus","Wind Breath","Resist Bind"], elements:["","Null","Weak","","","Resist",""], type:"Support"            },
            {                name:'Feng Huang',         name_tw:'朱雀', name_en:'Feng Huang',      rarity:3,                grade:53, icon:'reityou_suzaku.png', skills:["Agilao","Auto-Tarunda","Mediarama"], skill4:["Void Dark Zones","Mahama","Bind Voice","Dmg Panel V II","Resist Phys"], skill5:['','Bloody Glee','Closedi','Meparaladi','Zio'], elements:["Weak","Null","Weak","","","",""], type:"Recovery"            },
            {                name:'Jatayu',         name_tw:'佳塔由', name_en:'Jatayu',      rarity:3,                grade:44, icon:'reityou_jatayu.png', skills:["Sukukaja","Auto-Sukukaja","Dekaja"], skill4:["Sukunda","Darkbound","Recarm","Wild Instinct","Resist Elec"],skill5:["","Mazan","Madness","Meposumudi","Cursedi"], elements:["","Resist","","Weak","Drain","Null","Weak"], type:"Support"            },
            {                name:'Sparna',         name_tw:'金翅鳥', name_en:'Sparna',      rarity:2,                grade:28, icon:'reityou_suparuna.png', skills:["Zio","Vajra Blast","Rakukaja"], skill4:["Diara","Spirit Drain","Tarunda","Hellish Mask","Null Elec"],skill5:["","Closedi","Good Aim","Mudo","Lunge"], elements:["","","","Resist","","Resist","Weak"], type:"Attack"            },
            {                name:'Hamsa',         name_tw:'漢薩', name_en:'Hamsa',      rarity:2,                grade:24, icon:'reityou_hansa.png', skills:["Hama","Zionga","Sukukaja"], skill4:["Makajam","Mahama","Media","Speedster","Resist Ice"],skill5:["","Dia","Zio","Posumudi","Mow Down"], elements:["","","","Resist","","","Weak"], type:"Support"            }
        ]
    },
    {
        name:'Deity',
        name_tw:'Deity',
        name_en:'Deity',
        formulas:[
            ['Megami','Herald'],
            ['Avian','Megami'],      //180419 add
            //['Avatar','Herald'],     //180419 remove
            ['Fury','Megami'],
            ['Lady','Herald'],
            ['Beast','Herald'],
            ['Fallen','Beast'],
            ['Brute','Kishin'],
            ['Night','Fallen'],
            ['Vile','Avatar'],
            ['Vile','Beast']
        ],
        devils:[
            {                name:'Vishnu',      name_tw:'毘濕奴', name_en:'Vishnu',         rarity:5,                grade:97, icon:'majin_visyunu.png', skills:["Bufudyne","Holy Wrath","Avatar"], skill4:["Mudodyne","Megidolaon","Prayer","Null Weak","Repel Dark"], skill5:["","Mortal Jihad","Resist Mute","Wind Breath","Hamaon"],elements:["","Weak","Drain","","","Null","Null"], type:"Attack"            },
            {                name:'Amaterasu',      name_tw:'天照', name_en:'Amaterasu',         rarity:5,                grade:82, icon:'majin_amaterasu.png', skills:["Maragion","Tarunda","Tenson Kourin"], skill4:["Auto-Sukukaja","Trisagion","Mediarahan","Magic Amp III","Null Elec"], skill5:["","Juon","Null Charm","Rakukaja","Sukunda"],elements:["","Repel","","Weak","","Resist",""], type:"Support"            },
            {                name:'Odin',      name_tw:'奧丁', name_en:'Odin',         rarity:4,                grade:73, icon:'majin_odein.png', skills:["Resist Ice","Bolt Storm","Gungnir"], skill4:["Merciless Blow","Megaton Raid","Tarukaja","Great Aim","Null Dark"], skill5:["","Evil Gaze","Maragi","Bufula","Posumudi"],elements:["","","","Repel","Weak","Resist","Resist"], type:"Attack"            },
            {                name:'Prometheus',    name_tw:'普羅米修斯', name_en:'Prometheus',           rarity:4,                grade:67, icon:'majin_purometeusu.png', skills:["Fire Boost","Makara Shift","Agidyne"], skill4:["Vitality Amp III","Maragidyne","Recarmdra","Infinite Chakra","Drain Fire"], skill5:["","Resist Elec","Mazanma","Madness","Resist Poison"],elements:["","Null","Weak","","","Resist",""], type:"Attack"            },
            {                name:'Mitra',         name_tw:'密特拉', name_en:'Mitra',      rarity:3,                grade:55, icon:'majin_mitora.png', skills:["Maju","Barrier Break","Evil Gaze"], skill4:["Megido","Mahamaon","Fog Breath","Insanity","Resist Force"], skill5:["","Media","Dia","Mazio","Vitality Amp I"],elements:["Repel","","Weak","","","Resist","Resist"], type:"Support"            },
            {                name:'Horus',         name_tw:'荷魯斯', name_en:'Horus',      rarity:3,                grade:49, icon:'majin_horusu.png', skills:["Diarama","Dekunda","Mahama"], skill4:["Mana Gain","Hamadyne","Amrita","Light Boost","Null Elec	"], skill5:["","Cursedi","Paraladi","Maragi","Cursedi"],elements:["Resist","","","","","Repel","Weak"], type:"Recovery"            }
        ]
    },
    {
        name:'Avatar',
        name_tw:'Avatar',
        name_en:'Avatar',
        formulas:[
            ['Holy','Deity'],
            ['Dragon','Avian'],    //180713 add
            ['Lady','Holy'],
            ['Snake','Genma'],
            ['Beast','Deity'],
            ['Beast','Holy'],
            ['Beast','Fury'],
            ['Night','Yoma'],
            ['Vile','Deity'],
            ['Wilder','Avian'],      //180419 add
            ['Wilder','Vile'],
            ['Foul','Holy']
        ],
        devils:[
            {                name:'Barong',         name_tw:'巴隆', name_en:'Barong',      rarity:5,                grade:84, icon:'sinjyuu_baron.png', skills:["Mazionga","Bolt Storm","Barong Dance"], skill4:["Endure","Thunder Reign","Recarmdra","Elec Amp","Null Dark"], skill5:["","Bufudyne","Mashibaboo","Vitality Amp II","Makajam"],elements:["Resist","","","Null","Weak","Null","Weak"],type:"Support"           },
            {                name:'Anubis',       name_tw:'阿努比斯', name_en:'Anubis',        rarity:4,                grade:70, icon:'sinjyuu_anubisu.png', skills:["Dark Boost","Mudodyne","Judgement Light"], skill4:["Dekunda","Purgatory","Tetrakarn","Merciless Blow","Null Dark"], skill5:["","Spirit Drain","Poisma","Dia","Agilao"],elements:["","","","","","Null","Resist"],type:"Attack"            },
            {                name:'Chimera',       name_tw:'奇美拉', name_en:'Chimera',        rarity:3,                grade:49, icon:'sinjyuu_kimaira.png', skills:["Makara Break","Zionga","Madness Nails"], skill4:["Berserker God","Mazionga","War Cry","Retaliate","Resist Force"], skill5:["","Paraladi","Mahama","Media","Fast Recovery"],elements:["","Resist","","Resist","Weak","",""],type:"Support"            },
            {                name:'Makami',         name_tw:'真神', name_en:'Makami',      rarity:3,                grade:41, icon:'sinjyuu_makami.png', skills:["Meparaladi","Null Bind","Diarama"], skill4:["Amrita","Berserker God","Samarecarm","Heal Boost","Null Elec"], skill5:["","Paraladi","Mazan","Dia","Agi"],elements:["","","","","","Resist","Weak"],type:"Recovery"            },
            {                name:'Shiisaa',       name_tw:'獅爺', name_en:'Shiisaa',        rarity:2,                grade:33, icon:'sinjyuu_sisa.png' , skills:["Shibaboo","Zan","Wind Breath"], skill4:["Binding Claw","Mazan","Barrier Break","Deadly Bondage","Resist Ice"], skill5:["","Bufu","Agi","Good Aim","Zio"],elements:["","Resist","","","Resist","Resist",""],type:"Support"           }
        ]
    },
    {
        name:'Holy',
        name_tw:'Holy',
        name_en:'Holy',
        formulas:[
            ['Avatar','Avian'],      //180419 add
            //['Fury','Avatar'],    //180713 remove
            ['Dragon','Herald'],      //180713 add
            ['Dragon','Genma'],        //180713 add
            //['Kishin','Avatar'],      //180713 remove
            ['Divine','Genma'],
            ['Yoma','Fury'],
            ['Beast','Kishin'],
            ['Fairy','Herald'],
            ['Fairy','Divine'],
            ['Fairy','Yoma'],
            ['Night','Avatar'],
            ['Night','Genma'],
            ['Wilder','Megami'],
            ['Haunt','Fairy']
        ],
        devils:[
            {                name:'Sphinx',     name_tw:'斯芬克斯', name_en:'Sphinx',          rarity:4,                grade:76, icon:'seijyuu_sufuinkusu.png', skills:["Barrier","Tetra Shift","Mahamaon"], skill4:["Mortal Jihad","Ziodyne","Mediarahan","Auto-Rakukaja","Null Ice"], skill5:["","Ju","Megaton Press","Resist Ice","Evil Gaze"],elements:["","Null","Weak","","","Repel","Weak"], type:"Support"            },
            {                name:'Sleipnir',     name_tw:'八腳天馬', name_en:'Sleipnir',          rarity:4,                grade:62, icon:'seijyuu_sureipuniru.png', skills:["Light Boost","Mahamaon","Speedster"], skill4:["Samarecarm","Hamadyne","Diarahan","Agility Amp III","Null Light"], skill5:["","ファイアブレ","Binge Eating","Twister","Mashibabooon"],elements:["","Weak","","","","Resist",""],type:"Attack"            },
            {                name:'Baihu',         name_tw:'白虎', name_en:'Baihu',      rarity:3,                grade:48, icon:'seijyuu_byako.png', skills:["Sukunda","Zionga","Elec Boost"], skill4:["Madness Nails","Mazionga","Concentrate","Intimidating Stance","Resist Phys"], skill5:["","Madness","Mabufu","Mind Break","Dmg Panel V I"],elements:["","","","Null","Weak","",""],type:"Attack"            },
            {                name:'Apis',           name_tw:'阿庇斯', name_en:'Apis',    rarity:3,                grade:44, icon:'seijyuu_apisu.png', skills:["Tarukaja","Mahama","Makara Shift"], skill4:["Mediara","Power Hit","Discord","Life Surge","Resist Dark"], skill5:["","Agi","Poismaon","Media","Closedi"],elements:["","","","","","Resist","Weak"],type:"Support"            },
            {                name:'Unicorn',       name_tw:'獨角獸', name_en:'Unicorn',        rarity:3,                grade:42, icon:'seijyuu_unicon.png', skills:["Mecharmdi","Null Charm","Mazan"], skill4:["Bufudyne","Glacial Blast","Meclosedi","Serial Killer","Resist Ice"], skill5:["","Agi","Magic Amp I","Cursedi","Mow Down"],elements:["","","","Weak","","Null","Null"],type:"Recovery"            },
            {                name:'Heqet',           name_tw:'海奎特', name_en:'Heqet',    rarity:2,                grade:27, icon:'seijyuu_heketo.png', skills:["Media","Mazio","Meposumudi"], skill4:["Zionga","Shock","Dekunda","Life Gain","Resist Fire"], skill5:["","Mecharmdi","Mow Down","Dodge","Good Aim"],elements:["","","","Resist","Weak","",""],type:"Recovery"            }
        ]
    },
    {
        name:'Genma',
        name_tw:'Genma',
        name_en:'Genma',
        formulas:[
            ['Dragon','Yoma'],    //180713 add
            ['Dragon','Haunt'],    //180713 add
            ['Deity','Megami'],
            ['Lady','Avatar'],
            ['Lady','Fury'],
            ['Yoma','Deity'],
            ['Yoma','Lady'],
            ['Fallen','Yoma'],
            ['Vile','Lady'],
            ['Vile','Kishin'],
            //['Wilder','Kishin'],    //180713 remove
            //['Wilder','Yoma'],    //180419 remove
            ['Foul','Avatar'],
            ['Foul','Fallen'],
            ['Tyrant','Avatar'],
            ['Tyrant','Lady'],
            ['Haunt','Deity']
        ],
        devils:[
            {                name:'Cu Chulainn',    name_tw:'庫夫林', name_en:'Cu Chulainn',           rarity:5,                grade:81, icon:'genma_kuhurin.png', skills:["Savage Glee","Mazandyne","Gae Bolg"], skill4:["Rebellion","Deadly Wind","Recarmdra","Force Pierce","Repel Dark"], skill5:["","God's Hand","Mortal Jihad","Force Boost","Resist Light"],elements:["Resist","","","","Null","",""],type:"Attack"            },
            {                name:'Tsukuyomi',          name_tw:'月讀', name_en:'Tsukuyomi',     rarity:4,                grade:67, icon:'genma_tukuyomi.png', skills:["Mana Bonus","Zanma","Lunar Blessing"], skill4:["Mazan","Mudoon","Recarm","Life Gain","Drain Fire"], skill5:["","Sukukaja","Fast Recovery","Hamaon","Zionga"],elements:["Weak","Null","Null","Resist","Resist","",""], type:"Support"            },
            {                name:'Hanuman',        name_tw:'哈奴曼', name_en:'Hanuman',       rarity:4,                grade:60, icon:'genma_hanuman.png', skills:["Resist Phys","Vorpal Blade","Mazanma"], skill4:["Madness Nails","Zandyne","Taunt","Retaliate","Repel Force"], skill5:["","Vitality Amp I","Evil Gaze","Judgement Light","Resist Weak"],elements:["","","","Weak","Null","",""],type:"Attack"            },
            {                name:'Kresnik',      name_tw:'克雷斯尼克', name_en:'Kresnik',         rarity:3,                grade:49, icon:'genma_kurusuniku.png', skills:["Sukunda","Null Elec","Judgement Light"], skill4:["Mana Aid","五月雨斬","リベリオ","Merciless Blow","Null Dark"], skill5:["","Vitality Amp I","Mamudo","Retaliate","Good Aim"],elements:["","","","","Weak","Null",""],type:"Attack"            },
            {                name:'Tam Lin',        name_tw:'塔姆林', name_en:'Tam Lin',       rarity:3,                grade:40, icon:'genma_tamurin.png', skills:["Fast Recovery","Wind Breath","Dark Sword"], skill4:["Hamadyne","Darkbound","Mediara","Tetra Shift","Resist Fire"], skill5:["","Mazan","Maragi","Lunge","Cleave"],elements:["","","","","","Resist","Weak"],type:"Attack"            },
            {                name:'Kurama Tengu',      name_tw:'鞍馬天狗', name_en:'Kurama Tengu',         rarity:2,                grade:27, icon:'genma_muramatengu.png', skills:["Sukukaja","Hama","Mazan"], skill4:["Mahama","Zanma","Sukunda","Dmg Panel V II","Resist Fire"], skill5:["","Media","Mabufu","Paraladi","Mecharmdi"],elements:["","","","Weak","Null","",""], type:"Attack"           }
        ]
    },
    {
        name:'Fury',
        name_tw:'Fury',
        name_en:'Fury',
        formulas:[
            ['Dragon','Avatar'],    //180713 add
            ['Dragon','Lady'],  //180713 add
            ['Dragon','Kishin'],    //180713 add
            ['Lady','Megami'],
            ['Lady','Avian'],    //180419 add
            ['Kishin','Herald'],
            ['Kishin','Deity'],
            ['Divine','Deity'],
            ['Divine','Lady'],
            ['Snake','Deity'],
            ['Fallen','Deity'],
            //['Brute','Lady'],  //180713 remove
            ['Vile','Megami'],
            ['Tyrant','Deity'],
            ['Tyrant','Fallen'],
            ['Haunt','Megami']
        ],
        devils:[
            {                name:'Shiva',           name_tw:'濕婆', name_en:'Shiva',    rarity:5,                grade:93, icon:'hakaisin_siva.png' , skills:["Serial Killer","Vorpal Blade","Pralaya"], skill4:["Null Charm","God's Hand","Rebellion","Evade","Drain Ice"], skill5:["","Desolateon","Ice Breath","Bufula","Mapoisma"],elements:["Resist","Drain","Weak","Drain","","",""],type:"Attack"           },
            {                name:'Susano-o',         name_tw:'素盞嗚尊', name_en:'Susano-o',      rarity:5,                grade:82, icon:'hakaisin_susanoo.png', skills:["Assassin","Mortal Jihad","Kusanagi"], skill4:["Strength Amp III","Deadly Wind","Charge","Merciless Blow","Drain Elec"], skill5:["","Diarahan","Hellfire","Fog Breath","Hamadyne"],elements:["Resist","Weak","","","Drain","",""],type:"Attack"            },
            {                name:'Beiji-Weng',    name_tw:'北斗星君', name_en:'Beiji-Weng',           rarity:4,                grade:69, icon:'hakaisin_hokutoseikun.png', skills:["Ice Boost","Bufudyne","Glacial Blast"], skill4:["Recarm","Mabufudyne","Barrier","Null Curse","Repel Ice"], skill5:["","Resist Light","Mazan","Bufu","Madness"],elements:["","Weak","Null","","","Resist",""],type:"Attack"            },
            {                name:'Wu Kong',  name_tw:'齊天大聖', name_en:'Wu Kong',             rarity:4,                grade:61, icon:'hakaisin_seitentaisei.png', skills:["Phys Boost","Taunt","Oni-Kagura"], skill4:["Charge","Titanomachia","Outbreak","Vitality Amp III","Null Phys"], skill5:["","Thunderclap","Hell Gaze","Maragi","Deadly Poison"],elements:["Resist","Resist","","Weak","Resist","Resist","Weak"],type:"Attack"            },
            {                name:'Ares',           name_tw:'阿瑞斯', name_en:'Ares',    rarity:3,                grade:44, icon:'hakaisin_aresu.png', skills:["Vajra Blast","Counter","Hellfire"], skill4:["Dekunda","Berserker God","Charge","Bloody Glee","Resist Phys"], skill5:["","Hellish Mask","Sexy Dance","Shibabooon","Rampage"],elements:["","","","","","Resist","Weak"],type:"Attack"            }
        ]
    },
    {
        name:'Dragon',
        name_tw:'Dragon',
        name_en:'Dragon',
        formulas:[
            ['Fury','Avatar'],
            ['Fury','Genma'],
            ['Kishin','Avatar'],
            ['Snake','Holy'],
            ['Fallen','Lady'],
            ['Fallen','Snake'],
            ['Brute','Lady'],
            ['Brute','Snake'],
            ['Wilder','Kishin'],
            ['Haunt','Kishin']
        ],
        devils:[
            {  name:'Huang Long',  name_tw:'黃龍', name_en:'Huang Long',  rarity:5,  grade:88, icon:'ryuusin_kouryu.png' , skills:["Agility Amp II","Megidolaon","Five Elements "], skill4:["Life Aid","Energy Drain","Luster Candy","Speedster","Null Dark"], skill5:["","Magic Amp III","Serial Killer","Hell Gaze","Enduring Soul"],elements:["","Resist","Resist","Resist","Resist","Null",""],type:"Support"   },
            {  name:'Quetzalcoatl',  name_tw:'羽蛇神', name_en:'Quetzalcoatl',  rarity:5,  grade:80, icon:'ryuusin_kezuarukatoru.png' , skills:["Maragidyne","Mazandyne","Ce Acatls' Return"], skill4:["Null Poison","Mahamadyne","Concentrate","Auto-Tarunda","Repel Phys"], skill5:["","Mabufudyne","Back Attack","Null Mute","Allure"],elements:["Resist","Resist","","","Resist","Resist","Weak"],type:"Attack"   },
            {  name:'Gucumatz',  name_tw:'庫庫爾坎', name_en:'Gucumatz',  rarity:4,  grade:69, icon:'ryuusin_gukumatu.png' , skills:["Heat Wave","Ice Breath","Auto-Tarunda"], skill4:["Wild Guess","Wind Breath","Fog Breath","Tetra Shift","Null Fire"], skill5:["","Berserker God","Tarunda","Retaliate","Mediara"],elements:["","Weak","Resist","","Resist","",""],type:"Support"   },
            {  name:'Seiryu',  name_tw:'青龍', name_en:'Seiryu',  rarity:4,  grade:63, icon:'ryuusin_seiryuu.png' , skills:["Force Boost","Zandyne","Dragon Sense"], skill4:["Agility Amp II","Berserker God","Concentrate","Mana Aid","Repel Force"], skill5:["","Mazandyne","Vorpal Blade","Ziodyne","Makara Break"],elements:["","","Resist","Weak","Null","",""],type:"Attack"   },
            {  name:'Illuyanka',  name_tw:'伊虛延卡', name_en:'Illuyanka',  rarity:3,  grade:47, icon:'ryuusin_iruruyankasyu.png' , skills:["Ice Breath","Zanma","Dragon Sense"], skill4:["Bufudyne","Mazanma","Acid Breath","Magic Amp II","Null Force"], skill5:["","Heat Wave","Dodge","Hamaon","Wild Guess"],elements:["","","Resist","","Resist","",""],type:"Attack"   },
            {  name:'Makara',  name_tw:'摩伽羅', name_en:'Makara',  rarity:3,  grade:41, icon:'ryuusin_makara.png' , skills:["Makara Break","Mabufu","Tarunda"], skill4:["Null Weak","Megido","Makarakarn","Life Surge","Resist Fire"], skill5:["","Bufula","Counter","Mind Break","Charm Bite"],elements:["","Weak","Resist","","","",""],type:"Support"   },
            {  name:'Patrimpas',  name_tw:'帕托利姆帕斯', name_en:'Patrimpas',  rarity:2,  grade:35, icon:'ryuusin_patorimupasu.png' , skills:["Recarm","Diarama","Tetraja"], skill4:["Fast Recovery","Wind Breath","Amrita","Endure","Resist Fire"], skill5:["","","","",""],elements:["","Weak","Resist","","Resist","","Weak"],type:"Recovery"   }
        ]
    },
    {
        name:'Lady',
        name_tw:'Lady',
        name_en:'Lady',
        formulas:[
            ['Holy','Avian'],      //180419 add
            //['Fury','Genma'],    //180713 remove
            ['Dragon','Snake'],        //180713 add
            ['Kishin','Megami'],
            ['Kishin','Avian'],      //180419 add
            ['Kishin','Holy'],
            ['Kishin','Fury'],
            ['Fallen','Herald'],
            ['Brute','Fury'],
            ['Femme','Deity'],
            //['Femme','Holy'],      //180419 remove
            ['Femme','Fury'],
            ['Femme','Kishin'],
            //['Vile','Night'],      //180419 remove
            ['Tyrant','Femme'],
            ['Tyrant','Night']
        ],
        devils:[
            {   name:'Asherah',    name_tw:'亞舍拉', name_en:'Asherah', rarity:5,        grade:83, icon:'tibosin_asyerato.png', skills:["Mediarama","Samarecarm","Maragion"], skill4:["Sea of Chaos","Trisagion","Silent Prayer","Heal Amp","Repel Ice"], skill5:["","Judgement Light","Hellish Mask","Luck Amp II","Deadly Bondage"],elements:["","Null","Weak","","Null","","Weak"], type:"Recovery"            },
            {   name:'Skadi',      name_tw:'絲卡蒂', name_en:'Skadi', rarity:4,        grade:67, icon:'tibosin_sukadei.png', skills:["Mamakajam","Deadly Mute","Mamudoon"], skill4:["Luck Amp II","Glacial Blast","Makara Break","Insanity","Resist Fire"], skill5:["","Shock","Strength Amp II","Mediara","Resist Elec"],elements:["","Weak","Drain","","","",""], type:"Support"             },
            {                name:'Kikuri-Hime',     name_tw:'菊理媛', name_en:'Kikuri-Hime',          rarity:4,                grade:60, icon:'tibosin_kikurihime.png', skills:["Lydia","Maragion","Marin Karion"], skill4:["Vitality Amp II","Agidyne","Diarama","Tetra Shift","Resist Dark"],skill5:["","Resist Fire","Mapoismaon","Power Hit","Rakukaja"], elements:["","","","Weak","Null","","Weak"], type:"Recovery"            },
            {                name:'Isis',        name_tw:'伊西斯',  name_en:'Isis',      rarity:3,                grade:54, icon:'tibosin_isisu.png', skills:["Samarecarm","Zandyne","Mamakajam"], skill4:["Mana Gain","Mazan","Meweakdi","追い打","Null Force"], skill5:["","Strength Amp I","Good Aim","Mecharmdi","Zan"],elements:["","Resist","","Null","","",""], type:"Support"            },
            {                name:'Kushinada-Hime',   name_tw:'奇稻田姬', name_en:'Kushinada-Hime',            rarity:3,                grade:47, icon:'tibosin_kusinabihime.png', skills:["Diara","Heal Boost","Mahama"], skill4:["Media","Hamaon","Lydia","Fast Recovery","Null Light"], skill5:["","Mudo","Maragi","Meparaladi","Zio"],elements:["","","","","","Resist","Weak"], type:"Recovery"            },
            {                name:'Pele',          name_tw:'佩蕾', name_en:'Pele',     rarity:3,                grade:40, icon:'tibosin_pere.png', skills:["Meposumudi","Agilao","Null Poison"], skill4:["Diara","Maragion","Recarm","Luck Amp II","Resist Phys"], skill5:["","Meweakdi","Mazan","Dmg Panel V I","Magic Amp I"],elements:["","Resist","Weak","","","",""], type:"Recovery"            }
        ]
    },
    {
        name:'Kishin',
        name_tw:'Kishin',
        name_en:'Kishin',
        formulas:[
            ['Genma','Avatar'],
            ['Fury','Holy'],
            ['Fury','Avian'],     //180419 add
            //['Yoma','Megami'],        //180419 remove
            ['Snake','Avian'],      //180419 add
            //['Snake','Holy'],        //180713 remove
            ['Brute','Avian'],      //180419 add
            ['Brute','Deity'],
            ['Brute','Avatar'],
            ['Femme','Snake'],
            ['Night','Lady'],
            //['Night','Brute'],        //180419 remove
            ['Vile','Snake'],
            ['Foul','Deity'],
            ['Tyrant','Snake']
        ],
        devils:[
            {                name:'Thor',          name_tw:'索爾', name_en:'Thor',     rarity:5,                grade:83, icon:'kisin_toru.png', skills:["Megaton Raid","Charge","Mjolnir"], skill4:["Maziodyne","Gigantomachia","Rebellion","Elec Pierce","Repel Fire"], skill5:["","Mahamadyne","Mamarin Karion","Evil Gaze","Mamarin Karin"],elements:["Resist","Null","","Drain","Weak","Resist",""], type:"Attack"            },
            {                name:'Zhong Kui',        name_tw:'鍾馗', name_en:'Zhong Kui',       rarity:4,                grade:75, icon:'kisin_syouki.png', skills:["Hellish Mask","Auto-Tarukaja","Oni-Kagura"], skill4:["Null Mute","Megaton Raid","Desolateon","Intimidating Stance","Resist Phys"], skill5:["","Allure","Dmg Panel V II","Deadly Mute","Mahamaon"],elements:["","Resist","","","Weak","Resist",""], type:"Attack"            },
            {                name:'Bishamonten',   name_tw:'毘沙門天', name_en:'Bishamonten',           rarity:4,                grade:70, icon:'kisin_bisyamonten.png', skills:["Resist Light","Bufudyne","Berserker God"], skill4:["Tarukaja","Hades Blast","Discord","Back Attack","Resist Dark"], skill5:["","Energy Drain","Makajamaon","Mecharmdi","Resist Force"],elements:["","Weak","Null","","","",""], type:"Attack"            },
            {                name:'Jikokuten',       name_tw:'持國天', name_en:'Jikokuten',        rarity:4,                grade:62, icon:'kisin_jikokuten.png', skills:["Mazanma","Hades Blast","Suppress Stance Drain"], skill4:["Zandyne","Megaton Raid","Mashibabooon","Life Surge","Null Fire"], skill5:["","Binding Claw","Mediarahan","White Noise","Life Drain"],elements:["","","","Weak","Null","Resist",""], type:"Attack"            },
            {                name:'Koumokuten',     name_tw:'廣目天', name_en:'Koumokuten',          rarity:3,                grade:50, icon:'kisin_koumokuten.png', skills:["Zionga","Tetra Break","Hades Blast"], skill4:["Megaton Press","Ziodyne","Sukukaja","Counter","Resist Phys"], skill5:["","Luck Amp I","Mabufu","Bloody Glee","Bufu"],elements:["","","","Null","Weak","Resist",""], type:"Attack"            },
            {                name:'Zouchouten',   name_tw:'增長天', name_en:'Zouchouten',            rarity:3,                grade:41, icon:'kisin_zoutyouten.png', skills:["Rakukaja","Vajra Blast","Agilao"], skill4:["Charge","Fire Breath","Taunt","Dmg Panel Immunity","Resist Dark"], skill5:["","Hellish Mask","Strength Amp I","Mecharmdi","Mecharmdi"],elements:["","Null","Weak","","","Resist",""], type:"Attack"            },
            {                name:'Take-Minakata',     name_tw:'建御名方', name_en:'Take-Minakata',          rarity:2,                grade:27, icon:'kisin_takeminakata.png', skills:["Counter","Zionga","Oni-Kagura"], skill4:["Elec Boost","Shock","Meparaladi","Mana Bonus","Resist Dark"], skill5:["","Zan","Good Aim","Lunge","Mabufu"],elements:["","Weak","","Resist","","",""], type:"Attack"            }
        ]
    },
    {
        name:'Divine',
        name_tw:'Divine',
        name_en:'Divine',
        formulas:[
            ['Genma','Megami'],
            ['Yoma','Holy'],
            ['Fairy','Avatar'],
            ['Fallen','Avatar'],
            ['Fallen','Fairy'],
            ['Femme','Brute'],
            ['Night','Fairy'],
            ['Night','Femme'],
            ['Foul','Herald'],
            ['Foul','Snake'],
            ['Haunt','Avatar'],
            ['Haunt','Holy']
        ],
        devils:[
            {                name:'Throne',         name_tw:'座天使', name_en:'Throne',      rarity:4,                grade:60, icon:'tensi_sorone.png', skills:["Resist Elec","Maragion","Void Dark Zones"], skill4:["Mediara","Mahamaon","Diarahan","Evade","Null Ice"], skill5:["","War Cry","Resist Ice","Deathtouch","Wild Guess"],elements:["","Null","Weak","","","Null","Weak"], type:"Attack"            },
            {                name:'Dominion',     name_tw:'主天使', name_en:'Dominion',          rarity:3,                grade:53, icon:'tensi_dominion.png', skills:["Mecursedi","Null Curse","Mazionga"], skill4:["Megido","Ziodyne","Prayer","Null Mute","Null Elec"], skill5:["","Mecharmdi","Cleave","Vitality Amp I","Bufu"],elements:["","","","Resist","Weak","Null","Weak"], type:"Recovery"            },
            {                name:'Virtue',    name_tw:'力天使', name_en:'Virtue',           rarity:3,                grade:47, icon:'tensi_vatya.png', skills:["Meclosedi","Null Mute","Hamaon"], skill4:["Barrier","Judgement Light","Concentrate","Auto-Sukukaja","Null Ice"], skill5:["","Mazio","Agi","Luck Amp I","Agility Amp I"],elements:["","","","Weak","Null","Null","Weak"], type:"Recovery"            },
            {                name:'Power',          name_tw:'能天使', name_en:'Power',     rarity:3,                grade:40, icon:'tensi_pawa.png', skills:["Media","Megido","Fatal Sword"], skill4:["Diara","Mazionga","Rebellion","Assassin","Resist Force"], skill5:["","Meparaladi","Mudo","Magic Amp I","Fast Recovery"],elements:["","","","Resist","Weak","Null","Weak"], type:"Attack"            },
            {                name:'Principality',   name_tw:'權天使', name_en:'Principality',            rarity:2,                grade:35, icon:'tensi_purinsiparitei.png', skills:["Recarm","Hamaon","Bufu"], skill4:["Media","Judgement Light","Cursedi","Light Boost","Resist Dark"], skill5:["","Magic Amp I","Meweakdi","Dmg Panel V I","Mazan"], elements:["","","","","","Null","Weak"], type:"Recovery"            },
            {                name:'Archangel',   name_tw:'Herald', name_en:'Archangel',            rarity:2,                grade:25, icon:'tensi_akuenjyeru.png', skills:["Tarukaja","Agi","Hama"], skill4:["Heat Wave","Agilao","Lydia Break","Good Aim","Resist Phys"], skill5:["","Zan","Magic Amp I","Bufu","Good Aim"],elements:["","","","","","Null","Weak"], type:"Attack"            },
            {                name:'Angel',         name_tw:'Divine', name_en:'Angel',      rarity:2,                grade:20, icon:'tensi_enjyeru.png', skills:["Hama","Mahama","Diara"], skill4:["Rakukaja","Judgement Light","Charmdi","Null Mute","Resist Elec"], skill5:["","Closedi","Agi","Mecharmdi","Mabufu"],elements:["","","","Weak","","Null","Weak"], type:"Recovery"            }
        ]
    },
    {
        name:'Yoma',
        name_tw:'Yoma',
        name_en:'Yoma',
        formulas:[
            ['Genma','Holy'],
            ['Kishin','Genma'],
            //['Fairy','Snake'],        //180419 remove
            ['Fallen','Genma'],
            ['Brute','Divine'],
            ['Vile','Avian'],      //180419 add
            ['Vile','Holy'],
            ['Wilder','Genma'],
            ['Foul','Night'],
            ['Foul','Fury'],
            ['Tyrant','Genma'],
            ['Haunt','Divine']
        ],
        devils:[
            {                name:'Ganesha',     name_tw:'象頭神', name_en:'Ganesha',          rarity:4,                grade:66, icon:'youma_ganesya.png', skills:["Berserker God","Faith in Wealth","Rakukaja"], skill4:["Power Hit","Megaton Raid","Taunt","Phys Boost","Null Dark"], skill5:["","Meposumudi","Mazandyne","Holy Wrath","Desolate"],elements:["Resist","","","Weak","Null","","Weak"], type:"Attack"            },
            {                name:'Efreet',     name_tw:'伊弗利特', name_en:'Efreet',          rarity:3,                grade:52, icon:'youma_ihurito.png', skills:["Agilao","Fire Boost","Maragi"], skill4:["Agidyne","Hellfire","Meclosedi","Back Attack","Resist Elec"], skill5:["","Mow Down","Heat Wave","Zan","Outbreak"],elements:["","Drain","Weak","","","",""], type:"Attack"            },
            {                name:'Valkyrie',   name_tw:'女武神', name_en:'Valkyrie',            rarity:3,                grade:40, icon:'youma_varukiri.png' , skills:["Mahama","Fatal Sword","Phys Boost"], skill4:["Heat Wave","Darkbound","Tetra Break","Life Surge","Resist Elec"], skill5:["","Meweakdi","Cleave","Closedi","Weakdi"],elements:["Resist","","","Weak","Resist","",""], type:"Attack"           },
            {                name:'Dis',       name_tw:'迪絲', name_en:'Dis',        rarity:2,                grade:34, icon:'youma_deisu.png', skills:["Makajam","Agilao","Zan"], skill4:["Mediara","Megido","Barrier Break","Deadly Mute","Resist Force"], skill5:["","Charmdi","Magic Amp I","Vitality Amp I","Mamudo"],elements:["","","Resist","Resist","","","Weak"], type:"Recovery"            },
            {                name:'Apsaras',     name_tw:'飛天女神', name_en:'Apsaras',          rarity:1,                grade:11, icon:'youma_apusarasu.png', skills:["Posumudi","Bufu",""], skill4:["Diara","Bufula","Mecharmdi","Agility Amp I","Resist Elec"], skill5:["","Meposumudi","Mabufu","Wild Guess","Dodge"],elements:["","Weak","Resist","","","",""], type:"Recovery"            },
            {                name:'Koppa Tengu',   name_tw:'木葉天狗', name_en:'Koppa Tengu',            rarity:1,                grade:7, icon:'youma_kopatengu.png', skills:["Dmg Panel V I","Zan",""], skill4:["Wind Breath","Zanma","Tarunda","Wild Guess","Resist Fire"], skill5:["","Charmdi","Meclosedi","Mazio","Paraladi"],elements:["","","","Weak","Resist","",""], type:"Attack"            },
            {                name:'Agathion',     name_tw:'阿珈席翁', name_en:'Agathion',         rarity:1,                grade:5, icon:'youma_agasion.png', skills:["Cursedi","Zio",""], skill4:["Mazio","Heat Wave","Closedi","Luck Amp I","Resist Dark"], skill5:["","Maragi","Meclosedi","Zan","Luck Amp I"],elements:["","Resist","Weak","Resist","","","Weak"], type:"Attack"            }
        ]
    },
    {
        name:'Snake',
        name_tw:'Snake',
        name_en:'Snake',
        formulas:[
            ['Dragon','Fallen'],  //180713 add
            ['Dragon','Vile'],    //180713 add
            ['Dragon','Foul'],    //180713 add
            ['Divine','Avian'],      //180419 add
            //['Divine','Avatar'],        //180419 remove
            ['Yoma','Genma'],
            //['Beast','Avatar'],        //180419 remove
            ['Fairy','Holy'],
            ['Fairy','Genma'],
            ['Fallen','Avian'],    //180419 add
            ['Brute','Fallen'],
            ['Night','Divine'],
            ['Foul','Genma'],
            ['Foul','Yoma'],
            ['Tyrant','Fury'],
            ['Tyrant','Foul']
            //['Haunt','Kishin']     //180713 remove
        ],
        devils:[
            {                name:'Ananta',      name_tw:'阿南塔', name_en:'Ananta',         rarity:5,                grade:83, icon:'ryuuou_ananta.png' , skills:["Diarahan","Auto-Sukukaja","Auto-Rakukaja"], skill4:["Holy Wrath","Mabufudyne","Mapoismaon","Auto-Tarukaja","Drain Ice"], skill5:["","Gigantomachia","Mazandyne","Mortal Jihad","Oni-Kagura"],elements:["","","Null","Null","Weak","Null",""], type:'Support'           },
            {                name:'Yurlungur',      name_tw:'虹蛇', name_en:'Yurlungur',         rarity:4,                grade:70, icon:'ryuuou_yurungu.png', skills:["Mashibaboo","Samarecarm","Mabufula"], skill4:["Luck Amp III","Bufudyne","Diarama","Null Poison","Resist Fire"], skill5:["","Acid Breath","Recarmdra","Deadly Poison","Mahama"], elements:["","Weak","Null","Resist","","","Weak"], type:'Support'            },
            {                name:'Orochi',    name_tw:'八岐大蛇', name_en:'Orochi',           rarity:4,                grade:61, icon:'ryuuou_yamatanooroti.png', skills:["Bufudyne","Megaton Press","Dmg Panel Immunity"], skill4:["Barrier","Agidyne","Recarmdra","Auto-Tarukaja","Null Light"], skill5:["","Dmg Panel V I","Dekaja","Spirit Drain","Savage Glee"],elements:["","Null","Null","Weak","","",""], type:"Attack"            },
            {                name:'Gui Xian',        name_tw:'玄武', name_en:'Gui Xian',       rarity:3,                grade:45, icon:'ryuuou_genbu.png', skills:["Bufula","Mabufula","Ice Boost"], skill4:["Rakukaja","Bufudyne","Makara Break","Life Aid","Resist Phys"], skill5:["","Dmg Panel V I","Strength Amp I","Cleave","Madness"],elements:["","Weak","Null","","","",""], type:'Attack'            },
            {                name:'Naga',        name_tw:'那迦', name_en:'Naga',       rarity:2,                grade:28, icon:'ryuuou_naga.png', skills:["Fatal Sword","Bufula","Good Aim"], skill4:["Rebellion","Darkbound","Desolate","Life Gain","Null Ice"], skill5:["","Lunge","Dodge","Meposumudi","Heat Wave"],elements:["","Weak","Resist","Resist","Weak","","Weak"], type:"Attack"            },
            {                name:'Nozuchi',        name_tw:'野槌', name_en:'Nozuchi',       rarity:1,                grade:15, icon:'ryuuou_nozuti.png', skills:["Life Bonus","Mazio",""], skill4:["Rampage","Zionga","Cursedi","Good Aim","Resist Fire"], skill5:["","Mazan","Mecharmdi","Mow Down","Paraladi"],elements:["Resist","Weak","Resist","Resist","Weak","","Weak"],type:"Attack"            }
        ]
    },
    {
        name:'Beast',
        name_tw:'Beast',
        name_en:'Beast',
        formulas:[
            ['Dragon','Deity'],    //180713 add
            ['Dragon','Wilder'],    //180713 add
            ['Snake','Herald'],
            ['Snake','Avatar'],
            ['Fallen','Kishin'],
            //['Fallen','Snake'],  //180713 remove
            ['Brute','Genma'],
            //['Brute','Snake'],    //180713 remove
            ['Wilder','Avatar'],
            ['Wilder','Night'],
            ['Foul','Wilder'],
            ['Tyrant','Holy'],
            ['Haunt','Avian'],      //180419 add
            ['Haunt','Fury'],
            ['Haunt','Tyrant']
        ],
        devils:[
            {                name:'Cerberus',     name_tw:'地獄犬', name_en:'Cerberus',          rarity:4,                grade:61, icon:'majyuu_keruberosu.png', skills:["Agidyne","Hell Claw","War Cry"], skill4:["Life Gain","Fire Breath","Madesolateon","Back Attack","Resist Phys"], skill5:["","Deadly Bondage","Counter","Heat Wave","Agility Amp I"],elements:["","Repel","Weak","","","",""], type:'Attack'            },
            {                name:'Ammut',     name_tw:'阿米特', name_en:'Ammut',          rarity:3,                grade:44, icon:'majyuu_aman.png', skills:["Rebellion","Deathtouch","Madness Nails"], skill4:["Agility Amp II","Binge Eating","War Cry","Null Charm","Resist Ice"], skill5:["","Zio","Rampage","Vitality Amp I","Mabufu"],elements:["","","Weak","Null","","",""], type:'Attack'            },
            {                name:'Orthrus',     name_tw:'雙頭犬', name_en:'Orthrus',          rarity:2,                grade:35, icon:'majyuu_orutorosu.png', skills:["Agilao","Eat Whole","Maragi"], skill4:["Vajra Blast","Fire Breath","Recarm","Resist Bind","Resist Elec"], skill5:["","Meclosedi","Weakdi","Strength Amp I","Heat Wave"],elements:["","Null","Weak","","","","Resist"], type:'Attack'            },
            {                name:'Nekomata',       name_tw:'貓怪', name_en:'Nekomata',      rarity:1,                grade:14, icon:'majyuu_nekomata.png', skills:["Charmdi","Mazan",""], skill4:["Sukukaja","Zanma","Amrita","Resist Charm","Resist Ice"], skill5:["","Mabufu","Madness","Rampage","Mahama"],elements:["","Resist","Weak","Weak","Resist","",""], type:'Support'            },
            {                name:'Inugami',       name_tw:'犬神', name_en:'Inugami',        rarity:1,                grade:9, icon:'majyuu_inugami.png', skills:["Agi","Paraladi",""], skill4:["Maragi","Agilao","Rakunda","Resist Bind","Resist Dark"], skill5:["","Hellish Mask","Magic Amp I","Meparaladi","Mudo"],elements:["","Resist","	Weak","","","",""], type:'Support'            },
            {                name:'Cu Sith',       name_tw:'犬妖', name_en:'Cu Sith',        rarity:1,                grade:3, icon:'majyuu_kasi.png', skills:["Cleave","Agi",""], skill4:["Amrita","Charm Bite","Tarukaja","Life Bonus","Resist Fire"], skill5:["","Posumudi","Hellish Mask","Agility Amp I","Dia"],elements:["","","","","","Null",""], type:'Support'            }
        ]
    },
    {
        name:'Fairy',
        name_tw:'Fairy',
        name_en:'Fairy',
        formulas:[
            ['Yoma','Avatar'],
            ['Yoma','Divine'],
            ['Snake','Megami'],
            ['Snake','Divine'],
            ['Beast','Genma'],
            ['Femme','Megami'],
            ['Night','Holy'],
            ['Night','Snake'],
            ['Night','Beast'],
            ['Wilder','Divine'],
            ['Wilder','Brute'],
            ['Foul','Kishin'],
            ['Tyrant','Avian']      //180419 add
        ],
        devils:[
            {                name:'Oberon',        name_tw:'奧伯隆',  name_en:'Oberon',      rarity:4,                grade:67, icon:'yousei_oberon.png', skills:["Force Boost","Zandyne","Mamarin Karion"], skill4:["Makarakarn","Twister","Mecharmdi","Auto-Sukukaja","Resist Ice"], skill5:["","Cleave","Vitality Amp I","Tarukaja","Spirit Drain"],elements:["","","","Weak","Drain","",""], type:"Attack"            },
            {                name:'Titania',    name_tw:'提泰妮婭', name_en:'',           rarity:4,                grade:62, icon:'yousei_teitania.png', skills:["Elec Boost","Mazionga","Makajamaon"], skill4:["Mana Gain","Bolt Storm","Desolateon","Back Attack","Resist Phys"], skill5:["","Tarunda","Mamudo","Fatal Sword","Shock"],elements:["","","","","","Resist","Resist"], type:"Support"            },
            {                name:'Setanta',        name_tw:'瑟坦特', name_en:'',       rarity:3,                grade:47, icon:'yousei_setanta.png', skills:["Oni-Kagura","Great Aim","Vajra Blast"], skill4:["Darkbound","Zanma","Tarukaja","Berserker","Resist Elec"], skill5:["","Vitality Amp I","Zio","Cursedi","Heat Wave"],elements:["","","","Weak","Null","","Weak"], type:"Attack"           },
            {                name:'Silky',        name_tw:'希路奇', name_en:'',       rarity:3,                grade:42, icon:'yousei_siruki.png', skills:["Meweakdi","Null Weak","Bufudyne"], skill4:["Mediara","Mabufula","Lydia","Infernal Mask","Null Force"], skill5:["","Bloody Glee","Mow Down","Dmg Panel V I","Wild Guess"],elements:["","Weak","Null","","","",""], type:"Support"            },
            {                name:'Kelpie',        name_tw:'凱爾皮', name_en:'',       rarity:2,                grade:35, icon:'yousei_kerupi.png', skills:["Diara","Zionga","Rampage"], skill4:["Void Dark Zones","Spirit Drain","Lydia","Wild Guess","Resist Dark"], skill5:["","Good Aim","Mazio","Good Aim","Zio"],elements:["","","Resist","","Weak","",""], type:"Recovery"            },
            {                name:'High Pixie',      name_tw:'高等皮克希', name_en:'',         rarity:2,                grade:24, icon:'yousei_hiipikusi.png', skills:["Desolate","Media","Mazio"], skill4:["Lydia","Shock","Diara","Madness","Resist Light"], skill5:["","Magic Amp I","Mudo","Agi","Strength Amp I"],elements:["","","","","Resist","",""], type:"Recovery"            },
            {                name:'Pyro Jack',  name_tw:'燈籠傑克', name_en:'',             rarity:1,                grade:13, icon:'yousei_jyakurantan.png', skills:["Agi","Maragi",""], skill4:["Agilao","Fire Breath","Tag","Mana Bonus","Resist Force"], skill5:["","Mahama","Closedi","Magic Amp I","Fast Recovery"],elements:["","Resist","Weak","","","",""], type:"Attack"            },
            {                name:'Jack Frost',  name_tw:'冰霜傑克', name_en:'',             rarity:1,                grade:7, icon:'yousei_jyakufurosuto.png', skills:["Bufu","Mabufu",""], skill4:["Hama","Bufula","Tag","Counter","Resist Elec"], skill5:["","Mecursedi","Fast Recovery","Dodge","Paraladi"],elements:["","Weak","Resist","","","",""], type:"Attack"            },
            {                name:'Pixie',         name_tw:'皮克希', name_en:'',      rarity:1,                grade:2, icon:'yousei_pikusi.png' , skills:["Zan","Dia",""], skill4:["Heal Boost","Mazio","Media","Resist Mute","Resist Light"], skill5:["","Magic Amp I","Mecursedi","Mecharmdi","Hellish Mask"],elements:["","","","Resist","","","Weak"], type:"Recovery"           }
        ]
    },
    {
        name:'Fallen',
        name_tw:'Fallen',
        name_en:'Fallen',
        formulas:[
            ['Dragon','Fury'],  //180713 add
            ['Dragon','Tyrant'],    //180713 add
            ['Deity','Herald'],
            ['Beast','Divine'],
            ['Beast','Yoma'],
            ['Brute','Beast'],
            ['Night','Herald'],
            ['Night','Megami'],
            ['Vile','Genma'],
            ['Vile','Divine'],
            ['Wilder','Femme'],
            ['Foul','Megami'],
            ['Foul','Divine'],
            ['Haunt','Herald']
        ],
        devils:[
            {                name:'Samael',       name_tw:'薩麥爾', name_en:'',        rarity:5,                grade:84, icon:'datensi_samaeru.png', skills:["Mana Aid","Salvation","Energy Drain"], skill4:["Death Counter","Purgatory","Tetrakarn","Infinite Chakra","Null Fire"], skill5:["","Fire Breath","Agilao","Eat Whole","Heal Boost"],elements:["","","","Weak","","Repel","Repel"], type:'Support'            },
            {                name:'Dantalian',   name_tw:'但他林', name_en:'',            rarity:4,                grade:70, icon:'datensi_dantarian.png', skills:["Makarakarn","Fog Breath","Hamadyne"], skill4:["Mana Gain","Binge Eating","Bind Voice","Makara Shift","Repel Dark"], skill5:["","Bind Voice","Ice Breath","Taunt","Luck Amp II"],elements:["","Resist","Resist","Weak","Null","Weak","Resist"], type:'Support'            },
            {                name:'Ose',          name_tw:'歐賽', name_en:'',     rarity:3,                grade:54, icon:'datensi_ose.png', skills:["Hades Blast","Mazionga","Charge"], skill4:["Retaliate","Megaton Press","Tetrakarn","Strength Amp II","Null Phys"], skill5:["","Agi","Charmdi","Media","Madness"],elements:["","","","","","","Resist"], type:'Attack'            },
            {                name:'Forneus',   name_tw:'佛鈕司', name_en:'',            rarity:3,                grade:41, icon:'datensi_huoruneosu.png', skills:["Bufula","Mazio","Fog Breath"], skill4:["Resist Elec","Mabufula","Mashibaboo","Ice Boost","Null Light"], skill5:["","Agility Amp I","Meclosedi","Zio","Charmdi"],elements:["","","Drain","Weak","","","Null"], type:'Support'            },
            {                name:'Decarabia',     name_tw:'丹卡拉比', name_en:'',          rarity:2,                grade:23, icon:'datensi_dekarabia.png', skills:["Maragi","Mabufu","Bufu"], skill4:["Marin Karin","Agilao","Meclosedi","Resist Mute","Resist Ice"], skill5:["","Dia","Mazio","Posumudi","Paraladi"],elements:["","","","","","	Weak","Resist"], type:'Attack'            },
            {                name:'Eligor',     name_tw:'埃力格', name_en:'',          rarity:1,                grade:10, icon:'datensi_erigoru.png', skills:["Mudo","Mow Down",""], skill4:["Endure","Fatal Sword","Rakukaja","Counter","Resist Light"], skill5:["","Dia","Magic Amp I","Charmdi","Charmdi"],elements:["Resist","","","Weak","","","Null"], type:'Attack'            },
            {                name:'Melchom',       name_tw:'梅爾克', name_en:'',        rarity:1,                grade:4, icon:'datensi_merukomu.png', skills:["Dia","Agi",""], skill4:["Fire Breath","Maragi","Cursedi","Mana Bonus","Resist Phys"], skill5:["","Dmg Panel V I","Bloody Glee","Cleave","Mudo"],elements:["","Resist","Weak","","Weak","Weak","Resist"], type:'Recovery'            }
        ]
    },
    {
        name:'Brute',
        name_tw:'Brute',
        name_en:'Brute',
        formulas:[
            ['Yoma','Herald'],
            ['Beast','Snake'],
            ['Fairy','Fury'],
            ['Fairy','Kishin'],
            ['Femme','Avian'],      //180419 add
            ['Femme','Yoma'],
            ['Vile','Fairy'],
            ['Vile','Fallen'],
            ['Vile','Femme'],
            ['Wilder','Holy'],
            ['Haunt','Snake'],
            ['Haunt','Fallen'],
            ['Haunt','Foul']
        ],
        devils:[
            {                name:'Ongyo-Ki',     name_tw:'隱形鬼', name_en:'',          rarity:4,                grade:68, icon:'youki_ongyouki.png', skills:["Dark Sword","Auto-Rakukaja","Mabufula"], skill4:["Deathtouch","Nihil Claw","Outbreak","Death Counter","Null Dark"], skill5:["","Counter","Deadly Charm","Luck Amp I","Wind Breath"],elements:["Resist","","Resist","","Resist","Weak",""], type:"Attack"            },
            {                name:'Berserker',       name_tw:'狂戰士', name_en:'',        rarity:3,                grade:54, icon:'youki_beruseruku.png', skills:["Charge","Dark Sword","Mabufu"], skill4:["Enduring Soul","Megaton Press","Rebellion","Retaliate","Null Ice"], skill5:["","Soul Drain","Magic Amp I","Closedi","Wild Guess"],elements:["Null","","","","Weak","",""], type:"Attack"            },
            {                name:'Shiki-Ougi',       name_tw:'式王子', name_en:'',        rarity:3,                grade:49, icon:'youki_sikiouji.png', skills:["Resist Mute","Hama","Mudo"], skill4:["Dekaja","Megido","Rakunda","Back Attack","Resist Ice"], skill5:["","Meweakdi","Maragi","Curse","Dia"],elements:["Null","Weak","Weak","","","Resist","Resist"], type:"Attack"            },
            {                name:'Yomotsu-Ikusa',     name_tw:'黃泉軍', name_en:'',          rarity:3,                grade:41, icon:'youki_yomotuikusa.png', skills:["Resist Poison","Ice Breath","Mamudoon"], skill4:["Merciless Blow","Hurricane Slash","Juon","Savage Glee","Resist Light"], skill5:["","Closedi","Vitality Amp I","Mecursedi","Meweakdi"],elements:["","","","","Weak","Weak","Resist"], type:"Attack"            },
            {                name:'Oni',            name_tw:'鬼', name_en:'',   rarity:2,                grade:27, icon:'youki_oni.png', skills:["Tetra Break","Maragi","Vajra Blast"], skill4:["Oni-Kagura","Tempest Slash","Charge","Bloody Glee","Resist Force"],skill5:["","Heat Wave","Agi","Lunge","Posumudi"], elements:["","","","Weak","","",""], type:"Attack"            },
            {                name:'Momunofu',         name_tw:'桃生', name_en:'',      rarity:1,                grade:15, icon:'youki_momunohu.png', skills:["Mow Down","Counter",""], skill4:["Heat Wave","Oni-Kagura","Dekunda","Endure","Resist Force"], skill5:["","Dodge","Agi","Meposumudi","Vitality Amp I"],elements:["Resist","","","","Weak","",""], type:"Attack"            },
            {                name:'Azumi',          name_tw:'安曇神', name_en:'',     rarity:1,                grade:3, icon:'youki_azumi.png', skills:["Paraladi","Bufu",""], skill4:["Ice Breath","Mabufu","Dia","Life Bonus","Resist Force"], skill5:["","Zio","Meparaladi","Mazio","Cleave"],elements:["","","Resist","Weak","","",""], type:"Recovery"            }
        ]
    },
    {
        name:'Femme',
        name_tw:'Femme',
        name_en:'Femme',
        formulas:[
            ['Dragon','Night'],    //180713 add
            ['Yoma','Kishin'],
            ['Snake','Lady'],
            ['Snake','Kishin'],
            ['Beast','Avian'],      //180419 add
            ['Beast','Lady'],
            ['Fallen','Megami'],
            ['Brute','Megami'],
            ['Brute','Holy'],
            ['Brute','Yoma'],
            ['Night','Avian'],      //180419 add
            ['Night','Kishin'],
            ['Haunt','Genma'],
            ['Haunt','Night']
        ],
        devils:[
            {                name:'Rangda',          name_tw:'讓特', name_en:'',    rarity:4,                grade:67, icon:'kijyo_randa.png', skills:["Majuon","Mudodyne","Mazandyne"], skill4:["Vorpal Blade","Purgatory","Recarmdra","Endure","Null Force"], skill5:["","Wind Breath","Mabufula","Dekaja","Spirit Drain"],elements:["Repel","","","Weak","","",""] , type:"Attack"           },
            {                name:'Dakini',      name_tw:'荼吉尼', name_en:'',         rarity:3,                grade:53, icon:'kijyo_dakini.png', skills:["Barrier Break","Agilao","Berserker God"], skill4:["Poismaon","Agidyne","Mamakajam","Null Poison","Resist Ice"], skill5:["","Poison Breath","Bolt Storm","Magic Amp I","Wild Guess"],elements:["Resist","Drain","Weak","","","",""], type:"Support"            },
            {                name:'Mermaid',      name_tw:'美人魚', name_en:'',         rarity:3,                grade:42, icon:'kijyo_mameido.png', skills:["Ice Breath","Wind Breath","Media"], skill4:["Sexy Dance","Bufudyne","Mecharmdi","Infinite Chakra","Null Ice"], skill5:["","Closedi","Rampage","Paraladi","Rampage"],elements:["","","Resist","Weak","Resist","",""] , type:"Recovery"           },
            {                name:'Yaksini',      name_tw:'夜叉女', name_en:'',         rarity:2,                grade:34, icon:'kijyo_yakusini.png', skills:["Resist Curse","Agilao","Mazan"], skill4:["Hurricane Slash","Zionga","Shibaboo","Strength Amp I","Resist Phys"], skill5:["","Hama","Dmg Panel V I","Maragi","Agility Amp I"],elements:["","","","Weak","Resist","",""], type:"Attack"            },
            {                name:'Yomotsu-Shikome',    name_tw:'黃泉醜女', name_en:'',           rarity:2,                grade:23, icon:'kijyo_yomotusikome.png', skills:["Tarunda","Toxic Sting","Bufula"], skill4:["Binding Claw","Darkbound","Weakdi","Dodge","Resist Force"], skill5:["","Lunge","Agi","Paraladi","Zan"],elements:["","Weak","","","","Weak","Resist"] , type:"Support"           },
            {                name:'Leanan Sidhe',    name_tw:'菈南希', name_en:'',           rarity:1,                grade:12, icon:'kijyo_ryanansi.png', skills:["Dia","Bufu",""], skill4:["Media","Mudoon","Recarm","Resist Poison","Resist Force"], skill5:["","Fast Recovery","Hama","Hellish Mask","Mow Down"],elements:["","","","","Weak","",""], type:"Recovery"            }
        ]
    },
    {
        name:'Night',
        name_tw:'Night',
        name_en:'Night',
        formulas:[
            ['Dragon','Fairy'],    //180713 add
            ['Dragon','Brute'],    //180713 add
            ['Dragon','Femme'],    //180713 add
            ['Divine','Kishin'],
            ['Yoma','Avian'],      //180419 add
            ['Snake','Yoma'],
            ['Fairy','Avian'],      //180419 add
            ['Fairy','Deity'],
            //['Fallen','Lady'],    //180713 remove
            ['Brute','Fairy'],
            ['Femme','Genma'],
            ['Wilder','Deity'],
            //['Wilder','Snake'],      //180419 remove
            ['Wilder','Fallen'],
            //['Tyrant','Yoma'],      //180419 remove
            ['Tyrant','Fairy'],
            ['Tyrant','Wilder'],
            ['Haunt','Wilder']
        ],
        devils:[
            {                name:'Lilith',        name_tw:'莉莉絲', name_en:'',       rarity:5,                grade:80, icon:'yoma_ririsu.png', skills:["Maziodyne","Energy Drain","Allure"], skill4:["Insanity","Mind Break","Samarecarm","Luck Amp III","Null Light"], skill5:["","Dmg Panel V II","Tarunda","Purgatory","Assassin"],elements:["","Resist","Resist","Drain","Weak","Weak","Null"], type:"Support"            },
            {                name:'Succubus',    name_tw:'女夢魔', name_en:'',           rarity:4,                grade:63, icon:'yoma_sakyubasu.png', skills:["Mamarin Karin","Deadly Charm","Bufudyne"], skill4:["Spirit Drain","Mazionga","Madesolate","Null Charm","Resist Light"], skill5:["","Life Drain","Mabufula","Wild Instinct","Mamudoon"],elements:["","Resist","Resist","","","Weak",""], type:"Support"            },
            {                name:'Lilim',        name_tw:'莉莉姆', name_en:'',       rarity:3,                grade:47, icon:'yoma_ririmu.png', skills:["Resist Charm","Mazanma","Marin Karin"], skill4:["Spirit Drain","Zandyne","Meclosedi","Magic Amp II","Null Elec"], skill5:["","Luck Amp I","Bufu","Weakdi","Zio"],elements:["","","Weak","","Null","",""], type:"Support"            },
            {                name:'Kaiwan',        name_tw:'迦溫',   name_en:'',     rarity:3,                grade:42, icon:'yoma_kiun.png', skills:["Mudoon","Mamudo","Dark Boost"], skill4:["Sukukaja","Mamudoon","Makara Break","Endure","Resist Ice"], skill5:["","Magic Amp I","Luck Amp I","Bloody Glee","Mahama"],elements:["","","Weak","","","Weak","Null"], type:"Attack"            },
            {                name:'Fomorian',   name_tw:'弗莫爾', name_en:'',            rarity:2,                grade:30, icon:'yoma_huomoria.png' , skills:["Mabufu","Vajra Blast","Hamaon"], skill4:["Back Attack","Bufula","Rebellion","Life Gain","Resist Light"], skill5:["","Mudo","Zan","Bufu","Maragi"],elements:["","Weak","Resist","","","",""], type:"Attack"           },
            {                name:'Incubus',   name_tw:'男夢魔', name_en:'',            rarity:2,                grade:21, icon:'yoma_inkyubasu.png', skills:["Marin Karin","Mudoon","Zan"], skill4:["Life Drain","Mazan","Meparaladi","Deadly Charm","Resist Ice"], skill5:["","Mamudo","Madness","Hellish Mask","Bloody Glee"],elements:["","","","Weak","Resist","",""], type:"Support"            },
            {                name:'Sandman',     name_tw:'睡魔', name_en:'',          rarity:1,                grade:10, icon:'yoma_zandoman.png', skills:["Zan","Cleave",""], skill4:["Shibaboo","Dark Sword","Sukunda","Epic Recovery","Resist Ice"], skill5:["","Rampage","Posumudi","Mazio","Dmg Panel V I"],elements:["","","","Weak","Resist","",""], type:"Attack"            },
            {                name:'Mokoi',         name_tw:'惡靈', name_en:'',      rarity:1,                grade:5, icon:'yoma_mokoi.png', skills:["Zio","Lunge",""], skill4:["Rampage","Zionga","Weakdi","Strength Amp I","Resist Dark"], skill5:["","Mudo","Heat Wave","Dmg Panel V I","Fast Recovery"],elements:["","","","Resist","Weak","",""], type:"Attack"            }
        ]
    },
    {
        name:'Vile',
        name_tw:'Vile',
        name_en:'Vile',
        formulas:[
            ['Divine','Fury'],
            ['Wilder','Beast'],
            ['Foul','Lady'],
            ['Tyrant','Divine'],
            ['Tyrant','Beast']
        ],
        devils:[
            {                name:'Seth',         name_tw:'賽特', name_en:'',      rarity:5,                grade:84, icon:'jyasin_seto.png', skills:["Zandyne","Debilitate","Mortal Jihad"], skill4:["Titanomachia","Mind Break","Outbreak","Force Amp","Resist Fire"], skill5:["","Marin Karin","Mamarin Karin","Hades Blast","Ju"],elements:["","Weak","","Null","Null","","Drain"], type:'Attack'            },
            {                name:'Girimehkala',    name_tw:'獨眼魔象', name_en:'',           rarity:4,                grade:67, icon:'jyasin_girimekara.png', skills:["Resist Dark","Mega Boost","Megaton Press"], skill4:["Bind Voice","Binge Eating","Rakunda","Savage Glee","Resist Force"], skill5:["","Judgement Light","Agidyne","Closedi","Bufula"],elements:["Repel","","","Weak","Weak","Weak",""], type:'Attack'            },
            {                name:'Pazuzu',        name_tw:'帕祖祖', name_en:'',       rarity:4,                grade:62, icon:'jyasin_pazusu.png', skills:["Resist Fire","Mediarama","Purgatory"], skill4:["White Noise","Allure","Samarecarm","Death Counter","Null Light"], skill5:["","Resist Mute","Media","Zanma","Darkbound"],elements:["","","Weak","","Null","","Null"], type:'Recovery'            },
            {                name:'Arahabaki',    name_tw:'荒霸吐', name_en:'',           rarity:3,                grade:50, icon:'jyasin_arahabaki.png', skills:["Megido","Makarakarn","Concentrate"], skill4:["Energy Drain","Ice Breath","Meposumudi","Makara Shift","Null Ice"], skill5:["","Mow Down","Madness","Mudo","Mecharmdi"],elements:["Resist","Weak","Weak","Weak","Weak","Resist","Resist"], type:'Attack'            },
            {                name:'Baphomet',  name_tw:'巴風特', name_en:'',             rarity:3,                grade:41, icon:'jyasin_bahuometo.png', skills:["Mamudo","Life Drain","Maragi"], skill4:["Mana Gain","Mudodyne","Mapoisma","Dark Boost","Resist Light"], skill5:["","Rampage","Mabufu","Wild Guess","Zio"],elements:["","","","","","Weak","Null"], type:'Attack'            },
            {                name:'Abraxas',  name_tw:'亞布拉薩', name_en:'',             rarity:2,                grade:26, icon:'jyasin_aburakusasu.png', skills:["Dekunda","Tarukaja","Bufula"], skill4:["Rakukaja","Vajra Blast","Amrita","Hellish Mask","Null Dark"], skill5:["","Maragi","Magic Amp I","Maragi","Madness"],elements:["Drain","Weak","Weak","Weak","Weak","Weak","Weak"], type:'Support'            }
        ]
    },
    {
        name:'Wilder',
        name_tw:'Wilder',
        name_en:'Wilder',
        formulas:[
            ['Genma','Herald'],
            ['Dragon','Beast'],    //180713 add
            //['Fairy','Beast'],        //180419 remove
            ['Brute','Herald'],
            ['Femme','Fallen'],
            ['Night','Deity'],
            ['Vile','Yoma'],
            ['Foul','Avian'],      //180419 add
            ['Foul','Beast'],
            ['Foul','Brute'],
            ['Foul','Femme'],
            ['Tyrant','Herald'],
            ['Haunt','Lady'],
            ['Haunt','Yoma'],
            ['Haunt','Beast']
        ],
        devils:[
            {                name:'Fenrir',    name_tw:'芬里爾', name_en:'',           rarity:4,                grade:61, icon:'youjyuu_huenriru.png', skills:["Nihil Claw","Agility Amp II","Auto-Tarukaja"], skill4:["Eat Whole","Hades Blast","Makara Break","Speedster","Resist Force"], skill5:["","Resist Dark","Eat Whole","Meweakdi","Hama"],elements:["","Weak","Drain","Resist","Weak","",""], type:"Support"            },
            {                name:'Peallaidh',     name_tw:'皮亞雷', name_en:'',          rarity:3,                grade:46, icon:'youjyuu_piarei.png', skills:["Madesolate","Insanity","Mamudoon"], skill4:["Poison Breath","Evil Gaze","Concentrate","Hellish Mask","Resist Light"], skill5:["","Zio","Maragi","Agility Amp I","Dmg Panel V I"],elements:["","Weak","Resist","","","Weak",""], type:"Support"            },
            {                name:'Mothman',     name_tw:'天蛾人', name_en:'',          rarity:3,                grade:41, icon:'youjyuu_mosuman.png', skills:["Resist Bind","Mazio","Mashibaboo"], skill4:["Mana Bonus","Ziodyne","Shibabooon","Insanity","Null Fire"], skill5:["","Zan","Heat Wave","Dodge","Meparaladi"],elements:["","","","Resist","Weak","",""], type:"Support"            },
            {                name:'Nue',         name_tw:'鵺', name_en:'',      rarity:2,                grade:25, icon:'youjyuu_nue.png', skills:["Mazio","Zio","Eat Whole"], skill4:["Binding Claw","Zionga","Rakunda","Strength Amp I","Resist Phys"], skill5:["","Mecursedi","Cleave","Posumudi","Wild Guess"],elements:["","","","Resist","Weak","",""], type:"Attack"            },
            {                name:'Raijuu',    name_tw:'雷獸', name_en:'',           rarity:2,                grade:20, icon:'youjyuu_raijyuu.png', skills:["Resist Weak","Zionga","Shock"], skill4:["Endure","Binding Claw","Barrier Break","Agility Amp I","Null Elec"], skill5:["","Hama","Closedi","Vitality Amp I","Closedi"],elements:["","","","Resist","Weak","",""], type:"Support"            },
            {                name:'Bicorn',    name_tw:'雙角獸', name_en:'',           rarity:1,                grade:9, icon:'youjyuu_baikon.png', skills:["Lunge","Agi",""], skill4:["Maragi","Heat Wave","Charmdi","Hellish Mask","Resist Light"], skill5:["","Dia","Meparaladi","Media","Meweakdi"],elements:["","","","","Weak","","Null"], type:"Attack"            },
            {                name:'Chagrin',    name_tw:'恰古林', name_en:'',           rarity:1,                grade:4, icon:'youjyuu_tyagurinn.png', skills:["Weakdi","Zio",""], skill4:["Shock","Mazio","Sukukaja","Agility Amp I","Resist Dark"], skill5:["","Good Aim","Rampage","Heat Wave","Posumudi"],elements:["","Weak","","Resist","","",""], type:"Support"            }
        ]
    },
    {
        name:'Foul',
        name_tw:'Foul',
        name_en:'Foul',
        formulas:[
            ['Fairy','Lady'],
            ['Femme','Divine'],
            ['Femme','Beast'],
            ['Night','Fury'],
            ['Wilder','Fairy'],
            ['Haunt','Brute'],
            ['Haunt','Femme'],
            ['Haunt','Vile']
        ],
        devils:[
            {                name:'Mad Gasser',     name_tw:'毒氣怪客', name_en:'',          rarity:3,                grade:45, icon:'gedou_madogasa.png', skills:["Mapoisma","Deadly Poison","Mudodyne"], skill4:["Hellish Mask","Deathtouch","Barrier Break","Madness","Null Dark"], skill5:["","Zio","Hama","Sukukaja","Mecharmdi"],elements:["","","","","","Weak","Resist"],type:"Support"            },
            {                name:'Shadow',          name_tw:'黑影', name_en:'',     rarity:2,                grade:35, icon:'gedou_syadou.png', skills:["Rakunda","Mazio","Mudo"], skill4:["Tarukaja","Mudoon","Desolate","Agility Amp I","Resist Ice"], skill5:["","Hellish Mask","Mamudo","Zio","Luck Amp I"],elements:["Resist","","","","Weak","Weak","Null"],type:"Support"            },
            {                name:'Black Ooze',    name_tw:'黑泥怪', name_en:'',           rarity:2,                grade:25, icon:'gedou_burakuuzu.png', skills:["Ju","Poisma","Charm Bite"], skill4:["Madness","Deathtouch","Maju","Endure","Null Fire"],skill5:["","Mazan","Heat Wave","Meweakdi","Mecursedi"], elements:["Resist","","","Weak","","Weak","Null"],type:"Support"            },
            {                name:'Blob',           name_tw:'果凍怪', name_en:'',    rarity:2,                grade:20, icon:'gedou_burobu.png', skills:["Poisma","Zan","Mazan"], skill4:["Tarunda","Spirit Drain","Mapoisma","Madness","Resist Force"], skill5:["","Weakdi","Bufu","Mamudo","Zio"],elements:["Resist","","Weak","","","Weak","Null"],type:"Support"            },
            {                name:'Phantom',       name_tw:'鬼魅', name_en:'',        rarity:1,               grade:10, icon:'gedou_huantomu.png', skills:["Zio","Mudo","Mazio"], skill4:["Mazio","Zionga","Dekaja","Hellish Mask","Resist Elec"], skill5:["","Luck Amp I","Paraladi","Mamudo","Mabufu"],elements:["Resist","","","","Weak","Weak","Null"],type:"Attack"            },
            {                name:'Slime',        name_tw:'軟泥怪', name_en:'',       rarity:1,                grade:1, icon:'gedou_suraimu.png', skills:["Cleave","Life Bonus",""], skill4:["Life Drain","Spirit Drain","Posumudi","Counter","Resist Force"], skill5:["","Mow Down","Wild Guess","Agility Amp I","Dmg Panel V I"],elements:["Weak","Weak","Weak","Weak","Weak","Weak",""],type:"Attack"            }
        ]
    },
    {
        name:'Tyrant',
        name_tw:'Tyrant',
        name_en:'Tyrant',
        formulas:[
            ['Genma','Deity'],
            ['Fury','Herald'],
            ['Fury','Deity'],
            ['Dragon','Holy'],    //180713 add
            ['Kishin','Lady'],
            ['Snake','Fury'],
            ['Fallen','Fury'],
            ['Vile','Fury']
        ],
        devils:[
            {                name:'Lucifer',     name_tw:'露西法', name_en:'',          rarity:5,                grade:98, icon:'maou_rusifua.png', skills:["Megidolaon","Trisagion","Morning Star"], skill4:["Vitality Amp III","Titanomachia","Recarmdra","Butcher","Drain Light"], skill5:["","Mudodyne","Null Charm","Elec Boost","Marin Karion"],elements:["Resist","","","","","Weak","Repel"], type:'Attack'            },
            {                name:'Mara',         name_tw:'魔羅', name_en:'',      rarity:5,                grade:90, icon:'maou_mara.png', skills:["Null Bind","Titanomachia","Hell Thrust"], skill4:["Megaton Raid","Soul Drain","Charge","Phys Pierce","Null Ice"], skill5:["","Thunder Reign","Desolateon","Mamakajaon","Hellfire"],elements:["","","Weak","Drain","","Resist","Resist"], type:'Attack'            },
            {                name:'Surt',         name_tw:'史爾特爾', name_en:'',     rarity:5,                grade:83, icon:'maou_suruto.png', skills:["Berserker God","Tetra Shift","Ragnarok"], skill4:["Intimidating Stance","Maragidyne","Lydia","Fire Pierce","Null Ice"], skill5:["","Deadly Poison","Force Boost","Rakunda","Eat Whole"],elements:["","Drain","Weak","","","",""], type:'Attack'            },
            {                name:'Loki',           name_tw:'洛基', name_en:'',    rarity:4,                grade:75, icon:'maou_roki.png', skills:["Zandyne","Agidyne","Trickster"], skill4:["Ziodyne","Bufudyne","Curse","Void Dark Zones","Resist Light"], skill5:["","Bloody Glee","Eat Whole","Mamudoon","Mudoon"],elements:["","","Null","","Resist","Weak","Resist"], type:'Attack'           },
            {                name:'Beelzebub',     name_tw:'別西卜', name_en:'',          rarity:4,                grade:68, icon:'maou_beruzebubu.png', skills:["Mudodyne","Mazionga","Gluttony"], skill4:["Wild Instinct","Bolt Storm","Outbreak","Makara Shift","Repel Light"], skill5:["","Madesolateon","Resist Phys","Bloody Glee","Resist Elec"],elements:["","","","Resist","Resist","Null","Null"], type:'Attack'            },
            {                name:'King Frost',     name_tw:'冰傑克王', name_en:'',          rarity:4,                grade:64, icon:'maou_jyakuhurosuto.png', skills:["Ice Boost","Megaton Press","Cold World"], skill4:["","Glacial Blast","Concentrate","Luck Amp III","Resist Fire"], skill5:["","Bufudyne","Binge Eating","Hellish Mask","Resist Bind"],elements:["","Weak","Null","","","Resist",""], type:'Attack'            },
            {                name:'Abaddon',       name_tw:'阿巴頓', name_en:'',        rarity:4,                grade:60, icon:'maou_abadon.png', skills:["Retaliate","Maragion","Binge Eating"], skill4:["Hellfire","Megaton Raid","Madesolate","Bloody Glee","Null Phys"], skill5:["","Agility Amp I","Hellish Mask","Ju","Meclosedi"],elements:["","Repel","","Weak","","",""], type:'Attack'            },
            {                name:'Horkos',       name_tw:'奧迦斯', name_en:'',        rarity:3,                grade:46, icon:'maou_okasu.png', skills:["Endure","Retaliate","Hellfire"], skill4:["Auto-Rakukaja","Power Hit","Tetra Break","Vitality Amp II","Null Ice"], skill5:["","Mabufu","Zan","Wild Guess","Fast Recovery"],elements:["Resist","","Weak","","","Weak",""], type:'Attack'            }
        ]
    },
    {
        name:'Haunt',
        name_tw:'Haunt',
        name_en:'Haunt',
        formulas:[
            ['Beast','Megami'],
            ['Fairy','Megami'],
            ['Vile','Herald'],
            ['Vile','Brute'],
            ['Wilder','Herald'],
            ['Wilder','Fury'],
            ['Wilder','Lady'],
            ['Foul','Fairy'],
            ['Foul','Vile'],
            ['Tyrant','Megami'],
            ['Tyrant','Kishin'],
            ['Tyrant','Brute'],
            ['Tyrant','Vile']
        ],
        devils:[
            {                name:'Vetala',        name_tw:'毘陀羅', name_en:'',       rarity:3,                grade:55, icon:'yuuki_vetara.png', skills:["Lydia Break","Bufudyne","Eat Whole"], skill4:["Rampage","Energy Drain","Acid Breath","Resist Poison","Resist Fire"], skill5:["","Cursedi","Agility Amp I","Heat Wave","Agility Amp I"],elements:["","Weak","","","","Weak","Null"], type:"Attack"            },
            {                name:'Chatterskull',   name_tw:'笑面骷髏', name_en:'',            rarity:3,                grade:44, icon:'yuuki_rahuinsukaru.png', skills:["Discord","Mudoon","Deathtouch"], skill4:["Dekaja","Hades Blast","War Cry","Null Bind","Resist Force"], skill5:["","Mow Down","Posumudi","Rampage","Mazio"],elements:["","Drain","Weak","","","Weak","Null"], type:"Support"            },
            {                name:'Legion',          name_tw:'惡靈軍團', name_en:'',     rarity:2,                grade:34, icon:'yuuki_region.png', skills:["Mazan","Mudo","Agi"], skill4:["Darkbound","Wind Breath","Makara Break","Force Boost","Resist Fire"], skill5:["","Luck Amp I","Heat Wave","Mabufu","Meweakdi"],elements:["","","","Weak","","Weak","Resist"], type:"Attack"            },
            {                name:'Pisaca',      name_tw:'畢舍遮', name_en:'',         rarity:2,                grade:26, icon:'yuuki_pisyatya.png', skills:["Mamudo","Charm Bite","Life Drain"], skill4:["Ju","Mudoon","Mashibaboo","Dmg Panel V II","Resist Ice"], skill5:["","Cleave","Hellish Mask","Hama","Good Aim"],elements:["","Weak","","","Null","Weak","Resist"], type:"Support"            },
            {                name:'Mou-Ryo',        name_tw:'魍魎', name_en:'',       rarity:2,                grade:20, icon:'yuuki_mouryou.png', skills:["Mudo","Shibabooon","Fire Breath"], skill4:["Spirit Drain","Evil Gaze","Cursedi","Magic Amp I","Repel Dark"], skill5:["","Weakdi","Rampage","Meclosedi","Dodge"],elements:["","","","","","Weak","Null"], type:"Attack"            },
            {                name:'Obariyon',        name_tw:'背負小鬼', name_en:'',       rarity:1,                grade:7, icon:'yuuki_obariyon.png', skills:["Closedi","Media",""], skill4:["Lunge","Rampage","Sukunda","Dodge","Resist Fire"], skill5:["","Madness","Mecursedi","Hellish Mask","Mahama"],elements:["","","Weak","Resist","","Weak","Null"], type:"Recovery"            },
            {                name:'Preta',             name_tw:'餓鬼', name_en:'',  rarity:1,                grade:4, icon:'yuuki_gaki.png', skills:["Bufu","Mudo",""], skill4:["Mabufu","Life Drain","Discord","Good Aim","Resist Force"], skill5:["","Heat Wave","Meparaladi","Mamudo","Strength Amp I"],elements:["","Weak","Resist","","Weak","Weak","Null"], type:"Attack"            }
        ]
    },
    {
        name:'Fiend',
        name_tw:'Fiend',
        name_en:'Fiend',
        formulas:[],
        devils:[
            { name:'Trumpeter', name_tw:'吹號者', name_en:'', rarity:5, grade:94, icon:'majin_toranpeta.png', skills:['Concentrate','Soul Drain',"Apocalypse"], skill4:['Mamakajaon','Judgement','Curse','Auto-Rakukaja','Resist Phys'], skill5:['','Tarukaja','Mabufula','Vorpal Blade','Resist Fire'], elements:['','','','','','Null','Null'], type:'Attack'},
            { name:'Alice', name_tw:'愛麗絲', name_en:'', rarity:5, grade:89, icon:'majin_arisu.png', skills:['Mamudoon','Mudodyne','Die for Me!'], skill4:['Soul Drain','Hell Gaze','Majuon','Dark Amp','Repel Light'], skill5:['','Glacial Blast','Mabufudyne','Resist Curse','Hurricane Slash'], elements:['','','','','','Weak','Repel'], type:'Attack'},
            {   name:'White Rider', name_tw:'白騎士', name_en:'', rarity:4, grade:74, icon:'majin_waitonaito.png', skills:['Ziodyne','White Noise',"God's Bow"], skill4:['Bolt Storm','Soul Drain','Recarmdra','Null Bind','Null Force'], skill5:['','Bufula','Good Aim','Heat Wave','Bufu'], elements:['','','','Drain','Weak','Resist','Resist'], type:'Attack'}
        ]
    },
    {
        name:'Hero',
        name_tw:'Hero',
        name_en:'Hero',
        formulas:[],
        devils:[
            { name:'Yoshitsune', name_tw:'義經', name_en:'', rarity:5, grade:97, icon:'eiyuu_yositune.png', skills:['Vorpal Blade','Mana Aid','Hassou Tobi'], skill4:['Enduring Soul','Gigantomachia','Tetrakarn','Phys Amp','Drain Phys'], skill5:['',"God's Hand",'Auto-Sukukaja','Savage Glee','Resist Ice'], elements:['Resist','','','','','Null','Null'], type:'Attack'},
            { name:'Huang Di', name_tw:'皇帝', name_en:'', rarity:5, grade:88, icon:'eiyuu_koutei.png', skills:['Hades Blast','Superior Power','Yinlong Killer'], skill4:['','Berserker God','Salvation','Null Charm','Repel Light'], skill5:['','Auto-Tarukaja','Null Phys','Serial Killer','Infernal Mask'], elements:['','Resist','Resist','Resist','Resist','',''], type:'Attack'},
            { name:'Siegfried', name_tw:'齊格飛', name_en:'', rarity:5, grade:83, icon:'eiyuu_jikuhurito.png', skills:['Berserker God','Rebellion','Arms Mastery'], skill4:['Life Aid','Titanomachia','Charge','Enduring Soul','Null Force'], skill5:['','Maziodyne','Trisagion','Megidola','Evil Gaze'], elements:['Drain','','','','','',''], type:'Attack'},
            { name:"Jeanne d'Arc", name_tw:'貞德', name_en:'', rarity:4, grade:78, icon:'eiyuu_jannu.png', skills:['Heal Boost','Holy Wrath','Orleans Prayer'], skill4:['Life Aid','Judgement','Silent Prayer','Null Mute','Repel Fire'], skill5:['','Mind Break','Mediarama','Purgatory','Zanma'], elements:['','Weak','Resist','Resist','Resist','',''], type:'Recovery'}
        ]
    },
    {
        name:'Rumor',
        name_tw:'Rumor',
        name_en:'Rumor',
        formulas:[],
        devils:[
            { name:'Kamiotoko', name_tw:'啃咬魔', name_en:'', rarity:2, grade:25, icon:'kaii_kamiotoko.png', skills:['Mudoon','Insanity','Paralyzing Bite'], skill4:['War Cry','Eat Whole','Discord','Luck Amp I','Null Force'], skill5:['','Rampage','Dia','Mahama','Bloody Glee'], elements:['','','','','','Weak','Repel'], type:'Support'}
        ]
    },
    {
        name:'UMA',
        name_tw:'珍獸',
        name_en:'UMA',
        formulas:[],
        devils:[
            { name:'Hare of Inaba', name_tw:'因幡白兔', name_en:'',rarity:3, grade:41, icon:'tinjyuu_inabasirousagi.png', skills:['Dekaja','Media','Trap Free'], skill4:['Recarm','Madness Nails','Discord','Agility Amp I','Null Fire'], skill5:['','Mamudo','Mahama','Mecursedi','Meweakdi'], elements:['','Weak','','','','',''], type:'Recovery'},
            { name:'Chupacabra', name_tw:'卓柏卡布拉', name_en:'',rarity:1, grade:15, icon:'tinjyuu_typakabura.png', skills:['Mazan','Stealth','Trap Free'], skill4:['Auto-Sukukaja','Spirit Drain','Paraladi','Hellish Mask','Resist Elec'], skill5:['','Mamudo','Media','Vitality Amp I','Wild Guess'], elements:['','','','Weak','','',''], type:'Attack'}
        ]
    },
    {
        name:'Enigma',
        name_tw:'Enigma',
        name_en:'Enigma',
        formulas:[],
        devils:[
            { name:'Kama', name_tw:'伽摩', name_en:'',rarity:4, grade:75, icon:'hisin_kama.png', skills:['Speedster','Dekunda',"Divine Bows' Allure"], skill4:['Vorpal Blade','Hurricane Slash','Silent Prayer','Auto-Sukukaja','Repel Fire'], skill5:['','Resist Force','Meposumudi','Toxic Sting','Tarunda'], elements:['Resist','Weak','','','','Resist',''], type:'Support'},
            { name:'Kinmamon', name_tw:'君真物', name_en:'',rarity:3, grade:55, icon:'hisin_kinmamon.png', skills:['Megido','Barrier','Mutant'], skill4:['Megidola','Energy Drain','Amrita','Dodge','Null Dark'], skill5:['','Vitality Amp I','Dmg Panel V I','Madness','Cursedi'], elements:['','Null','Weak','','','Resist','Resist'], type:'Support'},
            { name:'Kanbari', name_tw:'加牟波理', name_en:'',rarity:2, grade:30, icon:'hisin_kanbari.png', skills:['Rampage','Hamaon','Luck'], skill4:['Megaton Press','Mahama','Mecursedi','Mana Aid','Resist Fire'], skill5:['','','','',''], elements:['Weak','','','','','Resist','Weak'], type:'Attack'}
        ]
    },
    {
        name:'Zealot',
        name_tw:'Zealot',
        name_en:'Zealot',
        formulas:[],
        devils:[
            { name:'Attis', name_tw:'阿提斯', name_en:'',rarity:4, grade:65, icon:'kyousin_ateisu.png', skills:['Enduring Soul','Recarmdra','Mist Slash'], skill4:['Life Aid','Mabufudyne','Diarama','Null Charm','Null Ice'], skill5:['','Agility Amp II','Maragion','Dmg Panel V I','Mecharmdi'], elements:['Resist','','','','','',''], type:'Attack'}
        ]
    },
    {
        name:'Entity',
        name_tw:'Entity',
        name_en:'Entity',
        formulas:[],
        devils:[
            { name:'Alilat', name_tw:'阿利拉特', name_en:'',rarity:5, grade:85, icon:'irei_arirato.png', skills:['Megidola','Infernal Mask','Bane of Pierce'], skill4:['Diarahan','Soul Drain','Mediarama','Mana Gain','Null Phys'], skill5:['','','','',''], elements:['Resist','','','','','Resist','Resist'], type:'Support'}
        ]
    }
];

const skill_stable = [
    {
        name:"Physical",
        name_tw:"Physical",
        name_en:"",
        skills:[
            //Physical
            {"name":"Cleave","name_tw":"斬擊","desc":"Inflicts Phys (Physical) damage with 120 power on a Single Enemy.","mp":4,"point":1,"element":"Physical"},
            {"name":"Fatal Sword","name_tw":"絕命劍","desc":"Inflicts Phys (Physical) damage with 140 power on a Single Enemy.","mp":5,"point":6,"element":"Physical"},
            {"name":"Berserker God","name_tw":"怪力亂神","desc":"Inflicts Phys (Physical) damage with 160 power on a Single Enemy.","mp":6,"point":9,"element":"Physical"},
            {"name":"Megaton Raid","name_tw":"百萬噸襲擊","desc":"Inflicts Phys (Physical) damage with 180 power on a Single Enemy.","mp":7,"point":"12","element":"Physical"},
            {"name":"God's Hand","name_tw":"神之手","desc":"Inflicts Phys (Physical) damage with 200 power on a Single Enemy.","mp":8,"point":"15","element":"Physical"},
            {"name":"Mow Down","name_tw":"橫斬","desc":"Inflicts Phys (Physical) damage with 80 power on All Enemies.","mp":4,"point":2,"element":"Physical"},
            {"name":"Vajra Blast","name_tw":"金剛發破","desc":"Inflicts Phys (Physical) damage with 100 power on All Enemies.","mp":5,"point":4,"element":"Physical"},
            {"name":"Hades Blast","name_tw":"Hades Blast","desc":"Inflicts Phys (Physical) damage with 120 power on All Enemies.","mp":6,"point":6,"element":"Physical"},
            {"name":"Vorpal Blade","name_tw":"Vorpal Blade","desc":"Inflicts Phys (Physical) damage with 140 power on All Enemies.","mp":7,"point":8,"element":"Physical"},
            {"name":"Gigantomachia","name_tw":"巨人之戰","desc":"Inflicts Phys (Physical) damage with 160 power on All Enemies.","mp":8,"point":"10","element":"Physical"},
            {"name":"Lunge","name_tw":"突擊","desc":"Inflicts Phys (Physical) damage with 30% crit rate and 115 power on a Single Enemy.","mp":4,"point":2,"element":"Physical"},
            {"name":"Oni-Kagura","name_tw":"鬼神樂","desc":"Inflicts Phys (Physical) damage with 30% crit rate and 130 power on a Single Enemy.","mp":5,"point":5,"element":"Physical"},
            {"name":"Mortal Jihad","name_tw":"絕命鬥爭","desc":"Inflicts Phys (Physical) damage with 30% crit rate and 145 power on a Single Enemy.","mp":6,"point":7,"element":"Physical"},
            {"name":"Heat Wave","name_tw":"灼熱波浪","desc":"Inflicts Phys (Physical) damage with 30% crit rate and 70 power on All Enemies.","mp":5,"point":2,"element":"Physical"},
            {"name":"Megaton Press","name_tw":"百萬噸重壓","desc":"Inflicts Phys (Physical) damage with 30% crit rate and 90 power on All Enemies.","mp":6,"point":4,"element":"Physical"},
            {"name":"Titanomachia","name_tw":"泰坦之戰","desc":"Inflicts Phys (Physical) damage with 30% crit rate and 110 power on All Enemies.","mp":7,"point":6,"element":"Physical"},
            {"name":"Gungnir","name_tw":"永恆之槍","desc":"Inflicts Phys (Physical) damage with 30% crit rate and 145 power on All Enemies. (3 uses)","mp":7,"point":null,"element":"Physical"},
            {"name":"Yinlong Killer","name_tw":"應龍擊破","desc":"Inflicts Phys (Physical) damage with 50% crit rate and 150 power on All Enemies.","mp":8,"point":null,"element":"Physical"},
            {"name":"Rampage","name_tw":"橫衝直撞","desc":"Inflicts Phys (Physical) damage 2 to 3 times with 45 power on Random Enemy/(ies).","mp":3,"point":3,"element":"Physical"},
            {"name":"Darkbound","name_tw":"神威之擊","desc":"Inflicts Phys (Physical) damage 2 to 3 times with 55 power on Random Enemy/(ies).","mp":4,"point":5,"element":"Physical"},
            {"name":"Madness Nails","name_tw":"狂亂硬爪","desc":"Inflicts Phys (Physical) damage 2 to 3 times with 65 power on Random Enemy/(ies).","mp":5,"point":7,"element":"Physical"},
            {"name":"Hell Claw","name_tw":"地獄兇爪","desc":"Inflicts Phys (Physical) damage 3 times with 30% crit rate and 65 power on Random Enemy/(ies).","mp":5,"point":7,"element":"Physical"},
            {"name":"Nihil Claw","name_tw":"虛空爪激","desc":"Inflicts Phys (Physical) damage 2 to 3 times with 75 power on Random Enemy/(ies).","mp":6,"point":9,"element":"Physical"},
            {"name":"Tempest Slash","name_tw":"五月雨斬","desc":"Inflicts Phys (Physical) damage 2 to 5 times with 50 power on Random Enemy/(ies).","mp":5,"point":7,"element":"Physical"},
            {"name":"Hurricane Slash","name_tw":"剎那五月雨擊","desc":"Inflicts Phys (Physical) damage 2 to 5 times with 65 power on Random Enemy/(ies).","mp":7,"point":9,"element":"Physical"},
            {"name":"Hassou Tobi","name_tw":"八艘跳躍","desc":"Inflicts Phys (Physical) damage 8 times with 35 power on Random Enemy/(ies).","mp":7,"point":null,"element":"Physical"},
            {"name":"Mist Slash","name_tw":"亂・霞霧斬擊","desc":"Inflicts Phys (Physical) damage 3 to 5 times with 50 power on Random Enemy/(ies).","mp":6,"point":null,"element":"Physical"},
            {"name":"Gae Bolg","name_tw":"千棘魔槍","desc":"Inflicts Phys (Physical) damage 4 to 6 times with 50 power on Random Enemy/(ies).","mp":7,"point":null,"element":"Physical"},
            {"name":"Toxic Sting","name_tw":"Toxic Sting","desc":"Inflicts Phys (Physical) damage with 120 power on a Single Enemy with 40% chance to inflict Poison.","mp":5,"point":6,"element":"Physical"},
            {"name":"Binding Claw","name_tw":"束縛爪擊","desc":"Inflicts Phys (Physical) damage with 120 power on a Single Enemy with 40% chance to inflict Bind.","mp":5,"point":6,"element":"Physical"},
            {"name":"Paralyzing Bite","name_tw":"麻痺咬痕","desc":"Inflicts Phys (Physical) damage with 160 power on a Single Enemy with 35% chance to inflict Poison.","mp":5,"point":null,"element":"Physical"},
            {"name":"Dark Sword","name_tw":"暗夜劍","desc":"Inflicts Phys (Physical) damage with 120 power on a Single Enemy with 40% chance to inflict Mute.","mp":5,"point":6,"element":"Physical"},
            {"name":"Charm Bite","name_tw":"甜蜜輕咬","desc":"Inflicts Phys (Physical) damage with 120 power on a Single Enemy with 40% chance to inflicts Charm.","mp":5,"point":6,"element":"Physical"},
            {"name":"Eat Whole","name_tw":"大快朵頤","desc":"Inflicts Phys (Physical) damage with 120 power on a Single Enemy, while healing caster 25% of damage dealt.","mp":5,"point":6,"element":"Physical"},
            {"name":"Binge Eating","name_tw":"Binge Eating","desc":"Inflicts Phys (Physical) damage with 140 power on a Single Enemy, while healing caster 40% of damage dealt.","mp":6,"point":8,"element":"Physical"},
            {"name":"Power Hit","name_tw":"捨身一擊","desc":"Use 10% of own HP to inflict Phys (Physical) damage with 170 power on a Single Enemy.","mp":7,"point":6,"element":"Physical"},
            {"name":"Hell Thrust","name_tw":"地域刺擊","desc":"Inflicts Phys (Physical) damage with 50 power on Random Enemy/(ies) 4 times with a 35% chance to inflict Charm.","mp":7,"point":null,"element":"Physical"}
        ]
    },
    {
        name:"Fire",
        name_tw:"Fire",
        name_en:"",
        skills:[
            //火
            {"name":"Agi","name_tw":"亞基","desc":"Inflicts Fire (Magic) damage with 120 power on a Single Enemy.","mp":4,"point":1,"element":"Fire"},
            {"name":"Agilao","name_tw":"亞基拉歐","desc":"Inflicts Fire (Magic) damage with 140 power on a Single Enemy.","mp":5,"point":6,"element":"Fire"},
            {"name":"Agidyne","name_tw":"亞基達因","desc":"Inflicts Fire (Magic) damage with 160 power on a Single Enemy.","mp":6,"point":9,"element":"Fire"},
            {"name":"Trisagion","name_tw":"多利斯亞基翁","desc":"Inflicts Fire (Magic) damage with 180 power on a Single Enemy.","mp":7,"point":12,"element":"Fire"},
            {"name":"Maragi","name_tw":"瑪哈拉基","desc":"Inflicts Fire (Magic) damage with 80 power on All Enemies.","mp":5,"point":2,"element":"Fire"},
            {"name":"Maragion","name_tw":"瑪哈拉基翁","desc":"Inflicts Fire (Magic) damage with 100 power on All Enemies.","mp":6,"point":6,"element":"Fire"},
            {"name":"Maragidyne","name_tw":"瑪哈亞吉達因","desc":"Inflicts Fire (Magic) damage with 120 power on All Enemies.","mp":7,"point":9,"element":"Fire"},
            {"name":"Fire Breath","name_tw":"火焰吐息","desc":"Inflicts Fire (Magic) damage 2 to 4 times with 40 power on Random Enemy/ies.","mp":4,"point":7,"element":"Fire"},
            {"name":"Hellfire","name_tw":"地獄業火","desc":"Inflicts Fire (Magic) damage 2 to 4 times with 50 power on Random Enemy/ies.","mp":5,"point":"10","element":"Fire"},
            {"name":"","name_tw":"諸神的黃昏","desc":"Inflicts Fire (Magic) damage with 215 power on a Single Enemy.","mp":7,"point":null,"element":"Fire"}
        ]
    },
    {
        name:"Ice",
        name_tw:"冰凍",
        name_en:"",
        skills:[
            //冰
            {"name":"Bufu","name_tw":"布芙","desc":"Inflicts Ice (Magic) damage with 120 power on a Single Enemy.","mp":4,"point":1,"element":"Ice"},
            {"name":"Bufula","name_tw":"布芙拉","desc":"Inflicts Ice (Magic) damage with 140 power on a Single Enemy.","mp":"5","point":"6","element":"Ice"},
            {"name":"Bufudyne","name_tw":"布芙達因","desc":"Inflicts Ice (Magic) damage with 160 power on a Single Enemy.","mp":6,"point":9,"element":"Ice"},
            {"name":"Ice Age","name_tw":"大冰河時期","desc":"Inflicts Ice (Magic) damage with 180 power on a Single Enemy.","mp":7,"point":12,"element":"Ice"},
            {"name":"Mabufu","name_tw":"瑪哈布芙","desc":"Inflicts Ice (Magic) damage with 80 power on All Enemies.","mp":5,"point":2,"element":"Ice"},
            {"name":"Mabufula","name_tw":"瑪哈布芙拉","desc":"Inflicts Ice (Magic) damage with 100 power on All Enemies.","mp":6,"point":6,"element":"Ice"},
            {"name":"Mabufudyne","name_tw":"瑪哈布芙達因","desc":"Inflicts Ice (Magic) damage with 120 power on All Enemies.","mp":7,"point":9,"element":"Ice"},
            {"name":"Ice Breath","name_tw":"極寒吐息","desc":"Inflicts Ice (Magic) damage 2 to 4 times with 40 power on Random Enemy/ies.","mp":4,"point":7,"element":"Ice"},
            {"name":"Glacial Blast","name_tw":"絕對零度","desc":"Inflicts Ice (Magic) damage 2 to 4 times with 50 power on Random Enemy/ies.","mp":5,"point":10,"element":"Ice"},
            {"name":"Cold World","name_tw":"Cold World","desc":"Inflicts Ice (Magic) damage with 130 power on All Enemies and reduces enemy's DEF 20% for 3 turns.","mp":7,"point":null,"element":"Ice"}
        ]
    },
    {
        name:"Elec",
        name_tw:"電擊",
        name_en:"",
        skills:[
            //雷
            {"name":"Zio","name_tw":"吉歐","desc":"Inflicts Elec (Magic) damage with 120 power on a Single Enemy.","mp":4,"point":1,"element":"Elec"},
            {"name":"Zionga","name_tw":"吉歐加","desc":"Inflicts Elec (Magic) damage with 140 power on a Single Enemy.","mp":5,"point":6,"element":"Elec"},
            {"name":"Ziodyne","name_tw":"吉歐達因","desc":"Inflicts Elec (Magic) damage with 160 power on a Single Enemy.","mp":6,"point":9,"element":"Elec"},
            {"name":"Thunder Reign","name_tw":"真理之雷","desc":"Inflicts Elec (Magic) damage with 180 power on a Single Enemy.","mp":"7","point":12,"element":"Elec"},
            {"name":"Mazio","name_tw":"瑪哈吉歐","desc":"Inflicts Elec (Magic) damage with 80 power on All Enemies.","mp":5,"point":2,"element":"Elec"},
            {"name":"Mazionga","name_tw":"瑪哈吉歐加","desc":"Inflicts Elec (Magic) damage with 100 power on All Enemies.","mp":6,"point":6,"element":"Elec"},
            {"name":"Maziodyne","name_tw":"瑪哈吉歐達因","desc":"Inflicts Elec (Magic) damage with 120 power on All Enemies.","mp":7,"point":9,"element":"Elec"},
            {"name":"Shock","name_tw":"Shock","desc":"Inflicts Elec (Magic) damage 2 to 4 times with 40 power on Random Enemy/ies.","mp":4,"point":7,"element":"Elec"},
            {"name":"Bolt Storm","name_tw":"衝擊波","desc":"Inflicts Elec (Magic) damage 2 to 4 times with 50 power on Random Enemy/ies.","mp":5,"point":10,"element":"Elec"},
            {"name":"Mjolnir","name_tw":"雷神之槌","desc":"Inflicts Elec (Magic) damage 3 to 5 times with 60 power on Random Enemy/ies.","mp":7,"point":null,"element":"Elec"}
        ]
    },
    {
        name:"Force",
        name_tw:"衝擊",
        name_en:"",
        skills:[
            //衝
            {"name":"Zan","name_tw":"颯","desc":"Inflicts Force (Magic) damage with 120 power on a Single Enemy.","mp":4,"point":1,"element":"Force"},
            {"name":"Zanma","name_tw":"颯瑪","desc":"Inflicts Force (Magic) damage with 140 power on a Single Enemy.","mp":5,"point":6,"element":"Force"},
            {"name":"Zandyne","name_tw":"颯達因","desc":"Inflicts Force (Magic) damage with 160 power on a Single Enemy.","mp":6,"point":9,"element":"Force"},
            {"name":"Deadly Wind","name_tw":"Deadly Wind","desc":"Inflicts Force (Magic) damage with 180 power on a Single Enemy.","mp":7,"point":12,"element":"Force"},
            {"name":"Mazan","name_tw":"瑪哈颯","desc":"Inflicts Force (Magic) damage with 80 power on All Enemies.","mp":5,"point":2,"element":"Force"},
            {"name":"Mazanma","name_tw":"瑪哈颯瑪","desc":"Inflicts Force (Magic) damage with 100 power on All Enemies.","mp":6,"point":6,"element":"Force"},
            {"name":"Mazandyne","name_tw":"瑪哈颯達因","desc":"Inflicts Force (Magic) damage with 120 power on All Enemies.","mp":7,"point":9,"element":"Force"},
            {"name":"Wind Breath","name_tw":"狂風吐息","desc":"Inflicts Force (Magic) damage 2 to 4 times with 40 power on Random Enemy/ies.","mp":4,"point":7,"element":"Force"},
            {"name":"Twister","name_tw":"龍捲風","desc":"Inflicts Force (Magic) damage 2 to 4 times with 50 power on Random Enemy/ies.","mp":5,"point":10,"element":"Force"},
            {"name":"Kusanagi","name_tw":"","desc":"Inflicts Force (Magic) damage with 205 power on a Single Enemy and increases own party's ATK 20% for 3 turns. The damage inflicted by this skill is dependent on Phys ATK.","mp":6,"point":null,"element":"Force"}
        ]
    },
    {
        name:"Light",
        name_tw:"Light",
        name_en:"",
        skills:[
            //Light
            {"name":"Hama","name_tw":"哈瑪","desc":"Inflicts Magic Light damage with 120 power on a Single Enemy.","mp":4,"point":1,"element":"Light"},
            {"name":"Hamaon","name_tw":"哈瑪翁","desc":"Inflicts Magic Light damage with 140 power on a Single Enemy.","mp":5,"point":6,"element":"Light"},
            {"name":"Hamadyne","name_tw":"哈瑪達因","desc":"Inflicts Magic Light damage with 160 power on a Single Enemy.","mp":6,"point":9,"element":"Light"},
            {"name":"Thunderclap","name_tw":"制裁雷火","desc":"Inflicts Magic Light damage with 180 power on a Single Enemy.","mp":7,"point":12,"element":"Light"},
            {"name":"Mahama","name_tw":"瑪哈瑪","desc":"Inflicts Magic Light damage with 80 power on All Enemies.","mp":5,"point":2,"element":"Light"},
            {"name":"Mahamaon","name_tw":"瑪哈瑪翁","desc":"Inflicts Magic Light damage with 100 power on All Enemies.","mp":6,"point":6,"element":"Light"},
            {"name":"Mahamadyne","name_tw":"瑪翰達因","desc":"Inflicts Magic Light damage with 120 power on All Enemies.","mp":7,"point":9,"element":"Light"},
            {"name":"Judgement Light","name_tw":"審判之光","desc":"Inflicts Magic Light damage 2 to 4 times with 40 power on Random Enemy/ies.","mp":7,"point":7,"element":"Light"},
            {"name":"Holy Wrath","name_tw":"天譴","desc":"Inflicts Magic Light damage 2 to 4 times with 50 power on Random Enemy/ies.","mp":5,"point":10,"element":"Light"},
            {"name":"God's Bow","name_tw":"神差箭矢","desc":"Inflicts Magic Light damage with 200 power on a Single Enemy, with 50% kill rate.","mp":7,"point":null,"element":"Light"},
            {"name":"Ordeal of Hatred","name_tw":"憎惡的試煉","desc":"Inflicts Magic Light damage with 130 power on All Enemies and increases ATK or DEF or EVA/ACC by 20% for 3 turns.%減少させる","mp":7,"point":null,"element":"Light"},
            {"name":"Soul Judgement","name_tw":"斷罪刑魂","desc":"Inflicts Magic Light damage 7 times with 30 power on Random Enemy/ies.","mp":5,"point":null,"element":"Light"}
        ]
    },
    {
        name:"Dark",
        name_tw:"咒殺",
        name_en:"",
        skills:[
            //Dark
            {"name":"Mudo","name_tw":"姆多","desc":"Inflicts Magic Dark damage with 120 power on a Single Enemy.","mp":4,"point":1,"element":"Dark"},
            {"name":"Mudoon","name_tw":"姆多翁","desc":"Inflicts Magic Dark damage with 140 power on a Single Enemy.","mp":5,"point":6,"element":"Dark"},
            {"name":"Mudodyne","name_tw":"姆多達因","desc":"Inflicts Magic Dark damage with 160 power on a Single Enemy.","mp":6,"point":9,"element":"Dark"},
            {"name":"Hell Gaze","name_tw":"Hell Gaze","desc":"Inflicts Magic Dark damage with 180 power on a Single Enemy.","mp":7,"point":12,"element":"Dark"},
            {"name":"Mamudo","name_tw":"瑪哈姆多","desc":"Inflicts Magic Dark damage with 80 power on All Enemies.","mp":5,"point":2,"element":"Dark"},
            {"name":"Mamudoon","name_tw":"瑪哈姆多翁","desc":"Inflicts Magic Dark damage with 100 power on All Enemies.","mp":6,"point":6,"element":"Dark"},
            {"name":"Allure","name_tw":"瑪哈姆多達因","desc":"Inflicts Magic Dark damage with 120 power on All Enemies.","mp":7,"point":9,"element":"Dark"},
            {"name":"Evil Gaze","name_tw":"邪惡之眼","desc":"Inflicts Magic Dark damage 2 to 4 times with 40 power on Random Enemy/ies.","mp":4,"point":7,"element":"Dark"},
            {"name":"Purgatory","name_tw":"Purgatory","desc":"Inflicts Magic Dark damage 2 to 4 times with 50 power on Random Enemy/ies.","mp":5,"point":10,"element":"Dark"},
            {"name":"Allure","name_tw":"肉體的解放","desc":"Inflicts Magic Dark damage with 110 power on All Enemies with 35% chance to Inflicts Charm.","mp":6,"point":null,"element":"Dark"},
            {"name":"Gluttony","name_tw":"暴食重罪","desc":"Inflicts Magic Dark damage with 130 power on All Enemies, while healing caster 50% of damage dealt.","mp":7,"point":null,"element":"Dark"},
            {"name":"Die for Me!","name_tw":"可以為我而死嗎？","desc":"Kills a Single Enemy. 1 Use.","mp":7,"point":null,"element":"Dark"}
        ]
    },
    {
        name:"Almighty",
        name_tw:"萬能",
        name_en:"",
        skills:[
            //萬
            {"name":"Life Drain","name_tw":"Life Drain","desc":"Inflicts Magic Almighty damage with 120 power on a Single Enemy, while healing caster 25% of damage dealt.","mp":5,"point":3,"element":"Almighty"},
            {"name":"Deathtouch","name_tw":"死亡之觸","desc":"Inflicts Magic Almighty damage with 140 power on a Single Enemy, while healing caster 40% of damage dealt.","mp":6,"point":6,"element":"Almighty"},
            {"name":"Spirit Drain","name_tw":"Spirit Drain","desc":"Inflicts Magic Almighty damage with 100 power on a Single Enemy and drains 1 MP.","mp":6,"point":3,"element":"Almighty"},
            {"name":"Energy Drain","name_tw":"能量抽取","desc":"Inflicts Magic Almighty damage with 100 power on a Single Enemy, while healing caster 25% of damage dealt and drains 1 MP.","mp":7,"point":6,"element":"Almighty"},
            {"name":"Soul Drain","name_tw":"靈魂抽取","desc":"Inflicts Magic Almighty damage with 140 power on a Single Enemy, while healing caster 40% of damage dealt and drains 1 MP.","mp":8,"point":7,"element":"Almighty"},
            {"name":"Megido","name_tw":"米吉朵","desc":"Inflicts Magic Almighty damage with 80 power on All Enemies.","mp":6,"point":5,"element":"Almighty"},
            {"name":"Megidola","name_tw":"米吉朵拉","desc":"Inflicts Magic Almighty damage with 100 power on All Enemies.","mp":7,"point":8,"element":"Almighty"},
            {"name":"Megidolaon","name_tw":"米吉朵拉翁","desc":"Inflicts Magic Almighty damage with 120 power on All Enemies.","mp":8,"point":"12","element":"Almighty"},
            {"name":"Sea of Chaos","name_tw":"混沌之海","desc":"Inflicts Magic Almighty damage with 100 power on All Enemies and reduces enemy's DEF 20% for 3 turns.","mp":9,"point":null,"element":"Almighty"},
            {"name":"Judgement","name_tw":"審判","desc":"Inflicts Magic Almighty damage with 100 power on All Enemies and increases own party's ATK 20% for 3 turns.","mp":9,"point":"12","element":"Almighty"},
            {"name":"Mind Break","name_tw":"Mind Break","desc":"Inflicts Magic Almighty damage with 80 power on a Single Enemy and reduces MP by 3 MP.","mp":5,"point":6,"element":"Almighty"},
            {"name":"Fire of Sinai","name_tw":"西奈的神火","desc":"Inflicts Magic Almighty damage 5 times with 45 power on Random Enemy/ies.","mp":7,"point":null,"element":"Almighty"},
            {"name":"Pralaya","name_tw":"大劫","desc":"敵全体に万能属性の魔法型ダメージを威力100で与え、魔法型ダメージ反射状態と物理型ダメージ反射状態を解除する。このスキルによるダメージは物理攻撃力に依存する。","mp":8,"point":null,"element":"Almighty"},
            {"name":"Apocalypse","name_tw":"默示錄","desc":"Inflicts Magic Almighty damage with 110 power on All Enemies with 30% chance to inflict Mute.","mp":8,"point":null,"element":"Almighty"},
            {"name":"Morning Star","name_tw":"拂曉明星","desc":"Inflicts Magic Almighty damage with 150 power on All Enemies. (3 uses)","mp":8,"point":null,"element":"Almighty"},
            {"name":"Divine Bows' Allure","name_tw":"魅惑神弓","desc":"Inflicts Magic Almighty damage with 190 power on a Single Enemy with 45% chance to inflict Charm.","mp":8,"point":null,"element":"Almighty"}
        ]
    },
    {
        name:"Recovery",
        namw_tw:"Recovery",
        name_en:"Heal",
        skills:[
            //回
            {"name":"Dia","name_tw":"迪亞","desc":"Heals a Single Party Member with 50 power. (9 uses)","mp":4,"point":1,"element":"Null"},
            {"name":"Diara","name_tw":"迪亞拉","desc":"Heals a Single Party Member with 90 power. (9 uses)","mp":5,"point":5,"element":"Null"},
            {"name":"Diarama","name_tw":"迪亞拉瑪","desc":"Heals a Single Party Member with 130 power. (9 uses)","mp":6,"point":8,"element":"Null"},
            {"name":"Diarahan","name_tw":"迪亞拉瑪翰","desc":"Heals a Single Party Member with 170 power. (9 uses)","mp":7,"point":"11","element":"Null"},
            {"name":"Media","name_tw":"梅迪亞","desc":"Heals All Party Members with 25 power. (9 uses)","mp":6,"point":2,"element":"Null"},
            {"name":"Mediara","name_tw":"梅迪拉","desc":"Heals All Party Members with 60 power. (9 uses)","mp":7,"point":5,"element":"Null"},
            {"name":"Mediarama","name_tw":"梅迪拉瑪","desc":"Heals All Party Members with 95 power. (9 uses)","mp":8,"point":8,"element":"Null"},
            {"name":"Mediarahan","name_tw":"梅迪亞拉翰","desc":"Heals All Party Members with 130 power. (9 uses)","mp":9,"point":"11","element":"Null"},
            {"name":"Salvation","name_tw":"救世主喚起者","desc":"Heals All Party Members with 95 power. Cures all status aliments. (3 uses)","mp":"10","point":"15","element":"Null"},
            {"name":"Orleans Prayer","name_tw":"","desc":"Heals a Single Party Member with 130 power and recovers 3 MP. (6 uses)","mp":null,"point":null,"element":"Null"},
            //持回
            {"name":"Lydia","name_tw":"利迪亞","desc":"Casts Lydia on a Single Party Member, healing their HP at the beginning of their turn for 3 turns.","mp":4,"point":8,"element":"Null"},
            {"name":"Lydia Break","name_tw":"利迪亞破壞","desc":"Removes Lydia from All Enemies.","mp":3,"point":6,"element":"Null"},
            //復活
            {"name":"Recarm","name_tw":"利卡姆","desc":"Revive a Single Party Member with 10% HP. (3 uses)","mp":6,"point":6,"element":"Null"},
            {"name":"Samarecarm","name_tw":"薩瑪利卡姆","desc":"Revive a Single Party Member with full HP. (1 use)","mp":8,"point":8,"element":"Null"},
            {"name":"Recarmdra","name_tw":"利卡姆托拉","desc":"Revive All Party Members with full HP, caster dies. (1 use)","mp":8,"point":"10","element":"Null"},
            {"name":"Mother's Creation","name_tw":"","desc":"Revive a Single Party Member with full HP and endows Lydia. (1 use)","mp":8,"point":null,"element":"Null"},
            {"name":"Ce Acatls' Return","name_tw":"","desc":"Revive All Party Members with full HP. (1 use)","mp":null,"point":null,"element":"Null"},
            //解毒
            {"name":"Posumudi","name_tw":"病毒解除術","desc":"Cures a Single Party Member of Poison. Reduces the chance of being Poisoned during this wave by 30%.","mp":3,"point":1,"element":"Null"},
            {"name":"Meposumudi","name_tw":"梅波茲姆迪","desc":"Cures All Party Members of Poison. Reduces the chance of being Poisoned during this wave by 30%.","mp":4,"point":5,"element":"Null"},
            //解封
            {"name":"Closedi","name_tw":"克洛茲迪","desc":"Cures a Single Party Member of Mute. Reduces the chance of being Muteed during this wave by 30%.","mp":3,"point":1,"element":"Null"},
            {"name":"Meclosedi","name_tw":"梅克洛茲迪","desc":"Cures All Party Members of Mute. Reduces the chance of being Muteed during this wave by 30%.","mp":4,"point":5,"element":"Null"},
            //解縛
            {"name":"Paraladi","name_tw":"帕拉拉迪","desc":"Cures a Single Party Member of Bind. Reduces the chance of being Binded during this wave by 30%.","mp":3,"point":1,"element":"Null"},
            {"name":"Meparaladi","name_tw":"梅帕拉拉迪","desc":"Cures All Party Members of Bind. Reduces the chance of being Binded during this wave by 30%.","mp":4,"point":5,"element":"Null"},
            //解魅
            {"name":"Charmdi","name_tw":"查姆蒂","desc":"Cures a Single Party Member of Charm. Reduces the chance of being Charmed during this wave by 30%.","mp":3,"point":1,"element":"Null"},
            {"name":"Mecharmdi","name_tw":"梅查姆蒂","desc":"Cures All Party Members of Charm. Reduces the chance of being Charmed during this wave by 30%.","mp":4,"point":5,"element":"Null"},
            //解呪
            {"name":"Cursedi","name_tw":"卡斯迪","desc":"Cures a Single Party Member of Curse. Reduces the chance of being Cursed during this wave by 30%.","mp":3,"point":1,"element":"Null"},
            {"name":"Mecursedi","name_tw":"梅卡斯迪","desc":"Cures All Party Members of Curse. Reduces the chance of being Cursed during this wave by 30%.","mp":4,"point":5,"element":"Null"},
            //解虛
            {"name":"Weakdi","name_tw":"溫坤迪","desc":"Cures a Single Party Member of Weak. Reduces the chance of being Weakened during this wave by 30%.","mp":3,"point":1,"element":"Null"},
            {"name":"Meweakdi","name_tw":"梅溫庫迪","desc":"Cures All Party Members of Weak. Reduces the chance of being Weakened during this wave by 30%.","mp":4,"point":5,"element":"Null"},
            //解異常
            {"name":"Amrita","name_tw":"甘露","desc":"Cures all status ailments of a Single Party Member.","mp":4,"point":3,"element":"Null"},
            {"name":"Prayer","name_tw":"永恆的祈禱","desc":"Cures all status ailments of All Party Members.","mp":5,"point":8,"element":"Null"},
            {"name":"Silent Prayer","name_tw":"寂靜的禱告","desc":"Cures all status ailments of All Party Members and Enemies.","mp":7,"point":8,"element":"Null"},
            //狀態
            {"name":"Barrier","name_tw":"防壁","desc":"Casts a Barrier on a Single Party Member, granting immunity to all status ailments for 3 turns.","mp":4,"point":8,"element":"Null"},
            {"name":"Barrier Break","name_tw":"防壁破壞","desc":"Remove Barrier from All Enemies.","mp":3,"point":6,"element":"Null"}
        ]
    },
    {
        name:"Ailment",
        name_tw:"Ailment",
        name_en:"",
        skills:[
            //毒
            {"name":"Poisma","name_tw":"波伊佐瑪","desc":"40% chance to inflict Poison on a Single Enemy.","mp":5,"point":2,"element":"Null"},
            {"name":"Poismaon","name_tw":"波伊佐瑪翁","desc":"50% chance to inflict Poison on a Single Enemy.","mp":6,"point":null,"element":"Null"},
            {"name":"Mapoisma","name_tw":"瑪哈波伊佐瑪","desc":"30% chance to inflict Poison on All Enemies.","mp":6,"point":null,"element":"Null"},
            {"name":"Mapoismaon","name_tw":"瑪哈波伊佐瑪翁","desc":"40% chance to inflict Poison on All Enemies.","mp":7,"point":null,"element":"Null"},
            {"name":"Poison Breath","name_tw":"猛毒吐息","desc":"30% chance to inflict Poison 2 to 4 times on Random Enemy/ies.","mp":6,"point":7,"element":"Null"},
            //縛
            {"name":"Shibaboo","name_tw":"希巴縛","desc":"40% chance to inflict Bind on a Single Enemy.","mp":5,"point":2,"element":"Null"},
            {"name":"Shibabooon","name_tw":"希巴縛翁","desc":"50% chance to inflict Bind on a Single Enemy.","mp":6,"point":8,"element":"Null"},
            {"name":"Mashibaboo","name_tw":"瑪哈希巴縛","desc":"30% chance to inflict Bind on All Enemies.","mp":6,"point":5,"element":"Null"},
            {"name":"Mashibabooon","name_tw":"瑪哈希巴縛翁","desc":"40% chance to inflict Bind on All Enemies.","mp":7,"point":null,"element":"Null"},
            {"name":"Bind Voice","name_tw":"束縛咆嘯","desc":"30% chance to inflict Bind 2 to 4 times on Random Enemy/ies.","mp":6,"point":null,"element":"Null"},
            //魅
            {"name":"Marin Karin","name_tw":"瑪琳卡琳","desc":"40% chance to inflict Charm on a Single Enemy.","mp":5,"point":2,"element":"Null"},
            {"name":"Marin Karion","name_tw":"瑪琳卡琳翁","desc":"50% chance to inflict Charm on a Single Enemy.","mp":6,"point":null,"element":"Null"},
            {"name":"Mamarin Karin","name_tw":"瑪哈瑪琳卡琳","desc":"30% chance to inflict Charm on All Enemies.","mp":6,"point":5,"element":"Null"},
            {"name":"Mamarin Karion","name_tw":"瑪哈瑪琳卡琳翁","desc":"40% chance to inflict Charm on All Enemies.","mp":7,"point":null,"element":"Null"},
            {"name":"Sexy Dance","name_tw":"色誘之舞","desc":"30% chance to inflict Charm 2 to 4 times on Random Enemy/ies.","mp":6,"point":7,"element":"Null"},
            {"name":"Lotus Dance","name_tw":"蓮華之舞","desc":"60% chance to inflict Charm on All Enemies.","mp":6,"point":null,"element":"Null"},
            //封
            {"name":"Makajam","name_tw":"瑪卡加瑪","desc":"40% chance to inflict Mute on a Single Enemy.","mp":5,"point":2,"element":"Null"},
            {"name":"Makajamaon","name_tw":"瑪卡加瑪翁","desc":"50% chance to inflict Mute on a Single Enemy.","mp":6,"point":8,"element":"Null"},
            {"name":"Mamakajam","name_tw":"瑪哈瑪卡加瑪","desc":"30% chance to inflict Mute on All Enemies.","mp":6,"point":5,"element":"Null"},
            {"name":"Mamakajaon","name_tw":"瑪哈瑪卡加瑪翁","desc":"40% chance to inflict Mute on All Enemies.","mp":7,"point":9,"element":"Null"},
            {"name":"White Noise","name_tw":"白茫噪音","desc":"30% chance to inflict Mute 2 to 4 times on Random Enemy/ies.","mp":6,"point":7,"element":"Null"},
            //呪
            {"name":"Ju","name_tw":"祖","desc":"50% chance to inflict Curse on a Single Enemy.","mp":5,"point":2,"element":"Null"},
            {"name":"Juon","name_tw":"祖翁","desc":"60% chance to inflict Curse on a Single Enemy.","mp":6,"point":8,"element":"Null"},
            {"name":"Maju","name_tw":"瑪哈祖","desc":"40% chance to inflict Curse on All Enemies.","mp":6,"point":5,"element":"Null"},
            {"name":"Majuon","name_tw":"瑪哈祖翁","desc":"50% chance to inflict Curse on All Enemies.","mp":7,"point":9,"element":"Null"},
            {"name":"Curse","name_tw":"報應","desc":"40% chance to inflict Curse 1 to 4 times on Random Enemy/ies.","mp":6,"point":7,"element":"Null"},
            //虛
            {"name":"Desolate","name_tw":"特奏累托","desc":"70% chance to inflict Weak on a Single Enemy.","mp":5,"point":2,"element":"Null"},
            {"name":"Desolateon","name_tw":"特奏累托翁","desc":"80% chance to inflict Weak on a Single Enemy.","mp":6,"point":8,"element":"Null"},
            {"name":"Madesolate","name_tw":"瑪哈特奏累托","desc":"60% chance to inflict Weak on All Enemies.","mp":6,"point":5,"element":"Null"},
            {"name":"Madesolateon","name_tw":"瑪哈特奏累托翁","desc":"70% chance to inflict Weak on All Enemies.","mp":7,"point":9,"element":"Null"},
            {"name":"Outbreak","name_tw":"威力爆發","desc":"60% chance to inflict Weak 1 to 4 times on Random Enemy/ies.","mp":6,"point":7,"element":"Null"}
        ]
    },
    {
        name:"Support",
        name_tw:"Support",
        name_en:"",
        skills:[
            //蓄力
            {"name":"Charge","name_tw":"蓄力","desc":"Self enters a state of Charge. Increases the next Phys attack damage by 125%.","mp":6,"point":8,"element":"Null"},
            {"name":"Rebellion","name_tw":"反叛","desc":"Self enters a state of Might. The next Phys attack will have a Critical effect.","mp":6,"point":8,"element":"Null"},
            {"name":"Mega Boost","name_tw":"反叛魔象","desc":"Self enters a state of Charge and Might. Increases the next Phys attack damage by 125% and will have a Critical effect.","mp":6,"point":null,"element":"Null"},
            {"name":"Concentrate","name_tw":"專注","desc":"Self enters a state of Concentrate. Increases the next Mag attack damage by 125%.","mp":6,"point":8,"element":"Null"},
            {"name":"Discord","name_tw":"異調相斥","desc":"Removes Charge, Concentrate and Might from All Enemies.","mp":3,"point":6,"element":"Null"},
            {"name":"Tag","name_tw":"下一位","desc":"Self skips a turn without using a Press Turn Icon.","mp":3,"point":6,"element":"Null"},
            //反射
            {"name":"Tetrakarn","name_tw":"提特拉康","desc":"All Party Members repels Physical damage for 1 turn.","mp":7,"point":8,"element":"Null"},
            {"name":"Makarakarn","name_tw":"瑪卡拉康","desc":"All Party Members repels Magic damage for 1 turn.","mp":7,"point":8,"element":"Null"},
            {"name":"Five Elements ","name_tw":"Five Elements ","desc":"All Party Members repels Magic (including Almighty) damage for 1 turn.","mp":null,"point":null,"element":"Null"},
            {"name":"Tetra Break","name_tw":"提特拉破壞","desc":"Removes Repel Phys from All Enemies.","mp":3,"point":6,"element":"Null"},
            {"name":"Makara Break","name_tw":"瑪卡拉破壞","desc":"Removes Repel Mag from All Enemies.","mp":3,"point":6,"element":"Null"},
            //防即死
            {"name":"Tetraja","name_tw":"","desc":"All Party Members will evade Instant Kill for 1 turn","mp":null,"point":null,"element":"Null"},
            //強弱化
            {"name":"Tarukaja","name_tw":"塔爾卡加","desc":"Increases ATK of All Party Members by 20% for 3 turns.","mp":5,"point":6,"element":"Null"},
            {"name":"Rakukaja","name_tw":"拉庫卡加","desc":"Increases DEF of All Party Members by 20% for 3 turns.","mp":5,"point":6,"element":"Null"},
            {"name":"Sukukaja","name_tw":"斯庫卡加","desc":"Increases EV/AC of All Party Members by 20% for 3 turns.","mp":5,"point":6,"element":"Null"},
            {"name":"Tarunda","name_tw":"塔倫達","desc":"Reduces ATK of All Party Members by 20% for 3 turns.","mp":5,"point":6,"element":"Null"},
            {"name":"Rakunda","name_tw":"拉昆達","desc":"Reduces DEF of All Party Members by 20% for 3 turns.","mp":5,"point":6,"element":"Null"},
            {"name":"Sukunda","name_tw":"斯坤達","desc":"Reduces EV/AC of All Party Members by 20% for 3 turns.","mp":5,"point":6,"element":"Null"},
            {"name":"Dekaja","name_tw":"迪卡加","desc":"Remove buffs from All Enemies.","mp":5,"point":4,"element":"Null"},
            {"name":"Dekunda","name_tw":"迪坤達","desc":"Remove debuffs from All Party Members.","mp":5,"point":4,"element":"Null"},
            {"name":"Barong Dance","name_tw":"巴隆之舞","desc":"Heals All Party Members with 95 power and increases ATK, DEF, EV/AC of All Party Members by 20% for 3 turns. (3 uses)","mp":7,"point":null,"element":"Null"},
            {"name":"Tenson Kourin","name_tw":"Tenson Kourin","desc":"Increases ATK, DEF, EV/AC of All Party Members by 20% for 6 turns. (3 uses)","mp":8,"point":null,"element":"Null"},
            {"name":"Luster Candy","name_tw":"","desc":"Increases ATK, DEF, EV/AC of All Party Members by 20% for 3 turns.","mp":7,"point":15,"element":"Null"},
            {"name":"War Cry","name_tw":"吶喊","desc":"Reduces ATK and DEF of All Enemies by 20% for 3 turns.","mp":6,"point":8,"element":"Null"},
            {"name":"Acid Breath","name_tw":"溶解吐息","desc":"Reduces DEF and EV/AC of All Enemies by 20% for 3 turns.","mp":6,"point":8,"element":"Null"},
            {"name":"Fog Breath","name_tw":"迷霧吐息","desc":"Reduces ATK and EV/AC of All Enemies by 20% for 3 turns.","mp":6,"point":8,"element":"Null"},
            {"name":"Taunt","name_tw":"挑釁","desc":"Increases ATK and reduces of DEF of All Enemies by 20% for 3 turns.","mp":3,"point":8,"element":"Null"},
            {"name":"Debilitate","name_tw":"女巫詛咒","desc":"Reduces ATK, DEF, and EV/AC of All Enemies by 20% for 3 turns.","mp":8,"point":"15","element":"Null"}
        ]
    },
    {
        name:"Resistance Passive",
        name_tw:"屬性",
        name_en:"",
        skills:[
            //強化
            {"name":"Phys Boost","name_tw":"物理強化","desc":"+15% to Phys damage.","mp":null,"point":6,"element":"Passive"},
            {"name":"Phys Amp","name_tw":"高級物理強化","desc":"+25% to Phys damage.","mp":null,"point":"21","element":"Passive"},
            {"name":"Fire Boost","name_tw":"火炎強化","desc":"+15% to Fire damage.","mp":null,"point":6,"element":"Passive"},
            {"name":"Fire Amp","name_tw":"高級火炎強化","desc":"+25% to Fire damage.","mp":null,"point":21,"element":"Passive"},
            {"name":"Ice Boost","name_tw":"冰凍強化","desc":"+15% to Ice damage.","mp":null,"point":6,"element":"Passive"},
            {"name":"Ice Amp","name_tw":"高級冰凍強化","desc":"+25% to Ice damage.","mp":null,"point":21,"element":"Passive"},
            {"name":"Elec Boost","name_tw":"電擊強化","desc":"+15% to Elec damage.","mp":null,"point":6,"element":"Passive"},
            {"name":"Elec Amp","name_tw":"高級電擊強化","desc":"+25% to Elec damage.","mp":null,"point":"21","element":"Passive"},
            {"name":"Force Boost","name_tw":"衝擊強化","desc":"+15% to Force damage.","mp":null,"point":6,"element":"Passive"},
            {"name":"Force Amp","name_tw":"高級衝擊強化","desc":"+15% to Force damage.","mp":null,"point":"21","element":"Passive"},
            {"name":"Light Boost","name_tw":"破魔強化","desc":"+15% to Light damage.","mp":null,"point":6,"element":"Passive"},
            {"name":"Light Amp","name_tw":"高級破魔強化","desc":"+25% to Light damage.","mp":null,"point":21,"element":"Passive"},
            {"name":"Dark Boost","name_tw":"咒殺強化","desc":"+15% to Dark damage.","mp":null,"point":6,"element":"Passive"},
            {"name":"Dark Amp","name_tw":"高級咒殺強化","desc":"+25% to Dark damage.","mp":null,"point":"21","element":"Passive"},
            {"name":"Heal Boost","name_tw":"回復強化","desc":"+15% to Healing skill effectiveness.","mp":null,"point":6,"element":"Passive"},
            {"name":"Heal Amp","name_tw":"高級回復強化","desc":"+25% to Healing skill effectiveness.","mp":null,"point":"21","element":"Passive"},
            //貫通
            {"name":"Phys Pierce","name_tw":"Phys Pierce","desc":"Phys attacks bypass resistances","mp":null,"point":"32","element":"Passive"},
            {"name":"Superior Power","name_tw":"帝王權威","desc":"+20% to Phys hit rate and adds Phys Pierce.","mp":null,"point":null,"element":"Passive"},
            {"name":"Fire Pierce","name_tw":"Fire Pierce","desc":"Fire attacks bypass resistances","mp":null,"point":"32","element":"Passive"},
            {"name":"Elec Pierce","name_tw":"電擊貫通","desc":"Elec attacks bypass resistances","mp":null,"point":"32","element":"Passive"},
            {"name":"Force Pierce","name_tw":"衝擊貫通","desc":"Force attacks bypass resistances","mp":null,"point":"32","element":"Passive"},
            //耐性
            {"name":"Resist Phys","name_tw":"Resist Phys","desc":"Adds Phys Resist.","mp":null,"point":"12","element":"Passive"},
            {"name":"Resist Fire","name_tw":"Resist Fire","desc":"Adds Fire Resist.","mp":null,"point":8,"element":"Passive"},
            {"name":"Resist Ice","name_tw":"冰凍耐性","desc":"Adds Ice Resist.","mp":null,"point":8,"element":"Passive"},
            {"name":"Resist Elec","name_tw":"電擊耐性","desc":"Adds Elec Resist.","mp":null,"point":8,"element":"Passive"},
            {"name":"Resist Force","name_tw":"衝擊耐性","desc":"Adds Force Resist.","mp":null,"point":8,"element":"Passive"},
            {"name":"Resist Light","name_tw":"Resist Light","desc":"Adds Light Resist.","mp":null,"point":8,"element":"Passive"},
            {"name":"Resist Dark","name_tw":"咒殺耐性","desc":"Adds Dark Resist.","mp":null,"point":8,"element":"Passive"},

            {"name":"Null Phys","name_tw":"物理無效","desc":"Adds Phys Null.","mp":null,"point":"18","element":"Passive"},
            {"name":"Null Fire","name_tw":"火炎無效","desc":"Adds Fire Null.","mp":null,"point":"12","element":"Passive"},
            {"name":"Null Ice","name_tw":"冰凍無效","desc":"Adds Ice Null.","mp":null,"point":"12","element":"Passive"},
            {"name":"Null Elec","name_tw":"電擊無效","desc":"Adds Elec Null.","mp":null,"point":"12","element":"Passive"},
            {"name":"Null Force","name_tw":"衝擊無效","desc":"Adds Force Null.","mp":null,"point":"12","element":"Passive"},
            {"name":"Null Light","name_tw":"破魔無效","desc":"Adds Light Null.","mp":null,"point":"12","element":"Passive"},
            {"name":"Null Dark","name_tw":"咒殺無效","desc":"Adds Dark Null.","mp":null,"point":"12","element":"Passive"},

            {"name":"Repel Phys","name_tw":"物理反射","desc":"Adds Phys Repel.","mp":null,"point":null,"element":"Passive"},
            {"name":"Repel Fire","name_tw":"Repel Fire","desc":"Adds Fire Repel.","mp":null,"point":"16","element":"Passive"},
            {"name":"Repel Ice","name_tw":"冰凍反射","desc":"Adds Ice Repel.","mp":null,"point":"16","element":"Passive"},
            {"name":"Repel Elec","name_tw":"電擊反射","desc":"Adds Elec Repel.","mp":null,"point":"16","element":"Passive"},
            {"name":"Repel Force","name_tw":"衝擊反射","desc":"Adds Force Repel.","mp":null,"point":"16","element":"Passive"},
            {"name":"Repel Light","name_tw":"Repel Light","desc":"Adds Light Repel.","mp":null,"point":"16","element":"Passive"},
            {"name":"Repel Dark","name_tw":"咒殺反射","desc":"Adds Dark Repel.","mp":null,"point":"16","element":"Passive"},

            {"name":"Drain Phys","name_tw":"物理吸收","desc":"Adds Phys Drain.","mp":null,"point":"30","element":"Passive"},
            {"name":"Drain Fire","name_tw":"火炎吸收","desc":"Adds Fire Drain.","mp":null,"point":"20","element":"Passive"},
            {"name":"Drain Ice","name_tw":"冰凍吸收","desc":"Adds Ice Drain.","mp":null,"point":"20","element":"Passive"},
            {"name":"Drain Elec","name_tw":"電擊吸收","desc":"Adds Elec Drain.","mp":null,"point":"20","element":"Passive"},
            {"name":"Drain Light","name_tw":"破魔吸收","desc":"Adds Light Drain.","mp":null,"point":"20","element":"Passive"},

            {"name":"Resist Poison","name_tw":"Resist Poison","desc":"Chance of being Poisoned reduced by 50%.","mp":null,"point":4,"element":"Passive"},
            {"name":"Resist Bind","name_tw":"束縛耐性","desc":"Chance of being Bound reduced by 50%.","mp":null,"point":4,"element":"Passive"},
            {"name":"Resist Charm","name_tw":"魅惑耐性","desc":"Chance of being Charmed reduced by 50%.","mp":null,"point":4,"element":"Passive"},
            {"name":"Resist Mute","name_tw":"Resist Mute","desc":"Chance of being Muted reduced by 50%.","mp":null,"point":4,"element":"Passive"},
            {"name":"Resist Curse","name_tw":"詛咒耐性","desc":"Chance of being Cursed reduced by 50%.","mp":null,"point":4,"element":"Passive"},
            {"name":"Resist Weak","name_tw":"虛弱耐性","desc":"Chance of being Weakened reduced by 50%.","mp":null,"point":4,"element":"Passive"},

            {"name":"Null Poison","name_tw":"毒無效","desc":"Adds Null Poison.","mp":null,"point":"12","element":"Passive"},
            {"name":"Null Bind","name_tw":"束縛無效","desc":"Adds Null Bind.","mp":null,"point":"12","element":"Passive"},
            {"name":"Null Charm","name_tw":"魅惑無效","desc":"Adds Null Charm.","mp":null,"point":"12","element":"Passive"},
            {"name":"Null Mute","name_tw":"魔封無效","desc":"Adds Null Mute.","mp":null,"point":"12","element":"Passive"},
            {"name":"Null Curse","name_tw":"詛咒無效","desc":"Adds Null Curse.","mp":null,"point":"12","element":"Passive"},
            {"name":"Null Weak","name_tw":"虛弱無效","desc":"Adds Null Weak.","mp":null,"point":"12","element":"Passive"}
        ]
    },
    {
        name:"Stat Passive",
        name_tw:"Stat Passive",
        name_en:"",
        skills:[
            //速度
            {"name":"Speedster","name_tw":"急速之星","desc":"+50% to Battle Speed of this demon.","mp":null,"point":"10","element":"Passive"},
            //命中
            {"name":"Good Aim","name_tw":"百發百中","desc":"+10% to Phys hit rate.","mp":null,"point":4,"element":"Passive"},
            {"name":"Great Aim","name_tw":"千發千中","desc":"+20% to Phys hit rate.","mp":null,"point":"16","element":"Passive"},
            {"name":"Dragon Sense","name_tw":"","desc":"+15% to Phys hit rate and +15% Phys evasion rate.","mp":null,"point":null,"element":"Passive"},
            //迴避
            {"name":"Dodge","name_tw":"識破","desc":"+10% Phys evasion rate.","mp":null,"point":4,"element":"Passive"},
            {"name":"Evade","name_tw":"分寸識破","desc":"+20% Phys evasion rate.","mp":null,"point":"16","element":"Passive"},
            {"name":"Vahana","name_tw":"神馭騎獸","desc":"+15% to Phys evasion rate. -30% chance of receiving status ailments.","mp":null,"point":null,"element":"Passive"},
            {"name":"Stealth","name_tw":"隱密","desc":"HP will stop at 1 upon receiving the first killing blow, and increases Phys evasion rate by +20%.","mp":null,"point":null,"element":"Passive"},
            //異命
            {"name":"Madness","name_tw":"凌亂綻放","desc":"+10% chance to inflict status ailments.","mp":null,"point":8,"element":"Passive"},
            {"name":"Insanity","name_tw":"狂亂綻放","desc":"+20% chance to inflict status ailments.","mp":null,"point":"24","element":"Passive"},
            //狀防
            {"name":"Hellish Mask","name_tw":"地域口罩","desc":"-35% chance of receiving status ailments.","mp":null,"point":8,"element":"Passive"},
            {"name":"Infernal Mask","name_tw":"奈落口罩","desc":"-60% chance of receiving status ailments.","mp":null,"point":"16","element":"Passive"},
            {"name":"Mutant","name_tw":"稀人","desc":"Becomes immune to all status ailments.","mp":null,"point":null,"element":"Passive"},
            //狀回
            {"name":"Fast Recovery","name_tw":"自然痊癒","desc":"+20% to status ailment auto cure rate.","mp":null,"point":8,"element":"Passive"},
            {"name":"Epic Recovery","name_tw":"超自然痊癒","desc":"+30% to status ailment auto cure rate.","mp":null,"point":"16","element":"Passive"},
            //會增
            {"name":"Bloody Glee","name_tw":"殺戮的愉悅","desc":"+15% to Critical hit rate.","mp":null,"point":8,"element":"Passive"},
            {"name":"Savage Glee","name_tw":"趕盡殺絕的愉悅","desc":"+25% to Critical hit rate.","mp":null,"point":"14","element":"Passive"},
            //會減
            {"name":"Wild Guess","name_tw":"野生直覺","desc":"-15% to Critical hit rate of damage received.","mp":null,"point":8,"element":"Passive"},
            {"name":"Wild Instinct","name_tw":"野獸直覺","desc":"-25% to Critical hit rate of damage received.","mp":null,"point":"14","element":"Passive"},
            //
            {"name":"Life Bonus","name_tw":"一分之活泉","desc":"+10% to Max HP.","mp":null,"point":3,"element":"Passive"},
            {"name":"Life Gain","name_tw":"二分之活泉","desc":"+20% to Max HP.","mp":null,"point":7,"element":"Passive"},
            {"name":"Life Surge","name_tw":"三分之活泉","desc":"+30% to Max HP.","mp":null,"point":"15","element":"Passive"},
            {"name":"Mana Bonus","name_tw":"一分之魔脈","desc":"+1 to max MP.","mp":null,"point":8,"element":"Passive"},
            {"name":"Mana Gain","name_tw":"二分之魔脈","desc":"+2 to max MP.","mp":null,"point":"15","element":"Passive"},
            {"name":"Strength Amp I","name_tw":"初段之剛力","desc":"+5 to Strength.","mp":null,"point":3,"element":"Passive"},
            {"name":"Magic Amp I","name_tw":"初段之賢魔","desc":"+5 to Magic.","mp":null,"point":3,"element":"Passive"},
            {"name":"Vitality Amp I","name_tw":"初段之惠體","desc":"+5 to Vitality.","mp":null,"point":3,"element":"Passive"},
            {"name":"Agility Amp I","name_tw":"初段之猛速","desc":"+5 to Agility.","mp":null,"point":3,"element":"Passive"},
            {"name":"Luck Amp I","name_tw":"初段之強運","desc":"+5 to Luck.","mp":null,"point":3,"element":"Passive"},
            {"name":"Strength Amp II","name_tw":"二段之剛力","desc":"+10 to Strength.","mp":null,"point":13,"element":"Passive"},
            {"name":"Magic Amp II","name_tw":"二段之賢魔","desc":"+10 to Magic.","mp":null,"point":13,"element":"Passive"},
            {"name":"Vitality Amp II","name_tw":"二段之惠體","desc":"+10 to Vitality.","mp":null,"point":13,"element":"Passive"},
            {"name":"Agility Amp II","name_tw":"二段之猛速","desc":"+10 to Agility.","mp":null,"point":13,"element":"Passive"},
            {"name":"Luck Amp II","name_tw":"二段之強運","desc":"+10 to Luck.","mp":null,"point":13,"element":"Passive"},
            {"name":"Strength Amp III","name_tw":"三段之剛力","desc":"+15 to Strength.","mp":null,"point":"32","element":"Passive"},
            {"name":"Magic Amp III","name_tw":"三段之賢魔","desc":"+15 to Magic.","mp":null,"point":"32","element":"Passive"},
            {"name":"Vitality Amp III","name_tw":"三段之惠體","desc":"+15 to Vitality.","mp":null,"point":"32","element":"Passive"},
            {"name":"Agility Amp III","name_tw":"三段之猛速","desc":"+15 to Agility.","mp":null,"point":"32","element":"Passive"},
            {"name":"Luck Amp III","name_tw":"三段之強運","desc":"+15 to Luck.","mp":null,"point":"32","element":"Passive"}
        ]
    },
    {
        name:"Damage Passive",
        name_tw:"Damage Passive",
        name_en:"",
        skills:[
            {"name":"Assassin","name_tw":"Assassin","desc":"+10% to single-target attack skill damage.","mp":null,"point":8,"element":"Passive"},
            {"name":"Serial Killer","name_tw":"Serial Killer","desc":"+10% to multiple-target attack skill damage.","mp":null,"point":8,"element":"Passive"},
            {"name":"Butcher","name_tw":"Butcher","desc":"+20% to multiple-target attack skill damage.","mp":null,"point":"24","element":"Passive"},
            {"name":"Deadly Poison","name_tw":"毒追擊","desc":"+30% damage to Poisoned enemies.","mp":null,"point":13,"element":"Passive"},
            {"name":"Deadly Bondage","name_tw":"束縛追擊","desc":"+30% damage to Bound enemies.","mp":null,"point":13,"element":"Passive"},
            {"name":"Deadly Charm","name_tw":"魅惑追擊","desc":"+30% damage to Charmed enemies.","mp":null,"point":13,"element":"Passive"},
            {"name":"Deadly Mute","name_tw":"魔封追擊","desc":"+30% damage to Muted enemies.","mp":null,"point":13,"element":"Passive"},
            {"name":"Berserker","name_tw":"狂戰士","desc":"+10% to damage dealt, but +20% to damage received.","mp":null,"point":"18","element":"Passive"},
            {"name":"Back Attack","name_tw":"Damage Passive","desc":"+10% damage when attacking the enemy's weak point.","mp":null,"point":"12","element":"Passive"},
            {"name":"Merciless Blow","name_tw":"無情的一擊","desc":"+20% damage when attacking the enemy's weak point.","mp":null,"point":"12","element":"Passive"},
            {"name":"Arms Mastery","name_tw":"武道的素養","desc":"+15% to Phys damage and Phys hit rate.","mp":null,"point":null,"element":"Passive"}
        ]
    },
    {
        name:"Combat Passive",
        name_tw:"自動",
        name_en:"",
        skills:[
            //反擊
            {"name":"Counter","name_tw":"反擊","desc":"When receiving a Phys Attack, 50% chance to counter dealing Phys damage with 50 power.","mp":null,"point":6,"element":"Passive"},
            {"name":"Retaliate","name_tw":"兇猛反擊","desc":"When receiving a Phys Attack, 50% chance to counter dealing Phys damage with 100 power.","mp":null,"point":"12","element":"Passive"},
            {"name":"Death Counter","name_tw":"死亡反擊","desc":"When receiving a Phys Attack, 50% chance to counter dealing Phys damage with 150 power.","mp":null,"point":"18","element":"Passive"},
            //防死
            {"name":"Endure","name_tw":"強忍","desc":"HP stops at 1 HP upon receiving the first killing blow.","mp":null,"point":6,"element":"Passive"},
            {"name":"Enduring Soul","name_tw":"不屈的鬥志","desc":"Heals 200 HP upon receiving the first killing blow.","mp":null,"point":"18","element":"Passive"},
            {"name":"Avatar","name_tw":"降世化身","desc":"Heals 200 HP upon receiving the first killing blow. Heals 40% HP when clearing a wave.","mp":null,"point":null,"element":"Passive"},
            //自回
            {"name":"Life Aid","name_tw":"勝利的氣息","desc":"Heals 30% HP when clearing a wave.","mp":null,"point":6,"element":"Passive"},
            {"name":"Mana Aid","name_tw":"勝利的查克拉","desc":"Recovers 10 MP when clearing a wave.","mp":null,"point":"12","element":"Passive"},
            {"name":"Infinite Chakra","name_tw":"無限的查克拉","desc":"Increases naturally recovered MP by 1 MP.","mp":null,"point":"18","element":"Passive"},
            //反射
            {"name":"Tetra Shift","name_tw":"提特拉康脈動","desc":"Casts Tetrakarn at the beginning of a battle if the enemy attacks first.","mp":null,"point":"18","element":"Passive"},
            {"name":"Makara Shift","name_tw":"瑪卡拉康脈動","desc":"Casts Makarakarn at the beginning of a battle if the enemy attacks first.","mp":null,"point":"18","element":"Passive"},
            {"name":"Bane of Pierce","name_tw":"貫反靈壓","desc":"Pierce will have no effect on Repels on any party member while the demon with this skill is alive.","mp":null,"point":null,"element":"Passive"},
            //Support
            {"name":"Auto-Tarukaja","name_tw":"自動塔爾卡","desc":"Casts Tarukaja at the beginning of the 1st turn.","mp":null,"point":"12","element":"Passive"},
            {"name":"Auto-Rakukaja","name_tw":"自動拉庫卡","desc":"Casts Rakukaja at the beginning of the 1st turn.","mp":null,"point":"12","element":"Passive"},
            {"name":"Auto-Sukukaja","name_tw":"自動斯庫卡","desc":"Casts Sukukaja at the beginning of the 1st turn.","mp":null,"point":"12","element":"Passive"},
            {"name":"Auto-Tarunda","name_tw":"自動塔倫達","desc":"Casts Tarunda at the beginning of the 1st turn.","mp":null,"point":"12","element":"Passive"},
            {"name":"Auto-Rakunda","name_tw":"自動拉昆達","desc":"Casts Rakunda at the beginning of the 1st turn.","mp":null,"point":"12","element":"Passive"},
            {"name":"Auto-Sukunda","name_tw":"自動斯坤達","desc":"Casts Sukunda at the beginning of the 1st turn.","mp":null,"point":"12","element":"Passive"},
            //壓制
            {"name":"Intimidating Stance","name_tw":"威攝姿態","desc":"Reduces 1 enemy Press Turn at the beginning of a battle if the enemy attacks first. Only up to 2 Press Turn Icons can be reduced by skills or effects.","mp":null,"point":"21","element":"Passive"},
            {"name":"Suppress Stance Drain","name_tw":"威攝姿態:Drain","desc":"As long as the demon who has this skill is alive, the enemy loses an extra Press Turn Icon every time you drain their attack.","mp":null,"point":null,"element":"Passive"},
            {"name":"Faith in Wealth","name_tw":"","desc":"Increases max HP by 10%. Recover 1 MP every time your Press Turn Icon decreases due to enemy skills.","mp":null,"point":null,"element":"Passive"},
            //節省
            {"name":"Trickster","name_tw":"狡計之星","desc":"20% chance to avoid using Press Turn Icons when attacking the enemy's weak point.","mp":null,"point":null,"element":"Passive"},
            {"name":"Lunar Blessing","name_tw":"月之庇佑","desc":"Reduces consumed MP by 1 MP.","mp":null,"point":null,"element":"Passive"}
        ]
    },
    {
        name:"Special Passive",
        name_tw:"Special Passive",
        name_en:"",
        skills:[
            {"name":"Luck","name_tw":"幸運","desc":"Increases Exp gained by Dx2 and all party members by 20% and Macca obtained during battle by 20%.","mp":null,"point":null,"element":"Passive"},
            {"name":"Dmg Panel V I","name_tw":"漫步雷池","desc":"-25% to damage received from Damage Panels in the Aura Gate.","mp":null,"point":2,"element":"Passive"},
            {"name":"Dmg Panel V II","name_tw":"闊步雷池","desc":"-50% to damage received from Damage Panels in the Aura Gate.","mp":null,"point":4,"element":"Passive"},
            {"name":"Trap Free","name_tw":"陷阱弱化","desc":"-30% to damage received from Damage Panels in the Aura Gate, and nullifies Dark Zone effects.","mp":null,"point":null,"element":"Passive"},
            {"name":"Dmg Panel Immunity","name_tw":"雷池無懼","desc":"Nullifies Damage Panels in the Aura Gate.","mp":null,"point":8,"element":"Passive"},
            {"name":"Void Dark Zones","name_tw":"黑暗區域無效","desc":"Nullifies Dark Zone effects in the Aura Gate.","mp":null,"point":8,"element":"Passive"}
        ]
    }
];


//////////////////////
// i18n
//////////////////////

const messages = {
    en: {
      message: {
        fusion: 'Fusion',
        skill:'Skill',
        reverse:'Reverse',
        normal:'Normal',
        reverse_fusion: 'Reverse Fusion',
        normal_fusion: 'Normal Fusion',
        devil: 'Demon',
        setting:'Settings',
        language: 'Language',
        downgrade_fusion: 'Downgrade Fusion',
        prevent_unload:'Prevent Unload',
        allow: 'Allow',
        deny: 'Deny',
        search:'Search',
        element:'Element',
        inherit:'Skill Points',
        description:'Description',
        cost:'Cost',
        cost_others:'Cost (Coloured)',
        cost_pure:'Cost (Clear)',
        fusion_mag:'Fusion',
        fusion_mag_others:'Fusion (Coloured)',
        fusion_mag_pure:'Fusion (Clear)'
      }
    },
    ja: {
      message: {
        fusion: 'Fusion',
        skill:'Skill',
        reverse:'Reverse',
        normal:'Normal',
        reverse_fusion: 'Reverse Fusion',
        normal_fusion: 'Normal Fusion',
        devil: 'Demon',
        setting:'Settings',
        language: 'Language',
        downgrade_fusion: 'Downgrade Fusion',
        prevent_unload:'Prevent Unload',
        allow: 'Allow',
        deny: 'Deny',
        search:'Search',
        element:'Element',
        inherit:'Inherit',
        description:'Description',
        cost:'Cost',
        cost_others:'Cost(Others)',
        cost_pure:'Cost(Pure)',
        fusion_mag:'Fusion',
        fusion_mag_others:'Fusion(Others)',
        fusion_mag_pure:'Fusion(Pure)'
      }
    },
    tw: {
        message:{
            fusion:'合體',
            skill:'技能',
            reverse:'逆向',
            normal:'順向',
            reverse_fusion: '逆向合體',
            normal_fusion: '順向合體',
            devil: '惡魔',
            setting:'設定',
            language: '語言',
            downgrade_fusion: '降階合體',
            prevent_unload:'防止換頁',
            allow:'允許',
            deny:'不允許',
            search:'查詢',
            element:'屬性',
            inherit:'繼承',
            description:'說明',
            cost:'成本',
            cost_others:'成本(他)',
            cost_pure:'成本(素)',
            fusion_mag:'合體費',
            fusion_mag_others:'合體費(他)',
            fusion_mag_pure:'合體費(素)'
        }
    }
};


//////////////////////
// Devil Class
//////////////////////

var Devil = function(devil){

    this.name = devil.name;
    this.name_tw = devil.name_tw;
    this.name_en = devil.name_en;
    this.rarity = devil.rarity;
    this.grade = devil.grade;
    this.icon = devil.icon;
    this.elements = devil.elements;
    this.skills = devil.skills;
    this.skill4 = devil.skill4;
    this.skill5 = devil.skill5;
    this.type = devil.type;
    this.max = null;
    this.min = null;
    this.race = null;
    this.cost = null;
    this.cost_pure = null;
    this.costs = [null,null,null,null,null,null];
    this.pure_costs = [null,null,null,null,null,null];
};

Devil.prototype.showName = function(){

    var name;

    switch(i18n.locale){
        case 'ja': name = this.name; break;
        case 'tw': name = this.name_tw; break;
        case 'en': name = this.name_en; break;
        default: name = this.name;
    }
    if(!name)
        name = this.name;

    return name;
}

Devil.prototype.showGrade = function(){

    return 'G.'+this.grade;
}

Devil.prototype.showRarity = function(){

    var rarity = "";
    for(var i=0; i<this.rarity;i++)
        rarity += '★';
    return rarity;
}

Devil.prototype.showSpecial = function(){
  gacha = ["Trumpeter","Alice","White Rider","Yoshitsune","Huang Di","Siegfried","Jeanne d'Arc"]
  if(this.name == "Alilat"){
    return "Multi-Fusion";
  }
  else if(this.name == "Attis"){
    return "Multi-Fusion";
  }
  else if(this.name == "Kama"){
    return "Multi-Fusion";
  }
  else if(this.name == "Kinmamon"){
    return "Multi-Fusion";
  }
  else if(this.name == "Hare of Inaba"){
    return "Multi-Fusion";
  }
  else if(this.name == "Kanbari"){
    return "Multi-Fusion";
  }
  else if(this.name == "Kamiotoko"){
    return "Multi-Fusion";
  }
  else if(this.name == "Chupacabra"){
    return "Multi-Fusion";
  }
  for(var i=0; i<gacha.length;i++){
    if(this.name == gacha[i]){
      return "Gacha Exclusive";
    }
  }
  return '';
}
Devil.prototype.showDetailedSpecial = function(){
  gacha = ["Trumpeter","Alice","White Rider","Yoshitsune","Huang Di","Siegfried","Jeanne d'Arc"]
  if(this.name == "Alilat"){
    return " | Pele + Kushinada + Azrael + Sandalphon |";
  }
  else if(this.name == "Attis"){
    return " | Baphomet + Arianrhod + Isis + Berserker |";
  }
  else if(this.name == "Kama"){
    return " | Yaksini + Dakini + Mitra + Rangda |";
  }
  else if(this.name == "Kinmamon"){
    return " | Heqet + Legion + Mothman + Arahabaki |";
  }
  else if(this.name == "Hare of Inaba"){
    return " | Nekomata + Fomorian + Makami |";
  }
  else if(this.name == "Kanbari"){
    return " | Koppa Tengu + Inugami + Yomotsu-Shikome + Kurama Tengu |";
  }
  else if(this.name == "Kamiotoko"){
    return " | Obariyon + Phantom + Mou-Ryo |";
  }
  else if(this.name == "Chupacabra"){
    return " | Slime + Melchom + Chagrin |";
  }
  for(var i=0; i<gacha.length;i++){
    if(this.name == gacha[i]){
      return " | Cannot be fused.";
    }
  }
}

Devil.prototype.showCost = function(rarity){
/*
    var cost = this.costs[rarity];
*/

    return (this.cost/1).toFixed(0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};
Devil.prototype.showCostPure = function(rarity){

    /*
    var cost = this.pure_costs[rarity];
    */

    return (this.cost_pure/1).toFixed(0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
Devil.prototype.fission_formulas = function(){

    var devil = this;

    var formulas = [];

    this.race.formulas.forEach(function(f){

        var r1 = f[0];
        var r2 = f[1];

        var boms = [];

        r1.devils.forEach(function(d1){
            r2.devils.forEach(function(d2){

                var bom = DevilBom.bom(devil,d1,d2);

                if(bom)
                    boms.push(bom);
            });
        });

        boms.sort(function(bom1,bom2){
            return bom1.order - bom2.order;
        });

        if(boms.length>0){
            formulas.push({
                'name': r1.name + ' x ' + r2.name,
                'boms':boms
            });
        }

    });

    return formulas;
}

Devil.prototype.fusion_formulas = function(){

    var d1 = this;
    var multi_formulas = [];

    // Target Race Loop
    this.race.usage.forEach(function(u){

        // Target Devil Loop
        u.target.devils.forEach(function(target){

            var formulas = [];

            u.r2s.forEach(function(r2){

                var boms = [];

                // Pair Devil Loop
                r2.devils.forEach(function(d2){

                    var bom = DevilBom.bom(target, d1, d2);

                    if(bom)
                        boms.push(bom)
                });

                boms.sort(function(c1,c2){
                    return c1.order - c2.order;
                });

                if(boms.length>0){

                    formulas.push({
                        'name': d1.race.name_en + ' x ' + r2.name_en,
                        'boms': boms
                    });
                }
            });

            if(formulas.length>0){
                multi_formulas.push({
                    devil:target,
                    formulas:formulas
                });
            }
        });

    });

    return multi_formulas;
}

////////////////////
// Race Class
///////////////////

var Race = function(race){
    this.name = race.name_en
    this.formulas = race.formulas;
    this.devils = race.devils;
}

Race.prototype.showName = function(){

    var name;

    switch(i18n.locale){
        case 'ja': name = this.name; break;
        case 'tw': name = this.name_tw; break;
        case 'en': name = this.name_en; break;
        default: name = this.name;
    }

    return name ? name : this.name;
}

////////////////////
// Skill Class
////////////////////

var Skill = function(skill){

    this.name = skill.name;
    this.name_tw = skill.name_tw==null ? "" : skill.name_tw;
    this.name_en = "";
    this.desc = skill.desc==null ? "" : skill.desc;
    this.desc_tw = skill.desc_tw==null ? "" : skill.desc_tw;
    this.mp = skill.mp==null ? "" : skill.mp;
    this.point = skill.point == null ? "" : skill.point;
    this.element = skill.element == null ? "" : skill.element;
    this.type = null;
    this.devils = [];
}
Skill.prototype.showName = function(){

    switch(i18n.locale){
        case 'ja': name = this.name; break;
        case 'tw': name = this.name_tw; break;
        case 'en': name = this.name_en; break;
        default: name = this.name;
    }
    if(!name)
        name = this.name;
    if(!name)
        name = '--------------------';
    return name;
}
Skill.prototype.showDesc = function(){

    switch(i18n.locale){
        case 'ja': desc = this.desc; break;
        case 'tw': desc = this.desc_tw; break;
        case 'en': desc = this.desc_en; break;
        default: desc = this.desc;
    }
    if(!desc)
        desc = this.desc;
    if(!desc)
        desc = '';

    return desc;
}
Skill.prototype.showHint = function(){

    var hint = 'Element: '+this.element+' | MP: '+this.mp+' | Skill Points: '+this.point+'\n'+this.showDesc();
    return hint;
}
Skill.prototype.addDevil = function(new_devil){

    var devils = this.devils.filter(function(devil){
        return devil.name == new_devil.name;
    });

    if(devils.length==0)
        this.devils.push(new_devil);
}

////////////////////
// Skill Type Class
////////////////////

var SkillType = function(type){

    this.name = type.name;
    this.name_tw = type.name_tw == null ? "" : type.name_tw;
    this.name_en = type.name_en == null ? "" : type.name_en;
    this.skills = type.skills;
}
SkillType.prototype.showName = function(){

    switch(i18n.locale){
        case 'ja': name = this.name; break;
        case 'tw': name = this.name_tw; break;
        case 'en': name = this.name_en; break;
        default: name = this.name;
    }
    if(!name)
        name = this.name;
    if(!name)
        name = '';
    return name;
}
////////////////////
// Devil Bom Class
////////////////////

function DevilBom(devil, d1, d2){

    var child1 = d1==null?null:new DevilBom(d1);
    var child2 = d2==null?null:new DevilBom(d2);

    if(child1) child1.parent = this;
    if(child2) child2.parent = this;

    this.devil = devil;
    this.parent = null;
    this.child1 = child1;
    this.child2 = child2;
    this.order = 0;
    this.upgrade = false;
    this.downgrade = false;
    this.mag = 0;
    this.mag_pure = 0;
    this.collapse = false;

    this.init();
}

DevilBom.prototype.set = function(bom){

    bom.child1.parent = this;
    bom.child2.parent = this;

    this.child1 = bom.child1;
    this.child2 = bom.child2;
    this.order = bom.order;
    this.upgrade = bom.upgrade;
    this.downgrade = bom.downgrade;
    this.mag = bom.mag;
    this.mag_pure = bom.mag_pure;
}

DevilBom.prototype.unset = function(){

    this.child1 = null;
    this.child2 = null;
    this.order = 0;
    this.upgrade = false;
    this.downgrade = false;
    this.mag = 0;
    this.mag_pure = 0;
}

DevilBom.prototype.init = function(){

    if(this.child1 && this.child2){

        var devil = this.devil;
        var d1 = this.child1.devil;
        var d2 = this.child2.devil;

        this.order = (d1.rarity>d2.rarity)
            ? (d1.rarity*10+d2.rarity)
            : (d2.rarity*10+d1.rarity);
        this.upgrade = (d1.rarity < devil.rarity && d2.rarity < devil.rarity);
        this.downgrade = (d1.rarity > devil.rarity || d2.rarity > devil.rarity);

        var g = (d1.grade + d2.grade)/2;
        var A = B = 0;
        var r = (devil.rarity*2)-d1.rarity-d2.rarity;

        A = [
            //-1 ~ 4
            [5,     5,          5,          5,          5,          5],
            [5,     5,          25,         50,         0,          0],
            [250,   500,        2500,       5000,       5200,       5400],
            [0,     6000,       150000,     300000,     320000,     0],
            [0,     60000,      1500000,    3000000,    4200000,    0]
        ][devil.rarity-1][r+1];

        B = [0,0,0.3,0.45,60,75,1080,1260,14400,16200][Math.floor(devil.grade/10)];

        var mag = A + (devil.grade-g) * B;

        this.mag = Math.floor(mag);

        if(devil.rarity==5)         this.mag_pure = Math.floor(mag*0.7);
        else if(devil.rarity==4)    this.mag_pure = Math.floor(mag*0.5);
        else                        this.mag_pure = this.mag;

        if( A==0 ){
            this.mag = 0;
            this.mag_pure = 0;
        }
    }
    else{
        this.order = 0;
        this.upgrade = false;
        this.downgrade = false;
        this.mag = 0;
        this.mag_pure = 0;
    }
};

DevilBom.prototype.showMag = function(){
    return (this.mag/1).toFixed(0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};


DevilBom.prototype.showMagPure = function(){
    return (this.mag_pure/1).toFixed(0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

DevilBom.prototype.caculate_mag = function(layer){

    var mag = this.mag;
    var mag1 = (this.child1?this.child1.caculate_mag(layer+1):0);
    var mag2 = (this.child2?this.child2.caculate_mag(layer+1):0);

    if(layer==1){
        if(mag1>mag2){  mag += mag1 + (this.child2?this.child2.caculate_mag_pure():0);   }
        else{           mag += (this.child1?this.child1.caculate_mag_pure():0) + mag2;   }
    }
    else{               mag += mag1 + mag2;                                   }

    return mag;
};

DevilBom.prototype.caculate_mag_pure = function(){

    return this.mag_pure
        + (this.child1?this.child1.caculate_mag_pure():0)
        + (this.child2?this.child2.caculate_mag_pure():0);
};

DevilBom.prototype.showTotalMag = function(){

    var mag = this.caculate_mag(1);

    return (mag/1).toFixed(0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

DevilBom.prototype.showTotalMagPure = function(){

    var mag_pure = this.caculate_mag_pure();

    return (mag_pure/1).toFixed(0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

DevilBom.prototype.getCost = function(rarity){

    var d1 = this.child1.devil;
    var d2 = this.child2.devil;

    var cost1_p = d1.pure_costs[rarity];
    var cost1_x = d1.costs[rarity];
    var cost2_p = d2.pure_costs[rarity];
    var cost2_x = d2.costs[rarity];

    if(cost1_p==null||cost1_x==null||cost2_p==null||cost2_x==null)
        return null;

    if(d1.rarity <= rarity){
        cost1_p = 0;
        cost1_x = 0;
    }

    if(d2.rarity <= rarity){
        cost2_p = 0;
        cost2_x = 0;
    }

    var cost1 = cost1_x + cost2_p;
    var cost2 = cost1_p + cost2_x;

    return (cost1 > cost2 ? cost2 : cost1) + this.mag;

};

DevilBom.prototype.getCostPure = function(rarity){

    var d1 = this.child1.devil;
    var d2 = this.child2.devil;

    var cost1 = d1.pure_costs[rarity];
    var cost2 = d2.pure_costs[rarity];

    if(cost1==null||cost2==null)
        return null;

    return (d1.rarity > rarity ? cost1 : 0)
        + (d2.rarity > rarity ? cost2 : 0)
        + this.mag_pure;
};

DevilBom.bom = function(devil, d1, d2){

    var g = (d1.grade + d2.grade)/2;

    if( ! (devil.min <= g && g < devil.max ) ){
        return null;
    }

    return new DevilBom(devil, d1, d2);
}

/////////////////////////////
// Digital Devil Data Class
/////////////////////////////

function Resource(ddd, sss){

    this.races = [];
    this.devils = [];
    this.skillTypes = [];
    this.skills = [];

    var race_data = {};
    var devil_data = {};
    var devil_array = [];
    var type_data = {};
    var skill_data = {};
    var skill_array = [];

    sss = sss.map(function(type){

        type = new SkillType(type);
        type_data[type.name] = type;

        type.skills = type.skills.map(function(skill){
            skill = new Skill(skill);
            skill.type = type;
            skill_data[skill.name] = skill;
            skill_array.push(skill);
            return skill;
        });
        return type;
    });

    //create race_data
    //convert race to Race Class
    //convert devil to Devil Class
    ddd = ddd.map(function(race){

        race.devils = race.devils.map(function(devil){
            return new Devil(devil);
        });
        race_data[race.name] = race;
        return new Race(race);
    });

    //replace formula's race from text to object
    ddd.forEach(function(race){

        race.formulas.forEach(function(formula){
            formula[0] = race_data[formula[0]];
            formula[1] = race_data[formula[1]];
        });
    });

    //create devil_data
    //convert devil's skill from text to object
    ddd.forEach(function(r1){

        r1.devils.forEach(function(devil, index){

            devil.race = r1;
            devil.max = devil.grade;
            devil.min = (index==r1.devils.length-1 ? 0 : r1.devils[index+1].grade);

            if(devil.skills){
                devil.skills = devil.skills.map(function(name){
                    var skill = skill_data[name];
                    if(skill){
                        skill.addDevil(devil);
                    }
                    return skill ? skill : new Skill({name:name});
                });
            }
            if(devil.skill4){
                devil.skill4 = devil.skill4.map(function(name){
                    var skill = skill_data[name];
                    if(skill){
                        skill.addDevil(devil);
                    }
                    return skill ? skill : new Skill({name:name});
                });
            }
            if(devil.skill5){
                devil.skill5 = devil.skill5.map(function(name){
                    var skill = skill_data[name];
                    if(skill){
                        skill.addDevil(devil);
                    }
                    return skill ? skill : new Skill({name:name});
                });
            }

            devil_array.push(devil);
            devil_data[devil.name] = devil;
        });

        var usage_temp = {};

        ddd.forEach(function(target){

            target.formulas.forEach(function(f){

                var r2 = null;

                if(f[0].name==r1.name){
                    r2 = f[1];
                }
                if(f[1].name==r1.name){
                    r2 = f[0];
                }
                if(r2){

                    if(! (target.name in usage_temp)){
                        usage_temp[target.name] = [];
                    }

                    usage_temp[target.name].push(r2);
                }
            });
        });

        r1.usage = [];

        for(name in usage_temp){
            r1.usage.push({
                target:race_data[name],
                r2s:usage_temp[name]
            })
        }
    });

    devil_array.sort(function(d1,d2){
        if(d1.grade==d2.grad2)  return 0;
        return d1.grade > d2.grade ? 1 : -1;
    });

    //create fission and fusion options

    devil_array.forEach(function(devil){
        devil.fission_boms = [];
        devil.fission_options = devil.fission_formulas();
        devil.fission_options.forEach(function(option){
             devil.fission_boms = devil.fission_boms.concat(option.boms);
        });
    });

    var break_limit=10;
    var all_pass = false;

    while( break_limit-- > 0 && !all_pass){

        all_pass = true;

        devil_array.forEach(function(devil){

            var pass = true;

            for(var rarity=1; rarity<=5; rarity++){

                var cost = null;
                var pure_cost = null;

                if(devil.fission_boms.length){

                    devil.fission_boms.forEach(function(bom){

                        var l_pure_cost = bom.getCostPure(rarity);

                        if(l_pure_cost==null) pass = false;
                        else if(pure_cost==null) pure_cost = l_pure_cost;
                        else pure_cost = pure_cost > l_pure_cost ? l_pure_cost : pure_cost;

                        var l_cost = bom.getCost(rarity);

                        if(l_cost==null)    pass = false;
                        else if(cost==null) cost = l_cost;
                        else                cost = cost > l_cost ? l_cost : cost;
                    });

                    if(devil.rarity > rarity){

                        if(pure_cost!=null && devil.pure_costs[rarity] != pure_cost){
                            devil.pure_costs[rarity] = pure_cost;
                            pass = false;
                        }

                        if(cost!=null && devil.costs[rarity] != cost){
                            devil.costs[rarity] = cost;
                            pass = false;
                        }
                    }
                    else{
                        devil.pure_costs[rarity] = 0;
                        devil.costs[rarity] = 0;
                    }
                }
                else{
                    devil.pure_costs[rarity] = 0;
                    devil.costs[rarity] = 0;
                }
            }

            if(!pass)   all_pass = false;
        });
    }

    this.races = ddd;
    this.race_data = race_data;
    this.devils = devil_array;
    this.devil_data = devil_data;
    this.skillTypes = sss;
    this.skills = skill_array;
    this.skill_data = skill_data;
    this.builder_options = [];
    this.fusion_options = [];
}

////////////////////
//      Main
////////////////////

// Initialize

var resource = [];
resource.push(new Resource(ddd_stable, skill_stable));

function setCookie(name,value)
{
    var Days = 365;
    var exp  = new Date();
    exp.setTime(exp.getTime() + Days*24*60*60*1000);
    document.cookie = name + "="+ escape (value) + ";expires=" + exp.toGMTString();
}

function getCookie(name)
{
    var arr = document.cookie.match(new RegExp("(^| )"+name+"=([^;]*)(;|$)"));
     if(arr != null) return unescape(arr[2]); return null;
}

const i18n = new VueI18n({
    locale: 'en', // set locale
    messages: messages // set locale messages
});

var app = new Vue({
    i18n:i18n,
    el:'#app',
    data:{
        resource_id:0,
        resource_options:[
            {text:'Stable', value:0}
//            {text:'Preview (Dragon)',value:1}
        ],
        race_id:0,
        skillType_id:0,

        //builder
        builder_rarity_options:[
            {text:"1+1", state:true, active:false},
            {text:"1+2", state:true, active:false},
            {text:"1+3", state:true, active:false},
            {text:"1+4", state:true, active:false},
            {text:"1+5", state:true, active:false},
            {text:"2+2", state:true, active:false},
            {text:"2+3", state:true, active:false},
            {text:"2+4", state:true, active:false},
            {text:"2+5", state:true, active:false},
            {text:"3+3", state:true, active:false},
            {text:"3+4", state:true, active:false},
            {text:"3+5", state:true, active:false},
            {text:"4+4", state:true, active:false},
            {text:"4+5", state:true, active:false},
            {text:"5+5", state:true, active:false}
        ],
        //fusion
        fusion_rarity_options:[
            {text:"1+1", state:true, active:false},
            {text:"1+2", state:true, active:false},
            {text:"1+3", state:true, active:false},
            {text:"1+4", state:true, active:false},
            {text:"1+5", state:true, active:false},
            {text:"2+2", state:true, active:false},
            {text:"2+3", state:true, active:false},
            {text:"2+4", state:true, active:false},
            {text:"2+5", state:true, active:false},
            {text:"3+3", state:true, active:false},
            {text:"3+4", state:true, active:false},
            {text:"3+5", state:true, active:false},
            {text:"4+4", state:true, active:false},
            {text:"4+5", state:true, active:false},
            {text:"5+5", state:true, active:false}
        ],

        //setting
        lang_value:2,
        lang_options:[
            {text:'日本語', value:0},
            {text:'繁體中文', value:1},
            {text:'English', value:2}
        ],
        allow_down_grade:0,
        allow_down_grade_options:[
            {text: 'message.allow', value:1},
            {text: 'message.deny', value:0}
        ],
        allow_prevent_unload:0,
        index_main:0,
        index_main_last:0,
        index_fusion:0,
        index_fusion_last:0,
        keyword:'',
        searchBar:false,
        //orb
        orbs:[
            {'name':'ライト', icon:'images/theme/light.png', state:false},
            {'name':'ダーク', icon:'images/theme/dark.png', state:false},
            {'name':'ニュートラル', icon:'images/theme/natural.png', state:false },
            {'name':'ロー', icon:'images/theme/law.png', state:false},
            {'name':'カオス', icon:'images/theme/chaos.png', state:false}
        ],

        //timer
        now:null,
        gate_status_ch:false,
        gate_status_jp:false,
        gate_timer_ch:null,
        gate_timer_jp:null,
        moon_status:0,
        moon_timer:null,

        //modal

        updated_at:'07-31-2018',

        //important for update computed's getter from setter
        computed_counter:{
            builder_target:0,
            builder_options:0,
            info_target:0,
            current_bom:0,
            fusion_target:0,
            fusion_options:0
        }
    },
    created:function(){

        var c_lang_value = getCookie('lang_value');

        if(c_lang_value!=null){
            this.lang_value = c_lang_value;
        }

        switch(this.lang_value){
            case '0': i18n.locale='ja';break;
            case '1': i18n.locale='tw';break;
            case '2': i18n.locale='en';break;
            default: i18n.locale='en';break;
        }

        var c_allow_down_grade = getCookie('allow_down_grade');

        if(c_allow_down_grade!=null){
            this.allow_down_grade = c_allow_down_grade;
        }

        var c_allow_prevent_unload = getCookie('allow_prevent_unload');

        if(c_allow_prevent_unload!=null){
            this.allow_prevent_unload = c_allow_prevent_unload;
        }

        this.update_now();

        setInterval(function(){

            app.tick();

        },1000);

    },
    updated:function(){


    },
    watch:{
        lang_value:function(){

            switch(this.lang_value){
                case 0: i18n.locale='ja';break;
                case 1: i18n.locale='tw';break;
                case 2: i18n.locale='en';break;
            }

            setCookie('lang_value', this.lang_value);
        },
        allow_down_grade:function(){

            this.update_builder_filter();
            this.update_fusion_filter();

            setCookie('allow_down_grade', this.allow_down_grade);
        },
        allow_prevent_unload:function(){

            setCookie('allow_prevent_unload', this.allow_prevent_unload);
        },
        resource_id:function(){

            this.reset_builder();
            this.reset_fusion();
        }
    },
    computed:{
        resource:function(){

            return resource[this.resource_id];
        },
        races:function(){

            return this.resource.races;
        },
        devils:function(){

            return this.resource.devils;
        },
        devils_by_race:function(){

            if(this.race_id >= this.races.length)
                this.race_id = this.races.length-1;

            return this.races[this.race_id].devils;
        },
        skillTypes:function(){

            return this.resource.skillTypes;
        },
        skills:function(){

            return this.resource.skills;
        },
        skills_by_type:function(){

            if(this.skillType_id >= this.skillTypes.length)
                this.skillType_id = this.skillType.length-1;

            return this.skillTypes[this.skillType_id].skills;
        },
        builder_target:{
            get:function(){

                this.computed_counter.builder_target;
                return this.resource.builder_target;
            },
            set:function(bom){

                this.resource.builder_target = bom;
                this.computed_counter.builder_target++;
            }
        },
        builder_options:{
            get: function(){

                this.computed_counter.builder_options;
                return this.resource.builder_options;
            },
            set:function(options){

                this.resource.builder_options = options;
                this.computed_counter.builder_options++;
            }
        },
        current_bom:{
            get:function(){

                this.computed_counter.current_bom;
                return this.resource.current_bom;
            },
            set:function(bom){
                this.resource.current_bom = bom;
                this.computed_counter.current_bom++;
            }
        },
        fusion_target:{
            get:function(){

                this.computed_counter.fusion_target;
                return this.resource.fusion_target;
            },
            set:function(bom){

                this.resource.fusion_target = bom;
                this.computed_counter.fusion_target++;
            }
        },
        fusion_options:{
            get: function(){

                this.computed_counter.fusion_options;
                return this.resource.fusion_options;
            },
            set:function(options){

                this.resource.fusion_options = options;
                this.computed_counter.fusion_options++;
            }
        },
        info_target:{
            get:function(){

                this.computed_counter.info_target;
                return this.resource.info_target;
            },
            set:function(devil){

                this.resource.info_target = devil;
                this.computed_counter.info_target++;
            }
        },
        filtered_devils: function(){

            var keyword = this.keyword.replace(/[!@#$%^&*()-=_+\[\]{}|\\]/g,'').toLowerCase();

            var result = [];

            if(keyword){
                result = this.devils.filter(function(d){
                    return d.name.toLowerCase().match(keyword)||d.name_tw.match(keyword);
                });
            }

            return result;
        },
        filtered_skills: function(){

            var keyword = this.keyword.replace(/[!@#$%^&*()-=_+\[\]{}|\\]/g,'').toLowerCase();

            var result = [];

            if(keyword){
                result = this.skills.filter(function(s){
                    return s.name.toLowerCase().match(keyword)||s.name_tw.match(keyword);
                });
            }

            return result;
        },
        filtered_builder_options:function(){

            var options = [];
            var filters = this.builder_rarity_options;
            var allow_down_grade = this.allow_down_grade;

            this.builder_options.forEach(function(option){

                var boms = option.boms.filter(function(bom){

                    var r = bom.devil.rarity;
                    var r1 = bom.child1.devil.rarity;
                    var r2 = bom.child2.devil.rarity;
                    var temp = [r1,r2].sort();

                    r1 = temp[0];
                    r2 = temp[1];

                    if( allow_down_grade==0 && (r1>r||r2>r)){
                        return false;
                    }

                    return filters.filter(function(filter){
                        if(filter.active&&filter.state&&filter.text==r1+'+'+r2){
                            return true;
                        }
                    }).length > 0;
                });

                if(boms.length)
                    options.push({name:option.name,boms:boms});
            });

            return options;
        },
        filtered_fusion_options:function(){

            var options = [];
            var filters = this.fusion_rarity_options;
            var allow_down_grade = this.allow_down_grade;

            this.fusion_options.forEach(function(option){

                var formulas = [];

                option.formulas.forEach(function(formula){

                    var boms = formula.boms.filter(function(bom){

                        var r = bom.devil.rarity;
                        var r1 = bom.child1.devil.rarity;
                        var r2 = bom.child2.devil.rarity;
                        var temp = [r1,r2].sort();

                        r1 = temp[0];
                        r2 = temp[1];

                        if( allow_down_grade==0 && (r1>r||r2>r)){
                            return false;
                        }

                        return filters.filter(function(filter){
                            if(filter.active&&filter.state&&filter.text==r1+'+'+r2){
                                return true;
                            }
                        }).length > 0;
                    });

                    if(boms.length){
                        formulas.push({name:formula.name,boms:boms});
                    }
                });

                if(formulas.length){
                    options.push({devil:option.devil,formulas:formulas,active:false});
                }
            });

            return options;
        }
    },
    methods:{

        route:function(name, skip_update_last){

            var index_main = this.index_main;
            var index_fusion = this.index_fusion;

            switch(name){
                case 'fusion.devil':    index_main = 0; index_fusion = 0;   break;
                case 'fusion.fission':  index_main = 0; index_fusion = 1;   break;
                case 'fusion.fusion':   index_main = 0; index_fusion = 2;   break;
                case 'skill':           index_main = 1;                     break;
                case 'customize':       index_main = 2;                     break;
                case 'search':          index_main = 3;                     break;
                case 'setting':         index_main = 4;                     break;
                case 'last':            index_main = this.index_main_last;
                                        index_fusion = this.index_fusion_last;  break;
                default:                index_main = 0; index_fusion = 0;   break;
            }

            if(!skip_update_last){
                this.index_main_last = index_main;
                this.index_fusion_last = index_fusion;
            }

            this.index_main = index_main;
            this.index_fusion = index_fusion;
        },
        isRoute:function(name){

            var index_main = this.index_main;
            var index_fusion = this.index_fusion;

            switch(name){
                case 'home':            index_main = 0; index_fusion = 0;   break;
                case 'fusion.devil':    index_main = 0; index_fusion = 0;   break;
                case 'fusion.fission':  index_main = 0; index_fusion = 1;   break;
                case 'fusion.fusion':   index_main = 0; index_fusion = 2;   break;
                case 'skill':           index_main = 1;                     break;
                case 'customize':       index_main = 2;                     break;
                case 'search':          index_main = 3;                     break;
                case 'setting':         index_main = 4;                     break;
                default:                index_main = 0; index_fusion = 0;   break;
            }

            return index_main == this.index_main && index_fusion == this.index_fusion;
        },
        start_bom: function(devil){

            this.builder_target = new DevilBom(devil);
            this.current_bom = null;
            this.route('fusion.fission');
            this.list_bom(this.builder_target);
        },
        list_bom: function(bom){

            this.update_current_bom(this.current_bom==bom?null:bom);
        },
        update_current_bom:function(bom){

            this.current_bom = bom;
            this.update_builder();
        },
        choose_bom: function(bom){

            this.current_bom.set(bom);
            this.update_current_bom(null);
        },
        reset_bom:function(bom){

            bom.unset();
            this.update_current_bom(null);
        },
        reset_builder:function(){

            this.builder_target = null;
            this.update_current_bom(null);
        },
        builder_rarity_option_click:function(option){

            var flag_first_down = true;
            var flag_last_down = true;

            if(option.state)
                return false;

            this.builder_rarity_options.forEach(function(opt){

                if(opt.active && opt!=option && !opt.state){
                    flag_first_down = false;
                }

                if(opt.active && opt!=option && opt.state){
                    flag_last_down = false;
                }
            });

            if(flag_first_down){
                this.builder_rarity_options.forEach(function(opt){
                    opt.state = opt==option ;
                });
            }

            if(flag_last_down){
                this.builder_rarity_options.forEach(function(opt){
                    opt.state=true;
                });
            }
        },
        update_builder:function(){

            if(this.current_bom){
                this.builder_options = this.current_bom.devil.fission_formulas();
            }
            else{
                this.builder_options = [];
            }
            this.update_builder_filter();
        },
        update_builder_filter:function(){

            var combs = {};
            var allow_down_grade = this.allow_down_grade;

            this.builder_options.forEach(function(option){

                option.boms.forEach(function(bom){

                    var r = bom.devil.rarity;
                    var r1 = bom.child1.devil.rarity;
                    var r2 = bom.child2.devil.rarity;
                    var temp = [r1,r2].sort();

                    r1 = temp[0];
                    r2 = temp[1];

                    if( allow_down_grade==0 && (r1>r||r2>r)){
                        //skip
                    }
                    else{
                        if(!combs[r1+'+'+r2])
                            combs[r1+'+'+r2] = r1+'+'+r2;
                    }

                });
            });

            this.builder_rarity_options.forEach(function(option){

                if(combs[option.text]){
                    option.active=true;
                    option.state=true;
                }
                else{
                    option.active=false;
                }
            });
        },
        fusion_rarity_option_click:function(option){

            var flag_first_down = true;
            var flag_last_down = true;

            if(option.state)
                return false;

            this.fusion_rarity_options.forEach(function(opt){

                if(opt.active && opt!=option && !opt.state){
                    flag_first_down = false;
                }

                if(opt.active && opt!=option && opt.state){
                    flag_last_down = false;
                }
            });

            if(flag_first_down){
                this.fusion_rarity_options.forEach(function(opt){
                    opt.state = opt==option ;
                });
            }

            if(flag_last_down){
                this.fusion_rarity_options.forEach(function(opt){
                    opt.state=true;
                });
            }
        },
        update_fusion:function(){

            if(this.fusion_target){
                this.fusion_options = this.fusion_target.fusion_formulas();
            }
            else{
                this.fusion_options = [];
            }
            this.update_fusion_filter();
        },
        fusion: function(devil){

            this.fusion_target = devil;
            this.update_fusion();
            this.route('fusion.fusion');
        },
        reset_fusion: function(){

            this.fusion_target = null;
            this.update_fusion();
        },
        update_fusion_filter: function(){

            var combs = {};
            var allow_down_grade = this.allow_down_grade;

            this.fusion_options.forEach(function(option){
                option.formulas.forEach(function(formula){
                    formula.boms.forEach(function(bom){
                        var r = bom.devil.rarity;
                        var r1 = bom.child1.devil.rarity;
                        var r2 = bom.child2.devil.rarity;
                        var temp = [r1,r2].sort();

                        r1 = temp[0];
                        r2 = temp[1];

                        if( allow_down_grade==0 && (r1>r||r2>r)){
                            //skip
                        }
                        else{
                            if(!combs[r1+'+'+r2])
                                combs[r1+'+'+r2] = r1+'+'+r2;
                        }
                    });
                });
            });

            this.fusion_rarity_options.forEach(function(option){

                if(combs[option.text]){
                    option.active=true;
                    option.state=true;
                }
                else{
                    option.active=false;
                }
            });
        },
        update_now:function(){

            var now = new Date();
            var utc = now.getTime() + now.getTimezoneOffset() * 60000;
            this.now = new Date( utc + 9 * 3600000 );
        },
        tick:function(){

            this.gate_timer_jp = "";

            //orb
            var day = this.now.getDay();
            this.orbs[0].state = (day==1||day==6);          //light
            this.orbs[1].state = (day==2||day==6);          //dark
            this.orbs[2].state = (day==3||day==6||day==0);  //natural
            this.orbs[3].state = (day==4||day==0);          //law
            this.orbs[4].state = (day==5||day==0);          //chaos
        },
        show_devil_info:function(devil){

            //this.info_name = devil.name;
            this.info_target = devil;
            this.$root.$emit('bv::show::modal','modal_devil_info');
        },
        auto_costdown: function(bom, rarity, type){

            if(bom && bom.devil.rarity>rarity){

                var boms = [];

                bom.devil.fission_formulas().forEach(function(option){
                    boms = boms.concat(option.boms);
                });

                boms.sort(function(bom1, bom2){
                    var cost1 = type ? bom1.getCost(rarity) : bom1.getCostPure(rarity);
                    var cost2 = type ? bom2.getCost(rarity) : bom2.getCostPure(rarity);
                    if(cost1==cost2) return 0;
                    return cost1 > cost2 ? 1 : -1;
                });

                if(boms.length>0){
                    bom.set(boms[0]);
                }

                if(type==1){
                    //雜體
                    //var type1 = bom.pure_child == 1 ? 0 : 1;
                    //var type2 = bom.pure_child == 2 ? 0 : 1;
                    type1=0; //TODO
                    type2=0; //TODO
                    this.auto_costdown(bom.child1, rarity, type1);
                    this.auto_costdown(bom.child2, rarity, type2);
                }
                else{
                    //純素體
                    this.auto_costdown(bom.child1, rarity, type);
                    this.auto_costdown(bom.child2, rarity, type);
                }
            }
        },
        builder_auto_costdown:function(rarity, type){

            this.auto_costdown(this.builder_target, rarity, type);
            this.update_current_bom(null);
        }
    }
});

Vue.component('skill',{
    props:['skill'],
    template:'#skill-t'
});

Vue.component('skill-list',{
    props:['skills'] ,
    template:'#skill-list-t',
    data:function(){
        return {
            actives:[]
        }
    },
    watch:{
        skills:function(){
            this.actives=[];
        }
    }
});

Vue.component('devil',{
    props:['devil','usage','skill'],
    template:'#devil-t',
    methods:{
        click:function(){
            if(this.usage=='fission'){
                app.start_bom(this.devil);
            }
            if(this.usage=='builder'){
                this.$emit('click');
            }
        },
        info:function(){
            app.show_devil_info(this.devil);
        },
        isSkillAvailable:function(inherit){
            if(inherit){
                return this.skill==this.devil.skills[0]
                ||    this.devil.skill5.indexOf(this.skill)>=0;
            }
            else{
                return this.skill==this.devil.skills[1] ||
                    this.skill==this.devil.skills[2] ||
                    this.devil.skill4.indexOf(this.skill)>=0;
            }
        },

        // Added by Dissi
        isSkillAvailableType:function(inherit){
          if(inherit == 0){
            return this.skill==this.devil.skills[0];
          }
          else if(inherit == 1){
            return this.devil.skill5.indexOf(this.skill)>=0;
          }
          else if(inherit == 2){
            return this.skill==this.devil.skills[1]||
                this.skill==this.devil.skills[2];
          }
          else if(inherit == 3){
            return this.devil.skill4.indexOf(this.skill)>=0;
          }
        }
    }
});

Vue.component('devil-list',{
    props:['devils','usage','skill'] ,
    template:'#devil-list-t',
    methods:{
        click:function(devil){
            if(this.usage=='fission'){
                app.fission(devil);
            }
            if(this.usage=='builder'){
                this.start_bom(devil);
            }
        },
        fusion:function(devil){
            app.fusion(devil);
        },
        fission:function(devil){
            app.fission(devil, true);
        },
        start_bom:function(devil){
            app.start_bom(devil);
        }
    }
});

Vue.component('devil-bom',{
    props:['bom','usage'],
    template:'#devil-bom-t',
    methods:{
        click:function(){
            if(this.usage=='builder')
                this.choose_bom(this.bom);
        },
        choose_bom: function(){
            app.choose_bom(this.bom);
        },
        info:function(devil){
            app.show_devil_info(devil);
        }
    }
});

Vue.component('devil-bom-list',{
    props:['boms','usage'],
    template:'#devil-bom-list-t'
});

Vue.component('devil-bom-builder',{
    props:['bom'],
    template:'#devil-bom-builder-t',
    methods:{
        list_bom:function(bom){
            app.list_bom(bom);
        },
        reset_bom:function(bom){
            app.reset_bom(bom);
        },
        info:function(){
            app.show_devil_info(this.bom.devil);
        },
        toggle:function(){
            this.collapsed = !this.collapsed;
        },
        hasChild:function(){
            return this.bom.child1 || this.bom.child2;
        },
        isCurrent:function(){
            return this.bom ? this.bom == app.current_bom : false;
        },
        isParentCurrent:function(){
            return this.parent ? this.parent == app.current_bom : false;
        }
    },
    data:function(){
        return {collapsed: false}
    },
    computed:{
        collapsed_sign:function(){
            return this.collapsed ? '+' : '-';
        }
    }
});

Vue.component('devil-bom-options',{
    props:['options','usage'],
    template:'#devil-bom-options-t'
});

var window_before_unload = function(){

    if(app.allow_prevent_unload=='1'){
        return true;
    }
}
