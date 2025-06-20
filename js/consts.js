import {Player} from "./player.js";

export const States = {
    None:"None",
    Receive:"Receive",
    Service:"Service"
}

export const systems = {
    "4:2 alt":[
        new Player("MB2"),
        new Player("S1"),
        new Player("OH1"),
        new Player("MB1"),
        new Player("S2"),
        new Player("OH2")
    ],
    "4:2":[
        new Player("OH2"),
        new Player("S1"),
        new Player("MB1"),
        new Player("OH1"),
        new Player("S2"),
        new Player("MB2")
    ],
    "5:1":[
        new Player("S"),
        new Player("OH1"),
        new Player("MB1"),
        new Player("D"),
        new Player("OH2"),
        new Player("MB2")
    ]
};

export const serve = {
    "5:1":{
        1:[
            {x:770,y:935},
            {x:484,y:97},
            {x:449,y:35},
            {x:414,y:148},
            {x:150,y:675},
            {x:450,y:675}
        ],
        2:[
            {x:770,y:935},
            {x:503, y:35},
            {x:447, y:101},
            {x:395, y:35},
            {x:425, y:602},
            {x:469, y:671}
        ],
        3:[
            {x:770,y:935},
            {x:529, y:102},
            {x:467, y:35},
            {x:390, y:35},
            {x:476, y:614},
            {x:686, y:605}
        ],
        4:[
            {x:770,y:935},
            {x:486, y:98},
            {x:451, y:35},
            {x:416, y:158},
            {x:150, y:675},
            {x:450, y:675}
        ],
        5:[
            {x:770,y:935},
            {x:494, y:46},
            {x:450, y:108},
            {x:415, y:42},
            {x:415, y:611},
            {x:450, y:675}
        ],
        6:[
            {x:770,y:935},
            {x:561,y:108},
            {x:506,y:54},
            {x:116,y:84},
            {x:479,y:629},
            {x:704,y:554}
        ]  
    }
};

export const release = {
    "5:1":{
        "None":{
            1:[
                {x:750, y:675},
                {x:146, y:224},
                {x:450, y:225},
                {x:741, y:217},
                {x:150, y:675},
                {x:450, y:675}
            ],
            2:[
                {x:445, y:658},
                {x:750, y:225},
                {x:146, y:180},
                {x:445, y:193},
                {x:751, y:658},
                {x:180, y:666}
            ],
            3:[
                {x:134, y:669},
                {x:459, y:215},
                {x:753, y:229},
                {x:150, y:225},
                {x:459, y:685},
                {x:747, y:686}
            ],
            4:[
                {x:750, y:675},
                {x:158, y:208},
                {x:450, y:225},
                {x:741, y:229},
                {x:150, y:675},
                {x:450, y:675}
            ],
            5:[
                {x:467, y:676},
                {x:747, y:185},
                {x:142, y:186},
                {x:461, y:185},
                {x:744, y:669},
                {x:170, y:683}
            ],
            6:[
                {x:158, y:676},
                {x:465, y:226},
                {x:730, y:222},
                {x:150, y:225},
                {x:463, y:690},
                {x:738, y:675}
            ]
        },
        "Receive":{
            1:[
                {x:750, y:675},
                {x:750, y:225},
                {x:450, y:225},
                {x:150, y:225},
                {x:150, y:675},
                {x:450, y:675}
            ],
            2:[
                {x:445, y:658},
                {x:750, y:225},
                {x:146, y:180},
                {x:445, y:193},
                {x:751, y:658},
                {x:180, y:666}
            ],
            3:[
                {x:134, y:669},
                {x:459, y:215},
                {x:753, y:229},
                {x:150, y:225},
                {x:459, y:685},
                {x:747, y:686}
            ],
            4:[
                {x:750, y:675},
                {x:158, y:208},
                {x:450, y:225},
                {x:741, y:229},
                {x:150, y:675},
                {x:450, y:675}
            ],
            5:[
                {x:467, y:676},
                {x:747, y:185},
                {x:142, y:186},
                {x:461, y:185},
                {x:744, y:669},
                {x:170, y:683}
            ],
            6:[
                {x:158, y:676},
                {x:465, y:226},
                {x:730, y:222},
                {x:150, y:225},
                {x:463, y:690},
                {x:738, y:675}
            ]
            
        },
        "Service":{
            1:[
                {x:750, y:675},
                {x:146, y:224},
                {x:450, y:225},
                {x:741, y:217},
                {x:150, y:675},
                {x:450, y:675}
            ],
            2:[
                {x:445, y:658},
                {x:750, y:225},
                {x:146, y:180},
                {x:445, y:193},
                {x:751, y:658},
                {x:180, y:666}
            ],
            3:[
                {x:134, y:669},
                {x:459, y:215},
                {x:753, y:229},
                {x:150, y:225},
                {x:459, y:685},
                {x:747, y:686}
            ],
            4:[
                {x:750, y:675},
                {x:158, y:208},
                {x:450, y:225},
                {x:741, y:229},
                {x:150, y:675},
                {x:450, y:675}
            ],
            5:[
                {x:467, y:676},
                {x:747, y:185},
                {x:142, y:186},
                {x:461, y:185},
                {x:744, y:669},
                {x:170, y:683}
            ],
            6:[
                {x:158, y:676},
                {x:465, y:226},
                {x:730, y:222},
                {x:150, y:225},
                {x:463, y:690},
                {x:738, y:675}
            ]
        }
    }
};

