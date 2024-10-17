// @ts-check

/**
 * @param {{
 *   breeds: string[],
 *   selectedBreed: string,
 *   setSelectedBreed: React.Dispatch<React.SetStateAction<string>>
 * }} props
 */
export const BreedsSelect = ({ breeds, selectedBreed, setSelectedBreed }) => {
  return (
    <>
      <select value={selectedBreed} onChange={(e) => setSelectedBreed(e.target.value)}>
        {breeds.map((breed) => (
          <option key={breed} value={breed}>
            {breed}
          </option>
        ))}
      </select>
    </>
  )
}

export default BreedsSelect
