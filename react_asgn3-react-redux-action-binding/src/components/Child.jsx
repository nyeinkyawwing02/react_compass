import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getUsers } from "../store/actions/usersAction"

const Child = ({ usersUi, FetchGetUser }) => {
    useEffect(() => {
        FetchGetUser()
    }, [])

    const handleEdit = () => {
        alert('ok');
    }
    const handleDelete = (user) => {
        alert('Are you sure you want to delete user with id ', user.id, ' ?');
    }

    return (
        <>
            <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                    <tr>
                        <th
                            scope="col"
                            className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                        >
                            ID
                        </th>
                        <th
                            scope="col"
                            className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                        >
                            Username
                        </th>
                        <th
                            scope="col"
                            className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                        >
                            Name
                        </th>
                        <th
                            scope="col"
                            className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                        >
                            Email
                        </th>
                        <th
                            scope="col"
                            className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase "
                        >
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                    {usersUi
                        ? (usersUi.map((user) => (
                            <tr key={user.id}>
                                <td className="px-6 py-4 text-sm text-left font-medium whitespace-nowrap">
                                    {user.id}
                                </td>
                                <td className="px-6 py-4 text-sm text-left whitespace-nowrap">
                                    {user.username}
                                </td>
                                <td className="px-6 py-4 text-sm text-left whitespace-nowrap">
                                    {user.name}
                                </td>
                                <td className="px-6 py-4 text-sm text-left whitespace-nowrap">
                                    {user.email}
                                </td>
                                <td className="px-6 py-4 text-sm text-right font-medium text-right whitespace-nowrap">
                                    <a
                                        className="text-green-500 hover:text-green-700 mr-5"
                                        href="#"
                                    >
                                        Edit
                                    </a>
                                    <a
                                        className="text-green-500 hover:text-green-700"
                                        href="#"
                                    >
                                        Delete
                                    </a>
                                </td>
                            </tr>
                        ))
                        ) : (
                            <tr>
                                <td colSpan={5}>
                                    No user records at the moment.
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </>
    )
}

const mapStateToProps = (state) => ({
    usersUi: state?.usersRoot?.users // api array
})
const mapDispatchToProps = {
    FetchGetUser: getUsers
}

export default connect(mapStateToProps, mapDispatchToProps)(Child)

