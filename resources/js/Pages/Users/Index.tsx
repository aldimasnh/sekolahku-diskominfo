import { Head, Link } from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

const UsersIndex = ({ users }: { users: any[] }) => {
    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Menu User
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="p-6 flex flex-col gap-4">
                            <Link
                                href={route("users.create")}
                                className="ml-auto bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
                            >
                                Tambah User
                            </Link>

                            <div className="overflow-x-auto">
                                <table className="min-w-full border border-gray-300">
                                    <thead>
                                        <tr className="bg-gray-100">
                                            <th className="px-4 py-2 border border-gray-300 text-left text-gray-700">
                                                Username
                                            </th>
                                            <th className="px-4 py-2 border border-gray-300 text-left text-gray-700">
                                                Email
                                            </th>
                                            <th className="px-4 py-2 border border-gray-300 text-left text-gray-700">
                                                Aksi
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {users.map((user) => (
                                            <tr key={user.id}>
                                                <td className="px-4 py-2 border border-gray-300 text-left text-gray-700">
                                                    {user.username}
                                                </td>
                                                <td className="px-4 py-2 border border-gray-300 text-left text-gray-700">
                                                    {user.email}
                                                </td>
                                                <td className="px-4 py-2 border border-gray-300 text-left text-gray-700">
                                                    <div className="flex gap-3">
                                                        <Link
                                                            href={`/users/${user.id}/edit`}
                                                            className="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-1.5 px-3 rounded"
                                                        >
                                                            Perbarui
                                                        </Link>
                                                        <Link
                                                            href="#"
                                                            className="bg-red-500 hover:bg-red-600 text-white font-semibold py-1.5 px-3 rounded"
                                                        >
                                                            Hapus
                                                        </Link>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default UsersIndex;
