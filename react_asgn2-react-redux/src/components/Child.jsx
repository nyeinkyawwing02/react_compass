import React, { Children } from 'react'
import { connect } from 'react-redux'

const Child = ({ userUi }) => {
    const { id, username, name, email } = userUi ? userUi : {}
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
                    {userUi
                        ? (
                            <tr>
                                <td className="px-6 py-4 text-sm font-medium whitespace-nowrap">
                                    {id}
                                </td>
                                <td className="px-6 py-4 text-sm whitespace-nowrap">
                                    {username}
                                </td>
                                <td className="px-6 py-4 text-sm whitespace-nowrap">
                                    {name}
                                </td>
                                <td className="px-6 py-4 text-sm whitespace-nowrap">
                                    {email}
                                </td>
                                <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                                    <a
                                        className="text-green-500 hover:text-green-700"
                                        href="#"
                                    >
                                        Edit
                                    </a>
                                </td>
                            </tr>
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
    userUi: state?.userRoot
})

export default connect(mapStateToProps, null)(Child)
