import {NextFunction, Response, Request} from "express"
import { StatusCodes } from "http-status-codes";
import DatabaseError from "../models/errors/database.error.model";
import ForbiddenError from "../routes/forbidden.error.model";

function errorHandler(error: any, req: Request,res:  Response, nest: NextFunction){

    if(error instanceof DatabaseError){
        res.sendStatus(StatusCodes.BAD_REQUEST);
    }else if (error instanceof ForbiddenError){
        res.sendStatus(StatusCodes.FORBIDDEN)
    } else{
        res.sendStatus(StatusCodes.INTERNAL_SERVER_ERROR);
    }
}


export default errorHandler;