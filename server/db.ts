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
    },
    {
        points: 200,
        question:
            'What track event typically consists of running two laps around a standard outdoor track?',
        answer: '800 meter run',
    },
    {
        points: 300,
        question:
            'What is the middle school robotics competition?',
        answer: 'First Lego League (FLL)',
    },
    {
        points: 400,
        question: 
            'What state has the Mauna Loa volcano?',
        imgSrc: "https://www.britannica.com/place/Mauna-Loa",
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
        },
        {
            points: 100,
            question:
                'What sport uses a racket and a bright yellow ball?',
            answer: 'Tennis',
        },
        {
            points: 200,
            question: 'What Italian dessert typically consists of ladyfingers, mascarpone cheese, and coffee?',
            imgSrc: '/tiramisu.jpeg',
            answer: 'Tiramisu',
        },
        {
            points: 300,
            question:
                'What craft technique utilizes yarn and single needle/hook?',
            imgSrc: '/crochet.jpeg',
            answer: 'Crocheting',
        }
    ]);
const futureQuestions: Question[] = sortQuestions([
    {
        points: 100,
        question:
            'What field is typically represented by a stethoscope and a white coat?',
        answer: 'Medicine',
    },
    {
        points: 200,
        question:
            'What house animal is known for its ability to run fast and be lazy?',
        answer: 'Cat',
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