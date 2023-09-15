
import { Request, Response } from 'express';
import HeroContent from '../models/HeroContent';

export const getHeroContent = async (_req: Request, res: Response) => {
  try {
    const heroContent = await HeroContent.findOne();
    res.status(200).json(heroContent);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

export const updateHeroContent = async (req: Request, res: Response) => {
  try {
    const { title, description } = req.body;
    const updatedHeroContent = await HeroContent.findOneAndUpdate({}, { title, description }, { new: true });
    res.status(200).json(updatedHeroContent);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};
