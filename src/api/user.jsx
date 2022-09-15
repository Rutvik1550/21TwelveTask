import { get } from "./util/HttpUtil"

export const getUsers = async (id) => {
  try {
    const url = id ? `users?id=${id}` : 'users';
    const json = await get(url);
    // console.log(json,'user===')
    if(json) {
      return json;
    }
  } catch (e) {
    console.log('Error with getUsers: ',e);
  }
}

export const getAlbums = async (id) => {
  try {
    const url = id ? `albums?userId=${id}` : 'albums';
    const json = await get(url);
    // console.log(json,'user===')
    if(json) {
      return json;
    }
  } catch (e) {
    console.log('Error with getAlbums: ',e);
  }
}

export const getPhotos = async (id) => {
  try {
    const url = id ? `photos?albumId=${id}` : 'photos'
    const json = await get(url);
    // console.log(json,'user===')
    if(json) {
      return json;
    }
  } catch (e) {
    console.log('Error with getPhotos: ',e);
  }
}