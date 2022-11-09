import { Request, Response } from 'express';
import HTTP_STATUS from 'http-status-codes';
// import { joiValidation } from '@global/decorators/joi-validation.decorators';
// import { signupSchema } from '@auth/schemas/signup';
// import { IAuthDocument, ISignUpData } from '@auth/interfaces/auth.interface';
// import authService from '@service/db/auth.service';
// import { BadRequestError } from '@global/helpers/error-handler';
// import { Helpers } from '@global/helpers/helpers';
// import { UploadApiResponse } from 'cloudinary';
// import { uploads } from '@global/helpers/cloudinary-upload';

export class SignOut {
  public async update(req: Request, res: Response): Promise<void> {
    req.session = null;
    res.status(HTTP_STATUS.OK).json({ message: 'Logout successful', user: {}, token: '' });
  }
}
