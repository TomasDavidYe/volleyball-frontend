export class Player{
    constructor(_id,_nickname, _sex,_address){
        this.id = _id;
        this.nickname = _nickname;
        this.sex = _sex;
        this.address = _address;
    }
    id: number;
    nickname: string;
    sex: string;
    address:string;     
}