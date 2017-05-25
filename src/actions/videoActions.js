import requestData from '../utils/requestData';  

export function addVideos(category = 'videos', startIdx = 0, count = 10) {
  return {
    type: 'ADD_VIDEOS',
    payload: requestData(category, startIdx, count)
  };
}

export function toggleImage(e) {
  console.log(e)
  return {
    type: 'TOGGLE_IMAGE',
    payload: e
    // payload: e.target.parentElement.id
  };
}
