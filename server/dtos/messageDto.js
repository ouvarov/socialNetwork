module.exports = class messageDto {
    id;
    userId;
    text;
    createDate;
    constructor(model) {
        this.id = model._id;
        this.userId = model.userId;
        this.createDate = model.createDate;
        this.text = model.text;
    }

}
