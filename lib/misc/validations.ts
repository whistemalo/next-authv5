// validat if process.env.API_URL is set
export function validateEnvLaravelApi() {
    if (!process.env.API_URL) {
        throw new Error("process.env.API_URL is not set");
    }
}