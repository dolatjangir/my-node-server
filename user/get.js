const db = require("./../db/users")

var commonResponse = {status: 0, message: "", payload: null}

const GetUser = (ctx) => {
    prepareResponse(ctx, 200, "success", Object.values(db.user))
    return
}

const AddNewUser = (ctx) => {
    requestBody = ctx.request.body
    if (!requestBody.email ||
        !requestBody.firstName ||
        !requestBody.lastName) {
        prepareResponse(ctx, 400, "Details are required", null)
        return
    }

    if (requestBody.email in db.user) {
        prepareResponse(ctx, 400, "User Already Exists", null)
        return
    }

    db.user[requestBody.email] = requestBody

    prepareResponse(ctx, 200, "Success", null)
}

const prepareResponse = (ctx, statusCode, message, resPayload) => {
        ctx.status = statusCode
        ctx.message = message

        commonResponse.message = message
        commonResponse.status = statusCode
        commonResponse.payload = resPayload
        
        ctx.body = commonResponse

        return ctx
}

module.exports = {
    GetUser,
    AddNewUser,
}