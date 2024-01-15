import { useState } from "react";

const ROWS = [
    {
        name: "BA Visual Communication",
        entity: "Lead",
        available: "To Anybody",
        active: "YES"
    },
    {
        name: "BA Visual Communication",
        entity: "Lead",
        available: "To Anybody",
        active: "YES"
    },
    {
        name: "BA Visual Communication",
        entity: "Lead",
        available: "To Anybody",
        active: "YES"
    },
    {
        name: "BA Visual Communication",
        entity: "Lead",
        available: "To Anybody",
        active: "YES"
    },
    {
        name: "BA Visual Communication",
        entity: "Lead",
        available: "To Anybody",
        active: "YES"
    },
    {
        name: "BA Visual Communication",
        entity: "Lead",
        available: "To Anybody",
        active: "YES"
    },
    {
        name: "BA Visual Communication",
        entity: "Lead",
        available: "To Anybody",
        active: "YES"
    },
    {
        name: "BA Visual Communication",
        entity: "Lead",
        available: "To Anybody",
        active: "YES"
    },
    {
        name: "BA Visual Communication",
        entity: "Lead",
        available: "To Anybody",
        active: "YES"
    },
    {
        name: "BA Visual Communication",
        entity: "Lead",
        available: "To Anybody",
        active: "YES"
    },
    {
        name: "BA Visual Communication",
        entity: "Lead",
        available: "To Anybody",
        active: "YES"
    },
    {
        name: "BA Visual Communication",
        entity: "Lead",
        available: "To Anybody",
        active: "YES"
    },
    {
        name: "BA Visual Communication",
        entity: "Lead",
        available: "To Anybody",
        active: "YES"
    },
    {
        name: "BA Visual Communication",
        entity: "Lead",
        available: "To Anybody",
        active: "YES"
    },
];

const Table: React.FC = () => {
    const [selectedRows, setSelectedRows] = useState<number[]>([]);

    const handleSelectRow = (index: number) => {
        if (index === -1) {
            // Select/Deselect all rows
            const allRowsIndexes = ROWS.map((_, i) => i);
            setSelectedRows(
                selectedRows.length === allRowsIndexes.length ? [] : allRowsIndexes
            );
        } else {
            // Select/Deselect individual row
            setSelectedRows((prevSelectedRows) =>
                prevSelectedRows.includes(index)
                    ? prevSelectedRows.filter((i) => i !== index)
                    : [...prevSelectedRows, index]
            );
        }
    };

    const isRowSelected = (index: number) => selectedRows.includes(index);

    return (
        <div className="w-full h-full m-2 flex flex-col">
            <div className="p-4 w-full h-full">
                <div className="w-full h-[72%] bg-white overflow-y-scroll overflow-x-scroll">
                    <table className="w-full">
                        <thead className="sticky top-0 w-full bg-gray-100">
                            <tr className="text-left w-full">
                                <th className="text-sm font-semibold px-4 py-2">
                                    <input
                                        type="checkbox"
                                        onChange={() => handleSelectRow(-1)}
                                        checked={selectedRows.length === ROWS.length}
                                    />
                                </th>
                                <th className="text-sm font-semibold px-4 py-2">Name</th>
                                <th className="text-sm font-semibold px-4 py-2">Entity</th>
                                <th className="text-sm font-semibold px-4 py-2">Available</th>
                                <th className="text-sm font-semibold px-4 py-2">Active</th>
                            </tr>
                        </thead>
                        <tbody className="text-center text-sm">
                            {ROWS.map((row, i) => (
                                <tr
                                    key={i}
                                    className={`border-2 h-12 text-start hover:border-blue-500 hover:bg-gray-100 select-none px-2 ${isRowSelected(i) ? "bg-gray-200" : ""
                                        }`}
                                >
                                    <td className="px-4 py-2">
                                        <input
                                            type="checkbox"
                                            checked={isRowSelected(i)}
                                            onChange={() => handleSelectRow(i)}
                                        />
                                    </td>
                                    <td className="px-4 py-2">{row.name}</td>
                                    <td className="px-4 py-2">{row.entity}</td>
                                    <td className="px-4 py-2">{row.available}</td>
                                    <td className="px-4 py-2">{row.active}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Table;
