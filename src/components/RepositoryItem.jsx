//props.repository para acessar o conteudo do RepositoryItem dentro do RepositoryList (props.repository ?? 'Default' caso o RepositoryItem nao tenha repository= setado, ele define como default "Default")
//o "?" na frente do repository, valida se o RepositoryItem possui o atributo repository, caso nao tenha, ele define como default
export function RepositoryItem(props) {
    return (
        <li>
            <strong>
                {props.repository?.name ?? 'Default'}
                <p>
                    {props.repository?.description ?? 'Description Default'}
                </p>
                <a href={props.repository.link}>Acessar repositorio</a>
            </strong>
        </li>
    )
}