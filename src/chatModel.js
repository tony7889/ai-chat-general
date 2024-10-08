var {HuggingFaceInference} = require("langchain/llms/hf");
var HuggingFaceInference = require("langchain/")

const model = new HuggingFaceInference({
  model: "gpt2",
  apiKey: "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", // In Node.js defaults to process.env.HUGGINGFACEHUB_API_KEY
});
const res = await model.invoke("1 + 1 =");
console.log({ res });