import axios from "axios";
import { generate } from "random-words";


export const translateWords = async (params: LangType): Promise<WordType[]> => {


    //7h32m

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
            return {
                word: i.translations[0].text,
                meaning: words[idx].Text,
                options: ["A TEXT"]
            }
        })
        return arr;

    }
    catch (error) {
        console.log(error);
        throw new Error("Some Error")
    }

};