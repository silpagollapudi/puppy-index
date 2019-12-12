import axios from 'axios';

export const fetchDogList = () => {
    return (dispatch, getState) => {
        axios.get('https://dog.ceo/api/breeds/list').then(res => {
            dispatch(setDogList(res.data.message))
            console.log(res.data.message)
            res.data.message.forEach(breed => {
                dispatch(fetchDogImgSrc(breed))
            })
        })
    };
};

export const setDogList = dogList => {
    return ({
        type: 'SET_DOG_LIST',
        payload: dogList,
    })
};

export const changeActiveBreed = (breed_name) => ({
    type: 'CHANGE_ACTIVE_BREED',
    payload: breed_name,
});

export const filterList = (filter) => {
        
    console.log("@ACTIONS", filter)

            return ({
                type: 'FILTER_LIST',
                payload: filter,
            })
        };


        export const fetchDogImgSrc = (breed_name) => {
            return (dispatch, getState) => {
                axios.get(`https://dog.ceo/api/breed/${breed_name}/images`).then(res => {
                    const pictures = res.data.message;
                    dispatch(setDogPicURLToState(breed_name, pictures));
                });
            };
        };


        export const setDogPicURLToState = (breed_name, pictures) => ({
            type: 'SAVE_DOG_PIC_URLS_TO_STATE',
            payload: {
                breed: breed_name,
                pictures: pictures
            }
        });