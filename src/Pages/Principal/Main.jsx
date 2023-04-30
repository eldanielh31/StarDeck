import React from 'react'
import { Link } from 'react-router-dom'

function Main() {

    return (
        <div>
            <Link to={'/createplanet'}>
                <button>Create Planet </button>
            </Link>
            <Link to={'/createcard'}>
                <button> Create Card </button>
            </Link>

        </div>
    )
}

export default Main