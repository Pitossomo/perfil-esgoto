import { columns } from './columns'

export const Header = () => (
  <thead>
    <tr>
      { columns.map(col => (
        <th key={col.name}> {col.header} </th>
      ))}
    </tr>
    <tr>
      { columns.map(col => ( 
        col.name ? <td key={`unit-${col.name}`}>{col.unit}</td> : undefined
      ))}
    </tr>
  </thead>
);