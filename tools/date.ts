import { tool } from "@opencode-ai/plugin"

export default tool({
    description: "A tool to get the current date in the format YYYY-MM-DD.",
    args: {},
    async execute(args, context) {
        const currentDate = new Date();
        const year = currentDate.getFullYear();
        const month = String(currentDate.getMonth() + 1).padStart(2, "0");
        const day = String(currentDate.getDate()).padStart(2, "0");
        
        return `${year}-${month}-${day}`;
    }
})