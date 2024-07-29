import * as express from 'express';
import { user } from '../../controllers';
import isAuth, { hasValidRole } from '../../middleware/auth.middleware';
import {
  isUserValidForCreate, isUserValidForLogin, isValidKeyword,
} from '../../middleware';
import { uploadImages } from '../../middleware/file.middleware';
import { UserTypeEnum } from '../../types';


const router = express.Router();

router.route('/')
  .post(isAuth, hasValidRole([UserTypeEnum.ADMIN, UserTypeEnum.SADMIN]), uploadImages('profiles').single('picture'), isUserValidForCreate, user.create)
  .get(isAuth, hasValidRole([UserTypeEnum.ADMIN, UserTypeEnum.SADMIN]), user.getAll)
  
// router.route('/filter')
//   .all(isAuth)

// router.route('/password-forget')
//   .put(isValidEmail, user.forgetPassword);

// router.route('/password-reset')
//   .put(isValidPassword, user.resetPassword);
router.route('/login')
  .post(isUserValidForLogin, user.login);
router.route('/:id')
  .all(isAuth)
  .get(user.getById)



export default router;
