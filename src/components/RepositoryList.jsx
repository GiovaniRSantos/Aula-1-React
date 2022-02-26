import { RepositoryItem } from './RepositoryItem'
import { useState, useEffect } from 'react';
// useEffect disparar uma funcao, quando tiver uma alteracao
import '../styles/repositories.scss';
const repository = {
    name: 'unform',
    description: 'Forms in React',
    link: 'https://github.com/unform/unform'
}
export function RepositoryList() {
    const [repositories, setRepositories] = useState([]);
    useEffect(() => {
        fetch('https://api.github.com/orgs/rocketseat/repos').then(response => response.json()).then(data => setRepositories(data))
    }, [repositories])

    return (
        <section className="repository-list">
            <h1>
                Lista de repositorios
                <ul>
                    <RepositoryItem repository={repository} />
                    <RepositoryItem repository={repository} />
                    <RepositoryItem repository={repository} />
                </ul>
            </h1>
        </section>
    )
}