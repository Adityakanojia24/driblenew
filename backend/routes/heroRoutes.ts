
import express from 'express';
import { getHeroContent, updateHeroContent } from '../controllers/heroController';

const router = express.Router();

router.get('/hero-content', getHeroContent);
router.put('/hero-content', updateHeroContent);

export default router;
