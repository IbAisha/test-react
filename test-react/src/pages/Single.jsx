import {useParams} from 'react-router-dom';

export function Signle () {
    const {id} = useParams()

    return <div>
        <h1>Article</h1>
        </div>
}