export const neutral = {
    "5:1":{
        1:[],
        2:[],
        3:[],
        4:[],
        5:[],
        6:[]
    }
};

export const receive = {
    "5:1":{
        1:[
            {x:775, y:714},
            {x:729, y:652},
            {x:450, y:225},
            {x:150, y:225},
            {x:150, y:675},
            {x:450, y:675}
        ],
        2:[
            {x:730, y:629},
            {x:725, y:56},
            {x:179, y:640},
            {x:36, y:66},
            {x:313, y:787},
            {x:455, y:675}
        ],
        3:[
            {x:735, y:561},
            {x:758, y:106},
            {x:715, y:35},
            {x:169, y:566},
            {x:455, y:631},
            {x:612, y:711}
        ],
        4:[
            {x:807, y:669},
            {x:746, y:600},
            {x:70, y:123},
            {x:35, y:35},
            {x:132, y:593},
            {x:448, y:620}
        ],
        5:[
            {x:748, y:609},
            {x:837, y:40},
            {x:155, y:616},
            {x:35, y:35},
            {x:99, y:126},
            {x:436, y:660}
        ],
        6:[
            {x:750, y:610},
            {x:843, y:205},
            {x:808, y:37},
            {x:177, y:606},
            {x:476, y:615},
            {x:715, y:103}
        ]
    }
}

export const attack = {

}

export const defense = {
    "left":{
        "5:1":{
            "Receive":{
                1:[
                    {x:629, y:501},
                    {x:645, y:174},
                    {x:179, y:36},
                    {x:84, y:36},
                    {x:115, y:503},
                    {x:399, y:734}
                ],
                2:[
                    {x:386, y:666},
                    {x:677, y:210},
                    {x:64, y:35},
                    {x:141, y:35},
                    {x:675, y:512},
                    {x:103, y:418}
                ],
                3:[
                    {x:108, y:461},
                    {x:148, y:35},
                    {x:668, y:199},
                    {x:73, y:35},
                    {x:386, y:693},
                    {x:637, y:567}
                ],
                4:[
                    {x:636, y:588},
                    {x:69, y:39},
                    {x:148, y:39},
                    {x:647, y:237},
                    {x:92, y:470},
                    {x:422, y:733}
                ],
                5:[
                    {x:403, y:710},
                    {x:672, y:171},
                    {x:80, y:35},
                    {x:162, y:35},
                    {x:638, y:516},
                    {x:105, y:426}
                ],
                6:[
                    {x:111, y:506},
                    {x:169, y:35},
                    {x:684, y:237},
                    {x:73, y:36},
                    {x:379, y:694},
                    {x:657, y:562}
                ]
            }
        },
        1:[],
        2:[],
        3:[],
        4:[],
        5:[],
        6:[]
    },
    "middle":{
        1:[],
        2:[],
        3:[],
        4:[],
        5:[],
        6:[]
    },
    "right":{
        1:[],
        2:[],
        3:[],
        4:[],
        5:[],
        6:[]
    }
}