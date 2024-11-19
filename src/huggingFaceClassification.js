import {pipeline} from '@huggingface/transformers';

const model = process.env.model;
const task = process.env.task; 

const event_process_update = (theProcess)=>{
  console.log(theProcess);
}

export default getInstance = () =>{
  let _instance = null; 
  const getLocalInstance = (progress_callback) =>{
    if (_instance == null) {
      return pipeline(this.task, this.model, {progress_callback})
    }
  }
  return getLocalInstance(event_process_update);
}

