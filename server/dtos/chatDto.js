module.exports = class chatDto {
    id;
    users;
    messages;
    constructor(model) {
        this.id = model._id;
        this.users = model.users;
        this.messages = model.messages;
    
    }

}
