"use client"
import ProtectedRouter from '@/components/protectedrouter/Protected'

export default function Dashboard() {

    const mockData = [
        { id: 1, name: 'Denis', email: 'test@example.com' },
        { id: 2, name: 'Testee', email: 'test@example.com' },
    ];

    return (
        <ProtectedRouter>
            <div className='container'>
                <h1>Bem vindo</h1>
                <h2>Lista</h2>
                <ul>
                    {mockData.map((contato) =>(
                        <li key={contato.id}>
                            {contato.name} - {contato.email}
                        </li>
                    ))}
                </ul>
            </div>
        </ProtectedRouter>
    )
}