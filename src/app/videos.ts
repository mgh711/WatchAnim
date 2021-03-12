export class Videos {
    
    static videos(): Video[] { 
        return [ 
            {
                nom: 'Fairy Tail-VF',
                episode: 'S1 Ep1',
                styles: ['fantastique','action'],
                graphismes: 'standard',
                description: 'Fairy Tail ',
                numero:'1',
                lien: 'https://www.youtube.com/embed/PxG3Elu6X9A'
            },
            {
                nom: 'Fairy Tail-VF',
                episode: 'S1 Ep2',
                styles: ['fantastique','action'],
                graphismes: 'standard',
                description: 'Fairy Tail',
                numero: '2',
                lien: 'https://www.youtube.com/embed/l5icMfeQp8k'
            },
            {
                nom: 'Jujutsu Kaisen-VF',
                episode: 'S1 Ep1',
                styles: ['action',],
                graphismes: 'standard',
                description: 'Fairy Tail',
                numero:'3',
                lien: 'https://www.youtube.com/embed/lzJc_gvzrLc'
            },
            {
                nom: 'Fairy Tail-VF',
                episode: 'S1 Ep3',
                styles: ['fantastique', 'action'],
                graphismes: 'standard',
                description: 'Fairy Tail',
                numero:'4',
                lien: 'https://www.youtube.com/embed/5h0HKL-qN0Y'
            },
            {
                nom: 'Fairy Tail-VF',
                episode: 'S1 Ep4',
                styles: ['fantastique', 'action'],
                graphismes: 'standard',
                description: 'Fairy Tail',
                numero:'5',
                lien: 'https://www.youtube.com/embed/G-J3nQXeHCY'
            },
            {
                nom: 'Fairy Tail-VF',
                episode: 'S1 EP5',
                styles: ['fantastique', 'action'],
                graphismes: 'standard',
                description: 'Fairy Tail',
                numero:'6',
                lien: 'https://www.youtube.com/embed/UjMxTilX1Rs'
            },
            {
                nom: 'Fairy Tail-VF',
                episode: 'S1 EP6',
                styles: ['fantastique', 'action'],
                graphismes: 'standard',
                description: 'Fairy Tail',
                numero:'7',
                lien: 'https://www.youtube.com/embed/bJYDBrQ5xsY'
            },
            {
                nom: 'Fairy Tail-VF',
                episode: 'S1 Ep7',
                styles: ['action'],
                graphismes: 'standard',
                description: 'Fairy Tail',
                numero:'8',
                lien: 'https://www.youtube.com/embed/e5AhstsT4FY'
            },
            {
                nom: 'Fairy Tail-VF',
                episode: 'S1 Ep8',
                styles: ['action','fantastique'],
                graphismes: 'standard',
                description: 'Fairy Tail',
                numero:'9',
                lien:'https://www.youtube.com/watch?v=uqZagddHyWM'
            },
            {
                nom: 'Fairy Tail-VF',
                episode: 'S1 Ep9',
                styles: ['action','fantastique'],
                graphismes: 'standard',
                description:'Fairy Tail',
                numero:'10',
                lien: 'https://www.youtube.com/watch?v=fSP5ydzjrSA'
            },
            {
                nom: 'Fairy Tail-VF',
                episode:'S1 Ep10',
                styles:['action','fantastique'],
                graphismes:'standard',
                description:'Fairy Tail',
                numero:'11',
                lien:'https://www.youtube.com/embed/hM2Zwt5xUqE'
            },
            {
                nom: 'Fairy Tail-VF',
                episode: 'S1 Ep11',
                styles:['action','fantastique'],
                graphismes:'standard',
                description:'Fairy Tail',
                numero:'12',
                lien:'https://www.youtube.com/embed/5gqOfbdeA6c'
            },

        ];
    }
}

export interface Video {
    nom: string;
    episode: string;
    styles: Style[];
    graphismes: Graphismes;
    description: string;
    numero: string
    lien: string
}

export type Graphismes = 'standard' | 'realiste'
export type Style = 'action' | 'fantastique' | 'horreur' | 'romantique'

