import axios from "axios";
import _ from "lodash";
import { generate } from "random-words";


export const translateWords = async (params: LangType): Promise<WordType[]> => {


    const generateMCQ = (
        meaning: {
            Text: string;
        }[],
        idx: number
    ): string[] => {
        const correctAns: string = meaning[idx].Text;

        const allMeaningsExceptForCorrect = meaning.filter(
            (i) => i.Text !== correctAns
        )

        const incorrectOptions: string[] = _.sampleSize(allMeaningsExceptForCorrect, 3).map(
            (i) => i.Text
        )
        const mcqOptions = _.shuffle([...incorrectOptions, correctAns]);

        return mcqOptions;
    }

    try {
        const words = generate(8).map((i) => ({
            Text: i,
        }));

        const response = await axios.post(
            `https://microsoft-translator-text.p.rapidapi.com/translate`,
            words,
            {
                params: {
                    'to[0]': params,
                    'api-version': '3.0',
                    profanityAction: 'NoAction',
                    textType: 'plain'
                },
                headers: {
                    'x-rapidapi-key': 'f9fb73a6bdmsh1bbd567b55631c0p1f72b9jsn5618bc760555',
                    'x-rapidapi-host': 'microsoft-translator-text.p.rapidapi.com',
                    'Content-Type': 'application/json'
                },
            }
        )
        // console.log(data[0].translations[0].text);
        const receive: FetchedDataType[] = response.data;
        // receive[0].translations[0].text

        const arr: WordType[] = receive.map((i, idx) => {
            const options: string[] = generateMCQ(words, idx)

            return {
                word: i.translations[0].text,
                meaning: words[idx].Text,
                options
            }
        })
        return arr;

    }
    catch (error) {
        console.log(error);
        throw new Error("Some Error")
    }

};

export const countMatchingElements = (
    arr1: string[],
    arr2: string[]
): number => {
    if (arr1.length !== arr2.length) throw new Error("Arrays are not equal");

    let matchedCount = 0;

    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] === arr2[i]) matchedCount++;
    }
    return matchedCount;
}