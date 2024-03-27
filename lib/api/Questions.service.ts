
import { Checklist, QuestionCategory } from "@/types/checklistType";
import { validateEnvLaravelApi } from "../misc/validations";
import { log } from "../misc/logger";
import { API_URL } from "@/constants";

async function fetchFromLaravel(url:URL, cacheTime?:number) {

    const options: RequestInit= {
        method: "GET",
        headers: {
            Authorization: `Bearer ${process.env.TMDB_API_KEY}`,
            accept: "application/json",
            "Content-Type": "application/json"
        },
        next:{
            revalidate: cacheTime || 60 * 60 * 24 // 24 hours default
        }
    };

    try {
        const response = await fetch(url.toString(), options);
        const data = await response.json();
        return data.data as any;
    } catch (error) {
        console.error("Error fetching data from laravel", error);
        throw error;
    }
}


export async function getQuestions() {
    validateEnvLaravelApi();
    const path = "/ctl-questions";
    const url = new URL(`${process.env.API_URL}${path}`);
    log("Fetching questions from laravel:"+url.toString());
    return fetchFromLaravel(url) as Promise<Checklist[]>;
}

export async function getQuestionCategories() {
    validateEnvLaravelApi();
    const path = "/ctl-questions-categories";
    const url = new URL(`${process.env.API_URL}${path}`);
    log("Fetching question categories from laravel:"+url.toString());
    return fetchFromLaravel(url) as Promise<QuestionCategory[]>;
}

