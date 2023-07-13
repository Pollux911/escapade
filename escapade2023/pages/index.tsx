import {ChangeEvent, FormEvent, useState } from 'react';
import { useRouter } from 'next/router';
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
            let response = await fetch('http://localhost:3000/api/getPassword?password=' + password);
            let collection = await response.json();
            console.log(collection.password, 'la collec')
            const teamColor = JSON.stringify(collection.team)

            if (collection) {
                await fetch('http://localhost:3000/api/editCounter', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    }
                })
                let counter = await fetch('http://localhost:3000/api/getCounter');
                let count = await counter.json()

                const teamPosition = JSON.stringify(count.count)


                window.localStorage.setItem("teamColor", teamColor); // setting team color in localStorage to color the congrats page

                window.localStorage.setItem("teamPosition", teamPosition); // setting team position

                console.log('Mot de passe valide. Bravo !');

                router.push('/congrats')

            } else {
                console.log('Ca marche pas.');
            }

        } catch (error) {
            console.log("Mauvais mot de passe, c'est tchao ! ", error);
        }
    };

    return (
        <div>
            <h1>Welcome</h1>
            <form onSubmit={handleSubmit}>
                <input type="password" value={password} onChange={handleChange} />
                <button type="submit">Valider l'ultime réponse</button>
            </form>
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
