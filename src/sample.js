// Import the necessary modules
import { HuggingFaceInference } from '@langchain/community/llms/hf';
// import { LangChain } from '@langchain/core';

// Initialize the Hugging Face model
const hfModel = new HuggingFaceInference({
apiKey: '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',
model: 'gpt2', // Replace with your desired model
});

const res = await hfModel.invoke("1 + 1 =");
console.log({ res });

// // Create a LangChain instance
// const langChain = new LangChain({
// llm: hfModel,
// });

// // Define a function to generate text
// async function generateText(prompt) {
// const response = await langChain.generate({
// prompt: prompt,
// maxTokens: 100,
// });
// console.log(response);
// }