import Joi from '@hapi/joi';

const registrationValidator = (data) => {
    const schema = Joi.object({
        User_Avatar: Joi.string(),
        User_Email: Joi.string().min(6).max(199).required().email(),
        User_Name: Joi.string().min(2).max(30).required(),
        User_Password: Joi.string().min(6).max(16).required(),
        User_First_Name: Joi.string().min(2).max(30).alphanum(),
        User_Last_Name: Joi.string().min(2).max(30).alphanum(),
        User_Location: Joi.string().min(2).max(30).alphanum(),
        User_Gender: Joi.string().min(2).max(30).alphanum(),
        User_Bio: Joi.string().min(2).max(999),
        User_Age: Joi.number().min(18).max(111).integer(),
        User_Website: Joi.string(),
        primaryContact: Joi.string(),
        User_EmailConfirmed: Joi.string(),
        User_isOnline: Joi.string(),
        User_isDeleted: Joi.string(),
        User_Role: Joi.string()
    })
    return schema.validate(data);
}

const loginValidator = (data) => {
    const schema = Joi.object({
        User_Email: Joi.string().min(6).max(199).required().email(),
        User_Password: Joi.string().min(6).max(16).required()
    })
    return schema.validate(data);
}

export {registrationValidator,loginValidator};