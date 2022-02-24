import { RepositoryItem } from './RepositoryItem'
const repository = {
    name: 'unform',
    description: 'Forms in React',
    link: 'https://github.com/unform/unform'
}
export function RepositoryList() {
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