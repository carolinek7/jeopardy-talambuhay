interface PlayerData {
    [key: string]: unknown;
}

interface Question {
    points: number;
    question: string;
    answer: string;
    imgSrc?: string;
    answered: boolean;
    buzzers: string[];
}

const playerData: PlayerData[] = [];
const TIME_LEFT = 8; // seconds
const sortQuestions = (questions: { points: number; question: string; answer: string; imgSrc?: string; }[]) => questions.sort((a, b) => a.points - b.points).map(q => ({ ...q, answered: false, buzzers: [] as string[] }));
const pastQuestions: Question[] = sortQuestions([
    {
        points: 100,
        question: 'What country has the Forbidden City?',
        answer: 'China',
        //my mom is from china
    },
    {
        points: 200,
        question:
            'How many meters does a typical distance track event consist of when running two laps around a standard outdoor track (enter number)?',
        answer: '800',
        //i used to be so good at 800 m
    },
    {
        points: 300,
        question:
            'What is the middle school robotics competition?',
        answer: 'First Lego League',
        //i used to do robotics in middle school
    },
    {
        points: 400,
        question: 
            'What state has the Mauna Loa volcano?',
        imgSrc: "/mauna_loa.webp",
        //my dad is from hawaii
        answer: 'Hawaii',
    }
]);

const presentQuestions: Question[] =
    sortQuestions([
        {
            points: 400,
            question:
                'Cassie Hobbes is a character from which book?',
            answer: 'The Naturals',
            //im trying to get into reading more + this was the first book i read
        },
        {
            points: 100,
            question:
                'What sport uses a racket and a bright yellow ball?',
            answer: 'Tennis',
            //i play tennis
        },
        {
            points: 200,
            question: 'What Italian dessert typically consists of ladyfingers, mascarpone cheese, and coffee?',
            imgSrc: '/tiramisu.jpeg',
            answer: 'Tiramisu',
            //i love tiramisu, probably favorite food
        },
        {
            points: 300,
            question:
                'What craft technique utilizes yarn and single needle/hook?',
            imgSrc: '/crochet.jpeg',
            answer: 'Crochet',
            //i like to crochet and do crafts
        }
    ]);
const futureQuestions: Question[] = sortQuestions([
    {
        points: 100,
        question:
            'What field is typically represented by a stethoscope and a white coat?',
        answer: 'Medicine',
        //i am interested in medicine
    },
    {
        points: 200,
        question:
            'What house animal is known for its ability to run fast and be lazy?',
        answer: 'Cat',
        //i wish i had a cat
    },
    {
        points: 300,
        question:
            "What is the practice of doing daily stretches and exercises to improve flexibility and strength called?",
        answer: 'Yoga',
        //im trying to get more flexible and physically stable
    },
    {
        points: 400,
        question:
            "What country is known for its futurisitc technology and culture, including robots and anime?",
        answer: "Japan",
        //i want to go to japan
    }
]);


const categories = [
    {
        title: 'Caroline\'s Past',
        questions: pastQuestions
    },
    {
        title: `Caroline's Present`,
        questions: presentQuestions
    },
    {
        title: "Caroline's Future",
        questions: futureQuestions
    }
];

export const state = {
    playerData,
    categories,
    selectedQuestion: null as Question | null | undefined,
    whoControls: null as string | null,
    timeLeft: TIME_LEFT,
    intervalId: null as NodeJS.Timeout | null,
    whoBuzzed: null as string | null,
};

export interface CheckAnswerPayload {
    answer: string;
    question: Question;
    socketId: string;
}