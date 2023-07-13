import React, {ChangeEvent, FormEvent, useState } from 'react';
import { useRouter } from 'next/router';
import {NEXT_URL} from "../lib/VercelURL"
import Layout from '../components/Layout';
import { MongoClient } from 'mongodb';
import Head from 'next/head'
import clientPromise from '../lib/mongodb'
import type { InferGetServerSidePropsType, GetServerSideProps } from 'next'

type Counter = {
    count: number;
}

/*const Counter = mongoose.Schema({
    count: {type: Number, required:true}
});*/

type Props = {
  posts: [Post]
}

type Post = {
  _id: String;
  password : String;
}

interface PasswordPageProps {
    password: string;
    setPassword: (password: string) => void;
}

export default function PasswordPage() {
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");
    const [password, setPassword] = useState('');
    const router = useRouter();

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    };

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        verifyPassword(password);
    };

    const verifyPassword = async (password: string) => {
        try {
            if ( localStorage.getItem("teamColor")) {
                router.push('/congrats')
            } // else?
            let response = await fetch(`/api/getPassword?password=` + password);
            let collection = await response.json();
            const teamColor = JSON.stringify(collection.team)
            setError("")

            if (collection) {
                await fetch('/api/editCounter', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    }
                })
                let counter = await fetch('/api/getCounter');
                let count = await counter.json()

                const teamPosition = JSON.stringify(count.count)

                setError("");
                setMessage("Bien joué, c'est gagné ! WAOOUUUUUUUUUUUUHHHHHHHHH");

                window.localStorage.setItem("teamColor", teamColor); // setting team color in localStorage to color the congrats page

                window.localStorage.setItem("teamPosition", teamPosition); // setting team position

                console.log('Mot de passe valide. Bravo !');

                router.push('/congrats')

            } else {
                console.log('Ca marche pas.');
            }

        } catch (error) {
            setError("C'est loupé ! C'est tchao ! (On a rien vu, retentez votre chance)")
            console.log("Mauvais mot de passe, c'est tchao ! ", error);
        }
    };

    return (
        <div className="welcome">
            <h1>Bienvenue à l'étape finale !</h1>
            <h2> Entrez les 6 chiffres du mot de passe pour terminer l'aventure :</h2>
            <form onSubmit={handleSubmit}>
                <input type="tel" maxLength={6} value={password} onChange={handleChange} />
                <button type="submit">Valider l'ultime réponse</button>
            </form>
            {error ? <div className="alert-error">{error}</div> : null}
            {message ? <div className="alert-message">{message}</div> : null}
            <style jsx>{`
              
              body{
              background: url("https://img.freepik.com/photos-premium/beau-paysage-base-illustration-rendu-3d_771975-25.jpg?w=2000");
              }
              .welcome {
                border: 2vw ridge rgba(255, 255, 255, .6);
                padding: 5vh 5vw;
                margin: 30vh 5vw;
                border-radius: 2vh;
                display: flex;
                flex-wrap: wrap;
                flex-direction: column;
                justify-content: space-between;
                align-items: center;
                background: #f8f4e5;
                box-shadow: 12px 12px 2px 1px rgba(0, 0, 0, .2);
              }

              h1 {
                color: black;
                margin-bottom: 1rem;
                font-size: 6vw;
              }

              h2 {
                margin-bottom: 1rem;
                color: orange;
                width: 75%;
                font-size: 5vw;
              }

              input {
                display: block;
                letter-spacing: 1.6vw;
                font-size: 6vw;
                font-weight: bold;
                height: 4vh;
                padding-left: 4vw ;
                margin-bottom: 1.6vw;
                width: 40vw;
                border-radius: 3.3vw;
                outline: 0;

              }

              button {
                display: block;
                border-radius: 3.3vw;
                padding: 1.6vw;
                margin: 0 3.5vw;
                
              }

              .alert-error {
                margin-top: 3.3vw;
                padding: 1vw;
                color: red;
                border: 0.667vw red solid;
                border-radius: 1.667vw;
              }
              
              .alert-message {
                margin-top: 3.3vw;
                padding: 1vw;
                color: red;
                border: 0.667vw red solid;
                border-radius: 1.667vw;
              }



            `}</style>
        </div>

    );
}















/*export async function getServerSideProps() {
  try {
    let response = await fetch('http://localhost:3000/api/getCounter');
    let posts = await response.json();

    return {
      props: { posts: JSON.parse(JSON.stringify(posts)) },
    };
  } catch (e) {
    console.error(e);
  }
}

export function Posts(props: Props) {
  const [posts, setPosts] = useState<[Post]>(props.posts);*/

    // DELETE Function
  /*const handleDeletePost = async (postId: string) => {
    try {
      let response = await fetch(
          "http://localhost:3000/api/deletePost?id=" + postId,
          {
            method: "POST",
            headers: {
              Accept: "application/json, text/plain, *!/!*",
              "Content-Type": "application/json",
            },
          }
      );
      response = await response.json();
      window.location.reload();
    } catch (error) {
      console.log("An error occurred while deleting ", error);
    }
  };*/
  /*return (
      <Layout>
        <div className="posts-body">
          <h1 className="posts-body-heading">Bienvenue à l'étape finale</h1>
          {posts.length > 0 ? (
              <ul className="posts-list">
                {posts.map((post, index) => {
                  return (
                      <li key={index} className="post-item">
                        <div className="post-item-details">
                          <h2>{post.password}</h2>
                        </div>
                        {/!*<div className="post-item-actions">
                          <a href={`/posts/${post._id}`}>Edit</a>
                          <button onClick={() => handleDeletePost(post._id as string)}>
                            Delete
                          </button>
                        </div>*!/}
                      </li>
                  );
                })}
              </ul>
          ) : (
              <h2 className="posts-body-heading">Ooops! No posts added so far</h2>
          )}
        </div>
        <style jsx>
          {`
        .posts-body {
          width: 400px;
          margin: 10px auto;
        }
        .posts-body-heading {
          font-family: sans-serif;
        }
        .posts-list {
          list-style-type: none;
          display: block;
        }
        .post-item {
          width: 100%;
          padding: 10px;
          border: 1px solid #d5d5d5;
        }
        .post-item-actions {
          display: flex;
          justify-content: space-between;
        }
        .post-item-actions a {
          text-decoration: none;
        }
      `}
        </style>
      </Layout>
  );
}*/

/*
function App() {
    const [count, setCount] = useState(0);
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    useEffect(() => {
        // Charger le compteur à partir de la base de données au montage de l'application
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
        <div className="App">
            <h1>Compteur de mots de passe</h1>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Entrez le mot de passe" />
            <button onClick={checkPassword}>Valider</button>
            <p>{message}</p>
        </div>
    );
}*/
