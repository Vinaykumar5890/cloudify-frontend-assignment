import {useState} from 'react'
import './App.css' // External CSS file

const App = () => {
  const [rows, setRows] = useState([{singleSelect: '', multiSelect: []}])
  const [singleOptions, setSingleOptions] = useState([
    'Apple',
    'Banana',
    'Cherry',
    'Date',
    'PineApple',
    'GreenApple',
  ])
  const [multiOptions, setMultiOptions] = useState([
    'Red',
    'Green',
    'Blue',
    'Yellow',
  ])
  const [newOption, setNewOption] = useState('')

  const handleSingleSelectChange = (value, rowIndex) => {
    const updatedRows = rows.map((row, index) => {
      if (index === rowIndex) {
        return {...row, singleSelect: value}
      }
      return row
    })
    setRows(updatedRows)
  }

  const handleMultiSelectChange = (value, rowIndex) => {
    const updatedRows = rows.map((row, index) => {
      if (index === rowIndex) {
        const multiSelect = row.multiSelect.includes(value)
          ? row.multiSelect.filter(option => option !== value)
          : [...row.multiSelect, value]
        return {...row, multiSelect}
      }
      return row
    })
    setRows(updatedRows)
  }

  const handleAddNewOption = () => {
    if (newOption.trim() && !multiOptions.includes(newOption)) {
      setMultiOptions([...multiOptions, newOption])
      setNewOption('')
    }
  }

  const addRow = () => {
    setRows([...rows, {singleSelect: '', multiSelect: []}])
  }

  return (
    <div className="app-container">
      <table className="custom-table">
        <thead>
          <tr>
            <th>Fruits</th>
            <th>Colors</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr>
              <td>
                <select
                  className="custom-select"
                  value={row.singleSelect}
                  onChange={e =>
                    handleSingleSelectChange(e.target.value, rowIndex)
                  }
                >
                  <option value="">Select Option</option>
                  {singleOptions.map(option => {
                    if (row.singleSelect === option) {
                      return (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      )
                    }
                    if (!rows.some(r => r.singleSelect === option)) {
                      return (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      )
                    }
                    return null // Explicitly return null for options that don't meet any condition
                  })}
                </select>
              </td>
              <td>
                <div className="multi-select-container">
                  {multiOptions.map(option => (
                    <label className="multi-select-option">
                      <input
                        type="checkbox"
                        checked={row.multiSelect.includes(option)}
                        onChange={() =>
                          handleMultiSelectChange(option, rowIndex)
                        }
                      />
                      {option}
                    </label>
                  ))}
                  <div className="add-option-container">
                    <input
                      type="text"
                      value={newOption}
                      onChange={e => setNewOption(e.target.value)}
                      placeholder="Add New Color"
                    />
                    <button
                      type="button"
                      onClick={handleAddNewOption}
                      className="add-row-button"
                    >
                      + Add
                    </button>
                  </div>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="add-button-container">
        <button className="add-row-button" type="button" onClick={addRow}>
          + Add New Row
        </button>
      </div>
    </div>
  )
}

export default App
