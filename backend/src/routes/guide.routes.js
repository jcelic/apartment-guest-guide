import { Router } from 'express';
import { getGuide, getGuideSecrets } from '../controllers/guide.controller.js';

const router = Router();

router.get('/:token', getGuide);
router.get('/:token/secrets', getGuideSecrets);

export default router;
