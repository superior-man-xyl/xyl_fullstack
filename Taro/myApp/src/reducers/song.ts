import { GETRECOMMEMDPLAYLIST } from "src/constants/song";
import {songType} from '../constants/commonType'

const INITIAL_STATE:songType={
    recommendPlayList:[]
}

export default function song(state=INITIAL_STATE,action){
    switch(action.type){
        case GETRECOMMEMDPLAYLIST:
            const {recommendPlayList}=action.payload;
            break;
        default:
            return state;
    }
}