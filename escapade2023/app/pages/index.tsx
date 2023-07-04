/*
import { useState, useEffect } from 'react';
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

export default function Home() {
    const [count, setCount] = useState<number>(0);
    const [password, setPassword] = useState<string>('');
    const [message, setMessage] = useState<string>('');

    useEffect(() => {
        // Connexion à MongoDB et chargement du modèle du compteur
        mongoose.connect(process.env.MONGO_URI || '', { useNewUrlParser: true, useUnifiedTopology: true });
        Counter = mongoose.model<CounterModel>('Counter', CounterSchema);

        // Chargement du compteur à partir de la base de données
        loadCounter();
    }, []);

    const loadCounter = async () => {
        try {
            const counter = await Counter.findOne();
            if (counter) {
                setCount(counter.count);
            }
        } catch (error) {
            console.log(error);
        }
    };

    const checkPassword = async () => {
        if (password === 'votre_mot_de_passe') {
            const newCount = count + 1;
            setCount(newCount);

            try {
                // Mettre à jour le compteur dans la base de données
                await Counter.updateOne({}, { count: newCount }, { upsert: true });

                setMessage(`Félicitations ! Vous êtes la ${newCount}ème personne à trouver le mot de passe.`);
            } catch (error) {
                console.log(error);
                setMessage('Une erreur est survenue lors de la mise à jour du compteur.');
            }
        } else {
            setMessage('Mot de passe incorrect.');
        }
    };

    return (
        <div>
            <h1>Compteur de mots de passe</h1>
    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Entrez le mot de passe" />
    <button onClick={checkPassword}>Valider</button>
        <p>{message}</p>
        </div>
);
}
*/
