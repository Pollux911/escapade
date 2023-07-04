import { NextApiRequest, NextApiResponse } from 'next';
import absoluteUrl from 'next-absolute-url';
import mongoose, { Document, Model, Schema } from 'mongoose';

// Définition du schéma du compteur
interface CounterModel extends Document {
    count: number;
}

const CounterSchema = new Schema<CounterModel>({
    count: {
        type: Number,
        default: 0,
    },
});

let Counter: Model<CounterModel>;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { origin } = absoluteUrl(req, 'localhost:3000');

    if (req.method === 'GET') {
        try {
            const counter = await Counter.findOne();
            if (counter) {
                return res.status(200).json({ count: counter.count });
            } else {
                return res.status(200).json({ count: 0 });
            }
        } catch (error) {
            return res.status(500).json({ message: 'Une erreur est survenue lors du chargement du compteur.' });
        }
    }

    if (req.method === 'POST') {
        const { password } = req.body;

        if (password === 'votre_mot_de_passe') {
            try {
                const counter = await Counter.findOne();
                const newCount = counter ? counter.count + 1 : 1;

                if (counter) {
                    await Counter.updateOne({}, { count: newCount });
                } else {
                    await Counter.create({ count: newCount });
                }

                return res.status(200).json({ message: `Félicitations ! Vous êtes la ${newCount}ème personne à trouver le mot de passe.` });
            } catch (error) {
                return res.status(500).json({ message: 'Une erreur est survenue lors de la mise à jour du compteur.' });
            }
        } else {
            return res.status(401).json({ message: 'Mot de passe incorrect.' });
        }
    }

    return res.status(404).json({ message: 'Route introuvable.' });
}
