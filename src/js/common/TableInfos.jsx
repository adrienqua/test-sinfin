import React from "react"


const TableInfos = ({title, data}) => {

    return (
        <tr>
            <th scope="row">{title}</th>
            <td>
            {data instanceof Array 
                ? 
                (
                <ul>
                    {data.map((item) => {
                        return <li key={item}>{item}</li>
                    }) 
                    }
                </ul>
                )
                :
                (data)
            }
            </td>
        </tr>                  
    )
}

export default TableInfos;